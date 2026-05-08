"use client";

import { useLocale } from "@/lib/LocaleProvider";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  const { t } = useLocale();
  return (
    <>
      <section className="container-x pt-16 pb-10 sm:pt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.galleryPage.eyebrow}</span>
          <h1 className="h-display mt-4">{t.galleryPage.title}</h1>
          <p className="mt-5 text-base text-brown-700 sm:text-lg">
            {t.galleryPage.subtitle}
          </p>
        </div>
      </section>
      <section className="container-x pb-24 sm:pb-32">
        <GalleryGrid />
      </section>
    </>
  );
}
