"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, Shield } from "lucide-react";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";

export default function PrivateAcquisition() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0B0D0C] text-[#F4F1EB] border-b border-white/10">
      {/* 4K Sunset Coastal Architectural Video */}
      <BackgroundVideo
        src="/media/v2/dubai/dubai-sunset-marina.mp4"
        poster="/media/v2/posters/dubai-sunset-marina.webp"
        overlay="subtle"
      />

      {/* Acquisition Narrative Card */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-6">
        <div className="space-y-3">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
            Private Acquisition
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.08] drop-shadow-2xl">
            Your next address awaits.
          </h2>

          <p className="text-xs sm:text-base text-[#F4F1EB]/85 font-light max-w-lg mx-auto leading-relaxed drop-shadow">
            Private advisory consultations arranged by confidential appointment. Review bespoke architectural dossiers and coordinate private viewings across Dubai and New York.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C1AD91] hover:bg-white text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-8 py-3.5 sm:py-4 font-semibold transition-all shadow-xl group"
          >
            <span>Arrange a Private Viewing</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="/residences"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.22em] px-8 py-3.5 sm:py-4 transition-colors bg-black/40 backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-[#C1AD91]" />
            <span>Explore Properties</span>
          </Link>
        </div>

        {/* Discreet Advisory Trust Notes */}
        <div className="pt-2 flex items-center justify-center space-x-4 text-[10px] uppercase tracking-[0.2em] text-[#A6A39E]">
          <span className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-[#C1AD91]" />
            <span>Confidential Advisory</span>
          </span>
          <span>•</span>
          <span>Direct Architectural Stewardship</span>
        </div>
      </div>
    </section>
  );
}

