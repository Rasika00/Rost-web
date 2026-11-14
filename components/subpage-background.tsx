"use client";

export function SubpageBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{ transform: "translateZ(0)", willChange: "transform" }}
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* 2. Low-Intensity Dark Ambient Warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_10%,rgba(255,107,0,0.12)_0%,rgba(217,70,0,0.04)_25%,rgba(7,7,7,0.95)_60%,#070707_100%)]" />

      {/* Faint Bottom Horizon Warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_100%,rgba(255,107,0,0.06)_0%,transparent_65%)]" />

      {/* 3. Soft, Low-Opacity Ambient Orange Nebulae */}
      {/* Top-Right Soft Amber Glow */}
      <div className="absolute -top-24 -right-24 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-gradient-to-br from-[#ff6b00]/12 via-transparent to-transparent blur-[70px]" />

      {/* Middle-Left Soft Energy Field */}
      <div className="absolute top-[30%] -left-28 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#ea580c]/10 via-transparent to-transparent blur-[70px]" />

      {/* Bottom-Right Deep Magma Accent */}
      <div className="absolute -bottom-24 right-[8%] w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] rounded-full bg-gradient-to-tl from-[#ff6b00]/10 via-transparent to-transparent blur-[75px]" />

      {/* 4. Stealth Cybernetic Orange Dot Matrix */}
      <div
        className="absolute inset-0 opacity-12 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 122, 26, 0.25) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 5. Fine Stealth Grid Lines */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 107, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 107, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* 6. Floating Smoked Glass Panes with subtle highlights (Optimized for 60fps) */}
      {/* Glass Pane 1 - Top Right */}
      <div className="absolute top-24 right-4 sm:right-20 w-[380px] sm:w-[500px] h-[240px] sm:h-[320px] rounded-3xl bg-gradient-to-br from-[#121212]/80 via-[#0a0a0a]/90 to-[#ff6b00]/[0.02] border border-white/[0.06] shadow-[0_16px_50px_rgba(0,0,0,0.6)] rotate-[-5deg] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/[0.04] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Glass Pane 2 - Middle Left */}
      <div className="absolute top-[42%] -left-10 sm:left-10 w-[340px] sm:w-[460px] h-[220px] sm:h-[280px] rounded-3xl bg-gradient-to-tr from-[#121212]/80 via-[#0a0a0a]/90 to-[#ea580c]/[0.02] border border-white/[0.06] shadow-[0_16px_50px_rgba(0,0,0,0.6)] rotate-[7deg] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ea580c]/[0.04] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Glass Pane 3 - Bottom Right */}
      <div className="absolute bottom-24 right-10 sm:right-32 w-[390px] sm:w-[520px] h-[240px] sm:h-[300px] rounded-3xl bg-gradient-to-tl from-[#121212]/80 via-[#0a0a0a]/90 to-[#ff6b00]/[0.02] border border-white/[0.06] shadow-[0_16px_50px_rgba(0,0,0,0.6)] rotate-[-3deg] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#ff6b00]/[0.04] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 7. Subtle Specular Sheens */}
      <div className="absolute -inset-[100%] rotate-[24deg] bg-gradient-to-r from-transparent via-white/[0.015] to-transparent pointer-events-none" />
    </div>
  );
}
