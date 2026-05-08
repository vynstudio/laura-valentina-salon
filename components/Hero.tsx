"use client";

import { useLocale } from "@/lib/LocaleProvider";
import CTAButton from "./CTAButton";

export default function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 20%, #FCE9F0 0%, rgba(252,233,240,0) 60%), radial-gradient(50% 60% at 10% 80%, #E8DED2 0%, rgba(232,222,210,0) 60%), linear-gradient(180deg, #FAF8F5 0%, #F5F0EB 100%)",
        }}
      />
      <div className="container-x relative pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 fade-in">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 className="h-display mt-4">
              {t.hero.title.split("&").map((part, i, arr) => (
                <span key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && (
                    <em className="not-italic text-pink-500"> & </em>
                  )}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-xl text-base text-brown-700 sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CTAButton href="/booking" variant="primary">
                {t.cta.bookNow}
              </CTAButton>
              <CTAButton href="/services" variant="ghost">
                {t.cta.seeServices}
              </CTAButton>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.28em] text-brown-500">
              ◌ {t.hero.locator}
            </p>
          </div>
          <div className="lg:col-span-5 fade-in" style={{ animationDelay: "120ms" }}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[36px] border border-brown-100 bg-gradient-to-br from-pink-100 via-cream to-sand shadow-[0_30px_60px_-30px_rgba(107,91,79,0.45)]">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 50% at 30% 30%, rgba(245,196,216,0.55) 0%, rgba(245,196,216,0) 70%), radial-gradient(60% 50% at 70% 75%, rgba(212,196,179,0.55) 0%, rgba(212,196,179,0) 70%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.32em] text-brown-500">
                  Studio · Bienne
                </p>
                <p className="mt-1 font-serif text-lg text-brown-900">
                  Microblading · Nails
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
