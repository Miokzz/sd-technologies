import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const siteUrl = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "S&D Technologies | Tecnologia e soluções digitais",
    template: "%s | S&D Technologies",
  },
  description: siteConfig.description,
  applicationName: "S&D Technologies",
  authors: [{ name: "S&D Technologies" }],
  creator: "S&D Technologies",
  publisher: "S&D Technologies",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/mark.webp", type: "image/webp" }],
    apple: [{ url: "/brand/mark.webp" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "S&D Technologies",
    title: "S&D Technologies | Tecnologia e soluções digitais",
    description: siteConfig.description,
    images: [{ url: "/brand/logo.webp", width: 800, height: 800, alt: "S&D Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "S&D Technologies | Tecnologia e soluções digitais",
    description: siteConfig.description,
    images: ["/brand/logo.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
