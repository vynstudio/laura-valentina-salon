"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLocale } from "@/lib/LocaleProvider";

// Window.Cal is already declared in CalEmbed.tsx; reusing that type here.

const NS_KEY = "__lv_cal_floating_loaded";

function loadCalScript() {
  if (typeof window === "undefined") return;
  const w = window as unknown as Record<string, boolean>;
  if (w[NS_KEY]) return;
  w[NS_KEY] = true;
  // Official cal.com embed bootstrap
  (function (C: Window, A: string, L: string) {
    const win = C as unknown as Record<string, unknown> & { Cal?: unknown };
    const p = function (a: { q: unknown[] }, ar: unknown) {
      a.q.push(ar);
    };
    const d = C.document;
    win.Cal =
      win.Cal ||
      function () {
        const cal = win.Cal as unknown as {
          q: unknown[];
          ns: Record<string, unknown>;
          loaded?: boolean;
        };
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: ((...x: unknown[]) => void) & { q: unknown[] } = function (
            ...x: unknown[]
          ) {
            p(api, x);
          } as unknown as ((...x: unknown[]) => void) & { q: unknown[] };
          const namespace = ar[1] as string;
          api.q = api.q || [];
          if (typeof namespace === "string") {
            (cal.ns as Record<string, unknown>)[namespace] =
              (cal.ns as Record<string, unknown>)[namespace] || api;
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

export default function CalFloatingButton() {
  const { t, locale } = useLocale();
  const pathname = usePathname();

  // Don't render the floating button on /booking (already inline) or /brief
  // (intake form, distraction).
  const hidden = pathname === "/booking" || pathname === "/brief";

  useEffect(() => {
    if (hidden) return;
    loadCalScript();
    const Cal = window.Cal;
    if (!Cal) return;
    const link = process.env.NEXT_PUBLIC_CAL_LINK || "valentinastudio";
    const ns = "lvfab";
    Cal("init", ns, { origin: "https://cal.eu" });
    const nsApi = Cal.ns?.[ns] as
      | ((...args: unknown[]) => unknown)
      | undefined;
    nsApi?.("floatingButton", {
      calLink: link,
      config: { layout: "month_view", theme: "light" },
      buttonText: t.cta.bookNow,
      buttonPosition: "bottom-right",
      buttonColor: "#9B8577",
      buttonTextColor: "#FAF8F5",
      hideButtonIcon: false,
    });
    nsApi?.("ui", {
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
  }, [hidden, locale, t.cta.bookNow]);

  return null;
}
