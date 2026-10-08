"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Filter,
  Search,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { ARENA_EVENTS, ArenaEvent } from "@/data/events-data";
import { EventDetailModal } from "@/components/event-detail-modal";
import { ScrollReveal } from "@/components/scroll-reveal";

function EventsContent() {
  const searchParams = useSearchParams();
  const initialEventId = searchParams.get("event") || searchParams.get("register");

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeEvent, setActiveEvent] = useState<ArenaEvent | null>(null);

  useEffect(() => {
    if (initialEventId) {
      const found = ARENA_EVENTS.find((e) => e.id === initialEventId);
      if (found) setActiveEvent(found);
    }
  }, [initialEventId]);

  const categories = [
    "All",
    "RoboWars",
    "Autonomous Challenges",
    "Hardware Hackathons",
    "Workshops",
  ];

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "All") return ARENA_EVENTS;
    return ARENA_EVENTS.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <ScrollReveal direction="down" duration={0.65}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a]">
              <span>// ARENA COMBAT BRACKETS & COMPETITIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
              Arena Schedule & Tournaments
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              Enter the competitive arena. Register your collegiate combat robotics squad, sign up for autonomous
              SLAM subterranean time-trials, or join hands-on embedded motor tuning workshops.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal direction="up" delay={100} duration={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-[#121212] border border-[#262626]">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#ff6b00] text-[#080808] font-bold shadow-[0_0_15px_rgba(255,107,0,0.35)]"
                      : "bg-[#171717] text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#202020] border border-[#262626]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <ScrollReveal
              key={event.id}
              delay={idx * 70}
              direction="up"
              duration={0.6}
              className="h-full flex"
            >
              <div className="w-full rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/50 transition-all p-6 flex flex-col justify-between space-y-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:-translate-y-1 duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c] text-[#ff7a1a] border border-[#ff6b00]/30 font-bold uppercase">
                      {event.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold border ${
                        event.status === "Live Streaming"
                          ? "bg-[#ef4444]/20 text-[#ef4444] border-[#ef4444]/40 animate-pulse"
                          : "bg-[#181818] text-[#22c55e] border-[#22c55e]/30"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-mono text-lg font-bold text-[#fafafa] leading-snug">
                      {event.title}
                    </h3>
                    <div className="text-xs font-mono text-[#ff6b00]">
                      {event.weightClass}
                    </div>
                  </div>

                  <p className="text-xs text-[#a3a3a3] line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-1.5 font-mono text-xs">
                    <div className="flex items-center gap-2 text-[#fafafa]">
                      <Calendar className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#737373] text-[11px]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#22c55e] text-[11px] font-bold">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{event.prizePool}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#222222]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#737373]">
                    <span>REMAINING SLOTS:</span>
                    <span className="text-[#ff7a1a] font-bold">{event.slotsRemaining} SLOTS</span>
                  </div>

                  <button
                    onClick={() => {
                      setActiveEvent(event);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-bold text-xs uppercase font-mono flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,107,0,0.25)] cursor-pointer"
                  >
                    <span>Inspect Bracket & Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <EventDetailModal event={activeEvent} onClose={() => setActiveEvent(null)} />
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[#ff6b00]">LOADING_ARENA_SCHEDULE...</div>}>
      <EventsContent />
    </Suspense>
  );
}
