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
      className="relative pt-4 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Primary Actions (7 cols on desktop, full width on mobile) */}
        <div className="lg:col-span-7 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Mobile Profile Photo (<lg only) */}
          <div className="lg:hidden w-full flex flex-col items-center mb-6">
            <div className="relative w-[260px] sm:w-[300px] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-zinc-200/90 dark:border-white/15 shadow-md bg-zinc-100 dark:bg-zinc-800 shrink-0">
              <Image
                src="/profile.JPEG"
                alt="Bun Raksa — Full-Stack Developer"
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          {/* Availability Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-medium mb-3 sm:mb-4 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Junior Roles &amp; Internships</span>
          </div>

          {/* Heading: Name & Role */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Bun Raksa
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-3 sm:mb-4 tracking-tight">
            Full-Stack Developer
          </p>

          {/* Tagline Statement */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-700 dark:text-zinc-200 font-normal sm:font-medium leading-relaxed max-w-md sm:max-w-xl">
            &ldquo;Building practical web applications with modern frontend technologies, robust backend APIs, and reliable database systems.&rdquo;
          </p>

          {/* Supporting Information (Compact, balanced meta pills on phone and tablet) */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>RUPP Computer Science</span>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700 select-none">·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Phnom Penh, Cambodia</span>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700 select-none">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>React &amp; Spring Boot</span>
            </span>
          </div>

          {/* Primary Action Buttons (Side by side on phone with equal proportions) */}
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto max-w-sm sm:max-w-none">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs hover:shadow-sm active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-semibold text-xs sm:text-sm transition-all shadow-2xs active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Secondary Action Toolbar: Download CV & Social Links */}
          <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <a
              href="/cv.pdf"
              download="Bun-Raksa-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/70 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 font-medium text-xs transition-colors"
              title="Download Resume / CV"
            >
              <Download className="w-3.5 h-3.5 text-zinc-500" />
              <span>Download CV</span>
            </a>

            <span className="text-zinc-300 dark:text-zinc-700 select-none">·</span>

            <a
              href="https://github.com/raksabun2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.linkedin.com/in/bun-raksa-0062b9326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="mailto:raksabun2006@gmail.com"
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Email Bun Raksa"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Desktop Portrait Card & Tech Badges (Hidden on mobile/tablet, visible on lg screens) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
          <div className="relative w-full max-w-[360px] sm:max-w-[380px]">
            {/* Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 shadow-md">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/profile.JPEG"
                  alt="Bun Raksa — Full-Stack Developer in Phnom Penh, Cambodia"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
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
                  className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono border border-zinc-200 dark:border-zinc-700/60 shadow-2xs"
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
