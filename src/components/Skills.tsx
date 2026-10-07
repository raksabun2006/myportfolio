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
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "backend" | "data" | "frontend" | "devops";
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  description: string;
  productionUse: string;
  badge: string;
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
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredStack =
    selectedCategory === "all"
      ? ENGINEERING_STACK
      : ENGINEERING_STACK.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-zinc-50/60 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              02 / Engineering Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
              Core Technical Stack & Tooling
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mt-2">
              Clean monochrome tools and architectural foundations I rely on to construct resilient,
              high-throughput systems and modern web products.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-zinc-100/90 text-xs font-medium self-start sm:self-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-zinc-950 text-white shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredStack.map((tech) => {
            const Icon = tech.icon;
            const isHovered = hoveredTech === tech.id;
            return (
              <div
                key={tech.id}
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`group p-5 rounded-2xl border transition-all duration-200 bg-white flex flex-col justify-between ${
                  isHovered
                    ? "border-zinc-400 shadow-md -translate-y-1"
                    : "border-zinc-200/90 shadow-xs hover:border-zinc-300"
                }`}
              >
                <div>
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200/60 text-zinc-700">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                    {tech.name}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                    {tech.role}
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-zinc-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Production Context */}
                <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
                  <span className="text-zinc-400 block text-[10px] uppercase">Usage Context:</span>
                  <span className="text-zinc-800 line-clamp-2 mt-0.5">{tech.productionUse}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Rigor Callout Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 font-mono font-bold">
              0/1
            </div>
            <div>
              <span className="font-semibold text-zinc-950 text-sm">Design Philosophy:</span>{" "}
              <span className="text-zinc-600">
                Type safety from REST controller to client hooks, normalized database modeling, and idempotent transaction boundaries.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 font-mono text-zinc-500 text-[11px]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero Unverified Dependencies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
