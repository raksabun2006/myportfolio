"use client";

import React from "react";
import { useLocale } from "@/context/LocaleContext";
import { localeLabels } from "@/i18n/config";
import CountryFlag from "@/components/CountryFlag";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "button" | "drawer";
  onLanguageChange?: () => void;
}

export default function LanguageSwitcher({
  className = "",
  variant = "button",
  onLanguageChange,
}: LanguageSwitcherProps) {
  const { locale, toggleLocale, t } = useLocale();

  const handleClick = () => {
    toggleLocale();
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  const nextLocale = locale === "en" ? "km" : "en";
  const label = `${t("language")}: ${localeLabels[nextLocale]}`;

  if (variant === "drawer") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/80 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/[0.08] transition-colors cursor-pointer ${className}`}
        aria-label={label}
        title={label}
      >
        <div className="flex items-center gap-2.5">
          <CountryFlag locale={locale} />
          <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {locale === "en" ? "English (EN)" : "ភាសាខ្មែរ (KM)"}
          </span>
        </div>
        <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-medium">
          {locale === "en" ? "ប្តូរទៅ ខ្មែរ" : "Switch to EN"}
        </span>
      </button>
    );
  }

  // Only the flag button with click to change
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer ${className}`}
      aria-label={label}
      title={label}
    >
      <CountryFlag locale={locale} />
    </button>
  );
}
