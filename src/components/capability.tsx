"use client";
import { useState, type CSSProperties } from "react";
import { BrandMark } from "@/components/brand-mark";
export function Capability() {
  const [format, setFormat] = useState("wide");
  const [weight, setWeight] = useState(650);
  const [theme, setTheme] = useState("paper");
  const [replay, setReplay] = useState(0);
  function reset() {
    setFormat("wide");
    setWeight(650);
    setTheme("paper");
    setReplay((v) => v + 1);
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
            <p className="eyebrow">Menos promessa. Mais prática.</p>
            <h2 id="capability-title">
              Pode mexer.
              <br />
              <em>É assim que a gente faz.</em>
            </h2>
          </div>
          <p>
            Design, código e movimento na mesma composição. Mude os controles e
            veja cada escolha acontecer.
          </p>
        </div>
        <div className="playground">
          <div className="playground-toolbar">
            <span>Um experimento da S&amp;D</span>
            <button onClick={reset} className="reset-button">
              Recomeçar <span aria-hidden="true">↺</span>
            </button>
          </div>
          <div className="playground-stage">
            <div
              className={`specimen format-${format} theme-${theme}`}
              style={{ "--type-weight": weight } as CSSProperties}
            >
              <div className="specimen-content" key={replay}>
                <div className="specimen-top">
                  <span>S&amp;D Technologies</span>
                  <span>Design &amp; desenvolvimento</span>
                </div>
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
                <div className="specimen-bottom">
                  <p>
                    O espaço muda.
                    <br />A identidade fica.
                  </p>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </div>
          </div>
          <div className="playground-controls">
            <fieldset>
              <legend>Formato</legend>
              <div className="segmented">
                {[
                  ["wide", "Amplo"],
                  ["square", "Quadrado"],
                  ["portrait", "Vertical"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={format === value}
                    onClick={() => setFormat(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="weight-control">
              <label htmlFor="type-weight">
                Peso da tipografia{" "}
                <output htmlFor="type-weight">{weight}</output>
              </label>
              <input
                id="type-weight"
                type="range"
                min="300"
                max="800"
                step="10"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            </div>
            <fieldset className="theme-control">
              <legend>Cor</legend>
              <div>
                {[
                  ["paper", "Papel"],
                  ["blue", "Azul"],
                  ["ink", "Tinta"],
                ].map(([value, label]) => (
                  <button
                    className={`swatch swatch-${value}`}
                    key={value}
                    aria-label={label}
                    aria-pressed={theme === value}
                    onClick={() => setTheme(value)}
                  >
                    <span>{theme === value ? "✓" : ""}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <button
              className="replay-button"
              onClick={() => setReplay((v) => v + 1)}
            >
              Rever movimento <span aria-hidden="true">↻</span>
            </button>
          </div>
        </div>
        <div className="capability-foot">
          <p>
            Você acabou de testar responsividade, tipografia variável e
            movimento. Tudo funcionando de verdade.
          </p>
          <span>
            Experimento autoral.
            <br />
            Não é um case de cliente.
          </span>
        </div>
      </div>
    </section>
  );
}
