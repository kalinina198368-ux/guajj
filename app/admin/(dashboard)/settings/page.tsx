import { getSiteSettings } from "@/lib/site-settings";
import { updateSiteSettingsAction } from "./actions";

export default async function AdminSettingsPage({
  searchParams
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const params = await searchParams;
  const settings = await getSiteSettings();

  return (
    <>
      {params.saved ? <p className="admin-flash success">已保存。</p> : null}

      <div className="form-card admin-panel" style={{ padding: 22, maxWidth: 560 }}>
        <h2 style={{ margin: "0 0 16px" }}>评论</h2>
        <form action={updateSiteSettingsAction} className="form-grid">
          <div className="field" style={{ marginBottom: 0 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
              <input
                type="checkbox"
                name="allowAnonymousComments"
                defaultChecked={settings.allowAnonymousComments}
                style={{ width: 18, height: 18 }}
              />
              <span>
                <strong>是否允许匿名评论</strong>
                <br />
                <span style={{ color: "var(--muted)", fontSize: 13, fontWeight: 400 }}>
                  开启：未登录用户也可以「匿名」身份评论；关闭：仅已登录（聚合登录）用户可评论。
                </span>
              </span>
            </label>
          </div>
          <button type="submit" className="btn btn-admin-primary" style={{ marginTop: 8 }}>
            保存设置
          </button>
        </form>
      </div>
    </>
  );
}
