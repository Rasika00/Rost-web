"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Crosshair,
  GitBranch,
  ExternalLink,
  Shield,
  Activity,
  Cpu,
  Filter,
} from "lucide-react";
import { BOT_FLEET, Bot } from "@/data/bot-data";
import { BotDetailModal } from "@/components/bot-detail-modal";
import { ScrollReveal } from "@/components/scroll-reveal";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialBotId = searchParams.get("bot");

  const [selectedDivision, setSelectedDivision] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBot, setActiveBot] = useState<Bot | null>(null);

  useEffect(() => {
    if (initialBotId) {
      const found = BOT_FLEET.find((b) => b.id === initialBotId);
      if (found) setActiveBot(found);
    }
  }, [initialBotId]);

  const divisions = [
    "All",
    "Combat Bots",
    "Autonomous Rovers",
    "Robotic Arms",
    "Bipeds & Humanoids",
    "Drones & UAVs",
  ];

  const filteredBots = useMemo(() => {
    return BOT_FLEET.filter((bot) => {
      const matchesDivision =
        selectedDivision === "All" || bot.division === selectedDivision;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesDivision;

      const matchesQuery =
        bot.name.toLowerCase().includes(q) ||
        bot.codename.toLowerCase().includes(q) ||
        bot.description.toLowerCase().includes(q) ||
        bot.tags.some((t) => t.toLowerCase().includes(q)) ||
        bot.specs.microcontroller.toLowerCase().includes(q) ||
        bot.specs.computePlatform.toLowerCase().includes(q) ||
        bot.specs.sensors.some((s) => s.toLowerCase().includes(q));

      return matchesDivision && matchesQuery;
    });
  }, [selectedDivision, searchQuery]);

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <ScrollReveal direction="down" duration={0.65}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a]">
              <span>// FLEET ARSENAL & HARDWARE REPOSITORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
              Active Bot Fleet & Mechatronics
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              Inspect our operational hardware fleet. Every platform is designed, CNC milled, and programmed in-house
              with real-time telemetry, open-source firmware, and competitive combat records.
            </p>
          </div>
        </ScrollReveal>

        {/* Tactical Search & Filter Control Bar */}
        <ScrollReveal direction="up" delay={100} duration={0.6}>
          <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-[#121212] border border-[#262626] backdrop-blur-md">
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-[#737373]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by bot callsign, microcontroller, sensor (e.g. LiDAR, Jetson, STM32, Hardox)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#262626] text-xs font-mono text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors"
              />
            </div>

            {/* Division Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-mono text-[#737373] mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#ff6b00]" />
                <span>DIVISION:</span>
              </span>

              {divisions.map((div) => {
                const isActive = selectedDivision === div;
                return (
                  <button
                    key={div}
                    onClick={() => {
                      setSelectedDivision(div);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#ff6b00] text-[#080808] font-bold shadow-[0_0_15px_rgba(255,107,0,0.35)]"
                        : "bg-[#171717] text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#202020] border border-[#262626]"
                    }`}
                  >
                    {div}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-[#737373] px-2">
          <span>
            SHOWING <strong className="text-[#ff6b00]">{filteredBots.length}</strong> ACTIVE HARDWARE PLATFORMS
          </span>
          <span>ROST-FLEET-DB v2026.4</span>
        </div>

        {/* Bot Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBots.map((bot, idx) => (
            <ScrollReveal
              key={bot.id}
              delay={idx * 75}
              direction="up"
              duration={0.6}
              className="h-full flex"
            >
              <div className="w-full group relative rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] hover:-translate-y-1">
                {/* Image Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={bot.image}
                    alt={bot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-[#080808]/90 text-[#ff6b00] border border-[#ff6b00]/30 font-semibold backdrop-blur-sm">
                    {bot.weightClass}
                  </div>

                  <div className="absolute top-3 right-3 text-[9px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c]/90 text-[#22c55e] border border-[#22c55e]/30 font-bold">
                    {bot.status}
                  </div>
                </div>

                {/* Bot Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-xl font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                        {bot.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#737373]">
                        {bot.codename}
                      </span>
                    </div>

                    <p className="text-xs text-[#a3a3a3] line-clamp-2 leading-relaxed">
                      {bot.description}
                    </p>
                  </div>

                  {/* Specs Highlights */}
                  <div className="p-3 rounded-xl bg-[#0d0d0d] border border-[#222222] space-y-1 font-mono text-xs">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#737373]">MICROCONTROLLER:</span>
                      <span className="text-[#fafafa] truncate max-w-[160px]">
                        {bot.specs.microcontroller}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#737373]">BATTERY BUS:</span>
                      <span className="text-[#ff7a1a]">
                        {bot.telemetry.batteryVoltage}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {bot.tags.slice(0, 3).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#262626] text-[#737373]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <button
                    onClick={() => {
                      setActiveBot(bot);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#171717] hover:bg-[#ff6b00] text-[#fafafa] hover:text-[#080808] border border-[#262626] hover:border-[#ff6b00] text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Subsystems</span>
                    <Crosshair className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty Search Result State */}
        {filteredBots.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#121212] border border-[#262626] space-y-3 font-mono">
            <div className="text-[#ff6b00] text-xl font-bold">NO_HARDWARE_FOUND</div>
            <p className="text-xs text-[#737373]">
              No fleet platforms match query &ldquo;{searchQuery}&rdquo; under division &ldquo;{selectedDivision}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDivision("All");
              }}
              className="text-xs text-[#ff7a1a] hover:underline"
            >
              Reset filters &rarr;
            </button>
          </div>
        )}
      </div>

      <BotDetailModal bot={activeBot} onClose={() => setActiveBot(null)} />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[#ff6b00]">LOADING_FLEET_TELEMETRY...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
