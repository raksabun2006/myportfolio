"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 px-4 py-8 dark:border-white/10 dark:bg-[#070a10] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          {/* Brand & Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base text-zinc-900 dark:text-white">
                Bun Raksa
              </span>
              <span className="text-zinc-400">·</span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
                {t("fullStackDeveloper")}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("footerDescription")}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="mailto:raksabun2006@gmail.com"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
              aria-label="Email Bun Raksa"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-1" aria-hidden="true" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span>{t("backToTop")}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and location */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-zinc-200/60 pt-5 text-xs text-zinc-500 dark:border-white/5 sm:flex-row">
          <div>
            <span>© {new Date().getFullYear()} Bun Raksa. {t("allRightsReserved")}</span>
          </div>
          <span>Phnom Penh, Cambodia</span>
        </div>
      </div>
    </footer>
  );
}
