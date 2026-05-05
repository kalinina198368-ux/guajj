const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const initSqlJs = require("sql.js");

const dbPath = path.join(__dirname, "..", "prisma", "dev.db");

function cuid(prefix = "c") {
  return `${prefix}${Date.now().toString(36)}${crypto.randomBytes(8).toString("hex")}`;
}

function passwordHash(password) {
  const salt = "local-seed-salt";
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return `pbkdf2$${salt}$${hash}`;
}

function now() {
  return new Date().toISOString();
}

async function main() {
  const SQL = await initSqlJs();
  const db = new SQL.Database();

  db.run(`
    PRAGMA foreign_keys = ON;
    CREATE TABLE "AdminUser" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "username" TEXT NOT NULL,
      "passwordHash" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL
    );
    CREATE UNIQUE INDEX "AdminUser_username_key" ON "AdminUser"("username");

    CREATE TABLE "Category" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "name" TEXT NOT NULL,
      "slug" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
    CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

    CREATE TABLE "Tag" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "name" TEXT NOT NULL,
      "slug" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");
    CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

    CREATE TABLE "Post" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "title" TEXT NOT NULL,
      "summary" TEXT NOT NULL,
      "body" TEXT NOT NULL,
      "type" TEXT NOT NULL DEFAULT 'ARTICLE',
      "status" TEXT NOT NULL DEFAULT 'DRAFT',
      "coverUrl" TEXT NOT NULL,
      "videoUrl" TEXT,
      "galleryImageUrls" TEXT,
      "isPinned" BOOLEAN NOT NULL DEFAULT false,
      "heat" INTEGER NOT NULL DEFAULT 100,
      "views" INTEGER NOT NULL DEFAULT 0,
      "publishedAt" DATETIME,
      "categoryId" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL,
      CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
    );

    CREATE TABLE "PostTag" (
      "postId" TEXT NOT NULL,
      "tagId" TEXT NOT NULL,
      PRIMARY KEY ("postId", "tagId"),
      CONSTRAINT "PostTag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT "PostTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
    );

    CREATE TABLE "MediaAsset" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "filename" TEXT NOT NULL,
      "url" TEXT NOT NULL,
      "type" TEXT NOT NULL,
      "size" INTEGER NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE "TelegramConfig" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "botToken" TEXT NOT NULL,
      "channelId" TEXT NOT NULL,
      "channelName" TEXT,
      "webhookSecret" TEXT NOT NULL,
      "defaultCategoryId" TEXT NOT NULL,
      "defaultStatus" TEXT NOT NULL DEFAULT 'DRAFT',
      "autoPublish" BOOLEAN NOT NULL DEFAULT false,
      "downloadMedia" BOOLEAN NOT NULL DEFAULT true,
      "isEnabled" BOOLEAN NOT NULL DEFAULT false,
      "lastUpdateId" INTEGER,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL,
      CONSTRAINT "TelegramConfig_defaultCategoryId_fkey" FOREIGN KEY ("defaultCategoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
    );
    CREATE UNIQUE INDEX "TelegramConfig_webhookSecret_key" ON "TelegramConfig"("webhookSecret");

    CREATE TABLE "TelegramImport" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "updateId" INTEGER,
      "messageId" INTEGER NOT NULL,
      "chatId" TEXT NOT NULL,
      "chatTitle" TEXT,
      "rawText" TEXT NOT NULL,
      "mediaType" TEXT,
      "mediaUrl" TEXT,
      "mediaGroupId" TEXT,
      "postId" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "TelegramImport_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
    );
    CREATE UNIQUE INDEX "TelegramImport_chatId_messageId_key" ON "TelegramImport"("chatId", "messageId");
    CREATE INDEX "TelegramImport_chatId_mediaGroupId_idx" ON "TelegramImport"("chatId", "mediaGroupId");
  `);

  const categories = [
    ["娱乐", "entertainment"],
    ["网红", "influencer"],
    ["影视", "film"],
    ["综艺", "variety"],
    ["直播", "live"],
    ["职场", "workplace"]
  ].map(([name, slug]) => ({ id: cuid("cat"), name, slug }));

  const tags = [
    ["热瓜", "hot"],
    ["图文", "article"],
    ["视频", "video"],
    ["时间线", "timeline"],
    ["幕后", "behind"],
    ["轻讨论", "talk"]
  ].map(([name, slug]) => ({ id: cuid("tag"), name, slug }));

  const categoryBySlug = Object.fromEntries(categories.map((item) => [item.slug, item]));
  const tagBySlug = Object.fromEntries(tags.map((item) => [item.slug, item]));

  db.run(`INSERT INTO "AdminUser" ("id", "username", "passwordHash", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?)`, [
    cuid("adm"),
    "admin",
    passwordHash("admin123456"),
    now(),
    now()
  ]);

  for (const item of categories) {
    db.run(`INSERT INTO "Category" ("id", "name", "slug", "createdAt") VALUES (?, ?, ?, ?)`, [item.id, item.name, item.slug, now()]);
  }

  for (const item of tags) {
    db.run(`INSERT INTO "Tag" ("id", "name", "slug", "createdAt") VALUES (?, ?, ?, ?)`, [item.id, item.name, item.slug, now()]);
  }

  const posts = [
    ["晚间热瓜：新综艺录制路透连出三波反转", "从排练动线到嘉宾互动，今晚的线索被整理成一条清晰时间线。", "今晚的热度主要来自一档新综艺的录制路透。第一波是现场观众提到舞台互动比预告更密集，第二波是工作人员调整流程后，嘉宾分组出现变化，第三波则是官方物料提前释放了新主题。当前能确定的是节目正在加速预热，具体名场面仍要等正式播出后再判断。\n\n吃瓜建议：先看时间线，再看官方释出的完整版本，避免被片段剪辑带偏。", "ARTICLE", "/assets/cover-spotlight.svg", null, 1, 982, "variety", ["hot", "timeline", "talk"]],
    ["直播间小风波：一场临时改价引发弹幕热议", "品牌方、主播间和用户侧各有说法，真正关键是规则是否提前说明。", "一场直播活动里，部分商品在短时间内出现价格调整，弹幕因此快速升温。复盘下来，争议点并不在于优惠本身，而在于用户是否能提前看到清晰规则。若后续要平息讨论，最有效的方式不是情绪回应，而是公开说明库存、时间和补偿边界。\n\n目前内容为虚构案例，用于展示吃瓜网的信息编排方式。", "ARTICLE", "/assets/cover-live.svg", null, 0, 731, "live", ["article", "talk"]],
    ["短视频区：片场花絮三十秒预览", "视频内容位已经打通，后台上传 MP4 后可直接替换播放。", "这个条目用于展示视频内容卡片和详情页播放器。首版默认展示封面和播放器区域，后台上传视频后会显示真实播放源。", "VIDEO", "/assets/cover-stage.svg", "", 1, 668, "film", ["video", "behind"]],
    ["图集：城市大屏物料更新，粉丝开始猜新代言", "从画面色彩到发布时间，大家把细节都翻了一遍。", "城市大屏物料更新后，讨论点集中在发布时间、色彩风格和品牌露出位置。虽然猜测很多，但在正式官宣前只能把它当作营销预热观察。\n\n后台可以把这类内容设置为图文或图集，并上传多张图片后写入正文。", "GALLERY", "/assets/cover-city.svg", null, 0, 544, "entertainment", ["article", "behind"]],
    ["职场边角料：经纪团队换班后节奏明显变快", "宣发节奏、物料密度和商务出现频率，是判断团队变化的三个窗口。", "最近几个虚构艺人项目的排期被重新整理后，一个明显现象是宣发动作更集中。团队换班并不一定意味着方向大改，但会影响对外沟通的速度和内容密度。对于吃瓜群众来说，看长期节奏比看单个物料更有价值。", "ARTICLE", "/assets/cover-studio.svg", null, 0, 493, "workplace", ["timeline", "talk"]]
  ];

  for (const [title, summary, body, type, coverUrl, videoUrl, isPinned, heat, categorySlug, tagSlugs] of posts) {
    const postId = cuid("post");
    db.run(
      `INSERT INTO "Post" ("id", "title", "summary", "body", "type", "status", "coverUrl", "videoUrl", "isPinned", "heat", "views", "publishedAt", "categoryId", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, 'PUBLISHED', ?, ?, ?, ?, 0, ?, ?, ?, ?)`,
      [postId, title, summary, body, type, coverUrl, videoUrl, isPinned, heat, now(), categoryBySlug[categorySlug].id, now(), now()]
    );
    for (const slug of tagSlugs) {
      db.run(`INSERT INTO "PostTag" ("postId", "tagId") VALUES (?, ?)`, [postId, tagBySlug[slug].id]);
    }
  }

  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  fs.writeFileSync(dbPath, Buffer.from(db.export()));
  console.log(`SQLite database initialized at ${dbPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
