"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bookmark, ArrowRight } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import { useFavourites } from "@/hooks/useFavourites";

export default function CollectionScene() {
  const collection = PROPERTIES.slice(1); // Properties 2 to 6
  const [activeProperty, setActiveProperty] = useState(collection[0]);
  const { isFavourite, toggleFavourite } = useFavourites();
  const saved = isFavourite(activeProperty.id);

  return (
    <section className="py-28 sm:py-36 bg-[#20211F] text-[#F7F6F2] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B9A994] block">
              03 / Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] tracking-tight">
              The Living Collection
            </h2>
          </div>

          <Link
            href="/developments"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B9A994] hover:text-[#FFFFFF] transition-colors"
          >
            <span>Catalogue View (6)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive Full-Bleed Editorial Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Active Showcase Visual (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[580px] overflow-hidden bg-[#121312] border border-white/10 shadow-2xl">
            <Image
              key={activeProperty.id}
              src={activeProperty.heroImage}
              alt={activeProperty.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121312] via-transparent to-black/30 pointer-events-none" />

            {/* Overlaid Details */}
            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-black/60 border border-white/15 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994]">
                  {activeProperty.city}, {activeProperty.country}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                  {activeProperty.name}
                </h3>
                <p className="text-xs text-[#E6DED0]/80 font-light">
                  {activeProperty.bedrooms} Bedrooms • {activeProperty.area.toLocaleString()} sq ft • {activeProperty.propertyType}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleFavourite(activeProperty.id)}
                  aria-label={`Save ${activeProperty.name}`}
                  className={`p-3 border transition-all ${
                    saved
                      ? "bg-[#B9A994] text-[#20211F] border-[#B9A994]"
                      : "bg-white/10 text-white hover:text-[#B9A994] border-white/20"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
                </button>

                <Link
                  href={`/developments/${activeProperty.slug}`}
                  className="inline-flex items-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.2em] px-5 py-3 font-semibold transition-all"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Residence Selector Strip (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {collection.map((item) => {
              const isSelected = activeProperty.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveProperty(item)}
                  className={`w-full text-left p-5 transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#171816] border-[#B9A994] shadow-lg"
                      : "bg-[#1A1B19]/60 border-white/10 hover:border-white/30 hover:bg-[#1A1B19]"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994]">
                        {item.city}
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#E6DED0]/60">
                        {item.propertyType}
                      </span>
                    </div>

                    <h4
                      className={`font-serif text-xl sm:text-2xl font-light transition-colors ${
                        isSelected
                          ? "text-[#FFFFFF]"
                          : "text-[#E6DED0]/80 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </h4>

                    <p className="text-xs text-[#B9A994] font-serif font-light">
                      {item.formattedPrice}
                    </p>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-[#B9A994] translate-x-1"
                        : "text-white/30 group-hover:text-white group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
