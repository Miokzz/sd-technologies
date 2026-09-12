export const siteConfig = {
  name: "S&D Technologies",
  founders: ["Samuel", "David"],
  description:
    "Sites institucionais, landing pages e redesign com design e desenvolvimento juntos. Conheça a S&D Technologies, criada por Samuel e David.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sd-technologies.vercel.app",
} as const;
