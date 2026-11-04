"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin, Check, Code2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

interface TimelineItem {
  id: string;
  institution: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  logo?: string;
  type: "academic" | "engineering";
  summary: string;
  highlights: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "istad",
    institution: "ISTAD — Institute of Science and Technology Advanced Development",
    role: "IT Expert 3rd Generation",
    period: "2026 — Present",
    location: "Phnom Penh, Cambodia",
    badge: "Intensive Enterprise Training",
    logo: "/logos/istad-logo.png",
    type: "academic",
    summary:
      "Advanced enterprise engineering curriculum emphasizing microservices architecture, Spring Boot backend systems, containerization, and agile team delivery.",
    highlights: [
      "Enterprise Java & Spring Boot microservices design",
      "Spring Security, OAuth 2.0, OIDC, and stateless JWT token workflows",
      "PostgreSQL normalized modeling, ACID transactions, and JPA criteria",
      "Docker multi-stage optimization and CI/CD deployment pipelines",
      "Collaborative team development and API contract management",
    ],
  },
  {
    id: "rupp",
    institution: "RUPP — Royal University of Phnom Penh",
    role: "Bachelor of Computer Science and Engineering",
    period: "2025 — Present",
    location: "Phnom Penh, Cambodia",
    badge: "Undergraduate Degree",
    logo: "/logos/rupp-logo.png",
    type: "academic",
    summary:
      "Rigorous core computer science education focusing on algorithmic complexity, data structures, network protocols, and mathematical foundations.",
    highlights: [
      "Data Structures & Object-Oriented Programming principles",
      "Relational database design, normalization, and SQL optimization",
      "Computer architecture, operating systems, and memory management",
      "Software engineering lifecycle methodologies and system analysis",
    ],
  },
  {
    id: "samrong-ponley",
    institution: "Samrong Ponley High School",
    role: "High School Diploma",
    period: "2018 — 2024",
    location: "Cambodia",
    badge: "Graduated",
    type: "academic",
    summary:
      "Completed secondary education with a strong academic foundation in Mathematics, Sciences, and analytical problem solving.",
    highlights: [
      "National High School Baccalaureate",
      "Strong foundation in Mathematics and Sciences",
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
              ? "ការបណ្តុះបណ្តាលវិស្វកម្មសហគ្រាសជាក់ស្តែងនៅ ISTAD រួមផ្សំជាមួយមូលដ្ឋានគ្រឹះវិទ្យាសាស្ត្រកុំព្យូទ័រនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)។"
              : "Formal computer science foundations at RUPP combined with intensive enterprise software engineering training at ISTAD."}
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-200 dark:border-white/10 space-y-10">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#090d16] border-2 border-blue-600 dark:border-blue-400 group-hover:scale-125 transition-transform shadow-xs" />

              {/* Timeline Card */}
              <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c121e] p-6 sm:p-7 shadow-2xs hover:shadow-xs hover:border-zinc-300 dark:hover:border-white/20 transition-all">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {/* Institution Logo */}
                    {item.logo ? (
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 p-1">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          width={96}
                          height={96}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : item.type === "academic" ? (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                        <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    )}

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                        {item.role}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-sans">
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
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Bullet highlights */}
                <div className="pt-4 border-t border-zinc-100 dark:border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2.5 font-semibold">
                    {isKhmer ? "សមត្ថភាពសំខាន់ៗ & សមិទ្ធផល:" : "Key Competencies & Milestones:"}
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
