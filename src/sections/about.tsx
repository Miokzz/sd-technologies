import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const strengths = [
  ["Contato direto", "Você fala com quem está pensando e construindo o projeto."],
  ["Projeto sob medida", "A interface nasce da sua empresa, não de um kit pronto."],
  ["Código atual", "Base moderna, organizada e preparada para continuar evoluindo."],
  ["Mobile first", "A experiência não vira uma miniatura do desktop no celular."],
  ["Performance", "Menos peso, mais resposta e foco no que o usuário realmente precisa."],
  ["SEO técnico", "Estrutura semântica, metadados e base preparada para descoberta e indexação."],
  ["Detalhe", "Tipografia, ritmo, estados, acessibilidade e acabamento entram no trabalho."],
];

export function About() {
  return (
    <section className="about section-light" id="sobre">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre a S&D"
            title={<>Pequenos no time.<br /><span className="accent-text">Próximos no processo.</span></>}
            description="A S&D Technologies foi criada por Samuel e David para construir soluções digitais com contato direto, clareza e cuidado de ponta a ponta."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="founders-card" delay={0.05}>
            <div className="founders-card__top">
              <Image src="/brand/mark.png" alt="" width={130} height={98} />
              <span>Founders / 02</span>
            </div>
            <div className="founder-name"><span>01</span><strong>Samuel</strong></div>
            <div className="founder-name"><span>02</span><strong>David</strong></div>
            <p>Uma equipe enxuta significa menos camadas entre a conversa e a execução.</p>
          </Reveal>
          <Reveal className="strengths-list" delay={0.1}>
            {strengths.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
