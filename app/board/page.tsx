"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Cpu,
  Zap,
  Users,
  Award,
  Terminal,
  ExternalLink,
  Mail,
  Search,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  FileText,
  ChevronRight,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { TEAM_MEMBERS, TeamMember } from "@/data/team-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function BoardPage() {
  const [selectedTier, setSelectedTier] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDossier, setActiveDossier] = useState<TeamMember | null>(null);

  const tiers = [
    "All",
    "Executive Directorate",
    "Technical Directorate",
    "Operations & Logistics",
    "Faculty Advisory",
  ];

  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesTier =
        selectedTier === "All" || member.tier === selectedTier;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesTier;

      const matchesQuery =
        member.name.toLowerCase().includes(q) ||
        member.callsign.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.division.toLowerCase().includes(q) ||
        member.specialties.some((s) => s.toLowerCase().includes(q));

      return matchesTier && matchesQuery;
    });
  }, [selectedTier, searchQuery]);

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* =========================================================================
            HEADER & TELEMETRY BADGE
            ========================================================================= */}
        <ScrollReveal direction="down" duration={0.65}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a] shadow-[0_0_20px_rgba(255,107,0,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
              </span>
              <span>// GOVERNANCE & EXECUTIVE LEADERSHIP</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa] tracking-tight">
              Executive Board of Directors
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              The elected officers, technical division directors, and faculty advisors presiding over ROST's
              combat tournaments, autonomous exploration programs, corporate partnerships, and safety charters.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            GOVERNANCE METRICS STRIP
            ========================================================================= */}
        <ScrollReveal direction="up" delay={50} duration={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#121212] border border-[#262626]">
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-1">
              <div className="text-[11px] font-mono text-[#737373] uppercase">MANDATE TERM</div>
              <div className="text-lg font-mono font-black text-[#fafafa]">2025 – 2026</div>
              <div className="text-[10px] font-mono text-[#ff6b00]">Biennial Governance</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-1">
              <div className="text-[11px] font-mono text-[#737373] uppercase">BOARD OFFICERS</div>
              <div className="text-lg font-mono font-black text-[#fafafa]">{TEAM_MEMBERS.length} Directors</div>
              <div className="text-[10px] font-mono text-[#22c55e]">100% Quorum Active</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-1">
              <div className="text-[11px] font-mono text-[#737373] uppercase">DIVISIONS OVERSIGHT</div>
              <div className="text-lg font-mono font-black text-[#fafafa]">6 Divisions</div>
              <div className="text-[10px] font-mono text-[#ff7a1a]">Autonomous & Combat</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-1">
              <div className="text-[11px] font-mono text-[#737373] uppercase">ASSEMBLY CADENCE</div>
              <div className="text-lg font-mono font-black text-[#fafafa]">Bi-Weekly</div>
              <div className="text-[10px] font-mono text-[#38bdf8]">Open Student Hearings</div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            SEARCH & TIER FILTERS
            ========================================================================= */}
        <ScrollReveal direction="up" delay={100} duration={0.6}>
          <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-[#121212] border border-[#262626] backdrop-blur-md">
            {/* Search bar */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-[#737373]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search board members by name, callsign, role, division, or specialty (e.g. SLAM, GaN, CNC, CAD)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#262626] text-xs font-mono text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors"
              />
            </div>

            {/* Tier pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-mono text-[#737373] mr-2">TIER:</span>
              {tiers.map((tier) => {
                const isActive = selectedTier === tier;
                return (
                  <button
                    key={tier}
                    onClick={() => {
                      setSelectedTier(tier);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#ff6b00] text-[#080808] font-bold shadow-[0_0_15px_rgba(255,107,0,0.35)]"
                        : "bg-[#171717] text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#202020] border border-[#262626]"
                    }`}
                  >
                    {tier}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            BOARD MEMBERS GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, idx) => (
            <ScrollReveal
              key={member.id}
              delay={idx * 60}
              direction="up"
              duration={0.6}
              className="h-full flex"
            >
              <div className="w-full rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all p-6 space-y-5 flex flex-col justify-between group shadow-[0_0_25px_rgba(0,0,0,0.4)] relative hover:-translate-y-1">
                <div className="space-y-4">
                  {/* Photo & Callout Tag */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0d0d0d] border border-[#222222]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                    {/* Callsign Badge */}
                    <div className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#080808]/90 text-[#ff6b00] border border-[#ff6b00]/30 shadow-md">
                      {member.callsign}
                    </div>

                    {/* Tier Badge */}
                    <div className="absolute top-2.5 right-2.5 text-[9px] font-mono px-2 py-0.5 rounded bg-[#171717]/90 text-[#fafafa] border border-[#333333]">
                      {member.tier}
                    </div>
                  </div>

                  {/* Identity & Role */}
                  <div className="space-y-1">
                    <h3 className="font-mono text-base font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-[#ff7a1a] font-semibold">
                      {member.role}
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] pt-0.5">
                      <span>DIV: {member.division}</span>
                      <span className="text-[#a3a3a3]">{member.term}</span>
                    </div>
                  </div>

                  {/* Brief Bio */}
                  <p className="text-xs text-[#a3a3a3] leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Office Hours & Advisement Slot */}
                  <div className="p-2.5 rounded-lg bg-[#0d0d0d] border border-[#202020] space-y-1 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-[#ff7a1a]">
                      <Clock className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <span className="font-semibold text-[10px] uppercase">Advisement & Office Hours</span>
                    </div>
                    <div className="text-[#a3a3a3] text-[10px] pl-5">
                      {member.officeHours}
                    </div>
                  </div>

                  {/* Specialties Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#262626] text-[#a3a3a3]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Bar & Dossier Trigger */}
                <div className="pt-4 border-t border-[#222222] space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveDossier(member);
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-[#171717] hover:bg-[#ff6b00] text-[#fafafa] hover:text-[#080808] border border-[#262626] hover:border-[#ff6b00] text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Inspect Full Dossier</span>
                  </button>

                  <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
                    <span className="text-[10px] uppercase">COMM_CHANNELS</span>
                    <div className="flex items-center gap-2">
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-[#171717] hover:bg-[#ff6b00] text-[#a3a3a3] hover:text-[#080808] transition-colors"
                          aria-label="GitHub Profile"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-[#171717] hover:bg-[#ff6b00] text-[#a3a3a3] hover:text-[#080808] transition-colors"
                          aria-label="LinkedIn Profile"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="p-1.5 rounded bg-[#171717] hover:bg-[#ff6b00] text-[#a3a3a3] hover:text-[#080808] transition-colors"
                          aria-label="Direct Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* =========================================================================
            GOVERNANCE CHARTER & BY-LAWS SECTION
            ========================================================================= */}
        <ScrollReveal direction="up" delay={80} duration={0.65}>
          <div className="rounded-2xl bg-[#121212] border border-[#262626] p-8 md:p-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#ff6b00] uppercase tracking-wider">
                  // CONSTITUTIONAL FRAMEWORK
                </span>
                <h2 className="text-2xl font-mono font-black uppercase text-[#fafafa]">
                  Democratic Governance & Elections
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] text-xs font-mono font-bold uppercase transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] self-start md:self-auto cursor-pointer"
              >
                <span>Contact Board Secretariat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center text-[#ff6b00]">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-mono text-sm font-bold text-[#fafafa] uppercase">
                  Biennial Elections
                </h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">
                  Executive officers are democratically elected by active engineering members each spring semester.
                  Candidates present architectural vision, tournament strategy, and financial stewardship plans.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center text-[#ff6b00]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-mono text-sm font-bold text-[#fafafa] uppercase">
                  Kinetic Safety Council
                </h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">
                  All weapons testing, 250lb combat cage operations, and high-voltage LiPo cells require unanimous
                  sign-off from the Faculty Advisor, Power Lead, and Lead Combat Architect.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0e0e0e] border border-[#222222] space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center text-[#ff6b00]">
                  <Terminal className="w-4 h-4" />
                </div>
                <h3 className="font-mono text-sm font-bold text-[#fafafa] uppercase">
                  Open Source Firmware Charter
                </h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">
                  Non-proprietary motor inverters, ROS 2 navigation pipelines, and telemetry dashboards are published
                  to our public GitHub repository to advance collegiate mechatronics nationwide.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* =========================================================================
          BOARD DOSSIER MODAL
          ========================================================================= */}
      {activeDossier && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveDossier(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f0f0f] border border-[#ff6b00]/40 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(255,107,0,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => {
                setActiveDossier(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
              aria-label="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#0d0d0d] border border-[#262626] flex-shrink-0">
                <Image
                  src={activeDossier.image}
                  alt={activeDossier.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-[#171717] border border-[#ff6b00]/30 text-[10px] font-mono text-[#ff6b00]">
                  <span>CALLSIGN: {activeDossier.callsign}</span>
                  <span>•</span>
                  <span>{activeDossier.tier}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-mono font-black text-[#fafafa]">
                  {activeDossier.name}
                </h2>
                <div className="text-sm font-mono text-[#ff7a1a]">
                  {activeDossier.role}
                </div>
                <div className="text-xs font-mono text-[#737373]">
                  DIVISION: {activeDossier.division} • TERM: {activeDossier.term}
                </div>
              </div>
            </div>

            {/* Full Biography */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#737373] uppercase tracking-wider">
                // EXECUTIVE BACKGROUND & CREDENTIALS
              </h4>
              <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
                {activeDossier.bio}
              </p>
            </div>

            {/* Key Governance Responsibilities */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#737373] uppercase tracking-wider">
                // KEY GOVERNANCE RESPONSIBILITIES
              </h4>
              <ul className="space-y-1.5">
                {activeDossier.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs font-mono text-[#a3a3a3]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Hours and Location */}
            <div className="p-4 rounded-xl bg-[#141414] border border-[#222222] space-y-1 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#ff7a1a] font-semibold">
                <Clock className="w-4 h-4 text-[#ff6b00]" />
                <span>ADVISEMENT HOURS & FACILITY LOCATION</span>
              </div>
              <div className="text-[#a3a3a3] text-[11px] pl-6">
                {activeDossier.officeHours}
              </div>
            </div>

            {/* Footer with Connect CTA */}
            <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {activeDossier.socials.github && (
                  <a
                    href={activeDossier.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#171717] hover:bg-[#ff6b00] text-[#a3a3a3] hover:text-[#080808] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {activeDossier.socials.linkedin && (
                  <a
                    href={activeDossier.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#171717] hover:bg-[#ff6b00] text-[#a3a3a3] hover:text-[#080808] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {activeDossier.socials.email && (
                  <a
                    href={`mailto:${activeDossier.socials.email}`}
                    className="p-2 rounded-lg bg-[#171717] hover:bg-[#ff6b00] text-[#a3a3a3] hover:text-[#080808] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>

              <Link
                href={`/contact?type=advisement`}
                onClick={() => {
                  setActiveDossier(null);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] text-xs font-mono font-bold uppercase transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Advisement Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
