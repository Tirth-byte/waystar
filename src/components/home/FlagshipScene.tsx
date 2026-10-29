"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bookmark, Bed, Bath, Maximize2 } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import { useFavourites } from "@/hooks/useFavourites";

export default function FlagshipScene() {
  const flagship = PROPERTIES[0]; // The Aurelia, Monaco
  const { isFavourite, toggleFavourite } = useFavourites();
  const saved = isFavourite(flagship.id);

  return (
    <section className="relative w-full min-h-[85vh] bg-[#121312] text-[#F7F6F2] overflow-hidden flex items-end py-20 sm:py-28 border-b border-white/10">
      {/* Full-Bleed Architectural Media Canvas */}
      <div className="absolute inset-0 z-0">
        <Image
          src={flagship.heroImage}
          alt={flagship.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121312] via-[#121312]/40 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Title Sequence Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full space-y-10">
        {/* Eyebrow & Save Bookmark */}
        <div className="flex items-center justify-between border-b border-white/15 pb-6">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B9A994]">
              02 / Flagship Commission
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E6DED0]">
              {flagship.city}, {flagship.country}
            </span>
          </div>

          <button
            onClick={() => toggleFavourite(flagship.id)}
            aria-label={saved ? "Remove from saved" : "Save flagship residence"}
            className={`flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-4 py-2 border transition-all ${
              saved
                ? "bg-[#B9A994] text-[#20211F] border-[#B9A994]"
                : "bg-black/40 text-white hover:text-[#B9A994] border-white/20 backdrop-blur-sm"
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-current" : ""}`} />
            <span>{saved ? "Saved to Portfolio" : "Save Residence"}</span>
          </button>
        </div>

        {/* Cinematic Title & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] px-3 py-1 bg-white/10 text-[#B9A994] border border-white/15 inline-block">
              {flagship.propertyType} • Avenue Princesse Grace
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FFFFFF] leading-tight tracking-tight">
              {flagship.name}
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-[#B9A994]">
              {flagship.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#E6DED0]/90 font-light max-w-2xl leading-relaxed">
              {flagship.shortDescription}
            </p>
          </div>

          {/* Valuation & Exploration CTA */}
          <div className="lg:col-span-4 lg:text-right space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                Illustrative Valuation
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-light">
                {flagship.formattedPrice}
              </span>
            </div>

            <div>
              <Link
                href={`/developments/${flagship.slug}`}
                className="group inline-flex items-center space-x-3 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 font-semibold transition-all shadow-xl"
              >
                <span>Enter Residence</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications Strip */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="flex items-center space-x-3">
            <Bed className="w-4 h-4 text-[#B9A994]" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#55544F] block">Suites</span>
              <span className="font-serif text-base text-[#F7F6F2]">{flagship.bedrooms} Bedrooms</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Bath className="w-4 h-4 text-[#B9A994]" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#55544F] block">Bathrooms</span>
              <span className="font-serif text-base text-[#F7F6F2]">{flagship.bathrooms} Baths</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Maximize2 className="w-4 h-4 text-[#B9A994]" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#55544F] block">Internal Living</span>
              <span className="font-serif text-base text-[#F7F6F2]">{flagship.area.toLocaleString()} sq ft</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#B9A994]" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#55544F] block">Atelier</span>
              <span className="font-serif text-base text-[#F7F6F2] truncate">{flagship.architect}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
