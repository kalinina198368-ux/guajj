"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { usePostFavorite } from "@/components/use-post-favorite";

export function PostDetailHeader({ postId }: { postId: string }) {
  const router = useRouter();
  const { fav, toggleFav } = usePostFavorite(postId);

  const onShare = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = document.title || "吃瓜网";
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      alert("链接已复制");
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        alert("链接已复制");
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <header className="h5-detail-topbar">
      <button type="button" className="h5-detail-back" onClick={() => router.back()} aria-label="返回">
        ‹
      </button>
      <span className="h5-detail-brand">🔥 吃瓜网</span>
      <div className="h5-detail-top-actions">
        <button type="button" className={`h5-detail-icon-btn${fav ? " is-on" : ""}`} onClick={toggleFav} aria-label={fav ? "取消收藏" : "收藏"}>
          {fav ? "★" : "☆"}
        </button>
        <button type="button" className="h5-detail-icon-btn" onClick={onShare} aria-label="分享">
          ⎘
        </button>
      </div>
    </header>
  );
}
