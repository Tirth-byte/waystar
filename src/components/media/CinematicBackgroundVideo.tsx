"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CinematicBackgroundVideoProps {
  src: string;
  poster: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
  overlayGradient?: "none" | "subtle" | "bottom" | "full";
}

export default function CinematicBackgroundVideo({
  src,
  poster,
  alt = "WAYSTAR Architectural Cinematics",
  priority = false,
  className = "",
  children,
  overlayGradient = "subtle",
}: CinematicBackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Viewport-based playback management
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Graceful failure fallback to poster
              setHasError(true);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getGradientClasses = () => {
    switch (overlayGradient) {
      case "bottom":
        return "bg-gradient-to-t from-[#121312] via-[#121312]/30 to-transparent";
      case "subtle":
        return "bg-gradient-to-t from-[#121312]/80 via-transparent to-black/30";
      case "full":
        return "bg-gradient-to-t from-[#121312]/90 via-[#121312]/35 to-black/50";
      case "none":
      default:
        return "";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden bg-[#121312] ${className}`}
    >
      {/* High-Resolution Poster Layer (Instant, Zero Layout Shift) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isPlaying && !hasError ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src={poster}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Clean Native Video Layer (No YouTube controls, No typography overlay) */}
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onPlaying={() => setIsPlaying(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Subtle Directional Scrim (Keeps architecture visible and bright) */}
      {overlayGradient !== "none" && (
        <div
          className={`absolute inset-0 pointer-events-none ${getGradientClasses()}`}
        />
      )}

      {/* Inset Vignette Layer */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none mix-blend-multiply" />

      {/* Foreground Scene Overlay */}
      {children}
    </div>
  );
}
