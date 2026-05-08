import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SECTIONS: { title: string; fields: { key: string; label: string }[] }[] = [
  {
    title: "Marca",
    fields: [
      { key: "brand_words", label: "3 palabras" },
      { key: "brand_difference", label: "Qué la hace diferente" },
      { key: "brand_story", label: "Historia" },
      { key: "brand_bio", label: "Bio corta" },
      { key: "brand_inspiration", label: "Inspiración" },
    ],
  },
  {
    title: "Colores y estilo",
    fields: [
      { key: "palette_ok", label: "Paleta actual" },
      { key: "palette_other", label: "Paleta alternativa" },
      { key: "accent_color", label: "Color acento" },
      { key: "style", label: "Estilo visual" },
      { key: "fonts", label: "Tipografía" },
    ],
  },
  {
    title: "Microblading",
    fields: [
      { key: "micro_services", label: "Servicios" },
      { key: "micro_other", label: "Otro" },
      { key: "micro_price_classic", label: "Microblading clásico CHF" },
      { key: "micro_price_powder", label: "Powder Brows CHF" },
      { key: "micro_price_combo", label: "Combo Brows CHF" },
      { key: "micro_price_touchup", label: "Retoque anual CHF" },
      { key: "micro_first_touchup", label: "Primer retoque" },
      { key: "micro_duration", label: "Duración" },
    ],
  },
  {
    title: "Uñas",
    fields: [
      { key: "nail_services", label: "Servicios" },
      { key: "nail_other", label: "Otro" },
      { key: "nail_price_classic", label: "Manicura clásica CHF" },
      { key: "nail_price_gel", label: "Gel CHF" },
      { key: "nail_price_full", label: "Pose completa CHF" },
      { key: "nail_price_art", label: "Nail art CHF" },
      { key: "nail_price_pedi", label: "Pedicura CHF" },
      { key: "nail_price_remove", label: "Retirada CHF" },
    ],
  },
  {
    title: "A domicilio",
    fields: [
      { key: "home_services", label: "Servicios a domicilio" },
      { key: "home_radius", label: "Radio" },
      { key: "home_fee_type", label: "Tipo de tarifa" },
      { key: "home_fee_details", label: "Detalles tarifa" },
    ],
  },
  {
    title: "Reservas",
    fields: [
      { key: "cal_handle", label: "Handle Cal.com" },
      { key: "hours_lunes", label: "Lunes" },
      { key: "hours_martes", label: "Martes" },
      { key: "hours_miércoles", label: "Miércoles" },
      { key: "hours_jueves", label: "Jueves" },
      { key: "hours_viernes", label: "Viernes" },
      { key: "hours_sábado", label: "Sábado" },
      { key: "hours_domingo", label: "Domingo" },
      { key: "deposit_policy", label: "Anticipo / cancelación" },
      { key: "min_notice", label: "Plazo mínimo" },
    ],
  },
  {
    title: "Fotos",
    fields: [
      { key: "photos_status", label: "Fotos profesionales" },
      { key: "ba_photos", label: "Antes/después" },
      { key: "portrait", label: "Retrato" },
      { key: "testimonials", label: "Testimonios" },
      { key: "certifications", label: "Certificaciones" },
    ],
  },
  {
    title: "Contacto",
    fields: [
      { key: "address", label: "Dirección" },
      { key: "phone", label: "Teléfono" },
      { key: "whatsapp", label: "WhatsApp" },
      { key: "email", label: "Email" },
      { key: "instagram", label: "Instagram" },
      { key: "other_social", label: "Otras redes" },
    ],
  },
  {
    title: "Dominio e idioma",
    fields: [
      { key: "domain_status", label: "Dominio" },
      { key: "domain_other", label: "Dominio alternativo" },
      { key: "primary_language", label: "Idioma principal" },
      { key: "language_audience", label: "Clientela FR/DE" },
    ],
  },
  {
    title: "Marketing",
    fields: [
      { key: "newsletter", label: "Newsletter" },
      { key: "promos", label: "Promociones" },
      { key: "blog", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    fields: [
      { key: "legal_form", label: "Forma jurídica" },
      { key: "vat_id", label: "IDE / TVA" },
      { key: "impressum", label: "Impressum" },
    ],
  },
  {
    title: "Otros",
    fields: [{ key: "other", label: "Algo más" }],
  },
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatBrief(data: Record<string, string>): string {
  const lines: string[] = [];
  lines.push("<b>📝 Brief Laura Valentina</b>");
  lines.push(`<i>${new Date().toISOString().slice(0, 10)}</i>`);
  for (const sec of SECTIONS) {
    const filled = sec.fields.filter((f) => data[f.key]?.trim());
    if (filled.length === 0) continue;
    lines.push("");
    lines.push(`<b>— ${sec.title} —</b>`);
    for (const f of filled) {
      const v = data[f.key].trim();
      lines.push(`<b>${escapeHtml(f.label)}:</b> ${escapeHtml(v)}`);
    }
  }
  return lines.join("\n");
}

function chunkText(text: string, size = 3800): string[] {
  if (text.length <= size) return [text];
  const out: string[] = [];
  let buf = "";
  for (const line of text.split("\n")) {
    if (buf.length + line.length + 1 > size) {
      out.push(buf);
      buf = "";
    }
    buf += (buf ? "\n" : "") + line;
  }
  if (buf) out.push(buf);
  return out;
}

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = (await req.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (data.hp) return NextResponse.json({ ok: true });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("brief: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    // Don't leak config status to client; still 200 so Laura sees success
    return NextResponse.json({ ok: true, warning: "telegram_not_configured" });
  }

  const text = formatBrief(data);
  const chunks = chunkText(text);

  for (const chunk of chunks) {
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: chunk,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });
    } catch (err) {
      console.error("brief: telegram send failed", err);
    }
  }

  await sendBriefEmail(text, data.email || "");

  return NextResponse.json({ ok: true });
}

async function sendBriefEmail(htmlBody: string, replyTo: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BRIEF_EMAIL_TO || "hello@vyn.studio";
  const from =
    process.env.BRIEF_EMAIL_FROM ||
    process.env.CONTACT_FROM_EMAIL ||
    "Laura Valentina Brief <hola@vyn.studio>";

  if (!apiKey) {
    console.error("brief: missing RESEND_API_KEY, skipping email");
    return;
  }

  const html = `<div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#3D3128;max-width:640px;line-height:1.5">${htmlBody.replace(/\n/g, "<br>")}</div>`;

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
        subject: "📝 Brief Laura Valentina — nueva respuesta",
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
  } catch (err) {
    console.error("brief: resend send failed", err);
  }
}
