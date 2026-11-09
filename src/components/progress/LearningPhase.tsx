"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2, Clock, CircleDashed } from "lucide-react";
import { LearningPhase as LearningPhaseType, ProgressStatus } from "@/data/progress";
import TopicChecklist from "./TopicChecklist";
import { useLocale } from "@/context/LocaleContext";

interface LearningPhaseProps {
  phase: LearningPhaseType;
  defaultOpen?: boolean;
}

export default function LearningPhase({
  phase,
  defaultOpen = true,
}: LearningPhaseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { locale } = useLocale();
  const isKhmer = locale === "km";

  const completedCount = phase.topics.filter((t) => t.status === "completed").length;
  const totalCount = phase.topics.length;

  const getStatusBadge = (status: ProgressStatus) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>{isKhmer ? "បានបញ្ចប់" : "Completed"}</span>
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 px-2.5 py-0.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span>{isKhmer ? "កំពុងរៀន" : "In Progress"}</span>
          </span>
        );
      case "not-started":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-white/5 px-2.5 py-0.5 rounded-full">
            <CircleDashed className="w-3 h-3 text-zinc-400" />
            <span>{isKhmer ? "មិនទាន់ចាប់ផ្ដើម" : "Not Started"}</span>
          </span>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0c121e]/70 backdrop-blur-xs transition-all duration-200 hover:border-zinc-300 dark:hover:border-white/20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {phase.phaseNumber}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700 sm:inline hidden">·</span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white truncate">
            {phase.title}
          </h4>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span>{completedCount}/{totalCount}</span>
          </div>
          {getStatusBadge(phase.status)}
          <div
            className={`p-1 rounded-lg text-zinc-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-zinc-100 dark:border-white/5 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-2 sm:hidden">
            <span>{completedCount} of {totalCount} topics mastered</span>
          </div>
          <TopicChecklist topics={phase.topics} />
        </div>
      )}
    </div>
  );
}

