"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Package,
  Mail,
  FileText,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import CosmicSpiral from "./CosmicSpiral";

export default function Hero() {
  const [viewVersion, setViewVersion] = useState<"NEW" | "OLD">("NEW");

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Cosmic Spiral Atmosphere */}
      <CosmicSpiral />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Personal Brand & Typography (Exact match to Image 2) */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-left">
          {/* NEW | OLD Capsule Toggle */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center p-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 backdrop-blur-sm text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setViewVersion("NEW")}
                className={`px-3 py-0.5 rounded-full transition-all cursor-pointer ${
                  viewVersion === "NEW"
                    ? "bg-[#00d9ff]/20 text-[#00a6f4] dark:text-[#00d9ff] font-semibold border border-[#00d9ff]/30 shadow-xs"
                    : "text-slate-400 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-white"
                }`}
              >
                NEW
              </button>
              <button
                type="button"
                onClick={() => setViewVersion("OLD")}
                className={`px-3 py-0.5 rounded-full transition-all cursor-pointer ${
                  viewVersion === "OLD"
                    ? "bg-[#00d9ff]/20 text-[#00a6f4] dark:text-[#00d9ff] font-semibold border border-[#00d9ff]/30 shadow-xs"
                    : "text-slate-400 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-white"
                }`}
              >
                OLD
              </button>
            </div>
          </div>

          {/* Massive Display Name Heading: Bun / Raksa (Exact Image 2 Typography) */}
          <div className="mt-1">
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[0.94] font-sans">
              Bun
              <br />
              <span className="bg-gradient-to-r from-[#00d9ff] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
                Raksa
              </span>
            </h1>
          </div>

          {/* Micro Subtitle with Spaced Dots */}
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.22em] text-slate-400 dark:text-zinc-400 uppercase mt-2">
            <span>FULL-STACK</span>
            <span className="text-[#00d9ff]">·</span>
            <span>BACKEND</span>
            <span className="text-[#818cf8]">·</span>
            <span>DEVELOPER</span>
          </div>

          {/* Bio Narrative */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 max-w-xl leading-relaxed mt-1">
            Building <strong className="text-slate-900 dark:text-white font-semibold">intelligent systems</strong> at the intersection of full-stack engineering and distributed backends — from real-time data pipelines to robust enterprise Spring Boot microservices.
          </p>

          {/* Large Highlight Word: CREATOR (Exact sunset gradient from Image 2) */}
          <div className="mt-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider uppercase font-sans bg-gradient-to-r from-amber-400 via-amber-300 to-[#00d9ff] bg-clip-text text-transparent select-none">
              CREATOR
            </div>

            {/* Stepper Dots & Active Cyan Bar Indicator below CREATOR */}
            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-zinc-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-zinc-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-zinc-700" />
              <span className="w-6 h-1 rounded-full bg-[#00d9ff] shadow-[0_0_8px_#00d9ff]" />
            </div>
          </div>

          {/* Action Buttons: [ 💬 Lounge ¹ ] & [ 📦 Get Source ] (Exact Image 2 Style) */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c121d] text-white hover:bg-[#141d2e] border border-white/15 hover:border-[#00d9ff]/50 font-medium text-xs transition-all duration-200 shadow-md group cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#00d9ff]" />
              <span>Lounge</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#00d9ff] text-[#07090e] font-mono text-[10px] font-bold">
                1
              </span>
            </a>

            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c121d] text-white hover:bg-[#141d2e] border border-white/10 hover:border-white/20 font-medium text-xs transition-all duration-200 shadow-md cursor-pointer"
            >
              <Package className="w-4 h-4 text-zinc-400" />
              <span>Get Source</span>
            </a>
          </div>
        </div>

        {/* Right Column: Photo Card with Micro Floating Badges & Social Dock (Exact Image 2) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Top-Left Floating Badge: SPRING BOOT · NEXT.JS */}
            <div className="absolute -top-3 -left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-[#0c1018]/90 border border-[#00d9ff]/40 backdrop-blur-md shadow-lg text-[10px] font-mono text-[#00d9ff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] animate-ping" />
              <span>SPRING BOOT · NEXT.JS</span>
            </div>

            {/* Top-Right Floating Badge: ▲ 0 → 1 BUILDER */}
            <div className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-[#0c1018]/90 border border-emerald-500/40 backdrop-blur-md shadow-lg text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>▲ 0 → 1 BUILDER</span>
            </div>

            {/* Bottom-Right Floating Badge: POSTGRESQL · DOCKER */}
            <div className="absolute bottom-4 -right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-[#0c1018]/90 border border-indigo-500/40 backdrop-blur-md shadow-lg text-[10px] font-mono text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>POSTGRESQL · DOCKER</span>
            </div>

            {/* Main Photo Frame */}
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-[#0c1018] group">
              <Image
                src="/profile.JPEG"
                alt="Bun Raksa"
                fill
                priority
                unoptimized
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Scrim Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Social Icons Dock Below Card (Exact match to Image 2) */}
            <div className="mt-5 flex items-center justify-center gap-2 p-2 rounded-2xl bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 backdrop-blur-xl shadow-md">
              <a
                href="mailto:bunraksa94@gmail.com"
                title="Email"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/raksabun2006"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter / X"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              >
                <TwitterIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://t.me/raksabun"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Resume / CV"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Smooth Exploration Cue */}
      <a
        href="#portal"
        aria-label="Scroll down to explore"
        className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 group cursor-pointer transition-opacity duration-300 opacity-60 hover:opacity-100 z-20"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 dark:text-zinc-500 uppercase">
          SCROLL
        </span>
        <div className="w-5 h-7 rounded-full border border-slate-300 dark:border-white/20 flex items-start justify-center p-1 bg-white/40 dark:bg-white/5 backdrop-blur-xs">
          <div className="w-1 h-1.5 rounded-full bg-[#00a6f4] dark:bg-[#00d9ff] animate-bounce" />
        </div>
      </a>
    </section>
  );
}
