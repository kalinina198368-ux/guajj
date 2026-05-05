import Link from "next/link";
import type { Category, Post, PostTag, Tag } from "@/lib/generated/prisma";
import { createPostAction, updatePostAction } from "./actions";

type PostWithMeta = Post & { tags: Array<PostTag & { tag: Tag }> };

export default function PostForm({
  post,
  categories,
  tags,
  hasError
}: {
  post?: PostWithMeta | null;
  categories: Category[];
  tags: Tag[];
  hasError: boolean;
}) {
  const selectedTagIds = new Set(post?.tags.map(({ tag }) => tag.id) || []);
  const action = post ? updatePostAction.bind(null, post.id) : createPostAction;

  let galleryPreview: string[] = [];
  if (post?.galleryImageUrls) {
    try {
      const parsed = JSON.parse(post.galleryImageUrls) as unknown;
      galleryPreview = Array.isArray(parsed) ? parsed.filter((u): u is string => typeof u === "string") : [];
    } catch {
      galleryPreview = [];
    }
  }

  const titleLen = post?.title?.length ?? 0;
  const summaryLen = post?.summary?.length ?? 0;

  return (
    <form className="form-grid admin-panel" action={action} style={{ padding: "22px 22px 20px" }}>
      <div style={{ marginBottom: 4 }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#111827" }}>{post ? "编辑内容" : "新增内容"}</h2>
        {post?.id ? (
          <p style={{ margin: "10px 0 0", display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
            <Link className="btn-admin-ghost" href={`/admin/posts/preview/${post.id}`} style={{ textDecoration: "none", display: "inline-flex", fontSize: 13 }}>
              预览封面 / 图集 / 视频
            </Link>
            {post.status === "DRAFT" ? (
              <span style={{ color: "var(--muted)", fontSize: 13 }}>草稿在前台不可访问，可预览或改为「发布」。</span>
            ) : null}
          </p>
        ) : null}
      </div>
      {hasError ? <p style={{ color: "#dc2626", fontWeight: 800, margin: 0 }}>请检查标题、摘要、正文、封面和分类是否填写完整。</p> : null}

      <div className="field">
        <div className="admin-label-row">
          <label htmlFor="post-title">标题</label>
          <span className="admin-char-hint">
            {titleLen} / 100
          </span>
        </div>
        <input id="post-title" name="title" defaultValue={post?.title || ""} required />
      </div>
      <div className="field">
        <div className="admin-label-row">
          <label htmlFor="post-summary">摘要</label>
          <span className="admin-char-hint">{summaryLen} / 200</span>
        </div>
        <textarea id="post-summary" name="summary" defaultValue={post?.summary || ""} required rows={3} />
      </div>
      <div className="field">
        <label htmlFor="post-body">正文</label>
        <textarea id="post-body" name="body" defaultValue={post?.body || ""} required />
      </div>

      <div className="toolbar">
        <div className="field" style={{ flex: 1 }}>
          <label>类型</label>
          <select name="type" defaultValue={post?.type || "ARTICLE"}>
            <option value="ARTICLE">图文</option>
            <option value="VIDEO">视频</option>
            <option value="GALLERY">图集</option>
          </select>
        </div>
        <div className="field" style={{ flex: 1 }}>
          <label>状态</label>
          <select name="status" defaultValue={post?.status || "PUBLISHED"}>
            <option value="PUBLISHED">发布</option>
            <option value="DRAFT">草稿</option>
            <option value="ARCHIVED">下架</option>
          </select>
        </div>
      </div>

      <div className="toolbar">
        <div className="field" style={{ flex: 1 }}>
          <label>分类</label>
          <select name="categoryId" defaultValue={post?.categoryId || categories[0]?.id || ""} required>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field" style={{ flex: 1 }}>
          <label>浏览量</label>
          <input name="views" type="number" min={0} step={1} defaultValue={post?.views ?? 0} />
          <span style={{ color: "var(--muted)", fontSize: 12, display: "block", marginTop: 4 }}>
            与前台「热度」展示一致；访客打开文章会自动累加浏览，可在此手工修正。
          </span>
        </div>
      </div>

      <div className="field">
        <label>封面地址</label>
        <input name="coverUrl" defaultValue={post?.coverUrl || "/assets/cover-spotlight.svg"} required />
      </div>
      <div className="field">
        <label>视频地址</label>
        <input name="videoUrl" defaultValue={post?.videoUrl || ""} placeholder="/uploads/demo.mp4" />
      </div>

      <div className="field">
        <label>图集额外图片（JSON 字符串数组，与封面叠加显示）</label>
        <textarea
          name="galleryImageUrls"
          rows={3}
          defaultValue={post?.galleryImageUrls || ""}
          placeholder='["/uploads/telegram/xxx.jpg","/uploads/telegram/yyy.jpg"]'
        />
      </div>

      {post?.coverUrl ? (
        <div className="field">
          <label>封面预览</label>
          <div style={{ border: "1px solid var(--admin-border)", borderRadius: 8, padding: 8, background: "#0d1117" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverUrl} alt="" style={{ maxWidth: "100%", maxHeight: 220, objectFit: "contain" }} />
          </div>
        </div>
      ) : null}

      {post?.videoUrl ? (
        <div className="field">
          <label>视频预览</label>
          <div style={{ border: "1px solid var(--admin-border)", borderRadius: 8, padding: 8, background: "#0d1117" }}>
            <video src={post.videoUrl} controls style={{ width: "100%", maxHeight: 260 }} preload="metadata" />
          </div>
        </div>
      ) : null}

      {galleryPreview.length ? (
        <div className="field">
          <label>图集额外图预览</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {galleryPreview.map((src) => (
              <div key={src} style={{ border: "1px solid var(--admin-border)", borderRadius: 8, padding: 4, background: "#0d1117" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 4 }} />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="field">
        <label>标签</label>
        <select name="tagIds" multiple defaultValue={[...selectedTagIds]}>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      <label className="toolbar" style={{ alignItems: "center" }}>
        <input name="isPinned" type="checkbox" defaultChecked={post?.isPinned || false} />
        <span style={{ fontWeight: 700, fontSize: 14 }}>置顶</span>
      </label>

      <div className="admin-form-actions">
        <button type="reset" className="btn-admin-ghost">
          重置
        </button>
        <button className="btn btn-admin-primary" type="submit">
          {post ? "保存修改" : "发布内容"}
        </button>
      </div>
    </form>
  );
}
