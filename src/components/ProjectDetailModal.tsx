"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { X, ExternalLink, AlertCircle, CheckCircle2, Lightbulb, Wrench, BookOpen, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0c111a] rounded-2xl border border-slate-200 dark:border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(0,217,255,0.1)] overflow-hidden z-10 max-h-[90vh] flex flex-col text-slate-900 dark:text-zinc-100 transition-colors">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#0c111a]/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00a6f4] dark:bg-[#00d9ff] neon-dot" />
            <h3 id="modal-title" className="text-lg font-bold text-slate-900 dark:text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Large Project Image */}
          <div className="relative w-full aspect-16/9 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-zinc-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Quick Links & Technologies */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 font-mono text-xs font-medium border border-slate-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00a6f4]/15 dark:bg-[#00d9ff]/15 hover:bg-[#00a6f4]/25 dark:hover:bg-[#00d9ff]/25 border border-[#00a6f4]/35 dark:border-[#00d9ff]/35 text-[#00a6f4] dark:text-[#00d9ff] text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00a6f4] dark:text-[#00d9ff] mb-2 font-semibold">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              {project.detail.overview}
            </p>
          </div>

          {/* Problem & Solution 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-semibold text-sm">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {project.detail.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-semibold text-sm">
                <Lightbulb className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff]" />
                <span>The Architecture Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {project.detail.solution}
              </p>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
              <Layers className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff]" />
              <span>System Architecture &amp; Pipeline</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              {project.detail.architectureDescription}
            </p>
            <ArchitectureDiagram
              nodes={project.detail.architectureNodes}
              title={`${project.title} - Component Flow`}
            />
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00a6f4] dark:text-[#00d9ff] mb-3 font-semibold">
              Key Features &amp; Implementation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.detail.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.02]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-semibold text-sm">
                <Wrench className="w-4 h-4 text-purple-500 dark:text-[#a78bfa]" />
                <span>Technical Challenges</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {project.detail.challenges}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-semibold text-sm">
                <BookOpen className="w-4 h-4 text-emerald-500 dark:text-[#4ade80]" />
                <span>Key Learnings &amp; Takeaways</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {project.detail.whatILearned}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#07090e] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
