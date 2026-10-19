"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, Download, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-6 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Primary Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-4 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Junior Roles &amp; Internships</span>
          </div>

          {/* Heading: Name & Role */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
            Bun Raksa
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-4 tracking-tight">
            Full-Stack Developer
          </p>

          {/* Tagline Statement */}
          <p className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed max-w-xl">
            &ldquo;Building practical web applications with modern frontend technologies, robust backend APIs, and reliable database systems.&rdquo;
          </p>

          {/* Supporting Information */}
          <div className="mt-4 space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-lg">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <GraduationCap className="w-4 h-4 text-zinc-500 shrink-0" />
              <span>Computer Science student at Royal University of Phnom Penh (RUPP).</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 ml-1.5 mr-1" />
              <span>Learning and building with React, Next.js, Java, and Spring Boot.</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
              <span>Based in Phnom Penh, Cambodia.</span>
            </div>
          </div>

          {/* Primary Actions Row: View Projects & Contact Me */}
          <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs hover:shadow-sm hover:-translate-y-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 font-semibold text-xs sm:text-sm transition-all shadow-2xs hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Mail className="w-4 h-4 text-zinc-500" />
              <span>Contact Me</span>
            </a>

            <a
              href="/cv.pdf"
              download="Bun-Raksa-CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 font-medium text-xs sm:text-sm transition-all"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Secondary Social Links */}
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span>Connect:</span>
            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 fill-current" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/bun-raksa-0062b9326/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <a
              href="mailto:raksabun2006@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Professional Portrait & Compact Tech Chips (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
            {/* Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 shadow-md">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/bun-raksa.jpg"
                  alt="Bun Raksa — Full-Stack Developer in Phnom Penh, Cambodia"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 310px"
                  className="object-cover object-top"
                />
              </div>

              {/* Minimal caption banner inside photo */}
              <div className="p-3 bg-white dark:bg-[#0c121e] border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">Bun Raksa</div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">RUPP &amp; ISTAD Cambodia</div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold border border-blue-200 dark:border-blue-800/50">
                  Full-Stack
                </span>
              </div>
            </div>

            {/* Compact Tech Badges Row beneath portrait */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3.5">
              {["React", "Next.js", "Java", "Spring Boot", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono border border-zinc-200 dark:border-zinc-700/60 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
