"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface PageLoaderProps {
  onComplete?: () => void;
  /** Force the loader to play even if seen in this session */
  forceShow?: boolean;
}

export function PageLoader({ onComplete, forceShow = false }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleFinish = useCallback(() => {
    sessionStorage.setItem("rost_boot_complete", "true");
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 600);
  }, [onComplete]);

  // Handle Skip
  const handleSkip = useCallback(() => {
    setProgress(100);
    handleFinish();
  }, [handleFinish]);

  useEffect(() => {
    // Only skip if seen in session AND forceShow is not set
    if (!forceShow) {
      const seen = sessionStorage.getItem("rost_boot_complete");
      if (seen === "true") {
        setIsVisible(false);
        onComplete?.();
        return;
      }
    }

    // Keydown listener for ESC to skip
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Smooth loading progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = prev < 50
          ? Math.floor(Math.random() * 4) + 2
          : prev < 85
          ? Math.floor(Math.random() * 3) + 2
          : Math.floor(Math.random() * 5) + 3;

        const next = Math.min(100, prev + increment);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            handleFinish();
          }, 400);
          return 100;
        }
        return next;
      });
    }, 36);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [forceShow, handleFinish, handleSkip, onComplete]);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Loading ROST Robotics"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between py-8 sm:py-12 px-4 bg-[#070709] select-none overflow-hidden transition-all duration-700 ease-out ${
        isFading ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient background glow & subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle center radial orange aura */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-radial from-[#ff6b00]/15 via-[#ff6b00]/4 to-transparent blur-3xl" />
        
        {/* Subtle cybernetic scanline texture */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* =========================================================================
          TOP: CLEAN ROST BRANDING (MATCHING REFERENCE IMAGE)
          ========================================================================= */}
      <div className="relative z-10 flex items-center justify-center gap-3.5 sm:gap-4 pt-2">
        {/* Stylized ROST Logo Mark */}
        <div className="flex items-center gap-1 font-mono tracking-wider font-black text-2xl sm:text-3xl">
          <span className="text-[#ff6b00] drop-shadow-[0_0_12px_#ff6b00]">RO</span>
          <span className="text-[#e5e5e5] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">ST</span>
        </div>

        {/* Vertical divider */}
        <div className="h-6 sm:h-7 w-px bg-white/20" />

        {/* Full Society Title */}
        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-mono font-extrabold uppercase text-[#ffffff] tracking-[0.2em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Robotic Society
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase text-[#ff7a1a] tracking-[0.25em]">
            Of Technology
          </span>
        </div>
      </div>

      {/* =========================================================================
          CENTER: ANIMATED CYBERNETIC REACTOR CORE (100% VECTOR / CSS ANIMATED)
          ========================================================================= */}
      <div className="relative z-10 flex items-center justify-center my-auto">
        {/* Pulsing Orange Reactor Atmosphere Glow */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-radial from-[#ff6b00]/30 via-[#ff6b00]/8 to-transparent blur-2xl animate-pulse pointer-events-none" />

        {/* Animated Cybernetic Aperture & Concentric Rings */}
        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Neon Glow Filter */}
              <filter id="coreGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="intenseGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Symmetrical Left & Right Circuit Traces */}
            <g opacity="0.6">
              {/* Left Traces */}
              <path
                d="M 50 180 L 100 180 L 120 190"
                stroke="#ff6b00"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 20 200 L 90 200 L 115 200"
                stroke="#ff7a1a"
                strokeWidth="1.75"
              />
              <path
                d="M 40 220 L 95 220 L 120 210"
                stroke="#ff6b00"
                strokeWidth="1.5"
                strokeDasharray="6 3"
              />
              <circle cx="20" cy="200" r="3" fill="#ff6b00" />
              <rect x="47" y="177.5" width="5" height="5" fill="#ff6b00" />
              <circle cx="95" cy="220" r="2.5" fill="#ffffff" />

              {/* Right Traces */}
              <path
                d="M 350 180 L 300 180 L 280 190"
                stroke="#ff6b00"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 380 200 L 310 200 L 285 200"
                stroke="#ff7a1a"
                strokeWidth="1.75"
              />
              <path
                d="M 360 220 L 305 220 L 280 210"
                stroke="#ff6b00"
                strokeWidth="1.5"
                strokeDasharray="6 3"
              />
              <circle cx="380" cy="200" r="3" fill="#ff6b00" />
              <rect x="347" y="177.5" width="5" height="5" fill="#ff6b00" />
              <circle cx="305" cy="220" r="2.5" fill="#ffffff" />
            </g>

            {/* Ring 1: Static Outer Calibration Ring with Corner Reticles */}
            <circle
              cx="200"
              cy="200"
              r="175"
              stroke="#26262b"
              strokeWidth="1.5"
            />
            <circle
              cx="200"
              cy="200"
              r="168"
              stroke="#ff6b00"
              strokeWidth="0.75"
              strokeDasharray="3 15"
              opacity="0.4"
            />

            {/* Ring 2: Outer Segmented Mechanical Gear Track (Rotating Clockwise - 28s) */}
            <g className="animate-orbit-cw origin-center">
              <circle
                cx="200"
                cy="200"
                r="155"
                stroke="#33333d"
                strokeWidth="6"
                strokeDasharray="24 8 48 8 16 12"
              />
              {/* Outer Glowing Energy Nodes */}
              <circle cx="200" cy="45" r="3" fill="#ff6b00" filter="url(#coreGlow)" />
              <circle cx="200" cy="355" r="3" fill="#ff6b00" filter="url(#coreGlow)" />
              <circle cx="45" cy="200" r="3" fill="#ffffff" />
              <circle cx="355" cy="200" r="3" fill="#ffffff" />
            </g>

            {/* Ring 3: Segmented Laser Orange Conduit (Rotating Counter-Clockwise - 16s) */}
            <g className="animate-orbit-ccw origin-center">
              <circle
                cx="200"
                cy="200"
                r="138"
                stroke="#ff7a1a"
                strokeWidth="2.5"
                strokeDasharray="40 20 80 30 15 15"
                filter="url(#coreGlow)"
              />
            </g>

            {/* Ring 4: Heavy Mechanical Segmented Aperture Track (Rotating Clockwise - 20s) */}
            <g className="animate-orbit-cw origin-center">
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="#1f1f24"
                strokeWidth="8"
                strokeDasharray="18 4"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="#ff6b00"
                strokeWidth="1.5"
                strokeDasharray="5 20"
                opacity="0.8"
              />
            </g>

            {/* Ring 5: Inner Plasma Neon Arc (Rotating Counter-Clockwise - 10s) */}
            <g className="animate-orbit-ccw origin-center">
              <circle
                cx="200"
                cy="200"
                r="100"
                stroke="#ff6b00"
                strokeWidth="4"
                strokeDasharray="60 30 120 40"
                filter="url(#intenseGlow)"
              />
            </g>

            {/* Ring 6: Central Titanium Reactor Shell */}
            <circle
              cx="200"
              cy="200"
              r="80"
              fill="#0d0d12"
              stroke="#ff6b00"
              strokeWidth="3"
              filter="url(#coreGlow)"
            />

            {/* Pulsing Core Energy Glow Ring */}
            <circle
              cx="200"
              cy="200"
              r="70"
              fill="none"
              stroke="#ff7a1a"
              strokeWidth="2"
              strokeDasharray="12 6"
              className="animate-pulse"
              opacity="0.75"
            />

            {/* Center ROST Stylized Text Logo */}
            <g className="select-none">
              <text
                x="200"
                y="207"
                textAnchor="middle"
                fontFamily="var(--font-geist-mono), monospace"
                fontSize="24"
                fontWeight="900"
                letterSpacing="3"
                fill="#ffffff"
                filter="url(#coreGlow)"
              >
                <tspan fill="#ff6b00">RO</tspan>
                <tspan fill="#ffffff">ST</tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: CLEAN GLOWING CAPSULE PROGRESS BAR & COUNTER
          ========================================================================= */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm px-4 space-y-3 pb-2">
        {/* Sleek Neon Capsule Loading Bar */}
        <div className="relative w-full h-3 sm:h-3.5 rounded-full bg-black/90 p-0.5 border border-white/20 shadow-[0_0_20px_rgba(255,107,0,0.35)] backdrop-blur-md overflow-hidden">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#121215]">
            {/* Dynamic Smooth Progress Fill */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#cc4400] via-[#ff6b00] to-[#ffaa22] transition-all duration-100 ease-out relative shadow-[0_0_16px_#ff6b00]"
              style={{ width: `${progress}%` }}
            >
              {/* White-Hot Leading Edge Bulb */}
              <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white rounded-full blur-[1px] shadow-[0_0_10px_#ffffff]" />
            </div>
          </div>
        </div>

        {/* LOADING... [XX]% */}
        <div className="flex items-center gap-2 font-mono">
          <span className="text-xs sm:text-sm tracking-[0.25em] font-extrabold text-[#ffffff] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            LOADING...
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-[#ff6b00] tracking-wider drop-shadow-[0_0_10px_#ff6b00]">
            {progress}%
          </span>
        </div>

        {/* Bottom Tagline */}
        <p className="text-[10px] sm:text-[11px] font-mono text-[#737373] tracking-[0.2em] uppercase pt-1 text-center">
          CONNECTING TO THE FUTURE OF TECHNOLOGY...
        </p>

        {/* Skip Button (Subtle & clean) */}
        <button
          type="button"
          onClick={handleSkip}
          className="text-[10px] font-mono text-[#555555] hover:text-[#ff6b00] tracking-wider uppercase pt-1 transition-colors cursor-pointer"
        >
          [ SKIP INTRO &bull; ESC ]
        </button>
      </div>
    </aside>
  );
}
