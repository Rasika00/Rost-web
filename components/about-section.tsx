"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Target, Zap } from "lucide-react";
import { CONSTITUTION_DATA } from "@/data/constitution-data";
import { ScrollReveal } from "@/components/scroll-reveal";

const ABOUT_IMAGES = [
  "https://res.cloudinary.com/fqizrdtg/image/upload/v1791805983/WhatsApp_Image_2026-10-12_at_5.21.26_PM_1.jpg",
  "https://res.cloudinary.com/fqizrdtg/image/upload/v1791805981/WhatsApp_Image_2026-10-12_at_5.21.26_PM.jpg",
  "https://res.cloudinary.com/fqizrdtg/image/upload/v1791805981/WhatsApp_Image_2026-10-12_at_5.21.28_PM.jpg",
  "https://res.cloudinary.com/fqizrdtg/image/upload/v1791805981/WhatsApp_Image_2026-10-12_at_5.21.28_PM_2.jpg",
  "https://res.cloudinary.com/fqizrdtg/image/upload/v1791805981/WhatsApp_Image_2026-10-12_at_5.21.28_PM_1.jpg",
];

interface AboutSectionProps {
  showFullNavigationLink?: boolean;
}

export function AboutSection({ showFullNavigationLink = true }: AboutSectionProps) {
  const [showObjectives, setShowObjectives] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ABOUT_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length);
  };

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden border-t border-[#ff6b00]/30"
    >
      {/* Subtle Hairline Boundary Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_50%_at_50%_0%,rgba(255,107,0,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* =========================================================================
            HEADER (SIDE-BY-SIDE WITH GLASS TEXT PANEL & COMPACT SHOWCASE)
            ========================================================================= */}
        <ScrollReveal direction="down" duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Left: Text & Info (Glassmorphic Container for Maximum Visibility) */}
            <div className="md:col-span-7 relative rounded-2xl p-6 sm:p-7 bg-[#141414]/75 backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] overflow-hidden flex flex-col justify-between space-y-4 group">
              {/* Subtle ambient glass glow */}
              <div className="absolute -top-24 -left-24 w-56 h-56 bg-[#ff6b00]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-xs font-mono text-[#ff6b00] tracking-widest uppercase font-semibold">
                  // 02. WHAT IS ROST?
                </span>

                <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#ffffff] tracking-tight drop-shadow-sm">
                  ABOUT <span className="text-[#ff6b00]">{CONSTITUTION_DATA.shortForm}</span>
                </h2>

                <p className="text-sm sm:text-base font-sans text-[#e5e5e5] leading-relaxed text-justify">
                  The <strong className="text-[#ffffff] font-mono font-bold">{CONSTITUTION_DATA.officialName}</strong> (ROST), known within its constitution as &apos;The Society&apos;, is the official student robotics platform under the <span className="text-[#ff7a1a] font-semibold">Faculty of Technology</span>. We provide mentor-guided learning, hands-on robotics engineering, and competitive artificial intelligence development.
                </p>
              </div>

              {/* Quick Society Badges (Frosted Glass Chips) */}
              <div className="relative z-10 flex flex-wrap items-center gap-2 pt-2 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] backdrop-blur-md border border-white/10 text-[#ffffff] flex items-center gap-1.5 shadow-sm hover:border-[#ff6b00]/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                  <span>ROBOTICS PLATFORM</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] backdrop-blur-md border border-white/10 text-[#ffffff] flex items-center gap-1.5 shadow-sm hover:border-[#ff6b00]/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  <span>FACULTY OF TECH</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] backdrop-blur-md border border-white/10 text-[#ffffff] flex items-center gap-1.5 shadow-sm hover:border-[#ff6b00]/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <span>RATIFIED CHARTER</span>
                </span>
              </div>
            </div>

            {/* Right: Small Auto-Changing Image Card (Glass Frame, Pure Image) */}
            <div className="md:col-span-5 flex">
              <div
                className="relative w-full h-full min-h-[240px] max-h-[320px] rounded-2xl overflow-hidden border border-white/[0.12] hover:border-[#ff6b00]/50 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] bg-[#141414]/75 backdrop-blur-xl group/side-slider"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {ABOUT_IMAGES.map((src, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                      <Image
                        src={src}
                        alt={`ROST Society showcase ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 420px"
                        priority={idx === 0}
                        unoptimized
                      />
                    </div>
                  );
                })}

                {/* Subtle Prev / Next Buttons */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#ff6b00] border border-white/10 hover:border-[#ff6b00] text-white hover:text-black flex items-center justify-center transition-all opacity-0 group-hover/side-slider:opacity-100 cursor-pointer backdrop-blur-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next image"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#ff6b00] border border-white/10 hover:border-[#ff6b00] text-white hover:text-black flex items-center justify-center transition-all opacity-0 group-hover/side-slider:opacity-100 cursor-pointer backdrop-blur-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Subtle Indicator Dots */}
                <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-1.5">
                  {ABOUT_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Image ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === currentSlide
                        ? "w-5 bg-[#ff6b00]"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            VISION & MISSION (CLEAN DUAL GLASS CARDS)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* VISION */}
          <ScrollReveal direction="up" delay={40} duration={0.6} className="h-full flex">
            <div className="w-full p-5 sm:p-6 rounded-2xl bg-[#141414]/75 backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-3 shadow-lg">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[#ff6b00]">
                  <Target className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                    Our Vision
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#ffffff] font-mono italic text-justify leading-relaxed">
                  &ldquo;{CONSTITUTION_DATA.articles.article2.vision.verbatim}&rdquo;
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#e0e0e0] font-sans text-justify leading-relaxed">
                {CONSTITUTION_DATA.articles.article2.vision.lead}
              </p>
            </div>
          </ScrollReveal>

          {/* MISSION */}
          <ScrollReveal direction="up" delay={80} duration={0.6} className="h-full flex">
            <div className="w-full p-5 sm:p-6 rounded-2xl bg-[#141414]/75 backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-3 shadow-lg">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[#ff6b00]">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                    Our Mission
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#ffffff] font-mono italic text-justify leading-relaxed">
                  &ldquo;{CONSTITUTION_DATA.articles.article2.mission.verbatim}&rdquo;
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#e0e0e0] font-sans text-justify leading-relaxed">
                {CONSTITUTION_DATA.articles.article2.mission.lead}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* =========================================================================
            KEY OBJECTIVES (INTERACTIVE BUTTON & DETAILS)
            ========================================================================= */}
        <ScrollReveal direction="up" delay={60} duration={0.6}>
          <div className="rounded-2xl bg-[#141414]/75 backdrop-blur-xl border border-white/[0.1] transition-all hover:border-white/[0.2] overflow-hidden shadow-lg">
            {/* Interactive Button */}
            <button
              type="button"
              id="key-objectives-toggle-btn"
              onClick={() => setShowObjectives((prev) => !prev)}
              aria-expanded={showObjectives}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#ff6b00]/50 transition-colors bg-transparent hover:bg-white/[0.03] group"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center shrink-0 text-[#ff6b00] group-hover:scale-105 group-hover:border-[#ff6b00]/60 transition-all">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] sm:text-xs font-mono text-[#ff6b00] tracking-wider uppercase font-semibold">
                      Article 3 // Constitution
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[#d4d4d4]">
                      {CONSTITUTION_DATA.articles.article3.objectives.length} Objectives
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-mono font-bold uppercase text-[#ffffff] tracking-wider group-hover:text-[#ff6b00] transition-colors">
                    Key Objectives of the Society
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs font-semibold uppercase tracking-wider transition-colors bg-white/[0.05] border border-white/10 group-hover:border-[#ff6b00]/40 group-hover:text-[#ffffff] text-[#d4d4d4]">
                  {showObjectives ? "Hide Details" : "View Details"}
                </span>
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 ${showObjectives
                    ? "bg-[#ff6b00]/15 border-[#ff6b00]/50 text-[#ff6b00] rotate-180"
                    : "bg-white/[0.05] border-white/10 text-[#d4d4d4] group-hover:text-[#ffffff] group-hover:border-white/20"
                    }`}
                >
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </div>
              </div>
            </button>

            {/* Collapsible Details */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${showObjectives ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 sm:p-6 pt-3 border-t border-white/[0.08] space-y-4 bg-black/30">
                  {/* Lead text */}
                  {CONSTITUTION_DATA.articles.article3.lead && (
                    <p className="text-xs sm:text-sm text-[#e0e0e0] font-sans leading-relaxed text-justify">
                      {CONSTITUTION_DATA.articles.article3.lead}
                    </p>
                  )}

                  {/* Objectives Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {CONSTITUTION_DATA.articles.article3.objectives.map((obj) => (
                      <div
                        key={obj.id}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#ff6b00]/40 transition-colors space-y-2 group/card"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#ffffff]">
                            <span className="text-[#ff6b00]">{obj.number}.</span>
                            <span className="group-hover/card:text-[#ff6b00] transition-colors">{obj.title}</span>
                          </div>
                          {obj.tag && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase shrink-0">
                              {obj.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#d4d4d4] font-sans leading-relaxed text-justify">
                          {obj.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quick Collapse Footer */}
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={() => setShowObjectives(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a3a3a3] hover:text-[#ff6b00] transition-colors cursor-pointer py-1 px-2.5 rounded-md bg-white/[0.04] border border-white/[0.08] hover:border-[#ff6b00]/30"
                    >
                      <span>Close Objectives</span>
                      <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            MEMBERSHIP (SIMPLE GLASS NOTICE BAR)
            ========================================================================= */}
        <ScrollReveal direction="up" delay={80} duration={0.6}>
          <div className="p-5 sm:p-6 rounded-2xl bg-[#141414]/75 backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
            <div className="space-y-1">
              <div className="font-mono font-bold text-xs sm:text-sm text-[#ffffff] uppercase">
                Membership Eligibility & Identification (Article 4)
              </div>
              <p className="text-xs sm:text-sm text-[#e0e0e0] leading-relaxed text-justify">
                All undergraduate students enrolled in the Faculty of Technology are eligible to join. Active members receive an official Society ID card (valid for 1 year for junior members).
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#ff6b00] hover:bg-[#ff7a1a] text-[#080808] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0 transition-colors shadow-md"
            >
              <span>Join Society</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
