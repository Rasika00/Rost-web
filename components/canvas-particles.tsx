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
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });

    let particles: Particle[] = [];
    // Lightweight count: max 28 particles on desktop, 14 on mobile
    const count = Math.min(Math.max(Math.floor((width * height) / 45000), 12), 28);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const isOrange = Math.random() > 0.45;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: isOrange ? Math.random() * 2 + 1.2 : Math.random() * 1.5 + 1,
          color: isOrange ? "#ff6b00" : "#737373",
          baseAlpha: isOrange ? 0.65 : 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        initParticles();
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // IntersectionObserver to pause loop entirely when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            render();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let frame = 0;
    const maxDist = 110;

    const render = () => {
      if (!isVisible) return;
      frame++;
      ctx.clearRect(0, 0, width, height);

      const pLen = particles.length;

      // Draw connections
      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        if (mouse.x > 0) {
          const dxMouse = mouse.x - p1.x;
          const dyMouse = mouse.y - p1.y;
          if (Math.abs(dxMouse) < mouse.radius && Math.abs(dyMouse) < mouse.radius) {
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            if (distMouse < mouse.radius) {
              const force = (1 - distMouse / mouse.radius) * 0.5;
              p1.x += (dxMouse / distMouse) * force;
              p1.y += (dyMouse / distMouse) * force;
            }
          }
        }

        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          // Quick bounding box check avoids expensive Math.sqrt in 90% of cases
          if (Math.abs(dx) > maxDist || Math.abs(dy) > maxDist) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            const isOrangeLine = p1.color === "#ff6b00" || p2.color === "#ff6b00";
            ctx.beginPath();
            ctx.strokeStyle = isOrangeLine
              ? `rgba(255, 107, 0, ${alpha})`
              : `rgba(115, 115, 115, ${alpha * 0.6})`;
            ctx.lineWidth = 0.75;
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
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity: 0.85, transform: "translateZ(0)", willChange: "transform" }}
    />
  );
}
