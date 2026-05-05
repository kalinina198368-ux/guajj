"use client";

import { useCallback } from "react";
import { usePostFavorite } from "@/components/use-post-favorite";

export function PostDetailBottomBar({ postId, heat, postTitle }: { postId: string; heat: number; postTitle: string }) {
  const { fav, toggleFav } = usePostFavorite(postId);

  const goComment = useCallback(() => {
    document.getElementById("comments")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      document.getElementById("post-comment-body")?.focus();
    }, 350);
  }, []);

  const onShare = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: postTitle || "吃瓜网", url });
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
  }, [postTitle]);

  return (
    <div className="h5-detail-dock">
      <button type="button" className="h5-detail-dock-input" onClick={goComment}>
        <span className="h5-detail-dock-pen" aria-hidden>
          ✎
        </span>
        说点什么…
      </button>
      <div className="h5-detail-dock-actions">
        <span className="h5-detail-dock-stat" title="热度">
          <span aria-hidden>🔥</span>
          {heat}
        </span>
        <button type="button" className={`h5-detail-dock-fav${fav ? " is-on" : ""}`} onClick={toggleFav} aria-label={fav ? "取消收藏" : "收藏"}>
          {fav ? "★" : "☆"}
          <span>收藏</span>
        </button>
        <button type="button" className="h5-detail-dock-share" onClick={onShare}>
          ⎘<span>分享</span>
        </button>
      </div>
    </div>
  );
}
