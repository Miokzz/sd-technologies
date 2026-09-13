"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

/** Native details without JS; interruptible, measured motion after hydration. */
export function AnimatedDisclosure({
  summary,
  children,
  className = "",
  defaultOpen = false,
}: {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}) {
  const root = useRef<HTMLDetailsElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const desired = useRef(defaultOpen);
  const [expanded, setExpanded] = useState(defaultOpen);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    function settle() {
      const element = root.current;
      animation.current?.cancel();
      animation.current = null;
      if (element) {
        element.open = desired.current;
        delete element.dataset.animating;
      }
    }
    window.addEventListener("resize", settle, { passive: true });
    media.addEventListener("change", settle);
    return () => {
      window.removeEventListener("resize", settle);
      media.removeEventListener("change", settle);
      animation.current?.cancel();
    };
  }, []);

  function toggle(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    const element = root.current;
    const content = panel.current;
    if (!element || !content) return;

    const from = element.getBoundingClientRect().height;
    animation.current?.cancel();
    const next = !desired.current;
    desired.current = next;
    setExpanded(next);
    content.inert = !next;
    if (!next && content.contains(document.activeElement))
      event.currentTarget.focus();

    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !element.animate
    ) {
      element.open = next;
      delete element.dataset.animating;
      animation.current = null;
      return;
    }

    element.open = true;
    const style = getComputedStyle(element);
    const border =
      parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const to =
      event.currentTarget.getBoundingClientRect().height +
      border +
      (next ? content.offsetHeight : 0);
    element.dataset.animating = "true";
    const transition = element.animate(
      [{ height: `${from}px` }, { height: `${to}px` }],
      {
        duration: Math.min(520, Math.max(280, Math.abs(to - from) * 1.1)),
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
    animation.current = transition;
    transition.onfinish = () => {
      if (animation.current !== transition) return;
      element.open = desired.current;
      delete element.dataset.animating;
      animation.current = null;
    };
  }

  return (
    <details
      ref={root}
      className={`disclosure ${className}`}
      open={defaultOpen}
      data-expanded={expanded}
      onToggle={() => {
        const element = root.current;
        if (element && !animation.current && element.open !== desired.current) {
          desired.current = element.open;
          setExpanded(element.open);
          if (panel.current) panel.current.inert = !element.open;
        }
      }}
    >
      <summary onClick={toggle} aria-expanded={expanded}>
        {summary}
      </summary>
      <div ref={panel} className="disclosure-panel">
        {children}
      </div>
    </details>
  );
}
