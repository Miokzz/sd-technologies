import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { legalDocuments } from "@/config/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until each URL has a reliable content-update source.
  // Build time and the legal document version are not page modification dates.
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["/legal", ...legalDocuments.map((document) => document.href)].map(
      (path) => ({
        url: `${siteConfig.url}${path}`,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      }),
    ),
  ];
}
