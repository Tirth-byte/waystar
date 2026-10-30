"use client";

import { useEffect } from "react";
import { X, Play } from "lucide-react";

interface OfficialFilmPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
  attribution?: string;
}

export function OfficialFilmModal({
  isOpen,
  onClose,
  videoId,
  title,
  attribution = "Official Developer Film by Emaar Dubai",
}: OfficialFilmPlayerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=1&rel=0&playsinline=1`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border border-white/20">
        {/* Header Bar */}
        <div className="absolute -top-12 left-0 right-0 flex items-center justify-between text-xs text-[#E6DED0]">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994]">
              {attribution}
            </span>
            <span className="text-white/40">•</span>
            <span className="font-serif text-sm text-[#F7F6F2] truncate max-w-md">
              {title}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:text-white transition-colors flex items-center space-x-1 uppercase text-[10px] tracking-widest text-[#B9A994]"
          >
            <span>Close Film</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Official Embedded Video Stream */}
        <iframe
          src={embedUrl}
          title={`${title} - Official Developer Screening`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
}

interface FilmWatchButtonProps {
  onWatch: () => void;
  title: string;
  className?: string;
}

export function FilmWatchButton({ onWatch, title, className = "" }: FilmWatchButtonProps) {
  return (
    <button
      type="button"
      onClick={onWatch}
      className={`inline-flex items-center space-x-2 px-3.5 py-1.5 bg-black/60 hover:bg-[#B9A994] text-white hover:text-[#121312] border border-white/20 hover:border-[#B9A994] backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-medium transition-all ${className}`}
    >
      <Play className="w-3 h-3 fill-current text-[#B9A994] group-hover:text-[#121312]" />
      <span className="truncate max-w-[160px]">Film: {title}</span>
    </button>
  );
}

