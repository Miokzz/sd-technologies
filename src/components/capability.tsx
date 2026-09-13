"use client";

import { useState, type CSSProperties } from "react";
import { BrandMark } from "@/components/brand-mark";

const formats = [
  ["wide", "Amplo"],
  ["square", "Quadrado"],
  ["portrait", "Vertical"],
] as const;
const themes = [
  ["paper", "Papel"],
  ["blue", "Azul"],
  ["ink", "Tinta"],
] as const;

export function Capability() {
  const [format, setFormat] = useState<(typeof formats)[number][0]>("wide");
  const [theme, setTheme] = useState<(typeof themes)[number][0]>("blue");
  const [weight, setWeight] = useState(650);
  const [replay, setReplay] = useState(0);

  function reset() {
    setFormat("wide");
    setWeight(650);
    setTheme("blue");
    setReplay((value) => value + 1);
  }

  return (
    <section
      className="capability"
      id="capacidade"
      aria-labelledby="capability-title"
    >
      <div className="shell">
        <div className="capability-heading">
          <div>
            <p className="eyebrow">
              <span className="section-number">02 /</span> Feito aqui. Explore você.
            </p>
            <h2 id="capability-title">
              Nosso trabalho,
              <br />
              <em>em suas mãos.</em>
            </h2>
          </div>
          <p>
            Uma composição da nossa própria identidade. Você assume a direção:
            altere formato, cor e tipografia. Veja como cada escolha transforma
            o resultado.
          </p>
        </div>
        <div className="playground">
          <div className="playground-toolbar">
            <span>
              <i aria-hidden="true" />
              Composição viva / S&amp;D
            </span>
            <button type="button" onClick={reset} className="reset-button">
              Recomeçar <span aria-hidden="true">↺</span>
            </button>
          </div>
          <div className="playground-body">
            <div
              className="playground-stage"
              role="group"
              aria-label="Prévia interativa da identidade S&D"
            >
              <div
                className={`specimen format-${format} theme-${theme}`}
                style={{ "--type-weight": weight } as CSSProperties}
              >
                <div className="specimen-content" key={replay}>
                  <div className="specimen-top">
                    <span>S&amp;D Technologies</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div className="specimen-middle">
                    <div className="specimen-title">
                      <span>Uma ideia.</span>
                      <em>Muitos</em>
                      <span>
                        formatos<span className="blue-dot">.</span>
                      </span>
                    </div>
                    <div className="specimen-mark">
                      <BrandMark />
                    </div>
                  </div>
                  <div className="specimen-bottom">
                    <span>
                      O espaço muda.
                      <br />A identidade fica.
                    </span>
                    <span>
                      Design &amp;
                      <br />
                      desenvolvimento
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="playground-controls">
              <fieldset>
                <legend>01 / Formato</legend>
                <div className="segmented">
                  {formats.map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={format === value}
                      onClick={() => setFormat(value)}
                    >
                      <span
                        className={`format-icon icon-${value}`}
                        aria-hidden="true"
                      />
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="theme-control">
                <legend>02 / Cor</legend>
                <div>
                  {themes.map(([value, label]) => (
                    <button
                      type="button"
                      className={`swatch swatch-${value}`}
                      key={value}
                      aria-label={label}
                      aria-pressed={theme === value}
                      onClick={() => setTheme(value)}
                    >
                      <span aria-hidden="true">
                        {theme === value ? "✓" : ""}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="weight-control">
                <label htmlFor="type-weight">
                  03 / Peso <output htmlFor="type-weight">{weight}</output>
                </label>
                <input
                  id="type-weight"
                  type="range"
                  min="300"
                  max="800"
                  step="10"
                  value={weight}
                  onChange={(event) => setWeight(Number(event.target.value))}
                />
              </div>
              <button
                type="button"
                className="replay-button"
                onClick={() => setReplay((value) => value + 1)}
              >
                Rever movimento <span aria-hidden="true">↻</span>
              </button>
            </div>
          </div>
        </div>
        <div className="capability-foot">
          <p>
            O formato muda. A intenção permanece. Design e desenvolvimento trabalhando juntos, na prática.
          </p>
          <span>Experimento autoral da S&amp;D.</span>
        </div>
      </div>
    </section>
  );
}
