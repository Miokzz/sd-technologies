import { ExperienceSite } from "@/components/experience-site";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: siteConfig.founders.map((name) => ({ "@type": "Person", name })),
  };

  return (
    <>
      <ExperienceSite />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
