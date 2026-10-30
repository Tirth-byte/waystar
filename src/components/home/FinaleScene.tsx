"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";

export default function FinaleScene() {
  return (
    <section className="relative w-full h-[75svh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0B0D0C] text-[#F4F1EB]">
      {/* Manhattan Night Skyline Video (Does NOT reuse opening hero) */}
      <BackgroundVideo
        src="/media/v2/new-york/manhattan-night-skyline.mp4"
        poster="/media/v2/posters/manhattan-night-skyline.webp"
        overlay="subtle"
      />

      {/* Monograph Finale Typography */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-6">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
          The Flagship Finale
        </span>

        <h2 className="font-serif tracking-[0.24em] text-4xl sm:text-6xl md:text-7xl font-light text-white uppercase drop-shadow-2xl">
          WAYSTAR
        </h2>

        <p className="font-serif italic text-xl sm:text-3xl text-[#F4F1EB]/90 drop-shadow-md">
          Exceptional living. Extraordinary places.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/residences"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-8 py-3.5 sm:py-4 font-semibold transition-all shadow-2xl group"
          >
            <span>Discover Residences</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/25 hover:border-white text-white text-xs uppercase tracking-[0.22em] px-8 py-3.5 sm:py-4 transition-all bg-black/40 backdrop-blur-sm"
          >
            <span>Private Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

