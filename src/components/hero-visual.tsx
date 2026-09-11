"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export function HeroVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 110, damping: 24 });
  const sy = useSpring(my, { stiffness: 110, damping: 24 });
  const markX = useTransform(sx, [-0.5, 0.5], [-15, 15]);
  const markY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const panelX = useTransform(sx, [-0.5, 0.5], [8, -8]);
  const panelY = useTransform(sy, [-0.5, 0.5], [6, -6]);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="hero-visual" onMouseMove={handleMove} onMouseLeave={reset}>
      <div className="hero-visual__grid" aria-hidden="true" />
      <div className="hero-visual__index" aria-hidden="true">S&amp;D / 26</div>
      <motion.div className="hero-visual__mark" style={reduce ? undefined : { x: markX, y: markY }}>
        <Image
          src="/brand/mark.webp"
          alt="Símbolo S&D Technologies"
          width={760}
          height={560}
          priority
          sizes="(max-width: 768px) 80vw, 42vw"
        />
      </motion.div>
      <motion.div className="hero-visual__panel" style={reduce ? undefined : { x: panelX, y: panelY }}>
        <span>01</span>
        <div>
          <p>Built for</p>
          <strong>the next version.</strong>
        </div>
      </motion.div>
      <div className="hero-visual__line hero-visual__line--a" aria-hidden="true" />
      <div className="hero-visual__line hero-visual__line--b" aria-hidden="true" />
      <div className="hero-visual__axis" aria-hidden="true"><span>X</span><span>Y</span></div>
    </div>
  );
}
