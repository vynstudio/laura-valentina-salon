import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://lauravalentina.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // /brief is intentionally excluded — internal client form, robots noindex
  return [
    "",
    "/services",
    "/gallery",
    "/about",
    "/booking",
    "/contact",
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
