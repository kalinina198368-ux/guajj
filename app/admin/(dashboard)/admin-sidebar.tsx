"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./logout-button";

type NavItem = { href: string; label: string; icon: ReactNode; end?: boolean };

function IconOverview() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconImage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function IconTags() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

const navItems: NavItem[] = [
  { href: "/admin", label: "概览", icon: <IconOverview />, end: true },
  { href: "/admin/posts", label: "内容", icon: <IconDoc /> },
  { href: "/admin/comments", label: "评论", icon: <IconChat /> },
  { href: "/admin/media", label: "媒体", icon: <IconImage /> },
  { href: "/admin/taxonomy", label: "分类标签", icon: <IconTags /> },
  { href: "/admin/telegram", label: "TG机器人", icon: <IconSend /> },
  { href: "/admin/settings", label: "设置", icon: <IconSettings /> }
];

function isActive(pathname: string, item: NavItem) {
  if (item.end) return pathname === item.href;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function AdminSidebar({ username }: { username: string }) {
  const pathname = usePathname() || "";

  return (
    <aside className="admin-side">
      <Link href="/" className="admin-sidebar-brand">
        <span className="admin-sidebar-logo" aria-hidden>
          🍉
        </span>
        <span className="admin-sidebar-title">吃瓜网</span>
      </Link>

      <nav className="admin-sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`admin-nav-link${isActive(pathname, item) ? " is-active" : ""}`}
          >
            <span className="admin-nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="admin-sidebar-footer">
        <div className="admin-sidebar-user">
          <span className="admin-sidebar-user-avatar">{username.slice(0, 1).toUpperCase()}</span>
          <div className="admin-sidebar-user-meta">
            <span className="admin-sidebar-user-name">{username}</span>
            <span className="admin-sidebar-user-role">管理员</span>
          </div>
        </div>
        <LogoutButton />
      </div>
    </aside>
  );
}
