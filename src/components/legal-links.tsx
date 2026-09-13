import Link from "next/link";

export function LegalLinks() {
  return (
    <nav className="legal-links" aria-label="Informações legais">
      <Link href="/legal">Informações legais</Link>
      <Link href="/termos">Termos</Link>
      <Link href="/privacidade">Privacidade</Link>
      <Link href="/cookies">Cookies</Link>
    </nav>
  );
}
