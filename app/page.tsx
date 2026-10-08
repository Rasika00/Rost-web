"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  Maximize2,
  X,
  Send,
  MessageSquare,
  CheckCircle2,
  Wrench,
  Compass,
  FileText,
  Mail,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";
import { CanvasParticles } from "@/components/canvas-particles";
import { BotDetailModal } from "@/components/bot-detail-modal";
import { EventDetailModal } from "@/components/event-detail-modal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SITE_CONFIG } from "@/data/site-data";
import { BOT_FLEET, Bot } from "@/data/bot-data";
import { ARENA_EVENTS, ArenaEvent } from "@/data/events-data";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery-data";
import { TEAM_MEMBERS, TeamMember } from "@/data/team-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function HomePage() {
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ArenaEvent | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [activeDossier, setActiveDossier] = useState<TeamMember | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Quick contact dispatch state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCategory, setContactCategory] = useState("Recruitment");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSent, setContactSent] = useState(false);

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
  const previewGallery = GALLERY_ITEMS.slice(0, 4);
  const previewBoard = TEAM_MEMBERS.slice(0, 4);

  const pillarIcons: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-5 h-5 text-[#ff6b00]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#ff6b00]" />,
    Zap: <Zap className="w-5 h-5 text-[#ff6b00]" />,
    Crosshair: <Crosshair className="w-5 h-5 text-[#ff6b00]" />,
  };

  const scrollToSection = (id: string) => {
    const lenis = (
      window as unknown as {
        lenis?: { scrollTo: (target: string | HTMLElement | number, opts?: object) => void };
      }
    ).lenis;

    const el = document.getElementById(id);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -70, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState(null, "", `/#${id}`);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeGalleryIndex === null) return;
      if (e.key === "Escape") {
        setActiveGalleryIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveGalleryIndex((prev) =>
          prev !== null ? (prev + 1) % previewGallery.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveGalleryIndex((prev) =>
          prev !== null ? (prev - 1 + previewGallery.length) % previewGallery.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (activeGalleryIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeGalleryIndex, previewGallery.length]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      toast.error("TELEMETRY_INCOMPLETE: Please fill in all required fields.");
      return;
    }

    setIsSubmittingContact(true);
    setTimeout(() => {
      setIsSubmittingContact(false);
      setContactSent(true);
      toast.success("DISPATCH_TRANSMITTED // Squad leadership notified.", {
        description: `Confirmation telemetry sent to ${contactEmail}`,
      });
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#080808]">
      {/* =========================================================================
          TOPIC 01: HOME (HERO SECTION)
          ========================================================================= */}
      <section
        id="home"
        className="relative min-h-[92vh] flex flex-col justify-center items-start text-left px-4 sm:px-8 lg:px-16 pt-16 pb-20 overflow-hidden"
      >
        {/* Looping Hero Background Video with High Visibility */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-85 brightness-95 contrast-105"
            src={SITE_CONFIG.heroVideo}
          />
          {/* Directional Contrast Gradient: Darkens left side for text readability while leaving the rest vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/70 to-[#080808]/20" />
          {/* Subtle Vertical Fade for Seamless Section Blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]" />
        </div>

        {/* Interactive Circuit Particle Canvas Background */}
        <CanvasParticles className="z-[1]" />

        {/* Ambient Radial Glowing Orbs */}
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#ff6b00]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none z-[1]" />

        <div className="relative z-10 max-w-4xl w-full space-y-6">
          <ScrollReveal direction="down" duration={0.7}>
            {/* Top Status Telemetry Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121212]/90 border border-[#ff6b00]/40 text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(255,107,0,0.2)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
              </span>
              <span className="text-[#ff7a1a] font-bold">
                [ STATUS: READY FOR COMBAT // {SITE_CONFIG.status.season} ]
              </span>
            </div>

            {/* Giant Futuristic Headline */}
            <div className="space-y-2 mt-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight text-[#fafafa] leading-[1.08] uppercase">
                ROBOTIC SOCIETY OF <span className="text-[#ff6b00] text-glow-orange">TECHNOLOGY</span>
              </h1>
              <p className="text-base sm:text-xl font-mono text-[#ff7a1a] tracking-widest uppercase font-semibold">
                &ldquo;{SITE_CONFIG.tagline}&rdquo;
              </p>
            </div>

            {/* Subtitle Description */}
            <p className="max-w-2xl text-sm sm:text-base text-[#d4d4d4] font-sans leading-relaxed mt-4">
              {SITE_CONFIG.description}
            </p>

            {/* Quick Status Bar */}
            <div className="pt-6 flex flex-wrap items-center justify-start gap-4 sm:gap-8 font-mono text-xs text-[#a3a3a3]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span>CORE: {SITE_CONFIG.status.coreClock}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <span>TELEMETRY: {SITE_CONFIG.status.telemetryStatus}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span>FIRMWARE: {SITE_CONFIG.status.activeFirmware}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll To Initialize Trigger */}
        <div className="absolute bottom-6 left-4 sm:left-8 lg:left-16 flex flex-col items-start gap-2 z-10">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#a3a3a3] hover:text-[#ff6b00] transition-colors uppercase group cursor-pointer"
          >
            <span>SCROLL TO 02 // ABOUT</span>
            <ChevronDown className="w-4 h-4 text-[#ff6b00] group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          TOPIC 02: ABOUT (CORE DIRECTIVE & 4 PILLARS)
          ========================================================================= */}
      <section
        id="about"
        className="relative py-24 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#262626] cyber-scanline"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal direction="down" duration={0.75}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                  // 02. ABOUT ROST
                </span>
                <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                  Core Directive & 4 Pillars
                </h2>
                <p className="max-w-xl text-sm font-sans text-[#a3a3a3] leading-relaxed mt-2">
                  ROST was established by mechatronics pioneers to engineer machines capable of surviving extreme combat impacts and navigating subterranean caverns autonomously.
                </p>
              </div>

              <Link
                href="/about"
                className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider"
              >
                <span>Explore Full About & Facility Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 4 Metric Counters Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SITE_CONFIG.metrics.map((m, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 110}
                direction="up"
                duration={0.75}
                distance={56}
                className="h-full flex"
              >
                <div className="w-full relative p-6 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/50 transition-all group overflow-hidden hover:-translate-y-1 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
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
              </ScrollReveal>
            ))}
          </div>

          {/* 4 Pillars of Mechatronics Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SITE_CONFIG.pillars.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.number}
                delay={idx * 120}
                direction="up"
                duration={0.8}
                distance={56}
                className="h-full flex"
              >
                <div className="w-full p-6 rounded-2xl bg-[#111111] border border-[#262626] hover:border-[#ff6b00]/60 transition-all flex flex-col justify-between space-y-4 hover:-translate-y-1 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-[#171717] border border-[#262626] text-[#ff6b00]">
                        {pillarIcons[pillar.icon] || <Cpu className="w-5 h-5 text-[#ff6b00]" />}
                      </div>
                      <span className="text-xs font-mono text-[#ff6b00] font-bold">
                        P-0{pillar.number}
                      </span>
                    </div>

                    <h3 className="font-mono text-sm font-bold uppercase text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-[#a3a3a3] font-sans leading-relaxed">
                      {pillar.lead}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#222222] text-[10px] font-mono text-[#ff7a1a]">
                    METRIC: {pillar.stats}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Lab Coordinates HUD Banner */}
          <ScrollReveal direction="up" delay={100} duration={0.6}>
            <div className="p-5 rounded-2xl bg-[#121212] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#ff6b00]" />
                <div>
                  <span className="text-[#fafafa] font-bold">{SITE_CONFIG.affiliation.faculty}</span>
                  <span className="text-[#737373]"> // {SITE_CONFIG.affiliation.lab}</span>
                </div>
              </div>
              <div className="text-[#ff7a1a] text-[11px] bg-[#171717] px-3 py-1.5 rounded-lg border border-[#262626]">
                COORDS: {SITE_CONFIG.affiliation.coordinates}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          TOPIC 03: EVENTS (ARENA TOURNAMENTS & CHALLENGES)
          ========================================================================= */}
      <section
        id="events"
        className="relative py-24 px-4 sm:px-6 bg-[#080808] border-t border-[#262626] cyber-scanline"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal direction="down" duration={0.75}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                  // 03. ARENA EVENTS & COMBAT SCHEDULE
                </span>
                <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                  Tournaments & Match Challenges
                </h2>
                <p className="max-w-xl text-sm font-sans text-[#a3a3a3] leading-relaxed mt-2">
                  ROST squads compete in national heavyweight cage battles and autonomous subterranean robotics trials.
                </p>
              </div>

              <Link
                href="/events"
                className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider"
              >
                <span>Explore All Arena Events & Brackets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 3-Column Tournament Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewEvents.map((event, idx) => (
              <ScrollReveal
                key={event.id}
                delay={idx * 130}
                direction="up"
                duration={0.8}
                distance={56}
                className="h-full flex"
              >
                <div className="w-full p-6 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between space-y-6 hover:shadow-[0_0_25px_rgba(255,107,0,0.15)] hover:-translate-y-1">
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
                        setSelectedEvent(event);
                      }}
                      className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,107,0,0.25)] cursor-pointer"
                    >
                      <span>Inspect Match & Register</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TOPIC 04: PROJECTS (SQUADRON HARDWARE & FLEET)
          ========================================================================= */}
      <section
        id="projects"
        className="relative py-24 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#262626] cyber-scanline"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          <ScrollReveal direction="down" duration={0.75}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                  // 04. SQUADRON HARDWARE & FLEET
                </span>
                <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                  Flagship Bot Fleet & Platforms
                </h2>
                <p className="max-w-xl text-sm font-sans text-[#a3a3a3] leading-relaxed mt-2">
                  Engineered from raw billet alloy to multi-kilowatt power inverters. Explore our active robotics systems.
                </p>
              </div>

              <Link
                href="/projects"
                className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider"
              >
                <span>Explore All 6 Fleet Platforms & Repositories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 3D Interactive Carousel Showcase */}
          <ScrollReveal direction="scale" delay={80} duration={0.8} distance={40}>
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
                      onClick={() => setCarouselIndex(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
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
                      className="px-5 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => {
                        const bot = BOT_FLEET.find((b) =>
                          carouselItems[carouselIndex].title.includes(b.name)
                        );
                        if (bot) setSelectedBot(bot);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#262626] text-xs font-mono text-[#fafafa] transition-colors cursor-pointer"
                    >
                      Inspect Telemetry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flagshipBots.map((bot, idx) => (
              <ScrollReveal
                key={bot.id}
                delay={idx * 130}
                direction="up"
                duration={0.8}
                distance={56}
                className="h-full flex"
              >
                <div className="w-full group relative rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] hover:-translate-y-1">
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
                      {bot.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#737373]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Inspect CTA Trigger */}
                    <button
                      onClick={() => setSelectedBot(bot)}
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-[#171717] hover:bg-[#ff6b00] text-[#fafafa] hover:text-[#080808] border border-[#262626] hover:border-[#ff6b00] text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Inspect Subsystems</span>
                      <Crosshair className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TOPIC 05: GALLERY (VISUAL TELEMETRY ARCHIVES)
          ========================================================================= */}
      <section
        id="gallery"
        className="relative py-24 px-4 sm:px-6 bg-[#080808] border-t border-[#262626] cyber-scanline"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal direction="down" duration={0.75}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                  // 05. VISUAL TELEMETRY ARCHIVES
                </span>
                <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                  Combat Footage & Prototyping Archives
                </h2>
                <p className="max-w-xl text-sm font-sans text-[#a3a3a3] leading-relaxed mt-2">
                  High-speed 240fps arena impact recordings, Haas 5-axis CNC titanium milling, and subterranean LiDAR test runs.
                </p>
              </div>

              <Link
                href="/gallery"
                className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider"
              >
                <span>Explore Full Gallery & High-Res Archives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 4-Item Gallery Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {previewGallery.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                delay={idx * 110}
                direction="up"
                duration={0.8}
                distance={52}
                className="h-full flex"
              >
                <div
                  onClick={() => setActiveGalleryIndex(idx)}
                  className="w-full group relative rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all overflow-hidden flex flex-col justify-between hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0d]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-75" />

                    <div className="absolute top-2.5 left-2.5 text-[9px] font-mono px-2 py-0.5 rounded bg-[#080808]/90 text-[#ff6b00] border border-[#ff6b00]/30 font-semibold backdrop-blur-sm">
                      {item.category}
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-[#080808]/80 text-[#fafafa] border border-[#262626] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <h3 className="font-mono text-sm font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#a3a3a3] line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                    <div className="pt-2 border-t border-[#222222] text-[9px] font-mono text-[#ff7a1a] truncate">
                      {item.telemetry}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TOPIC 06: BOARD (EXECUTIVE SQUADRON LEADS)
          ========================================================================= */}
      <section
        id="board"
        className="relative py-24 px-4 sm:px-6 bg-[#0a0a0a] border-t border-[#262626] cyber-scanline"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal direction="down" duration={0.75}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                  // 06. LEADERSHIP COMMAND & BOARD
                </span>
                <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                  Executive Directorate & Squadron Leads
                </h2>
                <p className="max-w-xl text-sm font-sans text-[#a3a3a3] leading-relaxed mt-2">
                  Meet the student engineers, firmware architects, and faculty mentors directing ROST tournament campaigns.
                </p>
              </div>

              <Link
                href="/board"
                className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider"
              >
                <span>Explore Full Executive Board & Governance Charter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 4 Squadron Directors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {previewBoard.map((member, idx) => (
              <ScrollReveal
                key={member.id}
                delay={idx * 120}
                direction="up"
                duration={0.8}
                distance={56}
                className="h-full flex"
              >
                <div
                  onClick={() => setActiveDossier(member)}
                  className="w-full group rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all p-5 space-y-4 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] hover:-translate-y-1 cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0d0d0d] border border-[#222222]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-70" />

                      <div className="absolute top-2 left-2 text-[9px] font-mono px-2 py-0.5 rounded bg-[#080808]/90 text-[#ff6b00] border border-[#ff6b00]/30 font-bold">
                        {member.callsign}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-mono text-base font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors line-clamp-1">
                        {member.name}
                      </h3>
                      <div className="text-xs font-mono text-[#ff7a1a] font-semibold truncate">
                        {member.role}
                      </div>
                      <div className="text-[10px] font-mono text-[#737373]">
                        {member.division}
                      </div>
                    </div>

                    <p className="text-xs text-[#a3a3a3] line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-xs font-mono text-[#737373]">
                    <span className="text-[10px] text-[#ff6b00] uppercase font-bold group-hover:underline">
                      Inspect Dossier →
                    </span>
                    <span className="text-[10px] text-[#555555]">{member.term}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TOPIC 07: CONTACT (TRANSMISSION BEACON & COMMS)
          ========================================================================= */}
      <section
        id="contact"
        className="relative py-24 px-4 sm:px-6 bg-[#080808] border-t border-[#262626] cyber-scanline"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal direction="down" duration={0.75}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                  // 07. TRANSMISSION BEACON & COMMS
                </span>
                <h2 className="text-2xl sm:text-4xl font-mono font-black uppercase text-[#fafafa] mt-1">
                  Connect With ROST Command
                </h2>
                <p className="max-w-xl text-sm font-sans text-[#a3a3a3] leading-relaxed mt-2">
                  Apply for student engineering tryouts, propose hardware component sponsorships, or request arena testing cage access.
                </p>
              </div>

              <Link
                href="/contact"
                className="text-xs font-mono text-[#ff6b00] hover:underline flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider"
              >
                <span>View Full Contact Directory & FAQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Contact Main Grid: Interactive Form + Quick Comms Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Quick Dispatch Form */}
            <ScrollReveal direction="up" duration={0.8} distance={52} className="lg:col-span-7">
              <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="space-y-1">
                  <h3 className="text-base font-mono font-bold text-[#fafafa] uppercase">
                    // TRANSMIT TELEMETRY DISPATCH
                  </h3>
                  <p className="text-xs text-[#a3a3a3]">
                    Squad leadership reviews all incoming recruit dossiers and sponsorship proposals daily.
                  </p>
                </div>

                {contactSent ? (
                  <div className="p-6 rounded-xl bg-[#0e2a14] border border-[#22c55e]/40 text-xs font-mono text-[#22c55e] space-y-3">
                    <div className="flex items-center gap-2 text-base font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>DISPATCH TRANSMITTED // ACKNOWLEDGED</span>
                    </div>
                    <p className="text-xs text-[#86efac]">
                      Your message has been securely routed to our recruitment marshals and executive leads.
                    </p>
                    <button
                      onClick={() => setContactSent(false)}
                      className="px-4 py-2 rounded-lg bg-[#141414] text-[#fafafa] border border-[#262626] hover:border-[#ff6b00] transition-colors cursor-pointer"
                    >
                      Send another transmission &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-[#737373] mb-1">
                          OPERATIVE NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Mercer"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-[#737373] mb-1">
                          DISPATCH EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@institution.edu"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#737373] mb-1">
                        TRANSMISSION CATEGORY
                      </label>
                      <select
                        value={contactCategory}
                        onChange={(e) => setContactCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:outline-none focus:border-[#ff6b00]"
                      >
                        <option value="Recruitment">Student Recruitment & Squadron Tryouts</option>
                        <option value="Sponsorship">Corporate Component / Hardware Sponsorship</option>
                        <option value="Competition">Arena Tournament & Match Inquiry</option>
                        <option value="Research">Academic Mechatronics Research Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#737373] mb-1">
                        MESSAGE BRIEFING *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Provide details about your engineering background, project ideas, or partnership objectives..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingContact}
                      className="w-full py-3 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmittingContact ? "Transmitting..." : "Send Secure Transmission"}</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Quick-Connect Side Panels with Staggered Cascades */}
            <div className="lg:col-span-5 space-y-4">
              {/* Discord Server */}
              <ScrollReveal direction="up" delay={120} duration={0.8} distance={52}>
                <a
                  href={SITE_CONFIG.socials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all flex items-start gap-4 group cursor-pointer block hover:-translate-y-0.5"
                >
                  <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                        Discord Comms Server
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#737373]" />
                    </div>
                    <p className="text-xs text-[#a3a3a3]">
                      Join 1,200+ roboticists discussing FreeRTOS, CNC machining, and tournament battle footage.
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              {/* Physical Lab Facility Coordinates */}
              <ScrollReveal direction="up" delay={240} duration={0.8} distance={52}>
                <div className="p-5 rounded-2xl bg-[#121212] border border-[#262626] space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] text-[#ff6b00]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold text-[#fafafa]">
                        Physical Testing Cage & Lab
                      </h4>
                      <div className="text-[10px] font-mono text-[#ff7a1a]">
                        SECTOR 9 // ROOM 104-B
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#a3a3a3] font-mono leading-relaxed">
                    {SITE_CONFIG.affiliation.faculty} <br />
                    {SITE_CONFIG.affiliation.lab} <br />
                    {SITE_CONFIG.affiliation.university}
                  </p>
                </div>
              </ScrollReveal>

              {/* GitHub Firmware Repositories */}
              <ScrollReveal direction="up" delay={360} duration={0.8} distance={52}>
                <a
                  href={SITE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all flex items-start gap-4 group cursor-pointer block hover:-translate-y-0.5"
                >
                  <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                        GitHub Open Source Firmware
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#737373]" />
                    </div>
                    <p className="text-xs text-[#a3a3a3]">
                      Fork our ROS2 Humble packages, STM32 FOC motor controllers, and KiCAD board layouts.
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MODALS (TELEMETRY INSPECTORS & LIGHTBOX)
          ========================================================================= */}
      {/* Bot Subsystems Deep-Link Modal */}
      <BotDetailModal bot={selectedBot} onClose={() => setSelectedBot(null)} />

      {/* Arena Event Registration Deep-Link Modal */}
      <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* Gallery Lightbox Modal */}
      {activeGalleryIndex !== null && previewGallery[activeGalleryIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/95 backdrop-blur-2xl animate-in fade-in duration-200">
          <button
            onClick={() => setActiveGalleryIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-[#141414] border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={() =>
              setActiveGalleryIndex((prev) =>
                prev !== null ? (prev - 1 + previewGallery.length) % previewGallery.length : null
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl bg-[#141414]/90 border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setActiveGalleryIndex((prev) =>
                prev !== null ? (prev + 1) % previewGallery.length : null
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl bg-[#141414]/90 border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center space-y-4">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#ff6b00]/40 shadow-[0_0_50px_rgba(255,107,0,0.25)] bg-[#0d0d0d]">
              <Image
                src={previewGallery[activeGalleryIndex].image}
                alt={previewGallery[activeGalleryIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="w-full bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#1c1c1c] text-[#ff7a1a] border border-[#ff6b00]/30 font-bold uppercase">
                    {previewGallery[activeGalleryIndex].category}
                  </span>
                  <span className="font-bold text-[#fafafa]">
                    {previewGallery[activeGalleryIndex].title}
                  </span>
                </div>
                <p className="text-[11px] text-[#a3a3a3] font-sans">
                  {previewGallery[activeGalleryIndex].caption}
                </p>
              </div>
              <div className="text-[10px] text-[#ff6b00] bg-[#0d0d0d] px-3 py-1.5 rounded border border-[#262626]">
                {previewGallery[activeGalleryIndex].telemetry}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Board Director Dossier Modal */}
      {activeDossier && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/90 backdrop-blur-xl animate-in fade-in duration-200"
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
                  CALLSIGN: {activeDossier.callsign}
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
                // BIOGRAPHY & CREDENTIALS
              </h4>
              <p className="text-xs sm:text-sm text-[#a3a3a3] font-sans leading-relaxed">
                {activeDossier.bio}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
                // CORE TECHNICAL SPECIALTIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeDossier.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-[#fafafa]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

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
                href="/board"
                onClick={() => setActiveDossier(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] text-xs font-mono font-bold uppercase transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Full Directorate Roster</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
