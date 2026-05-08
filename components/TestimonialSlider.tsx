"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";
import { testimonials } from "@/lib/services";

export default function TestimonialSlider() {
  const { locale, t } = useLocale();
  const items = testimonials[locale];
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((prev) => (prev + 1) % items.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [items.length]);

  const current = items[i];

  return (
    <section className="container-x py-24 sm:py-28">
      <div className="text-center">
        <span className="eyebrow">{t.testimonials.eyebrow}</span>
        <h2 className="mt-3 font-serif text-3xl text-brown-900 sm:text-4xl">
          {t.testimonials.title}
        </h2>
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <figure className="surface relative px-7 py-10 text-center sm:px-12 sm:py-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-serif text-7xl leading-none text-pink-300"
          >
            “
          </span>
          <blockquote className="font-serif text-xl leading-snug text-brown-900 sm:text-2xl">
            {current.text}
          </blockquote>
          <figcaption className="mt-6 text-[11px] uppercase tracking-[0.28em] text-brown-500">
            {current.name} · {current.service}
          </figcaption>
        </figure>
        <div className="mt-7 flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-brown-700" : "w-2.5 bg-brown-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
