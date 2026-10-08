"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import GitHubSection from "@/components/GitHubSection";
import { GraduationCap, ExternalLink, MapPin, Building2, Calendar, Award } from "lucide-react";

export default function PersonaPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-[#00d9ff] selection:text-[#07090e] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00a6f4 1px, transparent 1px),
              linear-gradient(to bottom, #00a6f4 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-[15%] right-[15%] w-[550px] h-[550px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[140px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10 animate-fade-in">
        {/* Page Header (Exact match to ayushcmd.me/about) */}
        <div className="text-center sm:text-left mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            WHO I AM
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Persona
          </h1>
        </div>

        {/* 2-Column Split: Bio Summary vs Education Cards (Matching Screenshot 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Hi, I'm Raksa */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Hi, I&apos;m Raksa
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              Computer Science and Engineering at <span className="text-[#00a6f4] dark:text-[#00d9ff] font-medium">Royal University of Phnom Penh (RUPP)</span> and enterprise backend developer trained at <span className="text-[#00a6f4] dark:text-[#00d9ff] font-medium">ISTAD</span>. I engineer at the intersection of robust backend architectures and clean, responsive user interfaces.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              My current focus: real-time distributed microservices (<span className="text-slate-900 dark:text-white font-medium">Spring Boot + Redis</span>), resilient transactional schemas in <span className="text-slate-900 dark:text-white font-medium">PostgreSQL</span>, and containerized deployment workflows with <span className="text-slate-900 dark:text-white font-medium">Docker</span> and CI/CD pipelines.
            </p>

            {/* Location & Institution Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#00a6f4] dark:text-[#00d9ff]" />
                <span>Phnom Penh, Cambodia</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400">
                <Building2 className="w-3.5 h-3.5 text-[#00a6f4] dark:text-[#00d9ff]" />
                <span>RUPP &amp; ISTAD</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Open for Work</span>
              </span>
            </div>
          </div>

          {/* Right Column: Education Cards (With Official School Logos) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Education &amp; Milestones
            </h3>

            {/* Education Card 1: RUPP */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0c1017]/90 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl flex items-start gap-4 sm:gap-5 transition-all hover:border-slate-300 dark:hover:border-white/20">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
                <Image
                  src="/logos/rupp-logo.png"
                  alt="Royal University of Phnom Penh Logo"
                  width={256}
                  height={256}
                  unoptimized
                  priority
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Royal University of Phnom Penh
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                    2025 – 2028(expected)
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#00a6f4] dark:text-[#00d9ff] mt-0.5">
                  Bachelor of Computer Science and Engineering
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-white/8 text-xs font-mono text-slate-500 dark:text-zinc-400">
                  <span>Algorithms · Operating Systems · Data Structures</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-[10px]">
                    Undergraduate
                  </span>
                </div>
              </div>
            </div>

            {/* Education Card 2: ISTAD */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0c1017]/90 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl flex items-start gap-4 sm:gap-5 transition-all hover:border-slate-300 dark:hover:border-white/20">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
                <Image
                  src="/logos/istad-logo.png"
                  alt="ISTAD Institute Logo"
                  width={256}
                  height={256}
                  unoptimized
                  priority
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    ISTAD Institute
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                    2026 – 2027
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#8b5cf6] dark:text-[#a78bfa] mt-0.5">
                  IT Expert 3rd Generation
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-white/8 text-xs font-mono text-slate-500 dark:text-zinc-400">
                  <span>Spring Framework · JPA · Keycloak · Docker · CI/CD and Microservices Archeticture</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#8b5cf6]/10 text-[#8b5cf6] dark:text-[#a78bfa] text-[10px]">

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contributions Section (Matching Screenshot 5) */}
        <div className="mb-16">
          <GitHubSection />
        </div>

        {/* Identity & 3 Pillars Bento Section */}
        <div className="pt-10 border-t border-slate-200 dark:border-white/10">
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
}
