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
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-6 sm:pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Engineering Atmosphere (Subtle grid, soft cyan radial glow & concentric rings) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025] animate-grid-drift"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0284c7 1px, transparent 1px),
              linear-gradient(to bottom, #0284c7 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Soft blue/cyan radial glow behind hero */}
        <div className="absolute top-[20%] right-[10%] w-[380px] sm:w-[620px] h-[380px] sm:h-[620px] rounded-full bg-sky-500/[0.06] dark:bg-cyan-400/[0.04] blur-[140px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-600/[0.04] dark:bg-indigo-400/[0.03] blur-[140px]" />

        {/* Subtle concentric technical radar circles centered behind portrait */}
        <div className="hidden md:block absolute top-1/2 right-[18%] -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-sky-500/[0.08] dark:border-sky-400/[0.08] animate-tech-rotate-slow">
          <div className="absolute inset-8 rounded-full border border-dashed border-sky-500/[0.06] dark:border-sky-400/[0.06]" />
          <div className="absolute inset-20 rounded-full border border-sky-500/[0.05] dark:border-sky-400/[0.05]" />
        </div>

        {/* Minimal ambient floating particles */}
        <div className="absolute top-1/4 left-[20%] w-1.5 h-1.5 rounded-full bg-sky-400/40 blur-[0.5px] animate-particle-1" />
        <div className="absolute top-3/5 right-[25%] w-2 h-2 rounded-full bg-cyan-400/35 blur-[0.5px] animate-particle-2" />
        <div className="absolute bottom-1/4 left-[40%] w-1.5 h-1.5 rounded-full bg-blue-400/30 blur-[0.5px] animate-particle-3" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Personal Brand & Typography (~45% on desktop, centered on mobile) */}
        <div className="lg:col-span-6 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
          {/* Small Technical Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] text-slate-600 dark:text-zinc-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>FULL-STACK • BACKEND • DEVELOPER</span>
          </div>

          {/* Main Display Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[0.96] font-sans">
            Bun
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-400 dark:from-sky-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
              Raksa
            </span>
          </h1>

          {/* Value Statement */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 max-w-lg leading-relaxed font-normal">
            Building modern web applications, scalable backend systems, and production-ready APIs.
          </p>

          {/* Technology Line with Subtle Bullets */}
          <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-zinc-400 flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
            <span>Java</span>
            <span className="text-sky-500">·</span>
            <span>Spring Boot</span>
            <span className="text-sky-500">·</span>
            <span>React</span>
            <span className="text-sky-500">·</span>
            <span>Next.js</span>
            <span className="text-sky-500">·</span>
            <span>PostgreSQL</span>
            <span className="text-sky-500">·</span>
            <span>Docker</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
            {/* Primary CTA: View Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-zinc-200 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA: Download CV */}
            <a
              href="/cv.pdf"
              download="Bun-Raksa-CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 text-slate-800 dark:text-zinc-100 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-300 dark:border-white/15 font-medium text-xs sm:text-sm transition-all duration-200 shadow-xs hover:border-slate-400 dark:hover:border-white/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-2">
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.linkedin.com/in/bun-raksa-0062b9326/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="mailto:bunraksa94@gmail.com"
              title="Email"
              aria-label="Send Email"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Developer Profile Card & Floating Technology Badges (~55% on desktop) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
          {/* Glass frame wrapper with breathing animation */}
          <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md animate-card-breathe">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-blue-500/10 rounded-[38px] blur-2xl pointer-events-none" />

            {/* FLOATING SYSTEM-STATUS BADGES (Desktop & Tablet positions) */}
            {/* 1. Spring Boot (Top-Left) */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[11px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-1 animate-badge-glow hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <SpringIcon className="w-4 h-4 text-emerald-500" />
              <span>SPRING BOOT</span>
            </div>

            {/* 2. React (Top-Right) */}
            <div className="hidden sm:flex absolute -top-3 -right-3 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[11px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-2 hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <ReactIcon className="w-4 h-4 text-cyan-400" />
              <span>REACT</span>
            </div>

            {/* 3. PostgreSQL (Mid-Left) */}
            <div className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[11px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-3 hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <PostgresIcon className="w-4 h-4 text-blue-500" />
              <span>POSTGRESQL</span>
            </div>

            {/* 4. Next.js (Mid-Right) */}
            <div className="hidden sm:flex absolute top-[58%] -right-5 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[11px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-4 animate-badge-glow hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
              <NextjsIcon className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>NEXT.JS</span>
            </div>

            {/* 5. Docker (Bottom-Left) */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-lg text-[11px] font-mono font-semibold tracking-wider text-slate-800 dark:text-zinc-200 animate-float-badge-5 hover:scale-105 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <DockerIcon className="w-4 h-4 text-sky-500" />
              <span>DOCKER</span>
            </div>

            {/* Main Portrait Card Frame */}
            <div className="relative p-2.5 sm:p-3 rounded-3xl sm:rounded-[32px] bg-white/80 dark:bg-[#0c1018]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/5] w-full rounded-2xl sm:rounded-[26px] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-white/10">
                <Image
                  src="/profile.JPEG"
                  alt="Bun Raksa - Full-Stack Developer"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-[center_18%] transition-transform duration-700 hover:scale-102"
                />

                {/* Subtle bottom gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Mobile Docked Badges (Neatly arranged below image on mobile so zero clipping occurs) */}
            <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 mt-4 px-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[10px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-xs">
                <SpringIcon className="w-3.5 h-3.5 text-emerald-500" />
                SPRING BOOT
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[10px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-xs">
                <ReactIcon className="w-3.5 h-3.5 text-cyan-400" />
                REACT
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[10px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-xs">
                <NextjsIcon className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
                NEXT.JS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[10px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-xs">
                <PostgresIcon className="w-3.5 h-3.5 text-blue-500" />
                POSTGRESQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0c121e]/90 border border-slate-200 dark:border-white/15 text-[10px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-xs">
                <DockerIcon className="w-3.5 h-3.5 text-sky-500" />
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
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity z-20 cursor-pointer"
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
