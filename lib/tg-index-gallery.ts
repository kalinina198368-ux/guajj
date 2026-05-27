import type { TgIndexedMessage } from "@/lib/generated/prisma";

export function parseIndexGalleryExtras(raw: string | null | undefined): string[] {
  if (!raw?.trim()) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((u): u is string => typeof u === "string" && u.trim().length > 0)
      : [];
  } catch {
    return [];
  }
}

/** 封面 mediaUrl + galleryImageUrls（去重，顺序与 Post 图集一致） */
export function buildIndexGalleryImageUrls(item: TgIndexedMessage): string[] {
  const extras = parseIndexGalleryExtras(item.galleryImageUrls);
  const cover = item.mediaUrl?.trim();
  if (item.contentType === "PHOTO" || extras.length > 0) {
    if (!cover) return extras.filter(Boolean);
    return [cover, ...extras.filter((u) => u && u !== cover)];
  }
  // 非 PHOTO 且无 galleryImageUrls：仅有 mediaUrl 时作封面图（如 VIDEO 缩略图）
  if (cover && !item.galleryVideoUrls) {
    return [cover];
  }
  return [];
}

export function buildIndexAllVideoUrls(item: TgIndexedMessage): string[] {
  const out: string[] = [];
  const main = item.contentType === "VIDEO" ? item.mediaUrl?.trim() : null;
  if (main) out.push(main);
  for (const u of parseIndexGalleryExtras(item.galleryVideoUrls)) {
    if (u && !out.includes(u)) out.push(u);
  }
  return out;
}
