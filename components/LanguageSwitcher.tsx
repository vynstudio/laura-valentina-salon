"use client";

import { useLocale } from "@/lib/LocaleProvider";
import { LOCALES } from "@/lib/i18n";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1 rounded-full border border-brown-100 bg-white/70 px-1 py-1 text-[11px] uppercase tracking-[0.22em] backdrop-blur-sm ${className ?? ""}`}
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              active
                ? "bg-brown-700 text-cream"
                : "text-brown-500 hover:text-brown-900"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
