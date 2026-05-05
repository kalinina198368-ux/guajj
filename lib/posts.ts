import type { Prisma } from "@/lib/generated/prisma";
import { PostStatus } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";

export const postInclude = {
  category: true,
  tags: { include: { tag: true } }
};

export async function getPublishedPosts() {
  return prisma.post.findMany({
    where: { status: PostStatus.PUBLISHED },
    include: postInclude,
    orderBy: [{ isPinned: "desc" }, { publishedAt: "desc" }, { views: "desc" }]
  });
}

/** 前台首页关键词搜索（标题 / 摘要 / 正文 / 分类 / 标签） */
export async function searchPublishedPosts(q: string) {
  const trimmed = q.trim();
  if (!trimmed) return getPublishedPosts();

  const where: Prisma.PostWhereInput = {
    status: PostStatus.PUBLISHED,
    OR: [
      { title: { contains: trimmed } },
      { summary: { contains: trimmed } },
      { body: { contains: trimmed } },
      { category: { name: { contains: trimmed } } },
      { tags: { some: { tag: { name: { contains: trimmed } } } } }
    ]
  };

  return prisma.post.findMany({
    where,
    include: postInclude,
    orderBy: [{ isPinned: "desc" }, { publishedAt: "desc" }, { views: "desc" }]
  });
}

export async function getPost(id: string) {
  return prisma.post.findFirst({
    where: { id, status: PostStatus.PUBLISHED },
    include: postInclude
  });
}

/** 任意状态（仅应在已鉴权的管理预览中使用） */
export async function getPostAnyStatus(id: string) {
  return prisma.post.findFirst({
    where: { id },
    include: postInclude
  });
}
