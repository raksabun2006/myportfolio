"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Activity } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100/70 dark:bg-[#07090e] border-t border-slate-200 dark:border-white/8 py-10 px-4 sm:px-6 lg:px-8 relative z-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand Identity & Pulsating Dot */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="w-2 h-2 rounded-full bg-[#00a6f4] dark:bg-[#00d9ff] neon-dot" />
            <p className="text-slate-600 dark:text-zinc-400 text-xs font-mono tracking-widest uppercase group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              © 2026 BUN RAKSA · ALL RIGHTS RESERVED
            </p>
          </button>

          {/* Right: Capsule buttons */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-[11px] font-mono text-slate-700 dark:text-zinc-300 shadow-xs">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              <span>Status: Online</span>
            </div>

            {/* GitHub Profile */}
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-[#00a6f4]/10 dark:hover:bg-[#00d9ff]/10 hover:border-[#00a6f4]/30 dark:hover:border-[#00d9ff]/30 text-[11px] font-mono text-slate-700 dark:text-zinc-300 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-all shadow-xs"
            >
              <GithubIcon className="w-3.5 h-3.5 fill-current" />
              <span>GitHub</span>
            </a>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-[11px] font-mono text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-[#00a6f4] dark:text-[#00d9ff]" />
            </button>
          </div>
        </div>

        {/* Internal Navigation Links for Search Engines & Recruiter Discovery */}
        <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-mono">
          <Link href="/" className="text-slate-600 dark:text-zinc-400 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-slate-600 dark:text-zinc-400 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors">
            Selected Works
          </Link>
          <Link href="/skills" className="text-slate-600 dark:text-zinc-400 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors">
            Architecture Stack
          </Link>
          <Link href="/about" className="text-slate-600 dark:text-zinc-400 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors">
            Persona &amp; Bio
          </Link>
          <Link href="/credentials" className="text-slate-600 dark:text-zinc-400 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors">
            Credentials
          </Link>
          <Link href="/contact" className="text-slate-600 dark:text-zinc-400 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors">
            Get in Touch
          </Link>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500 dark:text-zinc-500">
          <div>
            <span>Engineered with Next.js 16, React 19 &amp; Tailwind CSS</span>
          </div>
          <div>
            <span>Phnom Penh, Cambodia (UTC+7)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
