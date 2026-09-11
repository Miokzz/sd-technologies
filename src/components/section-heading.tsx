import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <div className={`section-heading ${inverse ? "section-heading--inverse" : ""}`}>
      <div className="eyebrow-row">
        <span className="eyebrow-dot" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
