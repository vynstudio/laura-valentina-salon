"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ease-smooth ${
        scrolled
          ? "border-b border-brown-100/80 bg-cream/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-brown-900"
        >
          Laura Valentina
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[12px] uppercase tracking-[0.24em] transition-colors ${
                  active
                    ? "text-brown-900"
                    : "text-brown-500 hover:text-brown-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link href="/booking" className="btn-primary !px-5 !py-2.5 !text-[11px]">
            {t.cta.book}
          </Link>
        </div>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-brown-100 bg-white/70"
        >
          <span className="relative block h-2.5 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-brown-700 transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-brown-700 transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-brown-100 bg-cream">
          <div className="container-x flex flex-col gap-1 py-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-3 text-sm uppercase tracking-[0.22em] text-brown-700 hover:bg-brown-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 px-1">
              <LanguageSwitcher />
              <Link href="/booking" className="btn-primary !px-5 !py-2.5 !text-[11px]">
                {t.cta.book}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
