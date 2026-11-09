"use client";

import React, { useState } from "react";
import {
  Calendar,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FlutterIcon, MicroservicesIcon } from "@/components/Icons";
import { LearningPath, calculatePathProgress } from "@/data/progress";
import ProgressBar from "./ProgressBar";
import TechnologyBadge from "./TechnologyBadge";
import LearningPhase from "./LearningPhase";
import { useLocale } from "@/context/LocaleContext";

interface LearningPathCardProps {
  path: LearningPath;
}

export default function LearningPathCard({ path }: LearningPathCardProps) {
  const { t, locale } = useLocale();
  const isKhmer = locale === "km";
  const [allExpanded, setAllExpanded] = useState(true);

  const summary = calculatePathProgress(path);

  const isFlutter = path.iconName === "flutter";

  return (
    <article
      id={path.id}
      className="rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-[#0d1522] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
    >
      {/* Subtle background glow effect based on track */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-15 dark:opacity-20 ${
          isFlutter ? "bg-sky-400" : "bg-indigo-500"
        }`}
        aria-hidden="true"
      />

      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          {/* Status Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800/40 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span>{isKhmer ? "កំពុងរៀន" : path.badge}</span>
          </span>

          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hidden sm:inline">
            {path.category}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{isKhmer ? "បច្ចុប្បន្នភាព" : "Updated"}: {path.lastUpdated}</span>
        </div>
      </div>

      {/* Title & Icon Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`p-3 rounded-2xl border shrink-0 ${
            isFlutter
              ? "bg-sky-50 dark:bg-sky-950/40 border-sky-200/80 dark:border-sky-800/40 text-sky-600 dark:text-sky-400"
              : "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200/80 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400"
          }`}
        >
          {isFlutter ? (
            <FlutterIcon className="w-7 h-7" />
          ) : (
            <MicroservicesIcon className="w-7 h-7" />
          )}
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {path.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
            {path.description}
          </p>
        </div>
      </div>

      {/* Technologies List */}
      <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-white/5">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-3">
          {t("technologiesInPath")}
        </span>
        <div className="flex flex-wrap gap-2">
          {path.technologies.map((tech) => (
            <TechnologyBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Dynamic Progress Metric Card */}
      <div className="mt-7 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50/70 dark:bg-white/[0.02] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300">
              {t("learningProgress")}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 shadow-2xs">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">{t("currentPhaseLabel")}:</span>
            <span className="truncate max-w-[200px] sm:max-w-none">{path.currentPhase}</span>
          </div>
        </div>

        <ProgressBar
          value={summary.percentage}
          completed={summary.completedTopics}
          total={summary.totalTopics}
          accentColor={
            isFlutter
              ? "bg-gradient-to-r from-sky-500 to-blue-600"
              : "bg-gradient-to-r from-indigo-500 to-cyan-500"
          }
          size="lg"
        />
      </div>

      {/* Phases Accordion Header */}
      <div className="mt-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
            {isKhmer ? "ដំណាក់កាលនៃផែនទីផ្លូវ" : "Roadmap Phases & Modules"}
          </h4>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            ({path.phases.length} {isKhmer ? "ដំណាក់កាល" : "Phases"})
          </span>
        </div>

        <button
          type="button"
          onClick={() => setAllExpanded(!allExpanded)}
          className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
        >
          <span>{allExpanded ? t("collapseAll") : t("expandAll")}</span>
          {allExpanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Phases Stack */}
      <div className="space-y-3">
        {path.phases.map((phase) => (
          <LearningPhase
            key={phase.phaseNumber}
            phase={phase}
            defaultOpen={allExpanded}
          />
        ))}
      </div>
    </article>
  );
}

