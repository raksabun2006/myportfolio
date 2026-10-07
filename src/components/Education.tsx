import React from "react";
import Image from "next/image";
import { educationList } from "@/data/education";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#00d9ff] mb-2 font-medium">
            04 / ACADEMIC FOUNDATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2">
            Formal computer science fundamentals combined with rigorous enterprise software
            engineering training.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
          {educationList.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#07090e] border-2 border-[#00d9ff] group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(0,217,255,0.6)]" />

              {/* Education Card */}
              <div className="rounded-2xl border border-white/10 bg-[#0c1018]/90 p-6 shadow-xl hover:border-[#00d9ff]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {item.logo ? (
                      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          width={96}
                          height={96}
                          unoptimized
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-[#00d9ff] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-[#00d9ff]" />
                      </div>
                    )}

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-medium text-zinc-300 mt-0.5">
                        {item.degree}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-2 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-[#00d9ff] shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#00d9ff]" />
                      <span>{item.period}</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#00d9ff]/10 border border-[#00d9ff]/25 text-[#00d9ff] text-xs font-mono font-medium">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Highlights / Focus Areas */}
                <div className="pt-3 border-t border-white/8">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00d9ff]/80">
                    Focus Areas &amp; Key Coursework
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 text-xs font-medium border border-white/8"
                      >
                        <CheckCircle className="w-3 h-3 text-[#00d9ff]" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
