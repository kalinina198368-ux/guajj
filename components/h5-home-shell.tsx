"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useState, type ReactNode } from "react";

type FeedTab = "latest" | "rank";

function tabFromHash(): FeedTab {
  if (typeof window === "undefined") return "latest";
  const h = window.location.hash.slice(1);
  return h === "rank" ? "rank" : "latest";
}

export function H5HomeShell({
  carousel,
  rankPanel,
  latestPanel
}: {
  carousel: ReactNode;
  rankPanel: ReactNode;
  latestPanel: ReactNode;
}) {
  const [tab, setTab] = useState<FeedTab>("latest");

  useLayoutEffect(() => {
    setTab(tabFromHash());
  }, []);

  useEffect(() => {
    const onHash = () => setTab(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = useCallback((t: FeedTab) => {
    setTab(t);
    const hash = t === "rank" ? "#rank" : "#latest";
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${hash}`);
    window.requestAnimationFrame(() => {
      document.getElementById(t)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <>
      <div className="h5-container">
        {carousel}
        <div className="h5-home-feed-panels">
          {tab === "rank" ? <div className="h5-home-feed-panel">{rankPanel}</div> : null}
          {tab === "latest" ? <div className="h5-home-feed-panel">{latestPanel}</div> : null}
        </div>
      </div>

      <nav className="mobile-tabs h5-bottom-tabs" aria-label="首页导航">
        <button
          type="button"
          className={`h5-bottom-tab${tab === "latest" ? " is-active" : ""}`}
          onClick={() => go("latest")}
        >
          <span className="h5-tab-icon" aria-hidden>
            ⌂
          </span>
          最新
        </button>
        <button
          type="button"
          className={`h5-bottom-tab${tab === "rank" ? " is-active" : ""}`}
          onClick={() => go("rank")}
        >
          <span className="h5-tab-icon" aria-hidden>
            🔥
          </span>
          热榜
        </button>
        <Link href="/vip">
          <span className="h5-tab-icon" aria-hidden>
            ▦
          </span>
          其他
        </Link>
      </nav>
    </>
  );
}
