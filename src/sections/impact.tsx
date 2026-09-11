import { Reveal } from "@/components/reveal";

export function Impact() {
  return (
    <section className="impact-section">
      <div className="impact-ruler" aria-hidden="true"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
      <div className="container impact-inner">
        <Reveal>
          <p className="impact-overline">A impressão acontece antes do orçamento.</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2>Seu site não deveria <span>parecer apenas mais um site.</span></h2>
        </Reveal>
        <Reveal className="impact-footer" delay={0.12}>
          <p>Ele é uma parte visível da empresa que você está tentando construir.</p>
          <a href="#contato">Vamos elevar essa parte ↗</a>
        </Reveal>
      </div>
    </section>
  );
}
