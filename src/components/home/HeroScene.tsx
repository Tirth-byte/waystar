"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { initGSAP, prefersReducedMotion } from "@/lib/animations";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const { gsap } = initGSAP();

    if (prefersReducedMotion() || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[92vh] min-h-[640px] max-h-[1100px] flex items-end pb-16 sm:pb-24 overflow-hidden bg-[#121312]"
    >
      {/* Background Media Layer: Video with High-Res Image Poster Fallback */}
      <div className="absolute inset-0 z-0">
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoError(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoReady ? "opacity-80 scale-100" : "opacity-0"
            }`}
          >
            {/* Architectural cinematic video source */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41315-large.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Fallback & Preload Poster Image (Always rendered underneath for zero-flicker resilience) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoReady && !videoError ? "opacity-0 pointer-events-none" : "opacity-90"
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="WAYSTAR Luxury Architectural Residence"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Multi-Layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20211F] via-[#20211F]/40 to-black/50" />
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
        <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />
      </div>

      {/* Hero Foreground Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.35em] text-[#B9A994]">
            <span className="w-8 h-[1px] bg-[#B9A994]" />
            <span>Curated Global Portfolio</span>
          </div>

          <h1
            ref={headlineRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F7F6F2] leading-[1.05] tracking-tight"
          >
            Architecture worth <br />
            <span className="italic font-normal text-[#E6DED0]">living in.</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg text-[#E6DED0]/90 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            WAYSTAR stewards an extraordinary portfolio of residences crafted by the world&apos;s most revered architectural ateliers. Monumental form, tactile materiality, and enduring grace.
          </p>

          {/* Action Row */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
          >
            <Link
              href="/developments"
              className="group inline-flex items-center justify-center space-x-3 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 font-medium"
            >
              <span>Explore Residences</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center space-x-2 border border-white/30 hover:border-[#B9A994] text-[#F7F6F2] hover:text-[#B9A994] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Discover WAYSTAR</span>
            </Link>
          </div>
        </div>

        {/* Scroll Discovery Indicator */}
        <div className="absolute right-6 lg:right-12 bottom-6 sm:bottom-12 hidden md:flex flex-col items-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994] [writing-mode:vertical-lr] rotate-180">
            Scroll To Discover
          </span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#B9A994] animate-bounce" />
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-[#B9A994]" />
        </div>
      </div>
    </section>
  );
}
