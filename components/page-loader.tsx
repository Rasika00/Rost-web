"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/site-data";

export function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const seen = sessionStorage.getItem("rost_boot_complete");
    if (seen === "true") {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          sessionStorage.setItem("rost_boot_complete", "true");
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              setIsVisible(false);
              onComplete?.();
            }, 400);
          }, 200);
          return 100;
        }
        return next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient Radial Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-b from-[#ff6b00]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Hero Logo Highlight */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        <div className="relative flex items-center justify-center">
          {/* Pulsing Aura */}
          <div className="absolute w-36 h-36 sm:w-44 sm:h-44 bg-[#ff6b00]/25 rounded-full blur-2xl animate-pulse pointer-events-none" />

          {/* Large Highlighted Logo */}
          <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
            <Image
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              width={128}
              height={128}
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,107,0,0.7)]"
              priority
            />
          </div>
        </div>

        {/* Minimal Clean Loading Bar */}
        <div className="w-48 sm:w-56 space-y-2">
          <div className="w-full h-1 bg-[#171717] rounded-full overflow-hidden border border-[#262626]">
            <div
              className="h-full bg-gradient-to-r from-[#cc5500] via-[#ff6b00] to-[#ffa040] rounded-full transition-all duration-75 relative shadow-[0_0_12px_#ff6b00]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#737373] tracking-widest uppercase">LOADING</span>
            <span className="text-[#ff7a1a] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
