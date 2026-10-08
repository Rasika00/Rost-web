"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Cpu,
  Bot as BotIcon,
  Zap,
  Crosshair,
  Shield,
  Activity,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  Layers,
  Flame,
  Radio,
  Clock,
  MapPin,
} from "lucide-react";
import { CanvasParticles } from "@/components/canvas-particles";
import { BotDetailModal } from "@/components/bot-detail-modal";
import { EventDetailModal } from "@/components/event-detail-modal";
import { SITE_CONFIG } from "@/data/site-data";
import { BOT_FLEET, Bot } from "@/data/bot-data";
import { ARENA_EVENTS, ArenaEvent } from "@/data/events-data";
import { soundFx } from "@/lib/sound";

export default function HomePage() {
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ArenaEvent | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselItems = [
    {
      title: "VORTEX-X 250lb Heavyweight Kinetic Spinner",
      subtitle: "Reigning National RoboWars Champion // 28.5 kJ Impact Energy",
      image: "/images/bots/vortex-x.png",
      tag: "COMBAT DIVISION",
      metric: "10,200 RPM",
    },
    {
      title: "AEGIS-1 Autonomous LiDAR SLAM Rover",
      subtitle: "Subterranean Exploration Platform // Real-Time 3D Factor Graphs",
      image: "/images/bots/aegis-1.png",
      tag: "AUTONOMY DIVISION",
      metric: "275 TOPS ORIN",
    },
    {
      title: "SYNAPSE 6-DOF Micro-Manipulator",
      subtitle: "Sub-Millimeter Harmonic Drive Arm with Eye-in-Hand Vision Servoing",
      image: "/images/bots/synapse.png",
      tag: "MANIPULATION LAB",
      metric: "±0.02mm REPEATABILITY",
    },
  ];

  const flagshipBots = BOT_FLEET.slice(0, 3);
  const previewEvents = ARENA_EVENTS.slice(0, 3);

  const scrollToSection = (id: string) => {
    soundFx.playTelemetryClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-12 pb-20 overflow-hidden">
        {/* Interactive Circuit Particle Canvas Background */}
        <CanvasParticles className="z-0" />

        {/* Ambient Radial Glowing Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#ff6b00]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Top Status Telemetry Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121212] border border-[#ff6b00]/40 text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(255,107,0,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
            </span>
            <span className="text-[#ff7a1a] font-bold">
              [ STATUS: READY FOR COMBAT // {SITE_CONFIG.status.season} ]
            </span>
          </div>

          {/* Giant Futuristic Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight text-[#fafafa] leading-[1.08] uppercase">
              ROBOTIC SOCIETY OF <span className="text-[#ff6b00] text-glow-orange">TECHNOLOGY</span>
            </h1>
            <p className="text-base sm:text-xl font-mono text-[#ff7a1a] tracking-widest uppercase font-semibold">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </p>
          </div>

          {/* Subtitle Description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/projects"
              onClick={() => soundFx.playLaserBlip()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <BotIcon className="w-4 h-4" />
              <span>Explore Bot Fleet</span>
            </Link>

            <Link
              href="/events"
              onClick={() => soundFx.playLaserBlip()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#141414]/90 hover:bg-[#1a1a1a] border border-[#ff6b00]/40 hover:border-[#ff6b00] text-[#fafafa] font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-[#ff6b00]" />
              <span>Enter the Arena</span>
            </Link>
          </div>
        </div>

        {/* Scroll To Initialize Trigger */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <button
            onClick={() => scrollToSection("directive")}
            className="flex flex-col items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#737373] hover:text-[#ff6b00] transition-colors uppercase group"
          >
            <span>SCROLL TO INITIALIZE</span>
            <ChevronDown className="w-4 h-4 text-[#ff6b00] group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO WE ARE & CORE LAB DIRECTIVE
          ========================================================================= */}
      <section id="directive" className="relative py-24 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#262626]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header Tag */}
          <div className="flex flex-col items-center text-center space-y-3">
            <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
              // CORE LAB DIRECTIVE
            </span>
            <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa]">
              Mechatronics At The Bleeding Edge
            </h2>
            <p className="max-w-2xl text-sm font-sans text-[#a3a3a3] leading-relaxed">
              ROST operates four specialized engineering squadrons: Heavyweight Kinetic Combat Robotics,
              Subterranean Autonomous LiDAR SLAM Rovers, Bio-Inspired Humanoids & Bipeds, and Industrial
              Sub-Millimeter Robotic Arms.
            </p>
          </div>

          {/* 4 Metric Counters Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SITE_CONFIG.metrics.map((m, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/50 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#ff6b00]/10 transition-colors" />
                <div className="relative z-10 space-y-1">
                  <div className="text-3xl sm:text-4xl font-mono font-black text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono font-bold text-[#ff7a1a] uppercase">
                    {m.label}
                  </div>
                  <div className="text-[11px] font-mono text-[#737373] pt-1">
                    {m.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3D Interactive Carousel Showcase */}
          <div className="relative rounded-2xl border border-[#262626] bg-[#0e0e0e] overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-[#222222] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00] animate-pulse" />
                <span className="text-xs font-mono text-[#fafafa] font-bold tracking-wider uppercase">
                  // INTERACTIVE FLEET RECONNAISSANCE CAROUSEL
                </span>
              </div>

              {/* Navigation Indicators */}
              <div className="flex items-center gap-2">
                {carouselItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      soundFx.playTelemetryClick();
                      setCarouselIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      carouselIndex === i
                        ? "w-8 bg-[#ff6b00]"
                        : "w-2 bg-[#262626] hover:bg-[#555555]"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Active Carousel Item */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative aspect-video rounded-xl overflow-hidden border border-[#ff6b00]/30 shadow-[0_0_30px_rgba(255,107,0,0.15)]">
                <Image
                  src={carouselItems[carouselIndex].image}
                  alt={carouselItems[carouselIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded bg-[#080808]/80 text-[#ff6b00] border border-[#ff6b00]/40 backdrop-blur-sm">
                  {carouselItems[carouselIndex].tag}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="inline-block px-2.5 py-0.5 rounded bg-[#171717] border border-[#262626] text-[11px] font-mono text-[#ff7a1a]">
                  BENCHMARK: {carouselItems[carouselIndex].metric}
                </div>

                <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#fafafa]">
                  {carouselItems[carouselIndex].title}
                </h3>

                <p className="text-sm text-[#a3a3a3] font-sans leading-relaxed">
                  {carouselItems[carouselIndex].subtitle}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href="/projects"
                    onClick={() => soundFx.playLaserBlip()}
                    className="px-5 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => {
                      soundFx.playTelemetryClick();
                      const bot = BOT_FLEET.find((b) =>
                        carouselItems[carouselIndex].title.includes(b.name)
                      );
                      if (bot) setSelectedBot(bot);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#262626] text-xs font-mono text-[#fafafa] transition-colors"
                  >
                    Inspect Telemetry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED BOT FLEET SHOWCASE
          ========================================================================= */}
      <section className="relative py-24 px-4 sm:px-6 bg-[#080808] border-t border-[#262626]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                // SQUADRON HARDWARE
              </span>
              <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                Flagship Bot Fleet
              </h2>
            </div>
            <Link
              href="/projects"
              onClick={() => soundFx.playLaserBlip()}
              className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              <span>View All 6 Fleet Platforms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flagshipBots.map((bot) => (
              <div
                key={bot.id}
                className="group relative rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]"
              >
                {/* Bot Card Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={bot.image}
                    alt={bot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-[#080808]/90 text-[#ff6b00] border border-[#ff6b00]/30 font-semibold backdrop-blur-sm">
                    {bot.weightClass}
                  </div>

                  <div className="absolute top-3 right-3 text-[9px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c]/90 text-[#22c55e] border border-[#22c55e]/30 font-bold">
                    {bot.status}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-xl font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                        {bot.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#737373]">
                        {bot.codename}
                      </span>
                    </div>

                    <p className="text-xs text-[#a3a3a3] line-clamp-2 leading-relaxed">
                      {bot.description}
                    </p>
                  </div>

                  {/* Component Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {bot.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#737373]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Inspect CTA Trigger */}
                  <button
                    onClick={() => {
                      soundFx.playTelemetryClick();
                      setSelectedBot(bot);
                    }}
                    className="w-full mt-2 py-2 px-3 rounded-xl bg-[#171717] hover:bg-[#ff6b00] text-[#fafafa] hover:text-[#080808] border border-[#262626] hover:border-[#ff6b00] text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Subsystems</span>
                    <Crosshair className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ARENA EVENTS PREVIEW
          ========================================================================= */}
      <section className="relative py-24 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#262626]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                // COMBAT SCHEDULE
              </span>
              <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                Arena Tournaments & Challenges
              </h2>
            </div>
            <Link
              href="/events"
              onClick={() => soundFx.playLaserBlip()}
              className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              <span>Explore All Arena Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c1c] text-[#ff7a1a] border border-[#ff6b00]/30 font-bold uppercase">
                      {event.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#22c55e] border border-[#22c55e]/30 font-bold">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="font-mono text-base font-bold text-[#fafafa] leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-[#a3a3a3] line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#222222] font-mono text-xs text-[#737373]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span className="text-[#fafafa]">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#a3a3a3]" />
                    <span className="truncate">{event.venue}</span>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playTelemetryClick();
                      setSelectedEvent(event);
                    }}
                    className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,107,0,0.25)] cursor-pointer"
                  >
                    <span>Inspect Match & Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SPONSOR & RECRUITMENT CALLOUT BANNER
          ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 bg-[#080808] border-t border-[#262626]">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#121212] via-[#171717] to-[#121212] border border-[#ff6b00]/30 shadow-[0_0_50px_rgba(255,107,0,0.15)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase font-bold">
              // INDUSTRY ACCELERATION & RECRUITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-mono font-black text-[#fafafa] uppercase">
              Join Our Engineering Squadron or Sponsor Our Next Bot
            </h2>
            <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans leading-relaxed">
              Whether you are an aspiring roboticist eager to master ROS2 and combat machining, or an industry partner seeking cutting-edge mechatronics validation, ROST is ready to collaborate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              onClick={() => soundFx.playLaserBlip()}
              className="px-6 py-3.5 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-mono font-bold text-xs uppercase text-center transition-all shadow-[0_0_20px_rgba(255,107,0,0.4)] cursor-pointer"
            >
              Apply For Recruitment
            </Link>
            <Link
              href="/contact?type=sponsor"
              onClick={() => soundFx.playLaserBlip()}
              className="px-6 py-3.5 rounded-xl bg-[#141414] hover:bg-[#202020] border border-[#262626] text-[#fafafa] font-mono font-bold text-xs uppercase text-center transition-colors cursor-pointer"
            >
              Corporate Sponsorship
            </Link>
          </div>
        </div>
      </section>

      {/* Modals for Deep-Link Inspection */}
      <BotDetailModal bot={selectedBot} onClose={() => setSelectedBot(null)} />
      <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
