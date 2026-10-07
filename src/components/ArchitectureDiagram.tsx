"use client";

import React from "react";
import { Server, Database, Globe, Shield, ArrowRight, Layers, Cpu } from "lucide-react";

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
          badge: "bg-blue-50 text-blue-700 border-blue-200",
          border: "border-zinc-300",
        };
      case "gateway":
        return {
          icon: Shield,
          badge: "bg-purple-50 text-purple-700 border-purple-200",
          border: "border-zinc-300",
        };
      case "service":
        return {
          icon: Server,
          badge: "bg-zinc-100 text-zinc-900 border-zinc-300",
          border: "border-zinc-900",
        };
      case "database":
        return {
          icon: Database,
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          border: "border-zinc-300",
        };
      case "external":
        return {
          icon: Cpu,
          badge: "bg-amber-50 text-amber-700 border-amber-200",
          border: "border-zinc-300",
        };
      default:
        return {
          icon: Layers,
          badge: "bg-zinc-100 text-zinc-700 border-zinc-200",
          border: "border-zinc-200",
        };
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-5">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-zinc-700" />
          <span className="text-xs font-mono font-semibold uppercase text-zinc-800">
            {title || "System Architecture & Data Flow"}
          </span>
        </div>
        <span className="text-[11px] font-mono text-zinc-500">End-to-End Pipeline</span>
      </div>

      {/* Grid of Nodes with Directional Connectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {nodes.map((node, index) => {
          const style = getTypeStyle(node.type);
          const Icon = style.icon;

          return (
            <div
              key={node.label + index}
              className={`p-3.5 rounded-xl bg-white border ${style.border} shadow-2xs flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-zinc-900">{node.label}</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border uppercase ${style.badge}`}>
                  {node.type}
                </span>
              </div>
              <p className="text-xs text-zinc-600 font-mono mt-1">{node.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
