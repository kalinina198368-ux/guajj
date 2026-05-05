"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPublishedPostComment } from "@/lib/public-comment";

/**
 * 与后台 `post-form.tsx` 一致：`<form action={submitCommentAction}>` + FormData，
 * 不依赖客户端 onClick / fetch，避免水合或网络环境下「点了没反应」。
 */
export async function submitCommentAction(formData: FormData) {
  const postId = String(formData.get("postId") || "").trim();
  if (!postId) redirect("/");

  const parentRaw = formData.get("parentId");
  const parentId =
    typeof parentRaw === "string" && parentRaw.trim().length > 0 ? parentRaw.trim() : null;

  const bodyRaw = String(formData.get("body") || "");

  const result = await createPublishedPostComment(postId, bodyRaw, parentId);
  if (!result.ok) {
    redirect(`/post/${postId}?cerr=${encodeURIComponent(result.error)}`);
  }

  revalidatePath(`/post/${postId}`);
  redirect(`/post/${postId}?cok=1`);
}
