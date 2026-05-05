"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type H5HeroSlide = {
  id: string;
  title: string;
  summary: string;
  coverUrl: string;
  categoryName: string;
};

export function H5HeroCarousel({ items }: { items: H5HeroSlide[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((x) => (x + 1) % items.length);
    }, 5500);
    return () => window.clearInterval(t);
  }, [items.length]);

  if (items.length === 0) return null;

  const cur = items[idx]!;

  return (
    <div className="h5-hero-carousel">
      <Link href={`/post/${cur.id}`} className="h5-hero-card">
        <div className="h5-hero-card-inner">
          <div className="h5-hero-copy">
            <span className="h5-hero-kicker">
              <span className="h5-hero-kicker-icon" aria-hidden>
                👑
              </span>
              置顶热瓜 · {cur.categoryName}
            </span>
            <h2 className="h5-hero-title">{cur.title}</h2>
            <p className="h5-hero-desc">{cur.summary}</p>
          </div>
          <div className="h5-hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cur.coverUrl} alt="" className="h5-hero-cover" />
          </div>
        </div>
      </Link>
      {items.length > 1 ? (
        <div className="h5-hero-dots" role="tablist" aria-label="置顶切换">
          {items.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className={`h5-hero-dot${i === idx ? " is-active" : ""}`}
              aria-label={`第 ${i + 1} 条`}
              aria-current={i === idx}
              onClick={(e) => {
                e.preventDefault();
                setIdx(i);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
