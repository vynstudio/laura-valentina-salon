"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";
import { services } from "@/lib/services";
import CalEmbed from "@/components/CalEmbed";
import CTAButton from "@/components/CTAButton";

export default function BookingPage() {
  const { t, locale } = useLocale();
  const [selected, setSelected] = useState<string>("");

  const handle =
    process.env.NEXT_PUBLIC_CAL_LINK || "lauravalentina";

  // Cal.com event-type linking convention: <handle>/<event-slug>
  // If no service selected we just show the user's page (lists all event types).
  const calLink = selected ? `${handle}/${selected}` : handle;

  return (
    <>
      <section className="container-x pt-16 pb-10 sm:pt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.bookingPage.eyebrow}</span>
          <h1 className="h-display mt-4">{t.bookingPage.title}</h1>
          <p className="mt-5 text-base text-brown-700 sm:text-lg">
            {t.bookingPage.subtitle}
          </p>
        </div>
      </section>

      <section className="container-x pb-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <label
              htmlFor="service"
              className="eyebrow"
            >
              {t.bookingPage.selectService}
            </label>
            <select
              id="service"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-brown-200 bg-white/80 px-4 py-3 text-sm text-brown-900 outline-none transition-colors focus:border-brown-700"
            >
              <option value="">—</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.i18n[locale].name}
                  {" · "}
                  {s.atHome ? t.common.atHome : t.common.studio}
                </option>
              ))}
            </select>
            <p className="mt-3 text-xs text-brown-500">
              {t.bookingPage.studioOrHome}
            </p>

            <div className="mt-10 rounded-[24px] border border-brown-100 bg-white/70 p-5">
              <p className="eyebrow">{t.bookingPage.questions}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <CTAButton href="/contact" variant="ghost" className="!px-4 !py-2 !text-[10px]">
                  {t.cta.contact}
                </CTAButton>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "41000000000"}`}
                  target="_blank"
                  rel="noopener"
                  className="btn-pink !px-4 !py-2 !text-[10px]"
                >
                  {t.cta.whatsapp}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <CalEmbed calLink={calLink} />
          </div>
        </div>
      </section>
    </>
  );
}
