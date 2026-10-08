"use client";

import { useEffect, useState } from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Trophy,
  ShieldAlert,
  Send,
  CheckCircle2,
  AlertTriangle,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { ArenaEvent } from "@/data/events-data";

interface EventDetailModalProps {
  event: ArenaEvent | null;
  onClose: () => void;
}

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const [teamName, setTeamName] = useState("");
  const [captainEmail, setCaptainEmail] = useState("");
  const [botWeight, setBotWeight] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (event) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [event, onClose]);

  if (!event) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !captainEmail) {
      toast.error("TELEMETRY_ERROR: Team Name and Captain Email are required.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(`REGISTRATION_CONFIRMED: Team "${teamName}" locked into bracket.`, {
        description: `Check ${captainEmail} for pit paddock credentials and inspection rules.`,
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#121212] border border-[#ff6b00]/40 rounded-2xl shadow-[0_0_50px_rgba(255,107,0,0.25)] overflow-hidden">
        {/* Header HUD Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#0d0d0d]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#171717] border border-[#ff6b00]/30 text-[#ff6b00]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-base sm:text-lg font-black tracking-wider text-[#fafafa]">
                  {event.title}
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#ff7a1a]">
                {event.category} • {event.weightClass}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
            }}
            className="p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#ff6b00] transition-colors"
            aria-label="Close Event Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Key Event Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#ff6b00]" />
              <div>
                <div className="text-[10px] text-[#737373]">DATE</div>
                <div className="text-[#fafafa] font-bold">{event.date}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#ff6b00]" />
              <div>
                <div className="text-[10px] text-[#737373]">TIMEFRAME</div>
                <div className="text-[#fafafa] font-bold">{event.timeframe}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] flex items-center gap-2.5">
              <Trophy className="w-4 h-4 text-[#22c55e]" />
              <div>
                <div className="text-[10px] text-[#737373]">PRIZE POOL</div>
                <div className="text-[#22c55e] font-bold">{event.prizePool}</div>
              </div>
            </div>
          </div>

          {/* Venue & Arena Dimensions */}
          <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#262626] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] font-bold">
              <MapPin className="w-4 h-4" />
              <span>LOCATION & SPECIFICATIONS</span>
            </div>
            <p className="text-xs font-mono text-[#fafafa]">{event.venue}</p>
            <div className="text-[11px] font-mono text-[#a3a3a3] border-t border-[#222222] pt-2">
              <span className="text-[#737373]">ARENA DIMENSIONS: </span>
              {event.arenaDimensions}
            </div>
          </div>

          {/* Full Narrative Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              // EVENT BRIEFING
            </h4>
            <p className="text-sm font-sans text-[#a3a3a3] leading-relaxed">
              {event.fullOverview}
            </p>
          </div>

          {/* Safety Regulations & Cage Rules */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff7a1a] font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>MANDATORY ARENA SAFETY REGULATIONS</span>
            </div>
            <div className="space-y-2">
              {event.safetyRegulations.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#141414] border border-[#222222] text-xs font-mono text-[#a3a3a3]"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Match Schedule Timeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              // ARENA TIMELINE & BRACKET SCHEDULE
            </h4>
            <div className="divide-y divide-[#222222] rounded-xl border border-[#262626] bg-[#0e0e0e] overflow-hidden">
              {event.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 text-xs font-mono gap-1"
                >
                  <span className="text-[#ff6b00] font-bold w-36">{item.time}</span>
                  <span className="text-[#fafafa] flex-1">{item.activity}</span>
                  <span className="text-[10px] text-[#737373] bg-[#141414] px-2 py-0.5 rounded border border-[#222222] self-start sm:self-auto">
                    {item.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Registration Form */}
          <div className="p-5 rounded-xl bg-[#141414] border border-[#ff6b00]/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#fafafa] font-bold">
                <Users className="w-4 h-4 text-[#ff6b00]" />
                <span>BRACKET ENTRY // REGISTER COMBAT SQUAD</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c] text-[#22c55e] border border-[#22c55e]/30">
                {event.slotsRemaining} SLOTS REMAINING
              </span>
            </div>

            {submitted ? (
              <div className="p-4 rounded-lg bg-[#0e2a14] border border-[#22c55e]/40 text-xs font-mono text-[#22c55e] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <div>
                  <div className="font-bold">ENTRY SUBMITTED TO PIT MARSHAL</div>
                  <div className="text-[11px] text-[#86efac]">
                    Your squad has been queued for safety inspection.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] text-[#737373] mb-1">TEAM / SQUAD CALLSIGN</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Mechatronics"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:border-[#ff6b00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#737373] mb-1">CAPTAIN DISPATCH EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="captain@robotics.org"
                      value={captainEmail}
                      onChange={(e) => setCaptainEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:border-[#ff6b00] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-[#737373] mb-1">BOT SPECIFICATION OR WEIGHT CLASS</label>
                  <input
                    type="text"
                    placeholder="e.g. 250lb Heavyweight Drum / Autonomous LiDAR Rover"
                    value={botWeight}
                    onChange={(e) => setBotWeight(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:border-[#ff6b00] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Locking Bracket..." : "Confirm Squad Registration"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
