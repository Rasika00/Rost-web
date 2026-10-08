"use client";

import { useState, useEffect } from "react";
import { soundFx } from "@/lib/sound";

export function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hexAddress, setHexAddress] = useState("0x7FF_A09");
  const [statusLog, setStatusLog] = useState("CALIBRATING_CAN_BUS");
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

    soundFx.playBootHum();

    const hexPool = [
      "0x7FF_A09",
      "0x802_D41",
      "0x10A_B99",
      "0x4F0_EC2",
      "0x9A1_22F",
      "0x3B8_EE1",
      "0xDF4_008",
      "0x700_FOC",
    ];

    const logs = [
      "ESTABLISHING_DDS_ROUTER",
      "SYNCHRONIZING_50KHZ_FOC",
      "WARMING_LIVOX_POINT_CLOUD",
      "ARMING_WEAPON_FAILSAFE",
      "SUBSYSTEM_TELEMETRY_ONLINE",
      "SYS_READY_FOR_ENGAGEMENT",
    ];

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
            }, 500);
          }, 350);
          return 100;
        }

        const logIndex = Math.min(Math.floor((next / 100) * logs.length), logs.length - 1);
        setStatusLog(logs[logIndex]);
        setHexAddress(hexPool[Math.floor(Math.random() * hexPool.length)]);
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-grid-dense opacity-30 pointer-events-none" />

      {/* Sweeping Laser Line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent animate-laser-sweep opacity-75 shadow-[0_0_20px_#ff6b00]" />
      </div>

      {/* Cockpit HUD Crosshair Corners */}
      <div className="relative flex flex-col items-center justify-center p-12 border border-[#262626] bg-[#0d0d0d]/90 backdrop-blur-md rounded-xl max-w-md w-[90%] shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        {/* Corner Brackets */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#ff6b00]" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#ff6b00]" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#ff6b00]" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#ff6b00]" />

        {/* Orbiting Concentric Calibration Rings */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 border-2 border-dashed border-[#ff6b00]/40 rounded-full animate-orbit-cw" />
          {/* Middle ring with ticks */}
          <div className="absolute inset-3 border border-[#737373]/50 rounded-full animate-orbit-ccw border-t-[#ff6b00]" />
          {/* Inner ring */}
          <div className="absolute inset-6 border border-dotted border-[#ff6b00]/60 rounded-full animate-orbit-cw" />

          {/* Central ROST Glowing Emblem */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="font-mono text-2xl font-black tracking-widest text-[#fafafa] drop-shadow-[0_0_12px_#ff6b00]">
              ROST
            </span>
            <span className="text-[9px] tracking-[0.25em] font-mono text-[#ff6b00] uppercase font-bold">
              SYS_OS
            </span>
          </div>
        </div>

        {/* System Boot Telemetry Text */}
        <div className="w-full text-center space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#737373]">
            <span className="text-[#ff6b00] font-bold tracking-wider">BOOT://INIT_TELEMETRY</span>
            <span className="text-[#a3a3a3]">{hexAddress}</span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-2 bg-[#171717] rounded-full overflow-hidden border border-[#262626] p-0.5">
            <div
              className="h-full bg-gradient-to-r from-[#cc5500] via-[#ff6b00] to-[#ffa040] rounded-full transition-all duration-75 relative shadow-[0_0_15px_#ff6b00]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[1px]" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono pt-1">
            <span className="text-[#ff7a1a] truncate max-w-[240px] text-left">
              &gt; {statusLog}
            </span>
            <span className="text-[#fafafa] font-bold">{progress}%</span>
          </div>
        </div>

        {/* Skip button if needed */}
        <button
          onClick={() => {
            soundFx.playTelemetryClick();
            setIsFading(true);
            sessionStorage.setItem("rost_boot_complete", "true");
            setTimeout(() => {
              setIsVisible(false);
              onComplete?.();
            }, 300);
          }}
          className="mt-6 text-[10px] font-mono tracking-widest text-[#737373] hover:text-[#ff6b00] transition-colors uppercase border-b border-transparent hover:border-[#ff6b00]"
        >
          [ Bypass Preflight Check ]
        </button>
      </div>
    </div>
  );
}
