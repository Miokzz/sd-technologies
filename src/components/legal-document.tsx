import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";
import { LegalLinks } from "@/components/legal-links";
import { legalDocuments, legalPublication } from "@/config/legal";

export type LegalSection = { id: string; title: string; content: ReactNode };

export function LegalFrame({ children }: { children: ReactNode }) {
  return (
    <div className="legal-page">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="shell nav-inner">
          <Link
            className="brand-lockup"
            href="/"
            aria-label="S&D Technologies — início"
          >
            <BrandMark small />
            <span>
              <b>S&amp;D</b>{" "}
              <small>Technologies</small>
            </span>
          </Link>
          <Link href="/" className="text-link">
            Voltar ao site <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>
      {children}
      <footer className="shell legal-footer">
        <Link href="/" className="legal-signature">
          Dois olhares. Uma direção.
        </Link>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} S&amp;D Technologies</span>
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}

export function LegalDocument({
  title,
  introduction,
  path,
  sections,
}: {
  title: string;
  introduction: string;
  path: string;
  sections: LegalSection[];
}) {
  return (
    <LegalFrame>
      <main id="main-content" className="shell">
        <div className="legal-intro">
          <Link href="/legal" className="eyebrow legal-back">
            Informações legais <span aria-hidden="true">/</span>
          </Link>
          <h1>
            {title}
            <span className="blue-dot">.</span>
          </h1>
          <p>{introduction}</p>
          <div className="legal-version">
            <span>Última atualização</span>
            <time dateTime="2026-09-12">{legalPublication.updated}</time>
          </div>
        </div>
        <div className="legal-layout">
          <aside className="legal-index">
            <p>Nesta página</p>
            <nav aria-label="Índice do documento">
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <article className="legal-content">
            {sections.map((section, index) => (
              <section
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <span className="legal-section-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </article>
        </div>
        <nav className="legal-related" aria-label="Outros documentos">
          {legalDocuments
            .filter((document) => document.href !== path)
            .map((document) => (
              <Link href={document.href} key={document.href}>
                <span>Continue a leitura</span>
                <strong>{document.title}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
        </nav>
      </main>
    </LegalFrame>
  );
}
