import type { Metadata } from "next";
import Link from "next/link";
import { LegalFrame } from "@/components/legal-document";
import { legalDocuments } from "@/config/legal";

export const metadata: Metadata = {
  title: "Informações legais",
  description:
    "Termos de uso, privacidade e tecnologias utilizadas no site da S&D Technologies.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <LegalFrame>
      <main id="main-content" className="shell legal-hub">
        <div className="legal-intro">
          <p className="eyebrow">S&amp;D / Informações legais</p>
          <h1>
            Clareza também
            <br />
            <em>faz parte do cuidado.</em>
          </h1>
          <p>
            As informações sobre o uso deste site, a sua privacidade e as
            tecnologias que fazem a experiência funcionar. Organizadas para você
            consultar quando precisar.
          </p>
        </div>
        <div className="legal-catalog">
          {legalDocuments.map((document, index) => (
            <Link key={document.href} href={document.href}>
              <span className="legal-catalog-number">0{index + 1}</span>
              <div>
                <h2>{document.title}</h2>
                <p>{document.description}</p>
              </div>
              <span className="legal-catalog-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
        <div className="legal-hub-note">
          <span>Sobre a contratação</span>
          <p>
            As condições de cada projeto são definidas em proposta e contrato
            próprios. Navegar neste site ou experimentar seus recursos não gera
            contratação nem cobrança.
          </p>
          <Link className="text-link" href="/#processo">
            Conheça o processo <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
    </LegalFrame>
  );
}
