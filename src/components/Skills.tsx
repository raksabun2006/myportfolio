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
} from "lucide-react";
import TechSphere from "./TechSphere";

interface TechItem {
  id: string;
  name: string;
  category: "backend" | "data" | "frontend" | "devops";
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  description: string;
  productionUse: string;
  badge: string;
  cardDur: string;
  cardDelay: string;
  iconDur: string;
  iconDelay: string;
}

const ENGINEERING_STACK: TechItem[] = [
  {
    id: "java",
    name: "Java",
    category: "backend",
    icon: JavaIcon,
    role: "Core Language",
    description: "Enterprise OOP, multithreading, memory management, and clean domain design.",
    productionUse: "Primary language for Mart System, DevSolve & EduCoreKH backends.",
    badge: "Java 21 LTS",
    cardDur: "4.8s",
    cardDelay: "0.0s",
    iconDur: "3.5s",
    iconDelay: "0.15s",
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
    cardDur: "5.4s",
    cardDelay: "0.85s",
    iconDur: "4.1s",
    iconDelay: "0.7s",
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
    cardDur: "4.5s",
    cardDelay: "1.6s",
    iconDur: "3.7s",
    iconDelay: "1.1s",
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
    cardDur: "5.1s",
    cardDelay: "0.4s",
    iconDur: "4.3s",
    iconDelay: "0.5s",
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
    cardDur: "4.7s",
    cardDelay: "2.1s",
    iconDur: "3.9s",
    iconDelay: "1.4s",
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
    cardDur: "5.6s",
    cardDelay: "1.25s",
    iconDur: "3.6s",
    iconDelay: "0.3s",
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
    cardDur: "4.6s",
    cardDelay: "0.65s",
    iconDur: "4.2s",
    iconDelay: "1.0s",
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
    cardDur: "5.2s",
    cardDelay: "2.35s",
    iconDur: "3.8s",
    iconDelay: "1.75s",
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
    cardDur: "4.9s",
    cardDelay: "1.45s",
    iconDur: "4.0s",
    iconDelay: "0.6s",
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
    cardDur: "5.3s",
    cardDelay: "0.25s",
    iconDur: "3.4s",
    iconDelay: "1.3s",
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
  { label: "IDEA", icon: Lightbulb, color: "#f59e0b" },
  { label: "PLAN", icon: ClipboardList, color: "#f97316" },
  { label: "CODE", icon: Code2, color: "#00d9ff" },
  { label: "REVIEW", icon: Search, color: "#a78bfa" },
  { label: "TEST", icon: FlaskConical, color: "#ec4899" },
  { label: "DEPLOY", icon: Rocket, color: "#4ade80" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredStack =
    selectedCategory === "all"
      ? ENGINEERING_STACK
      : ENGINEERING_STACK.filter((tech) => tech.category === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-10 sm:py-24 px-3 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden"
      aria-label="Core Technical Stack and Tooling"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header with EXPERTISE */}
        <div className="text-center pt-1 sm:pt-4 mb-2 sm:mb-4">
          <span className="text-[11px] sm:text-sm font-sans font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-[#00a6f4] dark:text-[#00d9ff] uppercase">
            EXPERTISE
          </span>
        </div>

        {/* 3D Interactive World Globe */}
        <div className="mb-8 sm:mb-14">
          <TechSphere />
        </div>

        {/* Filter Tabs & Engineering Matrix Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/10">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00a6f4] dark:text-[#00d9ff] font-semibold">
              ENGINEERING FORGE
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              Verified Production Tools
            </h3>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xs self-start sm:self-auto max-w-full"
            role="tablist"
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
                  className={`relative px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    isSelected
                      ? "bg-white dark:bg-[#00d9ff]/15 text-[#00a6f4] dark:text-[#00d9ff] border border-slate-300 dark:border-[#00d9ff]/35 shadow-xs font-semibold"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono px-1 sm:px-1.5 rounded-md ${
                      isSelected ? "bg-[#00a6f4]/15 dark:bg-[#00d9ff]/20 text-[#00a6f4] dark:text-[#00d9ff]" : "text-slate-400 dark:text-zinc-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 10 Technology Cards in Dark Cyber Glass Grid */}
        <div
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredStack.map((tech) => {
            const Icon = tech.icon;
            const isHovered = hoveredTech === tech.id;

            return (
              <div
                key={`${selectedCategory}-${tech.id}`}
                tabIndex={0}
                role="article"
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`group relative p-4.5 rounded-2xl border transition-all duration-300 cursor-default flex flex-col justify-between ${
                  isHovered
                    ? "bg-slate-50 dark:bg-[#0f1521] border-[#00a6f4] dark:border-[#00d9ff]/50 shadow-md dark:shadow-[0_0_30px_rgba(0,217,255,0.14)] -translate-y-1.5"
                    : "bg-white dark:bg-[#0a0e16]/80 border-slate-200 dark:border-white/8 hover:border-slate-300 dark:hover:border-white/20 shadow-xs"
                }`}
                style={{
                  animation: `techCardFloat ${tech.cardDur} ease-in-out ${tech.cardDelay} infinite`,
                  animationPlayState: isHovered ? "paused" : "running",
                }}
              >
                <div>
                  {/* Top Technology Logo & Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`relative w-10.5 h-10.5 rounded-xl border flex items-center justify-center transition-all duration-200 ${
                        isHovered
                          ? "bg-[#00a6f4]/15 dark:bg-[#00d9ff]/15 text-[#00a6f4] dark:text-[#00d9ff] border-[#00a6f4]/40 dark:border-[#00d9ff]/40 shadow-xs dark:shadow-[0_0_16px_rgba(0,217,255,0.3)] scale-105"
                          : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      <div
                        style={{
                          animation: `techIconBreathe ${tech.iconDur} ease-in-out ${tech.iconDelay} infinite`,
                          animationPlayState: isHovered ? "paused" : "running",
                        }}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-300 transition-colors group-hover:border-[#00a6f4]/40 dark:group-hover:border-[#00d9ff]/30 group-hover:text-[#00a6f4] dark:group-hover:text-[#00d9ff]">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white tracking-tight">
                    {tech.name}
                  </h3>
                  <div className="text-[10px] font-mono text-[#00a6f4] dark:text-[#00d9ff]/80 uppercase tracking-wider mt-0.5 font-semibold">
                    {tech.role}
                  </div>

                  <p className="mt-2 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans line-clamp-3">
                    {tech.description}
                  </p>
                </div>

                {/* Usage Context Section */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/8 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1 font-semibold">
                    <span>Usage Context</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isHovered ? "bg-[#00a6f4] dark:bg-[#00d9ff] shadow-[0_0_8px_#00d9ff]" : "bg-slate-300 dark:bg-white/20"
                      }`}
                    />
                  </div>
                  <span className="text-slate-700 dark:text-zinc-300 line-clamp-2 leading-snug font-sans text-xs">
                    {tech.productionUse}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Pipeline (ayushcmd signature workflow) */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0e16]/90 relative overflow-hidden shadow-xs dark:shadow-2xl">
          <div className="text-xs font-mono tracking-[0.25em] uppercase text-slate-500 dark:text-zinc-400 mb-6 font-semibold">
            DEVELOPMENT WORKFLOW PIPELINE
          </div>

          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
            {WORKFLOW_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center gap-2.5 min-w-[64px] group cursor-pointer">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}35`,
                      }}
                    >
                      <StepIcon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <span className="text-xs font-mono tracking-wider font-semibold text-slate-600 dark:text-zinc-400 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                      {step.label}
                    </span>
                  </div>

                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div className="flex-1 h-px min-w-[12px] bg-gradient-to-r from-slate-200 dark:from-white/15 to-slate-100 dark:to-white/5 mx-1" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
