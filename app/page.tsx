import Link from "next/link";
import { getPublishedPosts } from "@/lib/posts";

function formatDate(date?: Date | null) {
  if (!date) return "刚刚";
  return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  const posts = await getPublishedPosts();
  const hero = posts[0];
  const ranks = [...posts].sort((a, b) => b.views - a.views).slice(0, 6);
  const latest = posts.slice(1);

  return (
    <main className="site-shell">
      {params.error ? (
        <div className="container" style={{ paddingTop: 12 }}>
          <p style={{ color: "var(--brand)", fontWeight: 700, margin: 0 }}>
            登录未完成：{params.error}
          </p>
        </div>
      ) : null}
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand">吃瓜网</Link>
          <nav className="nav">
            <a href="#latest">最新</a>
            <a href="#rank">热榜</a>
            <Link href="/vip">其他</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        {hero ? (
          <section className="hero-grid">
            <Link className="hero-card" href={`/post/${hero.id}`}>
              <img src={hero.coverUrl} alt={hero.title} />
              <div className="hero-copy">
                <span className="kicker">置顶热瓜 · {hero.category.name}</span>
                <h1>{hero.title}</h1>
                <p>{hero.summary}</p>
              </div>
            </Link>

            <aside className="rank-panel" id="rank">
              <div className="section-title" style={{ marginTop: 0 }}>
                <h2>热度榜</h2>
                <span className="heat">实时</span>
              </div>
              <div className="rank-list">
                {ranks.map((post, index) => (
                  <Link className="rank-item" href={`/post/${post.id}`} key={post.id}>
                    <span className="rank-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="rank-title">{post.title}</span>
                    <span className="heat">{post.views}</span>
                  </Link>
                ))}
              </div>
            </aside>
          </section>
        ) : null}

        <section id="latest">
          <div className="section-title">
            <h2>最新吃瓜</h2>
            <span className="chip">图文 · 图集 · 时间线</span>
          </div>
          <div className="story-grid">
            {latest.map((post) => (
              <Link href={`/post/${post.id}`} className="story-card" key={post.id}>
                <img src={post.coverUrl} alt={post.title} />
                <div className="story-body">
                  <div className="story-meta">
                    <span>{post.category.name}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>热度 {post.views}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <nav className="mobile-tabs">
        <a href="#latest">最新</a>
        <a href="#rank">热榜</a>
        <Link href="/vip">其他</Link>
      </nav>
    </main>
  );
}
