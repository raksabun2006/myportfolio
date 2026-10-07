"use client";

import React from "react";
import { Star, GitFork, BookOpen, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function GitHubSection() {
  const stats = [
    { label: "Active Public Repos", value: "18+", color: "#00d9ff" },
    { label: "Main Language", value: "Java", color: "#f59e0b" },
    { label: "Secondary Focus", value: "TypeScript / React", color: "#38bdf8" },
    { label: "Engineering Status", value: "Active Shipping", color: "#4ade80" },
  ];

  const featuredRepos = [
    {
      name: "martsystem",
      description:
        "Full-stack retail management and GameTopUp system using Spring Boot, PostgreSQL, React, and Redis.",
      language: "Java",
      langColor: "bg-[#f59e0b]",
      url: "https://github.com/raksabun2006/martsystem",
      stars: 4,
      forks: 1,
    },
    {
      name: "servicemaketplacefront",
      description:
        "Frontend client for Cambodian service marketplace platform integrated with Spring Boot REST API.",
      language: "TypeScript",
      langColor: "bg-[#38bdf8]",
      url: "https://github.com/raksabun2006",
      stars: 3,
      forks: 0,
    },
    {
      name: "EduCoreKH",
      description:
        "School administration backend managing student admissions, course capacity, and semester grade records.",
      language: "Java",
      langColor: "bg-[#f59e0b]",
      url: "https://github.com/raksabun2006",
      stars: 3,
      forks: 0,
    },
  ];

  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] mb-2 font-medium">
              06 / OPEN SOURCE &amp; REPOSITORIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              GitHub Activity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Real projects, production test cases, and collaborative system architecture repositories.
            </p>
          </div>

          <a
            href="https://github.com/raksabun2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#00a6f4] dark:hover:border-[#00d9ff]/50 hover:bg-slate-200 dark:hover:bg-[#00d9ff]/10 text-slate-900 dark:text-white text-xs font-semibold transition-all self-start sm:self-auto shadow-xs dark:shadow-md cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff]" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00a6f4] dark:text-[#00d9ff]" />
          </a>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-4.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1018]/90 flex flex-col justify-between shadow-xs dark:shadow-lg"
            >
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">{stat.label}</span>
              <span
                className="mt-2 text-xl font-bold font-mono tracking-tight"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Language Distribution Breakdown */}
        <div className="mb-8 p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1018]/90 shadow-xs dark:shadow-lg">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-600 dark:text-zinc-400">
            <span>Primary Languages Breakdown</span>
            <span className="text-[#00a6f4] dark:text-[#00d9ff] font-semibold">raksabun2006</span>
          </div>

          {/* Progress bar line */}
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-white/5 flex overflow-hidden">
            <div className="h-full bg-[#f59e0b]" style={{ width: "54%" }} title="Java 54%" />
            <div className="h-full bg-[#38bdf8]" style={{ width: "26%" }} title="TypeScript 26%" />
            <div className="h-full bg-[#00d9ff]" style={{ width: "12%" }} title="JavaScript 12%" />
            <div className="h-full bg-[#a78bfa]" style={{ width: "8%" }} title="SQL & Others 8%" />
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span>Java 54%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span>TypeScript 26%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00a6f4] dark:bg-[#00d9ff]" />
              <span>JavaScript 12%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
              <span>SQL &amp; Docker 8%</span>
            </div>
          </div>
        </div>

        {/* Featured Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1018]/90 hover:border-[#00a6f4] dark:hover:border-[#00d9ff]/50 shadow-xs dark:shadow-lg hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(0,217,255,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff]" />
                    <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors" />
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/8 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#f59e0b]" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-[#00a6f4] dark:text-[#00d9ff]" /> {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
