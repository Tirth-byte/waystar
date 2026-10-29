"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/ui/PropertyCard";
import FilterToolbar from "@/components/developments/FilterToolbar";
import { usePropertyFilter } from "@/hooks/usePropertyFilter";
import { Building2, RotateCcw } from "lucide-react";

export default function DevelopmentsPage() {
  const {
    filters,
    filteredProperties,
    setSearchQuery,
    setLocation,
    setPropertyType,
    setPriceRange,
    setSortBy,
    resetFilters,
    isFiltered,
    matchCount,
  } = usePropertyFilter();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#F7F6F2]">
        {/* Page Header Banner */}
        <section className="bg-[#20211F] text-[#F7F6F2] pt-20 pb-16 sm:pb-24 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B9A994] block">
              WAYSTAR Residential Portfolio
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F7F6F2] tracking-tight">
              International Residences
            </h1>
            <p className="text-sm sm:text-base text-[#E6DED0]/80 max-w-2xl font-light leading-relaxed">
              Explore our global collection of bespoke architectural estates. Each development represents an unrepeatable commission between master architects and extraordinary natural environments.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filter Toolbar */}
          <div className="mb-12">
            <FilterToolbar
              filters={filters}
              onSearchChange={setSearchQuery}
              onLocationChange={setLocation}
              onTypeChange={setPropertyType}
              onPriceChange={setPriceRange}
              onSortChange={setSortBy}
              onReset={resetFilters}
              isFiltered={isFiltered}
              matchCount={matchCount}
            />
          </div>

          {/* Results Grid or Meaningful Empty State */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {filteredProperties.map((property, idx) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  priority={idx < 3}
                />
              ))}
            </div>
          ) : (
            <div className="bg-[#20211F] text-[#F7F6F2] border border-white/10 p-12 sm:p-20 text-center space-y-6 max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#B9A994]">
                <Building2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-light">
                  No Matching Residences Found
                </h3>
                <p className="text-xs sm:text-sm text-[#E6DED0]/70 leading-relaxed font-light">
                  We could not find any residences matching your current search parameters. Try expanding your budget ceiling or resetting your filters.
                </p>
              </div>
              <div>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center space-x-2 bg-[#B9A994] hover:bg-[#F7F6F2] text-[#20211F] text-xs uppercase tracking-[0.2em] px-6 py-3.5 font-medium transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
