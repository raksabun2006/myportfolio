"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin, Check, Code } from "lucide-react";

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
    period: "2018 – 2024",
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
  return (
    <section id="experience" className="py-20 bg-zinc-50/60 border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            04 — Experience & Learning
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
            Education Timeline
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mt-2 leading-relaxed">
            Formal computer science foundations at RUPP, intensive enterprise software engineering training at ISTAD,
            and secondary academic background.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 space-y-10">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-zinc-950 group-hover:scale-125 transition-transform shadow-xs" />

              {/* Timeline Card */}
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all">
                {/* Header Row with Logo (BORDERLESS LOGO) */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {/* Institution Logo (Borderless) or Icon */}
                    {item.logo ? (
                      <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          width={48}
                          height={48}
                          className="object-contain drop-shadow-2xs"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    ) : item.type === "academic" ? (
                      <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-zinc-700" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                        <Code className="w-5 h-5 text-zinc-300" />
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-950 leading-tight">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-700 mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-mono font-medium">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-600 text-[11px] font-mono">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4 sm:ml-[62px]">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{item.location}</span>
                </div>

                {/* Summary narrative */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-4 sm:ml-[62px]">
                  {item.summary}
                </p>

                {/* Bullet highlights */}
                <div className="pt-4 border-t border-zinc-100 sm:ml-[62px]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2.5">
                    Key Competencies & Milestones:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <Check className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
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
