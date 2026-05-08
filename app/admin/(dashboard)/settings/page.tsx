import { getSiteSettings } from "@/lib/site-settings";
import { isR2Ready } from "@/lib/media-storage";
import { updateSiteSettingsAction } from "./actions";

export default async function AdminSettingsPage({
  searchParams
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const params = await searchParams;
  const settings = await getSiteSettings();
  const r2Ok = isR2Ready(settings);

  return (
    <>
      {params.saved ? <p className="admin-flash success">已保存。</p> : null}

      <div className="form-card admin-panel" style={{ padding: 22, maxWidth: 640 }}>
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

          <h2 style={{ margin: "22px 0 12px" }}>媒体存储</h2>
          <p style={{ margin: "0 0 12px", color: "var(--muted)", fontSize: 13, lineHeight: 1.55 }}>
            后台上传与 Telegram 下载入库时使用。选择 Cloudflare R2 需在 R2 启用公开访问或使用自定义域名作为公网前缀，参见{" "}
            <a href="https://developers.cloudflare.com/r2/" target="_blank" rel="noopener noreferrer">
              R2 文档
            </a>
            。密钥也可仅配置在服务器环境变量 <code style={{ fontSize: 12 }}>R2_ACCESS_KEY_ID</code>、
            <code style={{ fontSize: 12 }}>R2_SECRET_ACCESS_KEY</code>（可选 <code style={{ fontSize: 12 }}>R2_ACCOUNT_ID</code>
            ），不必写入数据库。
          </p>

          <div className="field">
            <label>存储方式</label>
            <select name="mediaStorage" defaultValue={settings.mediaStorage === "r2" ? "r2" : "local"}>
              <option value="local">本地（public/uploads）</option>
              <option value="r2">Cloudflare R2（S3 兼容 API）</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="r2-account">R2 Account ID</label>
            <input
              id="r2-account"
              name="r2AccountId"
              type="text"
              autoComplete="off"
              defaultValue={settings.r2AccountId ?? ""}
              placeholder="仪表盘 URL 中的账户标识"
            />
          </div>
          <div className="field">
            <label htmlFor="r2-bucket">Bucket 名称</label>
            <input id="r2-bucket" name="r2BucketName" type="text" defaultValue={settings.r2BucketName ?? ""} placeholder="存储桶名称" />
          </div>
          <div className="field">
            <label htmlFor="r2-public">公网访问 URL 前缀</label>
            <input
              id="r2-public"
              name="r2PublicBaseUrl"
              type="url"
              defaultValue={settings.r2PublicBaseUrl ?? ""}
              placeholder="https://pub-xxxx.r2.dev 或已绑定域名"
            />
            <span style={{ color: "var(--muted)", fontSize: 12, display: "block", marginTop: 6 }}>
              对象 Key 为 <code style={{ fontSize: 12 }}>uploads/...</code>，最终地址为「此前缀 + /uploads/…」，勿以斜杠结尾。
            </span>
          </div>
          <div className="field">
            <label htmlFor="r2-ak">Access Key ID（可选）</label>
            <input
              id="r2-ak"
              name="r2AccessKeyId"
              type="text"
              autoComplete="off"
              defaultValue={settings.r2AccessKeyId ?? ""}
              placeholder="留空则不覆盖已保存值"
            />
          </div>
          <div className="field">
            <label htmlFor="r2-sk">Secret Access Key（可选）</label>
            <input
              id="r2-sk"
              name="r2SecretAccessKey"
              type="password"
              autoComplete="new-password"
              placeholder="留空则不修改已保存的密钥"
            />
          </div>

          <p style={{ margin: "4px 0 0", fontSize: 13, fontWeight: 700, color: r2Ok ? "#059669" : "#b45309" }}>
            {settings.mediaStorage === "r2"
              ? r2Ok
                ? "✓ R2 配置完整，新上传将写入对象存储。"
                : "⚠ 已选择 R2，但账号/桶/公网前缀或密钥不完整：将自动回退为本地存储。"
              : "当前使用本地 public/uploads。"}
          </p>

          <button type="submit" className="btn btn-admin-primary" style={{ marginTop: 12 }}>
            保存设置
          </button>
        </form>
      </div>
    </>
  );
}
