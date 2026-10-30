"use client";

import { useState, useMemo } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PropertyCard from "@/components/property/PropertyCard";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";
import { RESIDENCES } from "@/data/residences";
import { RotateCcw } from "lucide-react";

export default function ResidencesPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");

  const propertyTypes = useMemo(() => {
    const types = new Set(RESIDENCES.map((r) => r.propertyType));
    return ["All", ...Array.from(types)];
  }, []);

  const filtered = useMemo(() => {
    return RESIDENCES.filter((r) => {
      const matchCity = selectedCity === "All" || r.city === selectedCity;
      const matchType = selectedType === "All" || r.propertyType === selectedType;
      return matchCity && matchType;
    }).sort((a, b) => {
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "area-desc") return b.area - a.area;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCity, selectedType, sortBy]);

  const handleReset = () => {
    setSelectedCity("All");
    setSelectedType("All");
    setSortBy("featured");
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#0B0D0C] text-[#F4F1EB]">
        {/* Full-Bleed 55svh Cinematic Portfolio Header */}
        <section className="relative w-full h-[55svh] min-h-[420px] flex items-end pb-12 overflow-hidden border-b border-white/10">
          <BackgroundVideo
            src="/media/v2/new-york/manhattan-night-architecture.mp4"
            poster="/media/v2/posters/manhattan-night-architecture.webp"
            priority
            overlay="bottom"
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
              Global Portfolio
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight drop-shadow-md">
              Exceptional Residences.
            </h1>
            <p className="text-xs sm:text-sm text-[#A6A39E] font-light max-w-xl leading-relaxed">
              Curated architectural residences across Dubai and New York City, designed for discerning collectors of space.
            </p>
          </div>
        </section>

        {/* Filter and Sorting Toolbar */}
        <section className="sticky top-[73px] z-30 bg-[#0B0D0C]/95 backdrop-blur-md border-b border-white/10 py-4 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* City Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
              {["All", "Dubai", "New York"].map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                    selectedCity === city
                      ? "bg-[#C1AD91] text-[#0B0D0C] border-[#C1AD91] font-semibold"
                      : "bg-[#111311] text-[#A6A39E] hover:text-white border-white/10"
                  }`}
                >
                  {city === "All" ? "All Worlds" : city}
                </button>
              ))}
            </div>

            {/* Type Selector & Sort Selector */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-[#111311] border border-white/15 text-xs text-white uppercase tracking-[0.15em] px-3.5 py-2 focus:outline-none focus:border-[#C1AD91]"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Typologies" : type}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#111311] border border-white/15 text-xs text-white uppercase tracking-[0.15em] px-3.5 py-2 focus:outline-none focus:border-[#C1AD91]"
              >
                <option value="featured">Curated Order</option>
                <option value="price-desc">Price: Highest First</option>
                <option value="price-asc">Price: Lowest First</option>
                <option value="area-desc">Living Area: Largest First</option>
              </select>

              {(selectedCity !== "All" || selectedType !== "All" || sortBy !== "featured") && (
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-1 text-xs uppercase tracking-[0.15em] text-[#C1AD91] hover:text-white px-2 py-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Property Grid Results */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16 space-y-8">
          <div className="flex items-center justify-between text-xs text-[#A6A39E] border-b border-white/10 pb-3">
            <span>
              Showing <strong className="text-white">{filtered.length}</strong> Singular Residences
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#C1AD91]">
              Simulated Architectural Portfolio
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((residence, idx) => (
                <PropertyCard
                  key={residence.id}
                  residence={residence}
                  priority={idx < 3}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4 border border-white/10 bg-[#111311] p-10">
              <h3 className="font-serif text-2xl text-white">No residences match your criteria.</h3>
              <p className="text-xs text-[#A6A39E]">
                Adjust your destination or typology filters to view available portfolio holdings.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-6 py-3 bg-[#C1AD91] text-[#0B0D0C] font-semibold"
              >
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

