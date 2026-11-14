"use client";

import { useState } from "react";
import Image from "next/image";
import { ROST_ALBUMS, RostAlbum } from "@/data/gallery-data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AlbumDetailModal } from "@/components/album-detail-modal";

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<RostAlbum | null>(null);

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <ScrollReveal direction="down" duration={0.65}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a]">
              <span>// ROST ALBUMS & PHOTO ARCHIVES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
              Society Albums
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              Explore photo collections and albums from ROST Annual General Meetings, technical workshops, and engineering initiatives.
            </p>
          </div>
        </ScrollReveal>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROST_ALBUMS.map((album, idx) => (
            <ScrollReveal
              key={album.id}
              delay={idx * 70}
              direction="up"
              duration={0.6}
              className="h-full flex"
            >
              <div
                onClick={() => setSelectedAlbum(album)}
                className="group cursor-pointer w-full rounded-2xl bg-[#141414]/85 backdrop-blur-xl border border-white/10 hover:border-[#ff6b00]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_8px_32px_rgba(255,107,0,0.15)] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1.5"
              >
                {/* Album Name */}
                <div className="p-5 pb-4">
                  <h3 className="font-mono text-base sm:text-lg font-bold text-[#fafafa] group-hover:text-[#ff7a1a] transition-colors leading-snug">
                    {album.name}
                  </h3>
                </div>

                {/* Album Cover Image */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src={album.coverImage || album.image}
                    alt={album.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/70 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Album Detail & Collection Modal */}
      <AlbumDetailModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
    </div>
  );
}
