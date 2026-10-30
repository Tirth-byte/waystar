"use client";

import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PropertyCard from "@/components/property/PropertyCard";
import { RESIDENCES } from "@/data/residences";
import { useSavedResidences } from "@/hooks/useSavedResidences";
import { Bookmark, Compass } from "lucide-react";

export default function SavedPage() {
  const { savedIds, isLoaded } = useSavedResidences();

  const savedResidences = RESIDENCES.filter((r) => savedIds.includes(r.id));

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#0B0D0C] text-[#F4F1EB] pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          {/* Header Title */}
          <div className="space-y-3 border-b border-white/10 pb-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
              Private Portfolio Collection
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <h1 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight">
                Saved Residences
              </h1>
              <span className="text-xs text-[#A6A39E] font-light font-mono">
                {savedResidences.length} {savedResidences.length === 1 ? "Property" : "Properties"} Stewarded
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A39E] font-light max-w-xl">
              Your confidential portfolio shortlist of architectural holdings across Dubai and New York City.
            </p>
          </div>

          {/* Content Area */}
          {!isLoaded ? (
            <div className="py-24 text-center text-xs text-[#A6A39E]">
              Loading your saved portfolio...
            </div>
          ) : savedResidences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedResidences.map((residence) => (
                <PropertyCard key={residence.id} residence={residence} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-6 border border-white/10 bg-[#111311] p-10 max-w-xl mx-auto">
              <div className="w-14 h-14 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C1AD91]">
                <Bookmark className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-white font-light">
                  Your portfolio shortlist is empty.
                </h3>
                <p className="text-xs text-[#A6A39E] font-light max-w-sm mx-auto leading-relaxed">
                  Bookmark singular residences as you explore our architectural developments across Dubai and New York.
                </p>
              </div>

              <Link
                href="/residences"
                className="inline-flex items-center space-x-2 bg-[#C1AD91] hover:bg-white text-[#0B0D0C] text-xs uppercase tracking-[0.2em] px-8 py-3.5 font-semibold transition-all shadow-xl"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Residences</span>
              </Link>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
