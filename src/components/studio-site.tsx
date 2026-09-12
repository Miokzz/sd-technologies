import { BrandMark } from "@/components/brand-mark";
import { Navigation } from "@/components/navigation";
import { Capability } from "@/components/capability";
import { MotionSystem } from "@/components/motion-system";

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
            <div className="hero-copy">
              <h1 id="hero-title">
                <span>Seu negócio</span>
                <span>merece ser</span>
                <span className="hero-last">
                  bem visto<span className="blue-dot">.</span>
                </span>
              </h1>
              <p className="hero-description">
                Sites que traduzem o valor do seu negócio e ajudam seu próximo
                cliente a escolher você. Design e desenvolvimento, do início à
                entrega.
              </p>
              <div className="hero-actions">
                <a className="button button-blue" href="#servicos">
                  Encontre o seu projeto <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#capacidade">
                  Veja na prática <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-label">
                <span>Dois olhares.</span>
                <span>Uma direção. ↗</span>
              </div>
              <div className="art-symbol">
                <div className="art-orbit orbit-back" />
                <BrandMark priority />
                <div className="art-orbit orbit-front" />
              </div>
              <div className="art-caption">
                <span>
                  O encontro entre
                  <br />
                  pensar e fazer.
                </span>
                <span className="art-signature">
                  Samuel
                  <br />
                  &amp; David
                </span>
              </div>
            </div>
          </div>
          <div className="hero-end">
            <span>Identidade que aparece.</span>
            <span>Experiência que funciona.</span>
            <span>Uma equipe do início ao fim.</span>
            <span aria-hidden="true">↓</span>
          </div>
        </section>
        <section className="manifesto" aria-labelledby="manifesto-title">
          <div className="shell manifesto-inner">
            <p className="eyebrow">Bonito é o começo.</p>
            <h2 id="manifesto-title">
              A primeira impressão conta.
              <br />
              <em>O que vem depois também.</em>
            </h2>
            <div className="value-grid">
              <article>
                <span aria-hidden="true">↗</span>
                <h3>Ser lembrado.</h3>
                <p>
                  Uma presença com a sua identidade, para sua empresa não
                  parecer igual a todas as outras.
                </p>
              </article>
              <article>
                <span aria-hidden="true">↳</span>
                <h3>Ser entendido.</h3>
                <p>
                  Conteúdo organizado para o visitante entender o que você faz e
                  por que faz sentido para ele.
                </p>
              </article>
              <article>
                <span aria-hidden="true">↔</span>
                <h3>Ser fácil de usar.</h3>
                <p>
                  Navegação clara, leitura confortável e cuidado com a
                  experiência em cada tamanho de tela.
                </p>
              </article>
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
                  <span className="service-index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="service-name">
                    <span className="service-kind">{item.kind}</span>
                    <span className="service-title">{item.title}</span>
                  </span>
                  <span className="plus" aria-hidden="true" />
                </summary>
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
              </details>
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
            <p className="eyebrow">Podemos esclarecer</p>
            <h2 id="faq-title">
              Boas decisões
              <br />
              <em>começam com clareza.</em>
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
                Seu próximo capítulo.
                <br />
                <em>Bem apresentado.</em>
              </h2>
            </div>
            <a className="text-link" href="#servicos">
              Descubra o caminho para seu site{" "}
              <span aria-hidden="true">↗</span>
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
