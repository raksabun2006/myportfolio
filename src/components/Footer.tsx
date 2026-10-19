"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/10 bg-zinc-50/50 dark:bg-[#070a10] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-base text-zinc-900 dark:text-white">
                Bun Raksa
              </span>
              <span className="text-zinc-400">·</span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
                Full-Stack Developer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Building practical web applications with React, Next.js, Java, Spring Boot, and PostgreSQL. Based in Phnom Penh, Cambodia.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.linkedin.com/in/bun-raksa-0062b9326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="mailto:raksabun2006@gmail.com"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
              aria-label="Email Bun Raksa"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-1" aria-hidden="true" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and location */}
        <div className="pt-6 border-t border-zinc-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-500">
          <div>
            <span>© {new Date().getFullYear()} Bun Raksa. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Next.js 16</span>
            <span>·</span>
            <span>React 19</span>
            <span>·</span>
            <span>Phnom Penh, Cambodia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
