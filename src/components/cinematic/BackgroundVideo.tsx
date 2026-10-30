"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

export interface BackgroundVideoProps {
  src: string;
  poster: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
  overlay?: "none" | "subtle" | "bottom" | "cinematic";
  opacity?: number;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function BackgroundVideo({
  src,
  poster,
  alt = "WAYSTAR Cinematic Architecture",
  priority = false,
  className = "",
  children,
  overlay = "subtle",
  opacity = 1,
}: BackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (isReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    // Viewport-based playback to conserve battery and CPU
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
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
  }, [isReducedMotion]);

  const getOverlayClasses = () => {
    switch (overlay) {
      case "bottom":
        return "bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/40 to-transparent";
      case "cinematic":
        return "bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/25 to-[#0B0D0C]/50";
      case "subtle":
        return "bg-gradient-to-t from-[#0B0D0C]/85 via-transparent to-black/35";
      case "none":
      default:
        return "";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden bg-[#0B0D0C] select-none ${className}`}
      style={{ opacity }}
    >
      {/* 1. Universal Instant Poster Layer (Zero Layout Shift) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isPlaying && !hasError && !isReducedMotion ? "opacity-0 pointer-events-none" : "opacity-100"
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

      {/* 2. Native Optimized HTML5 Video Stream */}
      {!hasError && !isReducedMotion && (
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

      {/* 3. Directional Architectural Scrim Gradient */}
      {overlay !== "none" && (
        <div className={`absolute inset-0 pointer-events-none ${getOverlayClasses()}`} />
      )}

      {/* 4. Editorial Vignette */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none mix-blend-multiply" />

      {/* 5. Foreground Content Slot */}
      {children}
    </div>
  );
}
