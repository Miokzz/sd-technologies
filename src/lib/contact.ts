export type ContactPayload = {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  segment: string;
  city: string;
  hasSite: "sim" | "nao" | "";
  currentSite: string;
  projectType: string;
  budget: string;
  deadline: string;
  message: string;
  website?: string;
};

export function validateContactPayload(payload: Partial<ContactPayload>) {
  const errors: Record<string, string> = {};
  const required: Array<keyof ContactPayload> = [
    "name",
    "whatsapp",
    "email",
    "segment",
    "city",
    "projectType",
    "message",
  ];

  required.forEach((field) => {
    if (!String(payload[field] ?? "").trim()) errors[field] = "Campo obrigatório";
  });

  if (payload.email && !/^\S+@\S+\.\S+$/.test(payload.email)) {
    errors.email = "Informe um e-mail válido";
  }

  if (payload.currentSite && !/^https?:\/\//i.test(payload.currentSite)) {
    errors.currentSite = "Use uma URL começando com http:// ou https://";
  }

  if (payload.message && payload.message.trim().length < 12) {
    errors.message = "Conte um pouco mais sobre o projeto";
  }

  return errors;
}
