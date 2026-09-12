import Link from "next/link";
export default function NotFound() {
  return (
    <main className="shell not-found">
      <p className="eyebrow">S&amp;D Technologies · 404</p>
      <h1>
        Esse caminho
        <br />
        ficou pelo caminho.
      </h1>
      <p>A página que você procura não está aqui. A S&amp;D está logo ali.</p>
      <Link className="button button-blue" href="/">
        Voltar para a S&amp;D <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
