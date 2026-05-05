import { loginAction } from "./actions";

export default function LoginForm({ hasError = false }: { hasError?: boolean }) {
  return (
    <form className="form-grid" action={loginAction}>
      <div className="field">
        <label>账号</label>
        <input name="username" defaultValue="admin" autoComplete="username" required />
      </div>
      <div className="field">
        <label>密码</label>
        <input name="password" defaultValue="admin123456" type="password" autoComplete="current-password" required />
      </div>
      {hasError ? <p style={{ color: "var(--brand)" }}>账号或密码不正确</p> : null}
      <button className="btn btn-admin-primary" type="submit" style={{ width: "100%" }}>
        登录后台
      </button>
    </form>
  );
}
