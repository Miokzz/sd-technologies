"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { validateContactPayload, type ContactPayload } from "@/lib/contact";

const initialState: ContactPayload = {
  name: "",
  company: "",
  whatsapp: "",
  email: "",
  segment: "",
  city: "",
  hasSite: "",
  currentSite: "",
  projectType: "",
  budget: "",
  deadline: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function setField<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }));
    if (status !== "idle") setStatus("idle");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactPayload(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string; errors?: Record<string, string> };

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message || "Não foi possível enviar a solicitação.");
      }

      setStatus("success");
      setMessage("Recebemos seu pedido. Agora a conversa pode começar.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar agora.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-intro">
        <span>Briefing inicial</span>
        <p>Não precisa ter tudo decidido. Conte o cenário e a gente organiza o caminho.</p>
      </div>

      <div className="form-grid">
        <Field label="Nome" required error={errors.name}>
          <input value={form.name} onChange={(e) => setField("name", e.target.value)} autoComplete="name" />
        </Field>
        <Field label="Empresa" error={errors.company}>
          <input value={form.company} onChange={(e) => setField("company", e.target.value)} autoComplete="organization" />
        </Field>
        <Field label="WhatsApp" required error={errors.whatsapp}>
          <input value={form.whatsapp} onChange={(e) => setField("whatsapp", e.target.value)} inputMode="tel" autoComplete="tel" />
        </Field>
        <Field label="E-mail" required error={errors.email}>
          <input value={form.email} onChange={(e) => setField("email", e.target.value)} type="email" autoComplete="email" />
        </Field>
        <Field label="Segmento" required error={errors.segment}>
          <input value={form.segment} onChange={(e) => setField("segment", e.target.value)} placeholder="Ex.: clínica, restaurante, indústria" />
        </Field>
        <Field label="Cidade" required error={errors.city}>
          <input value={form.city} onChange={(e) => setField("city", e.target.value)} autoComplete="address-level2" />
        </Field>
        <Field label="Possui site atualmente?" error={errors.hasSite}>
          <select value={form.hasSite} onChange={(e) => setField("hasSite", e.target.value as ContactPayload["hasSite"])}>
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </Field>
        <Field label="URL atual" error={errors.currentSite}>
          <input value={form.currentSite} onChange={(e) => setField("currentSite", e.target.value)} inputMode="url" placeholder="https://" />
        </Field>
        <Field label="Tipo de projeto" required error={errors.projectType}>
          <select value={form.projectType} onChange={(e) => setField("projectType", e.target.value)}>
            <option value="">Selecione</option>
            <option>Site institucional</option>
            <option>Landing page</option>
            <option>Redesign</option>
            <option>Portfólio</option>
            <option>Catálogo digital</option>
            <option>Ainda não sei</option>
          </select>
        </Field>
        <Field label="Orçamento aproximado" error={errors.budget}>
          <input
            value={form.budget}
            onChange={(e) => setField("budget", e.target.value)}
            inputMode="text"
            placeholder="Ex.: tenho uma faixa em mente"
            maxLength={80}
          />
        </Field>
        <Field label="Prazo desejado" error={errors.deadline}>
          <select value={form.deadline} onChange={(e) => setField("deadline", e.target.value)}>
            <option value="">Sem prazo definido</option>
            <option>Até 2 semanas</option>
            <option>2 a 4 semanas</option>
            <option>1 a 2 meses</option>
            <option>Posso esperar o tempo ideal</option>
          </select>
        </Field>
        <Field label="Mensagem" required error={errors.message} className="form-field--wide">
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder="O que sua empresa faz e o que você gostaria que o site resolvesse?"
          />
        </Field>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setField("website", e.target.value)} /></label>
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-button primary-button--dark" disabled={status === "loading"}>
          <span>{status === "loading" ? "Enviando..." : "Enviar projeto"}</span>
          <span aria-hidden="true">↗</span>
        </button>
        <div className={`form-status form-status--${status}`} role="status" aria-live="polite">
          {message}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`form-field ${error ? "has-error" : ""} ${className}`}>
      <span>{label}{required ? <b> *</b> : null}</span>
      {children}
      {error ? <small role="alert">{error}</small> : null}
    </label>
  );
}
