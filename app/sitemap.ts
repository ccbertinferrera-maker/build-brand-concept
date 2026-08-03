import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buildbrandconcept.com";
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/agence", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/savoir-faire", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/realisations", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/mentions-legales", priority: 0.1, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
