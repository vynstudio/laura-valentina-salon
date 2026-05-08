"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/LocaleProvider";

type Props = {
  calLink?: string;
  height?: number;
};

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => unknown) & { ns?: Record<string, unknown>; loaded?: boolean };
  }
}

const CAL_INIT_KEY = "__lv_cal_loaded";

function loadCalScript() {
  if (typeof window === "undefined") return;
  if ((window as unknown as Record<string, boolean>)[CAL_INIT_KEY]) return;
  (window as unknown as Record<string, boolean>)[CAL_INIT_KEY] = true;
  // Official embed snippet from cal.com
  (function (C: Window, A: string, L: string) {
    const w = C as unknown as Record<string, unknown> & { Cal?: unknown };
    const p = function (a: { q: unknown[] }, ar: unknown) {
      a.q.push(ar);
    };
    const d = C.document;
    w.Cal = w.Cal ||
      function () {
        const cal = (w.Cal as unknown) as { q: unknown[]; ns: Record<string, unknown>; loaded?: boolean };
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: ((...x: unknown[]) => void) & { q: unknown[] } = function (...x: unknown[]) {
            p(api, x);
          } as unknown as ((...x: unknown[]) => void) & { q: unknown[] };
          const namespace = ar[1] as string;
          api.q = api.q || [];
          if (typeof namespace === "string") {
            (cal.ns as Record<string, unknown>)[namespace] = (cal.ns as Record<string, unknown>)[namespace] || api;
            p((cal.ns as Record<string, { q: unknown[] }>)[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.eu/embed/embed.js", "init");
}

export default function CalEmbed({ calLink, height = 720 }: Props) {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  const link =
    calLink ||
    process.env.NEXT_PUBLIC_CAL_LINK ||
    "valentinastudio";

  useEffect(() => {
    loadCalScript();
    const Cal = window.Cal;
    if (!Cal) return;
    Cal("init", "lvbook", { origin: "https://cal.eu" });
    // @ts-expect-error namespaced API
    Cal.ns?.lvbook?.("inline", {
      elementOrSelector: ref.current,
      calLink: link,
      layout: "month_view",
      config: { theme: "light" },
    });
    // @ts-expect-error namespaced API
    Cal.ns?.lvbook?.("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: {
          "cal-brand": "#9B8577",
          "cal-text": "#3D3128",
          "cal-bg": "#FAF8F5",
          "cal-bg-emphasis": "#F5F0EB",
          "cal-border": "#E8DED2",
          "cal-border-subtle": "#F5F0EB",
        },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, [link]);

  return (
    <div
      ref={ref}
      className="rounded-[28px] border border-brown-100 bg-white/70 backdrop-blur-sm overflow-hidden"
      style={{ minWidth: "320px", height, width: "100%" }}
      aria-label={t.common.bookCalendly}
    />
  );
}
