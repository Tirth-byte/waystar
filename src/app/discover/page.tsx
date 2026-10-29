"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/ui/PropertyCard";
import FilterToolbar from "@/components/developments/FilterToolbar";
import { usePropertyFilter } from "@/hooks/usePropertyFilter";
import { Compass, Sparkles, Building, Waves, Mountain, Landmark } from "lucide-react";

export default function DiscoverPage() {
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

  const atmosphericCategories = [
    {
      title: "Mediterranean & Waterfront",
      subtitle: "Ocean horizon villas and cantilevered pools",
      icon: Waves,
      onClick: () => {
        resetFilters();
        setLocation("Monaco");
      },
    },
    {
      title: "Alpine & Mountain Solitude",
      subtitle: "Snow-line pavilions and thermal sanctuaries",
      icon: Mountain,
      onClick: () => {
        resetFilters();
        setLocation("Aspen");
      },
    },
    {
      title: "Historic Urban Sanctuaries",
      subtitle: "Conserved Georgian architecture and Mayfair retreats",
      icon: Landmark,
      onClick: () => {
        resetFilters();
        setLocation("London");
      },
    },
    {
      title: "Biophilic Forest Retreats",
      subtitle: "Yakisugi timber, bamboo groves, and onsen baths",
      icon: Building,
      onClick: () => {
        resetFilters();
        setLocation("Kyoto");
      },
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[#F7F6F2]">
        {/* Discovery Hero Header with Safe Top Padding */}
        <section className="bg-[#20211F] text-[#F7F6F2] pt-32 pb-16 sm:pb-24 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#B9A994]">
              <Compass className="w-4 h-4" />
              <span>Interactive Discovery Matrix</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#FFFFFF] tracking-tight">
              Curate Your Living Horizon
            </h1>
            <p className="text-sm sm:text-base text-[#E6DED0]/85 max-w-2xl font-light leading-relaxed">
              Navigate our portfolio through architectural atmosphere, geography, or material typologies. Find the residence aligned with your lifestyle and architectural taste.
            </p>
          </div>
        </section>

        {/* Atmosphere Curations Ribbon */}
        <section className="py-10 bg-[#E6DED0]/50 border-b border-[#E6DED0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#55544F]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#55544F]">
                Atmospheric Presets
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {atmosphericCategories.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.onClick}
                    className="group p-5 bg-white border border-[#E6DED0] hover:border-[#20211F] hover:bg-[#20211F] hover:text-[#F7F6F2] transition-all text-left flex flex-col justify-between shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-[#B9A994] mb-3 transition-colors group-hover:text-[#B9A994]" />
                    <div>
                      <h4 className="font-serif text-base font-normal group-hover:text-[#F7F6F2] text-[#20211F]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#55544F] group-hover:text-[#E6DED0]/70 mt-1 font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Discovery Filter and Results Section */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
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

          {/* Results Grid */}
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
            <div className="bg-[#20211F] text-[#F7F6F2] border border-white/10 p-12 sm:p-20 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-light">
                No Residences Match This Discovery Criteria
              </h3>
              <p className="text-xs sm:text-sm text-[#E6DED0]/70 leading-relaxed font-light">
                Try selecting &ldquo;All Locations&rdquo; or clearing your keywords.
              </p>
              <button
                onClick={resetFilters}
                className="bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.2em] px-6 py-3 font-medium hover:bg-white transition-colors"
              >
                Reset Discovery Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
