import type { Category, Post, PostTag, Tag } from "@/lib/generated/prisma";

export type PostWithCategoryTags = Post & {
  category: Category;
  tags: Array<PostTag & { tag: Tag }>;
};

function parseGalleryExtras(galleryImageUrls: string | null | undefined): string[] {
  if (!galleryImageUrls) return [];
  try {
    const parsed = JSON.parse(galleryImageUrls) as unknown;
    return Array.isArray(parsed) ? parsed.filter((u): u is string => typeof u === "string") : [];
  } catch {
    return [];
  }
}

/** 图集：封面 + 额外图（去重），与详情页逻辑一致 */
export function buildGalleryImageUrls(post: Post): string[] {
  if (post.type !== "GALLERY") return [];
  const extras = parseGalleryExtras(post.galleryImageUrls);
  return [post.coverUrl, ...extras.filter((u) => u && u !== post.coverUrl)];
}

export function PostArticleMedia({ post }: { post: PostWithCategoryTags }) {
  const galleryImages = buildGalleryImageUrls(post);

  // 有视频地址即播放：避免后台只填了 videoUrl、类型仍为「图文」时用户端不渲染播放器
  if (post.videoUrl) {
    return (
      <video
        className="article-video"
        src={post.videoUrl}
        poster={post.coverUrl}
        controls
        playsInline
        preload="metadata"
      />
    );
  }

  if (post.type === "GALLERY" && galleryImages.length > 1) {
    return (
      <div className="article-gallery">
        {galleryImages.map((src, i) => (
          <img className="article-gallery-item" key={`${src}-${i}`} src={src} alt="" loading="lazy" />
        ))}
      </div>
    );
  }

  if (post.type === "GALLERY" && galleryImages.length === 1) {
    return <img className="article-cover" src={galleryImages[0]} alt={post.title} />;
  }

  return <img className="article-cover" src={post.coverUrl} alt={post.title} />;
}
