import React from "react";
import Image from "next/image";
import { MapPin, Layers, Server, CheckCircle2, GraduationCap, ArrowRight } from "lucide-react";

export default function About() {
  const focusAreas = [
    {
      name: "Full-Stack Development",
      icon: Layers,
      description: "End-to-end web applications with React, Next.js, and Spring Boot REST APIs.",
    },
    {
      name: "Microservices Architecture",
      icon: Server,
      description: "Decoupled domain services, stateless JWT gateway routing, and distributed data layers.",
    },
  ];

  const engineeringPrinciples = [
    {
      number: "01",
      title: "Backend First",
      description: "Design reliable APIs, resilient data models, and deterministic business logic before painting pixels.",
    },
    {
      number: "02",
      title: "Scalable Architecture",
      description: "Build systems structured with clean boundaries that can evolve effortlessly from monoliths to microservices.",
    },
    {
      number: "03",
      title: "Clean Code",
      description: "Focus on maintainability, separation of concerns, and strict typing between services and clients.",
    },
    {
      number: "04",
      title: "Real Products",
      description: "Build robust, production-tested software designed to solve concrete business and community problems.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            01 — Engineering Philosophy & Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
            About Me & Engineering Approach
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-medium text-zinc-800 tracking-tight">
            &ldquo;I don&apos;t just build interfaces. I build systems.&rdquo;
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative, Focus Areas & Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              <p>
                I am <span className="font-semibold text-zinc-950">Bun Raksa</span>, a Backend /
                Full-Stack Developer based in Phnom Penh, Cambodia.
              </p>
              <p>
                I specialize in architecting resilient backend services, RESTful APIs, relational
                database schemas, authentication gateways, and high-performance web products.
              </p>
              <p>
                My core backend engine is built with <span className="font-semibold text-zinc-950">Java</span> and{" "}
                <span className="font-semibold text-zinc-950">Spring Boot</span>, complemented by full-stack delivery
                with <span className="font-semibold text-zinc-950">React</span>,{" "}
                <span className="font-semibold text-zinc-950">Next.js</span>, and modern containerized infrastructure.
              </p>
            </div>

            {/* Currently Focused On (ONLY Full-Stack & Microservices Architecture) */}
            <div className="pt-6 border-t border-zinc-100">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
                Currently Focused On
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {focusAreas.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl border border-zinc-200/90 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-300 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-2xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-zinc-950">{item.name}</span>
                      </div>
                      <p className="mt-2.5 text-xs text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Engineering Principles */}
            <div className="pt-6 border-t border-zinc-100">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
                How I Think As An Engineer
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {engineeringPrinciples.map((principle) => (
                  <div
                    key={principle.number}
                    className="p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-zinc-400">
                        {principle.number} —
                      </span>
                      <h4 className="text-sm font-bold text-zinc-950">{principle.title}</h4>
                    </div>
                    <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Developer Profile Card with Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs">
              {/* Photo Banner / Portrait */}
              <div className="relative w-full aspect-4/5 overflow-hidden bg-zinc-100 group">
                <Image
                  src="/profile.jpg"
                  alt="Bun Raksa — Backend & Full-Stack Developer at ISTAD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Bun Raksa</h3>
                    <p className="text-xs text-zinc-300 font-mono">ISTAD • Phnom Penh, Cambodia</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-medium backdrop-blur-xs shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Open to Work</span>
                  </span>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="text-xs font-mono font-medium uppercase text-zinc-500">
                    Developer Profile
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700">
                    ID: BR-2006
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs font-mono uppercase text-zinc-400">Role</span>
                    <p className="font-semibold text-zinc-950 text-sm mt-0.5">
                      Backend Developer
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-zinc-400">Education</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-100/80">
                        <Image src="/logos/istad-logo.png" alt="ISTAD" width={15} height={15} className="object-contain" />
                        <span className="font-semibold text-zinc-900 text-xs">ISTAD</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-100/80">
                        <Image src="/logos/rupp-logo.png" alt="RUPP" width={15} height={15} className="object-contain" />
                        <span className="font-semibold text-zinc-900 text-xs">RUPP</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400">Location</span>
                  <div className="flex items-center gap-1.5 mt-0.5 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                    <span className="font-medium text-zinc-800">Phnom Penh, Cambodia</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400">Key Technologies</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {["Java", "Spring Boot", "PostgreSQL", "React", "Docker", "Redis"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-800 font-mono text-xs font-medium border border-zinc-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Terminal Code Snippet Accent */}
                <div className="rounded-lg bg-zinc-950 p-3 text-[11px] font-mono text-zinc-300">
                  <div className="text-zinc-500">// Bun Raksa profile</div>
                  <div>const dev = &#123;</div>
                  <div className="pl-4 text-zinc-400">name: <span className="text-zinc-200">&apos;Bun Raksa&apos;</span>,</div>
                  <div className="pl-4 text-zinc-400">focus: <span className="text-zinc-200">&apos;Backend & Scalable Systems&apos;</span>,</div>
                  <div className="pl-4 text-zinc-400">status: <span className="text-emerald-400">&apos;Ready to Build&apos;</span></div>
                  <div>&#125;;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
