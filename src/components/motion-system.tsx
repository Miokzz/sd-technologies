"use client";
import { useEffect } from "react";
// Native scroll, one observer, on-demand frames. No animation loop at rest.
export function MotionSystem() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const art = document.querySelector<HTMLElement>(".hero-art");
    const hero = document.querySelector<HTMLElement>(".hero");
    let frame = 0;
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) active = entry.isIntersecting;
          else entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.12 },
    );
    if (hero) observer.observe(hero);
    document
      .querySelectorAll(
        ".manifesto, .capability, .process-chapters article, .founder-type",
      )
      .forEach((el) => observer.observe(el));
    const scroll = () => {
      if (!art || !active || reduced.matches || frame) return;
      frame = requestAnimationFrame(() => {
        art.style.setProperty(
          "--travel",
          `${Math.min(window.scrollY * 0.09, 70)}px`,
        );
        frame = 0;
      });
    };
    const reset = () => {
      if (reduced.matches) art?.style.setProperty("--travel", "0px");
    };
    window.addEventListener("scroll", scroll, { passive: true });
    reduced.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
      reduced.removeEventListener("change", reset);
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
