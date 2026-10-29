"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Hero() {
  const { t, locale } = useLocale();

  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:pt-24"
    >
      <div className="max-w-2xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          {t("available")}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
          Bun Raksa
        </h1>
        <p className="mt-3 text-xl font-semibold text-blue-700 dark:text-blue-400 sm:text-2xl">
          {t("backendFullStackDeveloper")}
        </p>
        <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          {t("heroTagline")}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            {t("location")}
          </span>
          <span aria-hidden="true">·</span>
          <span>{t("stackSummary")}</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            {t("viewProjects")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-100 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
          >
            <Mail className="h-4 w-4" />
            {t("contactMe")}
          </Link>
        </div>
      </div>

      <div className="hidden justify-self-end lg:block">
        <div className="max-w-xs rounded-3xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:bg-[#0d1522] dark:shadow-black/20">
          <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
            <Image
              src="/profile.JPEG"
              alt="Bun Raksa"
              width={320}
              height={400}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="flex items-center justify-between gap-3 px-3 py-3">
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
