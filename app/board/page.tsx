"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  X,
  FileText,
  Mail,
  Users,
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
  ];

  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesTier =
        selectedTier === "All" || member.tier === selectedTier;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesTier;

      const matchesQuery =
        member.name.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.division.toLowerCase().includes(q) ||
        member.callsign.toLowerCase().includes(q);

      return matchesTier && matchesQuery;
    });
  }, [selectedTier, searchQuery]);

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* =========================================================================
            HEADER
            ========================================================================= */}
        <ScrollReveal direction="down" duration={0.65}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a] shadow-[0_0_20px_rgba(255,107,0,0.15)]">
              <Users className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>// EXECUTIVE BOARD & LEADERSHIP SQUAD</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa] tracking-tight">
              Executive Board
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              The executive officers and squadron leads directing the Robotic Society of Technology (ROST), Faculty of Technology.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            SEARCH & TIER FILTERS
            ========================================================================= */}
        <ScrollReveal direction="up" delay={50} duration={0.6}>
          <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-[#141414]/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-[#737373]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search board members by name, role, or division..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-xs font-mono text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#737373] mr-2">TIER:</span>
              {tiers.map((tier) => {
                const isActive = selectedTier === tier;
                return (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
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
            BOARD MEMBERS GRID (CLEAN: PHOTO, NAME, ROLE)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredMembers.map((member, idx) => (
            <ScrollReveal
              key={member.id}
              delay={(idx % 4) * 80}
              direction="up"
              duration={0.6}
              className="h-full flex"
            >
              <div
                onClick={() => setActiveDossier(member)}
                className="w-full rounded-2xl bg-[#141414]/80 backdrop-blur-xl border border-white/10 hover:border-[#ff6b00]/60 transition-all p-5 flex flex-col justify-between group shadow-[0_0_25px_rgba(255,107,0,0.15)] relative hover:-translate-y-1 cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Photo */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0d0d0d] border border-[#222222]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Identity & Role */}
                  <div className="space-y-1.5 text-center sm:text-left">
                    <h3 className="font-mono text-base font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors line-clamp-1">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-[#ff7a1a] font-semibold">
                      {member.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* =========================================================================
          BOARD MEMBER DOSSIER MODAL
          ========================================================================= */}
      {activeDossier && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveDossier(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f0f0f] border border-[#ff6b00]/40 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(255,107,0,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveDossier(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
              aria-label="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>

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
                <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] text-[#ff6b00] border border-[#ff6b00]/30 font-bold">
                  {activeDossier.callsign}
                </div>
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#fafafa]">
                  {activeDossier.name}
                </h3>
                <div className="text-xs font-mono text-[#ff7a1a] font-semibold">
                  {activeDossier.role}
                </div>
                <div className="text-[11px] font-mono text-[#737373]">
                  DIVISION: {activeDossier.division} • {activeDossier.term}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
                // BIOGRAPHY & PROFILE
              </h4>
              <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans leading-relaxed">
                {activeDossier.bio}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
                // PRIMARY RESPONSIBILITIES
              </h4>
              <ul className="space-y-1.5">
                {activeDossier.responsibilities.map((resp, rIdx) => (
                  <li
                    key={rIdx}
                    className="text-xs text-[#d4d4d4] font-sans flex items-start gap-2"
                  >
                    <span className="text-[#ff6b00] mt-0.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeDossier.socials?.email && (
              <div className="pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-mono">
                <span className="text-[#737373]">CONTACT EMAIL</span>
                <a
                  href={`mailto:${activeDossier.socials.email}`}
                  className="text-[#ff7a1a] hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{activeDossier.socials.email}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
