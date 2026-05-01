import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { getSiteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().toString().replace(/\/$/, "");
  const routes = ["", "/progetti", "/metodo", "/servizi", "/investitori", "/contatti"];
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/progetti/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.72
  }));

  return [...staticRoutes, ...projectRoutes];
}
