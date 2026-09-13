"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const navItems = [
  ["Capacidade", "#capacidade"],
  ["Serviços", "#servicos"],
  ["Processo", "#processo"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
] as const;

const capabilities = [
  { code: "01", title: "Direction", text: "Estratégia, mensagem e uma direção visual que não parece comprada em kit." },
  { code: "02", title: "Motion", text: "Movimento com função: chama atenção, cria ritmo e ajuda a contar a história." },
  { code: "03", title: "Development", text: "Front-end moderno, responsivo e organizado para continuar evoluindo." },
  { code: "04", title: "Performance", text: "Experiências bonitas que continuam leves e agradáveis de usar." },
];

const services = [
  { n: "01", title: "Sites institucionais", eyebrow: "Presença", copy: "Para empresas que precisam parecer, no digital, tão profissionais quanto já são fora da tela." },
  { n: "02", title: "Landing pages", eyebrow: "Conversão", copy: "Uma mensagem, um objetivo e uma experiência construída para levar a pessoa até a ação." },
  { n: "03", title: "Redesign", eyebrow: "Evolução", copy: "Quando o negócio amadureceu, mas o site ficou preso numa versão antiga da empresa." },
  { n: "04", title: "Negócios locais", eyebrow: "Descoberta", copy: "Serviços, localização, contato e confiança organizados para quem precisa decidir rápido." },
  { n: "05", title: "Catálogos digitais", eyebrow: "Apresentação", copy: "Produtos e serviços com hierarquia clara, visual forte e navegação sem atrito." },
  { n: "06", title: "Integrações", eyebrow: "Conexão", copy: "WhatsApp, formulários, mapas, analytics e os pontos que ligam o site ao dia a dia do negócio." },
];

const process = [
  ["01", "Conversa", "Entendemos a empresa, o momento e o que o projeto precisa resolver."],
  ["02", "Estratégia", "Definimos conteúdo, hierarquia, páginas, prioridades e caminho visual."],
  ["03", "Design", "Transformamos a ideia em uma experiência própria, com ritmo e identidade."],
  ["04", "Código", "Construímos a interface, responsividade, interações e integrações."],
  ["05", "Revisão", "Testamos, ajustamos e refinamos até o conjunto ficar coerente."],
  ["06", "Lançamento", "Publicamos, validamos produção e organizamos os próximos passos."],
] as const;

const trust = [
  ["Escopo claro", "O que entra, o que fica de fora e o que pode virar etapa futura."],
  ["Revisão por etapas", "Você acompanha o projeto sem precisar esperar até o final para opinar."],
  ["Contato direto", "Menos camadas entre a conversa e quem realmente está construindo."],
  ["Sem promessa inventada", "Prazo, limitações e decisões técnicas explicados antes de virar problema."],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/mark-transparent.svg"
      alt="Símbolo S&D Technologies"
      width={820}
      height={620}
      className={className}
      priority
    />
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 24 });
  const sy = useSpring(y, { stiffness: 300, damping: 24 });
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href}
      className={`magnetic-link ${dark ? "magnetic-link--dark" : ""}`}
      style={reduce ? undefined : { x: sx, y: sy }}
      onPointerMove={(event) => {
        if (reduce || event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.13);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.13);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="experience-nav">
      <a className="experience-brand" href="#inicio" aria-label="S&D Technologies, início">
        <LogoMark />
        <span><strong>S&amp;D</strong> Technologies</span>
      </a>
      <nav aria-label="Navegação principal" className="experience-nav__desktop">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a href="#contato" className="experience-nav__cta">Solicitar orçamento <Arrow /></a>
      <button
        type="button"
        className="experience-menu"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="experience-nav__mobile"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 24px 24px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 0 0 24px 24px)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 24px 24px)" }}
          >
            {navItems.map(([label, href], index) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.045 }}
              >
                <span>0{index + 1}</span>{label}
              </motion.a>
            ))}
            <a className="experience-nav__mobile-cta" href="#contato" onClick={() => setOpen(false)}>Quero conversar <Arrow /></a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const px = useSpring(mx, { stiffness: 75, damping: 20 });
  const py = useSpring(my, { stiffness: 75, damping: 20 });
  const markX = useTransform(px, [0, 1], [-24, 24]);
  const markY = useTransform(py, [0, 1], [-18, 18]);
  const wordX = useTransform(px, [0, 1], [14, -14]);
  const wordY = useTransform(py, [0, 1], [8, -8]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -14]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.78]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const reduce = useReducedMotion();

  return (
    <section
      className="hero-scene"
      id="inicio"
      ref={ref}
      onPointerMove={(event) => {
        if (reduce || event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width);
        my.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => { mx.set(0.5); my.set(0.5); }}
    >
      <div className="hero-scene__noise" />
      <div className="hero-scene__shell">
        <div className="hero-scene__copy">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>S&amp;D / digital technology studio</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}>
            Construímos a<br />
            <span>próxima versão</span><br />
            da sua empresa.
          </motion.h1>
          <motion.div className="hero-scene__bottom" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
            <p>Sites e experiências digitais que fazem o negócio parecer tão forte na tela quanto ele já é no mundo real.</p>
            <div className="hero-actions">
              <MagneticLink href="#contato">Quero meu site <Arrow /></MagneticLink>
              <a href="#capacidade" className="text-link">Ver capacidade <span>↓</span></a>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-scene__art" style={reduce ? undefined : { rotate, scale, opacity }}>
          <div className="hero-orbit hero-orbit--a" />
          <div className="hero-orbit hero-orbit--b" />
          <motion.div className="hero-ghost-word" style={reduce ? undefined : { x: wordX, y: wordY }}>DIGITAL</motion.div>
          <motion.div className="hero-mark" style={reduce ? undefined : { x: markX, y: markY }}>
            <LogoMark />
          </motion.div>
          <motion.div className="hero-token hero-token--one" animate={reduce ? undefined : { y: [0, -14, 0], rotate: [-4, 2, -4] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
            <span>01</span><strong>strategy</strong>
          </motion.div>
          <motion.div className="hero-token hero-token--two" animate={reduce ? undefined : { y: [0, 12, 0], rotate: [6, 1, 6] }} transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}>
            <span>02</span><strong>design</strong>
          </motion.div>
          <motion.div className="hero-token hero-token--three" animate={reduce ? undefined : { x: [0, 9, 0], rotate: [-7, -2, -7] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}>
            <span>03</span><strong>code</strong>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div>
          <span>STRATEGY</span><i>✦</i><span>DESIGN</span><i>✦</i><span>DEVELOPMENT</span><i>✦</i><span>MOTION</span><i>✦</i><span>PERFORMANCE</span><i>✦</i><span>STRATEGY</span><i>✦</i><span>DESIGN</span><i>✦</i><span>DEVELOPMENT</span><i>✦</i><span>MOTION</span><i>✦</i><span>PERFORMANCE</span><i>✦</i>
        </div>
      </div>
    </section>
  );
}

function Capability() {
  const [active, setActive] = useState(0);
  return (
    <section className="capability-scene" id="capacidade">
      <div className="scene-shell">
        <Reveal className="capability-scene__headline">
          <span className="eyebrow eyebrow--dark">01 / capacidade</span>
          <h2>Não queremos dizer que fazemos sites <em>bons.</em><br />O próprio site precisa provar.</h2>
        </Reveal>
        <div className="capability-grid">
          <Reveal className="capability-copy" delay={0.08}>
            <p>Enquanto o portfólio cresce, a S&amp;D usa a própria presença digital como laboratório. Tipografia, movimento, direção, responsividade e código ficam expostos aqui.</p>
            <div className="capability-tabs" role="tablist" aria-label="Capacidades">
              {capabilities.map((item, index) => (
                <button key={item.code} className={active === index ? "active" : ""} onClick={() => setActive(index)} type="button">
                  <span>{item.code}</span><strong>{item.title}</strong>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal className="capability-stage" delay={0.14}>
            <div className={`capability-stage__canvas mode-${active}`}>
              <div className="capability-stage__browser">
                <div className="browser-top"><i /><i /><i /><span>sd / live experiment</span></div>
                <div className="browser-copy"><small>{capabilities[active].title}</small><b>{capabilities[active].text}</b></div>
                <div className="browser-ui">
                  <span className="ui-line ui-line--a" />
                  <span className="ui-line ui-line--b" />
                  <span className="ui-block ui-block--a" />
                  <span className="ui-block ui-block--b" />
                  <span className="ui-block ui-block--c" />
                </div>
              </div>
              <div className="capability-stage__badge"><span>LIVE</span><strong>S&amp;D</strong></div>
              <LogoMark className="capability-stage__mark" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-scene" id="servicos">
      <div className="scene-shell">
        <Reveal className="services-scene__intro">
          <span className="eyebrow">02 / o que fazemos agora</span>
          <h2>Websites são o começo.<br /><span>Mas já começamos direito.</span></h2>
        </Reveal>
        <div className="service-stack">
          {services.map((item, index) => (
            <motion.article
              key={item.n}
              className={`service-piece service-piece--${index + 1}`}
              whileHover={{ y: -8, rotate: index % 2 ? 1.5 : -1.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="service-piece__top"><span>{item.n}</span><span>{item.eyebrow}</span></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="service-piece__corner"><Arrow /></div>
            </motion.article>
          ))}
        </div>
        <div className="services-big-word" aria-hidden="true">BUILD</div>
      </div>
    </section>
  );
}

function Future() {
  return (
    <section className="future-scene">
      <div className="future-scene__rail" aria-hidden="true">
        <span>WEB</span><i>→</i><span>SYSTEMS</span><i>→</i><span>AUTOMATION</span><i>→</i><span>AI</span><i>→</i><span>PRODUCTS</span>
      </div>
      <div className="scene-shell future-scene__content">
        <Reveal>
          <span className="eyebrow eyebrow--dark">03 / construídos para evoluir</span>
          <h2>Hoje, presença digital.<br />Amanhã, a tecnologia que move o negócio.</h2>
        </Reveal>
        <Reveal className="future-scene__note" delay={0.1}>
          <p>Não vendemos como serviço o que ainda não entregamos. Mas a S&amp;D foi criada para crescer de websites para sistemas, automações, inteligência artificial e produtos digitais.</p>
          <span>Visão futura, não promessa vazia.</span>
        </Reveal>
        <div className="future-orbit">
          {["WEB", "SYSTEMS", "AUTOMATION", "AI", "DIGITAL PRODUCTS"].map((item, index) => (
            <motion.div key={item} className={`future-pill future-pill--${index + 1}`} whileHover={{ scale: 1.05, rotate: 0 }}>
              <span>0{index + 1}</span><strong>{item}</strong><small>{index === 0 ? "NOW" : "NEXT"}</small>
            </motion.div>
          ))}
          <div className="future-orbit__core"><LogoMark /></div>
        </div>
      </div>
    </section>
  );
}

function StoryTrust() {
  return (
    <section className="story-scene" id="sobre">
      <div className="scene-shell story-grid">
        <Reveal className="story-card story-card--founders">
          <span className="eyebrow">04 / S&amp;D</span>
          <div className="founder-display">
            <span className="founder-display__name">Samuel</span>
            <span className="founder-display__amp">&amp;</span>
            <span className="founder-display__name">David</span>
          </div>
          <p>Duas pessoas, uma empresa enxuta e uma ideia simples: tecnologia boa precisa aproximar o cliente da solução, não colocar mais camadas no caminho.</p>
          <div className="founder-mark"><LogoMark /></div>
        </Reveal>
        <Reveal className="story-card story-card--narrative" delay={0.08}>
          <span className="story-kicker">NOSSA HISTÓRIA</span>
          <h2>Começamos pela parte mais visível de uma empresa: a impressão que ela deixa.</h2>
          <p>O site costuma ser o primeiro lugar onde alguém tenta entender quem você é. Se ele parece genérico, antigo ou improvisado, toda a empresa paga essa conta em percepção.</p>
          <p>A S&amp;D nasce para construir essa camada com intenção. Primeiro a presença digital. Depois, conforme crescemos, a tecnologia por trás do negócio.</p>
        </Reveal>
      </div>
      <div className="scene-shell trust-board">
        <Reveal className="trust-board__intro">
          <span className="eyebrow eyebrow--dark">05 / segurança para contratar</span>
          <h2>Clareza também é parte do produto.</h2>
        </Reveal>
        <div className="trust-list">
          {trust.map(([title, text], index) => (
            <Reveal key={title} className="trust-item" delay={index * 0.05}>
              <span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-scene" id="processo">
      <div className="scene-shell">
        <Reveal className="process-head">
          <span className="eyebrow">06 / processo</span>
          <h2>Do primeiro “oi” ao<br />site no ar.</h2>
          <p>O cliente não precisa virar especialista em desenvolvimento para saber exatamente em que etapa o projeto está.</p>
        </Reveal>
        <div className="process-track">
          {process.map(([n, title, text]) => (
            <motion.article key={n} className="process-step" whileHover={{ x: 8 }}>
              <span className="process-step__number">{n}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <span className="process-step__arrow">→</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("sending");
    setMessage("");
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      whatsapp: String(data.get("whatsapp") || ""),
      email: String(data.get("email") || ""),
      segment: String(data.get("segment") || ""),
      city: String(data.get("city") || ""),
      hasSite: String(data.get("hasSite") || "") as "sim" | "nao" | "",
      currentSite: String(data.get("currentSite") || ""),
      projectType: String(data.get("projectType") || ""),
      budget: String(data.get("budget") || ""),
      deadline: String(data.get("deadline") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Não conseguimos enviar agora.");
      setState("success");
      setMessage("Recebemos seu briefing. Vamos conversar sobre o próximo passo.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Não conseguimos enviar agora.");
    }
  }

  return (
    <section className="contact-scene" id="contato">
      <div className="contact-scene__giant" aria-hidden="true">LET&apos;S BUILD</div>
      <div className="scene-shell contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">07 / próximo passo</span>
          <h2>Tem uma empresa?<br /><span>Vamos construir a próxima versão dela.</span></h2>
          <p>Você não precisa chegar com briefing perfeito. Conte o cenário, o que incomoda hoje e onde quer chegar.</p>
          <MagneticLink href="#briefing" dark>Começar um projeto <Arrow /></MagneticLink>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.08}>
          <form id="briefing" className="contact-form" onSubmit={submit}>
            <div className="contact-form__head"><span>BRIEFING / 01</span><span>leva ~2 min</span></div>
            <div className="contact-form__grid">
              <label><span>Nome *</span><input name="name" required autoComplete="name" /></label>
              <label><span>Empresa</span><input name="company" autoComplete="organization" /></label>
              <label><span>WhatsApp *</span><input name="whatsapp" required autoComplete="tel" inputMode="tel" /></label>
              <label><span>E-mail *</span><input name="email" required type="email" autoComplete="email" /></label>
              <label><span>Segmento *</span><input name="segment" required /></label>
              <label><span>Cidade *</span><input name="city" required autoComplete="address-level2" /></label>
              <label><span>Possui site?</span><select name="hasSite" defaultValue=""><option value="">Selecione</option><option value="sim">Sim</option><option value="nao">Não</option></select></label>
              <label><span>URL atual</span><input name="currentSite" placeholder="https://" inputMode="url" /></label>
              <label><span>Tipo de projeto *</span><select name="projectType" required defaultValue=""><option value="">Selecione</option><option>Site institucional</option><option>Landing page</option><option>Redesign</option><option>Catálogo digital</option><option>Ainda não sei</option></select></label>
              <label><span>Faixa de orçamento</span><select name="budget" defaultValue=""><option value="">Prefiro conversar</option><option>Até R$ 1.500</option><option>R$ 1.500 – R$ 3.000</option><option>R$ 3.000 – R$ 5.000</option><option>Acima de R$ 5.000</option></select></label>
              <label><span>Prazo</span><select name="deadline" defaultValue=""><option value="">Sem prazo definido</option><option>Até 2 semanas</option><option>2 a 4 semanas</option><option>1 a 2 meses</option></select></label>
              <label className="wide"><span>Conte sobre o projeto *</span><textarea name="message" required minLength={12} rows={5} /></label>
              <label className="contact-honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <button type="submit" className="contact-submit" disabled={state === "sending"}>{state === "sending" ? "Enviando..." : "Enviar briefing"}<Arrow /></button>
            <p className={`contact-status ${state}`} role="status">{message}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="experience-footer">
      <div className="scene-shell experience-footer__grid">
        <div className="experience-footer__brand"><LogoMark /><div><strong>S&amp;D Technologies</strong><span>Samuel &amp; David</span></div></div>
        <nav>{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="experience-footer__meta"><span>© 2026 S&amp;D Technologies</span><span>Strategy / Design / Development / Web</span></div>
      </div>
    </footer>
  );
}

export function ExperienceSite() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Pular para o conteúdo</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Capability />
        <Services />
        <Future />
        <StoryTrust />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
