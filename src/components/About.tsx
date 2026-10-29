"use client";

import React from "react";
import {
  Code2,
  Server,
  Users2,
  GraduationCap,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Interfaces",
    description:
      "Crafting responsive, accessible web interfaces using React and Next.js with type-safe contracts and smooth client-side interactions.",
  },
  {
    icon: Server,
    title: "Backend REST APIs",
    description:
      "Designing clean Controller-Service-Repository architectures in Java and Spring Boot with PostgreSQL and secure JWT authorization.",
  },
  {
    icon: Users2,
    title: "Problem Solving & Teamwork",
    description:
      "Collaborating effectively through clear API contracts, Git feature-branch workflows, and pragmatic debugging of complex business logic.",
  },
];

export default function About() {
  const { t } = useLocale();
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 block mb-2">
          {t("whoIAm")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t("backgroundFocus")}
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
          {t("aboutIntro")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
          <p>{t("aboutBioOne")}</p>
          <p>{t("aboutBioTwo")}</p>
          <p>{t("aboutBioThree")}</p>
          <p>{t("aboutBioFour")}</p>

          {/* Key Checklist */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t("checklistFullStack")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t("checklistApi")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t("checklistDatabase")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t("checklistWorkflow")}</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Competency Focus Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {HIGHLIGHTS.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="p-5 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c121e] shadow-2xs hover:border-zinc-300 dark:hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-sm sm:text-base">
                    {h.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {h.description}
                </p>
              </div>
            );
          })}

          {/* Quick Context Card */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Phnom Penh, Cambodia</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>CS Class of 2029</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
