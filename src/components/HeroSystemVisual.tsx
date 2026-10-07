"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Activity, Server, Database, Play, CheckCircle2, Zap } from "lucide-react";

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
    <div className="w-full rounded-2xl border border-zinc-200/90 bg-white shadow-xs overflow-hidden transition-all hover:shadow-md hover:border-zinc-300">
      {/* Top Window Bar */}
      <div className="bg-zinc-50/90 px-4 py-3 border-b border-zinc-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          </div>
          <span className="text-zinc-300 font-mono text-xs">|</span>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-600">
            <Terminal className="w-3.5 h-3.5 text-zinc-700" />
            <span className="font-medium">spring-boot-runtime.local</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/70 text-[10px] font-mono text-emerald-700 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>200 OK • {pingLatency}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-2.5 border-b border-zinc-100 flex items-center justify-between bg-white text-xs">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("traffic")}
            className={`px-3 py-1.5 font-mono text-xs rounded-t-md transition-colors border-b-2 cursor-pointer ${
              activeTab === "traffic"
                ? "border-zinc-950 text-zinc-950 font-semibold"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            Live Traffic
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("nodes")}
            className={`px-3 py-1.5 font-mono text-xs rounded-t-md transition-colors border-b-2 cursor-pointer ${
              activeTab === "nodes"
                ? "border-zinc-950 text-zinc-950 font-semibold"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            System Topology
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("runtime")}
            className={`px-3 py-1.5 font-mono text-xs rounded-t-md transition-colors border-b-2 cursor-pointer ${
              activeTab === "runtime"
                ? "border-zinc-950 text-zinc-950 font-semibold"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
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
            className="mb-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-mono font-medium transition-colors cursor-pointer disabled:opacity-50"
          >
            <Play className={`w-2.5 h-2.5 ${isSimulating ? "animate-spin" : ""}`} />
            <span>Send Request</span>
          </button>
        )}
      </div>

      {/* Body Content */}
      <div className="p-4 bg-white min-h-[200px]">
        {activeTab === "traffic" && (
          <div className="space-y-2 font-mono text-[11px]">
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider flex items-center justify-between pb-1 border-b border-zinc-100">
              <span>Timestamp & Method</span>
              <span>Endpoint & Source</span>
            </div>
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between py-1.5 px-2 rounded-md bg-zinc-50/60 border border-zinc-100 hover:bg-zinc-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 text-[10px]">{log.time}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                      log.method === "POST"
                        ? "bg-blue-50 text-blue-700 border border-blue-200/50"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                    }`}
                  >
                    {log.method}
                  </span>
                  <span className="text-zinc-800 font-medium truncate max-w-[140px] sm:max-w-[190px]">
                    {log.path}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-zinc-500 text-[10px] hidden sm:inline">{log.source}</span>
                  <span className="text-emerald-600 font-semibold">{log.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "nodes" && (
          <div className="py-2 space-y-3">
            <div className="text-xs text-zinc-500 font-mono mb-2">
              Stateless API Gateway & Relational Data Layer
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">Gateway</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-zinc-900 mt-1">Traefik / Edge Proxy</div>
                <div className="text-[10px] font-mono text-zinc-500 mt-0.5">TLS, Rate Limit, CORS</div>
              </div>

              <div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">Core Service</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-zinc-900 mt-1">Spring Boot 3.4</div>
                <div className="text-[10px] font-mono text-zinc-500 mt-0.5">REST API, JWT & RBAC</div>
              </div>

              <div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">Data Tier</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-zinc-900 mt-1">PostgreSQL 16</div>
                <div className="text-[10px] font-mono text-zinc-500 mt-0.5">ACID, JPA & Indexes</div>
              </div>

              <div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">Cache / Broker</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-bold text-zinc-900 mt-1">Redis 7.2</div>
                <div className="text-[10px] font-mono text-zinc-500 mt-0.5">Locks, Session & Hits</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "runtime" && (
          <div className="py-2 space-y-2.5">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                <div className="text-[10px] text-zinc-400">JVM RUNTIME</div>
                <div className="font-semibold text-zinc-900 mt-0.5">Eclipse Temurin 21 (LTS)</div>
              </div>
              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                <div className="text-[10px] text-zinc-400">FRAMEWORK</div>
                <div className="font-semibold text-zinc-900 mt-0.5">Spring Boot 3.4.x</div>
              </div>
              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                <div className="text-[10px] text-zinc-400">CONTAINER</div>
                <div className="font-semibold text-zinc-900 mt-0.5">Docker Multi-Stage</div>
              </div>
              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                <div className="text-[10px] text-zinc-400">CONNECTION POOL</div>
                <div className="font-semibold text-zinc-900 mt-0.5">HikariCP (Optimal)</div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Garbage Collector: G1GC • Zero Memory Leak Verification</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="bg-zinc-50/60 px-4 py-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-zinc-700" />
          <span>Stateless REST Protocol</span>
        </span>
        <span className="text-zinc-400">Phnom Penh, KH</span>
      </div>
    </div>
  );
}
