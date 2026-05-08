"use client";

import { useLocale } from "@/lib/LocaleProvider";
import { services } from "@/lib/services";
import CTAButton from "@/components/CTAButton";

export default function ServicesPage() {
  const { t, locale } = useLocale();
  const micro = services.filter((s) => s.category === "microblading");
  const nails = services.filter((s) => s.category === "nails");

  return (
    <>
      <section className="container-x pt-16 pb-10 sm:pt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.servicesPage.eyebrow}</span>
          <h1 className="h-display mt-4">{t.servicesPage.title}</h1>
          <p className="mt-5 text-base text-brown-700 sm:text-lg">
            {t.servicesPage.subtitle}
          </p>
        </div>
      </section>

      <section
        id="microblading"
        className="container-x scroll-mt-24 py-16 sm:py-20"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Microblading</span>
            <h2 className="mt-3 font-serif text-3xl text-brown-900 sm:text-4xl">
              {t.servicesPage.micro.title}
            </h2>
            <p className="mt-5 text-brown-700">{t.servicesPage.micro.lede}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-2">
                  {t.servicesPage.micro.timeline.title}
                </p>
                <ol className="space-y-2 text-sm text-brown-700">
                  {t.servicesPage.micro.timeline.steps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-serif text-pink-500">0{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="eyebrow mb-2">
                  {t.servicesPage.micro.aftercare.title}
                </p>
                <ul className="space-y-2 text-sm text-brown-700">
                  {t.servicesPage.micro.aftercare.items.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden className="text-pink-300">◌</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {micro.map((s) => (
                <article
                  key={s.slug}
                  className="surface flex flex-col gap-3 p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl text-brown-900">
                      {s.i18n[locale].name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-brown-500">
                      {t.common.studio}
                    </span>
                  </div>
                  <p className="text-sm text-brown-700">
                    {s.i18n[locale].description}
                  </p>
                  <dl className="mt-2 flex items-center gap-5 text-xs text-brown-500">
                    <div>
                      <dt className="uppercase tracking-[0.22em]">
                        {t.servicesPage.priceFrom}
                      </dt>
                      <dd className="mt-0.5 font-serif text-base text-brown-900">
                        {t.common.chf} {s.priceFrom}
                      </dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.22em]">
                        {t.servicesPage.duration}
                      </dt>
                      <dd className="mt-0.5 font-serif text-base text-brown-900">
                        {s.durationMin} min
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="/booking" variant="primary">
                {t.cta.bookNow}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section
        id="nails"
        className="container-x scroll-mt-24 py-16 sm:py-20"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:order-2">
            <span className="eyebrow">{t.servicesPage.nailsBlock.title}</span>
            <h2 className="mt-3 font-serif text-3xl text-brown-900 sm:text-4xl">
              {t.servicesPage.nailsBlock.title}
            </h2>
            <p className="mt-5 text-brown-700">
              {t.servicesPage.nailsBlock.lede}
            </p>

            <div
              className="mt-8 rounded-[24px] border border-brown-100 p-6"
              style={{
                background:
                  "linear-gradient(180deg, #FCE9F0 0%, rgba(252,233,240,0) 100%)",
              }}
            >
              <p className="eyebrow text-pink-700">
                {t.servicesPage.atHome.title}
              </p>
              <p className="mt-3 text-sm text-brown-700">
                {t.servicesPage.atHome.lede}
              </p>
              <p className="mt-3 text-xs text-brown-500">
                {t.servicesPage.atHome.note}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {nails.map((s) => (
                <article
                  key={s.slug}
                  className="surface flex flex-col gap-3 p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl text-brown-900">
                      {s.i18n[locale].name}
                    </h3>
                    {s.atHome && (
                      <span className="rounded-full bg-pink-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-pink-700">
                        {t.common.atHome}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-brown-700">
                    {s.i18n[locale].description}
                  </p>
                  <dl className="mt-2 flex items-center gap-5 text-xs text-brown-500">
                    <div>
                      <dt className="uppercase tracking-[0.22em]">
                        {t.servicesPage.priceFrom}
                      </dt>
                      <dd className="mt-0.5 font-serif text-base text-brown-900">
                        {t.common.chf} {s.priceFrom}
                      </dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.22em]">
                        {t.servicesPage.duration}
                      </dt>
                      <dd className="mt-0.5 font-serif text-base text-brown-900">
                        {s.durationMin} min
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="/booking" variant="pink">
                {t.cta.bookNow}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
