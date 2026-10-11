"use client";

import Link from "next/link";
import { ArrowRight, Target, Zap } from "lucide-react";
import { CONSTITUTION_DATA } from "@/data/constitution-data";
import { ScrollReveal } from "@/components/scroll-reveal";

interface AboutSectionProps {
  showFullNavigationLink?: boolean;
}

export function AboutSection({ showFullNavigationLink = true }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#222222]"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* =========================================================================
            HEADER (CLEAN & SIMPLE)
            ========================================================================= */}
        <ScrollReveal direction="down" duration={0.6}>
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
              // 02. WHAT IS ROST?
            </span>

            <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] tracking-tight">
              ABOUT <span className="text-[#ff6b00]">{CONSTITUTION_DATA.shortForm}</span>
            </h2>

            <p className="w-full text-xs sm:text-sm font-sans text-[#a3a3a3] leading-relaxed text-justify">
              The <strong className="text-[#fafafa] font-mono">{CONSTITUTION_DATA.officialName}</strong> (ROST), known within its constitution as &apos;The Society&apos;, is the official student robotics platform under the <span className="text-[#fafafa]">Faculty of Technology</span>. We provide mentor-guided learning, hands-on robotics engineering, and competitive artificial intelligence development.
            </p>
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
            KEY OBJECTIVES (CLEAN GRID)
            ========================================================================= */}
        <ScrollReveal direction="up" delay={60} duration={0.6}>
          <div className="p-5 sm:p-6 rounded-xl bg-[#111111] border border-[#222222] space-y-4">
            <h3 className="text-xs sm:text-sm font-mono font-bold uppercase text-[#ff6b00] tracking-wider">
              Key Objectives of the Society (Article 3)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {CONSTITUTION_DATA.articles.article3.objectives.map((obj) => (
                <div
                  key={obj.id}
                  className="p-4 rounded-lg bg-[#141414] border border-[#222222] space-y-2"
                >
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#fafafa]">
                    <span className="text-[#ff6b00]">{obj.number}.</span>
                    <span>{obj.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans leading-relaxed text-justify">
                    {obj.description}
                  </p>
                </div>
              ))}
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
