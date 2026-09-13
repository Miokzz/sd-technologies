"use client";

import Image from "next/image";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { faqs, processSteps, services } from "@/config/site";

const nav = [
  ["Serviços", "#servicos"],
  ["Processo", "#processo"],
  ["Sobre", "#sobre"],
  ["FAQ", "#faq"],
  ["Contato", "#contato"],
] as const;

const rotatingWords = ["presença", "experiência", "produto", "tecnologia"];

function Mark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/mark-transparent.svg"
      alt="S&D Technologies"
      width={718}
      height={542}
      className={className}
      priority
    />
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function RibbonField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / Math.max(rect.width, 1);
      pointerY = (event.clientY - rect.top) / Math.max(rect.height, 1);
    };

    const draw = () => {
      frame += 0.006;
      ctx.clearRect(0, 0, width, height);
      const base = Math.min(width, height);

      for (let band = 0; band < 8; band += 1) {
        ctx.beginPath();
        const alpha = 0.09 + band * 0.018;
        ctx.strokeStyle = `rgba(22, 101, 255, ${alpha})`;
        ctx.lineWidth = band % 3 === 0 ? 1.5 : 1;

        for (let x = -40; x <= width + 40; x += 12) {
          const t = x / Math.max(width, 1);
          const wave = Math.sin(t * Math.PI * 2.3 + frame * (1.1 + band * 0.04) + band * 0.7);
          const wave2 = Math.sin(t * Math.PI * 5.1 - frame * 0.7 + band * 0.4) * 0.24;
          const attract = (pointerX - 0.5) * base * 0.08 * (t - 0.5);
          const py = (pointerY - 0.5) * base * 0.035;
          const y = height * (0.25 + band * 0.07) + wave * base * (0.045 + band * 0.003) + wave2 * base * 0.03 + attract + py;
          if (x === -40) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove, { passive: true });
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  return <canvas ref={canvasRef} className="ribbon-field" aria-hidden="true" />;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sd-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#inicio" className="sd-brand" aria-label="S&D Technologies, início">
        <Mark />
        <span><b>S&amp;D</b> Technologies</span>
      </a>
      <nav className="sd-nav-links" aria-label="Navegação principal">
        {nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="sd-nav-cta" href="#contato">Iniciar projeto <Arrow /></a>
      <button
        type="button"
        className="sd-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="sd-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            {nav.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>
            ))}
            <a className="sd-mobile-cta" href="#contato" onClick={() => setOpen(false)}>Iniciar projeto <Arrow /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const sx = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const sy = useSpring(mouseY, { stiffness: 90, damping: 24 });
  const markX = useTransform(sx, [0, 1], [-12, 12]);
  const markY = useTransform(sy, [0, 1], [-8, 8]);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="sd-hero"
      onPointerMove={(event) => {
        if (reduce || event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width);
        mouseY.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
    >
      <RibbonField />
      <div className="sd-hero-grid" aria-hidden="true" />
      <motion.div className="sd-hero-inner" style={reduce ? undefined : { opacity: heroOpacity }}>
        <motion.div className="sd-hero-copy" style={reduce ? undefined : { y: headlineY }}>
          <motion.p className="sd-kicker" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            Samuel &amp; David / tecnologia &amp; soluções digitais
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}>
            Sua empresa já existe.<br />Nós construímos a <em>próxima versão.</em>
          </motion.h1>
          <motion.div className="sd-hero-footer" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <p>Sites, experiências e produtos digitais com estratégia, direção visual e código de verdade. Sem cara de template. Sem teatro.</p>
            <div className="sd-hero-actions">
              <a className="sd-button sd-button-dark" href="#contato">Quero começar <Arrow /></a>
              <a className="sd-text-link" href="#servicos">Ver o que fazemos <span>↓</span></a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="sd-hero-mark" style={reduce ? undefined : { x: markX, y: markY }}>
          <Mark />
          <span className="sd-hero-mark-label">S&amp;D / 2026</span>
        </motion.div>
      </motion.div>
      <div className="sd-hero-index"><span>01</span><span>Scroll to explore</span></div>
    </section>
  );
}

function Statement() {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setWordIndex((value) => (value + 1) % rotatingWords.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="sd-statement">
      <div className="sd-shell">
        <Reveal>
          <p className="sd-section-label">/ nossa ideia</p>
          <div className="sd-statement-copy">
            <h2>Não vendemos página.<br />Construímos <span className="sd-slot"><AnimatePresence mode="wait"><motion.b key={rotatingWords[wordIndex]} initial={{ y: "85%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-85%", opacity: 0 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>{rotatingWords[wordIndex]}</motion.b></AnimatePresence></span>.</h2>
            <p>O site é a primeira camada. A meta é deixar a empresa mais clara, mais desejável e mais fácil de escolher.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const displayServices = services.slice(0, 6);
  const [active, setActive] = useState(0);

  return (
    <section className="sd-services" id="servicos">
      <div className="sd-shell sd-services-layout">
        <div className="sd-services-copy">
          <Reveal>
            <p className="sd-section-label">/ serviços atuais</p>
            <h2>O que a S&amp;D faz hoje.</h2>
            <p className="sd-services-intro">Começamos pela web porque é onde a percepção de uma empresa costuma ganhar ou perder valor em segundos.</p>
          </Reveal>
          <div className="sd-service-list">
            {displayServices.map((service, index) => (
              <button
                key={service.title}
                type="button"
                className={active === index ? "is-active" : ""}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>
                <strong>{service.title}</strong>
                <small>{service.meta}</small>
                <i>↗</i>
              </button>
            ))}
          </div>
        </div>

        <div className="sd-service-stage-wrap">
          <div className={`sd-service-stage stage-${active + 1}`}>
            <div className="sd-service-stage-top"><span>LIVE SYSTEM</span><span>0{active + 1}/06</span></div>
            <div className="sd-service-stage-copy">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.32 }}>
                  <small>{displayServices[active].meta}</small>
                  <h3>{displayServices[active].title}</h3>
                  <p>{displayServices[active].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="sd-stage-lines" aria-hidden="true"><span/><span/><span/><span/></div>
            <div className="sd-stage-mark"><Mark /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="sd-proof">
      <div className="sd-shell">
        <Reveal className="sd-proof-head">
          <p className="sd-section-label">/ prova, não promessa</p>
          <h2>O próprio site é parte do portfólio.</h2>
          <p>Enquanto os projetos comerciais chegam, usamos a própria S&amp;D para mostrar o padrão que queremos entregar: direção, detalhe, movimento e performance trabalhando juntos.</p>
        </Reveal>
        <div className="sd-proof-grid">
          <Reveal className="sd-proof-main">
            <div className="sd-proof-window">
              <div className="sd-proof-toolbar"><span/><span/><span/><b>sd.system / responsive</b></div>
              <div className="sd-proof-canvas">
                <div className="sd-proof-type"><small>DESIGN ENGINEERING</small><strong>Responsive<br/>by design.</strong></div>
                <div className="sd-proof-device sd-proof-device-a"><i/><i/><i/></div>
                <div className="sd-proof-device sd-proof-device-b"><i/><i/></div>
                <div className="sd-proof-device sd-proof-device-c"><i/><i/><i/></div>
              </div>
            </div>
          </Reveal>
          <Reveal className="sd-proof-metric" delay={0.08}><span>01</span><strong>Mobile first</strong><p>Layout repensado em cada largura, não só espremido.</p></Reveal>
          <Reveal className="sd-proof-metric" delay={0.12}><span>02</span><strong>Motion com função</strong><p>Movimento para orientar e dar ritmo, não para distrair.</p></Reveal>
          <Reveal className="sd-proof-metric" delay={0.16}><span>03</span><strong>Base técnica</strong><p>Next.js, TypeScript, SEO, acessibilidade e performance.</p></Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="sd-process" id="processo">
      <div className="sd-shell">
        <Reveal className="sd-process-head">
          <p className="sd-section-label">/ processo</p>
          <h2>Sem caixa-preta.</h2>
          <p>Você sabe o que está acontecendo, o que vem depois e o que precisa aprovar.</p>
        </Reveal>
        <div className="sd-process-list">
          {processSteps.map((step, index) => (
            <Reveal className="sd-process-row" key={step.number} delay={index * 0.035}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="sd-about" id="sobre">
      <div className="sd-shell sd-about-layout">
        <Reveal className="sd-about-mark"><Mark /><span>Samuel &amp; David</span></Reveal>
        <Reveal className="sd-about-copy" delay={0.08}>
          <p className="sd-section-label">/ sobre a S&amp;D</p>
          <h2>Pequena por escolha.<br/>Ambiciosa por natureza.</h2>
          <p>A S&amp;D Technologies nasce da parceria entre Samuel e David. Hoje, nosso foco é criar experiências web com atendimento direto, decisões rápidas e atenção que normalmente se perde em estruturas grandes.</p>
          <p>Nossa visão é crescer além de websites: sistemas, automações, inteligência artificial e produtos digitais. Sem vender o futuro antes de saber entregá-lo.</p>
          <div className="sd-trust-strip">
            <span><b>01</b>Contato direto</span>
            <span><b>02</b>Escopo claro</span>
            <span><b>03</b>Revisão por etapas</span>
            <span><b>04</b>Entrega organizada</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Future() {
  return (
    <section className="sd-future">
      <div className="sd-future-marquee" aria-hidden="true">
        <span>WEB</span><i>→</i><span>SYSTEMS</span><i>→</i><span>AUTOMATION</span><i>→</i><span>AI</span><i>→</i><span>DIGITAL PRODUCTS</span>
      </div>
      <div className="sd-shell sd-future-copy">
        <Reveal>
          <p className="sd-section-label">/ construídos para evoluir</p>
          <h2>Começamos pela web.<br/>Não terminamos nela.</h2>
        </Reveal>
        <Reveal delay={0.08}><p>Essa é a direção da empresa, não uma lista de serviços fingidos. Primeiro fazemos muito bem o que já entregamos. Depois ampliamos a tecnologia.</p></Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="sd-faq" id="faq">
      <div className="sd-shell sd-faq-layout">
        <Reveal className="sd-faq-head"><p className="sd-section-label">/ dúvidas comuns</p><h2>Antes de contratar.</h2><p>As respostas que costumam evitar ruído lá na frente.</p></Reveal>
        <div className="sd-faq-list">
          {faqs.map((item, index) => {
            const active = open === index;
            return (
              <div className={`sd-faq-item ${active ? "is-open" : ""}`} key={item.question}>
                <button type="button" onClick={() => setOpen(active ? null : index)} aria-expanded={active}>
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{item.question}</strong><i>{active ? "−" : "+"}</i>
                </button>
                <AnimatePresence initial={false}>
                  {active && <motion.div className="sd-faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}><p>{item.answer}</p></motion.div>}
                </AnimatePresence>
              </div>
            );
          })}
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
      setMessage("Briefing recebido. Vamos continuar a conversa por aqui.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Não conseguimos enviar agora.");
    }
  }

  return (
    <section className="sd-contact" id="contato">
      <div className="sd-shell">
        <Reveal className="sd-contact-head"><p className="sd-section-label">/ próximo passo</p><h2>Tem um negócio que merece parecer melhor na internet?</h2><p>Conta pra gente o cenário. O briefing pode começar simples.</p></Reveal>
        <div className="sd-contact-layout">
          <Reveal className="sd-contact-aside">
            <Mark />
            <p><b>S&amp;D Technologies</b><span>Samuel &amp; David</span></p>
            <small>Contato direto. Projeto sob medida. Sem camada desnecessária entre você e quem constrói.</small>
          </Reveal>
          <Reveal className="sd-form-wrap" delay={0.08}>
            <form className="sd-form" onSubmit={submit}>
              <div className="sd-form-grid">
                <label><span>Nome *</span><input name="name" required autoComplete="name" /></label>
                <label><span>Empresa</span><input name="company" autoComplete="organization" /></label>
                <label><span>WhatsApp *</span><input name="whatsapp" required inputMode="tel" autoComplete="tel" /></label>
                <label><span>E-mail *</span><input name="email" type="email" required autoComplete="email" /></label>
                <label><span>Segmento *</span><input name="segment" required /></label>
                <label><span>Cidade *</span><input name="city" required autoComplete="address-level2" /></label>
                <label><span>Já possui site?</span><select name="hasSite" defaultValue=""><option value="">Selecione</option><option value="sim">Sim</option><option value="nao">Não</option></select></label>
                <label><span>URL atual</span><input name="currentSite" inputMode="url" placeholder="https://" /></label>
                <label><span>Projeto *</span><select name="projectType" required defaultValue=""><option value="">Selecione</option><option>Site institucional</option><option>Landing page</option><option>Redesign</option><option>Catálogo digital</option><option>Ainda não sei</option></select></label>
                <label><span>Orçamento</span><select name="budget" defaultValue=""><option value="">Prefiro conversar</option><option>Até R$ 1.500</option><option>R$ 1.500 – R$ 3.000</option><option>R$ 3.000 – R$ 5.000</option><option>Acima de R$ 5.000</option></select></label>
                <label><span>Prazo</span><select name="deadline" defaultValue=""><option value="">Sem prazo definido</option><option>Até 2 semanas</option><option>2 a 4 semanas</option><option>1 a 2 meses</option></select></label>
                <label className="sd-form-wide"><span>Conte sobre o projeto *</span><textarea name="message" rows={5} minLength={12} required /></label>
                <label className="sd-honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <button className="sd-form-submit" type="submit" disabled={state === "sending"}><span>{state === "sending" ? "Enviando..." : "Enviar briefing"}</span><Arrow /></button>
              <p className={`sd-form-status ${state}`} role="status">{message}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sd-footer">
      <div className="sd-shell sd-footer-grid">
        <a href="#inicio" className="sd-footer-brand"><Mark /><span><b>S&amp;D</b> Technologies</span></a>
        <nav>{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="sd-footer-meta"><span>© 2026 S&amp;D Technologies</span><span>Strategy / Design / Development</span></div>
      </div>
    </footer>
  );
}

export function StudioSite() {
  return (
    <>
      <a className="sd-skip" href="#main-content">Pular para o conteúdo</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Statement />
        <Services />
        <Proof />
        <Process />
        <About />
        <Future />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
