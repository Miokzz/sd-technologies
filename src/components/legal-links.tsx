import Link from "next/link";
import { legalIdentity } from "@/config/legal";

export function LegalLinks() {
  if (!legalIdentity.complete && process.env.NODE_ENV === "production") {
    return <Link href="/#servicos">Design &amp; desenvolvimento web</Link>;
  }
  return (
    <nav className="legal-links" aria-label="Informações legais">
      <Link href="/legal">Informações legais</Link>
      <Link href="/termos">Termos</Link>
      <Link href="/privacidade">Privacidade</Link>
      <Link href="/cookies">Cookies</Link>
    </nav>
  );
}
