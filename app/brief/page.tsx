"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function BriefPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [section, setSection] = useState(0);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => {
      const existing = payload[k];
      const value = v.toString();
      if (!value) return;
      payload[k] = existing ? `${existing}, ${value}` : value;
    });
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("network");
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="container-x py-32">
        <div
          className="mx-auto max-w-2xl rounded-[28px] border border-brown-100 px-8 py-16 text-center sm:px-12 sm:py-20"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, #FCE9F0 0%, rgba(252,233,240,0) 70%), linear-gradient(180deg, #FAF8F5 0%, #F5F0EB 100%)",
          }}
        >
          <span className="eyebrow">¡Gracias!</span>
          <h1 className="mt-3 font-serif text-3xl text-brown-900 sm:text-4xl">
            Recibido con cariño
          </h1>
          <p className="mt-5 text-brown-700">
            Diler te escribirá pronto para los siguientes pasos. Si quieres
            añadir algo más (fotos, audios, ideas), envíalo por WhatsApp.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container-x pt-16 pb-6 sm:pt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Brief · Laura Valentina</span>
          <h1 className="h-display mt-4">Cuéntame todo sobre tu salón</h1>
          <p className="mt-5 text-base text-brown-700 sm:text-lg">
            Hola Laura ✨ Aquí tienes todas las preguntas que necesito para
            terminar tu sitio. No tienes que responder todo de golpe — guarda
            esta página y vuelve cuando quieras. Si una pregunta no aplica,
            déjala en blanco.
          </p>
          <p className="mt-3 text-sm text-brown-500">
            Tu información llega directamente a Diler (Vyn Studio). No se
            comparte con nadie más.
          </p>
        </div>
      </section>

      <form onSubmit={onSubmit} className="container-x pb-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3 lg:sticky lg:top-24 self-start">
            <ol className="space-y-1 text-sm">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSection(i);
                      document
                        .getElementById(s.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`block w-full rounded-xl px-3 py-2 text-left transition-colors ${
                      section === i
                        ? "bg-brown-700 text-cream"
                        : "text-brown-500 hover:bg-brown-50 hover:text-brown-900"
                    }`}
                  >
                    <span className="mr-2 font-serif text-brown-300">
                      0{i + 1}
                    </span>
                    {s.label}
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <div className="lg:col-span-9 space-y-6">
            {/* 1 — Marca */}
            <Section id="marca" title="Tu marca">
              <Q
                num={1}
                label="Tres palabras que describen tu marca"
                hint="ej: elegante, natural, preciso"
              >
                <Text name="brand_words" />
              </Q>
              <Q
                num={2}
                label="¿Qué te hace diferente de otros salones de Biel?"
              >
                <Area name="brand_difference" />
              </Q>
              <Q
                num={3}
                label="Tu historia en 3-5 frases"
                hint="cómo empezaste, por qué microblading, por qué uñas, por qué a domicilio"
              >
                <Area name="brand_story" rows={5} />
              </Q>
              <Q
                num={4}
                label="Tu bio corta para la página 'Sobre mí' (2-3 frases)"
              >
                <Area name="brand_bio" rows={4} />
              </Q>
              <Q
                num={5}
                label="Salones o webs que admiras (3-5 enlaces)"
                hint="Instagram o sitios web — los uso como referencia visual"
              >
                <Area name="brand_inspiration" rows={4} />
              </Q>
            </Section>

            {/* 2 — Colores */}
            <Section id="colores" title="Colores y estilo">
              <Q
                num={6}
                label="La paleta actual es marrón suave + crema + rosa empolvado. ¿La validas?"
              >
                <Radio name="palette_ok" options={["Sí, la mantenemos", "No, prefiero otra"]} />
                <Area
                  name="palette_other"
                  placeholder="Si quieres otra paleta, descríbela aquí"
                  rows={2}
                />
              </Q>
              <Q
                num={7}
                label="¿Algún color de acento que te encante?"
                hint="ej: dorado, terracota, verde salvia, negro"
              >
                <Text name="accent_color" />
              </Q>
              <Q num={8} label="Estilo visual (puedes elegir varios)">
                <Checks
                  name="style"
                  options={[
                    "Minimalista / limpio",
                    "Editorial (estilo revista)",
                    "Romántico / delicado",
                    "Lujo / alta gama",
                    "Natural / orgánico",
                  ]}
                />
              </Q>
              <Q
                num={9}
                label="Tipografía actual: Playfair Display (títulos) + Inter (texto). ¿Preferencia?"
              >
                <Text name="fonts" placeholder="déjalo en blanco si te gusta así" />
              </Q>
            </Section>

            {/* 3 — Microblading */}
            <Section id="microblading" title="Microblading — servicios y precios">
              <Q num={10} label="¿Qué servicios de microblading ofreces?">
                <Checks
                  name="micro_services"
                  options={[
                    "Microblading clásico (pelo a pelo)",
                    "Powder Brows (efecto polvo)",
                    "Combo Brows (mix de los dos)",
                    "Retoque (touch-up)",
                  ]}
                />
                <Text name="micro_other" placeholder="Otro:" />
              </Q>
              <Q num={11} label="Precio de cada servicio (CHF)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Text name="micro_price_classic" placeholder="Microblading clásico" />
                  <Text name="micro_price_powder" placeholder="Powder Brows" />
                  <Text name="micro_price_combo" placeholder="Combo Brows" />
                  <Text name="micro_price_touchup" placeholder="Retoque anual" />
                  <Text
                    name="micro_first_touchup"
                    placeholder="Primer retoque (4-6 sem.) — incluido o CHF"
                  />
                </div>
              </Q>
              <Q num={12} label="Duración de cada sesión">
                <Text name="micro_duration" placeholder="ej: 2h consulta + 1h30 sesión" />
              </Q>
            </Section>

            {/* 4 — Uñas */}
            <Section id="unas" title="Uñas — servicios y precios">
              <Q num={13} label="¿Qué servicios de uñas ofreces?">
                <Checks
                  name="nail_services"
                  options={[
                    "Manicura clásica",
                    "Manicura semi-permanente / gel",
                    "Uñas en gel (extensiones)",
                    "Acrílico",
                    "Nail art",
                    "Pedicura",
                    "French",
                  ]}
                />
                <Text name="nail_other" placeholder="Otro:" />
              </Q>
              <Q num={14} label="Precios uñas (CHF)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Text name="nail_price_classic" placeholder="Manicura clásica" />
                  <Text name="nail_price_gel" placeholder="Gel / semi-permanente" />
                  <Text name="nail_price_full" placeholder="Pose completa gel" />
                  <Text name="nail_price_art" placeholder="Nail art" />
                  <Text name="nail_price_pedi" placeholder="Pedicura" />
                  <Text name="nail_price_remove" placeholder="Retirada (dépose)" />
                </div>
              </Q>
            </Section>

            {/* 5 — A domicilio */}
            <Section id="domicilio" title="Servicio a domicilio">
              <Q num={15} label="¿Qué servicios haces a domicilio?">
                <Area name="home_services" />
              </Q>
              <Q num={16} label="Radio de desplazamiento">
                <Text name="home_radius" placeholder="ej: 20 km de Biel" />
              </Q>
              <Q num={17} label="Tarifa de desplazamiento — ¿cómo la cobras?">
                <Radio
                  name="home_fee_type"
                  options={[
                    "Tarifa fija (ej: CHF 20 en todo Biel)",
                    "Según distancia / km",
                    "Incluido hasta X km, después CHF/km",
                  ]}
                />
                <Area name="home_fee_details" rows={2} placeholder="Detalles…" />
              </Q>
            </Section>

            {/* 6 — Reservas */}
            <Section id="reservas" title="Reservas (Cal.com)">
              <p className="text-sm text-brown-500">
                Si no tienes cuenta Cal.com, Diler te ayuda a crearla.
              </p>
              <Q num={18} label="Tu nombre de usuario Cal.com preferido">
                <Text name="cal_handle" placeholder="ej: lauravalentina → cal.com/lauravalentina" />
              </Q>
              <Q num={19} label="Tu disponibilidad semanal">
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((d) => (
                    <Text
                      key={d}
                      name={`hours_${d.toLowerCase()}`}
                      placeholder={`${d} — ej: 9:00 → 18:00 / cerrado`}
                    />
                  ))}
                </div>
              </Q>
              <Q
                num={20}
                label="Política de anticipo / cancelación"
                hint="¿pides anticipo? ¿cuánto? ¿plazo mínimo de cancelación?"
              >
                <Area name="deposit_policy" rows={3} />
              </Q>
              <Q num={21} label="Plazo mínimo antes de la cita">
                <Text name="min_notice" placeholder="ej: 24h, 48h, 1 semana" />
              </Q>
            </Section>

            {/* 7 — Fotos */}
            <Section id="fotos" title="Fotos y contenido">
              <Q num={22} label="¿Tienes fotos profesionales?">
                <Radio
                  name="photos_status"
                  options={[
                    "Sí, te las envío",
                    "Todavía no — ¿organizamos una sesión?",
                  ]}
                />
              </Q>
              <Q
                num={23}
                label="Fotos antes/después para la galería"
                hint="¿cuántas puedes proveer? ¿con autorización de las modelos? ideal 8-12 mín."
              >
                <Area name="ba_photos" rows={3} />
              </Q>
              <Q num={24} label="Foto tuya para 'Sobre mí'">
                <Radio
                  name="portrait"
                  options={["Sí, te la envío", "Necesito hacerla"]}
                />
              </Q>
              <Q
                num={25}
                label="Testimonios de clientas (3-5 reales con nombre + ciudad)"
              >
                <Area name="testimonials" rows={5} />
              </Q>
              <Q
                num={26}
                label="Tus certificaciones y formaciones"
                hint='ej: "Certificada Microblading Academy 2023"'
              >
                <Area name="certifications" rows={4} />
              </Q>
            </Section>

            {/* 8 — Contacto */}
            <Section id="contacto" title="Datos de contacto">
              <Q num={27} label="Dirección exacta del estudio">
                <Text name="address" placeholder="calle, número, código postal, Biel/Bienne" />
              </Q>
              <Q num={28} label="Teléfono profesional">
                <Text name="phone" type="tel" placeholder="+41 …" />
              </Q>
              <Q num={29} label="WhatsApp (si es diferente)">
                <Text name="whatsapp" type="tel" placeholder="+41 …" />
              </Q>
              <Q num={30} label="Email profesional">
                <Text name="email" type="email" placeholder="hola@…" />
              </Q>
              <Q num={31} label="Instagram (@usuario)">
                <Text name="instagram" placeholder="@lauravalentina" />
              </Q>
              <Q num={32} label="TikTok / Facebook (si tienes)">
                <Text name="other_social" />
              </Q>
            </Section>

            {/* 9 — Dominio e idioma */}
            <Section id="dominio" title="Dominio e idioma">
              <Q num={33} label="¿Ya tienes el dominio lauravalentina.ch?">
                <Radio
                  name="domain_status"
                  options={[
                    "Sí, es mío",
                    "No, hay que comprarlo (Diler te ayuda)",
                  ]}
                />
                <Text name="domain_other" placeholder="Otro nombre que prefieras" />
              </Q>
              <Q
                num={34}
                label="Idioma principal del sitio"
                hint="el sitio está en francés, alemán e inglés con selector — ¿cuál se muestra por defecto?"
              >
                <Radio
                  name="primary_language"
                  options={[
                    "Francés",
                    "Alemán (Deutsch)",
                    "Detección automática según el navegador",
                  ]}
                />
              </Q>
              <Q num={35} label="¿Sirves a ambas clientelas (FR/DE) por igual?">
                <Area name="language_audience" rows={2} />
              </Q>
            </Section>

            {/* 10 — Marketing */}
            <Section id="marketing" title="Marketing">
              <Q num={36} label="¿Quieres una newsletter?">
                <Radio
                  name="newsletter"
                  options={["Sí", "Más adelante", "No"]}
                />
              </Q>
              <Q
                num={37}
                label="¿Promociones actuales para destacar?"
                hint="ej: -20% primera microblading, programa de referidos"
              >
                <Area name="promos" rows={2} />
              </Q>
              <Q num={38} label="¿Sección de blog / consejos?">
                <Radio
                  name="blog"
                  options={[
                    "Sí, escribiré con regularidad",
                    "Más adelante",
                    "No",
                  ]}
                />
              </Q>
            </Section>

            {/* 11 — Legal */}
            <Section id="legal" title="Legal">
              <Q num={39} label="Forma jurídica">
                <Text name="legal_form" placeholder="ej: razón individual, Sàrl" />
              </Q>
              <Q num={40} label="Número IDE / TVA (si aplica)">
                <Text name="vat_id" />
              </Q>
              <Q
                num={41}
                label="Datos para el impressum (obligatorio en Suiza)"
                hint="nombre legal, dirección, IDE, email"
              >
                <Area name="impressum" rows={3} />
              </Q>
            </Section>

            {/* 12 — Otros */}
            <Section id="otros" title="¿Algo más?">
              <Q num={42} label="¿Algo importante que no te haya preguntado?">
                <Area name="other" rows={4} />
              </Q>
            </Section>

            <input
              type="text"
              name="hp"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <div className="surface flex flex-wrap items-center gap-4 px-6 py-6">
              <button
                type="submit"
                className="btn-primary disabled:opacity-60"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Enviando…" : "Enviar a Diler"}
              </button>
              {status === "error" && (
                <p className="text-sm text-pink-700">
                  Algo falló. Revisa tu conexión o escríbeme por WhatsApp.
                </p>
              )}
              <p className="text-xs text-brown-500">
                Se envía solo a Diler (Vyn Studio).
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

const SECTIONS = [
  { id: "marca", label: "Marca" },
  { id: "colores", label: "Colores" },
  { id: "microblading", label: "Microblading" },
  { id: "unas", label: "Uñas" },
  { id: "domicilio", label: "A domicilio" },
  { id: "reservas", label: "Reservas" },
  { id: "fotos", label: "Fotos" },
  { id: "contacto", label: "Contacto" },
  { id: "dominio", label: "Dominio e idioma" },
  { id: "marketing", label: "Marketing" },
  { id: "legal", label: "Legal" },
  { id: "otros", label: "Otros" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="surface scroll-mt-24 px-6 py-7 sm:px-9 sm:py-9"
    >
      <h2 className="font-serif text-2xl text-brown-900 sm:text-3xl">{title}</h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

function Q({
  num,
  label,
  hint,
  children,
}: {
  num: number;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-baseline gap-2 text-sm text-brown-900">
        <span className="font-serif text-pink-500">{num}.</span>
        <span className="font-medium">{label}</span>
      </label>
      {hint && <p className="mt-1 ml-5 text-xs text-brown-500">{hint}</p>}
      <div className="mt-3 ml-0 sm:ml-5 space-y-3">{children}</div>
    </div>
  );
}

function Text({
  name,
  type = "text",
  placeholder,
}: {
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-brown-200 bg-white/80 px-4 py-3 text-sm text-brown-900 outline-none transition-colors placeholder:text-brown-300 focus:border-brown-700"
    />
  );
}

function Area({
  name,
  rows = 3,
  placeholder,
}: {
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-brown-200 bg-white/80 px-4 py-3 text-sm text-brown-900 outline-none transition-colors placeholder:text-brown-300 focus:border-brown-700"
    />
  );
}

function Radio({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-3 text-sm text-brown-700"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            className="h-4 w-4 accent-brown-700"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

function Checks({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-3 text-sm text-brown-700"
        >
          <input
            type="checkbox"
            name={name}
            value={opt}
            className="h-4 w-4 accent-brown-700"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}
