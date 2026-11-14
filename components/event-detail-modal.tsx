"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Calendar,
  Trophy,
  Send,
  CheckCircle2,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { RostEvent } from "@/data/events-data";

interface EventDetailModalProps {
  event: RostEvent | null;
  onClose: () => void;
}

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const [teamName, setTeamName] = useState("");
  const [captainEmail, setCaptainEmail] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;

    if (event) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      document.body.classList.add("event-modal-open");
      window.dispatchEvent(new CustomEvent("event-modal-change", { detail: { open: true } }));
      lenis?.stop();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      document.body.classList.remove("event-modal-open");
      window.dispatchEvent(new CustomEvent("event-modal-change", { detail: { open: false } }));
      lenis?.start();
    };
  }, [event, onClose]);

  if (!event) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !captainEmail) {
      toast.error("ERROR: Participant Name and Email are required.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(`REGISTRATION_CONFIRMED: Participant "${teamName}" registered successfully.`, {
        description: `Confirmation email dispatched to ${captainEmail}.`,
      });
    }, 600);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/90 backdrop-blur-xl animate-in fade-in duration-200 cursor-pointer"
      data-lenis-prevent="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#121212] border border-[#ff6b00]/40 rounded-2xl shadow-[0_0_50px_rgba(255,107,0,0.25)] overflow-hidden cursor-default overscroll-contain"
      >
        {/* Header HUD Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#0d0d0d] shrink-0">
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
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
            }}
            className="p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Close Event Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          data-lenis-prevent="true"
          className="overflow-y-auto flex-1 min-h-0 overscroll-contain"
        >
          {/* Event Hero Banner with Image */}
          <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#0a0a0a]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 space-y-1.5 pointer-events-none">
              <h3 className="font-mono text-xl sm:text-2xl font-black text-[#fafafa] leading-snug drop-shadow-md break-words">
                {event.title}
              </h3>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Key Event Badges */}
            <div
              className={`grid grid-cols-1 ${
                event.targetAudience ? "sm:grid-cols-3" : "sm:grid-cols-2"
              } gap-3 font-mono text-xs`}
            >
              <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex items-start gap-3.5 min-w-0 overflow-hidden">
                <Calendar className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-[11px] text-[#737373] uppercase tracking-wider mb-1">DATE</div>
                  <div className="text-sm sm:text-base text-[#fafafa] font-bold tracking-wide break-words leading-snug">
                    {event.date}
                  </div>
                </div>
              </div>

              {event.targetAudience ? (
                <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex items-start gap-3.5 min-w-0 overflow-hidden">
                  <Users className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-[11px] text-[#737373] uppercase tracking-wider mb-1">TARGET AUDIENCE</div>
                    <div className="text-xs sm:text-sm text-[#fafafa] font-bold break-words leading-snug">
                      {event.targetAudience}
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex items-start gap-3.5 min-w-0 overflow-hidden">
                <Trophy className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-[11px] text-[#737373] uppercase tracking-wider mb-1">FOCUS & RECOGNITION</div>
                  <div className="text-xs sm:text-sm text-[#22c55e] font-bold break-words leading-snug">
                    {event.prizePool}
                  </div>
                </div>
              </div>
            </div>

            {/* Full Narrative Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
                {"// EVENT DETAILS & OVERVIEW"}
              </h4>
              <p className="text-sm font-sans text-[#a3a3a3] leading-relaxed whitespace-pre-line">
                {event.fullOverview}
              </p>
            </div>

            {/* Registration Form (Upcoming Events) */}
            {event.status !== "Concluded" && (
              <div className="p-5 rounded-xl bg-[#141414] border border-[#ff6b00]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#fafafa] font-bold">
                    <Users className="w-4 h-4 text-[#ff6b00]" />
                    <span>EVENT REGISTRATION // RESERVE PARTICIPATION</span>
                  </div>
                  {event.slotsRemaining ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c] text-[#22c55e] border border-[#22c55e]/30">
                      {event.slotsRemaining} SLOTS REMAINING
                    </span>
                  ) : null}
                </div>

                {submitted ? (
                  <div className="p-4 rounded-lg bg-[#0e2a14] border border-[#22c55e]/40 text-xs font-mono text-[#22c55e] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="font-bold">REGISTRATION RECEIVED</div>
                      <div className="text-[11px] text-[#86efac]">
                        Your participation has been queued for verification.
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] text-[#737373] mb-1">PARTICIPANT / TEAM NAME</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kasun Perera / Mechatronics Team"
                          value={teamName}
                          onChange={(e) => setTeamName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:border-[#ff6b00] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-[#737373] mb-1">STUDENT / CONTACT EMAIL</label>
                        <input
                          type="email"
                          required
                          placeholder="student@tec.rjt.ac.lk"
                          value={captainEmail}
                          onChange={(e) => setCaptainEmail(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:border-[#ff6b00] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#737373] mb-1">BATCH / DEPARTMENT / INSTITUTION</label>
                      <input
                        type="text"
                        placeholder="e.g. Department of Engineering Technology, Faculty of Technology"
                        value={affiliation}
                        onChange={(e) => setAffiliation(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:border-[#ff6b00] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? "Submitting Registration..." : "Confirm Registration"}</span>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
