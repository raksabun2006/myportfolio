"use client";

import React from "react";

interface ProgressBarProps {
  value: number; // percentage (0 - 100)
  completed: number;
  total: number;
  accentColor?: string;
  showDetails?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function ProgressBar({
  value,
  completed,
  total,
  accentColor = "bg-blue-600 dark:bg-blue-500",
  showDetails = true,
  size = "md",
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  const heightClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-3.5",
  }[size];

  return (
    <div className="w-full">
      {showDetails && (
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <span className="text-zinc-600 dark:text-zinc-400">
            <strong className="text-zinc-900 dark:text-white font-semibold">{completed}</strong>
            <span className="text-zinc-400 dark:text-zinc-500"> / {total} topics completed</span>
          </span>
          <span className="font-semibold text-zinc-900 dark:text-white">
            {clampedValue}%
          </span>
        </div>
      )}

      <div
        className={`w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800/80 p-0.5 border border-zinc-200/60 dark:border-white/5 ${heightClasses}`}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress: ${clampedValue}%`}
      >
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${accentColor}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}

