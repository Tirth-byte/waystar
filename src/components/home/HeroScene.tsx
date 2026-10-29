"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { initGSAP, prefersReducedMotion } from "@/lib/animations";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const { gsap } = initGSAP();

    if (prefersReducedMotion() || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.3 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.1 },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex items-end pb-16 sm:pb-24 overflow-hidden bg-[#121312]"
    >
      {/* Edge-to-Edge Cinematic Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-90" : "opacity-0"
          }`}
        >
          <source src="/media/videos/hero-villa.mp4" type="video/mp4" />
        </video>

        {/* Local Poster Preload / Fallback Frame */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            src="/media/posters/hero-villa-poster.jpg"
            alt="WAYSTAR Luxury Architectural Residence"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Multi-Layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121312] via-[#121312]/30 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.35em] text-[#B9A994]">
            <span className="w-8 h-[1px] bg-[#B9A994]" />
            <span>Curated International Flagship</span>
          </div>

          <h1
            ref={headlineRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FFFFFF] leading-[1.04] tracking-tight drop-shadow-md"
          >
            Some places are built. <br />
            <span className="italic font-normal text-[#E6DED0]">
              Others are imagined beyond limits.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg text-[#E6DED0]/90 max-w-2xl font-light leading-relaxed tracking-wide drop-shadow-sm"
          >
            WAYSTAR conceives architecturally singular residences crafted in communion with the world&apos;s most revered landscapes. Monumental form, elemental materials, and enduring grace.
          </p>

          {/* Action Row */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
          >
            <Link
              href="/developments"
              className="group inline-flex items-center justify-center space-x-3 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 font-semibold shadow-lg"
            >
              <span>Explore Residences</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center space-x-2 border border-white/30 hover:border-[#B9A994] text-[#FFFFFF] hover:text-[#B9A994] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 bg-black/25 backdrop-blur-sm"
            >
              <span>Our Philosophy</span>
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
