import Link from "next/link";
import { H5HomeShell } from "@/components/h5-home-shell";
import { H5HeroCarousel } from "@/components/h5-hero-carousel";
import { H5StoryListCard } from "@/components/h5-story-list-card";
import { formatRelativeTime } from "@/lib/format-relative-time";
import { extractListMediaTiles } from "@/lib/home-post-media";
import { getPublishedPosts, searchPublishedPosts } from "@/lib/posts";
import { stripRepostAttributionFromText } from "@/lib/strip-repost-attribution";

function formatDate(date?: Date | null) {
  if (!date) return "刚刚";
  return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
}

function tagToneClass(name: string): string {
  const n = name.length % 3;
  if (n === 0) return "h5-rank-tag--a";
  if (n === 1) return "h5-rank-tag--b";
  return "h5-rank-tag--c";
}

function rankBadgeClass(index: number): string {
  if (index === 0) return "h5-rank-num--gold";
  if (index === 1) return "h5-rank-num--purple";
  if (index === 2) return "h5-rank-num--blue";
  return "";
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ error?: string; q?: string }> }) {
  const params = await searchParams;
  const qRaw = typeof params.q === "string" ? params.q : "";
  const q = qRaw.trim();
  const hasQuery = q.length > 0;

  const posts = hasQuery ? await searchPublishedPosts(q) : await getPublishedPosts();

  /** 仅后台勾选「置顶」的稿件进轮播（最多 3 条）；Webhook 等新建文默认不置顶，不会占轮播位。 */
  const pinnedForCarousel = posts.filter((p) => p.isPinned).slice(0, 3);
  const carouselSlides = pinnedForCarousel.map((p) => ({
    id: p.id,
    title: p.title,
    summary: stripRepostAttributionFromText(p.summary),
    coverUrl: p.coverUrl,
    categoryName: p.category.name,
    tiles: extractListMediaTiles(p)
  }));

  const nonPinned = posts.filter((p) => !p.isPinned);
  const ranks = [...nonPinned].sort((a, b) => b.views - a.views).slice(0, 6);
  const rankIds = new Set(ranks.map((p) => p.id));
  /** 与热度榜互斥：已进入 Top6 的稿件不再出现在「最新吃瓜」。置顶仅在轮播出现。 */
  const latest = nonPinned.filter((p) => !rankIds.has(p.id));

  return (
    <main className="site-shell h5-home">
      {params.error ? (
        <div className="h5-container h5-flash-wrap">
          <p className="h5-flash-err">登录未完成：{params.error}</p>
        </div>
      ) : null}

      <header className="h5-top">
        <div className="h5-top-row">
          <Link href="/" className="h5-brand-block">
            <div className="h5-brand-line">
              <span className="h5-brand-flame" aria-hidden>
                🔥
              </span>
              <span className="h5-brand-title">吃瓜网</span>
            </div>
            <p className="h5-brand-sub">吃最新鲜的瓜 · 看最劲爆的料</p>
          </Link>
          <details className="h5-search-details">
            <summary className="h5-search-trigger" aria-label="搜索">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4.2-4.2" />
              </svg>
            </summary>
            <form className="h5-search-form" method="get" action="/">
              <input
                type="search"
                name="q"
                defaultValue={qRaw}
                placeholder="输入关键词搜索标题、正文…"
                className="h5-search-input"
                autoComplete="off"
                enterKeyHint="search"
              />
              <button type="submit" className="h5-search-submit">
                搜索
              </button>
            </form>
          </details>
        </div>
      </header>

      {hasQuery ? (
        <>
          <div className="h5-container">
            <section className="h5-section h5-search-results" aria-labelledby="search-results-title">
              <div className="h5-search-result-head">
                <h2 id="search-results-title" className="h5-section-title">
                  搜索结果
                  <span className="h5-search-meta">
                    「{q}」· 共 {posts.length} 条
                  </span>
                </h2>
                <Link href="/" className="h5-clear-link">
                  返回全部
                </Link>
              </div>
              {posts.length === 0 ? (
                <p className="h5-empty">没有找到相关内容，换个关键词试试。</p>
              ) : (
                <div className="h5-story-grid">
                  {posts.map((post) => (
                    <H5StoryListCard
                      key={post.id}
                      postId={post.id}
                      href={`/post/${post.id}`}
                      title={post.title}
                      summary={stripRepostAttributionFromText(post.summary)}
                      categoryName={post.category.name}
                      timeLabel={formatRelativeTime(post.publishedAt)}
                      views={post.views}
                      tiles={extractListMediaTiles(post)}
                      tagToneClass={tagToneClass(post.category.name)}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>

          <nav className="mobile-tabs h5-bottom-tabs" aria-label="首页导航">
            <Link href="/#latest">
              <span className="h5-tab-icon" aria-hidden>
                ⌂
              </span>
              最新
            </Link>
            <Link href="/#rank">
              <span className="h5-tab-icon" aria-hidden>
                🔥
              </span>
              热榜
            </Link>
            <Link href="/vip">
              <span className="h5-tab-icon" aria-hidden>
                ▦
              </span>
              其他
            </Link>
          </nav>
        </>
      ) : (
        <H5HomeShell
          carousel={carouselSlides.length > 0 ? <H5HeroCarousel items={carouselSlides} /> : null}
          rankPanel={
            <section className="h5-section h5-rank-section" id="rank" aria-labelledby="rank-title">
              <div className="h5-section-head">
                <h2 id="rank-title" className="h5-section-title-row">
                  <span className="h5-section-icon" aria-hidden>
                    🔥
                  </span>
                  热度榜
                </h2>
                <span className="h5-live-pill">
                  <span className="h5-live-dot" aria-hidden />
                  实时更新
                </span>
              </div>
              <div className="h5-rank-list">
                {ranks.map((post, index) => (
                  <Link href={`/post/${post.id}`} className="h5-rank-row" key={post.id}>
                    <span className={`h5-rank-num ${rankBadgeClass(index)}`}>{String(index + 1).padStart(2, "0")}</span>
                    <div className="h5-rank-main">
                      <div className="h5-rank-title">{post.title}</div>
                      <div className="h5-rank-sub">
                        <span className={`h5-rank-tag ${tagToneClass(post.category.name)}`}>{post.category.name}</span>
                        <span className="h5-rank-time">{formatRelativeTime(post.publishedAt)}</span>
                      </div>
                    </div>
                    <span className="h5-rank-heat">
                      <span aria-hidden>🔥</span>
                      {post.views}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          }
          latestPanel={
            <section className="h5-section" id="latest">
              <div className="h5-section-head">
                <h2 className="h5-section-title-row">
                  <span className="h5-section-icon" aria-hidden>
                    📰
                  </span>
                  最新吃瓜
                </h2>
                <span className="h5-chip-sub">图文 · 图集 · 时间线</span>
              </div>
              <div className="h5-story-grid">
                {latest.map((post) => (
                  <H5StoryListCard
                    key={post.id}
                    postId={post.id}
                    href={`/post/${post.id}`}
                    title={post.title}
                    summary={stripRepostAttributionFromText(post.summary)}
                    categoryName={post.category.name}
                    timeLabel={formatDate(post.publishedAt)}
                    views={post.views}
                    tiles={extractListMediaTiles(post)}
                    tagToneClass={tagToneClass(post.category.name)}
                  />
                ))}
              </div>
            </section>
          }
        />
      )}
    </main>
  );
}
