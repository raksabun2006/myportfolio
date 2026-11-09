"use client";

import React from "react";
import {
  JavaIcon,
  SpringIcon,
  DockerIcon,
  PostgresIcon,
  RestApiIcon,
  MicroservicesIcon,
  FlutterIcon,
  AndroidIcon,
} from "@/components/Icons";
import { Smartphone, Server, Cpu, Database, Network, Code2 } from "lucide-react";

interface TechnologyBadgeProps {
  name: string;
  className?: string;
  size?: "sm" | "md";
}

export default function TechnologyBadge({
  name,
  className = "",
  size = "md",
}: TechnologyBadgeProps) {
  const normalized = name.toLowerCase().trim();

  // Pick suitable icon based on name
  const renderIcon = () => {
    const iconSize = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5";

    if (normalized.includes("flutter")) {
      return <FlutterIcon className={`${iconSize} text-sky-500`} />;
    }
    if (normalized.includes("android")) {
      return <AndroidIcon className={`${iconSize} text-emerald-500`} />;
    }
    if (normalized.includes("dart")) {
      return <FlutterIcon className={`${iconSize} text-cyan-500`} />;
    }
    if (normalized.includes("spring")) {
      return <SpringIcon className={`${iconSize} text-emerald-500`} />;
    }
    if (normalized.includes("java") && !normalized.includes("javascript")) {
      return <JavaIcon className={`${iconSize} text-amber-500`} />;
    }
    if (normalized.includes("docker")) {
      return <DockerIcon className={`${iconSize} text-sky-500`} />;
    }
    if (normalized.includes("postgres") || normalized.includes("sql")) {
      return <PostgresIcon className={`${iconSize} text-blue-500`} />;
    }
    if (normalized.includes("rest api") || normalized.includes("api")) {
      return <RestApiIcon className={`${iconSize} text-emerald-500`} />;
    }
    if (normalized.includes("microservice") || normalized.includes("consul") || normalized.includes("gateway")) {
      return <MicroservicesIcon className={`${iconSize} text-indigo-500`} />;
    }
    if (normalized.includes("mobile") || normalized.includes("device")) {
      return <Smartphone className={`${iconSize} text-blue-500`} />;
    }
    if (normalized.includes("grpc") || normalized.includes("network")) {
      return <Network className={`${iconSize} text-purple-500`} />;
    }
    if (normalized.includes("database") || normalized.includes("storage")) {
      return <Database className={`${iconSize} text-cyan-500`} />;
    }
    return <Code2 className={`${iconSize} text-zinc-500`} />;
  };

  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2 py-0.5 gap-1"
      : "text-xs px-2.5 py-1 gap-1.5";

  return (
    <span
      className={`inline-flex items-center rounded-lg border border-zinc-200/90 dark:border-white/10 bg-zinc-50/80 dark:bg-white/[0.04] font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-300 dark:hover:border-white/20 select-none ${sizeClasses} ${className}`}
    >
      {renderIcon()}
      <span>{name}</span>
    </span>
  );
}

