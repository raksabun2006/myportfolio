import React from "react";
import { educationList } from "@/data/education";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            04 / Academic & Specialized Training
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
            Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mt-2">
            Formal computer science fundamentals combined with rigorous enterprise software
            engineering training.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 space-y-10">
          {educationList.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-zinc-950 group-hover:scale-125 transition-transform" />

              {/* Education Card */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs hover:border-zinc-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950 leading-tight">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-700 mt-0.5">
                      {item.degree}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-mono font-medium">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-600 text-[11px] font-mono">
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                {/* Highlights / Focus Areas */}
                <div className="pt-3 border-t border-zinc-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Focus Areas & Key Coursework
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-50 text-zinc-800 text-xs font-medium border border-zinc-200/60"
                      >
                        <CheckCircle className="w-3 h-3 text-zinc-900" />
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
