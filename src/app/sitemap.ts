import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { legalDocuments, legalIdentity } from "@/config/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...(legalIdentity.complete
      ? ["/legal", ...legalDocuments.map((document) => document.href)].map(
          (path) => ({
            url: `${siteConfig.url}${path}`,
            lastModified: new Date("2026-09-12"),
            changeFrequency: "yearly" as const,
            priority: 0.3,
          }),
        )
      : []),
  ];
}
