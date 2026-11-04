"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin, Check, Code2, Server } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  logo?: string;
  icon?: "academic" | "code" | "server";
  summary: string;
  highlights: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "istad-practicum",
    organization: "ISTAD — Institute of Science and Technology Advanced Development",
    role: "Enterprise Software Engineering Trainee",
    period: "March 2026 — Present",
    location: "Phnom Penh, Cambodia",
    badge: "Enterprise Practicum",
    logo: "/logos/istad-logo.png",
    icon: "academic",
    summary:
      "Intensive enterprise engineering training focused on building production-grade distributed microservices, Spring Boot backends, Spring Security JWT workflows, Dockerization, and agile teamwork.",
    highlights: [
      "Enterprise Java & Spring Boot microservices design",
      "Spring Security, OAuth 2.0, OIDC, and stateless JWT token workflows",
      "PostgreSQL normalized modeling, ACID transactions, and JPA criteria",
      "Docker multi-stage container optimization and CI/CD pipelines",
      "Collaborative team development and API contract management",
    ],
  },
  {
    id: "devsolve-contribution",
    organization: "DevSolve — Cybersecurity & Developer Platform",
    role: "Backend & Security Workflow Contributor",
    period: "2026",
    location: "Phnom Penh, Cambodia",
    badge: "Team Project",
    icon: "code",
    summary:
      "Collaborative developer community and bug bounty platform. Personally engineered the Organization Service APIs, user profile reputation subsystem, and Keycloak authentication workflows.",
    highlights: [
      "Engineered Organization Service REST APIs managing security program lifecycles",
      "Integrated Keycloak centralized IAM for stateless OIDC / OAuth 2.0 auth",
      "Designed normalized PostgreSQL relational schema with audit logs",
      "Implemented Redis caching layer for fast lookups and sub-50ms responses",
      "Collaborated with frontend engineers to align typed OpenAPI specifications",
    ],
  },
  {
    id: "mart-system-lead",
    organization: "Mart System — POS & Online Storefront",
    role: "Full-Stack Project Lead & Architect",
    period: "2026",
    location: "Phnom Penh, Cambodia",
    badge: "Production System",
    icon: "server",
    summary:
      "Production-grade full-stack online store and retail point-of-sale platform combining inventory synchronization, barcode checkout, and Cambodian national KHQR dynamic payments.",
    highlights: [
      "Constructed asynchronous Spring Boot backend with PostgreSQL ACID persistence",
      "Implemented Redis distributed locking to eliminate checkout race conditions",
      "Integrated Bakong KHQR dynamic banking settlement with webhook callbacks",
      "Built clean React checkout UI with SKU barcode scanning compatibility",
      "Deployed containerized backend on Railway and client on Vercel",
    ],
  },
];

export default function Experience() {
  const { locale } = useLocale();
  const isKhmer = locale === "km";

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 block mb-2">
            {isKhmer ? "បទពិសោធន៍ និងការរួមចំណែក" : "EXPERIENCE & CONTRIBUTIONS"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {isKhmer ? "វិស្វកម្មជាក់ស្តែង និងការរួមចំណែក" : "Practical Engineering & Contributions"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            {isKhmer
              ? "ការអនុវត្តវិស្វកម្មកម្មវិធីកម្រិតសហគ្រាសនៅ ISTAD ការចូលរួមបង្កើតសេវា Backend និងការដាក់ឱ្យដំណើរការប្រព័ន្ធពិត។"
              : "Applied enterprise software engineering practicum at ISTAD, backend service contributions, and production system delivery."}
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 dark:border-blue-900/50 space-y-8">
          {EXPERIENCE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Perfectly centered solid timeline node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-blue-50 dark:ring-[#090d16] transition-transform group-hover:scale-125" />

              {/* Experience Card */}
              <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c121e] p-6 sm:p-7 shadow-2xs hover:shadow-xs hover:border-zinc-300 dark:hover:border-white/20 transition-all">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {/* Organization Logo or Icon */}
                    {item.logo ? (
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 p-1">
                        <Image
                          src={item.logo}
                          alt={item.organization}
                          width={96}
                          height={96}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : item.icon === "server" ? (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Server className="w-5 h-5" />
                      </div>
                    ) : item.icon === "code" ? (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Code2 className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                    )}

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                        {item.organization}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                        {item.role}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Header Badges */}
                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-700">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Summary narrative */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Bullet highlights */}
                <div className="pt-4 border-t border-zinc-100 dark:border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2.5 font-semibold">
                    {isKhmer ? "សមត្ថភាពសំខាន់ៗ & សមិទ្ធផល:" : "Key Contributions & Engineering Deliverables:"}
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
