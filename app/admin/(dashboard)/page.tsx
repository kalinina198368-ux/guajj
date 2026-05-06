import { prisma } from "@/lib/prisma";

export default async function AdminHomePage() {
  const [posts, published, media, categories, socialUsers] = await Promise.all([
    prisma.post.count(),
    prisma.post.count({ where: { status: "PUBLISHED" } }),
    prisma.mediaAsset.count(),
    prisma.category.count(),
    prisma.socialUser.count()
  ]);

  return (
    <>
      <div className="admin-grid">
        <div className="admin-card admin-stat-card">全部内容<strong>{posts}</strong></div>
        <div className="admin-card admin-stat-card">已发布<strong>{published}</strong></div>
        <div className="admin-card admin-stat-card">媒体资源<strong>{media}</strong></div>
        <div className="admin-card admin-stat-card">分类数量<strong>{categories}</strong></div>
        <div className="admin-card admin-stat-card">登录用户<strong>{socialUsers}</strong></div>
      </div>
    </>
  );
}
