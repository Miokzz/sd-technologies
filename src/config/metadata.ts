import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
      url: path,
      title: socialTitle,
      description,
      images: [
        {
          url: "/brand/logo-original.png",
          width: 1254,
          height: 1254,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: "/brand/logo-original.png", alt: siteConfig.name }],
    },
  };
}
