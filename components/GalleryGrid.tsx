"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";
import { galleryItems } from "@/lib/services";

type Filter = "all" | "microblading" | "nails";

export default function GalleryGrid() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<string | null>(null);

  const items = useMemo(
    () =>
      galleryItems.filter((g) => filter === "all" || g.category === filter),
    [filter],
  );

  const activeItem = items.find((i) => i.id === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {(
          [
            ["all", t.galleryPage.filters.all],
            ["microblading", t.galleryPage.filters.microblading],
            ["nails", t.galleryPage.filters.nails],
          ] as [Filter, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            aria-pressed={filter === key}
            className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.24em] transition-colors ${
              filter === key
                ? "border-brown-700 bg-brown-700 text-cream"
                : "border-brown-200 text-brown-700 hover:border-brown-700 hover:text-brown-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="text-center text-sm text-brown-500">
          {t.galleryPage.empty}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {items.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              className={`group relative aspect-square overflow-hidden rounded-[22px] border border-brown-100 bg-gradient-to-br ${
                g.category === "microblading"
                  ? "from-sand via-cream to-pink-50"
                  : "from-pink-100 via-cream to-sand"
              }`}
              aria-label={g.alt}
            >
              <span className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-brown-700 backdrop-blur-sm">
                {g.category === "microblading"
                  ? t.galleryPage.filters.microblading
                  : t.galleryPage.filters.nails}
              </span>
            </button>
          ))}
        </div>
      )}

      {activeItem && (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 z-50 flex items-center justify-center bg-brown-900/70 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/30 bg-gradient-to-br from-pink-100 via-cream to-sand"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/5] w-full" />
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-brown-900 backdrop-blur-sm hover:bg-white"
              aria-label="Close"
            >
              ×
            </button>
            <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-brown-700 backdrop-blur-sm">
              {activeItem.alt}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
