"use client";

import { useRouter } from "next/navigation";
import type { MediaAsset } from "@/lib/generated/prisma";

export default function MediaManager({ media }: { media: MediaAsset[] }) {
  const router = useRouter();

  async function upload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/admin/media", { method: "POST", body: form });
    if (!res.ok) {
      alert("上传失败");
      return;
    }
    event.currentTarget.reset();
    router.refresh();
  }

  return (
    <>
      <form className="form-card admin-panel toolbar" style={{ padding: 18, marginBottom: 18 }} onSubmit={upload}>
        <input name="file" type="file" accept="image/*,video/*" required />
        <button className="btn btn-admin-primary" type="submit">
          上传媒体
        </button>
      </form>
      <div className="media-grid">
        {media.map((item) => (
          <div className="admin-card" key={item.id}>
            {item.type === "VIDEO" ? <video src={item.url} controls /> : <img src={item.url} alt={item.filename} />}
            <strong style={{ fontSize: 15 }}>{item.filename}</strong>
            <p style={{ color: "var(--muted)", wordBreak: "break-all" }}>{item.url}</p>
          </div>
        ))}
      </div>
    </>
  );
}
