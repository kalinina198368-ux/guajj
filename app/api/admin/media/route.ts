import crypto from "crypto";
import { createWriteStream } from "fs";
import { mkdir, unlink } from "fs/promises";
import path from "path";
import type { ReadableStream as NodeReadableStream } from "stream/web";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
import { NextResponse } from "next/server";
import { getAdminUploadMaxBytes, getAdminUploadMaxMb } from "@/lib/admin-upload-limits";
import { MediaType } from "@/lib/generated/prisma";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

/** Vercel 等平台延长等待时间；自托管 Node 一般忽略 */
export const maxDuration = 300;

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const maxBytes = getAdminUploadMaxBytes();
  const maxMb = getAdminUploadMaxMb();

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  if (file.size > maxBytes) {
    return NextResponse.json(
      {
        error: "文件超过后台允许的单文件大小上限",
        maxMb,
        sizeMb: Math.ceil((file.size / (1024 * 1024)) * 10) / 10
      },
      { status: 413 }
    );
  }

  const ext = path.extname(file.name).toLowerCase() || "";
  const safeName = `${Date.now()}-${crypto.randomUUID()}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });
  const outPath = path.join(uploadDir, safeName);

  try {
    await pipeline(Readable.fromWeb(file.stream() as unknown as NodeReadableStream), createWriteStream(outPath));
  } catch (err) {
    await unlink(outPath).catch(() => {});
    console.error("[admin/media] write failed", err);
    return NextResponse.json({ error: "写入磁盘失败" }, { status: 500 });
  }

  const mediaType = file.type.startsWith("image/")
    ? MediaType.IMAGE
    : file.type.startsWith("video/")
      ? MediaType.VIDEO
      : MediaType.OTHER;

  const media = await prisma.mediaAsset.create({
    data: {
      filename: file.name,
      url: `/uploads/${safeName}`,
      type: mediaType,
      size: file.size
    }
  });

  return NextResponse.json(media);
}
