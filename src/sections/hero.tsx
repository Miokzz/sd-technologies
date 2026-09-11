import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-shell">
        <div className="hero-copy">
          <Reveal>
            <div className="hero-kicker">
              <span className="status-dot" aria-hidden="true" />
              Tecnologia &amp; soluções digitais
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1>
              Sua empresa já evoluiu.<br />
              <span>Sua presença digital precisa acompanhar.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="hero-bottom-copy">
              <p>
                Criamos sites rápidos, autorais e pensados para negócios que cansaram de parecer menores do que realmente são.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contato"><span>Quero meu site</span><span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#sobre">Conhecer a S&amp;D <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-art" delay={0.15} y={18}>
          <HeroVisual />
        </Reveal>
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <div>
          <span>DESIGN</span><i>·</i><span>DEVELOPMENT</span><i>·</i><span>PERFORMANCE</span><i>·</i><span>DETAIL</span><i>·</i>
          <span>DESIGN</span><i>·</i><span>DEVELOPMENT</span><i>·</i><span>PERFORMANCE</span><i>·</i><span>DETAIL</span><i>·</i>
        </div>
      </div>
    </section>
  );
}
