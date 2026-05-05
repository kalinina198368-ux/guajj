import MediaManager from "./media-manager";
import { prisma } from "@/lib/prisma";

export default async function AdminMediaPage() {
  const media = await prisma.mediaAsset.findMany({ orderBy: { createdAt: "desc" } });
  return <MediaManager media={media} />;
}
