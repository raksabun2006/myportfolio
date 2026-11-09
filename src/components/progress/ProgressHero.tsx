"use client";

import React from "react";
import {
  TrendingUp,
  Target,
  Compass,
  Calendar,
  Sparkles,
  Layers,
} from "lucide-react";
import {
  progressMetadata,
  learningPathsData,
  calculateOverallProgress,
} from "@/data/progress";
import { useLocale } from "@/context/LocaleContext";
import ProgressBar from "./ProgressBar";

export default function ProgressHero() {
  const { t, locale } = useLocale();
  const isKhmer = locale === "km";

  const overall = calculateOverallProgress(learningPathsData);

  return (
    <div className="mb-12 sm:mb-16">
      {/* Eyebrow & Title */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>{isKhmer ? "វឌ្ឍនភាពវិស្វកម្ម" : "Engineering Growth & Roadmaps"}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          {t("myProgress")}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
          {t("progressSubtitle")}
        </p>
      </div>

      {/* Modern Dashboard Stats Grid */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Stat 1: Current Focus */}
        <div className="col-span-2 sm:col-span-1 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#0d1522] p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-2">
            <Target className="w-4 h-4 text-sky-500" />
            <span className="uppercase tracking-wider">{t("currentFocusLabel")}</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-snug">
            {progressMetadata.currentFocus}
          </div>
        </div>

        {/* Stat 2: Active Roadmaps */}
        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#0d1522] p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-2">
            <Compass className="w-4 h-4 text-indigo-500" />
            <span className="uppercase tracking-wider">{isKhmer ? "ផ្លូវសិក្សា" : "Active Paths"}</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
              {learningPathsData.length}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {isKhmer ? "ផ្លូវសិក្សា" : "Roadmaps"}
            </span>
          </div>
        </div>

        {/* Stat 3: Learning Status */}
        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#0d1522] p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className="uppercase tracking-wider">{t("learningStatusLabel")}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isKhmer ? "កំពុងរៀនសូត្រជាប្រចាំ" : progressMetadata.learningStatus}</span>
          </div>
        </div>

        {/* Stat 4: Last Updated */}
        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#0d1522] p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-2">
            <Calendar className="w-4 h-4 text-amber-500" />
            <span className="uppercase tracking-wider">{t("lastUpdatedLabel")}</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
            {progressMetadata.lastUpdated}
          </div>
        </div>
      </div>

      {/* Aggregate Progress Overview Banner */}
      <div className="mt-4 rounded-2xl border border-blue-200/60 dark:border-blue-900/30 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-sky-50/50 dark:from-blue-950/20 dark:via-indigo-950/15 dark:to-sky-950/20 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-blue-950 dark:text-blue-300">
              {isKhmer ? "វឌ្ឍនភាពសរុបនៃប្រធានបទទាំងអស់" : "Total Roadmap Mastery Progress"}
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
            {overall.completedTopics} {isKhmer ? "បានបញ្ចប់" : "mastered"} · {overall.inProgressTopics} {isKhmer ? "កំពុងសិក្សា" : "in progress"} · {overall.totalTopics - overall.completedTopics - overall.inProgressTopics} {isKhmer ? "គ្រោងទុក" : "planned"}
          </span>
        </div>

        <ProgressBar
          value={overall.percentage}
          completed={overall.completedTopics}
          total={overall.totalTopics}
          accentColor="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500"
          size="md"
        />
      </div>
    </div>
  );
}

