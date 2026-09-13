import { BrandMark } from "@/components/brand-mark";
import { Navigation } from "@/components/navigation";
import { Capability } from "@/components/capability";
import { MotionSystem } from "@/components/motion-system";
import { AnimatedDisclosure } from "@/components/animated-disclosure";
import { LegalLinks } from "@/components/legal-links";

const offerings = [
  {
    title: "Um site para sua empresa.",
    text: "Para explicar o que você faz, mostrar o que importa e facilitar o primeiro contato.",
    items: [
      "Estrutura de páginas e navegação",
      "Apresentação dos serviços e diferenciais",
      "Design adaptado ao celular",
    ],
    note: "Para quem precisa transmitir confiança desde a primeira visita.",
    kind: "Site institucional",
  },
  {
    title: "Uma página com um objetivo.",
    text: "Uma campanha, um lançamento ou um serviço. Do primeiro argumento até o pedido de orçamento.",
    items: [
      "Uma narrativa para sua oferta",
      "Argumentos e chamadas para ação",
      "Integrações definidas no escopo",
    ],
    note: "Para dar a uma campanha, produto ou serviço um lugar próprio.",
    kind: "Landing page",
  },
  {
    title: "Um novo olhar para o que existe.",
    text: "Seu negócio mudou e o site ficou para trás? Revemos conteúdo, navegação, design e código.",
    items: [
      "Revisão da experiência atual",
      "Nova organização visual e de conteúdo",
      "Ajustes de velocidade e responsividade",
    ],
    note: "Para quando o site já não acompanha a qualidade do seu negócio.",
    kind: "Redesign",
  },
];
const questions = [
  [
    "Quanto custa e quanto tempo leva?",
    "Depende das páginas, do conteúdo e das funcionalidades. Depois da primeira conversa, você recebe uma proposta com escopo, valor, prazo e condições de pagamento antes de decidir.",
  ],
  [
    "Preciso ter os textos e as imagens prontos?",
    "Não precisa chegar com tudo organizado. Na conversa inicial, definimos o que já existe, o que precisa ser produzido e quem ficará responsável por cada parte.",
  ],
  [
    "Já tenho domínio e hospedagem. Posso manter?",
    "Sim. Avaliamos a estrutura atual e combinamos a melhor forma de publicar. Também podemos orientar a escolha e a configuração de domínio e hospedagem.",
  ],
  [
    "E depois que o site estiver no ar?",
    "Entregamos os acessos e os materiais combinados na proposta. Atualizações e manutenção podem ser contratadas conforme a necessidade. As condições de propriedade e suporte ficam claras desde o início.",
  ],
];

export function StudioSite() {
  return (
    <>
      <MotionSystem />
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Navigation />
      <main id="main-content">
        <section className="hero shell" id="inicio" aria-labelledby="hero-title">
          <div className="hero-intro">
            <p>Estúdio independente de design &amp; desenvolvimento</p>
            <span>Samuel + David / S&amp;D</span>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h1 id="hero-title">
                O seu valor.
                <br />
                <em>À primeira</em>
                <br />
                <span className="hero-last">
                  vista<span className="blue-dot">.</span>
                </span>
              </h1>
              <div className="hero-copy-foot">
                <span className="hero-cross" aria-hidden="true">
                  ↳
                </span>
                <div>
                  <p className="hero-description">
                    Design que expressa quem você é. Desenvolvimento que faz a
                    experiência acontecer. Criamos sites à altura do seu negócio.
                  </p>
                  <div className="hero-actions">
                    <a className="button button-blue" href="#capacidade">
                      Explore nosso trabalho <span aria-hidden="true">↗</span>
                    </a>
                    <a className="text-link" href="#servicos">
                      O que fazemos <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hero-art"
              role="img"
              aria-label="Design e código: dois olhares, uma direção."
            >
              <div className="poster-top">
                <span>S&amp;D<br />TECHNOLOGIES</span>
                <span>Design<br />encontra código.</span>
              </div>
              <div className="poster-composition" aria-hidden="true">
                <span className="poster-word word-design">design</span>
                <span className="poster-amp">&amp;</span>
                <span className="poster-word word-code">código</span>
                <span className="poster-register register-one">+</span>
                <span className="poster-register register-two">+</span>
              </div>
              <div className="poster-bottom">
                <p>Dois olhares.<br /><em>Uma direção.</em></p>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="poster-colophon">
                <span>Identidade em cada detalhe.</span>
                <span>SD—01</span>
              </div>
            </div>
          </div>
          <div className="hero-end">
            <span>Da primeira ideia ao último detalhe.</span>
            <a href="#capacidade">
              Conheça a S&amp;D em movimento <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section className="manifesto shell" aria-labelledby="manifesto-title">
          <p className="eyebrow">
            <span className="section-number">01 /</span> O que nos move
          </p>
          <div>
            <h2 id="manifesto-title">
              Um site deve mostrar<br />por que <em>escolher você.</em>
            </h2>
            <p>
              Um bom site conecta o que sua empresa tem de melhor ao que seu
              cliente precisa entender. Com identidade, clareza e uma experiência
              que convida a continuar.
            </p>
          </div>
        </section>
        <Capability />
        <section
          className="services shell section-space"
          id="servicos"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <p className="eyebrow">
              <span className="section-number">03 /</span> O que fazemos
            </p>
            <h2 id="services-title">
              Cada negócio,
              <br />
              <em>um ponto de partida.</em>
            </h2>
          </div>
          <div className="service-list">
            {offerings.map((item, i) => (
              <AnimatedDisclosure
                className="service-row"
                key={item.title}
                defaultOpen={i === 0}
                summary={
                  <>
                    <span className="service-index" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <span className="service-name">
                      <span className="service-kind">{item.kind}</span>
                      <span className="service-title">{item.title}</span>
                    </span>
                    <span className="plus" aria-hidden="true" />
                  </>
                }
              >
                <div className="service-content">
                  <p className="service-note">{item.note}</p>
                  <div>
                    <p>{item.text}</p>
                    <ul className="service-items">
                      {item.items.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                    <a className="text-link" href="#processo">
                      Entenda nosso processo <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </AnimatedDisclosure>
            ))}
          </div>
          <div className="service-support">
            <span>O cuidado continua nos bastidores.</span>
            <p>
              Estrutura para os buscadores, atenção ao carregamento e revisão
              antes de publicar. Funcionalidades e manutenção são combinadas na
              proposta.
            </p>
          </div>
        </section>
        <section
          className="process section-space shell"
          id="processo"
          aria-labelledby="process-title"
        >
          <div className="section-heading">
            <p className="eyebrow">
              <span className="section-number">04 /</span> Do início à entrega
            </p>
            <h2 id="process-title">
              Da primeira ideia
              <br />
              ao site no ar.
            </h2>
          </div>
          <div className="process-layout">
            <div className="process-lead">
              <p>
                Você sabe o que está sendo feito, o que vem a seguir e o que vai
                receber.
              </p>
              <div className="project-agreement">
                <span>Antes de começar</span>
                <p>
                  Escopo, investimento, prazo e responsabilidades definidos na
                  proposta.
                </p>
                <a className="text-link" href="#faq">
                  Tire suas dúvidas <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="process-chapters">
              <article>
                <span className="chapter-phase">
                  01 / Antes da primeira tela
                </span>
                <h3>Entender, de verdade.</h3>
                <p>
                  Conversamos sobre seu negócio, seu público e o que precisa
                  mudar. Organizamos o conteúdo e combinamos escopo, prioridades
                  e prazo.
                </p>
                <span className="chapter-result">
                  Você recebe → uma direção e uma proposta clara.
                </span>
              </article>
              <article>
                <span className="chapter-phase">
                  02 / Com o projeto na mesa
                </span>
                <h3>Dar forma. Fazer funcionar.</h3>
                <p>
                  Desenhamos a experiência, revisamos com você e construímos o
                  site. Design e código conversam desde o início.
                </p>
                <span className="chapter-result">
                  Você acompanha → telas, decisões e uma versão navegável.
                </span>
              </article>
              <article>
                <span className="chapter-phase">
                  03 / Antes e depois de publicar
                </span>
                <h3>Revisar até fazer sentido.</h3>
                <p>
                  Conferimos conteúdo, links, funcionalidades e diferentes
                  telas. Publicamos, verificamos o site no ar e organizamos a
                  entrega.
                </p>
                <span className="chapter-result">
                  Você fica com → o site e os acessos combinados.
                </span>
              </article>
            </div>
          </div>
        </section>
        <section className="about" id="sobre" aria-labelledby="about-title">
          <div className="shell about-layout">
            <div className="founder-type">
              <span>Samuel</span>
              <span className="founder-and" aria-hidden="true">
                &amp;
              </span>
              <span>
                David<span className="blue-dot">.</span>
              </span>
              <p>É daí que vem S&amp;D.</p>
            </div>
            <div className="about-copy">
              <p className="eyebrow">
              <span className="section-number">05 /</span> Pessoas, antes de pixels.
            </p>
              <h2 id="about-title">
                Você fala com
                <br />
                <em>quem faz.</em>
              </h2>
              <p>
                Somos Samuel e David. Uma equipe pequena de tecnologia e design
                digital. Você fala diretamente com quem pensa, desenha e
                desenvolve seu site.
              </p>
              <p>
                Isso significa menos repasses, decisões próximas e atenção ao
                que faz diferença para o seu negócio.
              </p>
              <div className="future-note">
                <span>Proximidade faz parte do projeto.</span>
                <p>
                  Da organização das primeiras ideias à publicação, Samuel e
                  David acompanham as escolhas que dão forma à sua presença
                  digital.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="faq shell section-space"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">
              <span className="section-number">06 /</span> Sem pontas soltas
            </p>
            <h2 id="faq-title">
              Antes de
              <br />
              <em>dar o próximo passo.</em>
            </h2>
          </div>
          <div>
            {questions.map(([q, a]) => (
              <AnimatedDisclosure
                key={q}
                summary={
                  <>
                    {q}
                    <span className="plus" aria-hidden="true" />
                  </>
                }
              >
                <p>{a}</p>
              </AnimatedDisclosure>
            ))}
          </div>
        </section>
        <section className="closing">
          <div className="shell closing-inner">
            <div>
              <p className="eyebrow">S&amp;D Technologies</p>
              <h2>
                O próximo site
                <br />
                <em>pode ser o seu.</em>
              </h2>
            </div>
            <a className="closing-link" href="#servicos">
              Encontre seu ponto de partida{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="footer shell">
        <div className="footer-wordmark" aria-hidden="true">
          S&amp;D<span>Technologies</span>
          <span className="footer-arrow">↗</span>
        </div>
        <a
          className="brand-lockup"
          href="#inicio"
          aria-label="S&D Technologies — início"
        >
          <BrandMark small />
          <span>
            <b>S&amp;D</b>{" "}
            <small>Technologies</small>
          </span>
        </a>
        <p>Feito por quem vai fazer o seu.</p>
        <a className="text-link" href="#inicio">
          Voltar ao início ↑
        </a>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} S&amp;D Technologies</span>
          <LegalLinks />
        </div>
      </footer>
    </>
  );
}
