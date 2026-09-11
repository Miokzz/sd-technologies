import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function FaqSection() {
  return (
    <section className="faq-section section-light">
      <div className="container faq-grid">
        <Reveal className="faq-heading-wrap">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title={<>Antes de começar, <span className="accent-text">vale saber.</span></>}
            description="O que costuma aparecer na primeira conversa, respondido sem rodeios."
          />
        </Reveal>
        <Reveal delay={0.08}><Faq /></Reveal>
      </div>
    </section>
  );
}
