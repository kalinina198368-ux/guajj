import type { Post } from "@/lib/generated/prisma";
import { buildRenderableBlocks } from "@/lib/post-content-blocks";

export type HomeListTile =
  | { kind: "image"; url: string }
  | { kind: "video"; url: string; poster?: string | null };

/**
 * 首页列表拼版：从混排块 / 正文中抽出所有图片与视频 URL，顺序与详情页一致。
 */
export function extractListMediaTiles(post: Post): HomeListTile[] {
  const tiles: HomeListTile[] = [];
  for (const b of buildRenderableBlocks(post)) {
    if (b.type === "images") {
      for (const url of b.urls) {
        if (url) tiles.push({ kind: "image", url });
      }
    } else if (b.type === "video") {
      tiles.push({ kind: "video", url: b.src, poster: b.poster ?? undefined });
    }
  }
  if (tiles.length === 0 && post.coverUrl) {
    tiles.push({ kind: "image", url: post.coverUrl });
  }
  return tiles;
}
