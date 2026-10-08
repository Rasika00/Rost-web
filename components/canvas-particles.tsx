"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseAlpha: number;
  pulsePhase: number;
}

export function CanvasParticles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    let particles: Particle[] = [];
    const count = Math.min(Math.floor((width * height) / 14000), 85);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const isOrange = Math.random() > 0.45;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: isOrange ? Math.random() * 2.2 + 1.2 : Math.random() * 1.8 + 1,
          color: isOrange ? "#ff6b00" : "#737373",
          baseAlpha: isOrange ? 0.7 : 0.35,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw faint circuit matrix lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Magnet attraction to mouse
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.8;
          p1.x += (dxMouse / distMouse) * force;
          p1.y += (dyMouse / distMouse) * force;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            const isOrangeLine = p1.color === "#ff6b00" || p2.color === "#ff6b00";
            ctx.beginPath();
            ctx.strokeStyle = isOrangeLine
              ? `rgba(255, 107, 0, ${alpha * 0.9})`
              : `rgba(115, 115, 115, ${alpha * 0.5})`;
            ctx.lineWidth = isOrangeLine ? 0.9 : 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        const pulse = Math.sin(frame * 0.03 + p1.pulsePhase) * 0.2;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size + pulse, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = Math.max(0.1, p1.baseAlpha + pulse);
        ctx.fill();

        // Extra halo for orange nodes
        if (p1.color === "#ff6b00") {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 107, 0, 0.15)";
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
}
