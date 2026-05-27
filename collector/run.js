/**
 * 长期监听源频道新消息 → 写入 TgIndexedMessage
 * 用法: npm run collector
 */
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { NewMessage } = require("telegram/events");
const { requireEnv, readSession } = require("./config");
const { messageToIndexPayload, peerIdToChatId } = require("./parse");
const { normalizeChatId } = require("./chat-id");
const { buildAlbumPayload, attachMediaFields } = require("./album-merge");
const { isMediaDownloadEnabled } = require("./media-download");
const { createPrisma, upsertIndexedMessage } = require("../lib/tg-index-ingest");

async function loadSources(prisma) {
  return prisma.tgSourceChannel.findMany({
    where: { isEnabled: true, chatId: { not: null } }
  });
}

async function main() {
  const { apiId, apiHash, sessionFile } = requireEnv();
  const session = readSession(sessionFile);
  if (!session) {
    throw new Error("未找到 session，请先运行: npm run collector:login");
  }

  const prisma = createPrisma();
  const sources = await loadSources(prisma);
  if (sources.length === 0) {
    throw new Error("没有已启用的源频道。请编辑 collector/channels.json 后执行 npm run collector:sync-channels");
  }

  const chatIdSet = new Set(sources.map((s) => normalizeChatId(s.chatId)));
  const sourceByChatId = Object.fromEntries(
    sources.map((s) => [normalizeChatId(s.chatId), s])
  );

  const client = new TelegramClient(new StringSession(session), apiId, apiHash, {
    connectionRetries: 5
  });
  await client.connect();
  const me = await client.getMe();
  console.log(
    `采集已启动 (${me.firstName || me.id})，监听 ${sources.length} 个频道…` +
      (isMediaDownloadEnabled() ? " [媒体下载:开]" : " [媒体下载:关]")
  );
  for (const s of sources) {
    console.log(`  - ${s.title || s.username} (${s.chatId})`);
  }

  const albumBuffer = new Map();

  async function flushAlbum(groupKey) {
    const items = albumBuffer.get(groupKey);
    if (!items?.length) return;
    albumBuffer.delete(groupKey);
    const source = sourceByChatId[items[0].chatId];
    const payload = await buildAlbumPayload(client, items, items[0].chatId, {
      title: source?.title,
      username: source?.username
    });
    await upsertIndexedMessage(prisma, {
      chatId: items[0].chatId,
      ...payload
    });
    const nImg =
      (payload.mediaUrl ? 1 : 0) +
      (payload.galleryImageUrls
        ? (() => {
            try {
              return JSON.parse(payload.galleryImageUrls).length;
            } catch {
              return 0;
            }
          })()
        : 0);
    const mediaHint = nImg > 1 ? ` +${nImg}图` : payload.mediaUrl ? " +媒体" : "";
    console.log(
      `[相册] ${items[0].chatId}/${payload.messageId} ${payload.title.slice(0, 40)}${mediaHint}`
    );
  }

  client.addEventHandler(
    async (event) => {
      try {
        const msg = event.message;
        if (!msg || !msg.id) return;

        const chatId = normalizeChatId(peerIdToChatId(event.chatId));
        if (!chatId || !chatIdSet.has(chatId)) return;

        const source = sourceByChatId[chatId];
        const payload = messageToIndexPayload(msg, {
          title: source.title,
          username: source.username
        });

        if (payload.mediaGroupId) {
          const key = `${chatId}:${payload.mediaGroupId}`;
          if (!albumBuffer.has(key)) {
            albumBuffer.set(key, []);
            setTimeout(() => flushAlbum(key), 2500);
          }
          albumBuffer.get(key).push({ msg, chatId, payload });
          return;
        }

        await attachMediaFields(client, msg, payload, chatId);
        await upsertIndexedMessage(prisma, { chatId, ...payload });
        const mediaHint = payload.mediaUrl ? " +媒体" : "";
        console.log(
          `[消息] ${chatId}/${payload.messageId} ${payload.contentType} ${payload.title.slice(0, 50)}${mediaHint}`
        );

        await prisma.tgSourceChannel.update({
          where: { id: source.id },
          data: {
            lastMessageId: Math.max(source.lastMessageId || 0, msg.id),
            updatedAt: new Date()
          }
        });
      } catch (err) {
        console.error("处理消息失败:", err.message);
      }
    },
    new NewMessage({})
  );

  process.on("SIGINT", async () => {
    console.log("\n正在退出…");
    await client.disconnect();
    await prisma.$disconnect();
    process.exit(0);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
