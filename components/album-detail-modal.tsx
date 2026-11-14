"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { RostAlbum, AlbumPhoto } from "@/data/gallery-data";

interface AlbumDetailModalProps {
  album: RostAlbum | null;
  onClose: () => void;
}

export function AlbumDetailModal({ album, onClose }: AlbumDetailModalProps) {
  const [activePhoto, setActivePhoto] = useState<AlbumPhoto | null>(null);

  const photos: AlbumPhoto[] =
    album?.photos && album.photos.length > 0
      ? album.photos
      : album
      ? [
          {
            id: `${album.id}-cover`,
            title: album.name,
            image: album.coverImage || album.image,
          },
        ]
      : [];

  const activePhotoIndex = activePhoto ? photos.findIndex((p) => p.id === activePhoto.id) : -1;

  const handlePrevPhoto = useCallback(() => {
    if (photos.length <= 1) return;
    if (activePhotoIndex > 0) {
      setActivePhoto(photos[activePhotoIndex - 1]);
    } else {
      setActivePhoto(photos[photos.length - 1]);
    }
  }, [activePhotoIndex, photos]);

  const handleNextPhoto = useCallback(() => {
    if (photos.length <= 1) return;
    if (activePhotoIndex < photos.length - 1) {
      setActivePhoto(photos[activePhotoIndex + 1]);
    } else {
      setActivePhoto(photos[0]);
    }
  }, [activePhotoIndex, photos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activePhoto) {
          setActivePhoto(null);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowLeft" && activePhoto) {
        handlePrevPhoto();
      } else if (e.key === "ArrowRight" && activePhoto) {
        handleNextPhoto();
      }
    };

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;

    if (album) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      document.body.classList.add("event-modal-open");
      window.dispatchEvent(new CustomEvent("event-modal-change", { detail: { open: true } }));
      lenis?.stop();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      document.body.classList.remove("event-modal-open");
      window.dispatchEvent(new CustomEvent("event-modal-change", { detail: { open: false } }));
      lenis?.start();
    };
  }, [album, activePhoto, onClose, handlePrevPhoto, handleNextPhoto]);

  if (!album) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/95 backdrop-blur-xl animate-in fade-in duration-200 cursor-pointer"
        data-lenis-prevent="true"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-[#141414]/90 border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors cursor-pointer"
          aria-label="Close Album"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content - Natural Dimensions, Full Photo Visible */}
        {photos.length === 1 ? (
          /* Single Image Display - Natural Aspect Ratio, Full Photo */
          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            className="relative max-w-6xl max-h-[88vh] flex items-center justify-center p-2 cursor-default"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[0].image}
              alt={album.name}
              className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-2xl border border-[#ff6b00]/40 shadow-[0_0_50px_rgba(255,107,0,0.3)] bg-[#0d0d0d]"
            />
          </div>
        ) : (
          /* Multiple Images - Masonry Layout (Natural Heights, Zero Cropping) */
          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl bg-[#121212]/95 border border-[#ff6b00]/30 shadow-[0_0_50px_rgba(255,107,0,0.25)] p-4 sm:p-6 cursor-default"
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 w-full">
              {photos.map((photo, idx) => (
                <div
                  key={photo.id || idx}
                  onClick={() => setActivePhoto(photo)}
                  className="break-inside-avoid mb-4 group cursor-pointer relative rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-[#ff6b00]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,0,0.25)] hover:scale-[1.01]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.image}
                    alt={album.name}
                    loading="lazy"
                    className="w-full h-auto block rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Photo Lightbox - Natural Aspect Ratio */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 bg-[#050505]/95 backdrop-blur-2xl animate-in fade-in duration-200 cursor-pointer"
        >
          {/* Close Photo Viewer */}
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-[#141414] border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors cursor-pointer"
            aria-label="Close Photo"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl bg-[#141414]/90 border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl bg-[#141414]/90 border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Lightbox Image - Full Photo View */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[88vh] flex items-center justify-center cursor-default p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activePhoto.image}
              alt={album.name}
              className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-2xl border border-[#ff6b00]/40 shadow-[0_0_50px_rgba(255,107,0,0.3)] bg-[#0d0d0d]"
            />
          </div>
        </div>
      )}
    </>
  );
}
