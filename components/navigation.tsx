"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Cpu,
  Bot,
  Zap,
  Radio,
  Menu,
  X,
  Volume2,
  VolumeX,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";
import { soundFx } from "@/lib/sound";

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFx.enabled = next;
    if (next) soundFx.playLaserBlip();
  };

  const handleLinkClick = () => {
    soundFx.playLaserBlip();
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-6xl rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
            scrolled
              ? "bg-[#0d0d0d]/90 border-[#ff6b00]/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              : "bg-[#0d0d0d]/75 border-[#262626] shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
          }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
            {/* Brand Logo & Telemetry Status */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#141414] border border-[#262626] group-hover:border-[#ff6b00] transition-colors overflow-hidden">
                <Cpu className="w-5 h-5 text-[#ff6b00] group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-lg font-black tracking-widest text-[#fafafa] group-hover:text-glow-orange transition-all">
                    ROST
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1c1c1c] text-[#ff7a1a] border border-[#ff6b00]/20">
                    MK-26
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-[#a3a3a3] uppercase">
                    {SITE_CONFIG.status.state}
                  </span>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {SITE_CONFIG.navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/projects" && pathname === "/project");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => soundFx.playLaserBlip()}
                    className={`relative px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-lg flex items-center gap-1.5 group ${
                      isActive
                        ? "text-[#fafafa] font-bold bg-[#171717]"
                        : "text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#141414]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-[#ff6b00]/15 text-[#ff7a1a] border border-[#ff6b00]/30 font-semibold">
                        {item.badge}
                      </span>
                    )}

                    {/* Active Laser Underline Indicator */}
                    {isActive ? (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#ff6b00] shadow-[0_0_10px_#ff6b00] rounded-full" />
                    ) : (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-transparent group-hover:bg-[#ff6b00]/50 transition-colors rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Cluster: Audio FX Toggle + Arena CTA + Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sound Effects Toggle Button */}
              <button
                type="button"
                onClick={toggleSound}
                title={soundEnabled ? "Tactical Audio: Active" : "Tactical Audio: Muted"}
                className={`p-2 rounded-lg border transition-colors ${
                  soundEnabled
                    ? "bg-[#171717] border-[#ff6b00]/40 text-[#ff7a1a] hover:border-[#ff6b00]"
                    : "bg-[#121212] border-[#262626] text-[#737373] hover:text-[#a3a3a3]"
                }`}
                aria-label="Toggle Sound"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              {/* Enter Arena CTA Button */}
              <Link
                href="/events"
                onClick={handleLinkClick}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#080808] bg-[#ff6b00] hover:bg-[#ffa040] rounded-lg transition-all shadow-[0_0_15px_rgba(255,107,0,0.35)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Arena Access</span>
              </Link>

              {/* Mobile Drawer Hamburger Button */}
              <button
                type="button"
                onClick={() => {
                  soundFx.playTelemetryClick();
                  setMobileOpen(!mobileOpen);
                }}
                className="lg:hidden p-2 rounded-lg bg-[#141414] border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors"
                aria-label="Open Navigation Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#080808]/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 justify-between animate-in fade-in duration-200">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262626]">
              <span className="text-xs font-mono text-[#737373] tracking-widest uppercase">
                // TELEMETRY_NAV_INDEX
              </span>
              <span className="text-xs font-mono text-[#ff6b00]">SYS: ACTIVE</span>
            </div>

            {SITE_CONFIG.navItems.map((item, idx) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/projects" && pathname === "/project");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-sm font-mono tracking-wider transition-all ${
                    isActive
                      ? "bg-[#141414] border-[#ff6b00] text-[#ff7a1a] shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                      : "bg-[#0d0d0d] border-[#222222] text-[#fafafa] hover:border-[#333333]"
                  }`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#737373]">0{idx + 1}</span>
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#ff6b00]/15 text-[#ff7a1a] border border-[#ff6b00]/30 font-semibold">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-[#737373]" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Footer Quick Actions */}
          <div className="space-y-4 pt-6 border-t border-[#262626]">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/projects"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141414] border border-[#262626] text-xs font-mono text-[#fafafa] hover:border-[#ff6b00]"
              >
                <Bot className="w-4 h-4 text-[#ff6b00]" />
                <span>Bot Fleet</span>
              </Link>
              <Link
                href="/events"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff6b00] text-[#080808] font-bold text-xs font-mono uppercase shadow-[0_0_20px_rgba(255,107,0,0.35)]"
              >
                <Zap className="w-4 h-4" />
                <span>Arena</span>
              </Link>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#737373] px-1">
              <span>{SITE_CONFIG.affiliation.faculty}</span>
              <span className="text-[#ff6b00]">ROST-RTOS v4.2</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
