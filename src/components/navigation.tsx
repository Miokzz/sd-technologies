"use client";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
const links = [
  ["Nosso trabalho", "#capacidade"],
  ["Serviços", "#servicos"],
  ["Sobre nós", "#sobre"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", close);
    function outside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    }
    document.addEventListener("pointerdown", outside);
    const media = matchMedia("(min-width: 761px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="shell nav-inner">
        <a
          className="brand-lockup"
          href="#inicio"
          aria-label="S&D Technologies — início"
          onClick={() => setOpen(false)}
        >
          <BrandMark small />
          <span>
            <b>S&amp;D</b>{" "}
            <small>Technologies</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              href={href}
              key={href}
              aria-current={active === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="nav-contact"
          href="#processo"
          onClick={() => setOpen(false)}
          aria-current={active === "#processo" ? "location" : undefined}
        >
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
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label="Navegação mobile"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-menu-clip">
          <div className="mobile-menu-inner">
            {[...links, ["Processo", "#processo"]].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active === href ? "location" : undefined}
              >
                {label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
