"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Locale, TranslationKey } from "@/i18n/config";
import { translations, isLocale } from "@/i18n/config";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale: initialLocale = "en",
  children,
}: {
  locale?: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Sync if initialLocale prop changes
  useEffect(() => {
    if (initialLocale && isLocale(initialLocale)) {
      setLocaleState(initialLocale);
    }
  }, [initialLocale]);

  // Synchronize document attributes and localStorage on mount / change
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.lang = locale;
    try {
      localStorage.setItem("portfolio_locale", locale);
    } catch {
      // Storage might not be accessible
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    if (!isLocale(newLocale)) return;

    // 1. Capture current scroll position immediately
    const currentScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    // 2. Update React state immediately (instant in-place translation update)
    setLocaleState(newLocale);

    if (typeof window !== "undefined") {
      // 3. Update DOM attributes and localStorage
      document.documentElement.lang = newLocale;
      document.documentElement.dataset.lang = newLocale;
      try {
        localStorage.setItem("portfolio_locale", newLocale);
      } catch {}

      // 4. Update the URL in browser history without triggering page reload or router scroll
      const pathname = window.location.pathname;
      let newPathname = pathname;
      if (pathname.match(/^\/(en|km|kh)(?=\/|$)/)) {
        newPathname = pathname.replace(/^\/(en|km|kh)/, `/${newLocale}`);
      } else {
        newPathname = `/${newLocale}${pathname === "/" ? "" : pathname}`;
      }

      window.history.replaceState(
        window.history.state,
        "",
        newPathname + window.location.search + window.location.hash
      );

      // 5. Strictly preserve exact reading / scroll position without jump
      window.scrollTo({ top: currentScrollY, behavior: "instant" as ScrollBehavior });
      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: "instant" as ScrollBehavior });
        setTimeout(() => {
          window.scrollTo({ top: currentScrollY, behavior: "instant" as ScrollBehavior });
        }, 50);
      });
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "km" : "en");
  }, [locale, setLocale]);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale]?.[key] ?? translations.en[key] ?? (key as string);
    },
    [locale]
  );

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
