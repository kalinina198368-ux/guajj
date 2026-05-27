import type { Metadata } from "next";
import Link from "next/link";
import { VipBottomNav } from "@/components/vip-bottom-nav";
import { VipHighlightText } from "@/components/vip-highlight-text";
import {
  buildVipDetailHref,
  buildVipListHref,
  contentTypeIcon,
  contentTypeLabel,
  formatDuration,
  formatMessageDate
} from "@/lib/tg-index-display";
import { getVipHotKeywords, searchIndexedMessages } from "@/lib/tg-index-search";

export const metadata: Metadata = {
  title: "VIP搜索 · 吃瓜网",
  description: "全站索引关键词搜索"
};

export const dynamic = "force-dynamic";

function parsePage(raw: string | undefined) {
  const n = Math.floor(Number(raw) || 1);
  return n > 0 ? n : 1;
}

export default async function VipSearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const params = await searchParams;
  const qRaw = typeof params.q === "string" ? params.q : "";
  const q = qRaw.trim();
  const hasQuery = q.length > 0;
  const page = parsePage(params.page);
  const result = hasQuery ? await searchIndexedMessages(q, page) : null;
  const hotKeywords = hasQuery ? [] : await getVipHotKeywords();

  return (
    <main className="site-shell h5-home vip-page">
      <header className="h5-top vip-top">
        <div className="h5-top-row">
          <Link href="/" className="h5-brand-block">
            <div className="h5-brand-line">
              <span className="h5-brand-flame" aria-hidden>
                🔍
              </span>
              <span className="h5-brand-title">VIP搜索</span>
            </div>
            <p className="h5-brand-sub">全站索引 · 关键词检索</p>
          </Link>
        </div>
        <form className="vip-search-bar" method="get" action="/vip">
          <input
            type="search"
            name="q"
            defaultValue={qRaw}
            placeholder="输入关键词，如：牛教练"
            className="h5-search-input vip-search-input"
            autoComplete="off"
            enterKeyHint="search"
          />
          <button type="submit" className="h5-search-submit">
            搜索
          </button>
        </form>
      </header>

      <div className="h5-container vip-container">
        {!hasQuery ? (
          <section className="vip-intro">
            <p className="vip-intro-lead">搜索已入库的频道消息索引。采集服务接入后，结果会自动增多。</p>
            {hotKeywords.length > 0 ? (
              <div className="vip-hot">
                <p className="vip-hot-label">试试这些</p>
                <div className="vip-hot-tags">
                  {hotKeywords.map((word) => (
                    <Link key={word} href={buildVipListHref(word)} className="vip-hot-tag">
                      {word}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        {hasQuery && result ? (
          <section className="vip-results" aria-labelledby="vip-results-title">
            <div className="h5-search-result-head">
              <h2 id="vip-results-title" className="h5-section-title">
                搜索结果
                <span className="h5-search-meta">
                  「{q}」· 共 {result.total} 条
                </span>
              </h2>
              <Link href="/vip" className="h5-clear-link">
                清除
              </Link>
            </div>

            {result.items.length === 0 ? (
              <p className="h5-empty">没有找到相关内容，换个关键词试试。</p>
            ) : (
              <ul className="vip-result-list">
                {result.items.map((item) => {
                  const duration = formatDuration(item.durationSec);
                  const href = buildVipDetailHref(item.id, q, result.page);
                  return (
                    <li key={item.id}>
                      <Link href={href} className="vip-result-item">
                        <span className="vip-result-icon" aria-hidden>
                          {contentTypeIcon(item.contentType)}
                        </span>
                        <span className="vip-result-body">
                          <span className="vip-result-title">
                            {duration ? <span className="vip-result-duration">{duration}</span> : null}
                            <VipHighlightText text={item.title} keyword={q} />
                          </span>
                          <span className="vip-result-snippet">
                            <VipHighlightText text={item.snippet} keyword={q} />
                          </span>
                          <span className="vip-result-meta">
                            {contentTypeLabel(item.contentType)}
                            {item.sourceTitle ? ` · ${item.sourceTitle}` : ""}
                            {` · ${formatMessageDate(item.messageDate)}`}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {result.totalPages > 1 ? (
              <nav className="vip-pagination" aria-label="分页">
                {result.page > 1 ? (
                  <Link href={buildVipListHref(q, result.page - 1)} className="vip-page-btn">
                    上一页
                  </Link>
                ) : (
                  <span className="vip-page-btn is-disabled">上一页</span>
                )}
                <span className="vip-page-info">
                  第 {result.page} / {result.totalPages} 页
                </span>
                {result.page < result.totalPages ? (
                  <Link href={buildVipListHref(q, result.page + 1)} className="vip-page-btn">
                    下一页
                  </Link>
                ) : (
                  <span className="vip-page-btn is-disabled">下一页</span>
                )}
              </nav>
            ) : null}
          </section>
        ) : null}
      </div>

      <VipBottomNav active="vip" />
    </main>
  );
}
