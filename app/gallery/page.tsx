"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Filter,
  Camera,
  Activity,
  Layers,
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Tournament Matches",
    "Lab Fabrication",
    "Pit Crew & Arena",
    "Autonomous Trials",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === "Escape") {
        setActiveItemIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveItemIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveItemIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (activeItemIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeItemIndex, filteredItems.length]);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <ScrollReveal direction="down" duration={0.65}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a]">
              <span>// RECONNAISSANCE ARCHIVE & LAB FOOTAGE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
              Lab & Tournament Gallery
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              High-resolution visual telemetry capturing explosive tournament collisions, 5-axis titanium milling,
              high-speed autonomous drone gates, and championship podium celebrations.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal direction="up" delay={100} duration={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-[#121212] border border-[#262626]">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveItemIndex(null);
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

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 60}
              direction="scale"
              duration={0.6}
              className="h-full flex"
            >
              <div
                onClick={() => {
                  setActiveItemIndex(idx);
                }}
                className="w-full group relative rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1"
              >
                {/* Media Asset */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-70" />

                  <div className="absolute top-3 left-3 text-[9px] font-mono px-2 py-0.5 rounded bg-[#080808]/90 text-[#ff6b00] border border-[#ff6b00]/30 font-semibold backdrop-blur-sm uppercase">
                    {item.category}
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#080808]/80 text-[#fafafa] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                  </div>
                </div>

                {/* Caption & Telemetry bar */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#a3a3a3] line-clamp-2 mt-1">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono text-[#737373]">
                    <span>{item.date}</span>
                    <span className="text-[#ff7a1a] truncate max-w-[150px]">
                      {item.telemetry.split("//")[0]}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/95 backdrop-blur-2xl animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={() => {
              setActiveItemIndex(null);
            }}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-[#141414] border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => {
              setActiveItemIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl bg-[#141414]/90 border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => {
              setActiveItemIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : null
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl bg-[#141414]/90 border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-5xl w-full flex flex-col items-center space-y-4">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#ff6b00]/40 shadow-[0_0_50px_rgba(255,107,0,0.25)] bg-[#0d0d0d]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Telemetry Caption HUD */}
            <div className="w-full p-4 rounded-xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#fafafa] text-sm">{activeItem.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#1c1c1c] text-[#ff6b00] border border-[#ff6b00]/30">
                    {activeItem.category}
                  </span>
                </div>
                <p className="text-xs text-[#a3a3a3] font-sans">{activeItem.caption}</p>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="text-[#ff7a1a] font-bold">{activeItem.telemetry}</div>
                <div className="text-[10px] text-[#737373]">
                  Use Arrow Keys to Navigate • Esc to Dismiss
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
