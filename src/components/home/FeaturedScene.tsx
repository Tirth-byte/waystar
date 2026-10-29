"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bookmark, ArrowRight } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import { useFavourites } from "@/hooks/useFavourites";

export default function FeaturedScene() {
  const { isFavourite, toggleFavourite } = useFavourites();
  const featured = PROPERTIES.filter((p) => p.featured);
  const heroResidence = featured[0] || PROPERTIES[0];
  const secondaryResidences = featured.slice(1, 3);

  return (
    <section className="py-24 sm:py-36 bg-[#20211F] text-[#F7F6F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B9A994] block">
              02 / Featured Estates
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F6F2] tracking-tight">
              Flagship Residences
            </h2>
          </div>
          <Link
            href="/developments"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B9A994] hover:text-[#F7F6F2] transition-colors"
          >
            <span>View Full Collection (6)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Primary Flagship: Full-Bleed Editorial Presentation */}
        <div className="relative group overflow-hidden border border-white/10 mb-16 sm:mb-20 bg-[#171816]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Media 7 Cols */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[580px] overflow-hidden">
              <Image
                src={heroResidence.heroImage}
                alt={heroResidence.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20211F] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] bg-[#20211F]/80 backdrop-blur-md px-3.5 py-1.5 text-[#B9A994] border border-white/15">
                  Flagship Showcase • {heroResidence.propertyType}
                </span>
              </div>
            </div>

            {/* Editorial Information 5 Cols */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#1A1B19]">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#B9A994]">
                    {heroResidence.city}, {heroResidence.country}
                  </span>
                  <button
                    onClick={() => toggleFavourite(heroResidence.id)}
                    aria-label={`Save ${heroResidence.name}`}
                    className={`p-2.5 border transition-all ${
                      isFavourite(heroResidence.id)
                        ? "bg-[#B9A994] text-[#20211F] border-[#B9A994]"
                        : "bg-white/5 border-white/15 text-[#F7F6F2] hover:text-[#B9A994]"
                    }`}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isFavourite(heroResidence.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F6F2] leading-tight">
                    {heroResidence.name}
                  </h3>
                  <p className="text-sm font-serif italic text-[#B9A994] mt-1">
                    {heroResidence.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#E6DED0]/80 font-light leading-relaxed">
                  {heroResidence.shortDescription}
                </p>

                {/* Specs Matrix */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                      Bedrooms
                    </span>
                    <span className="font-serif text-lg text-[#F7F6F2]">
                      {heroResidence.bedrooms} Suites
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                      Interior
                    </span>
                    <span className="font-serif text-lg text-[#F7F6F2]">
                      {heroResidence.area.toLocaleString()} sq ft
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                      Valuation
                    </span>
                    <span className="font-serif text-lg text-[#B9A994]">
                      {heroResidence.formattedPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#55544F]">
                  Atelier: {heroResidence.architect}
                </span>

                <Link
                  href={`/developments/${heroResidence.slug}`}
                  className="group/btn inline-flex items-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-6 py-3.5 transition-all font-medium"
                >
                  <span>Explore Estate</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Flagships: Dual Asymmetric Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {secondaryResidences.map((residence) => (
            <div
              key={residence.id}
              className="group relative border border-white/10 bg-[#1A1B19] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#B9A994]/50"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#121312]">
                <Image
                  src={residence.heroImage}
                  alt={residence.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B19] via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[#20211F]/80 backdrop-blur-md text-[#B9A994] border border-white/15">
                    {residence.propertyType}
                  </span>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavourite(residence.id);
                    }}
                    aria-label={`Save ${residence.name}`}
                    className={`p-2 backdrop-blur-md border transition-all ${
                      isFavourite(residence.id)
                        ? "bg-[#B9A994] text-[#20211F] border-[#B9A994]"
                        : "bg-[#20211F]/70 text-[#F7F6F2] hover:text-[#B9A994] border-white/20"
                    }`}
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        isFavourite(residence.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="uppercase tracking-[0.25em] text-[#B9A994]">
                      {residence.city}, {residence.country}
                    </span>
                    <span className="font-serif text-lg text-[#F7F6F2]">
                      {residence.formattedPrice}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F6F2] group-hover:text-[#B9A994] transition-colors">
                    {residence.name}
                  </h3>
                  <p className="text-xs text-[#E6DED0]/70 font-light mt-2 line-clamp-2">
                    {residence.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#55544F] font-sans">
                    {residence.bedrooms} Beds • {residence.area.toLocaleString()} sq ft
                  </span>

                  <Link
                    href={`/developments/${residence.slug}`}
                    className="inline-flex items-center space-x-1 uppercase tracking-[0.2em] text-[#F7F6F2] hover:text-[#B9A994] transition-colors"
                  >
                    <span>Discover</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
