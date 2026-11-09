"use client";

import React from "react";
import ProgressHero from "./progress/ProgressHero";
import LearningPathCard from "./progress/LearningPathCard";
import { learningPathsData } from "@/data/progress";
import { useLocale } from "@/context/LocaleContext";
import { FlutterIcon } from "./Icons";

export default function ProgressPageClient() {
  const { locale } = useLocale();
  const isKhmer = locale === "km";

  return (
    <div className="w-full">
      {/* Hero with stats & aggregate progress */}
      <ProgressHero />

      {/* Flutter Mobile Learning Roadmap Section */}
      <section className="mt-10 sm:mt-14">
        <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
          <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-900/40 shadow-2xs">
            <FlutterIcon className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {isKhmer ? "ផែនទីផ្លូវសិក្សា Flutter & Android" : "Flutter & Android Learning Roadmap"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {isKhmer
                ? "ការរៀនសូត្រពីមូលដ្ឋាន Dart រហូតដល់ការបង្កើតកម្មវិធីទូរស័ព្ទ Android ពេញលេញ"
                : "Continuous mastery track from core Dart OOP fundamentals to production Android application delivery."}
            </p>
          </div>
        </div>

        {/* Learning Path Card */}
        <div className="space-y-8 sm:space-y-10">
          {learningPathsData.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </section>
    </div>
  );
}
