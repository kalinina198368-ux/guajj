import Link from "next/link";
import { notFound } from "next/navigation";
import PostComments from "@/components/post-comments";

/** 确保发表评论后 router.refresh 会重新拉取评论列表 */
export const dynamic = "force-dynamic";
import { PostArticleMedia } from "@/components/post-article-media";
import { buildCommentTree } from "@/lib/comments-tree";
import { getLoggedInSocialUser } from "@/lib/social-user";
import { prisma } from "@/lib/prisma";
import { getPost } from "@/lib/posts";
import { getSiteSettings } from "@/lib/site-settings";

function firstQuery(value: string | string[] | undefined): string | undefined {
  if (value === undefined) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

export default async function PostDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ cok?: string; cerr?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const cok = firstQuery(query.cok);
  const cerrRaw = firstQuery(query.cerr);
  const commentFlash =
    cok === "1"
      ? ({ kind: "ok" } as const)
      : cerrRaw
        ? ({
            kind: "error",
            message: (() => {
              try {
                return decodeURIComponent(cerrRaw);
              } catch {
                return "评论发送失败";
              }
            })()
          } as const)
        : null;
  const post = await getPost(id);
  if (!post) notFound();

  await prisma.post.update({ where: { id: post.id }, data: { views: { increment: 1 } } });

  const [related, commentRows, socialUser, siteSettings] = await Promise.all([
    prisma.post.findMany({
      where: { status: "PUBLISHED", id: { not: post.id }, categoryId: post.categoryId },
      take: 4,
      orderBy: { views: "desc" },
      include: { category: true }
    }),
    prisma.comment.findMany({
      where: { postId: post.id },
      include: { author: true },
      orderBy: { createdAt: "asc" }
    }),
    getLoggedInSocialUser(),
    getSiteSettings()
  ]);

  const commentTree = buildCommentTree(commentRows);
  const currentUser = socialUser
    ? {
        id: socialUser.id,
        nickname: socialUser.nickname,
        faceimg: socialUser.faceimg,
        loginType: socialUser.loginType
      }
    : null;

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand">吃瓜网</Link>
          <nav className="nav">
            <Link href="/">首页</Link>
            <Link href="/admin">管理后台</Link>
          </nav>
        </div>
      </header>
      <div className="container detail-layout">
        <article className="article">
          <PostArticleMedia post={post} />
          <div className="article-body">
            <span className="chip">{post.category.name}</span>
            <h1>{post.title}</h1>
            <div className="story-meta">
              <span>热度 {post.views + 1}</span>
              {post.tags.map(({ tag }) => <span key={tag.id}>#{tag.name}</span>)}
            </div>
            {post.type === "VIDEO" && !post.videoUrl ? (
              <p>当前标记为视频类型但未填写可播放地址。请在后台「视频地址」填入 MP4 / WebM / MOV 的站内路径（如 /uploads/…）。</p>
            ) : null}
            <p>{post.body}</p>
          </div>
        </article>

        <aside>
          <div className="rank-panel">
            <div className="section-title" style={{ marginTop: 0 }}>
              <h2>同类推荐</h2>
            </div>
            <div className="rank-list">
              {related.map((item, index) => (
                <Link className="rank-item" href={`/post/${item.id}`} key={item.id}>
                  <span className="rank-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="rank-title">{item.title}</span>
                  <span className="heat">{item.views}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="container" style={{ marginTop: 28, marginBottom: 40 }}>
        <PostComments
          key={post.id}
          postId={post.id}
          initialTree={commentTree}
          currentUser={currentUser}
          commentFlash={commentFlash}
          allowAnonymousComments={siteSettings.allowAnonymousComments}
        />
      </div>

      <nav className="mobile-tabs">
        <Link href="/">首页</Link>
        <Link href="/#latest">最新</Link>

        <Link href="/vip">其他</Link>
      </nav>
    </main>
  );
}
