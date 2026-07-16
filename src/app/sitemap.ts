import type { MetadataRoute } from "next";
import { segments } from "@/content/segments";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/taubenabwehr/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/ueber-uns/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/kontakt/`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const segmentRoutes: MetadataRoute.Sitemap = segments.map((s) => ({
    url: `${site.url}/taubenabwehr/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}/`,
    lastModified: new Date(p.datePublished),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...segmentRoutes, ...blogRoutes];
}
