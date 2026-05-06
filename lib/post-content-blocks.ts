import type { Post } from "@/lib/generated/prisma";
import { buildAllVideoUrls, buildGalleryImageUrls } from "@/lib/post-gallery";
import { stripRepostAttributionFromText } from "@/lib/strip-repost-attribution";

export type ContentBlock =
  | { type: "text"; text: string }
  | { type: "video"; src: string; poster?: string | null }
  | { type: "images"; urls: string[] };

const PLACEHOLDER_COVER_RE = /^\/assets\/cover-/;

/** 解析后台保存的 JSON 混排块；无效则返回 null */
export function parseContentBlocks(raw: string | null | undefined): ContentBlock[] | null {
  if (!raw?.trim()) return null;
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data) || data.length === 0) return null;
    const out: ContentBlock[] = [];
    for (const item of data) {
      if (!item || typeof item !== "object") continue;
      const o = item as Record<string, unknown>;
      if (o.type === "text" && typeof o.text === "string") {
        out.push({ type: "text", text: o.text });
      } else if (o.type === "video" && typeof o.src === "string") {
        out.push({
          type: "video",
          src: o.src,
          poster: typeof o.poster === "string" ? o.poster : null
        });
      } else if (o.type === "images" && Array.isArray(o.urls)) {
        const urls = o.urls.filter((u): u is string => typeof u === "string" && u.length > 0);
        if (urls.length) out.push({ type: "images", urls });
      }
    }
    return out.length ? out : null;
  } catch {
    return null;
  }
}

/**
 * 前台混排：优先 `contentBlocks` JSON；
 * 否则用正文 + 视频 + 图/封面按「文字在前、多媒体在后」自动组装（与设计图一致）。
 */
function stripTextBlocks(blocks: ContentBlock[]): ContentBlock[] {
  return blocks
    .map((b) => (b.type === "text" ? { ...b, text: stripRepostAttributionFromText(b.text) } : b))
    .filter((b) => !(b.type === "text" && !b.text.trim()));
}

/**
 * H5 详情：正文单独用「摘要引用」样式展示时，若混排首块 text 与库里的 body 一致则去掉，避免重复。
 */
export function dropLeadingTextBlockIfEqualsBody(blocks: ContentBlock[], rawBody: string): ContentBlock[] {
  const bodyNorm = stripRepostAttributionFromText(rawBody.trim());
  if (!bodyNorm) return blocks;
  const first = blocks[0];
  if (!first || first.type !== "text") return blocks;
  const firstNorm = stripRepostAttributionFromText(first.text.trim());
  if (firstNorm === bodyNorm) return blocks.slice(1);
  return blocks;
}

export function buildRenderableBlocks(post: Post): ContentBlock[] {
  const parsed = parseContentBlocks(post.contentBlocks);
  if (parsed?.length) return stripTextBlocks(parsed);

  const blocks: ContentBlock[] = [];
  const body = stripRepostAttributionFromText(post.body?.trim() ?? "");
  if (body) blocks.push({ type: "text", text: body });

  const videoUrls = buildAllVideoUrls(post);
  const hasAnyVideo = videoUrls.length > 0;
  const cover = post.coverUrl?.trim();
  const poster = cover && !PLACEHOLDER_COVER_RE.test(cover) ? cover : null;
  for (const src of videoUrls) {
    blocks.push({ type: "video", src, poster });
  }

  let imageUrls: string[] = [];
  if (post.type === "GALLERY") {
    imageUrls = buildGalleryImageUrls(post);
  } else if (post.coverUrl && !PLACEHOLDER_COVER_RE.test(post.coverUrl)) {
    imageUrls = [post.coverUrl];
  }

  if (imageUrls.length > 0) {
    if (!hasAnyVideo) {
      blocks.push({ type: "images", urls: imageUrls });
    } else if (post.type === "GALLERY") {
      blocks.push({ type: "images", urls: imageUrls });
    }
  }

  return blocks;
}
