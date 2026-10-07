"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import { projects, Project } from "@/data/projects";
import { ExternalLink, GitBranch, ArrowRight, Layers, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "SCOPE" | "TECH">>({});

  const getTab = (id: string) => activeTabMap[id] || "SCOPE";

  const setTab = (id: string, tab: "SCOPE" | "TECH") => {
    setActiveTabMap((prev) => ({ ...prev, [id]: tab }));
  };

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
        <div className="absolute -top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#00a6f4]/[0.05] dark:bg-[#00d9ff]/[0.04] blur-[140px]" />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10 animate-fade-in">
        {/* Page Header (Exact match to ayushcmd.me/projects) */}
        <div className="text-center sm:text-left mb-12">
          <span className="text-[12px] sm:text-[13px] font-mono font-semibold tracking-[0.25em] text-[#00a6f4] dark:text-[#00d9ff] uppercase block mb-2">
            PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Selected Works
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            Production-grade systems, distributed microservices, and modern web applications built with rigorous architecture and clean code.
          </p>
        </div>

        {/* 3-Column Projects Grid (Matching Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => {
            const currentTab = getTab(project.id);

            return (
              <div
                key={project.id}
                className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017]/95 overflow-hidden shadow-sm dark:shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-slate-300 dark:hover:border-white/25 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Image Header Preview Banner */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer group/thumb"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#00d9ff]">
                      {project.role}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h2
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-slate-900 dark:text-white hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors cursor-pointer mb-2 leading-snug"
                    >
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-5">
                      {project.shortDescription}
                    </p>

                    {/* SCOPE / TECH Switcher Pills (Exact match to ayushcmd) */}
                    <div className="flex items-center gap-2 mb-3">
                      <button
                        type="button"
                        onClick={() => setTab(project.id, "SCOPE")}
                        className={`px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
                          currentTab === "SCOPE"
                            ? "bg-[#00a6f4] dark:bg-[#00d9ff] text-white dark:text-[#07090e] shadow-xs"
                            : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        SCOPE
                      </button>
                      <button
                        type="button"
                        onClick={() => setTab(project.id, "TECH")}
                        className={`px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
                          currentTab === "TECH"
                            ? "bg-[#00a6f4] dark:bg-[#00d9ff] text-white dark:text-[#07090e] shadow-xs"
                            : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        TECH
                      </button>
                    </div>

                    {/* Content Based on Selected Tab */}
                    <div className="min-h-[85px] text-xs">
                      {currentTab === "SCOPE" ? (
                        <p className="text-slate-600 dark:text-zinc-400 text-xs leading-relaxed line-clamp-4">
                          {project.features.slice(0, 3).join("; ")}.
                        </p>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links: [ ⎇ Code ] & [ ↗ Live ] */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-white/8 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#00a6f4] dark:text-[#00d9ff] hover:underline transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-[11px] text-slate-500 dark:text-zinc-400 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors"
                  >
                    Architecture →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />

      {/* Blueprint Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
