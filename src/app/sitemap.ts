import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllSlugs } from "@/data/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/inventario",
    "/vende-tu-auto",
    "/consignacion",
    "/financiamiento",
    "/servicio",
    "/contacto",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const vehicles = getAllSlugs().map((slug) => ({
    url: `${SITE.url}/inventario/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...routes, ...vehicles];
}
