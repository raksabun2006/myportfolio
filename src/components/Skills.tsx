"use client";

import React, { useState } from "react";
import {
  JavaIcon,
  SpringIcon,
  ReactIcon,
  TypeScriptIcon,
  PostgresIcon,
  RedisIcon,
  DockerIcon,
  GitIcon,
  RestApiIcon,
  MicroservicesIcon,
} from "./Icons";
import {
  Lightbulb,
  ClipboardList,
  Code2,
  Search,
  FlaskConical,
  Rocket,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import TechSphere from "./TechSphere";
import { skillCategories } from "@/data/skills";

export interface TechItem {
  id: string;
  name: string;
  category: "backend" | "data" | "frontend" | "devops";
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  description: string;
  productionUse: string;
  badge: string;
}

export const ENGINEERING_STACK: TechItem[] = [
  {
    id: "java",
    name: "Java",
    category: "backend",
    icon: JavaIcon,
    role: "Core Language",
    description: "Enterprise OOP, multithreading, memory management, and clean domain design.",
    productionUse: "Primary language for Mart System, DevSolve & EduCoreKH backends.",
    badge: "Java 21 LTS",
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    category: "backend",
    icon: SpringIcon,
    role: "Application Framework",
    description: "Production RESTful microservices, Spring Security RBAC, Spring Data JPA, and transactional logic.",
    productionUse: "Core engine for all production APIs and authorization filters.",
    badge: "Spring Boot 3.4",
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: ReactIcon,
    role: "UI Library",
    description: "Component-driven user interfaces, custom hooks, responsive layout composition, and API state handling.",
    productionUse: "Powering POS cashier UI and customer shopping portals.",
    badge: "React 19 / 18",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    icon: TypeScriptIcon,
    role: "Type-Safe Client",
    description: "Strict typing for API DTOs, interfaces, predictable state, and refactoring safety across frontend apps.",
    productionUse: "Ensuring end-to-end contract alignment between frontend & backend.",
    badge: "Strict Mode",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "data",
    icon: PostgresIcon,
    role: "Relational Database",
    description: "Normalized relational schemas, ACID transaction guarantees, indexing strategies, and JPA persistence.",
    productionUse: "Reliable storage for orders, inventory, user accounts, and audit trails.",
    badge: "PostgreSQL 16",
  },
  {
    id: "redis",
    name: "Redis",
    category: "data",
    icon: RedisIcon,
    role: "In-Memory Data Store",
    description: "High-speed caching layer, atomic distributed checkout locks, leaderboard rankings, and session tokens.",
    productionUse: "Sub-50ms dashboard metric responses and inventory concurrency locks.",
    badge: "Redis 7.2",
  },
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    icon: DockerIcon,
    role: "Containerization",
    description: "Multi-stage production build optimization, isolated runtime environments, and reproducible deployments.",
    productionUse: "Containerizing Spring Boot APIs for Railway and local orchestration.",
    badge: "Docker Compose",
  },
  {
    id: "git",
    name: "Git",
    category: "devops",
    icon: GitIcon,
    role: "Version Control",
    description: "Feature-branch workflows, rebasing, clean commit histories, code reviews, and collaborative team delivery.",
    productionUse: "Coordinating multi-member development on team platforms like DevSolve.",
    badge: "GitHub Workflow",
  },
  {
    id: "rest-api",
    name: "REST API",
    category: "backend",
    icon: RestApiIcon,
    role: "API Architecture",
    description: "Stateless HTTP protocol design, RFC-7807 standardized error payloads, and OpenAPI contract documentation.",
    productionUse: "Clean, predictable endpoint interfaces consumed by web clients.",
    badge: "OpenAPI 3.0",
  },
  {
    id: "microservices",
    name: "Microservices",
    category: "backend",
    icon: MicroservicesIcon,
    role: "System Architecture",
    description: "Service boundary decomposition, reverse proxying, JWT stateless token propagation, and independent deployability.",
    productionUse: "Architecting Organization and User Profile domains on DevSolve.",
    badge: "Decoupled Systems",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "backend", label: "Backend & Systems" },
  { id: "data", label: "Data & Caching" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "devops", label: "DevOps & Tools" },
] as const;

const WORKFLOW_STEPS = [
  { step: "01", label: "IDEA", icon: Lightbulb, color: "#f59e0b", desc: "Domain Modeling" },
  { step: "02", label: "PLAN", icon: ClipboardList, color: "#f97316", desc: "Schema & Contracts" },
  { step: "03", label: "CODE", icon: Code2, color: "#00d9ff", desc: "Clean Architecture" },
  { step: "04", label: "REVIEW", icon: Search, color: "#a78bfa", desc: "Security & Quality" },
  { step: "05", label: "TEST", icon: FlaskConical, color: "#ec4899", desc: "Integration Tests" },
  { step: "06", label: "DEPLOY", icon: Rocket, color: "#4ade80", desc: "Docker CI/CD" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredStack =
    selectedCategory === "all"
      ? ENGINEERING_STACK
      : ENGINEERING_STACK.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="space-y-14 sm:space-y-20">
      {/* 01. 3D Interactive Technology Showcase */}
      <section
        aria-label="3D Technology Universe"
        className="relative py-2 sm:py-4 overflow-hidden"
      >
        <TechSphere />
      </section>

      {/* 02. Verified Production Tools & Filter Tabs */}
      <section id="engineering-forge" aria-label="Verified Production Tools" className="space-y-6">
        {/* Section Title & Responsive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2 border-b border-slate-200/60 dark:border-white/8">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
              ENGINEERING MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-0.5">
              Verified Production Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1 max-w-xl">
              Core programming languages, enterprise frameworks, databases, and DevOps tools used across verified projects.
            </p>
          </div>

          {/* Category Filter Pills (Horizontally scrollable on mobile, sleek row on desktop) */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
            <div
              className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xs whitespace-nowrap"
              role="tablist"
              aria-label="Skill category filters"
            >
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? ENGINEERING_STACK.length
                    : ENGINEERING_STACK.filter((item) => item.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 ${
                      isSelected
                        ? "bg-white dark:bg-[#00d9ff]/15 text-[#00a6f4] dark:text-[#00d9ff] border border-slate-300/80 dark:border-[#00d9ff]/35 shadow-xs font-semibold"
                        : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                        isSelected
                          ? "bg-[#00a6f4]/15 dark:bg-[#00d9ff]/20 text-[#00a6f4] dark:text-[#00d9ff]"
                          : "text-slate-400 dark:text-zinc-500 bg-slate-200/60 dark:bg-white/5"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 10 Technology Cards Grid (Balanced 1-col on mobile, 2-col on tablet, 3-col on desktop) */}
        <div
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-fade-in"
        >
          {filteredStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <article
                key={tech.id}
                tabIndex={0}
                className="group relative p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c121e]/90 shadow-xs hover:border-[#00a6f4]/50 dark:hover:border-[#00d9ff]/50 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,217,255,0.12)] transition-all duration-200 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 hover:-translate-y-1"
              >
                <div>
                  {/* Top Technology Logo & Version Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-zinc-100 flex items-center justify-center group-hover:border-[#00a6f4]/40 dark:group-hover:border-[#00d9ff]/40 group-hover:bg-[#00a6f4]/10 dark:group-hover:bg-[#00d9ff]/10 group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-all duration-200 shrink-0">
                      <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-600 dark:text-zinc-300 font-medium group-hover:border-[#00a6f4]/30 dark:group-hover:border-[#00d9ff]/30 group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff] transition-colors">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {tech.name}
                  </h3>
                  <div className="text-xs font-mono text-[#00a6f4] dark:text-[#00d9ff] uppercase tracking-wider mt-0.5 font-semibold">
                    {tech.role}
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {tech.description}
                  </p>
                </div>

                {/* Practical Usage Context Section */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/8 text-xs font-mono">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1.5 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Production Applied</span>
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-zinc-300 leading-relaxed font-sans text-xs">
                    {tech.productionUse}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 03. Development Workflow Pipeline (Clean section without card background) */}
      <section
        aria-label="Development Workflow Pipeline"
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-white/8">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
              EXECUTION PROCESS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              Development Workflow Pipeline
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            End-to-End Delivery
          </span>
        </div>

        {/* Workflow Pipeline Display (Responsive: Grid on Mobile/Tablet, Connected Pipeline on Desktop) */}
        <div className="hidden lg:flex items-center justify-between gap-3">
          {WORKFLOW_STEPS.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={step.label}>
                <div className="flex-1 flex flex-col items-center text-center p-3.5 rounded-2xl border border-slate-200/80 dark:border-white/8 bg-white dark:bg-[#0c121e]/80 shadow-xs group hover:border-[#00a6f4]/40 dark:hover:border-[#00d9ff]/40 transition-all duration-200">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 shadow-xs"
                    style={{
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}35`,
                    }}
                  >
                    <StepIcon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    PHASE {step.step}
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-slate-900 dark:text-white mt-0.5">
                    {step.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 font-sans">
                    {step.desc}
                  </div>
                </div>

                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="h-[2px] w-4 bg-gradient-to-r from-slate-200 dark:from-white/20 to-slate-200 dark:to-white/10 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile / Tablet Grid Layout (2 cols on small mobile, 3 cols on tablet - zero horizontal overflow!) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-3">
          {WORKFLOW_STEPS.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.label}
                className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-white/8 bg-white dark:bg-[#0c121e]/80 shadow-xs flex flex-col items-center text-center"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-2 shadow-xs"
                  style={{
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}35`,
                  }}
                >
                  <StepIcon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <div className="text-[9px] font-mono text-slate-400 dark:text-zinc-500">
                  STEP {step.step}
                </div>
                <div className="text-xs font-mono font-bold tracking-wider text-slate-900 dark:text-white mt-0.5">
                  {step.label}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5 font-sans">
                  {step.desc}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 04. Comprehensive Technical Competencies Directory */}
      <section
        aria-label="Comprehensive Technical Competencies"
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-white/8">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
              COMPREHENSIVE DIRECTORY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              Full-Stack Technical Competency Matrix
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-[#00a6f4] dark:text-[#00d9ff]" />
            <span>22 Core Competencies</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-5.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c121e]/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 mb-4 leading-relaxed font-sans">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      title={s.description}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-[11px] font-mono text-slate-700 dark:text-zinc-300 hover:border-[#00a6f4]/40 dark:hover:border-[#00d9ff]/40 hover:text-[#00a6f4] dark:hover:text-[#00d9ff] transition-colors cursor-default"
                    >
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
