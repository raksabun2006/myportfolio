"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (project: Project) => void;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  index,
  onSelectProject,
  priority = false,
}: ProjectCardProps) {
  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <article className="group rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs hover:shadow-lg hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Card Header Tag Row */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between text-xs bg-zinc-50/50">
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold text-zinc-950 text-xs">
              {formattedIndex}
            </span>
            <span className="text-zinc-300">/</span>
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200/60 font-medium text-zinc-800 text-[11px]">
              {project.role}
            </span>
          </div>

          <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Large Project Image Preview */}
        <div
          onClick={() => onSelectProject(project)}
          className="relative w-full aspect-16/9 overflow-hidden bg-zinc-100 cursor-pointer border-b border-zinc-200/80 group/img"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top group-hover/img:scale-[1.03] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/img:opacity-100">
            <span className="px-3.5 py-2 rounded-xl bg-zinc-950/90 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-2 shadow-md">
              <span>View Architecture & System Design</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Title & Description */}
          <div>
            <h3
              onClick={() => onSelectProject(project)}
              className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight cursor-pointer hover:text-zinc-700 transition-colors"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Explicit Contribution Highlight Box (e.g. on DevSolve) */}
          {project.contributionHighlight && (
            <div className="mt-4 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/90 text-xs flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block font-semibold">
                  Personal Engineering Contribution
                </span>
                <span className="font-semibold text-zinc-950 text-xs mt-0.5 block">
                  {project.contributionHighlight}
                </span>
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="mt-5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Technologies & Infrastructure
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 font-mono text-xs font-medium border border-zinc-200/70 group-hover:bg-zinc-150 group-hover:border-zinc-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-6 pt-5 border-t border-zinc-100">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
              Core Capabilities & Highlights
            </h4>
            <ul className="space-y-2">
              {project.features.slice(0, 4).map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-zinc-950 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="px-6 sm:px-7 pb-6 pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 bg-white">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="text-xs font-semibold text-zinc-900 hover:text-zinc-600 inline-flex items-center gap-1.5 cursor-pointer group/btn"
        >
          <span>Architecture Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-800 transition-colors shadow-2xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-xs font-medium text-white transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
