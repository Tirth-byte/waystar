"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bookmark, Bed, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { RESIDENCES } from "@/data/residences";
import { useSavedResidences } from "@/hooks/useSavedResidences";

export default function ResidenceCinema() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isSaved, toggleSave } = useSavedResidences();

  const current = RESIDENCES[activeIndex];
  const saved = isSaved(current.id);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % RESIDENCES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + RESIDENCES.length) % RESIDENCES.length);
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[720px] flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden bg-[#0B0D0C] text-[#F4F1EB] border-b border-white/10">
      {/* Property-Specific Visual Stage (Crossfading) */}
      <div className="absolute inset-0 z-0">
        {current.heroMedia.type === "video" ? (
          <video
            key={current.id}
            src={current.heroMedia.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center animate-fade-in transition-transform duration-1000 scale-105"
          />
        ) : (
          <Image
            key={current.id}
            src={current.heroMedia.poster}
            alt={current.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center animate-fade-in transition-transform duration-1000 scale-105"
          />
        )}

        {/* Cinematic Scrim Gradient (Preserves Legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/40 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0C]/80 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Top Header: Eyebrow & Index Counter */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium">
            The Private Collection
          </span>
          <span className="text-white/30">•</span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#A6A39E]">
            Curated Residences
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#C1AD91]">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/50">{String(RESIDENCES.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Center Stage: Active Residence Presentation */}
      <div className="relative z-10 max-w-3xl my-auto space-y-4 sm:space-y-6">
        <div className="inline-flex items-center space-x-2.5 bg-black/55 backdrop-blur-md px-3.5 py-1.5 border border-white/15 text-[10px] uppercase tracking-[0.25em] text-[#C1AD91]">
          <span>{current.city}</span>
          <span className="text-white/40">•</span>
          <span>{current.location}</span>
          <span className="text-white/40">•</span>
          <span>{current.propertyType}</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none drop-shadow-2xl">
          {current.name}
        </h2>

        <p className="font-serif italic text-lg sm:text-2xl text-[#F4F1EB]/90 drop-shadow max-w-xl">
          {current.tagline}
        </p>

        <p className="text-xs sm:text-sm text-[#A6A39E] font-light max-w-lg leading-relaxed line-clamp-2">
          {current.shortDescription}
        </p>

        {/* Investment & Key Specifications */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C1AD91] block">
              Valuation
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-light text-white">
              {current.formattedPrice}
            </span>
          </div>

          <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />

          <div className="flex items-center space-x-6 text-xs text-[#F4F1EB]">
            <div className="flex items-center space-x-2">
              <Bed className="w-4 h-4 text-[#C1AD91]" />
              <span>{current.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <Maximize2 className="w-4 h-4 text-[#C1AD91]" />
              <span>{current.area.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-4 pt-3">
          <Link
            href={`/residences/${current.slug}`}
            className="group inline-flex items-center space-x-2.5 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-8 py-3.5 font-semibold transition-all shadow-xl"
          >
            <span>View Residence</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <button
            type="button"
            onClick={() => toggleSave(current.id)}
            aria-label={saved ? "Remove from saved" : "Save residence"}
            className={`inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-3.5 border transition-all ${
              saved
                ? "bg-[#C1AD91] text-[#0B0D0C] border-[#C1AD91]"
                : "bg-black/50 text-white hover:text-[#C1AD91] border-white/20 backdrop-blur-md"
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-current" : ""}`} />
            <span>{saved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* Bottom Selector Ribbon */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/15 pt-5">
        {/* Horizontal Navigation Pills */}
        <div className="flex items-center overflow-x-auto space-x-2 pb-2 md:pb-0 scrollbar-none">
          {RESIDENCES.map((res, idx) => (
            <button
              key={res.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-left px-3.5 py-2 border transition-all whitespace-nowrap text-xs uppercase tracking-[0.16em] ${
                idx === activeIndex
                  ? "bg-[#C1AD91] text-[#0B0D0C] border-[#C1AD91] font-semibold"
                  : "bg-black/40 hover:bg-black/60 text-[#A6A39E] hover:text-white border-white/10"
              }`}
            >
              <span>{res.name}</span>
              <span className="text-[9px] opacity-70 ml-1.5 hidden sm:inline">({res.city})</span>
            </button>
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Previous Residence"
            className="p-3 bg-black/60 hover:bg-[#C1AD91] text-white hover:text-[#0B0D0C] border border-white/15 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Residence"
            className="p-3 bg-black/60 hover:bg-[#C1AD91] text-white hover:text-[#0B0D0C] border border-white/15 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

