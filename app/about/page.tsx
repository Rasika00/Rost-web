"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Cpu,
  Zap,
  Crosshair,
  Award,
  Terminal,
  ExternalLink,
  Mail,
  Wrench,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SITE_CONFIG } from "@/data/site-data";
import { TEAM_MEMBERS } from "@/data/team-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AboutPage() {
  const pillarIcons: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-6 h-6 text-[#ff6b00]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#ff6b00]" />,
    Zap: <Zap className="w-6 h-6 text-[#ff6b00]" />,
    Crosshair: <Crosshair className="w-6 h-6 text-[#ff6b00]" />,
  };

  const facilities = [
    {
      title: "5-Axis CNC Milling Cell",
      spec: "Haas VF-4 with High-Speed Machining & Renishaw Probing",
      description: "Milling 7075-T6 billet aluminum unibody chassis, weapon hubs, and titanium bulkheads.",
    },
    {
      title: "Subterranean LiDAR Test Chicanes",
      spec: "2,400 sq. ft. Reconfigurable Cavern Chamber",
      description: "Equipped with smoke generators, artificial debris, and ground truth optical tracking cameras.",
    },
    {
      title: "Electronics & SMT Cleanroom",
      spec: "Automated Pick-and-Place & Reflow Oven",
      description: "Prototyping custom 4-layer GaN motor inverters and STM32H7 flight computers.",
    },
    {
      title: "High-RPM Dyno Blast Cell",
      spec: "15kW Regenerative Absorber & Kevlar Blast Shield",
      description: "Characterizing motor torque, thermal runaway, and dynamic brake deceleration curves.",
    },
  ];

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* =========================================================================
            HEADER & ORIGIN SECTION
            ========================================================================= */}
        <ScrollReveal direction="down" duration={0.6}>
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a]">
              <span>// ORIGIN STORY & LAB CHARTER</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
              Engineering The Machines Of Tomorrow
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              ROST was founded in 2021 by four mechatronics students working out of a damp garage soldering bench.
              Today, ROST is a nationally dominant hardware innovation laboratory, competing in premier combat robotics cages
              and engineering autonomous SLAM rovers that push robotic survivability to the extreme.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            THE 4 ENGINEERING PILLARS
            ========================================================================= */}
        <div className="space-y-8">
          <ScrollReveal direction="down" duration={0.6}>
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                // ARCHITECTURAL CORE
              </span>
              <h2 className="text-2xl sm:text-3xl font-mono font-black uppercase text-[#fafafa]">
                The 4 Pillars of Mechatronics
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONFIG.pillars.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.number}
                delay={idx * 80}
                direction="up"
                duration={0.6}
                className="h-full flex"
              >
                <div className="w-full p-8 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:-translate-y-1">
                  <div className="absolute top-4 right-4 text-4xl font-mono font-black text-[#202020] group-hover:text-[#ff6b00]/20 transition-colors">
                    {pillar.number}
                  </div>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] group-hover:border-[#ff6b00]/40 transition-colors">
                        {pillarIcons[pillar.icon] || <Cpu className="w-6 h-6 text-[#ff6b00]" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#ff7a1a] uppercase font-bold">
                          PILLAR {pillar.number}
                        </span>
                        <h3 className="text-lg font-mono font-black text-[#fafafa]">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-mono text-[#ff7a1a] font-semibold leading-snug">
                      {pillar.lead}
                    </p>

                    <p className="text-xs text-[#a3a3a3] font-sans leading-relaxed">
                      {pillar.details}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0e0e0e] border border-[#222222] text-xs font-mono text-[#737373] flex items-center justify-between">
                    <span>TELEMETRY METRICS:</span>
                    <span className="text-[#fafafa] font-semibold">{pillar.stats}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PROTOTYPING FACILITIES
            ========================================================================= */}
        <div className="space-y-8 pt-8">
          <ScrollReveal direction="down" duration={0.6}>
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                // PHYSICAL CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-mono font-black uppercase text-[#fafafa]">
                Our Fabrication & Test Facilities
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((fac, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 60}
                direction="up"
                duration={0.5}
                className="h-full flex"
              >
                <div className="w-full p-5 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/40 transition-all space-y-3 flex flex-col justify-between hover:-translate-y-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#ff6b00]">
                      <Wrench className="w-4 h-4" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                        ZONE 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-mono font-bold text-[#fafafa]">
                      {fac.title}
                    </h3>
                    <div className="text-[10px] font-mono text-[#ff7a1a] bg-[#171717] p-2 rounded border border-[#262626]">
                      {fac.spec}
                    </div>
                  </div>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =========================================================================
            EXECUTIVE SQUADRON LEADS & OFFICERS
            ========================================================================= */}
        <div className="space-y-8 pt-8">
          <ScrollReveal direction="down" duration={0.6}>
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                // COMMAND STRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-mono font-black uppercase text-[#fafafa]">
                Executive Squadron Leads
              </h2>
              <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-xl">
                Meet the roboticists, firmware architects, and mechatronics engineers leading our research and tournament operations.
              </p>
              <div className="pt-2">
                <Link
                  href="/board"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171717] hover:bg-[#ff6b00] text-[#fafafa] hover:text-[#080808] border border-[#ff6b00]/30 hover:border-[#ff6b00] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>View Full Executive Board & Governance Charter</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal
                key={member.id}
                delay={idx * 75}
                direction="up"
                duration={0.6}
                className="h-full flex"
              >
                <div className="w-full rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all p-6 space-y-4 flex flex-col justify-between group shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:-translate-y-1">
                  <div className="space-y-4">
                    {/* Member Photo or Avatar */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0d0d0d] border border-[#222222]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-70" />
                      
                      <div className="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#080808]/90 text-[#ff6b00] border border-[#ff6b00]/30">
                        {member.callsign}
                      </div>

                      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#22c55e] bg-[#0d0d0d]/80 px-2 py-0.5 rounded border border-[#22c55e]/30">
                        SYS_ACTIVE
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-mono text-base font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                        {member.name}
                      </h3>
                      <div className="text-xs font-mono text-[#ff7a1a] font-semibold">
                        {member.role}
                      </div>
                      <div className="text-[10px] font-mono text-[#737373]">
                        DIVISION: {member.division}
                      </div>
                    </div>

                    <p className="text-xs text-[#a3a3a3] leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Specialties Pills */}
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

                  {/* Social Links */}
                  <div className="pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-mono text-[#737373]">
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
                          aria-label="Email Address"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
