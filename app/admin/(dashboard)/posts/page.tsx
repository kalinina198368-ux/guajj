import Link from "next/link";
import type { Prisma } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import PostForm from "./post-form";
import PostTable from "./post-table";

const PAGE_SIZE = 10;

export default async function AdminPostsPage({
  searchParams
}: {
  searchParams: Promise<{
    edit?: string;
    error?: string;
    saved?: string;
    deleted?: string;
    q?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const rawPage = Math.max(1, Math.floor(Number(params.page) || 1));
  const listWhere: Prisma.PostWhereInput | undefined = q
    ? {
        OR: [
          { title: { contains: q } },
          { summary: { contains: q } },
          { body: { contains: q } },
          { category: { name: { contains: q } } },
          { tags: { some: { tag: { name: { contains: q } } } } }
        ]
      }
    : undefined;

  const total = await prisma.post.count({ where: listWhere });
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(rawPage, totalPages);

  const [posts, categories, tags] = await Promise.all([
    prisma.post.findMany({
      where: listWhere,
      include: { category: true, tags: { include: { tag: true } } },
      orderBy: [{ isPinned: "desc" }, { updatedAt: "desc" }],
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE
    }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.tag.findMany({ orderBy: { name: "asc" } })
  ]);
  const editingPost = params.edit
    ? await prisma.post.findUnique({
        where: { id: params.edit },
        include: { tags: { include: { tag: true } } }
      })
    : null;

  return (
    <>
      {params.saved ? <p className="admin-flash success">内容已保存。</p> : null}
      {params.deleted ? <p className="admin-flash success">内容已删除。</p> : null}
      <div className="two-col">
        <PostForm post={editingPost} categories={categories} tags={tags} hasError={params.error === "missing"} />
        <section className="admin-panel">
          <div className="admin-list-toolbar">
            <form method="get" action="/admin/posts" className="admin-post-search">
              {params.edit ? <input type="hidden" name="edit" value={params.edit} /> : null}
              <input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="搜索标题、摘要、正文、分类、标签…"
                autoComplete="off"
              />
              <button type="submit" className="btn-admin-ghost">
                查询
              </button>
              {q ? (
                <Link className="btn-admin-ghost" href={params.edit ? `/admin/posts?edit=${params.edit}` : "/admin/posts"} style={{ textDecoration: "none", display: "inline-flex" }}>
                  清除
                </Link>
              ) : null}
            </form>
            <Link className="btn btn-admin-primary" href="/admin/posts" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
              ＋ 新建内容
            </Link>
          </div>
          {q ? <p className="admin-list-meta">关键词「{q}」本页 {posts.length} 条 · 共 {total} 条匹配</p> : null}
          <PostTable
            posts={posts}
            listQuery={q}
            pagination={{ total, page, pageSize: PAGE_SIZE, totalPages, editId: params.edit }}
          />
        </section>
      </div>
    </>
  );
}
