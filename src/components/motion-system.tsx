"use client";

import { useEffect } from "react";

// One observer; animations finish once and never hide readable content.
export function MotionSystem() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".hero-art, .manifesto, .capability, .process-chapters article, .founder-type",
      )
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
