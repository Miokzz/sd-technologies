import { BrandMark } from "@/components/brand-mark";
import { Navigation } from "@/components/navigation";
import { Capability } from "@/components/capability";
import { MotionSystem } from "@/components/motion-system";

const offerings = [
  {
    title: "Um site para sua empresa.",
    text: "Para explicar o que você faz, mostrar o que importa e facilitar o primeiro contato.",
    items: "Sites institucionais · Negócios locais · Portfólios",
    note: "Sua empresa, bem apresentada.",
  },
  {
    title: "Uma página com um objetivo.",
    text: "Uma campanha, um lançamento ou um serviço. Do primeiro argumento até o pedido de orçamento.",
    items: "Landing pages · Catálogos · Formulários",
    note: "Menos distração. Um caminho claro.",
  },
  {
    title: "Um novo olhar para o que existe.",
    text: "Seu negócio mudou e o site ficou para trás? Revemos conteúdo, navegação, design e código.",
    items: "Redesign · Responsividade · Performance",
    note: "Preservar a identidade. Melhorar a experiência.",
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
        <section
          className="hero shell"
          id="inicio"
          aria-labelledby="hero-title"
        >
          <div className="hero-intro">
            <p>Design e desenvolvimento web</p>
            <span>Por Samuel &amp; David</span>
          </div>
          <div className="hero-composition">
            <h1 id="hero-title">
              <span>Seu negócio</span>
              <span>merece ser</span>
              <span className="hero-last">
                bem visto<span className="blue-dot">.</span>
              </span>
            </h1>
            <div className="hero-art" aria-hidden="true">
              <div className="art-orbit orbit-back" />
              <div className="brand-sheet">
                <div className="sheet-top">
                  <span>Dois olhares.</span>
                  <span>Uma direção. ↗</span>
                </div>
                <BrandMark preload />
                <div className="sheet-bottom">
                  <span>
                    Samuel
                    <br />
                    &amp; David
                  </span>
                  <span>
                    Design
                    <br />
                    &amp; tecnologia
                  </span>
                </div>
              </div>
              <div className="art-orbit orbit-front" />
              <span className="art-caption">
                O encontro entre pensar e fazer.
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              Criamos sites que apresentam sua empresa com clareza,
              personalidade e cuidado. Da primeira conversa ao último detalhe.
            </p>
            <a className="button button-blue" href="#servicos">
              Veja como podemos ajudar <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link hero-explore" href="#capacidade">
              Explore o que fazemos <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-end">
            <span>S&amp;D Technologies</span>
            <span>Design com intenção. Código com critério.</span>
            <span aria-hidden="true">↓</span>
          </div>
        </section>
        <section className="manifesto" aria-labelledby="manifesto-title">
          <div className="shell manifesto-inner">
            <p className="eyebrow">Bonito é o começo.</p>
            <h2 id="manifesto-title">
              O melhor site é aquele
              <br />
              que faz sentido <em>para você.</em>
            </h2>
            <div className="manifesto-copy">
              <span className="join-symbol" aria-hidden="true">
                &amp;
              </span>
              <p>
                O que sua empresa tem de bom precisa aparecer também na
                internet. A gente junta design e desenvolvimento para construir
                essa presença — com decisões que têm motivo, do texto ao botão.
              </p>
            </div>
          </div>
        </section>
        <section
          className="services shell section-space"
          id="servicos"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <p className="eyebrow">O que podemos construir</p>
            <h2 id="services-title">
              Seu momento.
              <br />
              <em>Nosso ponto de partida.</em>
            </h2>
          </div>
          <div className="service-list">
            {offerings.map((item, i) => (
              <details className="service-row" key={item.title} open={i === 0}>
                <summary>
                  <span className="service-title">{item.title}</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                <div className="service-content">
                  <p className="service-note">{item.note}</p>
                  <div>
                    <p>{item.text}</p>
                    <p className="service-items">{item.items}</p>
                    <a className="text-link" href="#processo">
                      Entenda nosso processo <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <div className="service-support">
            <span>E a parte que faz tudo funcionar?</span>
            <p>
              Integrações, SEO técnico, carregamento rápido e manutenção.
              Cuidamos da estrutura que sustenta a experiência.
            </p>
          </div>
        </section>
        <Capability />
        <section
          className="process section-space shell"
          id="processo"
          aria-labelledby="process-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Como trabalhamos</p>
            <h2 id="process-title">
              A conversa continua.
              <br />
              <em>O projeto avança.</em>
            </h2>
          </div>
          <div className="process-layout">
            <p className="process-lead">
              Você participa das decisões.
              <br />A gente cuida de conectar os pontos.
            </p>
            <div className="process-chapters">
              <article>
                <span className="chapter-phase">Antes da primeira tela</span>
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
                <span className="chapter-phase">Com o projeto na mesa</span>
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
                  Antes e depois do publicar
                </span>
                <h3>Revisar até fazer sentido.</h3>
                <p>
                  Conferimos conteúdo, links, formulário e diferentes telas.
                  Publicamos, verificamos o site no ar e organizamos a entrega.
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
            <div className="founder-type" aria-label="Samuel e David">
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
              <p className="eyebrow">Prazer, somos a S&amp;D.</p>
              <h2 id="about-title">
                Quem conversa com você
                <br />
                também põe <em>a mão no projeto.</em>
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
                <span>O que vem pela frente</span>
                <p>
                  Hoje, nosso foco é a web. Sistemas, automações e produtos
                  digitais fazem parte do caminho que queremos construir para a
                  S&amp;D.
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
            <p className="eyebrow">Podemos esclarecer</p>
            <h2 id="faq-title">
              Antes do
              <br />
              <em>primeiro “oi”.</em>
            </h2>
          </div>
          <div>
            {questions.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span className="plus" aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="closing">
          <div className="shell closing-inner">
            <div>
              <p className="eyebrow">S&amp;D Technologies</p>
              <h2>
                Dois olhares.
                <br />
                <em>Uma boa direção.</em>
              </h2>
            </div>
            <a className="text-link" href="#capacidade">
              Experimente a S&amp;D <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="footer shell">
        <a
          className="brand-lockup"
          href="#inicio"
          aria-label="S&D Technologies — início"
        >
          <BrandMark small />
          <span>
            <b>S&amp;D</b>
            <small>Technologies</small>
          </span>
        </a>
        <p>Feito por quem vai fazer o seu.</p>
        <a className="text-link" href="#inicio">
          Voltar ao início ↑
        </a>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} S&amp;D Technologies</span>
          <a href="#servicos">Design &amp; desenvolvimento web</a>
          <span>Samuel &amp; David</span>
        </div>
      </footer>
    </>
  );
}
