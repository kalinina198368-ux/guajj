import Link from "next/link";

export function VipBottomNav({ active }: { active: "home" | "vip" }) {
  return (
    <nav className="mobile-tabs h5-bottom-tabs vip-bottom-nav" aria-label="站点导航">
      <Link href="/" className={`h5-bottom-tab${active === "home" ? " is-active" : ""}`}>
        <span className="h5-tab-icon" aria-hidden>
          ⌂
        </span>
        首页
      </Link>
      <Link href="/vip" className={`h5-bottom-tab${active === "vip" ? " is-active" : ""}`}>
        <span className="h5-tab-icon" aria-hidden>
          🔍
        </span>
        VIP搜索
      </Link>
    </nav>
  );
}
