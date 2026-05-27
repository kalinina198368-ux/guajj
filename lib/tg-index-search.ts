import type { Prisma, TgIndexedMessage } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";

export const VIP_SEARCH_PAGE_SIZE = 15;

export type VipSearchResult = {
  items: TgIndexedMessage[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

function isMysqlDatabase() {
  return (process.env.DATABASE_URL ?? "").startsWith("mysql");
}

function buildSearchWhere(q: string): Prisma.TgIndexedMessageWhereInput {
  const trimmed = q.trim();
  return {
    OR: [
      { title: { contains: trimmed } },
      { snippet: { contains: trimmed } },
      { rawText: { contains: trimmed } },
      { sourceTitle: { contains: trimmed } },
      { sourceUsername: { contains: trimmed } }
    ]
  };
}

type IndexedMessageRow = {
  id: string;
  chatId: string;
  messageId: number;
  messageDate: Date;
  contentType: TgIndexedMessage["contentType"];
  title: string;
  snippet: string;
  rawText: string;
  sourceTitle: string | null;
  sourceUsername: string | null;
  durationSec: number | null;
  mediaUrl: string | null;
  galleryImageUrls: string | null;
  galleryVideoUrls: string | null;
  contentBlocks: string | null;
  mediaGroupId: string | null;
  createdAt: Date;
};

async function searchIndexedMessagesFulltext(
  trimmed: string,
  safePage: number,
  pageSize: number
): Promise<VipSearchResult> {
  const offset = (safePage - 1) * pageSize;
  const like = `%${trimmed}%`;

  const [rows, countRows] = await Promise.all([
    prisma.$queryRaw<IndexedMessageRow[]>`
      SELECT
        id, chatId, messageId, messageDate, contentType, title, snippet, rawText,
        sourceTitle, sourceUsername, durationSec, mediaUrl,
        galleryImageUrls, galleryVideoUrls, contentBlocks, mediaGroupId, createdAt
      FROM TgIndexedMessage
      WHERE MATCH(title, snippet, rawText) AGAINST (${trimmed} IN NATURAL LANGUAGE MODE)
         OR title LIKE ${like}
         OR snippet LIKE ${like}
         OR sourceTitle LIKE ${like}
      ORDER BY messageDate DESC, id DESC
      LIMIT ${pageSize} OFFSET ${offset}
    `,
    prisma.$queryRaw<[{ cnt: bigint }]>`
      SELECT COUNT(*) AS cnt
      FROM TgIndexedMessage
      WHERE MATCH(title, snippet, rawText) AGAINST (${trimmed} IN NATURAL LANGUAGE MODE)
         OR title LIKE ${like}
         OR snippet LIKE ${like}
         OR sourceTitle LIKE ${like}
    `
  ]);

  const total = Number(countRows[0]?.cnt ?? 0);
  const totalPages = Math.max(0, Math.ceil(total / pageSize));
  const clampedPage = totalPages > 0 ? Math.min(safePage, totalPages) : 1;

  return {
    items: rows as TgIndexedMessage[],
    total,
    page: clampedPage,
    pageSize,
    totalPages
  };
}

async function searchIndexedMessagesContains(
  trimmed: string,
  safePage: number,
  pageSize: number
): Promise<VipSearchResult> {
  const where = buildSearchWhere(trimmed);
  const total = await prisma.tgIndexedMessage.count({ where });
  const totalPages = Math.max(0, Math.ceil(total / pageSize));
  const clampedPage = totalPages > 0 ? Math.min(safePage, totalPages) : 1;

  const items = await prisma.tgIndexedMessage.findMany({
    where,
    orderBy: [{ messageDate: "desc" }, { id: "desc" }],
    skip: (clampedPage - 1) * pageSize,
    take: pageSize
  });

  return {
    items,
    total,
    page: clampedPage,
    pageSize,
    totalPages
  };
}

export async function searchIndexedMessages(
  q: string,
  page: number,
  pageSize = VIP_SEARCH_PAGE_SIZE
): Promise<VipSearchResult> {
  const trimmed = q.trim();
  const safePage = Math.max(1, Math.floor(page) || 1);
  if (!trimmed) {
    return { items: [], total: 0, page: safePage, pageSize, totalPages: 0 };
  }

  if (isMysqlDatabase()) {
    return searchIndexedMessagesFulltext(trimmed, safePage, pageSize);
  }
  return searchIndexedMessagesContains(trimmed, safePage, pageSize);
}

export async function getIndexedMessage(id: string) {
  return prisma.tgIndexedMessage.findUnique({ where: { id } });
}

/** 热搜：按标题出现频次近似（演示 / 索引较少时兜底） */
export async function getVipHotKeywords(limit = 8): Promise<string[]> {
  const rows = await prisma.tgIndexedMessage.findMany({
    select: { title: true },
    orderBy: { messageDate: "desc" },
    take: 80
  });
  const seen = new Set<string>();
  const out: string[] = [];
  for (const row of rows) {
    const word = row.title.replace(/\s+/g, "").slice(0, 12);
    if (word.length < 2 || seen.has(word)) continue;
    seen.add(word);
    out.push(word);
    if (out.length >= limit) break;
  }
  return out;
}
