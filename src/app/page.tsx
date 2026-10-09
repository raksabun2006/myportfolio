import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ShieldCheck,
  GitBranch,
  ExternalLink,
  Code2,
  Cpu,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Bun Raksa | Backend & Full-Stack Developer in Cambodia",
  },
  description:
    "Explore Bun Raksa's developer portfolio featuring Java, Spring Boot, React, REST APIs, PostgreSQL, and full-stack projects. Based in Phnom Penh, Cambodia.",
  alternates: {
    canonical: "https://bunraksa.site",
  },
};

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-zinc-100 flex flex-col font-sans selection:bg-[#00d9ff] selection:text-[#07090e] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Cyber Blueprint Grid */}
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
        <div className="absolute -top-[12%] right-[8%] w-[600px] h-[600px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[150px]" />
        <div className="absolute top-[40%] -left-[10%] w-[550px] h-[550px] rounded-full bg-[#8b5cf6]/[0.04] dark:bg-[#a78bfa]/[0.03] blur-[150px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full relative z-10 pt-24 sm:pt-28 md:pt-32 space-y-20 sm:space-y-28 animate-fade-in">
        {/* 01. Hero Section (Old Clean Style with Live System Visual & 3D Photo Toggle) */}
        <Hero />

        {/* 02. Clean Highlights Portal Section (Routes Gateways) */}
        <section id="portal" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="text-center sm:text-left mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
              EXPLORATION PORTAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              Architecture &amp; Engineering Tracks
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400 mt-2 max-w-xl">
              Dedicated pages for verified software projects, 3D interactive skill topologies, accredited credentials, and developer persona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Portal Card 1: Projects */}
            <Link
              href="/projects"
              className="group p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/90 shadow-sm dark:shadow-xl hover:border-[#00a6f4] dark:hover:border-[#00d9ff]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#00a6f4]/10 dark:bg-[#00d9ff]/10 border border-[#00a6f4]/25 dark:border-[#00d9ff]/30 flex items-center justify-center text-[#00a6f4] dark:text-[#00d9ff] mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 dark:text-zinc-500 mb-1">
                  01 / SELECTED WORKS
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors">
                  Featured Projects
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  Production POS systems, vulnerability triage platforms, and microservices.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono font-medium text-[#00a6f4] dark:text-[#00d9ff]">
                <span>View 3+ Systems</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Portal Card 2: 3D Skills Sphere */}
            <Link
              href="/skills"
              className="group p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/90 shadow-sm dark:shadow-xl hover:border-[#8b5cf6] dark:hover:border-[#a78bfa]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#8b5cf6]/10 dark:bg-[#a78bfa]/10 border border-[#8b5cf6]/25 dark:border-[#a78bfa]/30 flex items-center justify-center text-[#8b5cf6] dark:text-[#a78bfa] mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 dark:text-zinc-500 mb-1">
                  02 / FORGE &amp; STACK
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#8b5cf6] dark:group-hover:text-[#a78bfa] transition-colors">
                  3D Tech Sphere
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  Interactive rotating 3D topology with Java 21, Spring Boot, and PostgreSQL.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono font-medium text-[#8b5cf6] dark:text-[#a78bfa]">
                <span>Launch 3D Orbit</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Portal Card 3: Credentials */}
            <Link
              href="/credentials"
              className="group p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/90 shadow-sm dark:shadow-xl hover:border-emerald-500 dark:hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 dark:text-zinc-500 mb-1">
                  03 / VERIFIED AWARDS
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  My Credentials
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  Government MPTC/CBRD, Cisco CCNA, and ISTAD verified technical certificates.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                <span>View 4 Credentials</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Portal Card 4: Persona */}
            <Link
              href="/about"
              className="group p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/90 shadow-sm dark:shadow-xl hover:border-amber-500 dark:hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 dark:text-zinc-500 mb-1">
                  04 / WHO I AM
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Persona &amp; Bio
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  RUPP CS degree, ISTAD dual-track, GitHub contributions, and philosophy.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono font-medium text-amber-600 dark:text-amber-400">
                <span>Read Persona</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* 03. Selected Works Spotlight (Preview) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
                SPOTLIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured System Architecture
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00a6f4] dark:text-[#00d9ff] hover:underline"
            >
              <span>Explore All Selected Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/90 shadow-sm dark:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
                      {p.category}
                    </span>
                    <span className="text-slate-400 dark:text-zinc-500">{p.role}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {p.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-4">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#00a6f4] dark:text-[#00d9ff] hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                  <Link
                    href="/projects"
                    className="text-[#00a6f4] dark:text-[#00d9ff] font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Contact & Inquiries */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
