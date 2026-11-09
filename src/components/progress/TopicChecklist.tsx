"use client";

import React from "react";
import { CheckCircle2, Clock, CircleDashed } from "lucide-react";
import { LearningTopic, ProgressStatus } from "@/data/progress";
import { useLocale } from "@/context/LocaleContext";

interface TopicChecklistProps {
  topics: LearningTopic[];
}

export default function TopicChecklist({ topics }: TopicChecklistProps) {
  const { locale } = useLocale();
  const isKhmer = locale === "km";

  const getStatusLabel = (status: ProgressStatus) => {
    switch (status) {
      case "completed":
        return isKhmer ? "បានបញ្ចប់" : "Completed";
      case "in-progress":
        return isKhmer ? "កំពុងរៀន" : "In Progress";
      case "not-started":
        return isKhmer ? "មិនទាន់ចាប់ផ្ដើម" : "Planned";
    }
  };

  const getStatusIcon = (status: ProgressStatus) => {
    switch (status) {
      case "completed":
        return (
          <CheckCircle2
            className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0"
            aria-hidden="true"
          />
        );
      case "in-progress":
        return (
          <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-60" />
            <Clock
              className="relative w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
          </span>
        );
      case "not-started":
        return (
          <CircleDashed
            className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0"
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
      {topics.map((topic) => {
        const isCompleted = topic.status === "completed";
        const isInProgress = topic.status === "in-progress";

        return (
          <li
            key={topic.id}
            className={`flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-[13px] border transition-colors ${
              isCompleted
                ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/30 text-zinc-800 dark:text-zinc-200"
                : isInProgress
                ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200/70 dark:border-blue-900/40 text-zinc-900 dark:text-white font-medium"
                : "bg-zinc-50/60 dark:bg-white/[0.02] border-zinc-200/60 dark:border-white/5 text-zinc-500 dark:text-zinc-400"
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              {getStatusIcon(topic.status)}
              <span className="truncate">{topic.title}</span>
            </div>

            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300"
                  : isInProgress
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 font-semibold"
                  : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              {getStatusLabel(topic.status)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

