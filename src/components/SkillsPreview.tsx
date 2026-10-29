"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const CORE_TECHNOLOGIES = ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "React"];

export default function SkillsPreview() {
  const { t, locale } = useLocale();

  return (
    <section
      id="skills-preview"
      className="mx-auto max-w-6xl border-t border-zinc-200/80 px-4 py-14 dark:border-white/10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="mb-2 block text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {t("technicalSkills")}
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            {t("coreTechnologies")}
          </h2>
        </div>
        <Link
          href={`/${locale}/skills`}
          className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {t("viewAllSkills")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {CORE_TECHNOLOGIES.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm font-medium text-zinc-700 shadow-xs transition-colors hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-blue-400/50 dark:hover:text-blue-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}
