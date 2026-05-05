"use server";

import crypto from "crypto";
import { PostStatus } from "@/lib/generated/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { pullTelegramUpdates, setTelegramWebhook } from "@/lib/telegram";

function boolValue(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

export async function saveTelegramConfigAction(formData: FormData) {
  await requireAdmin();
  const existing = await prisma.telegramConfig.findFirst();
  const botToken = String(formData.get("botToken") || "").trim() || existing?.botToken || "";
  const channelId = String(formData.get("channelId") || "").trim();
  const channelName = String(formData.get("channelName") || "").trim() || null;
  const defaultCategoryId = String(formData.get("defaultCategoryId") || "");
  const defaultStatus = String(formData.get("defaultStatus") || "DRAFT") as PostStatus;

  if (!botToken || !channelId || !defaultCategoryId) {
    redirect("/admin/telegram?error=missing");
  }

  const data = {
    botToken,
    channelId,
    channelName,
    defaultCategoryId,
    defaultStatus,
    autoPublish: boolValue(formData, "autoPublish"),
    downloadMedia: boolValue(formData, "downloadMedia"),
    isEnabled: boolValue(formData, "isEnabled"),
    updatedAt: new Date()
  };

  if (existing) {
    await prisma.telegramConfig.update({ where: { id: existing.id }, data });
  } else {
    await prisma.telegramConfig.create({
      data: {
        ...data,
        webhookSecret: crypto.randomBytes(24).toString("hex")
      }
    });
  }

  revalidatePath("/admin/telegram");
  redirect("/admin/telegram?saved=1");
}

export async function rotateTelegramSecretAction() {
  await requireAdmin();
  const existing = await prisma.telegramConfig.findFirst();
  if (!existing) redirect("/admin/telegram?error=missing");

  await prisma.telegramConfig.update({
    where: { id: existing.id },
    data: { webhookSecret: crypto.randomBytes(24).toString("hex") }
  });

  revalidatePath("/admin/telegram");
  redirect("/admin/telegram?saved=1");
}

export async function setTelegramWebhookAction(formData: FormData) {
  await requireAdmin();
  const config = await prisma.telegramConfig.findFirst();
  const publicBaseUrl = String(formData.get("publicBaseUrl") || "").trim();
  if (!config || !publicBaseUrl) redirect("/admin/telegram?error=missing");

  await setTelegramWebhook(config, publicBaseUrl);
  redirect("/admin/telegram?webhook=1");
}

export async function pullTelegramUpdatesAction() {
  await requireAdmin();
  const config = await prisma.telegramConfig.findFirst();
  if (!config?.isEnabled) redirect("/admin/telegram?error=disabled");

  const results = await pullTelegramUpdates(config);
  const created = results.filter((item) => "created" in item).length;
  revalidatePath("/");
  revalidatePath("/admin/telegram");
  redirect(`/admin/telegram?pulled=${created}`);
}
