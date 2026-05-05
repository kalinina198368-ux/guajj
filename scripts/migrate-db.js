const fs = require("fs");
const path = require("path");
const initSqlJs = require("sql.js");

const dbPath = path.join(__dirname, "..", "prisma", "dev.db");

async function main() {
  if (!fs.existsSync(dbPath)) {
    console.error(`Database not found: ${dbPath}. Run npm.cmd run setup first.`);
    process.exit(1);
  }

  const SQL = await initSqlJs();
  const db = new SQL.Database(fs.readFileSync(dbPath));

  db.run(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS "TelegramConfig" (
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

    CREATE UNIQUE INDEX IF NOT EXISTS "TelegramConfig_webhookSecret_key" ON "TelegramConfig"("webhookSecret");

    CREATE TABLE IF NOT EXISTS "TelegramImport" (
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

    CREATE UNIQUE INDEX IF NOT EXISTS "TelegramImport_chatId_messageId_key" ON "TelegramImport"("chatId", "messageId");
    CREATE INDEX IF NOT EXISTS "TelegramImport_chatId_mediaGroupId_idx" ON "TelegramImport"("chatId", "mediaGroupId");
  `);

  const migrateSteps = [
    `DROP INDEX IF EXISTS "TelegramImport_postId_key";`,
    `ALTER TABLE "Post" ADD COLUMN "galleryImageUrls" TEXT;`,
    `ALTER TABLE "TelegramImport" ADD COLUMN "mediaGroupId" TEXT;`,
    `CREATE INDEX IF NOT EXISTS "TelegramImport_chatId_mediaGroupId_idx" ON "TelegramImport"("chatId", "mediaGroupId");`
  ];
  for (const sql of migrateSteps) {
    try {
      db.run(sql);
    } catch {
      /* duplicate column / missing index name */
    }
  }

  fs.writeFileSync(dbPath, Buffer.from(db.export()));
  console.log(`Database migrated at ${dbPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
