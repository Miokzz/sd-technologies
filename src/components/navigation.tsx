"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setCompact(current > 24);
    if (current > 180 && current > previous && !menuOpen) setHidden(true);
    if (current < previous) setHidden(false);
  });

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      className={`site-nav ${compact ? "site-nav--compact" : ""}`}
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-shell">
        <a className="nav-brand" href="#inicio" aria-label="S&D Technologies, início">
          <Image src="/brand/mark.png" alt="" width={58} height={44} priority />
          <span>S&amp;D <strong>Technologies</strong></span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contato">
          Solicitar orçamento
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 0 0 28px 28px)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__inner">
              <p className="mobile-menu__label">Navegação</p>
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index }}
                >
                  <span>0{index + 1}</span>{item.label}
                </motion.a>
              ))}
              <a className="mobile-menu__cta" href="#contato" onClick={() => setMenuOpen(false)}>
                Quero meu site <span>↗</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
