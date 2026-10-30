"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";

export default function LivingScene() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-start p-6 sm:p-12 lg:p-20 overflow-hidden bg-[#0B0D0C] text-[#F4F1EB] border-b border-white/10">
      {/* 4K Interior Architectural Video */}
      <BackgroundVideo
        src="/media/v2/interiors/modern-luxury-interior.mp4"
        poster="/media/v2/posters/modern-luxury-interior.webp"
        overlay="subtle"
      />

      {/* Restrained Architectural Overlay */}
      <div className="relative z-10 max-w-xl space-y-6">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
          Interior Architecture
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white leading-[1.08] tracking-tight drop-shadow-xl">
          Designed for living.
        </h2>

        <p className="font-serif italic text-xl sm:text-2xl text-[#F4F1EB]/90 font-light drop-shadow">
          Spaces beyond expectation.
        </p>

        <p className="text-xs sm:text-sm text-[#A6A39E] font-light leading-relaxed max-w-md drop-shadow">
          Every volume is calibrated for stillness, crafted from honest stone and architectural timber, and illuminated by natural daylight throughout the diurnal arc.
        </p>

        <div className="pt-2">
          <Link
            href="/philosophy"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-[#C1AD91] hover:text-white transition-colors"
          >
            <span>Explore Our Philosophy</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

