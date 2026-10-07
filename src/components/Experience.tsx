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
  return (
    <section id="experience" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#00d9ff] mb-2 font-medium">
            05 / ACADEMIC &amp; WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Formal computer science foundations at RUPP combined with intensive enterprise software engineering training at ISTAD.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Bullet Node with Cyan Glow */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#07090e] border-2 border-[#00d9ff] group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(0,217,255,0.6)]" />

              {/* Timeline Card in Dark Glass Style */}
              <div className="rounded-2xl border border-white/10 bg-[#0c1018]/90 p-6 sm:p-7 shadow-xl hover:border-[#00d9ff]/40 hover:shadow-[0_0_30px_rgba(0,217,255,0.1)] transition-all">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {/* Institution Logo (Borderless) */}
                    {item.logo ? (
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          width={96}
                          height={96}
                          unoptimized
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : item.type === "academic" ? (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 text-[#00d9ff] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-[#00d9ff]" />
                      </div>
                    ) : (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                        <Code className="w-5 h-5 text-[#00d9ff]" />
                      </div>
                    )}

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-medium text-zinc-300 mt-0.5">
                        {item.role}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-2 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-[#00d9ff] shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Header Badges */}
                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#00d9ff]" />
                      <span>{item.period}</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#00d9ff]/10 border border-[#00d9ff]/25 text-[#00d9ff] text-xs font-mono font-medium">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Summary narrative */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Bullet highlights */}
                <div className="pt-4 border-t border-white/8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#00d9ff]/80 block mb-2.5 font-semibold">
                    Key Competencies &amp; Milestones:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-[#00d9ff] shrink-0 mt-0.5" />
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
