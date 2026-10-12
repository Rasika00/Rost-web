"use client";

export function SubpageBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* 2. Low-Intensity Dark Ambient Warmth (Mostly Black with subtle orange undertone) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_10%,rgba(255,107,0,0.14)_0%,rgba(217,70,0,0.05)_25%,rgba(7,7,7,0.95)_60%,#070707_100%)]" />

      {/* Faint Bottom Horizon Warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_100%,rgba(255,107,0,0.08)_0%,transparent_65%)]" />

      {/* 3. Soft, Low-Opacity Ambient Orange Nebulae (Subtle rim accents, not overpowering) */}
      {/* Top-Right Soft Amber Glow */}
      <div className="absolute -top-24 -right-24 w-[520px] sm:w-[680px] h-[520px] sm:h-[680px] rounded-full bg-gradient-to-br from-[#ff6b00]/16 via-transparent to-transparent blur-[120px]" />

      {/* Middle-Left Soft Energy Field */}
      <div className="absolute top-[30%] -left-28 w-[450px] sm:w-[580px] h-[450px] sm:h-[580px] rounded-full bg-gradient-to-tr from-[#ea580c]/13 via-transparent to-transparent blur-[125px]" />

      {/* Bottom-Right Deep Magma Accent */}
      <div className="absolute -bottom-24 right-[8%] w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full bg-gradient-to-tl from-[#ff6b00]/13 via-transparent to-transparent blur-[130px]" />

      {/* 4. Stealth Cybernetic Orange Dot Matrix (Subtle tactical watermark) */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 122, 26, 0.3) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 5. Fine Stealth Grid Lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 107, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 107, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 6. Floating Smoked Glass Panes with subtle highlights */}
      {/* Glass Pane 1 - Top Right */}
      <div className="absolute top-24 right-4 sm:right-20 w-[380px] sm:w-[500px] h-[240px] sm:h-[320px] rounded-3xl bg-gradient-to-br from-white/[0.04] via-black/40 to-[#ff6b00]/[0.03] border border-white/[0.08] shadow-[0_16px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl rotate-[-5deg] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/[0.06] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Glass Pane 2 - Middle Left */}
      <div className="absolute top-[42%] -left-10 sm:left-10 w-[340px] sm:w-[460px] h-[220px] sm:h-[280px] rounded-3xl bg-gradient-to-tr from-white/[0.04] via-black/40 to-[#ea580c]/[0.03] border border-white/[0.08] shadow-[0_16px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl rotate-[7deg] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ea580c]/[0.06] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Glass Pane 3 - Bottom Right */}
      <div className="absolute bottom-24 right-10 sm:right-32 w-[390px] sm:w-[520px] h-[240px] sm:h-[300px] rounded-3xl bg-gradient-to-tl from-white/[0.04] via-black/40 to-[#ff6b00]/[0.03] border border-white/[0.08] shadow-[0_16px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl rotate-[-3deg] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#ff6b00]/[0.05] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 7. Subtle Specular Sheens */}
      <div className="absolute -inset-[100%] rotate-[24deg] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
    </div>
  );
}
