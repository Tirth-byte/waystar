"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";

interface WorldConfig {
  id: "dubai" | "new-york";
  name: string;
  subheading: string;
  tagline: string;
  videoSrc: string;
  posterSrc: string;
  filterHref: string;
  highlights: string[];
}

const WORLDS: Record<"dubai" | "new-york", WorldConfig> = {
  dubai: {
    id: "dubai",
    name: "DUBAI",
    subheading: "The Waterfront Capital",
    tagline: "Where ambition meets the horizon.",
    videoSrc: "/media/v2/dubai/dubai-yachts-skyline.mp4",
    posterSrc: "/media/v2/posters/dubai-yachts-skyline.webp",
    filterHref: "/residences?city=Dubai",
    highlights: ["Superyacht Marina Quays", "Cantilevered Sky Pools", "Private Gated Estates"],
  },
  "new-york": {
    id: "new-york",
    name: "NEW YORK",
    subheading: "The Executive Skyline",
    tagline: "An address above the ordinary.",
    videoSrc: "/media/v2/new-york/manhattan-midtown-aerial.mp4",
    posterSrc: "/media/v2/posters/manhattan-midtown-aerial.webp",
    filterHref: "/residences?city=New+York",
    highlights: ["Central Park Vistas", "Historic Limestone Mansions", "Tribeca Cast-Iron Lofts"],
  },
};

export default function DestinationSelector() {
  const [activeWorld, setActiveWorld] = useState<"dubai" | "new-york">("dubai");
  const current = WORLDS[activeWorld];

  return (
    <section className="relative w-full h-[100svh] min-h-[680px] flex items-center justify-between overflow-hidden bg-[#0B0D0C] text-[#F4F1EB] border-t border-b border-white/10">
      {/* Background World Video (Crossfading) */}
      <BackgroundVideo
        key={current.id}
        src={current.videoSrc}
        poster={current.posterSrc}
        overlay="cinematic"
      />

      {/* Foreground Interactive Selector Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-between h-full py-16 sm:py-24">
        {/* Top Eyebrow & World Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-6 gap-5">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
              Architectural Coordinates
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Two singular worlds.
            </h2>
          </div>

          {/* Interactive World Switcher Tabs */}
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md p-1.5 border border-white/15">
            <button
              type="button"
              onClick={() => setActiveWorld("dubai")}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.22em] font-medium transition-all ${
                activeWorld === "dubai"
                  ? "bg-[#C1AD91] text-[#0B0D0C] shadow-lg font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Dubai
            </button>
            <button
              type="button"
              onClick={() => setActiveWorld("new-york")}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.22em] font-medium transition-all ${
                activeWorld === "new-york"
                  ? "bg-[#C1AD91] text-[#0B0D0C] shadow-lg font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              New York
            </button>
          </div>
        </div>

        {/* Center Stage Narrative */}
        <div className="max-w-2xl space-y-6 my-auto">
          <span className="inline-block text-[10px] uppercase tracking-[0.28em] px-3 py-1 bg-white/10 border border-white/15 text-[#C1AD91]">
            {current.subheading}
          </span>

          <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight drop-shadow-2xl">
            {current.tagline}
          </h3>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {current.highlights.map((item, idx) => (
              <span
                key={idx}
                className="text-xs text-[#F4F1EB]/85 font-light px-3 py-1 bg-black/40 border border-white/10 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Destination Link Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/15 pt-6 gap-4">
          <p className="text-xs text-[#A6A39E] font-light max-w-md">
            Discover curated architectural portfolios developed for collectors of exceptional space in {current.name.toLowerCase()}.
          </p>

          <Link
            href={current.filterHref}
            className="group inline-flex items-center space-x-2.5 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-7 py-3.5 font-semibold transition-all shadow-xl shrink-0"
          >
            <span>Explore {current.name} Residences</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

