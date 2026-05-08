"use client";

import Link from "next/link";
import { useLocale } from "@/lib/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  const ig = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "lauravalentina";
  return (
    <footer className="mt-32 border-t border-brown-100 bg-cream">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-brown-900">Laura Valentina</p>
          <p className="mt-3 max-w-sm text-sm text-brown-500">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="eyebrow mb-4">{t.nav.services}</p>
          <ul className="space-y-2 text-sm text-brown-700">
            <li>
              <Link href="/services" className="hover:text-brown-900">
                Microblading
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-brown-900">
                {t.servicesPreview.nails.title}
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-brown-900">
                {t.cta.bookNow}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">{t.nav.contact}</p>
          <ul className="space-y-2 text-sm text-brown-700">
            <li>
              <a
                href={`https://instagram.com/${ig}`}
                target="_blank"
                rel="noopener"
                className="hover:text-brown-900"
              >
                Instagram
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brown-900">
                {t.cta.contact}
              </Link>
            </li>
            <li className="text-brown-500">Biel/Bienne, CH</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brown-100">
        <div className="container-x flex flex-col items-start gap-3 py-6 text-xs text-brown-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Laura Valentina. {t.footer.rights}
          </p>
          <p className="opacity-70">Biel/Bienne · Schweiz · Suisse</p>
        </div>
      </div>
    </footer>
  );
}
