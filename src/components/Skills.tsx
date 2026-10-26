"use client";

import React from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Check,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { useLocale } from "@/context/LocaleContext";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  "Tools & DevOps": Wrench,
};

export default function Skills() {
  const { t } = useLocale();
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 block mb-2">
          {t("technicalArchitecture")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t("technologiesCompetencies")}
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
          {t("skillsDescription")}
        </p>
      </div>

      {/* 4 Skill Categories Grid: 1 col on mobile, 2 col on tablet & desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {skillCategories.map((category) => {
          const CategoryIcon = CATEGORY_ICONS[category.title] || Code2;

          return (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c121e] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Chips / Clean Grid */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/5 flex items-start justify-between gap-3 group hover:border-zinc-300 dark:hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-white block font-mono">
                            {skill.name}
                          </span>
                          {skill.description && (
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 block leading-snug mt-0.5">
                              {skill.description}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Count Pill */}
              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>{t("verifiedKnowledge")}</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px]">
                  {category.skills.length} {t("technologies")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
