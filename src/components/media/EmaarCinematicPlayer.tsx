"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX, X } from "lucide-react";

interface EmaarCinematicPlayerProps {
  videoId: string;
  title: string;
  posterUrl: string;
  aspectRatio?: "full" | "video" | "cinema";
  className?: string;
  overlayGradient?: boolean;
  priority?: boolean;
  showBadge?: boolean;
  badgePosition?: "bottom-right" | "bottom-left" | "top-right";
  children?: React.ReactNode;
}

export default function EmaarCinematicPlayer({
  videoId,
  title,
  posterUrl,
  aspectRatio = "full",
  className = "",
  overlayGradient = true,
  priority = false,
  showBadge = true,
  badgePosition = "bottom-right",
  children,
}: EmaarCinematicPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(priority);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            // Optional: unload iframe when far off screen to preserve memory
            if (entry.boundingClientRect.top > window.innerHeight * 2 || entry.boundingClientRect.bottom < -window.innerHeight * 2) {
              setIsInView(false);
              setIframeLoaded(false);
            }
          }
        });
      },
      { rootMargin: "300px 0px 300px 0px", threshold: 0.05 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [priority]);

  // Background embed URL: autoplay muted loop, zero controls, privacy enhanced
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`;

  // Modal full cinema URL: with full controls and audio
  const modalEmbedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=1&rel=0&playsinline=1`;

  const getAspectClass = () => {
    switch (aspectRatio) {
      case "video":
        return "w-full aspect-video";
      case "cinema":
        return "w-full aspect-[21/9]";
      case "full":
      default:
        return "w-full h-full min-h-[100svh]";
    }
  };

  const getBadgePositionClass = () => {
    switch (badgePosition) {
      case "bottom-left":
        return "bottom-6 left-6";
      case "top-right":
        return "top-24 right-6";
      case "bottom-right":
      default:
        return "bottom-6 right-6";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#121312] ${getAspectClass()} ${className}`}
    >
      {/* 1. Poster Fallback Layer (Always rendered immediately for 0 layout shift) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          iframeLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src={posterUrl}
          alt={title}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* 2. Official Emaar YouTube Ambient Embed Layer (Lazy mounted on viewport intersection) */}
      {isInView && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            onLoad={() => setIframeLoaded(true)}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] min-w-[177.78vh] min-h-[56.25vw] transition-opacity duration-1000 ${
              iframeLoaded ? "opacity-90" : "opacity-0"
            }`}
            style={{ border: 0 }}
          />
        </div>
      )}

      {/* 3. Luxury Cinematic Scrim Gradients */}
      {overlayGradient && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121312] via-[#121312]/25 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121312]/70 via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-0 grain-overlay opacity-25 pointer-events-none" />
        </>
      )}

      {/* 4. Foreground Children Overlay Content */}
      {children}

      {/* 5. Official Developer Film Attribution & Control HUD */}
      {showBadge && (
        <div className={`absolute ${getBadgePositionClass()} z-20 flex items-center space-x-2.5 pointer-events-auto`}>
          <div className="hidden sm:flex items-center space-x-2 bg-[#121312]/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#E6DED0]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9A994] animate-pulse" />
            <span>Emaar Film:</span>
            <span className="text-[#F7F6F2] font-medium truncate max-w-[180px]">{title}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? "Unmute Ambient Audio" : "Mute Sound"}
            className="p-2.5 bg-[#121312]/80 hover:bg-black/90 text-[#F7F6F2] hover:text-[#B9A994] backdrop-blur-md border border-white/10 transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#B9A994]" />}
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            aria-label="Screen Full Film in Cinema Modal"
            className="flex items-center space-x-2 px-3.5 py-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#121312] text-[9px] uppercase tracking-[0.2em] font-medium transition-colors shadow-lg"
          >
            <Play className="w-3 h-3 fill-current" />
            <span className="hidden md:inline">Watch Film</span>
          </button>
        </div>
      )}

      {/* 6. Full-Screen Cinema Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl animate-fade-in"
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border border-white/15">
            <div className="absolute -top-12 left-0 right-0 flex items-center justify-between text-xs text-[#E6DED0]">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994]">Official Emaar Dubai Film</span>
                <span className="text-white/40">•</span>
                <span className="font-serif text-sm text-[#F7F6F2]">{title}</span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:text-white transition-colors flex items-center space-x-1 uppercase text-[10px] tracking-widest text-[#B9A994]"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <iframe
              src={modalEmbedUrl}
              title={`${title} - Cinema Screening`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
