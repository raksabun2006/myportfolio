"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  SpringIcon,
  NextjsIcon,
  PostgresIcon,
  DockerIcon,
  ReactIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-7rem)] sm:min-h-[82vh] flex items-center justify-center pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Engineering Atmosphere (Subtle refined grid, soft radial glows & concentric rings) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle engineering grid with radial vignette mask to prevent visual distraction */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.02] animate-grid-drift"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0284c7 1px, transparent 1px),
              linear-gradient(to bottom, #0284c7 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Soft blue/cyan radial glow behind hero */}
        <div className="absolute top-[18%] right-[12%] w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-sky-500/[0.045] dark:bg-cyan-400/[0.03] blur-[120px]" />
        <div className="absolute bottom-[12%] left-[6%] w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] rounded-full bg-blue-600/[0.03] dark:bg-indigo-400/[0.02] blur-[120px]" />

        {/* Subtle concentric technical radar circles centered behind portrait */}
        <div className="hidden lg:block absolute top-1/2 right-[14%] -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-sky-500/[0.05] dark:border-sky-400/[0.05] animate-tech-rotate-slow pointer-events-none">
          <div className="absolute inset-10 rounded-full border border-dashed border-sky-500/[0.04] dark:border-sky-400/[0.04]" />
          <div className="absolute inset-24 rounded-full border border-sky-500/[0.03] dark:border-sky-400/[0.03]" />
        </div>

        {/* Minimal ambient floating particles */}
        <div className="absolute top-1/4 left-[18%] w-1.5 h-1.5 rounded-full bg-sky-400/35 blur-[0.5px] animate-particle-1" />
        <div className="absolute top-3/5 right-[22%] w-1.5 h-1.5 rounded-full bg-cyan-400/30 blur-[0.5px] animate-particle-2" />
        <div className="absolute bottom-1/4 left-[38%] w-1 h-1 rounded-full bg-blue-400/25 blur-[0.5px] animate-particle-3" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Personal Brand & Typography */}
        <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3 text-center lg:text-left items-center lg:items-start">
          {/* Refined Role Status Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-0.5 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.14em] text-slate-600 dark:text-zinc-300 uppercase shadow-2xs">
            <span className="relative flex h-1.5 w-1.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span>FULL-STACK • BACKEND • DEVELOPER</span>
          </div>

          {/* Balanced Display Heading */}
          <h1 className="text-[clamp(2.4rem,5.2vw,3.85rem)] sm:text-[clamp(2.75rem,5.5vw,4.25rem)] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[0.98] font-sans">
            Bun
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Raksa
            </span>
            <span className="sr-only"> — Backend &amp; Full-Stack Developer in Cambodia</span>
          </h1>

          {/* Proportional Subtitle Statement */}
          <p className="text-[13.5px] sm:text-[15px] md:text-base text-slate-600 dark:text-slate-300 max-w-md sm:max-w-lg leading-normal sm:leading-relaxed font-normal">
            Backend &amp; Full-Stack Developer based in Phnom Penh, Cambodia. Specializing in Java, Spring Boot, React, and PostgreSQL to engineer high-throughput systems, clean architectures, and production-ready APIs.
          </p>

          {/* Technology Stack with Subtle Blue Dot Separators */}
          <div className="text-xs sm:text-[13px] font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-0.5">
            <span>Java</span>
            <span className="text-sky-500/70 dark:text-sky-400/70 select-none">·</span>
            <span>Spring Boot</span>
            <span className="text-sky-500/70 dark:text-sky-400/70 select-none">·</span>
            <span>React</span>
            <span className="text-sky-500/70 dark:text-sky-400/70 select-none">·</span>
            <span>Next.js</span>
            <span className="text-sky-500/70 dark:text-sky-400/70 select-none">·</span>
            <span>PostgreSQL</span>
            <span className="text-sky-500/70 dark:text-sky-400/70 select-none">·</span>
            <span>Docker</span>
          </div>

          {/* Refined Actions Row: Balanced CTA Buttons & Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 pt-1 sm:pt-1.5 w-full sm:w-auto">
            {/* Primary CTA: View Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-1.5 h-9 sm:h-9.5 px-4 sm:px-4.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold text-xs tracking-wide transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Secondary CTA: Download CV */}
            <a
              href="/cv.pdf"
              download="Bun-Raksa-CV.pdf"
              className="inline-flex items-center justify-center gap-1.5 h-9 sm:h-9.5 px-4 sm:px-4.5 rounded-xl bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/15 font-medium text-xs transition-all duration-200 shadow-2xs hover:border-slate-300 dark:hover:border-white/25 hover:-translate-y-0.5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              <Download className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 transition-transform group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </a>

            {/* Subtle Divider between CTAs and Social Links on tablet/desktop */}
            <div className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-white/10 mx-0.5" aria-hidden="true" />

            {/* Consistent Icon-Only Social Links */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="https://github.com/raksabun2006"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub Profile"
                className="h-9 w-9 sm:h-9.5 sm:w-9.5 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100/90 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <GithubIcon className="w-3.5 h-3.5 fill-current" />
              </a>

              <a
                href="https://www.linkedin.com/in/bun-raksa-0062b9326/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
                className="h-9 w-9 sm:h-9.5 sm:w-9.5 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100/90 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
              </a>

              <a
                href="mailto:raksabun2006@gmail.com"
                title="Email"
                aria-label="Send Email"
                className="h-9 w-9 sm:h-9.5 sm:w-9.5 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100/90 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Developer Profile Card & Floating Technology Badges */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
          {/* Glass frame wrapper with breathing animation */}
          <div className="relative w-full max-w-[270px] sm:max-w-[300px] md:max-w-[325px] animate-card-breathe">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-blue-500/10 rounded-[34px] blur-2xl pointer-events-none" />

            {/* FLOATING SYSTEM-STATUS BADGES (Desktop & Tablet positions) */}
            {/* 1. Spring Boot (Top-Left) */}
            <div className="hidden sm:flex absolute -top-3 -left-3 z-20 items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-1 animate-badge-glow hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <SpringIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
              <span>SPRING BOOT</span>
            </div>

            {/* 2. React (Top-Right) */}
            <div className="hidden sm:flex absolute -top-2.5 -right-2.5 z-20 items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-2 hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <ReactIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
              <span>REACT</span>
            </div>

            {/* 3. PostgreSQL (Mid-Left) */}
            <div className="hidden sm:flex absolute top-1/2 -left-4 -translate-y-1/2 z-20 items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-3 hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <PostgresIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500" />
              <span>POSTGRESQL</span>
            </div>

            {/* 4. Next.js (Mid-Right) */}
            <div className="hidden sm:flex absolute top-[58%] -right-3.5 z-20 items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-4 animate-badge-glow hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
              <NextjsIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-900 dark:text-white" />
              <span>NEXT.JS</span>
            </div>

            {/* 5. Docker (Bottom-Left) */}
            <div className="hidden sm:flex absolute -bottom-2.5 -left-2.5 z-20 items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[10px] sm:text-[10.5px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-5 hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <DockerIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-500" />
              <span>DOCKER</span>
            </div>

            {/* Main Portrait Card Frame */}
            <div className="relative p-2 sm:p-2.5 rounded-3xl sm:rounded-[28px] bg-white/80 dark:bg-[#0c1018]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/5] w-full rounded-2xl sm:rounded-[22px] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-white/10">
                <Image
                  src="/bun-raksa.jpg"
                  alt="Bun Raksa (ប៊ុន រក្សា) - Backend & Full-Stack Developer in Phnom Penh, Cambodia"
                  fill
                  priority
                  sizes="(max-width: 640px) 270px, (max-width: 768px) 300px, 325px"
                  className="object-cover object-[center_18%] transition-transform duration-700 hover:scale-102"
                />

                {/* Subtle bottom gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Mobile Docked Badges (Neatly arranged below image on mobile so zero clipping occurs) */}
            <div className="flex sm:hidden flex-wrap items-center justify-center gap-1.5 mt-3 px-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[9.5px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-2xs">
                <SpringIcon className="w-3 h-3 text-emerald-500" />
                SPRING BOOT
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[9.5px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-2xs">
                <ReactIcon className="w-3 h-3 text-cyan-400" />
                REACT
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[9.5px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-2xs">
                <NextjsIcon className="w-3 h-3 text-slate-900 dark:text-white" />
                NEXT.JS
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[9.5px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-2xs">
                <PostgresIcon className="w-3 h-3 text-blue-500" />
                POSTGRESQL
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[9.5px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-2xs">
                <DockerIcon className="w-3 h-3 text-sky-500" />
                DOCKER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator at Bottom Center */}
      <a
        href="#portal"
        aria-label="Scroll to explore"
        className="hidden sm:flex absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity z-20 cursor-pointer"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 dark:text-zinc-500 uppercase">
          SCROLL
        </span>
        <div className="w-4 h-7 rounded-full border border-slate-300 dark:border-white/20 flex items-start justify-center p-0.5 bg-white/40 dark:bg-white/5 backdrop-blur-xs">
          <div className="w-1 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 animate-scroll-dot" />
        </div>
      </a>
    </section>
  );
}
