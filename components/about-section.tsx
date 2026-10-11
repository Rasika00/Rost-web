"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Cpu,
  Zap,
  Crosshair,
  ArrowRight,
  Sparkles,
  BookOpen,
  Brain,
  Share2,
  TrendingUp,
  GraduationCap,
  Globe,
  Building2,
  Rocket,
  IdCard,
  CheckCircle2,
  Compass,
  FileText,
  ListOrdered,
} from "lucide-react";
import { CONSTITUTION_DATA } from "@/data/constitution-data";
import { SITE_CONFIG } from "@/data/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

interface AboutSectionProps {
  showFullNavigationLink?: boolean;
}

export function AboutSection({ showFullNavigationLink = true }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<"objectives" | "membership" | "pillars">("objectives");
  const [objectiveFilter, setObjectiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Education & Skills",
    "Innovation & AI",
    "Research & Community",
    "Industry & Faculty",
  ];

  const filteredObjectives = CONSTITUTION_DATA.articles.article3.objectives.filter(
    (obj) => objectiveFilter === "All" || obj.category === objectiveFilter
  );

  const getObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-4 h-4 text-[#ff6b00]" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-[#ff6b00]" />;
      case "Share2":
        return <Share2 className="w-4 h-4 text-[#ff6b00]" />;
      case "Brain":
        return <Brain className="w-4 h-4 text-[#ff6b00]" />;
      case "TrendingUp":
        return <TrendingUp className="w-4 h-4 text-[#ff6b00]" />;
      case "GraduationCap":
        return <GraduationCap className="w-4 h-4 text-[#ff6b00]" />;
      case "Globe":
        return <Globe className="w-4 h-4 text-[#ff6b00]" />;
      case "Building2":
        return <Building2 className="w-4 h-4 text-[#ff6b00]" />;
      case "Rocket":
        return <Rocket className="w-4 h-4 text-[#ff6b00]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#ff6b00]" />;
    }
  };

  const pillarIcons: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-4 h-4 text-[#ff6b00]" />,
    Cpu: <Cpu className="w-4 h-4 text-[#ff6b00]" />,
    Zap: <Zap className="w-4 h-4 text-[#ff6b00]" />,
    Crosshair: <Crosshair className="w-4 h-4 text-[#ff6b00]" />,
  };

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#262626] cyber-scanline"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* =========================================================================
            HEADER (CONCISE & COMPACT)
            ========================================================================= */}
        <ScrollReveal direction="down" duration={0.6}>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#141414] border border-[#ff6b00]/30 text-xs font-mono text-[#ff7a1a]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
              </span>
              <span>// 02. WHAT IS ROST?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] tracking-tight">
              ABOUT <span className="text-[#ff6b00] text-glow-orange">{CONSTITUTION_DATA.shortForm}...</span>
            </h2>

            <p className="max-w-3xl text-xs sm:text-sm font-sans text-[#a3a3a3] leading-relaxed">
              Formally chartered as the <strong className="text-[#fafafa] font-mono">{CONSTITUTION_DATA.officialName}</strong> (ROST, referred to as &apos;The Society&apos;), we operate under the <span className="text-[#fafafa] font-medium">Faculty of Technology</span> to empower students through mentor-led robotics training, cutting-edge AI systems, and competitive engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            ARTICLE 2: VISION & MISSION (COMPACT 2-COLUMN STRIP)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* VISION */}
          <ScrollReveal direction="up" delay={40} duration={0.6} className="h-full flex">
            <div className="w-full p-4 sm:p-5 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#181818] text-[#ff6b00] border border-[#2a2a2a]">
                      <Crosshair className="w-4 h-4 text-[#ff6b00]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#ff7a1a] tracking-wider uppercase">
                      VISION // ARTICLE 2.1
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666]">DIRECTIVE</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#161616] border-l-2 border-[#ff6b00] font-mono text-xs text-[#fafafa] italic">
                  &ldquo;{CONSTITUTION_DATA.articles.article2.vision.verbatim}&rdquo;
                </div>

                <p className="text-xs text-[#a3a3a3] font-sans leading-relaxed">
                  {CONSTITUTION_DATA.articles.article2.vision.lead}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#1f1f1f] flex flex-wrap gap-1.5">
                {CONSTITUTION_DATA.articles.article2.vision.pillars.map((p, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#252525] text-[#b3b3b3]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* MISSION */}
          <ScrollReveal direction="up" delay={80} duration={0.6} className="h-full flex">
            <div className="w-full p-4 sm:p-5 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#181818] text-[#ff6b00] border border-[#2a2a2a]">
                      <Zap className="w-4 h-4 text-[#ff6b00]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#ff7a1a] tracking-wider uppercase">
                      MISSION // ARTICLE 2.2
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666]">DIRECTIVE</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#161616] border-l-2 border-[#ff6b00] font-mono text-xs text-[#fafafa] italic">
                  &ldquo;{CONSTITUTION_DATA.articles.article2.mission.verbatim}&rdquo;
                </div>

                <p className="text-xs text-[#a3a3a3] font-sans leading-relaxed">
                  {CONSTITUTION_DATA.articles.article2.mission.lead}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#1f1f1f] flex flex-wrap gap-1.5">
                {CONSTITUTION_DATA.articles.article2.mission.pillars.map((p, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#252525] text-[#b3b3b3]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* =========================================================================
            TABBED CONSTITUTION EXPLORER (OBJECTIVES, MEMBERSHIP, PILLARS)
            ========================================================================= */}
        <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-[#111111] border border-[#262626]">
          {/* Main Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#202020]">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab("objectives")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${activeTab === "objectives"
                    ? "bg-[#ff6b00] text-[#080808] font-bold shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                    : "bg-[#181818] text-[#a3a3a3] hover:text-[#fafafa] border border-[#2a2a2a]"
                  }`}
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span>9 CORE OBJECTIVES (ART. 3)</span>
              </button>

              <button
                onClick={() => setActiveTab("membership")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${activeTab === "membership"
                    ? "bg-[#ff6b00] text-[#080808] font-bold shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                    : "bg-[#181818] text-[#a3a3a3] hover:text-[#fafafa] border border-[#2a2a2a]"
                  }`}
              >
                <IdCard className="w-3.5 h-3.5" />
                <span>MEMBERSHIP CHARTER (ART. 4)</span>
              </button>

              <button
                onClick={() => setActiveTab("pillars")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${activeTab === "pillars"
                    ? "bg-[#ff6b00] text-[#080808] font-bold shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                    : "bg-[#181818] text-[#a3a3a3] hover:text-[#fafafa] border border-[#2a2a2a]"
                  }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>4 TECH PILLARS</span>
              </button>
            </div>

            {/* Sub-filter only when Objectives tab is selected */}
            {activeTab === "objectives" && (
              <div className="flex flex-wrap items-center gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setObjectiveFilter(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider transition-all cursor-pointer ${objectiveFilter === cat
                        ? "bg-[#282828] text-[#ff6b00] font-bold border border-[#ff6b00]/40"
                        : "text-[#777777] hover:text-[#b3b3b3]"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* TAB 1: 9 OBJECTIVES GRID */}
          {activeTab === "objectives" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
              {filteredObjectives.map((obj) => (
                <div
                  key={obj.id}
                  className="p-3.5 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-[#1c1c1c] text-[#ff6b00]">
                          {getObjectiveIcon(obj.icon)}
                        </div>
                        <span className="text-[10px] font-mono text-[#ff6b00] font-bold">
                          OBJ-{obj.number}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#1c1c1c] text-[#737373]">
                        {obj.category}
                      </span>
                    </div>

                    <h4 className="font-mono text-xs font-bold uppercase text-[#fafafa] group-hover:text-[#ff6b00] transition-colors leading-tight">
                      {obj.title}
                    </h4>

                    <p className="text-[11px] text-[#8e8e8e] font-sans leading-relaxed line-clamp-3">
                      {obj.description}
                    </p>
                  </div>

                  <div className="text-[9px] font-mono text-[#555555] tracking-wider pt-1 border-t border-[#1a1a1a]">
                    #{obj.tag} // ART. 3.{obj.number}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: MEMBERSHIP CHARTER & ID */}
          {activeTab === "membership" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center py-2">
              <div className="lg:col-span-7 space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#ff6b00] tracking-widest uppercase">
                    ARTICLE 04 // ACCREDITATION
                  </span>
                  <h3 className="text-base sm:text-lg font-mono font-black uppercase text-[#fafafa]">
                    Faculty Eligibility & Member Identification
                  </h3>
                  <p className="text-xs font-sans text-[#a3a3a3] leading-relaxed">
                    {CONSTITUTION_DATA.articles.article4.lead}
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#161616] border border-[#242424] flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#ff6b00] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-mono font-bold text-[#fafafa] uppercase">
                        Faculty Eligibility:{" "}
                      </span>
                      <span className="text-[#a3a3a3]">
                        {CONSTITUTION_DATA.articles.article4.eligibility}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#161616] border border-[#242424] flex items-start gap-2.5">
                    <IdCard className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-mono font-bold text-[#fafafa] uppercase">
                        Official Member ID Card:{" "}
                      </span>
                      <span className="text-[#a3a3a3]">
                        {CONSTITUTION_DATA.articles.article4.activeMemberId}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#161616] border border-[#242424] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-mono font-bold text-[#fafafa] uppercase">
                        Junior 1-Year Pass:{" "}
                      </span>
                      <span className="text-[#a3a3a3]">
                        {CONSTITUTION_DATA.articles.article4.juniorMemberId}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#ff6b00] hover:bg-[#ff7a1a] text-[#080808] font-mono text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/board"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1c1c1c] hover:bg-[#252525] text-[#d4d4d4] border border-[#2c2c2c] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>View Board Leads</span>
                  </Link>
                </div>
              </div>

              {/* Compact Holographic ID Card Preview */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-xs p-4 rounded-xl bg-gradient-to-br from-[#181818] via-[#131313] to-[#0c0c0c] border border-[#2c2c2c] font-mono text-[11px] space-y-2.5 shadow-[0_0_20px_rgba(255,107,0,0.1)]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-[#202020] text-[#ff6b00] font-black">
                        ROST
                      </span>
                      <span className="text-[10px] text-[#fafafa] font-bold">FACULTY OF TECHNOLOGY</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                      ACTIVE ID
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex justify-between">
                      <span className="text-[#666666]">DESIGNATION:</span>
                      <span className="text-[#fafafa]">UNDERGRADUATE ROBOTICIST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">ACCREDITATION:</span>
                      <span className="text-[#ff7a1a]">CONSTITUTION ART. 4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">VALIDITY:</span>
                      <span className="text-[#22c55e]">1-YEAR RENEWABLE</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#222222] flex items-center justify-between text-[9px] text-[#555555]">
                    <span>SEC-AUTH-2026-ROST</span>
                    <span className="text-[#ff6b00] font-bold">#ROST-UG-CARD</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 4 TECH PILLARS */}
          {activeTab === "pillars" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              {SITE_CONFIG.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-3.5 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-1 rounded bg-[#1c1c1c] text-[#ff6b00]">
                        {pillarIcons[pillar.icon] || <Cpu className="w-4 h-4 text-[#ff6b00]" />}
                      </div>
                      <span className="text-[10px] font-mono text-[#ff6b00] font-bold">
                        P-0{pillar.number}
                      </span>
                    </div>

                    <h4 className="font-mono text-xs font-bold uppercase text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-[11px] text-[#8e8e8e] font-sans leading-relaxed">
                      {pillar.lead}
                    </p>
                  </div>

                  <div className="text-[9px] font-mono text-[#ff7a1a] pt-1.5 border-t border-[#1a1a1a]">
                    {pillar.stats}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =========================================================================
            SLIM METRICS + FACULTY STRIP
            ========================================================================= */}
        <ScrollReveal direction="up" delay={50} duration={0.6}>
          <div className="p-3 sm:p-4 rounded-xl bg-[#111111] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
            {/* 4 Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full md:w-auto">
              {SITE_CONFIG.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-[#fafafa]">{m.value}</div>
                  <div className="text-[10px] text-[#ff7a1a] uppercase font-bold leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* University & Coordinates Badge */}
            <div className="flex items-center gap-2.5 text-[11px] text-[#8e8e8e] md:border-l md:border-[#222222] md:pl-5 self-start md:self-auto shrink-0">
              <Compass className="w-4 h-4 text-[#ff6b00] shrink-0" />
              <div>
                <span className="text-[#fafafa] font-bold">{SITE_CONFIG.affiliation.faculty}</span>
                <span className="text-[#666666]"> • {SITE_CONFIG.affiliation.coordinates}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
