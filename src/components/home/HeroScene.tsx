"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";
import { initGSAP, prefersReducedMotion } from "@/lib/animations";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    if (prefersReducedMotion() || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        brandRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[640px] flex items-end pb-16 sm:pb-20 overflow-hidden bg-[#0B0D0C]"
    >
      {/* Scene 01 Full-Bleed 4K Video: Dubai Marina Aerial Sweep */}
      <BackgroundVideo
        src="/media/v2/dubai/dubai-marina-aerial.mp4"
        poster="/media/v2/posters/dubai-marina-aerial.webp"
        priority
        overlay="subtle"
      />

      {/* Foreground Editorial Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Brand Eyebrow */}
          <div ref={brandRef} className="space-y-1">
            <span className="font-serif tracking-[0.3em] text-xs sm:text-sm uppercase text-[#F4F1EB] block">
              WAYSTAR
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] font-medium block">
              EXCEPTIONAL RESIDENCES
            </span>
          </div>

          {/* Monumental Serif Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight drop-shadow-2xl"
          >
            Beyond the ordinary.
          </h1>

          {/* Restrained Subtitle */}
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg text-[#F4F1EB]/90 max-w-xl font-light leading-relaxed drop-shadow"
          >
            Singular residential architecture conceived in dialogue with the world&apos;s most revered skylines and water horizons.
          </p>

          {/* Dual Action CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 pt-3"
          >
            <Link
              href="/residences"
              className="group inline-flex items-center justify-center space-x-2.5 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-8 py-3.5 sm:py-4 transition-all duration-300 font-semibold shadow-2xl"
            >
              <span>Explore Residences</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/discover"
              className="inline-flex items-center justify-center space-x-2 border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.22em] px-8 py-3.5 sm:py-4 transition-all duration-300 bg-black/35 backdrop-blur-sm"
            >
              <span>Discover WAYSTAR</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center space-y-1.5 text-[#F4F1EB]/60 pointer-events-none">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C1AD91]" />
        </div>
      </div>
    </section>
  );
}

