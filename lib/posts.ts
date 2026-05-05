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
