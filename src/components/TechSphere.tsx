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
  orbitRadius?: number; // 1.0 for sphere surface, 1.2-1.28 for outer orbital envelope
}

// Bun Raksa's 100% Real, Verified Engineering Skills
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

  // Outer Satellite Envelope Nodes
  { id: "tailwind", name: "Tailwind CSS", icon: TailwindIcon, color: "#38bdf8", category: "Styling", orbitRadius: 1.22 },
  { id: "linux", name: "Linux / Cloud", icon: MicroservicesIcon, color: "#f59e0b", category: "DevOps", orbitRadius: 1.25 },
  { id: "sysdesign", name: "System Design", icon: RestApiIcon, color: "#a78bfa", category: "Architecture", orbitRadius: 1.22 },
  { id: "php", name: "PHP / OOP", icon: PhpIcon, color: "#818cf8", category: "Backend", orbitRadius: 1.24 },
  { id: "laravel", name: "Laravel", icon: LaravelIcon, color: "#ef4444", category: "Backend", orbitRadius: 1.25 },
  { id: "mysql", name: "MySQL", icon: MySqlIcon, color: "#0ea5e9", category: "Database", orbitRadius: 1.23 },
  { id: "ccna", name: "CCNA Networks", icon: RestApiIcon, color: "#38bdf8", category: "Network", orbitRadius: 1.24 },
];

export default function TechSphere() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Responsive dimensions state
  const [dimensions, setDimensions] = useState(() => {
    if (typeof window === "undefined") {
      return { size: 580, radius: 190, perspective: 520, isMobile: false };
    }
    const w = window.innerWidth;
    if (w < 400) return { size: 320, radius: 96, perspective: 340, isMobile: true };
    if (w < 640) return { size: 360, radius: 112, perspective: 380, isMobile: true };
    if (w < 1024) return { size: 480, radius: 155, perspective: 460, isMobile: false };
    return { size: 600, radius: 195, perspective: 540, isMobile: false };
  });

  // Axial tilt matching Earth's tilt (~23.5°)
  const [rotation, setRotation] = useState({ x: 0.22, y: 0.38 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0.0024 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 400) {
        setDimensions({ size: 320, radius: 96, perspective: 340, isMobile: true });
      } else if (w < 640) {
        setDimensions({ size: 360, radius: 112, perspective: 380, isMobile: true });
      } else if (w < 1024) {
        setDimensions({ size: 480, radius: 155, perspective: 460, isMobile: false });
      } else {
        setDimensions({ size: 600, radius: 195, perspective: 540, isMobile: false });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { size, radius: baseRadius, perspective, isMobile } = dimensions;

  // Fibonacci Spiral Lattice 3D coordinates based on dynamic baseRadius
  const nodes = useMemo(() => {
    const N = REAL_SKILLS.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    return REAL_SKILLS.map((skill, i) => {
      const yNorm = 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - yNorm * yNorm));
      const theta = i * goldenRatio * Math.PI * 2;

      // Outer satellite nodes have slightly reduced orbit expansion on mobile to prevent overflow
      const expansion = isMobile ? 1 + ((skill.orbitRadius || 1.0) - 1) * 0.75 : skill.orbitRadius || 1.0;
      const r = baseRadius * expansion;

      const xNorm = Math.cos(theta) * radiusAtY;
      const zNorm = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        baseX: xNorm * r,
        baseY: -yNorm * r,
        baseZ: zNorm * r,
      };
    });
  }, [baseRadius, isMobile]);

  // Deterministic micro-particles (pure, zero Math.random render warnings)
  const particles = useMemo(() => {
    const count = 28;
    const pts = [];
    for (let i = 0; i < count; i++) {
      const p1 = Math.abs(Math.sin((i + 1) * 12.9898)) % 1;
      const p2 = Math.abs(Math.sin((i + 1) * 78.233)) % 1;
      const p3 = Math.abs(Math.sin((i + 1) * 45.164)) % 1;
      const rFactor = 1.12 + p1 * 0.45;
      const theta = p2 * Math.PI * 2;
      const phi = (p3 - 0.5) * Math.PI;

      pts.push({
        rFactor,
        theta,
        phi,
        size: p1 * 1.5 + 0.8,
        alpha: p2 * 0.35 + 0.15,
      });
    }
    return pts;
  }, []);

  // Auto-spin loop
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

  // Canvas render: 3D wireframe globe matching current responsive size and radius
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = baseRadius;

    ctx.clearRect(0, 0, size, size);

    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);

    const project = (x0: number, y0: number, z0: number) => {
      const x1 = x0 * cosY + z0 * sinY;
      const y1 = y0;
      const z1 = -x0 * sinY + z0 * cosY;

      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const k = perspective / (perspective - z2);
      return {
        x: cx + x2 * k,
        y: cy + y2 * k,
        z: z2,
        k,
      };
    };

    // Ambient radial glow
    const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    centerGrad.addColorStop(0, isDark ? "rgba(0, 217, 255, 0.20)" : "rgba(0, 180, 216, 0.16)");
    centerGrad.addColorStop(0.5, isDark ? "rgba(0, 217, 255, 0.05)" : "rgba(0, 180, 216, 0.04)");
    centerGrad.addColorStop(1, "rgba(0, 217, 255, 0)");
    ctx.fillStyle = centerGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    // Outer silhouette ring
    ctx.strokeStyle = isDark ? "rgba(0, 217, 255, 0.32)" : "rgba(0, 166, 244, 0.38)";
    ctx.lineWidth = isMobile ? 1 : 1.25;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();

    const frontColor = isDark ? "rgba(0, 217, 255, 0.44)" : "rgba(0, 166, 244, 0.48)";
    const backColor = isDark ? "rgba(0, 217, 255, 0.10)" : "rgba(0, 166, 244, 0.12)";

    // Latitude parallels
    const latitudes = isMobile ? [-60, -35, 0, 35, 60] : [-68, -50, -32, -15, 0, 15, 32, 50, 68];
    const latSteps = isMobile ? 40 : 56;

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
        ctx.lineWidth = isFront ? 1.05 : 0.6;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });

    // Longitude meridians
    const meridians = isMobile
      ? [0, 45, 90, 135, 180, 225, 270, 315]
      : [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];
    const lonSteps = isMobile ? 36 : 48;

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
        ctx.lineWidth = isFront ? 1.05 : 0.6;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });

    // Poles
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
      ctx.arc(pole.x, pole.y, isFront ? 3 : 1.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Micro-particles
    particles.forEach((pt) => {
      const r = R * pt.rFactor;
      const x0 = r * Math.cos(pt.phi) * Math.sin(pt.theta);
      const y0 = r * Math.sin(pt.phi);
      const z0 = r * Math.cos(pt.phi) * Math.cos(pt.theta);

      const proj = project(x0, y0, z0);
      const isFront = proj.z > 0;
      ctx.fillStyle = isDark
        ? `rgba(0, 217, 255, ${isFront ? pt.alpha : pt.alpha * 0.4})`
        : `rgba(0, 166, 244, ${isFront ? pt.alpha * 0.9 : pt.alpha * 0.35})`;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, pt.size * (isFront ? 1.0 : 0.7), 0, Math.PI * 2);
      ctx.fill();
    });
  }, [rotation, isDark, particles, size, baseRadius, perspective, isMobile]);

  // Mouse interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - lastPos.current.x) * 0.005;
    const deltaY = (e.clientY - lastPos.current.y) * 0.005;

    setRotation((prev) => ({
      x: Math.max(-0.65, Math.min(0.65, prev.x - deltaY)),
      y: prev.y + deltaX,
    }));

    velocity.current = { x: -deltaY * 0.1, y: deltaX * 0.1 };
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    velocity.current = { x: 0, y: 0.0024 };
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = (e.touches[0].clientX - lastPos.current.x) * 0.006;
    const deltaY = (e.touches[0].clientY - lastPos.current.y) * 0.006;

    setRotation((prev) => ({
      x: Math.max(-0.65, Math.min(0.65, prev.x - deltaY)),
      y: prev.y + deltaX,
    }));

    velocity.current = { x: -deltaY * 0.1, y: deltaX * 0.1 };
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  // Projected 3D positions of technology chips on the globe
  const projectedChips = useMemo(() => {
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);

    return nodes.map((node) => {
      const x1 = node.baseX * cosY + node.baseZ * sinY;
      const y1 = node.baseY;
      const z1 = -node.baseX * sinY + node.baseZ * cosY;

      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const k = perspective / (perspective - z2);
      const screenX = x2 * k;
      const screenY = y2 * k;
      const baseScale = isMobile ? 0.8 : 1.0;
      const scale = Math.max(0.65 * baseScale, Math.min(1.2 * baseScale, k * baseScale));

      const isFront = z2 > -15;

      // Smoother fading for mobile to keep the stage uncluttered
      let opacity = 1;
      if (isMobile) {
        opacity = isFront
          ? Math.min(1, Math.max(0.7, (z2 + baseRadius) / (2 * baseRadius) * 0.5 + 0.5))
          : Math.max(0.12, 0.25 - Math.abs(z2) / (baseRadius * 3.5));
      } else {
        opacity = isFront
          ? Math.min(1, Math.max(0.85, (z2 + baseRadius) / (2 * baseRadius) * 0.45 + 0.55))
          : Math.max(0.24, 0.38 - Math.abs(z2) / (baseRadius * 3.5));
      }

      const zIndex = Math.round(z2 + baseRadius * 2);

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
  }, [nodes, rotation, perspective, baseRadius, isMobile]);

  return (
    <div className="relative w-full flex flex-col items-center select-none py-2 overflow-hidden">
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
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: "100%",
          touchAction: "none",
        }}
        className="relative aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing mx-auto"
        aria-label="3D Interactive Technology Sphere - Drag to rotate"
      >
        {/* Canvas rendering the authentic 3D wireframe World Globe */}
        <canvas
          ref={canvasRef}
          style={{ width: `${size}px`, height: `${size}px` }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Concentric Radar Target Pulse + Specular Glass Bubble (Cleanly hidden on mobile to avoid overlap) */}
        <div className="hidden sm:flex absolute sm:top-10 sm:left-10 lg:top-14 lg:left-14 items-center gap-3 pointer-events-none z-20">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[#00a6f4]/40 dark:border-[#00d9ff]/35 animate-ping opacity-60" />
            <div className="absolute w-5 h-5 rounded-full border border-[#00a6f4]/70 dark:border-[#00d9ff]/60" />
            <div className="w-2 h-2 rounded-full bg-[#00a6f4] dark:bg-[#00d9ff] shadow-[0_0_8px_#00a6f4] dark:shadow-[0_0_8px_#00d9ff]" />
          </div>

          <div
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/40 dark:border-white/30 backdrop-blur-md shadow-lg"
            style={{
              background: isDark
                ? "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.28) 0%, rgba(0, 217, 255, 0.10) 45%, rgba(15, 23, 42, 0.65) 100%)"
                : "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(0, 180, 216, 0.16) 45%, rgba(255, 255, 255, 0.45) 100%)",
              boxShadow: "inset 0 1px 3px rgba(255,255,255,0.7), 0 8px 24px rgba(0,180,216,0.2)",
            }}
          >
            <div className="absolute top-1.5 left-2 w-3 h-1.5 rounded-full bg-white/80 filter blur-[0.6px] -rotate-30" />
          </div>
        </div>

        {/* 3D Orbiting Technology Badges (100% responsive, zero clipping) */}
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
                  isHovered ? chip.scale * 1.2 : chip.scale
                })`,
                opacity: isHovered ? 1 : chip.opacity,
                zIndex: isHovered ? 99999 : chip.zIndex,
                filter: chip.isFront ? "none" : "blur(1.1px)",
                cursor: chip.isFront ? "pointer" : "default",
              }}
            >
              {/* Responsive capsule pill style: compact on mobile, spacious on desktop */}
              <div
                className={`group flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border transition-all duration-200 ${
                  isHovered
                    ? "bg-[#0b1019] text-white border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.75)] scale-105"
                    : chip.isFront
                    ? "bg-[#101726]/95 dark:bg-[#0c121e]/95 text-white border-white/20 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md hover:border-[#00d9ff]/70"
                    : "bg-[#0f172a]/45 text-zinc-300 border-white/10 backdrop-blur-xs"
                }`}
              >
                <div
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{ color: chip.color }}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-115" />
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-tight text-white whitespace-nowrap">
                  {chip.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Drag to rotate hint */}
      <div className="flex items-center gap-2 mt-4 text-xs font-mono text-slate-400 dark:text-zinc-500 select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
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
