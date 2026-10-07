"use client";

import React, { useEffect, useRef } from "react";

export default function CosmicSpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angleOffset = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 700;
      canvas.height = canvas.parentElement?.clientHeight || 700;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const totalPoints = 320;

      // Draw logarithmic / archimedean spiral particle arms
      for (let arm = 0; arm < 2; arm++) {
        const armOffset = (arm * Math.PI);

        for (let i = 0; i < totalPoints; i++) {
          const t = i / totalPoints;
          const theta = t * 6 * Math.PI + angleOffset + armOffset;
          const radius = Math.pow(t, 1.25) * (Math.min(centerX, centerY) * 0.95);

          const x = centerX + radius * Math.cos(theta);
          const y = centerY + radius * Math.sin(theta);

          // Dot size and opacity based on distance from center
          const size = Math.max(0.6, t * 2.2);
          const alpha = Math.min(0.7, (1 - t * 0.7) * (0.15 + t * 0.55));

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 217, 255, ${alpha})`;
          ctx.fill();
        }
      }

      // Center glowing orb
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 70);
      gradient.addColorStop(0, "rgba(0, 217, 255, 0.45)");
      gradient.addColorStop(0.5, "rgba(0, 217, 255, 0.15)");
      gradient.addColorStop(1, "rgba(0, 217, 255, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Slow ambient cosmic rotation
      angleOffset += 0.0018;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-70 dark:opacity-85">
      <canvas ref={canvasRef} className="w-full h-full max-w-[750px] max-h-[750px]" />
    </div>
  );
}
