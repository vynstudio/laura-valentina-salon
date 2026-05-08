import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  hp?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (body.hp) return NextResponse.json({ ok: true });

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Laura Valentina <hola@vyn.studio>";

  if (apiKey && to) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          subject: `Nouveau contact — ${body.name}`,
          reply_to: body.email,
          text: [
            `Nom: ${body.name}`,
            `Email: ${body.email}`,
            `Téléphone: ${body.phone || "—"}`,
            `Prestation: ${body.service || "—"}`,
            "",
            body.message,
          ].join("\n"),
        }),
      });
    } catch {
      // swallow; we still want to acknowledge to the user
    }
  }

  return NextResponse.json({ ok: true });
}
