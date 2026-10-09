"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header (ayushcmd style) */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#00d9ff] mb-2 font-medium">
              <span>03 / FEATURED WORK</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-semibold">{projects.length} SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Production-grade retail systems, collaborative cybersecurity platforms, and service
              marketplaces built with Java, Spring Boot, React, and relational persistence.
            </p>
          </div>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              priority={index === 0}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Signature Capsule Pill Button (ayushcmd style) */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => setSelectedProject(projects[0])}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#00d9ff]/50 text-xs font-semibold text-white transition-all duration-200 shadow-lg cursor-pointer hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
          >
            <span>Inspect System Architecture Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00d9ff] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
