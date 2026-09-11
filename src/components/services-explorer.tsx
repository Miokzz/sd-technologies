"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { services } from "@/config/site";

export function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const selected = services[active];

  return (
    <div className="services-explorer">
      <div className="services-list" role="list">
        {services.map((service, index) => (
          <button
            key={service.title}
            type="button"
            className={active === index ? "is-active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span className="services-list__number">{String(index + 1).padStart(2, "0")}</span>
            <span className="services-list__title">{service.title}</span>
            <span className="services-list__arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <div className="service-display" aria-live="polite">
        <div className="service-display__chrome">
          <span>Capability</span>
          <span>S&amp;D / {String(active + 1).padStart(2, "0")}</span>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selected.title}
            className="service-display__content"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <span className="service-display__meta">{selected.meta}</span>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="service-display__signal" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
