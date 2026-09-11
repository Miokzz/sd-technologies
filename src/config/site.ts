import type { FaqItem, ProcessStep, Service } from "@/types/site";

export const siteConfig = {
  name: "S&D Technologies",
  shortName: "S&D",
  meaning: "Samuel & David",
  founders: ["Samuel", "David"],
  slogan: "Tecnologia que coloca sua empresa no próximo nível.",
  description:
    "A S&D Technologies cria experiências digitais modernas para empresas que querem uma presença online à altura do próprio negócio.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  future: ["Web", "Systems", "Automation", "AI", "Digital Products"],
  pricing: { enabled: false, note: "Definido por projeto após o briefing" },
} as const;

export const services: Service[] = [
  {
    title: "Sites institucionais",
    meta: "Presença digital",
    description:
      "Sites completos, rápidos e claros para apresentar sua empresa com autoridade e transformar visita em contato.",
  },
  {
    title: "Landing pages",
    meta: "Conversão",
    description:
      "Páginas focadas em campanhas, lançamentos e serviços, com narrativa enxuta e chamadas pensadas para gerar ação.",
  },
  {
    title: "Redesign",
    meta: "Modernização",
    description:
      "Reestruturamos experiências antigas sem apagar a identidade do negócio, melhorando clareza, estética e desempenho.",
  },
  {
    title: "Negócios locais",
    meta: "Descoberta",
    description:
      "Estrutura digital preparada para destacar localização, diferenciais, canais de contato e serviços de quem atende localmente.",
  },
  {
    title: "Portfólios & catálogos",
    meta: "Apresentação",
    description:
      "Arquiteturas visuais para mostrar trabalhos, produtos e serviços sem transformar tudo em uma parede de cards.",
  },
  {
    title: "Integrações",
    meta: "Conexão",
    description:
      "WhatsApp, formulários, mapas e pontos de contato integrados ao fluxo do site para diminuir atrito.",
  },
  {
    title: "SEO técnico",
    meta: "Base sólida",
    description:
      "Metadados, estrutura semântica, sitemap, robots e boas práticas técnicas para facilitar indexação e descoberta.",
  },
  {
    title: "Performance & manutenção",
    meta: "Continuidade",
    description:
      "Otimização de carregamento, experiência mobile e evolução do projeto quando sua empresa precisar mudar.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Conversa",
    description: "Entendemos o negócio, o momento da empresa e o que o site precisa resolver de verdade.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Organizamos mensagem, conteúdo, estrutura, páginas e prioridades antes de desenhar a interface.",
  },
  {
    number: "03",
    title: "Design",
    description: "Transformamos a estratégia em uma direção visual própria, coerente com a marca e com o público.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Construímos uma experiência responsiva com código moderno, performance e atenção às interações.",
  },
  {
    number: "05",
    title: "Revisão",
    description: "Testamos conteúdo, alinhamentos, telas, links e detalhes até a experiência ficar redonda.",
  },
  {
    number: "06",
    title: "Lançamento",
    description: "Publicamos, validamos a produção e deixamos a base pronta para continuar evoluindo.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Quanto custa um site?",
    answer:
      "O valor depende do escopo, número de páginas, conteúdo, integrações e nível de personalização. A proposta é definida depois de entendermos o que o projeto realmente precisa.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "O prazo varia conforme o tamanho e a complexidade. Depois da conversa inicial, entregamos uma estimativa clara com as etapas do projeto.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "As condições são combinadas na proposta comercial antes do início do desenvolvimento. Nada fica escondido no meio do caminho.",
  },
  {
    question: "Vocês atendem empresas de outras cidades?",
    answer:
      "Sim. Todo o processo pode acontecer de forma remota, com comunicação direta e revisões online.",
  },
  {
    question: "Posso usar meu domínio atual?",
    answer:
      "Sim. Se você já possui um domínio, ele pode ser conectado ao novo projeto durante a publicação.",
  },
  {
    question: "Vocês ajudam com domínio e hospedagem?",
    answer:
      "Sim. Podemos orientar a escolha e configurar a publicação, mantendo as contas e acessos de forma organizada.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. O projeto é pensado com prioridade para experiência mobile e depois refinado para tablet e desktop.",
  },
  {
    question: "Vocês fazem alterações depois?",
    answer:
      "Sim. Ajustes e manutenção podem ser contratados conforme a necessidade do negócio depois do lançamento.",
  },
  {
    question: "O site fica sendo meu?",
    answer:
      "A propriedade e as condições de entrega ficam descritas na proposta do projeto, incluindo acessos e ativos combinados.",
  },
];
