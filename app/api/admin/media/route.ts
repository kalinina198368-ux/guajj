import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { MediaType } from "@/lib/generated/prisma";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const ext = path.extname(file.name).toLowerCase() || "";
  const safeName = `${Date.now()}-${crypto.randomUUID()}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, safeName), bytes);

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
