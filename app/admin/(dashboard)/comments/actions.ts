"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function deleteCommentAction(commentId: string) {
  await requireAdmin();
  const row = await prisma.comment.findUnique({
    where: { id: commentId },
    select: { postId: true }
  });
  if (!row) redirect("/admin/comments");
  await prisma.comment.delete({ where: { id: commentId } });
  revalidatePath("/admin/comments");
  revalidatePath(`/post/${row.postId}`);
  redirect("/admin/comments?deleted=1");
}
