"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, Bed, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import { Residence } from "@/types/residence";
import { useSavedResidences } from "@/hooks/useSavedResidences";
import { getAssetPath } from "@/lib/paths";

interface PropertyCardProps {
  residence: Residence;
  priority?: boolean;
}

export default function PropertyCard({ residence, priority = false }: PropertyCardProps) {
  const { isSaved, toggleSave } = useSavedResidences();
  const saved = isSaved(residence.id);

  return (
    <article className="group bg-[#111311] border border-white/10 hover:border-[#C1AD91]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
      {/* Visual Canvas Stage */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <Image
          src={getAssetPath(residence.heroMedia.poster)}
          alt={residence.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111311] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 bg-black/65 backdrop-blur-md text-[#C1AD91] border border-white/15 font-medium">
            {residence.city} • {residence.propertyType}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSave(residence.id);
            }}
            aria-label={saved ? "Remove from saved" : "Save residence"}
            className={`p-2 border backdrop-blur-md transition-all ${
              saved
                ? "bg-[#C1AD91] text-[#0B0D0C] border-[#C1AD91]"
                : "bg-black/60 text-white hover:text-[#C1AD91] border-white/20"
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Bottom Location Indicator */}
        <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] text-[#A6A39E]">
          {residence.location}
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <h3 className="font-serif text-2xl text-white font-light group-hover:text-[#C1AD91] transition-colors">
            {residence.name}
          </h3>
          <p className="font-serif italic text-sm text-[#F4F1EB]/80 line-clamp-1">
            {residence.tagline}
          </p>
          <p className="text-xs text-[#A6A39E] font-light line-clamp-2 leading-relaxed pt-1">
            {residence.shortDescription}
          </p>
        </div>

        {/* Valuation & Specs */}
        <div className="space-y-4 pt-3 border-t border-white/10">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C1AD91]">
              Valuation
            </span>
            <span className="font-serif text-xl sm:text-2xl text-white font-light">
              {residence.formattedPrice}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center py-2.5 bg-black/35 border border-white/5 text-xs text-[#A6A39E]">
            <div className="flex flex-col items-center">
              <span className="flex items-center space-x-1 text-white">
                <Bed className="w-3.5 h-3.5 text-[#C1AD91]" />
                <span>{residence.bedrooms}</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#A6A39E]/80 mt-0.5">Beds</span>
            </div>
            <div className="flex flex-col items-center border-l border-r border-white/10">
              <span className="flex items-center space-x-1 text-white">
                <Bath className="w-3.5 h-3.5 text-[#C1AD91]" />
                <span>{residence.bathrooms}</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#A6A39E]/80 mt-0.5">Baths</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex items-center space-x-1 text-white">
                <Maximize2 className="w-3.5 h-3.5 text-[#C1AD91]" />
                <span>{residence.area.toLocaleString()}</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#A6A39E]/80 mt-0.5">sq ft</span>
            </div>
          </div>

          <Link
            href={`/residences/${residence.slug}`}
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] py-3 font-semibold transition-all shadow-md group"
          >
            <span>View Residence</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

