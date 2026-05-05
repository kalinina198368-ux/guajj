"use client";

import { useCallback } from "react";

export function PostDetailInteractRow({
  heat,
  commentCount,
  postTitle
}: {
  heat: number;
  commentCount: number;
  postTitle: string;
}) {
  const goComment = useCallback(() => {
    document.getElementById("comments")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => document.getElementById("post-comment-body")?.focus(), 350);
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
    <div className="h5-detail-card-actions" role="group" aria-label="互动">
      <div className="h5-detail-card-actions-seg">
        <span className="h5-detail-card-actions-icon" aria-hidden>
          👍
        </span>
        <span>{heat}</span>
      </div>
      <button type="button" className="h5-detail-card-actions-seg h5-detail-card-actions-btn" onClick={goComment}>
        <span className="h5-detail-card-actions-icon" aria-hidden>
          💬
        </span>
        <span>{commentCount}</span>
      </button>
      <button type="button" className="h5-detail-card-actions-seg h5-detail-card-actions-btn" onClick={onShare}>
        <span className="h5-detail-card-actions-icon" aria-hidden>
          ⎘
        </span>
        <span>分享</span>
      </button>
    </div>
  );
}
