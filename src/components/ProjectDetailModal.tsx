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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
            <h3 id="modal-title" className="text-lg font-bold text-zinc-950 truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Large Project Image */}
          <div className="relative w-full aspect-16/9 rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Quick Links & Technologies */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-200">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 font-mono text-xs font-medium border border-zinc-200/80"
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-semibold transition-colors"
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {project.detail.overview}
            </p>
          </div>

          {/* Problem & Solution 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/50">
              <div className="flex items-center gap-2 mb-2 text-zinc-900 font-semibold text-sm">
                <AlertCircle className="w-4 h-4 text-zinc-700" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {project.detail.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/50">
              <div className="flex items-center gap-2 mb-2 text-zinc-900 font-semibold text-sm">
                <Lightbulb className="w-4 h-4 text-zinc-700" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {project.detail.solution}
              </p>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-900">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Pipeline</span>
            </div>
            <p className="text-sm text-zinc-600">
              {project.detail.architectureDescription}
            </p>
            <ArchitectureDiagram
              nodes={project.detail.architectureNodes}
              title={`${project.title} - Component Flow`}
            />
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-3">
              Key Features & Implementation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.detail.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg border border-zinc-200/70 bg-white"
                >
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-xl border border-zinc-200 bg-white">
              <div className="flex items-center gap-2 mb-2 text-zinc-900 font-semibold text-sm">
                <Wrench className="w-4 h-4 text-zinc-700" />
                <span>Technical Challenges</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {project.detail.challenges}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 bg-white">
              <div className="flex items-center gap-2 mb-2 text-zinc-900 font-semibold text-sm">
                <BookOpen className="w-4 h-4 text-zinc-700" />
                <span>Key Learnings & Takeaways</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {project.detail.whatILearned}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
