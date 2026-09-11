import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServicesExplorer } from "@/components/services-explorer";

export function Services() {
  return (
    <section className="services section-light" id="servicos">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="O que fazemos agora"
            title={<>Presença digital com <span className="accent-text">intenção.</span></>}
            description="Sem pacote genérico. Cada projeto parte do que a empresa precisa comunicar, vender ou organizar melhor."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ServicesExplorer />
        </Reveal>
      </div>
    </section>
  );
}
