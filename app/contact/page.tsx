"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const { t, locale } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "41000000000";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("network");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="container-x pt-16 pb-10 sm:pt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.contactPage.eyebrow}</span>
          <h1 className="h-display mt-4">{t.contactPage.title}</h1>
          <p className="mt-5 text-base text-brown-700 sm:text-lg">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="surface grid gap-5 px-6 py-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.contactPage.form.name} name="name" required placeholder={t.contactPage.form.placeholders.name} />
                <Field label={t.contactPage.form.email} name="email" type="email" required placeholder={t.contactPage.form.placeholders.email} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.contactPage.form.phone} name="phone" type="tel" placeholder={t.contactPage.form.placeholders.phone} />
                <div>
                  <label className="eyebrow mb-2 block">
                    {t.contactPage.form.service}
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-2xl border border-brown-200 bg-white/80 px-4 py-3 text-sm text-brown-900 outline-none transition-colors focus:border-brown-700"
                  >
                    <option value="">—</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.i18n[locale].name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="eyebrow mb-2 block">
                  {t.contactPage.form.message}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={t.contactPage.form.placeholders.message}
                  className="w-full rounded-2xl border border-brown-200 bg-white/80 px-4 py-3 text-sm text-brown-900 outline-none transition-colors focus:border-brown-700"
                />
              </div>
              <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="btn-primary disabled:opacity-60"
                  disabled={status === "submitting"}
                >
                  {t.contactPage.form.submit}
                </button>
                <a
                  href={`https://wa.me/${number}`}
                  target="_blank"
                  rel="noopener"
                  className="btn-pink"
                >
                  {t.cta.whatsapp}
                </a>
                {status === "success" && (
                  <p className="text-sm text-brown-700">
                    {t.contactPage.form.success}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-pink-700">
                    {t.contactPage.form.error}
                  </p>
                )}
              </div>
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="surface p-6">
              <p className="eyebrow">{t.contactPage.studio}</p>
              <p className="mt-3 font-serif text-lg text-brown-900">
                Biel/Bienne, CH
              </p>
              <p className="mt-1 text-sm text-brown-700">
                {t.contactPage.hours}
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-brown-100">
                <iframe
                  title="Map Biel/Bienne"
                  src="https://www.google.com/maps?q=Biel%2FBienne%2C%20Switzerland&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="surface p-6">
              <p className="eyebrow">{t.contactPage.serviceArea}</p>
              <p className="mt-3 text-sm text-brown-700">
                {t.contactPage.serviceAreaCopy}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-brown-200 bg-white/80 px-4 py-3 text-sm text-brown-900 outline-none transition-colors focus:border-brown-700"
      />
    </div>
  );
}
