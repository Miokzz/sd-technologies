import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { siteConfig } from "@/config/site";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { FaqSection } from "@/sections/faq-section";
import { Future } from "@/sections/future";
import { Hero } from "@/sections/hero";
import { Impact } from "@/sections/impact";
import { Portfolio } from "@/sections/portfolio";
import { Positioning } from "@/sections/positioning";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.webp`,
    description: siteConfig.description,
    founder: siteConfig.founders.map((name) => ({ "@type": "Person", name })),
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Positioning />
        <Services />
        <Future />
        <Portfolio />
        <Process />
        <About />
        <Impact />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
