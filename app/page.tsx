"use client";

import { useLocale } from "@/lib/LocaleProvider";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  const { t } = useLocale();
  return (
    <>
      <Hero />

      <section className="container-x py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.servicesPreview.eyebrow}</span>
          <h2 className="mt-3 font-serif text-3xl text-brown-900 sm:text-4xl">
            {t.servicesPreview.title}
          </h2>
          <p className="mt-4 text-base text-brown-700">
            {t.servicesPreview.subtitle}
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ServiceCard
            eyebrow={t.servicesPreview.eyebrow}
            title={t.servicesPreview.microblading.title}
            description={t.servicesPreview.microblading.description}
            href="/services#microblading"
            cta={t.cta.learnMore}
            badge={t.common.studio}
            accent="sand"
          />
          <ServiceCard
            eyebrow={t.servicesPreview.eyebrow}
            title={t.servicesPreview.nails.title}
            description={t.servicesPreview.nails.description}
            href="/services#nails"
            cta={t.cta.learnMore}
            badge={t.servicesPreview.atHome.tag}
            accent="pink"
          />
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">{t.usp.eyebrow}</span>
            <h2 className="mt-3 font-serif text-3xl text-brown-900 sm:text-4xl">
              {t.usp.title}
            </h2>
          </div>
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
            {t.usp.items.map((item) => (
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

      <TestimonialSlider />

      <section className="container-x pb-24 sm:pb-32">
        <div
          className="relative overflow-hidden rounded-[36px] border border-brown-100 px-8 py-16 text-center sm:px-16 sm:py-20"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, #FCE9F0 0%, rgba(252,233,240,0) 70%), linear-gradient(180deg, #FAF8F5 0%, #F5F0EB 100%)",
          }}
        >
          <h2 className="font-serif text-3xl text-brown-900 sm:text-5xl">
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brown-700">
            {t.finalCta.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton href="/booking" variant="primary">
              {t.cta.bookNow}
            </CTAButton>
            <CTAButton href="/contact" variant="ghost">
              {t.cta.contact}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
