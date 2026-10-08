"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Cpu,
  Shield,
  Zap,
  Activity,
  GitBranch,
  ExternalLink,
  Award,
  Terminal,
  Layers,
  Thermometer,
  Gauge,
  Radio,
} from "lucide-react";
import { Bot } from "@/data/bot-data";
import { soundFx } from "@/lib/sound";

interface BotDetailModalProps {
  bot: Bot | null;
  onClose: () => void;
}

export function BotDetailModal({ bot, onClose }: BotDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (bot) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [bot, onClose]);

  if (!bot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#121212] border border-[#ff6b00]/40 rounded-2xl shadow-[0_0_50px_rgba(255,107,0,0.25)] overflow-hidden">
        {/* Modal Header HUD Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#0d0d0d]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#171717] border border-[#ff6b00]/30 text-[#ff6b00]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-base sm:text-lg font-black tracking-wider text-[#fafafa]">
                  {bot.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c] text-[#ff7a1a] border border-[#ff6b00]/30 font-bold uppercase">
                  {bot.codename}
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#737373] flex items-center gap-2">
                <span>{bot.weightClass}</span>
                <span>•</span>
                <span className="text-[#22c55e]">{bot.telemetry.sensorHealth}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playTelemetryClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#ff6b00] transition-colors"
            aria-label="Close Inspection Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual & Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 relative rounded-xl overflow-hidden border border-[#262626] bg-[#0d0d0d] aspect-video">
              <Image
                src={bot.image}
                alt={bot.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
              
              {/* Corner crosshairs on image */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-[#ff6b00] bg-[#080808]/80 px-2 py-0.5 rounded border border-[#ff6b00]/30 backdrop-blur-sm">
                LIVE_TELEMETRY // {bot.specs.weight}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#fafafa] bg-[#0d0d0d]/85 p-2 rounded-lg border border-[#262626] backdrop-blur-md">
                <span className="text-[#a3a3a3]">{bot.tagline}</span>
              </div>
            </div>

            {/* Quick Live Telemetry Dashboard */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-3">
              <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] font-bold">
                  <Activity className="w-4 h-4" />
                  <span>ONBOARD TELEMETRY</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-[#0d0d0d] border border-[#222222]">
                    <div className="text-[10px] text-[#737373]">BUS VOLTAGE</div>
                    <div className="text-[#fafafa] font-bold">{bot.telemetry.batteryVoltage}</div>
                  </div>
                  <div className="p-2 rounded bg-[#0d0d0d] border border-[#222222]">
                    <div className="text-[10px] text-[#737373]">CURRENT DRAW</div>
                    <div className="text-[#ff7a1a] font-bold">{bot.telemetry.operatingCurrent}</div>
                  </div>
                  <div className="p-2 rounded bg-[#0d0d0d] border border-[#222222]">
                    <div className="text-[10px] text-[#737373]">ESC TEMP</div>
                    <div className="text-[#22c55e] font-bold">{bot.telemetry.escTemp}</div>
                  </div>
                  <div className="p-2 rounded bg-[#0d0d0d] border border-[#222222]">
                    <div className="text-[10px] text-[#737373]">LATENCY</div>
                    <div className="text-[#fafafa] font-bold">{bot.telemetry.latencyMs} ms</div>
                  </div>
                </div>
              </div>

              {/* Battle Record / Championship Badges */}
              {bot.battleRecord && (
                <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#ff6b00] font-bold flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>ARENA RECORD</span>
                    </span>
                    <span className="text-[#fafafa] font-bold">
                      {bot.battleRecord.wins}W - {bot.battleRecord.losses}L
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-[#737373] space-y-1">
                    {bot.battleRecord.titles.map((title, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[#ff7a1a]">
                        <span>★</span>
                        <span>{title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Firmware Repository Link */}
              <a
                href={bot.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playTelemetryClick()}
                className="w-full py-2.5 px-4 rounded-xl bg-[#171717] hover:bg-[#202020] border border-[#ff6b00]/30 hover:border-[#ff6b00] text-xs font-mono text-[#fafafa] flex items-center justify-center gap-2 transition-all"
              >
                <GitBranch className="w-4 h-4 text-[#ff6b00]" />
                <span>Firmware & CAD Repository</span>
                <ExternalLink className="w-3 h-3 text-[#737373]" />
              </a>
            </div>
          </div>

          {/* Full Narrative Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              // ARCHITECTURAL OVERVIEW
            </h4>
            <p className="text-sm font-sans text-[#a3a3a3] leading-relaxed">
              {bot.fullOverview}
            </p>
          </div>

          {/* Detailed Engineering Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              // HARDWARE SUBSYSTEM SPECIFICATIONS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#0d0d0d] border border-[#222222] space-y-1">
                <span className="text-[10px] text-[#737373] uppercase">DRIVE TRAIN</span>
                <p className="text-[#fafafa] font-semibold">{bot.specs.driveTrain}</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d0d0d] border border-[#222222] space-y-1">
                <span className="text-[10px] text-[#737373] uppercase">WEAPON / MANIPULATOR</span>
                <p className="text-[#fafafa] font-semibold">{bot.specs.weaponOrActuator}</p>
                {bot.specs.weaponRPM && (
                  <p className="text-[11px] text-[#ff7a1a]">{bot.specs.weaponRPM}</p>
                )}
              </div>
              <div className="p-3 rounded-lg bg-[#0d0d0d] border border-[#222222] space-y-1">
                <span className="text-[10px] text-[#737373] uppercase">MICROCONTROLLER & BUS</span>
                <p className="text-[#fafafa] font-semibold">{bot.specs.microcontroller}</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d0d0d] border border-[#222222] space-y-1">
                <span className="text-[10px] text-[#737373] uppercase">EDGE COMPUTE PLATFORM</span>
                <p className="text-[#fafafa] font-semibold">{bot.specs.computePlatform}</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d0d0d] border border-[#222222] space-y-1">
                <span className="text-[10px] text-[#737373] uppercase">POWER SYSTEM</span>
                <p className="text-[#fafafa] font-semibold">{bot.specs.powerSource}</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d0d0d] border border-[#222222] space-y-1">
                <span className="text-[10px] text-[#737373] uppercase">FIRMWARE OS</span>
                <p className="text-[#fafafa] font-semibold">{bot.specs.firmware}</p>
              </div>
            </div>
          </div>

          {/* Sensor Layout Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              // SENSOR INTEGRATION
            </h4>
            <div className="flex flex-wrap gap-2">
              {bot.specs.sensors.map((sensor, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#a3a3a3]"
                >
                  {sensor}
                </span>
              ))}
            </div>
          </div>

          {/* CAD Preview Blueprint Notes */}
          <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#ff6b00]/20 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff7a1a]">
              <Layers className="w-4 h-4" />
              <span>CAD BLUEPRINT SPECIFICATION</span>
            </div>
            <p className="text-xs font-mono text-[#a3a3a3]">{bot.cadPreview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
