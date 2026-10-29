"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, ArrowUpRight, Bed, Bath, Maximize2 } from "lucide-react";
import { Property } from "@/types/property";
import { useFavourites } from "@/hooks/useFavourites";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const { isFavourite, toggleFavourite } = useFavourites();
  const saved = isFavourite(property.id);

  return (
    <div className="group relative bg-[#20211F] text-[#F7F6F2] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl border border-white/10 hover:border-[#B9A994]/50">
      {/* Media Container with Image & Hover Depth */}
      <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-[#121312]">
        <Image
          src={property.heroImage}
          alt={`${property.name} in ${property.city}, ${property.country}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20211F] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges: Type & Save Toggle */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 bg-[#20211F]/80 backdrop-blur-md text-[#B9A994] border border-white/15">
            {property.propertyType}
          </span>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavourite(property.id);
            }}
            aria-label={saved ? `Remove ${property.name} from saved` : `Save ${property.name}`}
            className={`p-2.5 backdrop-blur-md transition-all duration-300 border ${
              saved
                ? "bg-[#B9A994] text-[#20211F] border-[#B9A994]"
                : "bg-[#20211F]/70 text-[#F7F6F2] hover:text-[#B9A994] border-white/20"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Editorial Highlight badge if present */}
        {property.editorialHighlight && (
          <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
            <span className="text-[10px] uppercase tracking-wider text-[#B9A994]/90 bg-black/60 backdrop-blur-sm px-2.5 py-1">
              {property.editorialHighlight}
            </span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B9A994]">
              {property.city}, {property.country}
            </span>
            <span className="font-serif text-lg sm:text-xl font-light text-[#F7F6F2]">
              {property.formattedPrice}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-2xl text-[#F7F6F2] font-normal group-hover:text-[#B9A994] transition-colors leading-tight">
            <Link href={`/developments/${property.slug}`} className="focus:outline-none">
              <span className="absolute inset-0 z-0" aria-hidden="true" />
              {property.name}
            </Link>
          </h3>

          <p className="text-xs text-[#E6DED0]/75 line-clamp-2 leading-relaxed font-light">
            {property.shortDescription}
          </p>
        </div>

        {/* Specs & Link footer */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#B9A994]">
          <div className="flex items-center space-x-4 text-[11px] font-sans">
            <span className="flex items-center space-x-1" title={`${property.bedrooms} Bedrooms`}>
              <Bed className="w-3.5 h-3.5 text-[#55544F]" />
              <span>{property.bedrooms} Beds</span>
            </span>
            <span className="flex items-center space-x-1" title={`${property.bathrooms} Bathrooms`}>
              <Bath className="w-3.5 h-3.5 text-[#55544F]" />
              <span>{property.bathrooms} Baths</span>
            </span>
            <span className="flex items-center space-x-1" title={`${property.area} Sq Ft`}>
              <Maximize2 className="w-3.5 h-3.5 text-[#55544F]" />
              <span>{property.area.toLocaleString()} sq ft</span>
            </span>
          </div>

          <div className="relative z-10 flex items-center space-x-1 text-xs uppercase tracking-[0.2em] text-[#F7F6F2] group-hover:text-[#B9A994] transition-colors font-medium">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
