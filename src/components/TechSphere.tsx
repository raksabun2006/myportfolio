"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback, useSyncExternalStore } from "react";
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
import { Play, Pause, RotateCcw } from "lucide-react";

export interface SkillItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
  orbitRadius?: number;
}

export const REAL_SKILLS: SkillItem[] = [
  // Primary Core Surface Nodes (Enterprise Core)
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

  // Outer Satellite Nodes
  { id: "tailwind", name: "Tailwind CSS", icon: TailwindIcon, color: "#38bdf8", category: "Styling", orbitRadius: 1.22 },
  { id: "linux", name: "Linux / Cloud", icon: MicroservicesIcon, color: "#f59e0b", category: "DevOps", orbitRadius: 1.25 },
  { id: "sysdesign", name: "System Design", icon: RestApiIcon, color: "#a78bfa", category: "Architecture", orbitRadius: 1.22 },
  { id: "php", name: "PHP / OOP", icon: PhpIcon, color: "#818cf8", category: "Backend", orbitRadius: 1.24 },
  { id: "laravel", name: "Laravel", icon: LaravelIcon, color: "#ef4444", category: "Backend", orbitRadius: 1.25 },
  { id: "mysql", name: "MySQL", icon: MySqlIcon, color: "#0ea5e9", category: "Database", orbitRadius: 1.23 },
  { id: "ccna", name: "CCNA Networks", icon: RestApiIcon, color: "#38bdf8", category: "Network", orbitRadius: 1.24 },
];

const INITIAL_ROTATION = { x: 0.22, y: 0.38 };

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getReducedMotionServerSnapshot = () => false;

export default function TechSphere() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Responsive sizing configuration
  const [dimensions, setDimensions] = useState(() => {
    if (typeof window === "undefined") {
      return { size: 540, radius: 180, perspective: 520, isMobile: false, isSmallMobile: false };
    }
    const w = window.innerWidth;
    if (w < 360) return { size: 260, radius: 82, perspective: 310, isMobile: true, isSmallMobile: true };
    if (w < 440) return { size: 300, radius: 98, perspective: 350, isMobile: true, isSmallMobile: true };
    if (w < 640) return { size: 340, radius: 112, perspective: 400, isMobile: true, isSmallMobile: false };
    if (w < 1024) return { size: 450, radius: 150, perspective: 480, isMobile: false, isSmallMobile: false };
    return { size: 560, radius: 185, perspective: 540, isMobile: false, isSmallMobile: false };
  });

  const [rotation, setRotation] = useState(INITIAL_ROTATION);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const lastPos = useRef({ x: 0, y: 0 });
  const touchStartPos = useRef({ x: 0, y: 0 });
  const isHorizontalTouch = useRef<boolean | null>(null);
  const velocity = useRef({ x: 0, y: 0.0022 });

  // Handle window resizing cleanly
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 360) {
        setDimensions({ size: 260, radius: 82, perspective: 310, isMobile: true, isSmallMobile: true });
      } else if (w < 440) {
        setDimensions({ size: 300, radius: 98, perspective: 350, isMobile: true, isSmallMobile: true });
      } else if (w < 640) {
        setDimensions({ size: 340, radius: 112, perspective: 400, isMobile: true, isSmallMobile: false });
      } else if (w < 1024) {
        setDimensions({ size: 450, radius: 150, perspective: 480, isMobile: false, isSmallMobile: false });
      } else {
        setDimensions({ size: 560, radius: 185, perspective: 540, isMobile: false, isSmallMobile: false });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { size, radius: baseRadius, perspective, isMobile, isSmallMobile } = dimensions;

  // Fibonacci Spiral Lattice 3D coordinates based on dynamic baseRadius
  const nodes = useMemo(() => {
    const N = REAL_SKILLS.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    return REAL_SKILLS.map((skill, i) => {
      const yNorm = 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - yNorm * yNorm));
      const theta = i * goldenRatio * Math.PI * 2;

      // Restrain satellite radius expansion on mobile devices to prevent chip edge clipping
      const expansion = isMobile ? 1 + ((skill.orbitRadius || 1.0) - 1) * 0.6 : skill.orbitRadius || 1.0;
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

  // Deterministic star dust particles
  const particles = useMemo(() => {
    const count = isMobile ? 16 : 28;
    const pts = [];
    for (let i = 0; i < count; i++) {
      const p1 = Math.abs(Math.sin((i + 1) * 12.9898)) % 1;
      const p2 = Math.abs(Math.sin((i + 1) * 78.233)) % 1;
      const p3 = Math.abs(Math.sin((i + 1) * 45.164)) % 1;
      const rFactor = 1.1 + p1 * 0.35;
      const theta = p2 * Math.PI * 2;
      const phi = (p3 - 0.5) * Math.PI;

      pts.push({
        rFactor,
        theta,
        phi,
        size: p1 * 1.4 + 0.7,
        alpha: p2 * 0.35 + 0.12,
      });
    }
    return pts;
  }, [isMobile]);

  // Auto-spin animation loop
  useEffect(() => {
    if (reducedMotion || isPaused) return;

    let animId: number;

    const tick = () => {
      if (!isDragging) {
        const speed = hoveredSkill ? 0.25 : 1;
        setRotation((prev) => ({
          x: Math.max(-0.6, Math.min(0.6, prev.x + velocity.current.x * speed)),
          y: prev.y + velocity.current.y * speed,
        }));
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, hoveredSkill, isPaused, reducedMotion]);

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

    // Subtle ambient radial core glow
    const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    centerGrad.addColorStop(0, isDark ? "rgba(0, 217, 255, 0.16)" : "rgba(0, 180, 216, 0.12)");
    centerGrad.addColorStop(0.6, isDark ? "rgba(0, 217, 255, 0.04)" : "rgba(0, 180, 216, 0.03)");
    centerGrad.addColorStop(1, "rgba(0, 217, 255, 0)");
    ctx.fillStyle = centerGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    // Outer silhouette border
    ctx.strokeStyle = isDark ? "rgba(0, 217, 255, 0.28)" : "rgba(0, 166, 244, 0.32)";
    ctx.lineWidth = isMobile ? 1 : 1.2;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();

    const frontColor = isDark ? "rgba(0, 217, 255, 0.38)" : "rgba(0, 166, 244, 0.42)";
    const backColor = isDark ? "rgba(0, 217, 255, 0.08)" : "rgba(0, 166, 244, 0.10)";

    // Latitude parallels
    const latitudes = isMobile ? [-50, -25, 0, 25, 50] : [-64, -45, -25, 0, 25, 45, 64];
    const latSteps = isMobile ? 32 : 48;

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
        ctx.lineWidth = isFront ? 0.95 : 0.55;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });

    // Longitude meridians
    const meridians = isMobile
      ? [0, 60, 120, 180, 240, 300]
      : [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    const lonSteps = isMobile ? 30 : 42;

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
        ctx.lineWidth = isFront ? 0.95 : 0.55;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });

    // Subtle star dust particles
    particles.forEach((pt) => {
      const r = R * pt.rFactor;
      const x0 = r * Math.cos(pt.phi) * Math.sin(pt.theta);
      const y0 = r * Math.sin(pt.phi);
      const z0 = r * Math.cos(pt.phi) * Math.cos(pt.theta);

      const proj = project(x0, y0, z0);
      const isFront = proj.z > 0;
      ctx.fillStyle = isDark
        ? `rgba(0, 217, 255, ${isFront ? pt.alpha : pt.alpha * 0.35})`
        : `rgba(0, 166, 244, ${isFront ? pt.alpha * 0.85 : pt.alpha * 0.3})`;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, pt.size * (isFront ? 1.0 : 0.65), 0, Math.PI * 2);
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
      x: Math.max(-0.6, Math.min(0.6, prev.x - deltaY)),
      y: prev.y + deltaX,
    }));

    velocity.current = { x: -deltaY * 0.08, y: deltaX * 0.08 };
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    velocity.current = { x: 0, y: 0.0022 };
    isHorizontalTouch.current = null;
  };

  // Mobile Touch handlers with non-blocking vertical scroll protection
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      isHorizontalTouch.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartPos.current.x;
    const diffY = currentY - touchStartPos.current.y;

    // Detect gesture intention: if moving primarily vertically, allow native page scrolling!
    if (isHorizontalTouch.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalTouch.current = Math.abs(diffX) > Math.abs(diffY);
        if (isHorizontalTouch.current) {
          setIsDragging(true);
        }
      }
    }

    if (isHorizontalTouch.current) {
      const deltaX = (currentX - lastPos.current.x) * 0.006;
      const deltaY = (currentY - lastPos.current.y) * 0.006;

      setRotation((prev) => ({
        x: Math.max(-0.6, Math.min(0.6, prev.x - deltaY)),
        y: prev.y + deltaX,
      }));

      velocity.current = { x: -deltaY * 0.08, y: deltaX * 0.08 };
      lastPos.current = { x: currentX, y: currentY };
    }
  };

  const resetRotation = useCallback(() => {
    setRotation(INITIAL_ROTATION);
    velocity.current = { x: 0, y: 0.0022 };
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

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
      const baseScale = isSmallMobile ? 0.72 : isMobile ? 0.82 : 1.0;
      const scale = Math.max(0.6 * baseScale, Math.min(1.18 * baseScale, k * baseScale));

      const isFront = z2 > -10;

      // Opacity curve optimized for mobile readability
      let opacity = 1;
      if (isMobile) {
        opacity = isFront
          ? Math.min(1, Math.max(0.75, (z2 + baseRadius) / (2 * baseRadius) * 0.5 + 0.5))
          : Math.max(0.15, 0.3 - Math.abs(z2) / (baseRadius * 3.5));
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
  }, [nodes, rotation, perspective, baseRadius, isMobile, isSmallMobile]);

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
        onTouchCancel={handleMouseUp}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: "100%",
          touchAction: "pan-y", // Critical: Allows vertical page scrolling on touch devices!
        }}
        className="relative aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing mx-auto"
        aria-label="3D Interactive Technology Sphere - Drag horizontally to rotate"
      >
        {/* Canvas rendering 3D wireframe World Globe */}
        <canvas
          ref={canvasRef}
          style={{ width: `${size}px`, height: `${size}px` }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* 3D Orbiting Technology Badges */}
        {projectedChips.map((chip) => {
          const Icon = chip.icon;
          const isHovered = hoveredSkill === chip.id;

          return (
            <div
              key={chip.id}
              onMouseEnter={() => setHoveredSkill(chip.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="absolute select-none will-change-transform"
              style={{
                transform: `translate3d(${chip.screenX}px, ${chip.screenY}px, 0px) scale(${
                  isHovered ? chip.scale * 1.15 : chip.scale
                })`,
                opacity: isHovered ? 1 : chip.opacity,
                zIndex: isHovered ? 99999 : chip.zIndex,
                filter: chip.isFront ? "none" : "blur(0.8px)",
                cursor: chip.isFront ? "pointer" : "default",
                pointerEvents: chip.isFront ? "auto" : "none",
              }}
            >
              {/* Responsive capsule pill style: compact on mobile, spacious on desktop */}
              <div
                className={`group flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border transition-all duration-200 ${
                  isHovered
                    ? "bg-[#0b1019] text-white border-[#00d9ff] shadow-[0_0_16px_rgba(0,217,255,0.7)] scale-105"
                    : chip.isFront
                    ? "bg-[#101726]/95 dark:bg-[#0c121e]/95 text-white border-white/20 dark:border-white/15 shadow-[0_4px_14px_rgba(0,0,0,0.35)] backdrop-blur-md hover:border-[#00d9ff]/70"
                    : "bg-[#0f172a]/50 text-zinc-300 border-white/10 backdrop-blur-xs"
                }`}
              >
                <div
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{ color: chip.color }}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-tight text-white whitespace-nowrap">
                  {chip.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sphere Controls & Touch Hint Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-3 text-xs font-mono text-slate-500 dark:text-zinc-400 select-none">
        {/* Drag to rotate hint */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
          <span>Drag horizontally to rotate</span>
        </div>

        {/* Pause / Play Toggle */}
        <button
          type="button"
          onClick={togglePause}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-zinc-300 transition-colors cursor-pointer"
          aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
        >
          {isPaused ? <Play className="w-3 h-3 text-cyan-400" /> : <Pause className="w-3 h-3" />}
          <span>{isPaused ? "Play" : "Pause"}</span>
        </button>

        {/* Reset View */}
        <button
          type="button"
          onClick={resetRotation}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-zinc-300 transition-colors cursor-pointer"
          aria-label="Reset rotation angle"
        >
          <RotateCcw className="w-3 h-3 text-cyan-400" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
