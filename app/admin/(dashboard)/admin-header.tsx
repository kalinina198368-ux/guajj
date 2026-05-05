"use client";

import { usePathname } from "next/navigation";

const routes: { test: (p: string) => boolean; title: string; subtitle: string }[] = [
  { test: (p) => p.startsWith("/admin/posts/preview"), title: "内容预览", subtitle: "核对封面、图集与视频" },
  { test: (p) => p.startsWith("/admin/posts"), title: "内容管理", subtitle: "新建、编辑与检索全站内容" },
  { test: (p) => p.startsWith("/admin/comments"), title: "评论管理", subtitle: "审核与清理用户评论" },
  { test: (p) => p.startsWith("/admin/media"), title: "媒体库", subtitle: "上传与管理图片、视频资源" },
  { test: (p) => p.startsWith("/admin/taxonomy"), title: "分类与标签", subtitle: "维护栏目与话题标签" },
  { test: (p) => p.startsWith("/admin/telegram"), title: "TG 机器人", subtitle: "频道同步与导入配置" },
  { test: (p) => p.startsWith("/admin/settings"), title: "站点设置", subtitle: "全站开关与策略" },
  { test: (p) => p === "/admin", title: "后台概览", subtitle: "关键指标一眼掌握" }
];

function resolveMeta(pathname: string) {
  for (const r of routes) {
    if (r.test(pathname)) return { title: r.title, subtitle: r.subtitle };
  }
  return { title: "管理后台", subtitle: "" };
}

export default function AdminHeader({ username }: { username: string }) {
  const pathname = usePathname() || "";
  const { title, subtitle } = resolveMeta(pathname);

  return (
    <header className="admin-topbar">
      <div className="admin-topbar-titles">
        <h1 className="admin-topbar-title">{title}</h1>
        {subtitle ? <p className="admin-topbar-sub">{subtitle}</p> : null}
      </div>
      <div className="admin-topbar-actions">
        <button type="button" className="admin-icon-btn" aria-label="通知">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
        <details className="admin-user-menu">
          <summary className="admin-user-summary">
            <span className="admin-user-avatar" aria-hidden>
              {username.slice(0, 1).toUpperCase()}
            </span>
            <span className="admin-user-name">{username}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="admin-user-dropdown">
            <span className="admin-user-dropdown-hint">已登录管理员</span>
          </div>
        </details>
      </div>
    </header>
  );
}
