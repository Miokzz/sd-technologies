import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function Portfolio() {
  return (
    <section className="portfolio-waiting" aria-labelledby="portfolio-title">
      <div className="container portfolio-stage">
        <Reveal className="portfolio-note">
          <span>02 / Trabalhos</span>
          <p>Um arquivo de trabalhos reais, no tempo certo.</p>
        </Reveal>
        <Reveal className="portfolio-message" delay={0.08}>
          <h2 id="portfolio-title">Os primeiros projetos estão <span>tomando forma.</span></h2>
          <p>Este espaço será preenchido apenas com trabalhos reais, publicados e verificáveis. Até lá, o próprio site da S&amp;D mostra o padrão de critério, tecnologia e acabamento que queremos levar a cada projeto.</p>
        </Reveal>
        <Reveal className="portfolio-seal" delay={0.12}>
          <Image src="/brand/mark.png" alt="" width={160} height={120} />
          <span>WORK / IN / PROGRESS</span>
        </Reveal>
      </div>
    </section>
  );
}
