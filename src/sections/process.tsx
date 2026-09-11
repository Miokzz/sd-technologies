import { ProcessTimeline } from "@/components/process-timeline";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Process() {
  return (
    <section className="process section-dark" id="processo">
      <div className="container process-grid">
        <Reveal className="process-heading-wrap">
          <SectionHeading
            inverse
            eyebrow="Como trabalhamos"
            title={<>Do primeiro “oi” ao <span className="accent-text">site no ar.</span></>}
            description="Um processo simples de entender, sem desaparecer por semanas e voltar com uma surpresa."
          />
          <p className="process-aside">Estratégia antes da decoração. Revisão antes da publicação.</p>
        </Reveal>
        <ProcessTimeline />
      </div>
    </section>
  );
}
