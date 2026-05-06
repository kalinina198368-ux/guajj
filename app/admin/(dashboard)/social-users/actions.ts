"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function deleteSocialUserAction(userId: string) {
  await requireAdmin();
  const posts = await prisma.comment.findMany({
    where: { authorId: userId },
    select: { postId: true },
    distinct: ["postId"]
  });
  await prisma.socialUser.delete({ where: { id: userId } });
  revalidatePath("/admin/social-users");
  revalidatePath("/admin/comments");
  for (const p of posts) {
    revalidatePath(`/post/${p.postId}`);
  }
  redirect("/admin/social-users?deleted=1");
}
