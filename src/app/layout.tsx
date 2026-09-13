import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const siteUrl = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "S&D Technologies | Sites, design e desenvolvimento web",
    template: "%s | S&D Technologies",
  },
  description: siteConfig.description,
  applicationName: "S&D Technologies",
  authors: [{ name: "S&D Technologies" }],
  creator: "S&D Technologies",
  publisher: "S&D Technologies",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/mark-transparent.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/logo-original.png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "S&D Technologies",
    title: "S&D Technologies | Sites, design e desenvolvimento web",
    description: siteConfig.description,
    images: [
      {
        url: "/brand/logo-original.png",
        width: 1254,
        height: 1254,
        alt: "S&D Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S&D Technologies | Sites, design e desenvolvimento web",
    description: siteConfig.description,
    images: ["/brand/logo-original.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f4ef",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
