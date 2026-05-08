"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/LocaleProvider";

export default function StickyMobileCTA() {
  const { t } = useLocale();
  const pathname = usePathname();
  if (pathname === "/booking") return null;
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 border-t border-brown-100 bg-cream/90 px-4 py-3 backdrop-blur-md">
      <Link
        href="/booking"
        className="btn-primary w-full justify-center !py-3"
      >
        {t.cta.bookNow}
      </Link>
    </div>
  );
}
