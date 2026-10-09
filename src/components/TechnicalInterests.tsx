import React from "react";
import { technicalInterests } from "@/data/interests";
import { Server, Network, Cloud, Laptop } from "lucide-react";

const INTEREST_ICONS: Record<string, React.ElementType> = {
  "backend-systems": Server,
  microservices: Network,
  "cloud-devops": Cloud,
  "full-stack-apps": Laptop,
};

export default function TechnicalInterests() {
  return (
    <section className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            06 / Architecture Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
            What I Like Building
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mt-2">
            My architectural passions center on reliable server systems, maintainable schemas, and
            automated delivery pipelines.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalInterests.map((interest) => {
            const Icon = INTEREST_ICONS[interest.id] || Server;
            return (
              <div
                key={interest.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/70 flex items-center justify-center text-zinc-900 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    {interest.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-800 font-medium">
                    {interest.shortDescription}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {interest.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                  {interest.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
