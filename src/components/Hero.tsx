"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, Download, MapPin, GraduationCap } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  SpringIcon,
  ReactIcon,
  PostgresIcon,
  NextjsIcon,
  DockerIcon,
  JavaIcon,
} from "@/components/Icons";

const TECH_STACK = [
  { name: "React", icon: ReactIcon, className: "text-cyan-500 dark:text-cyan-400" },
  { name: "Next.js", icon: NextjsIcon, className: "text-zinc-900 dark:text-white" },
  { name: "Java", icon: JavaIcon, className: "text-amber-500" },
  { name: "Spring Boot", icon: SpringIcon, className: "text-emerald-500" },
  { name: "PostgreSQL", icon: PostgresIcon, className: "text-blue-500" },
  { name: "Docker", icon: DockerIcon, className: "text-sky-500" },
] as const;

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
      {/* Gentle ambient light glow effects (whisper-quiet on white background) */}
      <div
        className="absolute -top-12 left-1/4 -translate-x-1/2 w-96 h-72 bg-gradient-to-br from-blue-500/[0.04] to-indigo-500/[0.02] dark:from-blue-400/[0.03] dark:to-cyan-400/[0.02] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-sky-400/[0.04] to-blue-500/[0.02] dark:from-blue-500/[0.03] dark:to-indigo-500/[0.02] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Primary Actions (7 cols on desktop, full width on mobile) */}
        <div className="lg:col-span-7 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Mobile Profile Photo & Docked Tech Badges (<lg only) */}
          <div className="lg:hidden w-full flex flex-col items-center mb-6 hero-fade-up hero-delay-1">
            <div className="relative w-[220px] sm:w-[260px] aspect-[768/987] rounded-2xl overflow-hidden border-2 border-zinc-200/90 dark:border-white/15 shadow-md bg-zinc-100 dark:bg-zinc-800 shrink-0 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/profile.JPEG"
                alt="Bun Raksa — Full-Stack Developer"
                fill
                priority
                unoptimized
                sizes="(max-width: 639px) 220px, 260px"
                className="object-contain object-center"
              />
            </div>

            {/* Mobile Docked Technology Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 px-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/60 text-[10.5px] font-mono font-medium text-zinc-700 dark:text-zinc-300 shadow-2xs">
                <SpringIcon className="w-3 h-3 text-emerald-500" />
                <span>Spring Boot</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/60 text-[10.5px] font-mono font-medium text-zinc-700 dark:text-zinc-300 shadow-2xs">
                <ReactIcon className="w-3 h-3 text-cyan-400" />
                <span>React</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/60 text-[10.5px] font-mono font-medium text-zinc-700 dark:text-zinc-300 shadow-2xs">
                <PostgresIcon className="w-3 h-3 text-blue-500" />
                <span>PostgreSQL</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/60 text-[10.5px] font-mono font-medium text-zinc-700 dark:text-zinc-300 shadow-2xs">
                <NextjsIcon className="w-3 h-3 text-zinc-900 dark:text-white" />
                <span>Next.js</span>
              </span>
            </div>
          </div>

          {/* Availability Pill (Stagger delay 1 + Organic Radar Pulse) */}
          <div className="hero-fade-up hero-delay-1 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-medium mb-3 sm:mb-4 shadow-2xs transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-radar-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Junior Roles &amp; Internships</span>
          </div>

          {/* Heading: Name (Stagger delay 2) */}
          <h1 className="hero-fade-up hero-delay-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Bun Raksa
          </h1>

          {/* Role (Stagger delay 3) */}
          <p className="hero-fade-up hero-delay-3 text-lg sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-3 sm:mb-4 tracking-tight">
            Full-Stack Developer
          </p>

          {/* Tagline Statement (Stagger delay 4) */}
          <p className="hero-fade-up hero-delay-4 text-sm sm:text-base lg:text-lg text-zinc-700 dark:text-zinc-200 font-normal sm:font-medium leading-relaxed max-w-md sm:max-w-xl">
            &ldquo;Building practical web applications with modern frontend technologies, robust backend APIs, and reliable database systems.&rdquo;
          </p>

          {/* Supporting Information (Stagger delay 5) */}
          <div className="hero-fade-up hero-delay-5 mt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-200">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>RUPP Computer Science</span>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700 select-none">·</span>
            <span className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-200">
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Phnom Penh, Cambodia</span>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700 select-none">·</span>
            <span className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>React &amp; Spring Boot</span>
            </span>
          </div>

          {/* Primary Action Buttons (Stagger delay 6 + Smooth Hover Effects) */}
          <div className="hero-fade-up hero-delay-6 mt-6 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto max-w-sm sm:max-w-none">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/90 border border-zinc-200/90 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-200" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Secondary Action Toolbar: Download CV & Social Links (Stagger delay 7) */}
          <div className="hero-fade-up hero-delay-7 mt-4 flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <a
              href="/cv.pdf"
              download="Bun-Raksa-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/80 dark:hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 text-zinc-700 dark:text-zinc-300 font-medium text-xs transition-all duration-200"
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
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="https://www.linkedin.com/in/bun-raksa-0062b9326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href="mailto:raksabun2006@gmail.com"
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              aria-label="Email Bun Raksa"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Desktop Portrait Card & Floating Technology Badges (Visible on lg screens) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative hero-scale-in hero-delay-3">
          <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
            {/* Subtle Engineering Orbit Circle behind portrait */}
            <div
              className="absolute -inset-8 pointer-events-none select-none flex items-center justify-center -z-10 opacity-70 dark:opacity-60"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 420 420"
                className="w-full h-full max-w-[440px] max-h-[440px] text-blue-500/15 dark:text-blue-400/15 animate-tech-rotate-slow"
              >
                <circle
                  cx="210"
                  cy="210"
                  r="195"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
                <circle
                  cx="210"
                  cy="210"
                  r="150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
                <circle cx="210" cy="15" r="3" fill="currentColor" />
                <circle cx="405" cy="210" r="3" fill="currentColor" />
                <circle cx="210" cy="405" r="3" fill="currentColor" />
                <circle cx="15" cy="210" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Soft Ambient Glow Backdrop */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-sky-400/5 to-indigo-500/10 rounded-3xl blur-2xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* FLOATING TECHNOLOGY NODES (Smooth, Jitter-Free GPU Float) */}
            {/* 1. Spring Boot (Top-Left) */}
            <div
              className="absolute -top-3.5 -left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-zinc-200/90 dark:border-white/15 backdrop-blur-md shadow-sm hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-500/60 hover:scale-105 active:scale-100 transition-all duration-300 ease-out cursor-default select-none text-[10.5px] font-mono font-medium text-zinc-800 dark:text-zinc-200 animate-float-node-1 group"
              title="Spring Boot Microservices & REST APIs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-node-glow" />
              <SpringIcon className="w-3.5 h-3.5 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
              <span>Spring Boot</span>
            </div>

            {/* 2. React (Top-Right) */}
            <div
              className="absolute -top-3 -right-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-zinc-200/90 dark:border-white/15 backdrop-blur-md shadow-sm hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500/60 hover:scale-105 active:scale-100 transition-all duration-300 ease-out cursor-default select-none text-[10.5px] font-mono font-medium text-zinc-800 dark:text-zinc-200 animate-float-node-2 group"
              title="React Modern Frontend Architecture"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-node-glow" />
              <ReactIcon className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <span>React</span>
            </div>

            {/* 3. PostgreSQL (Mid-Left) */}
            <div
              className="absolute top-[46%] -left-6 -translate-y-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-zinc-200/90 dark:border-white/15 backdrop-blur-md shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500/60 hover:scale-105 active:scale-100 transition-all duration-300 ease-out cursor-default select-none text-[10.5px] font-mono font-medium text-zinc-800 dark:text-zinc-200 animate-float-node-3 group"
              title="PostgreSQL Relational Database"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-node-glow" />
              <PostgresIcon className="w-3.5 h-3.5 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
              <span>PostgreSQL</span>
            </div>

            {/* 4. Next.js (Mid-Right) */}
            <div
              className="absolute top-[52%] -right-5 -translate-y-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-zinc-200/90 dark:border-white/15 backdrop-blur-md shadow-sm hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-500/60 hover:scale-105 active:scale-100 transition-all duration-300 ease-out cursor-default select-none text-[10.5px] font-mono font-medium text-zinc-800 dark:text-zinc-200 animate-float-node-4 group"
              title="Next.js Full-Stack App Router"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white animate-node-glow" />
              <NextjsIcon className="w-3.5 h-3.5 text-zinc-900 dark:text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Next.js</span>
            </div>

            {/* 5. Docker (Bottom-Left) */}
            <div
              className="absolute -bottom-3.5 -left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-zinc-200/90 dark:border-white/15 backdrop-blur-md shadow-sm hover:shadow-md hover:border-sky-400 dark:hover:border-sky-500/60 hover:scale-105 active:scale-100 transition-all duration-300 ease-out cursor-default select-none text-[10.5px] font-mono font-medium text-zinc-800 dark:text-zinc-200 animate-float-node-5 group"
              title="Docker Containerization"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-node-glow" />
              <DockerIcon className="w-3.5 h-3.5 text-sky-500 transition-transform duration-300 group-hover:scale-110" />
              <span>Docker</span>
            </div>

            {/* 6. Java (Bottom-Right) */}
            <div
              className="absolute -bottom-3.5 -right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#0c121e]/95 border border-zinc-200/90 dark:border-white/15 backdrop-blur-md shadow-sm hover:shadow-md hover:border-amber-400 dark:hover:border-amber-500/60 hover:scale-105 active:scale-100 transition-all duration-300 ease-out cursor-default select-none text-[10.5px] font-mono font-medium text-zinc-800 dark:text-zinc-200 animate-float-node-6 group"
              title="Java 21 Enterprise Core"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-node-glow" />
              <JavaIcon className="w-3.5 h-3.5 text-amber-500 transition-transform duration-300 group-hover:scale-110" />
              <span>Java</span>
            </div>

            {/* Main Portrait Card Frame with Subtle Breathing Motion */}
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0c121e] border border-zinc-200/90 dark:border-white/10 shadow-[0_12px_36px_rgba(15,23,42,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:border-zinc-300 dark:hover:border-white/20 animate-card-breathe">
              <div className="relative aspect-[768/987] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="/profile.JPEG"
                  alt="Bun Raksa — Full-Stack Developer in Phnom Penh, Cambodia"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1023px) 280px, 300px"
                  className="object-contain object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>

              {/* Minimal caption banner inside photo */}
              <div className="p-3 bg-white/95 dark:bg-[#0c121e]/95 backdrop-blur-xs border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <span>Bun Raksa</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Active" />
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">RUPP &amp; ISTAD Cambodia</div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold border border-blue-200/80 dark:border-blue-800/50">
                  Full-Stack
                </span>
              </div>
            </div>

            {/* Compact Tech Badges Row beneath portrait */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3.5">
              {TECH_STACK.map(({ name, icon: Icon, className }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono border border-zinc-200/80 dark:border-zinc-700/60 shadow-2xs transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500/60 hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-400 cursor-default"
                >
                  <Icon className={`w-3 h-3 ${className}`} aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator at Bottom Center */}
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, "about")}
        aria-label="Scroll to explore"
        className="hidden sm:flex absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity z-10 cursor-pointer group"
      >
        <span className="text-[9.5px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-500 uppercase">
          SCROLL
        </span>
        <div className="w-4 h-7 rounded-full border border-zinc-300 dark:border-white/20 flex items-start justify-center p-0.5 bg-white/40 dark:bg-white/5 backdrop-blur-xs group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors">
          <div className="w-1 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-scroll-dot" />
        </div>
      </a>
    </section>
  );
}
