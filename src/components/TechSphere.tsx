"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  JavaIcon,
  SpringIcon,
  ReactIcon,
  TypeScriptIcon,
  PostgresIcon,
  RedisIcon,
  DockerIcon,
  GitIcon,
  GithubIcon,
  RestApiIcon,
  MicroservicesIcon,
  NextjsIcon,
  PhpIcon,
  LaravelIcon,
  MySqlIcon,
  TailwindIcon,
} from "./Icons";
import { useTheme } from "@/context/ThemeContext";

interface SkillItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
  orbitRadius?: number; // 1.0 for sphere surface, 1.2-1.3 for outer orbital envelope
}

// Bun Raksa's 100% Real, Verified Engineering Skills Only
const REAL_SKILLS: SkillItem[] = [
  // Core Surface Nodes (Primary Enterprise & Full-Stack Engine)
  { id: "java", name: "Java 21", icon: JavaIcon, color: "#f87171", category: "Backend", orbitRadius: 1.0 },
  { id: "spring", name: "Spring Boot 3", icon: SpringIcon, color: "#4ade80", category: "Backend", orbitRadius: 1.0 },
  { id: "postgres", name: "PostgreSQL", icon: PostgresIcon, color: "#60a5fa", category: "Database", orbitRadius: 1.0 },
  { id: "docker", name: "Docker", icon: DockerIcon, color: "#38bdf8", category: "DevOps", orbitRadius: 1.0 },
  { id: "nextjs", name: "Next.js", icon: NextjsIcon, color: "#ffffff", category: "Frontend", orbitRadius: 1.0 },
  { id: "react", name: "React", icon: ReactIcon, color: "#00d9ff", category: "Frontend", orbitRadius: 1.0 },
  { id: "ts", name: "TypeScript", icon: TypeScriptIcon, color: "#38bdf8", category: "Frontend", orbitRadius: 1.0 },
  { id: "redis", name: "Redis", icon: RedisIcon, color: "#ef4444", category: "Cache", orbitRadius: 1.0 },
  { id: "rest", name: "REST APIs", icon: RestApiIcon, color: "#a78bfa", category: "Backend", orbitRadius: 1.0 },
  { id: "micro", name: "Microservices", icon: MicroservicesIcon, color: "#f59e0b", category: "Architecture", orbitRadius: 1.0 },
  { id: "keycloak", name: "Keycloak", icon: RestApiIcon, color: "#f97316", category: "Security", orbitRadius: 1.05 },
  { id: "github", name: "GitHub", icon: GithubIcon, color: "#ffffff", category: "VCS", orbitRadius: 1.08 },
  { id: "git", name: "Git", icon: GitIcon, color: "#f97316", category: "VCS", orbitRadius: 1.0 },
  { id: "cicd", name: "CI / CD", icon: DockerIcon, color: "#10b981", category: "DevOps", orbitRadius: 1.02 },

  // Outer Satellite Envelope Nodes (Extended Real Stack: ETEC, Cisco CCNA, Cloud)
  { id: "tailwind", name: "Tailwind CSS", icon: TailwindIcon, color: "#38bdf8", category: "Styling", orbitRadius: 1.25 },
  { id: "linux", name: "Linux / Cloud", icon: MicroservicesIcon, color: "#f59e0b", category: "DevOps", orbitRadius: 1.28 },
  { id: "sysdesign", name: "System Design", icon: RestApiIcon, color: "#a78bfa", category: "Architecture", orbitRadius: 1.24 },
  { id: "php", name: "PHP / OOP", icon: PhpIcon, color: "#818cf8", category: "Backend", orbitRadius: 1.26 },
  { id: "laravel", name: "Laravel", icon: LaravelIcon, color: "#ef4444", category: "Backend", orbitRadius: 1.28 },
  { id: "mysql", name: "MySQL", icon: MySqlIcon, color: "#0ea5e9", category: "Database", orbitRadius: 1.25 },
  { id: "ccna", name: "CCNA Networks", icon: RestApiIcon, color: "#38bdf8", category: "Network", orbitRadius: 1.27 },
];

const BASE_RADIUS = 205; // Base radius of the wireframe World Globe in px
const PERSPECTIVE = 540; // Camera perspective distance

export default function TechSphere() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initial tilt matching the real Earth axial tilt (23.5°)
  const [rotation, setRotation] = useState({ x: 0.22, y: 0.38 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0.0028 });

  // 3D Spherical Distribution using Fibonacci Spiral Lattice
  const nodes = useMemo(() => {
    const N = REAL_SKILLS.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    return REAL_SKILLS.map((skill, i) => {
      // Latitude Y from 1 to -1
      const yNorm = 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - yNorm * yNorm));
      const theta = i * goldenRatio * Math.PI * 2;

      const r = BASE_RADIUS * (skill.orbitRadius || 1.0);

      const xNorm = Math.cos(theta) * radiusAtY;
      const zNorm = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        baseX: xNorm * r,
        baseY: -yNorm * r,
        baseZ: zNorm * r,
      };
    });
  }, []);

  // Ambient micro-particles floating in the cosmos surrounding the globe
  const particles = useMemo(() => {
    const count = 36;
    const pts = [];
    for (let i = 0; i < count; i++) {
      const radius = BASE_RADIUS * (1.15 + Math.random() * 0.7);
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      pts.push({
        x: radius * Math.cos(phi) * Math.sin(theta),
        y: radius * Math.sin(phi),
        z: radius * Math.cos(phi) * Math.cos(theta),
        size: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.45 + 0.15,
      });
    }
    return pts;
  }, []);

  // Continuous auto-spin animation loop
  useEffect(() => {
    let animId: number;

    const tick = () => {
      if (!isDragging) {
        const speed = hoveredSkill ? 0.2 : 1;
        setRotation((prev) => ({
          x: Math.max(-0.65, Math.min(0.65, prev.x + velocity.current.x * speed)),
          y: prev.y + velocity.current.y * speed,
        }));
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, hoveredSkill]);

  // Canvas rendering of authentic 3D World Globe wireframe (parallels, meridians, poles, particles)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const R = BASE_RADIUS;

    ctx.clearRect(0, 0, width, height);

    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);

    const project = (x0: number, y0: number, z0: number) => {
      // Rotate Y (axial spin)
      const x1 = x0 * cosY + z0 * sinY;
      const y1 = y0;
      const z1 = -x0 * sinY + z0 * cosY;
      // Rotate X (polar tilt)
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const k = PERSPECTIVE / (PERSPECTIVE - z2);
      return {
        x: cx + x2 * k,
        y: cy + y2 * k,
        z: z2,
        k,
      };
    };

    // 0. Ambient Center Radiant Light / Glow
    const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    centerGrad.addColorStop(0, isDark ? "rgba(0, 217, 255, 0.20)" : "rgba(0, 180, 216, 0.16)");
    centerGrad.addColorStop(0.45, isDark ? "rgba(0, 217, 255, 0.06)" : "rgba(0, 180, 216, 0.05)");
    centerGrad.addColorStop(1, "rgba(0, 217, 255, 0)");
    ctx.fillStyle = centerGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    // 1. Globe Outer Silhouette Ring
    ctx.strokeStyle = isDark ? "rgba(0, 217, 255, 0.30)" : "rgba(0, 166, 244, 0.38)";
    ctx.lineWidth = 1.25;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();

    const frontColor = isDark ? "rgba(0, 217, 255, 0.44)" : "rgba(0, 166, 244, 0.48)";
    const backColor = isDark ? "rgba(0, 217, 255, 0.10)" : "rgba(0, 166, 244, 0.12)";

    // 2. Latitude Circles (Earth Parallels)
    const latitudes = [-68, -50, -32, -15, 0, 15, 32, 50, 68];
    const latSteps = 64;

    latitudes.forEach((latDeg) => {
      const latRad = (latDeg * Math.PI) / 180;
      const r = R * Math.cos(latRad);
      const y0 = -R * Math.sin(latRad);

      for (let i = 0; i < latSteps; i++) {
        const theta1 = (i / latSteps) * Math.PI * 2;
        const theta2 = ((i + 1) / latSteps) * Math.PI * 2;

        const p1 = project(r * Math.sin(theta1), y0, r * Math.cos(theta1));
        const p2 = project(r * Math.sin(theta2), y0, r * Math.cos(theta2));

        const isFront = p1.z > 0 || p2.z > 0;
        ctx.strokeStyle = isFront ? frontColor : backColor;
        ctx.lineWidth = isFront ? 1.15 : 0.7;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });

    // 3. Longitude Circles (Earth Meridians converging at Poles)
    const meridians = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];
    const lonSteps = 48;

    meridians.forEach((lonDeg) => {
      const lonRad = (lonDeg * Math.PI) / 180;

      for (let i = 0; i < lonSteps; i++) {
        const phi1 = -Math.PI / 2 + (i / lonSteps) * Math.PI;
        const phi2 = -Math.PI / 2 + ((i + 1) / lonSteps) * Math.PI;

        const p1 = project(
          R * Math.cos(phi1) * Math.sin(lonRad),
          -R * Math.sin(phi1),
          R * Math.cos(phi1) * Math.cos(lonRad)
        );
        const p2 = project(
          R * Math.cos(phi2) * Math.sin(lonRad),
          -R * Math.sin(phi2),
          R * Math.cos(phi2) * Math.cos(lonRad)
        );

        const isFront = p1.z > 0 || p2.z > 0;
        ctx.strokeStyle = isFront ? frontColor : backColor;
        ctx.lineWidth = isFront ? 1.15 : 0.7;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });

    // 4. North & South Pole Pins
    const northPole = project(0, -R, 0);
    const southPole = project(0, R, 0);

    [northPole, southPole].forEach((pole) => {
      const isFront = pole.z > 0;
      ctx.fillStyle = isFront
        ? isDark
          ? "#00d9ff"
          : "#00a6f4"
        : isDark
        ? "rgba(0, 217, 255, 0.3)"
        : "rgba(0, 166, 244, 0.3)";
      ctx.beginPath();
      ctx.arc(pole.x, pole.y, isFront ? 3.5 : 2, 0, Math.PI * 2);
      ctx.fill();

      if (isFront) {
        ctx.strokeStyle = isDark ? "rgba(0, 217, 255, 0.6)" : "rgba(0, 166, 244, 0.6)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pole.x, pole.y, 7, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    // 5. Ambient Micro-particles floating around the cosmos
    particles.forEach((pt) => {
      const proj = project(pt.x, pt.y, pt.z);
      const isFront = proj.z > 0;
      ctx.fillStyle = isDark
        ? `rgba(0, 217, 255, ${isFront ? pt.alpha : pt.alpha * 0.4})`
        : `rgba(0, 166, 244, ${isFront ? pt.alpha * 0.9 : pt.alpha * 0.35})`;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, pt.size * (isFront ? 1.1 : 0.8), 0, Math.PI * 2);
      ctx.fill();
    });
  }, [rotation, isDark, particles]);

  // Interactive mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - lastMousePos.current.x) * 0.005;
    const deltaY = (e.clientY - lastMousePos.current.y) * 0.005;

    setRotation((prev) => ({
      x: Math.max(-0.65, Math.min(0.65, prev.x - deltaY)),
      y: prev.y + deltaX,
    }));

    velocity.current = { x: -deltaY * 0.1, y: deltaX * 0.1 };
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    velocity.current = { x: 0, y: 0.0028 };
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = (e.touches[0].clientX - lastMousePos.current.x) * 0.006;
    const deltaY = (e.touches[0].clientY - lastMousePos.current.y) * 0.006;

    setRotation((prev) => ({
      x: Math.max(-0.65, Math.min(0.65, prev.x - deltaY)),
      y: prev.y + deltaX,
    }));

    velocity.current = { x: -deltaY * 0.1, y: deltaX * 0.1 };
    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  // Projected 3D positions of technology chips on the globe
  const projectedChips = useMemo(() => {
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);

    return nodes.map((node) => {
      // Y-axis rotation
      const x1 = node.baseX * cosY + node.baseZ * sinY;
      const y1 = node.baseY;
      const z1 = -node.baseX * sinY + node.baseZ * cosY;

      // X-axis rotation
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const k = PERSPECTIVE / (PERSPECTIVE - z2);
      const screenX = x2 * k;
      const screenY = y2 * k;
      const scale = Math.max(0.65, Math.min(1.25, k));
      const isFront = z2 > -10;
      const opacity = isFront
        ? Math.min(1, Math.max(0.85, (z2 + BASE_RADIUS) / (2 * BASE_RADIUS) * 0.45 + 0.55))
        : Math.max(0.24, 0.38 - Math.abs(z2) / (BASE_RADIUS * 3.5));
      const zIndex = Math.round(z2 + BASE_RADIUS * 2);

      return {
        ...node,
        screenX,
        screenY,
        scale,
        opacity,
        zIndex,
        isFront,
      };
    });
  }, [nodes, rotation]);

  return (
    <div className="relative w-full flex flex-col items-center select-none py-2">
      {/* 3D World Globe Interactive Stage */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        className="relative w-[340px] sm:w-[500px] lg:w-[620px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* Canvas rendering the authentic 3D wireframe World Globe (Parallels & Meridians) */}
        <canvas
          ref={canvasRef}
          width={620}
          height={620}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Concentric Radar Target Pulse + Specular Glassy Bubble (Exact match to top-left of screenshot) */}
        <div className="absolute top-12 left-10 sm:top-16 sm:left-16 flex items-center gap-3 pointer-events-none z-20">
          {/* Cyan Concentric Radar Target */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Outer faint ring */}
            <div className="absolute inset-0 rounded-full border border-[#00a6f4]/40 dark:border-[#00d9ff]/35 animate-ping opacity-60" />
            {/* Mid ring */}
            <div className="absolute w-6 h-6 rounded-full border border-[#00a6f4]/70 dark:border-[#00d9ff]/60" />
            {/* Center solid neon dot */}
            <div className="w-2 h-2 rounded-full bg-[#00a6f4] dark:bg-[#00d9ff] shadow-[0_0_8px_#00a6f4] dark:shadow-[0_0_8px_#00d9ff]" />
          </div>

          {/* Floating Specular Glass Bubble Orb */}
          <div
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/40 dark:border-white/30 backdrop-blur-md shadow-lg"
            style={{
              background: isDark
                ? "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.28) 0%, rgba(0, 217, 255, 0.10) 45%, rgba(15, 23, 42, 0.65) 100%)"
                : "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(0, 180, 216, 0.16) 45%, rgba(255, 255, 255, 0.45) 100%)",
              boxShadow: "inset 0 1px 3px rgba(255,255,255,0.7), 0 8px 24px rgba(0,180,216,0.2)",
            }}
          >
            {/* Top-left specular highlight reflection shine */}
            <div className="absolute top-2 left-2.5 w-3.5 h-1.5 rounded-full bg-white/80 filter blur-[0.6px] -rotate-30" />
          </div>
        </div>

        {/* 3D Orbiting Technology Badges (Bun Raksa's 100% Real Stack Only) */}
        {projectedChips.map((chip) => {
          const Icon = chip.icon;
          const isHovered = hoveredSkill === chip.id;

          return (
            <div
              key={chip.id}
              onMouseEnter={() => setHoveredSkill(chip.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="absolute transition-all duration-75 select-none will-change-transform"
              style={{
                transform: `translate3d(${chip.screenX}px, ${chip.screenY}px, 0px) scale(${
                  isHovered ? chip.scale * 1.25 : chip.scale
                })`,
                opacity: isHovered ? 1 : chip.opacity,
                zIndex: isHovered ? 99999 : chip.zIndex,
                filter: chip.isFront ? "none" : "blur(1.1px)",
                cursor: chip.isFront ? "pointer" : "default",
              }}
            >
              {/* Authentic dark capsule pill style */}
              <div
                className={`group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border transition-all duration-200 ${
                  isHovered
                    ? "bg-[#0b1019] text-white border-[#00d9ff] shadow-[0_0_24px_rgba(0,217,255,0.75)] scale-110"
                    : chip.isFront
                    ? "bg-[#101726]/95 dark:bg-[#0c121e]/95 text-white border-white/20 dark:border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md hover:border-[#00d9ff]/70"
                    : "bg-[#0f172a]/45 text-zinc-300 border-white/10 backdrop-blur-xs"
                }`}
              >
                <div
                  className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0"
                  style={{ color: chip.color }}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-115" />
                </div>
                <span className="text-xs font-sans font-semibold tracking-tight text-white whitespace-nowrap">
                  {chip.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Drag to Rotate Hint (Exact match to screenshot at bottom center) */}
      <div className="flex items-center gap-2 mt-1 text-xs font-mono text-slate-400 dark:text-zinc-500 select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#00a6f4] dark:text-[#00d9ff] animate-spin"
          style={{ animationDuration: "12s" }}
        >
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
        <span className="tracking-wider">Drag to rotate</span>
      </div>
    </div>
  );
}
