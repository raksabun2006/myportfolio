"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ArrowDown, ArrowUpRight, Terminal, ShieldCheck, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import HeroSystemVisual from "./HeroSystemVisual";

export default function Hero() {
  const [typedCommand, setTypedCommand] = useState("");
  const fullCommand = "> bun-raksa ~/portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-zinc-200/80 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Status & Terminal Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50/80 text-xs text-zinc-800 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-medium">Open to Software Engineering Opportunities</span>
          </div>

          {/* Terminal Breadcrumb */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 bg-zinc-100/70 border border-zinc-200/60 px-3 py-1.5 rounded-lg">
            <Terminal className="w-3.5 h-3.5 text-zinc-800" />
            <span>{typedCommand}</span>
            <span className="w-1.5 h-3.5 bg-zinc-800 animate-pulse" />
          </div>
        </div>

        {/* 2-Column Hero Grid: Left Content / Right Interactive Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Personal Brand & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Engineering Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.08]">
                Bun Raksa
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-800 tracking-tight">
                Backend / Full-Stack Developer
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
              I build scalable backend systems and modern web applications using{" "}
              <span className="font-semibold text-zinc-950">Java</span>,{" "}
              <span className="font-semibold text-zinc-950">Spring Boot</span>,{" "}
              <span className="font-semibold text-zinc-950">React</span>,{" "}
              <span className="font-semibold text-zinc-950">PostgreSQL</span>, and cloud technologies.
            </p>

            {/* Primary Actions & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-xs"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Social Icons */}
              <div className="flex items-center gap-1.5 sm:ml-2 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-zinc-200 sm:pl-4 w-full sm:w-auto">
                <a
                  href="https://github.com/raksabun2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg border border-transparent hover:border-zinc-200 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg border border-transparent hover:border-zinc-200 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:raksabun2006@gmail.com"
                  aria-label="Email Bun Raksa"
                  className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg border border-transparent hover:border-zinc-200 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Subtle engineering badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/60 text-zinc-800">
                Phnom Penh, Cambodia
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/60 text-zinc-800">
                ISTAD & RUPP (CS)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/60 text-zinc-800">
                Production-Tested APIs
              </span>
            </div>
          </div>

          {/* Right Column: Creative Interactive System Monitor */}
          <div className="lg:col-span-5">
            <HeroSystemVisual />
          </div>
        </div>

        {/* Engineering Metrics Ribbon */}
        <div className="mt-14 pt-8 border-t border-zinc-200/80 grid grid-cols-2 md:grid-cols-5 gap-3 text-left">
          <div className="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-mono">
              3+
            </div>
            <div className="text-xs font-medium text-zinc-600 mt-0.5">Full-Stack Projects</div>
            <div className="text-[10px] font-mono text-zinc-400 mt-1">Production & Team</div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div className="text-sm sm:text-base font-bold tracking-tight text-zinc-950 font-mono">
              Java + Spring Boot
            </div>
            <div className="text-xs font-medium text-zinc-600 mt-0.5">Primary Core Engine</div>
            <div className="text-[10px] font-mono text-zinc-400 mt-1">Enterprise OOP & RBAC</div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div className="text-sm sm:text-base font-bold tracking-tight text-zinc-950 font-mono">
              REST API
            </div>
            <div className="text-xs font-medium text-zinc-600 mt-0.5">Contract-First Design</div>
            <div className="text-[10px] font-mono text-zinc-400 mt-1">OpenAPI & Idempotency</div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
            <div className="text-sm sm:text-base font-bold tracking-tight text-zinc-950 font-mono">
              PostgreSQL
            </div>
            <div className="text-xs font-medium text-zinc-600 mt-0.5">ACID Data Layer</div>
            <div className="text-[10px] font-mono text-zinc-400 mt-1">+ Redis In-Memory Cache</div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200/80 col-span-2 md:col-span-1">
            <div className="text-sm sm:text-base font-bold tracking-tight text-zinc-950 font-mono">
              Microservices
            </div>
            <div className="text-xs font-medium text-zinc-600 mt-0.5">Distributed Architecture</div>
            <div className="text-[10px] font-mono text-zinc-400 mt-1">Gateway, Docker & Queues</div>
          </div>
        </div>
      </div>
    </section>
  );
}
