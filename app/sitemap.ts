import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { getSiteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().toString().replace(/\/$/, "");
  const routes = [
    "",
    "/asset-direction",
    "/metodo-avm",
    "/progetti",
    "/chi-e-avm",
    "/contatti",
    "/consulenza",
    "/privacy-policy",
    "/cookie-policy"
  ];
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority:
      route === ""
        ? 1
        : route === "/progetti" || route === "/asset-direction" || route === "/metodo-avm"
          ? 0.9
          : 0.72
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/progetti/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.72
  }));

  return [...staticRoutes, ...projectRoutes];
}
