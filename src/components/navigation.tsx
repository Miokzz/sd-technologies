"use client";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
const links = [
  ["Serviços", "#servicos"],
  ["Capacidade", "#capacidade"],
  ["Sobre nós", "#sobre"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", close);
    const media = matchMedia("(min-width: 761px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a
          className="brand-lockup"
          href="#inicio"
          aria-label="S&D Technologies — início"
          onClick={() => setOpen(false)}
        >
          <BrandMark small />
          <span>
            <b>S&amp;D</b>
            <small>Technologies</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#processo">
          Como trabalhamos <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={toggle}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Navegação mobile"
        hidden={!open}
      >
        {[...links, ["Processo", "#processo"]].map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
