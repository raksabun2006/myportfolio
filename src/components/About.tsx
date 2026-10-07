"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  GraduationCap,
  Zap,
  Target,
  Flame,
} from "lucide-react";

const PILLARS = [
  {
    title: "GROWTH",
    description: "Driven by technical curiosity, from JVM bytecode & concurrency to distributed system resilience.",
    color: "#a78bfa",
  },
  {
    title: "FOCUS",
    description: "Deep engineering discipline on memory efficiency, sub-50ms query paths, and idempotent operations.",
    color: "#00d9ff",
  },
  {
    title: "CRAFT",
    description: "Contract-first API design, normalized schemas, and zero unverified dependencies in production.",
    color: "#f59e0b",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] mb-2 font-medium">
            04 / IDENTITY &amp; PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Who I am, where I build from, and the engineering principles that guide my work.
          </p>
        </div>

        {/* Bento Grid (ayushcmd style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Bento Card 1: Location & Coordinates with Cyber Radar Pulse */}
          <div className="rounded-2xl p-6 relative overflow-hidden bg-white dark:bg-[#0c1018] border border-slate-200 dark:border-white/10 flex flex-col justify-between min-h-[220px] shadow-sm dark:shadow-lg">
            {/* Ambient Cyan Radial Glow */}
            <div className="absolute inset-0 pointer-events-none bg-radial-[ellipse_at_70%_60%,rgba(0,217,255,0.08)_0%,transparent_65%]" />

            {/* Top Coordinates Header */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5 text-[#00d9ff]">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCATION</span>
              </div>
              <span className="text-[10px] tracking-wider text-zinc-500">GMT+7 · INDOCHINA TIME</span>
            </div>

            {/* Main City Display */}
            <div className="relative z-10 my-4">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                PHNOM PENH
              </div>
              <div className="text-xs font-mono text-[#00a6f4] dark:text-[#00d9ff]/80 mt-1">
                11.5564° N, 104.9282° E · CAMBODIA
              </div>
            </div>

            {/* Active Status */}
            <div className="relative z-10 pt-3 border-t border-slate-200 dark:border-white/8 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] dark:bg-[#4ade80] neon-dot" />
                <span>Base of Operations &amp; Remote</span>
              </span>
              <span className="text-[#00a6f4] dark:text-[#00d9ff] font-semibold">Active</span>
            </div>
          </div>

          {/* Bento Card 2: Identity & Core Narrative */}
          <div className="rounded-2xl p-6 relative overflow-hidden bg-white dark:bg-[#0c1018] border border-slate-200 dark:border-white/10 flex flex-col justify-between min-h-[220px] shadow-sm dark:shadow-lg">
            <div className="relative z-10">
              <div className="text-xs font-mono text-[#8b5cf6] dark:text-[#a78bfa] tracking-wider uppercase mb-2.5 font-semibold">
                / ENGINEERING IDENTITY
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                I am Bun Raksa — a Backend and Full-Stack Developer specializing in enterprise Java, Spring Boot,
                and relational database systems. I bridge rigorous system architecture with modern client interfaces,
                focusing on clean code, automated test pipelines, and high-availability APIs.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-white/8 text-xs font-mono italic text-slate-500 dark:text-zinc-400">
              &quot;Where architectural precision meets modern web performance.&quot;
            </div>
          </div>
        </div>

        {/* Bento Card 3: Academic Foundations (RUPP & ISTAD) */}
        <div className="mb-5 p-6 rounded-2xl bg-white dark:bg-[#0c1018] border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-sm dark:shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/8 pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#00a6f4] dark:text-[#00d9ff]" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
                Academic &amp; Specialized Milestones
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00a6f4] dark:text-[#00d9ff] px-2.5 py-0.5 rounded-full bg-[#00a6f4]/10 dark:bg-[#00d9ff]/10 border border-[#00a6f4]/25 dark:border-[#00d9ff]/25">
              Dual Track Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/8 flex items-start gap-3.5">
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 shrink-0 flex items-center justify-center">
                <Image
                  src="/logos/rupp-logo.png"
                  alt="RUPP Logo"
                  width={256}
                  height={256}
                  unoptimized
                  priority
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[#00a6f4] dark:text-[#00d9ff] font-bold block text-sm">
                  Royal University of Phnom Penh (RUPP)
                </span>
                <span className="text-slate-800 dark:text-zinc-300 font-medium mt-0.5 block">
                  Bachelor of Computer Science and Engineering
                </span>
                <p className="text-slate-600 dark:text-zinc-400 text-[11px] mt-1 leading-relaxed">
                  Foundational computer science, algorithms, relational database theory, and operating system principles.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/8 flex items-start gap-3.5">
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 shrink-0 flex items-center justify-center">
                <Image
                  src="/logos/istad-logo.png"
                  alt="ISTAD Logo"
                  width={256}
                  height={256}
                  unoptimized
                  priority
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[#8b5cf6] dark:text-[#a78bfa] font-bold block text-sm">
                  ISTAD Institute
                </span>
                <span className="text-slate-800 dark:text-zinc-300 font-medium mt-0.5 block">
                  IT Expert 3rd Generation (Basic Course)
                </span>
                <p className="text-slate-600 dark:text-zinc-400 text-[11px] mt-1 leading-relaxed">
                  Hands-on microservices development, Spring Security RBAC, JPA optimization, and container orchestration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Row: 3 Pillars (Growth, Focus, Craft - ayushcmd signature) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `${pillar.color}0a`,
                borderColor: `${pillar.color}25`,
              }}
            >
              <div
                className="text-xs font-mono font-bold tracking-widest mb-2"
                style={{ color: pillar.color }}
              >
                {pillar.title}
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
