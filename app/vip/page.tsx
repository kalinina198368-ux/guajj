import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "其他 · 吃瓜网",
  description: "暂未开放"
};

export default function VipPlaceholderPage() {
  return (
    <main className="site-shell">
      <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div
          style={{
            maxWidth: 420,
            margin: "0 auto",
            textAlign: "center",
            padding: "48px 24px",
            background: "var(--panel)",
            border: "1px solid var(--line)",
            borderRadius: 8
          }}
        >
          <p style={{ margin: 0, fontSize: 18, fontWeight: 800, lineHeight: 1.6 }}>还未对外开放</p>
          <Link href="/" className="btn secondary" style={{ marginTop: 28, display: "inline-flex" }}>
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}
