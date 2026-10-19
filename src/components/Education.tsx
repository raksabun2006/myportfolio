"use client";

import React from "react";
import Image from "next/image";
import { educationList } from "@/data/education";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 block mb-2">
          EDUCATION &amp; TRAINING
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Academic Foundations &amp; Training
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
          Formal computer science foundations at university level combined with intensive enterprise software engineering training.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {educationList.slice(0, 2).map((item) => (
          <div
            key={item.institution}
            className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c121e] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              {/* Institution Header with Logo */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  {item.logo ? (
                    <div className="relative w-12 h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 p-1.5 shrink-0 flex items-center justify-center">
                      <Image
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white leading-snug">
                      {item.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {item.degree}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono border border-zinc-200 dark:border-zinc-700/60 shrink-0">
                  {item.status}
                </span>
              </div>

              {/* Location & Period Meta */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 pb-4 border-b border-zinc-100 dark:border-white/5 font-sans">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Highlights / Focus Areas */}
              <div className="mt-4 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                  Core Focus &amp; Coursework:
                </span>
                <div className="space-y-1.5">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
