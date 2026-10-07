"use client";

import React from "react";
import { Server, Database, Globe, Shield, Layers, Cpu } from "lucide-react";

interface NodeItem {
  label: string;
  role: string;
  type: "client" | "gateway" | "service" | "database" | "external";
}

interface ArchitectureDiagramProps {
  nodes?: NodeItem[];
  title?: string;
}

export default function ArchitectureDiagram({ nodes, title }: ArchitectureDiagramProps) {
  if (!nodes || nodes.length === 0) {
    return null;
  }

  const getTypeStyle = (type: NodeItem["type"]) => {
    switch (type) {
      case "client":
        return {
          icon: Globe,
          badge: "bg-[#00d9ff]/15 text-[#00d9ff] border-[#00d9ff]/30",
          border: "border-[#00d9ff]/30",
        };
      case "gateway":
        return {
          icon: Shield,
          badge: "bg-[#a78bfa]/15 text-[#a78bfa] border-[#a78bfa]/30",
          border: "border-[#a78bfa]/30",
        };
      case "service":
        return {
          icon: Server,
          badge: "bg-white/10 text-white border-white/20",
          border: "border-white/20",
        };
      case "database":
        return {
          icon: Database,
          badge: "bg-[#4ade80]/15 text-[#4ade80] border-[#4ade80]/30",
          border: "border-[#4ade80]/30",
        };
      case "external":
        return {
          icon: Cpu,
          badge: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
          border: "border-[#f59e0b]/30",
        };
      default:
        return {
          icon: Layers,
          badge: "bg-white/5 text-zinc-300 border-white/10",
          border: "border-white/10",
        };
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#07090e] p-5 shadow-xs dark:shadow-lg transition-colors">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-white/8">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#00a6f4] dark:text-[#00d9ff]" />
          <span className="text-xs font-mono font-semibold uppercase text-slate-800 dark:text-zinc-200">
            {title || "System Architecture & Data Flow"}
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#00a6f4] dark:text-[#00d9ff]">End-to-End Pipeline</span>
      </div>

      {/* Grid of Nodes with Directional Connectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {nodes.map((node, index) => {
          const style = getTypeStyle(node.type);
          const Icon = style.icon;

          return (
            <div
              key={node.label + index}
              className={`p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border ${style.border} shadow-xs flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-800 dark:text-white">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{node.label}</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border uppercase ${style.badge}`}>
                  {node.type}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 font-mono mt-1">{node.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
