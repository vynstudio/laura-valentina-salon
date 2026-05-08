"use client";

import { useLocale } from "@/lib/LocaleProvider";

export default function WhatsAppButton() {
  const { t } = useLocale();
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "41000000000";
  const href = `https://wa.me/${number}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-24 left-5 z-30 hidden lg:bottom-6 lg:left-8 lg:inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white shadow-[0_10px_30px_-10px_rgba(232,154,184,0.7)] transition-transform hover:-translate-y-0.5"
    >
      <span className="sr-only">{t.cta.whatsapp}</span>
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M16 3a13 13 0 0 0-11 19.7L3 29l6.5-1.7A13 13 0 1 0 16 3Zm0 23.5a10.4 10.4 0 0 1-5.3-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.5 10.5 0 1 1 16 26.5Zm5.7-7.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0a8.6 8.6 0 0 1-2.5-1.5 9.5 9.5 0 0 1-1.7-2.2c-.2-.3 0-.5.1-.6l.5-.6a3 3 0 0 0 .3-.5.5.5 0 0 0 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.7 4.1c2.8 1.2 2.8.8 3.4.7a2.6 2.6 0 0 0 1.7-1.2 2 2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.4Z"
        />
      </svg>
    </a>
  );
}
