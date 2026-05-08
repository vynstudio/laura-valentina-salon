"use client";

import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  badge?: string;
  accent?: "pink" | "sand";
};

export default function ServiceCard({
  eyebrow,
  title,
  description,
  href,
  cta,
  badge,
  accent = "sand",
}: Props) {
  const tint =
    accent === "pink"
      ? "from-pink-100 via-cream to-sand"
      : "from-sand via-cream to-pink-50";
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-brown-100/70 bg-white/70 backdrop-blur-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(107,91,79,0.35)]">
      <div
        aria-hidden
        className={`relative h-44 w-full bg-gradient-to-br ${tint}`}
      >
        {badge && (
          <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-brown-700 backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h3 className="font-serif text-2xl text-brown-900">{title}</h3>
        <p className="text-sm leading-relaxed text-brown-700">{description}</p>
        {href && cta && (
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-brown-900 transition-colors hover:text-pink-700"
          >
            {cta}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
