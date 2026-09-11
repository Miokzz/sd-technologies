import { NextResponse } from "next/server";
import { validateContactPayload, type ContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    // Honeypot field. Bots usually fill every visible-looking field.
    if (payload.website) return NextResponse.json({ ok: true });

    const errors = validateContactPayload(payload);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 422 });
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        {
          ok: false,
          message: "O canal de recebimento ainda precisa ser configurado pelo administrador do site.",
        },
        { status: 503 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_SECRET
          ? { authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({ ...payload, source: "sd-technologies-website", receivedAt: new Date().toISOString() }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Não conseguimos enviar agora. Tente novamente em alguns instantes." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Não foi possível processar a solicitação." },
      { status: 400 },
    );
  }
}
