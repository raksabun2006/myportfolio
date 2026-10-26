"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { useLocale } from "@/context/LocaleContext";
import { getProjectText } from "@/i18n/content";

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
  const { locale, t } = useLocale();
  const projectId = project.id as Parameters<typeof getProjectText>[1];
  const title = getProjectText(locale, projectId, "title", project.title);
  const category = getProjectText(locale, projectId, "category", project.category);
  const shortDescription = getProjectText(
    locale,
    projectId,
    "shortDescription",
    project.shortDescription,
  );
  return (
    <article className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c121e] overflow-hidden shadow-xs hover:shadow-md hover:border-zinc-300 dark:hover:border-white/25 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Screenshot Container */}
        <div
          onClick={() => onSelectProject(project)}
          className="relative w-full aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden cursor-pointer border-b border-zinc-200/80 dark:border-white/10"
        >
          <Image
            src={project.image}
            alt={`${title} — ${category} built by Bun Raksa`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Role Pill overlaid on top right */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border border-zinc-200/90 dark:border-white/15 text-[11px] font-mono font-medium text-zinc-800 dark:text-zinc-200 shadow-2xs">
            {project.role}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Category & Title */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">
            <span className="uppercase tracking-wider">            {category}</span>
            <span>0{index + 1}</span>
          </div>

          <h3
            onClick={() => onSelectProject(project)}
            className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer leading-snug"
          >
            {title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {shortDescription}
          </p>

          {/* Contribution Highlight if available */}
          {project.contributionHighlight && (
            <div className="mt-3 px-3 py-2 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-start gap-2 text-xs text-blue-900 dark:text-blue-200">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong className="font-semibold">{t("keyContribution")}:</strong> {project.contributionHighlight}
              </span>
            </div>
          )}

          {/* Key Implemented Features Bullets */}
          <div className="mt-3.5 pt-3.5 border-t border-zinc-100 dark:border-white/5 space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
              {t("coreFeatures")}:
            </span>
            {project.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology Stack Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono border border-zinc-200/80 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-zinc-500">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Action Links */}
      <div className="px-5 sm:px-6 py-4 bg-zinc-50/70 dark:bg-white/[0.02] border-t border-zinc-100 dark:border-white/8 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-2xs transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t("liveDemo")}</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-800 dark:text-zinc-200 font-medium transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 fill-current" />
              <span>{t("source")}</span>
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
        >
          <span>{t("architecture")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
