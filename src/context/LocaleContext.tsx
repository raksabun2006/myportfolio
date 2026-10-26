"use client";

import { createContext, useContext, useEffect } from "react";
import type { Locale, TranslationKey } from "@/i18n/config";
import { translations } from "@/i18n/config";

interface LocaleContextValue {
  locale: Locale;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale === "kh" ? "km" : "en";
    document.documentElement.dataset.lang = locale;
    try {
      localStorage.setItem("portfolio_locale", locale);
    } catch {
      // Preferences are optional when storage is unavailable.
    }
  }, [locale]);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        t: (key) => translations[locale][key],
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
