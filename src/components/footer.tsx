import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/brand/mark.webp" alt="" width={72} height={54} />
          <div>
            <strong>S&amp;D Technologies</strong>
            <span>Samuel &amp; David</span>
          </div>
        </div>
        <nav aria-label="Navegação do rodapé">
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-contact">
          {siteConfig.contact.email ? <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> : <span>E-mail · em configuração</span>}
          {siteConfig.contact.instagram ? <a href={siteConfig.contact.instagram}>Instagram ↗</a> : <span>Instagram · em configuração</span>}
          {siteConfig.contact.whatsapp ? <a href={siteConfig.contact.whatsapp}>WhatsApp ↗</a> : <span>WhatsApp · em configuração</span>}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} S&amp;D Technologies</span>
        <span>Technology / Design / Web</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
