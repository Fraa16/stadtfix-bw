import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs mit abschließendem Slash — konsistent mit Sitemap/Canonicals aus dem SEO-Konzept
  trailingSlash: true,
  // CSS inline in den <head> statt render-blockendem <link> — schneller First
  // Paint für Erstbesucher (atomic/Tailwind-CSS, siehe Lighthouse).
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
