"use client";

import React, { useEffect, useRef, useState } from "react";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  duration?: number; // seconds
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  distance?: number; // px
  threshold?: number;
  once?: boolean;
  blur?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  direction = "up",
  distance = 52,
  threshold = 0.05,
  once = true,
  blur = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Trigger reveal as element enters comfortable viewing zone
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Compute hidden transform matching exact 3D matrix structure for GPU acceleration
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale3d(0.96, 0.96, 1)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale3d(0.96, 0.96, 1)`;
      case "left":
        return `translate3d(${distance}px, 0, 0) scale3d(0.96, 0.96, 1)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0) scale3d(0.96, 0.96, 1)`;
      case "scale":
        return "translate3d(0, 28px, 0) scale3d(0.90, 0.90, 1)";
      case "fade":
      default:
        return "translate3d(0, 0, 0) scale3d(1, 1, 1)";
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translate3d(0, 0, 0) scale3d(1, 1, 1)"
      : getInitialTransform(),
    filter: isVisible ? "blur(0px)" : blur ? "blur(8px)" : "none",
    transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "transform, opacity, filter",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
