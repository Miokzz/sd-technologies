import { Reveal } from "@/components/reveal";

export function Positioning() {
  return (
    <section className="positioning section-dark">
      <div className="container positioning-grid">
        <Reveal className="positioning-label">
          <span>01 / Posição</span>
          <p>Começamos pela web. A visão vai além dela.</p>
        </Reveal>
        <Reveal className="positioning-copy" delay={0.08}>
          <p className="big-statement">
            Somos mais do que <span>sites.</span>
          </p>
          <p className="positioning-body">
            Hoje, construímos a camada digital que apresenta sua empresa ao mundo. Amanhã, a mesma base pode evoluir para sistemas, automações e produtos que ajudam o negócio a operar melhor.
          </p>
        </Reveal>
      </div>
      <div className="container positioning-rule" aria-hidden="true">
        <span>S&amp;D Technologies</span><span>Built to evolve</span><span>2026 →</span>
      </div>
    </section>
  );
}
