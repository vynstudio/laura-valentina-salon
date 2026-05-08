"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LOCALE, dict, LOCALES, type Locale } from "./i18n";

type Ctx = {
  locale: Locale;
  t: (typeof dict)[Locale];
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lv-locale") as Locale | null;
      if (stored && LOCALES.includes(stored)) {
        setLocaleState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const nav = (navigator.language || "").toLowerCase();
      const detected: Locale = nav.startsWith("de")
        ? "de"
        : nav.startsWith("en")
          ? "en"
          : "fr";
      setLocaleState(detected);
      document.documentElement.lang = detected;
    } catch {
      // ignore
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem("lv-locale", l);
      document.documentElement.lang = l;
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, t: dict[locale], setLocale }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
