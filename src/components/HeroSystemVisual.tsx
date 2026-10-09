"use client";

import React, { useState } from "react";
import { Terminal, Play, CheckCircle2, Zap } from "lucide-react";

interface LogEntry {
  id: string;
  time: string;
  method: "GET" | "POST" | "PUT";
  path: string;
  status: number;
  duration: string;
  source: string;
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: "log-1",
    time: "10:42:01.124",
    method: "POST",
    path: "/api/v1/auth/token",
    status: 200,
    duration: "14ms",
    source: "Keycloak/JWT",
  },
  {
    id: "log-2",
    time: "10:42:01.380",
    method: "GET",
    path: "/api/v1/programs/bounty",
    status: 200,
    duration: "1.8ms",
    source: "Redis:CacheHit",
  },
  {
    id: "log-3",
    time: "10:42:01.912",
    method: "POST",
    path: "/api/v1/orders/khqr/generate",
    status: 201,
    duration: "26ms",
    source: "Bakong/Payment",
  },
  {
    id: "log-4",
    time: "10:42:02.405",
    method: "GET",
    path: "/api/v1/services/technicians?prov=PP",
    status: 200,
    duration: "8.4ms",
    source: "PostgreSQL:Indexed",
  },
];

const SIMULATED_ENDPOINTS = [
  { method: "POST" as const, path: "/api/v1/orders/khqr/verify", source: "Bakong/Webhook", duration: "18ms" },
  { method: "GET" as const, path: "/api/v1/users/profile/raksa", source: "Spring Security", duration: "3.2ms" },
  { method: "GET" as const, path: "/api/v1/search?q=security", source: "Meilisearch/Index", duration: "4.1ms" },
  { method: "POST" as const, path: "/api/v1/vulnerabilities/triage", source: "DevSolve/Service", duration: "12ms" },
  { method: "GET" as const, path: "/api/v1/metrics/prometheus", source: "Actuator/Health", duration: "0.9ms" },
];

export default function HeroSystemVisual() {
  const [activeTab, setActiveTab] = useState<"traffic" | "nodes" | "runtime">("traffic");
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [isSimulating, setIsSimulating] = useState(false);
  const [pingLatency, setPingLatency] = useState("1.8ms");

  const handleSimulateRequest = () => {
    setIsSimulating(true);
    const randomIndex = Math.floor(Math.random() * SIMULATED_ENDPOINTS.length);
    const item = SIMULATED_ENDPOINTS[randomIndex];
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${now
      .getMilliseconds()
      .toString()
      .padStart(3, "0")}`;

    setTimeout(() => {
      const newEntry: LogEntry = {
        id: `log-${Date.now()}`,
        time: timeStr,
        method: item.method,
        path: item.path,
        status: 200,
        duration: item.duration,
        source: item.source,
      };
      setLogs((prev) => [newEntry, ...prev.slice(0, 4)]);
      setPingLatency(item.duration);
      setIsSimulating(false);
    }, 280);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c1017] shadow-xl overflow-hidden transition-all hover:border-slate-300 dark:hover:border-white/25">
      {/* Top Window Bar */}
      <div className="bg-slate-50 dark:bg-white/[0.04] px-4 py-3 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
          </div>
          <span className="text-slate-300 dark:text-zinc-600 font-mono text-xs">|</span>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-700 dark:text-zinc-300">
            <Terminal className="w-3.5 h-3.5 text-[#00a6f4] dark:text-[#00d9ff]" />
            <span className="font-medium">spring-boot-runtime.local</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>200 OK • {pingLatency}</span>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="px-4 pt-2.5 border-b border-slate-100 dark:border-white/8 flex items-center justify-between bg-white dark:bg-[#0c1017] text-xs">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("traffic")}
            className={`px-3 py-1.5 font-mono text-xs rounded-t-md transition-colors border-b-2 cursor-pointer ${
              activeTab === "traffic"
                ? "border-[#00a6f4] dark:border-[#00d9ff] text-slate-900 dark:text-white font-semibold"
                : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Live Traffic
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("nodes")}
            className={`px-3 py-1.5 font-mono text-xs rounded-t-md transition-colors border-b-2 cursor-pointer ${
              activeTab === "nodes"
                ? "border-[#00a6f4] dark:border-[#00d9ff] text-slate-900 dark:text-white font-semibold"
                : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            System Topology
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("runtime")}
            className={`px-3 py-1.5 font-mono text-xs rounded-t-md transition-colors border-b-2 cursor-pointer ${
              activeTab === "runtime"
                ? "border-[#00a6f4] dark:border-[#00d9ff] text-slate-900 dark:text-white font-semibold"
                : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Runtime Spec
          </button>
        </div>

        {activeTab === "traffic" && (
          <button
            type="button"
            onClick={handleSimulateRequest}
            disabled={isSimulating}
            className="mb-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 text-white text-[11px] font-mono font-medium transition-colors cursor-pointer disabled:opacity-50"
          >
            <Play className={`w-2.5 h-2.5 ${isSimulating ? "animate-spin" : ""}`} />
            <span>Send Request</span>
          </button>
        )}
      </div>

      {/* Body Content */}
      <div className="p-4 bg-white dark:bg-[#0c1017] min-h-[200px]">
        {activeTab === "traffic" && (
          <div className="space-y-2 font-mono text-[11px]">
            <div className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider flex items-center justify-between pb-1 border-b border-slate-100 dark:border-white/5">
              <span>Timestamp &amp; Method</span>
              <span>Endpoint &amp; Source</span>
            </div>
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-150 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 dark:text-zinc-500 text-[10px]">{log.time}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                      log.method === "POST"
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                        : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                    }`}
                  >
                    {log.method}
                  </span>
                  <span className="text-slate-800 dark:text-zinc-200 font-medium truncate max-w-[140px] sm:max-w-[210px]">
                    {log.path}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-slate-400 dark:text-zinc-500 text-[10px] hidden sm:inline">{log.source}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{log.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "nodes" && (
          <div className="py-2 space-y-3">
            <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono mb-2">
              Stateless API Gateway &amp; Relational Data Layer
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">Gateway</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Traefik / Edge Proxy</div>
                <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 mt-0.5">TLS, Rate Limit, CORS</div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">Core Service</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Spring Boot 3.4</div>
                <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 mt-0.5">REST API, JWT &amp; RBAC</div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">Data Tier</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">PostgreSQL 16</div>
                <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 mt-0.5">ACID, JPA &amp; Indexes</div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">Cache / Broker</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Redis 7.2</div>
                <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 mt-0.5">Locks, Session &amp; Hits</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "runtime" && (
          <div className="py-2 space-y-2.5">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/8">
                <div className="text-[10px] text-slate-400 dark:text-zinc-500">JVM RUNTIME</div>
                <div className="font-semibold text-slate-900 dark:text-white mt-0.5">Eclipse Temurin 21 (LTS)</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/8">
                <div className="text-[10px] text-slate-400 dark:text-zinc-500">FRAMEWORK</div>
                <div className="font-semibold text-slate-900 dark:text-white mt-0.5">Spring Boot 3.4.x</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/8">
                <div className="text-[10px] text-slate-400 dark:text-zinc-500">CONTAINER</div>
                <div className="font-semibold text-slate-900 dark:text-white mt-0.5">Docker Multi-Stage</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/8">
                <div className="text-[10px] text-slate-400 dark:text-zinc-500">CONNECTION POOL</div>
                <div className="font-semibold text-slate-900 dark:text-white mt-0.5">HikariCP (Optimal)</div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Garbage Collector: G1GC • Zero Memory Leak Verification</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="bg-slate-50 dark:bg-white/[0.03] px-4 py-2 border-t border-slate-100 dark:border-white/8 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-[#00a6f4] dark:text-[#00d9ff]" />
          <span>Stateless REST Protocol</span>
        </span>
        <span className="text-slate-400 dark:text-zinc-500">Phnom Penh, KH</span>
      </div>
    </div>
  );
}
