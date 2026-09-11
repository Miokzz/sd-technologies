"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/config/site";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="process-timeline" ref={ref}>
      <div className="process-rail" aria-hidden="true">
        <motion.span style={reduce ? { scaleY: 1 } : { scaleY }} />
      </div>
      {processSteps.map((step) => (
        <motion.article
          key={step.number}
          className="process-step"
          initial={reduce ? false : { opacity: 0.35 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5, once: false }}
        >
          <div className="process-step__number">{step.number}</div>
          <div className="process-step__copy">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          <span className="process-step__dot" aria-hidden="true" />
        </motion.article>
      ))}
    </div>
  );
}
