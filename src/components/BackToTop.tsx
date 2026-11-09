"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getReducedMotionServerSnapshot = () => false;

export default function BackToTop() {
  const { t, locale } = useLocale();
  const [visible, setVisible] = useState(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const checkScroll = useCallback(() => {
    // Show when scrolled down approximately 300px
    if (typeof window !== "undefined") {
      setVisible(window.scrollY > 300);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };

  const isKhmer = locale === "km";
  const tooltipText = isKhmer ? "ត្រឡប់ទៅខាងលើ" : "Back to Top";

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative group">
        {/* Floating Tooltip */}
        <div
          role="tooltip"
          id="back-to-top-tooltip"
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-zinc-900/95 dark:bg-white/95 text-white dark:text-zinc-900 text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md backdrop-blur-xs"
        >
          <span>{tooltipText}</span>
          <span
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900/95 dark:border-t-white/95"
            aria-hidden="true"
          />
        </div>

        {/* Back to Top Floating Action Button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={tooltipText}
          aria-describedby="back-to-top-tooltip"
          className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0c121e]/90 text-zinc-700 dark:text-zinc-200 shadow-md backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-[#111927] hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}

