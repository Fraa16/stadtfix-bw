import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs mit abschließendem Slash — konsistent mit Sitemap/Canonicals aus dem SEO-Konzept
  trailingSlash: true,
};

export default nextConfig;
