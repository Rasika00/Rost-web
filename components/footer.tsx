"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Terminal,
  Send,
  Radio,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { SITE_CONFIG } from "@/data/site-data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("INVALID_TELEMETRY: Enter a valid military/academic email address.");
      return;
    }

    setSubscribed(true);
    toast.success("DISPATCH_SUBSCRIBED // Telemetry feed locked to your frequency.", {
      description: `Updates dispatched to ${email}`,
    });
    setEmail("");
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#262626] pt-16 pb-12 overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none" />

      {/* Ambient Orange Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#ff6b00]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Grid: Brand & Affiliation + Dispatch Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#222222]">
          {/* Brand & Lab Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] text-[#ff6b00]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-mono text-xl font-black tracking-widest text-[#fafafa]">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c] text-[#ff6b00] border border-[#ff6b00]/30 font-bold uppercase">
                {SITE_CONFIG.status.season}
              </span>
            </div>

            <p className="text-sm font-sans text-[#a3a3a3] max-w-lg leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            {/* University & Facility Coordinates */}
            <div className="p-3.5 rounded-xl bg-[#121212] border border-[#262626] max-w-lg space-y-1.5 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#fafafa] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#ff6b00]" />
                <span>{SITE_CONFIG.affiliation.faculty}</span>
              </div>
              <div className="text-[#737373] text-[11px]">
                {SITE_CONFIG.affiliation.lab} • {SITE_CONFIG.affiliation.university}
              </div>
              <div className="text-[#ff7a1a] text-[10px]">
                COORDS: {SITE_CONFIG.affiliation.coordinates}
              </div>
            </div>
          </div>

          {/* Firmware Dispatch Newsletter Form */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#ff6b00]" />
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#fafafa] font-bold">
                // JOIN THE FIRMWARE DISPATCH
              </h3>
            </div>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Receive direct technical logs, tournament match recordings, CAD releases, and open hardware recruitment calls directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@institution.edu"
                  className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] text-xs font-mono text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors pr-32"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-4 py-2 rounded-lg bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] cursor-pointer"
                >
                  <span>Connect</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-2 text-xs font-mono text-[#22c55e]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to telemetry frequency.</span>
                </div>
              )}
            </form>

            {/* Quick Social Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {Object.entries(SITE_CONFIG.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#171717] hover:bg-[#202020] border border-[#262626] hover:border-[#ff6b00]/50 text-[11px] font-mono text-[#a3a3a3] hover:text-[#fafafa] uppercase transition-colors flex items-center gap-1"
                >
                  <span>{name}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#ff6b00]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Quick Directory */}
        <div className="py-6 border-b border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span className="text-[11px] font-mono text-[#737373] tracking-widest uppercase">
              // SITEMAP INDEX:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono">
            {SITE_CONFIG.navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#a3a3a3] hover:text-[#ff7a1a] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Sponsor Tier Showcase */}
        <div className="py-8 border-b border-[#222222]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono text-[#737373] tracking-widest uppercase">
              // INDUSTRY SPONSORS & HARDWARE PARTNERS
            </span>
            <Link
              href="/contact"
              className="text-[11px] font-mono text-[#ff6b00] hover:underline"
            >
              Partner with ROST &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SITE_CONFIG.sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="p-3 rounded-lg bg-[#121212]/80 border border-[#222222] hover:border-[#ff6b00]/40 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-[#fafafa] truncate">
                  {sponsor.name}
                </div>
                <div className="text-[10px] font-mono text-[#ff7a1a]">
                  {sponsor.tier}
                </div>
                <div className="text-[9px] text-[#737373] truncate mt-1">
                  {sponsor.perk}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Live Telemetry Ticker */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737373]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span>
              STATUS: {SITE_CONFIG.status.state} // {SITE_CONFIG.status.coreClock} //{" "}
              {SITE_CONFIG.status.activeFirmware}
            </span>
          </div>

          <div>
            © 2026 {SITE_CONFIG.fullName}. All Mechatronics Systems Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
