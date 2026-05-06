import type { Post } from "@/lib/generated/prisma";

export function parseGalleryExtras(galleryImageUrls: string | null | undefined): string[] {
  if (!galleryImageUrls) return [];
  try {
    const parsed = JSON.parse(galleryImageUrls) as unknown;
    return Array.isArray(parsed) ? parsed.filter((u): u is string => typeof u === "string") : [];
  } catch {
    return [];
  }
}

/** 图集：封面 + 额外图（去重），详情页与后台预览共用 */
export function buildGalleryImageUrls(post: Post): string[] {
  if (post.type !== "GALLERY") return [];
  const extras = parseGalleryExtras(post.galleryImageUrls);
  return [post.coverUrl, ...extras.filter((u) => u && u !== post.coverUrl)];
}

export function parseGalleryVideos(galleryVideoUrls: string | null | undefined): string[] {
  if (!galleryVideoUrls?.trim()) return [];
  try {
    const parsed = JSON.parse(galleryVideoUrls) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((u): u is string => typeof u === "string" && u.trim().length > 0).map((s) => s.trim())
      : [];
  } catch {
    return [];
  }
}

/** 主视频 + 额外视频（去重，顺序：videoUrl 在前） */
export function buildAllVideoUrls(post: Post): string[] {
  const out: string[] = [];
  const main = post.videoUrl?.trim();
  if (main) out.push(main);
  for (const u of parseGalleryVideos(post.galleryVideoUrls)) {
    if (u && !out.includes(u)) out.push(u);
  }
  return out;
}
