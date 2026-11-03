"use client";

import React, { useState, useEffect, useRef, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const HERO_TITLES: Record<"en" | "km", string[]> = {
  en: [
    "Backend Developer",
    "Java & Spring Boot Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "REST API Developer",
  ],
  km: [
    "អ្នកអភិវឌ្ឍន៍ Backend",
    "អ្នកអភិវឌ្ឍន៍ Java និង Spring Boot",
    "អ្នកអភិវឌ្ឍន៍ Full-Stack",
    "វិស្វករកម្មវិធី",
    "អ្នកអភិវឌ្ឍន៍ REST API",
  ],
};

function splitGraphemes(text: string, lang: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    try {
      const segmenter = new Intl.Segmenter(lang === "km" ? "km" : "en", {
        granularity: "grapheme",
      });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    } catch {
      // Fallback if Intl.Segmenter fails
    }
  }
  return Array.from(text);
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getReducedMotionServerSnapshot = () => false;

export default function Hero() {
  const { t, locale } = useLocale();

  const activeLang: "en" | "km" = locale === "km" ? "km" : "en";
  const titles = useMemo(() => HERO_TITLES[activeLang], [activeLang]);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [typingState, setTypingState] = useState({
    lang: activeLang,
    titleIndex: 0,
    displayText: "",
    isDeleting: false,
  });

  // Adjust state during render when language changes (React recommended pattern)
  if (typingState.lang !== activeLang) {
    setTypingState({
      lang: activeLang,
      titleIndex: 0,
      displayText: "",
      isDeleting: false,
    });
  }

  const { titleIndex, displayText, isDeleting } = typingState;
  const currentFullTitle = titles[titleIndex % titles.length];

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Rotate titles when reduced motion is preferred
  useEffect(() => {
    if (!prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTypingState((prev) => ({
        ...prev,
        titleIndex: (prev.titleIndex + 1) % titles.length,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, titles.length]);

  // Typewriter animation loop for normal motion
  useEffect(() => {
    if (prefersReducedMotion) return;

    const graphemes = splitGraphemes(currentFullTitle, activeLang);
    const currentGraphemes = splitGraphemes(displayText, activeLang);

    const isFullText = currentGraphemes.length === graphemes.length;
    const isEmptyText = currentGraphemes.length === 0;

    let delay = isDeleting ? 45 : activeLang === "km" ? 100 : 80;

    if (!isDeleting && isFullText) {
      // Completed typing current title -> pause before deleting
      delay = 2000;
      timeoutRef.current = setTimeout(() => {
        setTypingState((prev) => ({ ...prev, isDeleting: true }));
      }, delay);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    if (isDeleting && isEmptyText) {
      // Finished deleting -> pause before next title
      delay = 350;
      timeoutRef.current = setTimeout(() => {
        setTypingState((prev) => ({
          ...prev,
          isDeleting: false,
          titleIndex: (prev.titleIndex + 1) % titles.length,
        }));
      }, delay);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        // Add next grapheme
        const nextGraphemeCount = currentGraphemes.length + 1;
        setTypingState((prev) => ({
          ...prev,
          displayText: graphemes.slice(0, nextGraphemeCount).join(""),
        }));
      } else {
        // Remove one grapheme
        const nextGraphemeCount = Math.max(0, currentGraphemes.length - 1);
        setTypingState((prev) => ({
          ...prev,
          displayText: graphemes.slice(0, nextGraphemeCount).join(""),
        }));
      }
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, currentFullTitle, activeLang, prefersReducedMotion, titles.length]);

  const displayedText = prefersReducedMotion ? currentFullTitle : displayText;

  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-8 px-4 pb-14 pt-8 sm:gap-10 sm:px-6 sm:pb-18 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-20"
    >
      <div className="order-2 max-w-2xl lg:order-1">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          {t("available")}
        </div>

        <h1 className="text-[clamp(2rem,10vw,3rem)] font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
          Bun Raksa
        </h1>

        {/* Bilingual Continuous Typewriter Animation */}
        <div
          className="mt-2 min-h-[2.25rem] sm:min-h-[2.75rem] flex items-center text-lg font-semibold leading-snug text-blue-700 dark:text-blue-400 sm:mt-3 sm:text-2xl"
          aria-live="polite"
        >
          <span className="sr-only">{currentFullTitle}</span>
          <span
            aria-hidden="true"
            className={`inline-block ${activeLang === "km" ? "font-sans leading-normal" : ""}`}
          >
            {displayedText}
          </span>
          <span
            className="inline-block w-[2.5px] h-[1.15em] ml-1 bg-blue-600 dark:bg-blue-400 animate-pulse align-middle"
            aria-hidden="true"
          />
        </div>

        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:mt-5 sm:text-lg sm:leading-8">
          {t("heroTagline")}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            {t("location")}
          </span>
          <span aria-hidden="true">·</span>
          <span>{t("stackSummary")}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex min-w-[8.5rem] flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:flex-none sm:px-5"
          >
            {t("viewProjects")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex min-w-[8.5rem] flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 shadow-xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-100 dark:hover:border-white/20 dark:hover:bg-white/[0.06] sm:flex-none sm:px-5"
          >
            <Mail className="h-4 w-4" />
            {t("contactMe")}
          </Link>
        </div>
      </div>

      <div className="order-1 justify-self-center lg:order-2 lg:justify-self-end">
        <div className="w-48 sm:w-56 lg:w-full lg:max-w-xs">
          <div className="overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/10 dark:bg-zinc-800 dark:shadow-black/20">
            <Image
              src="/profile.JPEG"
              alt="Bun Raksa"
              width={320}
              height={400}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="flex items-center justify-between gap-3 px-2 py-3">
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
              {t("heroEducation")}
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-label="Available" />
          </div>
        </div>
      </div>
    </section>
  );
}
