"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Target, Zap } from "lucide-react";
import { CONSTITUTION_DATA } from "@/data/constitution-data";
import { ScrollReveal } from "@/components/scroll-reveal";

const ABOUT_IMAGES = [
  "/images/gallery/team-celebration.png",
  "/images/gallery/cnc-machining.png",
  "/images/gallery/rover-trial.png",
  "/images/gallery/electronics-soldering.png",
  "/images/gallery/combat-impact.png",
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
      className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#222222]"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* =========================================================================
            HEADER (SIDE-BY-SIDE WITH COMPACT AUTO-CHANGING SHOWCASE)
            ========================================================================= */}
        <ScrollReveal direction="down" duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Text & Info */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                // 02. WHAT IS ROST?
              </span>

              <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] tracking-tight">
                ABOUT <span className="text-[#ff6b00]">{CONSTITUTION_DATA.shortForm}</span>
              </h2>

              <p className="text-xs sm:text-sm font-sans text-[#a3a3a3] leading-relaxed text-justify">
                The <strong className="text-[#fafafa] font-mono">{CONSTITUTION_DATA.officialName}</strong> (ROST), known within its constitution as &apos;The Society&apos;, is the official student robotics platform under the <span className="text-[#fafafa]">Faculty of Technology</span>. We provide mentor guided learning, hands-on robotics engineering, and competitive artificial intelligence development.
              </p>

              {/* Quick Society Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-[#141414] border border-[#222222] text-[#fafafa]">
                  🤖 <span className="text-[#ff6b00]">ROBOTICS</span> PLATFORM
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#141414] border border-[#222222] text-[#fafafa]">
                  🏛️ <span className="text-[#ff6b00]">FACULTY OF TECH</span>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#141414] border border-[#222222] text-[#fafafa]">
                  ⚡ <span className="text-[#ff6b00]">RATIFIED</span> CHARTER
                </span>
              </div>
            </div>

            {/* Right: Small Auto-Changing Image Card (Pure Image, No Text) */}
            <div className="md:col-span-5">
              <div
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] max-h-[260px] rounded-xl overflow-hidden border border-[#222222] hover:border-[#ff6b00]/40 transition-colors shadow-xl bg-[#111111] group/side-slider"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {ABOUT_IMAGES.map((src, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={src}
                        alt="ROST Society showcase"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 420px"
                        priority={idx === 0}
                      />
                    </div>
                  );
                })}

                {/* Subtle Prev / Next Buttons */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/60 hover:bg-[#ff6b00] border border-white/10 hover:border-[#ff6b00] text-white hover:text-black flex items-center justify-center transition-all opacity-0 group-hover/side-slider:opacity-100 cursor-pointer backdrop-blur-xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/60 hover:bg-[#ff6b00] border border-white/10 hover:border-[#ff6b00] text-white hover:text-black flex items-center justify-center transition-all opacity-0 group-hover/side-slider:opacity-100 cursor-pointer backdrop-blur-xs"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {/* Subtle Indicator Dots */}
                <div className="absolute bottom-2.5 left-0 right-0 z-20 flex items-center justify-center gap-1.5">
                  {ABOUT_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Image ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide
                          ? "w-4 bg-[#ff6b00]"
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
            VISION & MISSION (CLEAN DUAL CARDS)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* VISION */}
          <ScrollReveal direction="up" delay={40} duration={0.6} className="h-full flex">
            <div className="w-full p-5 sm:p-6 rounded-xl bg-[#111111] border border-[#222222] flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[#ff6b00]">
                  <Target className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                    Our Vision
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#fafafa] font-mono italic text-justify leading-relaxed">
                  &ldquo;{CONSTITUTION_DATA.articles.article2.vision.verbatim}&rdquo;
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans text-justify leading-relaxed">
                {CONSTITUTION_DATA.articles.article2.vision.lead}
              </p>
            </div>
          </ScrollReveal>

          {/* MISSION */}
          <ScrollReveal direction="up" delay={80} duration={0.6} className="h-full flex">
            <div className="w-full p-5 sm:p-6 rounded-xl bg-[#111111] border border-[#222222] flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[#ff6b00]">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                    Our Mission
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#fafafa] font-mono italic text-justify leading-relaxed">
                  &ldquo;{CONSTITUTION_DATA.articles.article2.mission.verbatim}&rdquo;
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans text-justify leading-relaxed">
                {CONSTITUTION_DATA.articles.article2.mission.lead}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* =========================================================================
            KEY OBJECTIVES (INTERACTIVE BUTTON & DETAILS)
            ========================================================================= */}
        <ScrollReveal direction="up" delay={60} duration={0.6}>
          <div className="rounded-xl bg-[#111111] border border-[#222222] transition-colors hover:border-[#333333] overflow-hidden">
            {/* Interactive Button */}
            <button
              type="button"
              id="key-objectives-toggle-btn"
              onClick={() => setShowObjectives((prev) => !prev)}
              aria-expanded={showObjectives}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#ff6b00]/50 transition-colors bg-[#111111] hover:bg-[#151515] group"
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
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] text-[#a3a3a3]">
                      {CONSTITUTION_DATA.articles.article3.objectives.length} Objectives
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-mono font-bold uppercase text-[#fafafa] tracking-wider group-hover:text-[#ff6b00] transition-colors">
                    Key Objectives of the Society
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs font-semibold uppercase tracking-wider transition-colors bg-[#181818] border border-[#2a2a2a] group-hover:border-[#ff6b00]/40 group-hover:text-[#fafafa] text-[#a3a3a3]">
                  {showObjectives ? "Hide Details" : "View Details"}
                </span>
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    showObjectives
                      ? "bg-[#ff6b00]/15 border-[#ff6b00]/50 text-[#ff6b00] rotate-180"
                      : "bg-[#181818] border-[#2a2a2a] text-[#a3a3a3] group-hover:text-[#fafafa] group-hover:border-[#383838]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </div>
              </div>
            </button>

            {/* Collapsible Details */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                showObjectives ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 sm:p-6 pt-3 border-t border-[#222222] space-y-4 bg-[#0d0d0d]/40">
                  {/* Lead text */}
                  {CONSTITUTION_DATA.articles.article3.lead && (
                    <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans leading-relaxed text-justify">
                      {CONSTITUTION_DATA.articles.article3.lead}
                    </p>
                  )}

                  {/* Objectives Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {CONSTITUTION_DATA.articles.article3.objectives.map((obj) => (
                      <div
                        key={obj.id}
                        className="p-4 rounded-lg bg-[#141414] border border-[#222222] hover:border-[#ff6b00]/40 transition-colors space-y-2 group/card"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#fafafa]">
                            <span className="text-[#ff6b00]">{obj.number}.</span>
                            <span className="group-hover/card:text-[#ff6b00] transition-colors">{obj.title}</span>
                          </div>
                          {obj.tag && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 uppercase shrink-0">
                              {obj.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans leading-relaxed text-justify">
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#737373] hover:text-[#ff6b00] transition-colors cursor-pointer py-1 px-2.5 rounded bg-[#141414] border border-[#222222] hover:border-[#ff6b00]/30"
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
            MEMBERSHIP (SIMPLE NOTICE BAR)
            ========================================================================= */}
        <ScrollReveal direction="up" delay={80} duration={0.6}>
          <div className="p-5 sm:p-6 rounded-xl bg-[#111111] border border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-mono font-bold text-xs sm:text-sm text-[#fafafa] uppercase">
                Membership Eligibility & Identification (Article 4)
              </div>
              <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed text-justify">
                All undergraduate students enrolled in the Faculty of Technology are eligible to join. Active members receive an official Society ID card (valid for 1 year for junior members).
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#ff6b00] hover:bg-[#ff7a1a] text-[#080808] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0 transition-colors"
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
