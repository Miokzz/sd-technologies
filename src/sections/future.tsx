import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/reveal";

export function Future() {
  return (
    <section className="future-section">
      <div className="container future-head">
        <Reveal>
          <span className="future-eyebrow">Construídos para evoluir</span>
          <h2>O nome já aponta para onde vamos.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p>
            Websites são o começo. A S&amp;D foi pensada para crescer junto com os problemas que a tecnologia pode resolver dentro de uma empresa.
          </p>
        </Reveal>
      </div>
      <div className="future-track" aria-label="Visão futura da S&D Technologies">
        {siteConfig.future.map((item, index) => (
          <div className="future-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            <em>{index === 0 ? "Agora" : "Visão futura"}</em>
          </div>
        ))}
      </div>
    </section>
  );
}
