import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section className="contact-section section-dark" id="contato">
      <div className="container contact-head">
        <Reveal>
          <span className="contact-index">04 / Contato</span>
          <h2>Tem uma empresa.<br /><span>Vamos construir a versão digital dela?</span></h2>
        </Reveal>
        <Reveal className="contact-direct" delay={0.08}>
          <p>Prefere ir direto ao ponto?</p>
          <div>
            {siteConfig.contact.whatsapp ? <a href={siteConfig.contact.whatsapp}>WhatsApp ↗</a> : <span>WhatsApp · em configuração</span>}
            {siteConfig.contact.email ? <a href={`mailto:${siteConfig.contact.email}`}>E-mail ↗</a> : <span>E-mail · em configuração</span>}
            {siteConfig.contact.instagram ? <a href={siteConfig.contact.instagram}>Instagram ↗</a> : <span>Instagram · em configuração</span>}
          </div>
        </Reveal>
      </div>
      <div className="container">
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
