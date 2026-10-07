import React from "react";
import { Star, GitFork, BookOpen, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function GitHubSection() {
  const stats = [
    { label: "Active Public Repos", value: "18+" },
    { label: "Main Language", value: "Java" },
    { label: "Secondary Focus", value: "TypeScript / React" },
    { label: "Current Status", value: "Active Shipping" },
  ];

  const featuredRepos = [
    {
      name: "martsystem",
      description:
        "Full-stack retail management and GameTopUp system using Spring Boot, PostgreSQL, React, and Redis.",
      language: "Java",
      langColor: "bg-amber-600",
      url: "https://github.com/raksabun2006/martsystem",
      stars: 4,
      forks: 1,
    },
    {
      name: "servicemaketplacefront",
      description:
        "Frontend client for Cambodian service marketplace platform integrated with Spring Boot REST API.",
      language: "TypeScript",
      langColor: "bg-blue-600",
      url: "https://github.com/raksabun2006",
      stars: 3,
      forks: 0,
    },
    {
      name: "EduCoreKH",
      description:
        "School administration backend managing student admissions, course capacity, and semester grade records.",
      language: "Java",
      langColor: "bg-amber-600",
      url: "https://github.com/raksabun2006",
      stars: 3,
      forks: 0,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              07 / Open Source & Code
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
              GitHub Activity
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mt-2">
              I build, learn, and experiment through real projects.
            </p>
          </div>

          <a
            href="https://github.com/raksabun2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors self-start sm:self-auto shadow-xs"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/60 flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-zinc-500">{stat.label}</span>
              <span className="mt-2 text-lg sm:text-xl font-bold text-zinc-950 font-mono">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Language Distribution Breakdown */}
        <div className="mb-8 p-5 rounded-2xl border border-zinc-200 bg-white shadow-2xs">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-600">
            <span>Primary Languages Breakdown</span>
            <span>raksabun2006</span>
          </div>

          {/* Progress bar line */}
          <div className="h-2.5 w-full rounded-full bg-zinc-100 flex overflow-hidden">
            <div className="h-full bg-zinc-900" style={{ width: "54%" }} title="Java 54%" />
            <div className="h-full bg-zinc-600" style={{ width: "26%" }} title="TypeScript 26%" />
            <div className="h-full bg-zinc-400" style={{ width: "12%" }} title="JavaScript 12%" />
            <div className="h-full bg-zinc-300" style={{ width: "8%" }} title="SQL & Others 8%" />
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-zinc-600">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-900" />
              <span>Java 54%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-600" />
              <span>TypeScript 26%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              <span>JavaScript 12%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-300" />
              <span>SQL & Docker 8%</span>
            </div>
          </div>
        </div>

        {/* Featured Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-zinc-500" />
                    <span className="font-mono text-sm font-semibold text-zinc-950 group-hover:text-zinc-700">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" /> {repo.forks}
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
