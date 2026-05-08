"use client";

import { useLocale } from "@/lib/LocaleProvider";
import CTAButton from "@/components/CTAButton";

export default function AboutPage() {
  const { t } = useLocale();
  return (
    <>
      <section className="container-x pt-16 pb-10 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">{t.aboutPage.eyebrow}</span>
            <h1 className="h-display mt-4">{t.aboutPage.title}</h1>
            <p className="mt-5 max-w-xl font-serif text-xl text-brown-700">
              {t.aboutPage.lede}
            </p>
            <div className="mt-8 space-y-4 text-brown-700">
              {t.aboutPage.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/booking" variant="primary">
                {t.cta.bookNow}
              </CTAButton>
              <CTAButton href="/contact" variant="ghost">
                {t.cta.contact}
              </CTAButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[36px] border border-brown-100 bg-gradient-to-br from-pink-100 via-cream to-sand">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 50% at 30% 25%, rgba(245,196,216,0.55) 0%, rgba(245,196,216,0) 70%), radial-gradient(60% 50% at 70% 75%, rgba(212,196,179,0.6) 0%, rgba(212,196,179,0) 70%)",
                }}
              />
              <span className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-brown-700 backdrop-blur-sm">
                Laura Valentina · Biel
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">{t.aboutPage.why.title}</span>
            <h2 className="mt-3 font-serif text-3xl text-brown-900 sm:text-4xl">
              {t.aboutPage.why.title}
            </h2>
          </div>
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-3">
            {t.aboutPage.why.items.map((item) => (
              <div
                key={item.title}
                className="surface flex flex-col gap-2 px-6 py-6"
              >
                <p className="font-serif text-lg text-brown-900">
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-brown-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div
          className="rounded-[28px] border border-brown-100 px-8 py-10 sm:px-12 sm:py-14 text-center"
          style={{
            background:
              "linear-gradient(180deg, #FDF5F8 0%, #FAF8F5 100%)",
          }}
        >
          <p className="font-serif text-2xl text-brown-900 sm:text-3xl">
            {t.aboutPage.atHome}
          </p>
        </div>
      </section>
    </>
  );
}
