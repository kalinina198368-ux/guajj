"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const SITE_SETTINGS_ID = "main";

export async function updateSiteSettingsAction(formData: FormData) {
  await requireAdmin();
  const allow = formData.get("allowAnonymousComments") === "on";

  await prisma.siteSettings.upsert({
    where: { id: SITE_SETTINGS_ID },
    create: { id: SITE_SETTINGS_ID, allowAnonymousComments: allow },
    update: { allowAnonymousComments: allow }
  });

  revalidatePath("/admin/settings");
  redirect("/admin/settings?saved=1");
}
