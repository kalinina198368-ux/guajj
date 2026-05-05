import Link from "next/link";
import { notFound } from "next/navigation";
import { PostArticleMedia } from "@/components/post-article-media";
import { requireAdmin } from "@/lib/auth";
import { getPostAnyStatus } from "@/lib/posts";

const statusLabel: Record<string, string> = {
  PUBLISHED: "已发布",
  DRAFT: "草稿",
  ARCHIVED: "已下架"
};

export default async function AdminPostPreviewPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const post = await getPostAnyStatus(id);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div className="admin-page-toolbar">
        <span className="chip">{statusLabel[post.status] || post.status}</span>
        <Link className="btn-admin-ghost" href={`/admin/posts?edit=${post.id}`} style={{ textDecoration: "none", display: "inline-flex" }}>
          返回编辑
        </Link>
        {post.status === "PUBLISHED" ? (
          <Link className="btn btn-admin-primary" href={`/post/${post.id}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            打开前台详情
          </Link>
        ) : null}
      </div>
      <p className="admin-page-note">草稿与下架内容在前台 `/post/…` 不会展示；此处仅供管理员核对封面、图集与视频是否正常。</p>

      <article className="article admin-panel admin-preview-article" style={{ marginTop: 12 }}>
        <PostArticleMedia post={post} />
        <div className="article-body">
          <span className="chip">{post.category.name}</span>
          <h1>{post.title}</h1>
          <div className="story-meta">
            <span>浏览量 {post.views}</span>
            {post.tags.map(({ tag }) => (
              <span key={tag.id}>#{tag.name}</span>
            ))}
          </div>
          {post.type === "VIDEO" && !post.videoUrl ? (
            <p style={{ color: "var(--muted)" }}>
              类型为视频但未填写可播放地址。请确认 TG 配置里已勾选「下载图片和视频到本地」，或在下方「视频地址」中填入 <code>/uploads/…</code> 路径。
            </p>
          ) : null}
          <p>{post.body}</p>
        </div>
      </article>
    </div>
  );
}
