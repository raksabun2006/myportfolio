"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (project: Project) => void;
  priority?: boolean;
}

const ACCENT_COLORS = ["#00d9ff", "#f59e0b", "#a78bfa"];

export default function ProjectCard({
  project,
  index,
  onSelectProject,
  priority = false,
}: ProjectCardProps) {
  const formattedIndex = (index + 1).toString().padStart(2, "0");
  const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <article
      className="group rounded-2xl border border-white/10 bg-[#0a0e16]/90 p-5 shadow-xl hover:border-[#00d9ff]/50 hover:shadow-[0_0_35px_rgba(0,217,255,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
      style={{
        backdropFilter: "blur(20px)",
      }}
    >
      <div>
        {/* Top Accent Line & Role Pill */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2.5">
            <span
              className="w-8 h-1 rounded-full"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 0 10px ${accentColor}`,
              }}
            />
            <span className="font-mono text-xs font-bold text-zinc-400">
              {formattedIndex}
            </span>
          </div>

          <span
            className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold border"
            style={{
              backgroundColor: `${accentColor}12`,
              color: accentColor,
              borderColor: `${accentColor}30`,
            }}
          >
            {project.role}
          </span>
        </div>

        {/* Compact Image Preview */}
        <div
          onClick={() => onSelectProject(project)}
          className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/10 mb-3.5 group/img shadow-2xs"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            priority={priority}
            className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/35 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover/img:opacity-100">
            <span className="px-3 py-1.5 rounded-lg bg-[#07090e]/95 text-white text-[11px] font-medium border border-[#00d9ff]/40 flex items-center gap-1.5 shadow-lg">
              <span>Inspect Architecture</span>
              <ArrowRight className="w-3 h-3 text-[#00d9ff]" />
            </span>
          </div>
        </div>

        {/* Title, Category & Description */}
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3
              onClick={() => onSelectProject(project)}
              className="text-base sm:text-lg font-bold text-white tracking-tight cursor-pointer hover:text-[#00d9ff] transition-colors"
            >
              {project.title}
            </h3>
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider shrink-0">
              {project.category}
            </span>
          </div>

          <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Personal Contribution Highlight */}
        {project.contributionHighlight && (
          <div className="mt-2.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[11px] flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00d9ff] shrink-0" />
            <span className="text-zinc-300 line-clamp-1 font-mono text-[10.5px]">
              {project.contributionHighlight}
            </span>
          </div>
        )}

        {/* Technology Capsules in Ayushcmd Style */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 group-hover:border-[#00d9ff]/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full text-zinc-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Row */}
      <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="text-xs font-semibold text-zinc-300 hover:text-[#00d9ff] inline-flex items-center gap-1.5 cursor-pointer group/btn"
        >
          <span>Architecture Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#00d9ff] group-hover/btn:translate-x-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub for ${project.title}`}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo for ${project.title}`}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-[#00d9ff] hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
