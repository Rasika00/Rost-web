"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ROST_EVENTS, RostEvent } from "@/data/events-data";
import { EventDetailModal } from "@/components/event-detail-modal";
import { ScrollReveal } from "@/components/scroll-reveal";

function EventsContent() {
  const searchParams = useSearchParams();
  const initialEventId = searchParams.get("event") || searchParams.get("register");

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeEvent, setActiveEvent] = useState<RostEvent | null>(null);

  useEffect(() => {
    if (initialEventId) {
      const found = ROST_EVENTS.find((e) => e.id === initialEventId);
      if (found) setActiveEvent(found);
    }
  }, [initialEventId]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(ROST_EVENTS.map((e) => e.category)));
    return ["All", ...cats];
  }, []);

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "All") return ROST_EVENTS;
    return ROST_EVENTS.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <ScrollReveal direction="down" duration={0.65}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
              Society Events & Workshops
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              Explore hands-on microcontroller bootcamps, IoT engineering workshops, annual hackathons, and competitive robotics challenges conducted by the Robotic Society of Technology (ROST).
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal direction="up" delay={100} duration={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-[#141414]/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
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
              <div
                onClick={() => setActiveEvent(event)}
                className="group cursor-pointer w-full rounded-2xl bg-[#141414]/85 backdrop-blur-xl border border-white/10 hover:border-[#ff6b00]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_8px_32px_rgba(255,107,0,0.15)] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1.5"
              >
                {/* Event Name */}
                <div className="p-5 pb-4">
                  <h3 className="font-mono text-base sm:text-lg font-bold text-[#fafafa] group-hover:text-[#ff7a1a] transition-colors leading-snug">
                    {event.title}
                  </h3>
                </div>

                {/* Event Image */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/70 via-transparent to-transparent opacity-60" />
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[#ff6b00]">LOADING_EVENTS_DATA...</div>}>
      <EventsContent />
    </Suspense>
  );
}
