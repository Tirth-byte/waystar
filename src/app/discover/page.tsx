"use client";

import { useState, useMemo } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PropertyCard from "@/components/property/PropertyCard";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";
import { RESIDENCES } from "@/data/residences";
import { Search, RotateCcw, SlidersHorizontal } from "lucide-react";

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [priceBracket, setPriceBracket] = useState<string>("All");
  const [minBeds, setMinBeds] = useState<number>(0);

  const filtered = useMemo(() => {
    return RESIDENCES.filter((r) => {
      // Search query
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        r.architect.toLowerCase().includes(q) ||
        r.tagline.toLowerCase().includes(q);

      // City filter
      const matchCity = selectedCity === "All" || r.city === selectedCity;

      // Type filter
      const matchType = selectedType === "All" || r.propertyType === selectedType;

      // Price bracket filter
      let matchPrice = true;
      if (priceBracket === "under-30m") matchPrice = r.price < 30000000;
      else if (priceBracket === "30m-45m") matchPrice = r.price >= 30000000 && r.price <= 45000000;
      else if (priceBracket === "above-45m") matchPrice = r.price > 45000000;

      // Bedroom filter
      const matchBeds = minBeds === 0 || r.bedrooms >= minBeds;

      return matchSearch && matchCity && matchType && matchPrice && matchBeds;
    });
  }, [searchQuery, selectedCity, selectedType, priceBracket, minBeds]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCity("All");
    setSelectedType("All");
    setPriceBracket("All");
    setMinBeds(0);
  };

  const isFiltered =
    searchQuery.trim().length > 0 ||
    selectedCity !== "All" ||
    selectedType !== "All" ||
    priceBracket !== "All" ||
    minBeds > 0;

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#0B0D0C] text-[#F4F1EB]">
        {/* Full-Bleed 50svh Discover Header */}
        <section className="relative w-full h-[50svh] min-h-[380px] flex items-end pb-12 overflow-hidden border-b border-white/10">
          <BackgroundVideo
            src="/media/v2/new-york/manhattan-sunset-skyline.mp4"
            poster="/media/v2/posters/manhattan-sunset-skyline.webp"
            priority
            overlay="bottom"
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
              Architectural Discovery
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight drop-shadow-md">
              Explore by Coordinate & Scale.
            </h1>
            <p className="text-xs sm:text-sm text-[#A6A39E] font-light max-w-xl leading-relaxed">
              Precision discovery interface across Dubai waterfront developments and Manhattan landmark addresses.
            </p>
          </div>
        </section>

        {/* Discovery Filter Controls Section */}
        <section className="bg-[#111311] border-b border-white/10 py-8 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C1AD91]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by residence name, architectural atelier, or neighborhood (e.g., Madison, Marina, Tribeca)..."
                className="w-full bg-[#0B0D0C] border border-white/15 pl-11 pr-4 py-3.5 text-xs text-white placeholder-[#A6A39E]/60 focus:outline-none focus:border-[#C1AD91] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-wider text-[#A6A39E] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Facets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {/* City Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C1AD91]">
                  Destination
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-[#0B0D0C] border border-white/15 px-3 py-2.5 text-white uppercase tracking-wider focus:outline-none focus:border-[#C1AD91]"
                >
                  <option value="All">All Destinations</option>
                  <option value="Dubai">Dubai, UAE</option>
                  <option value="New York">New York, USA</option>
                </select>
              </div>

              {/* Typology Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C1AD91]">
                  Typology
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-[#0B0D0C] border border-white/15 px-3 py-2.5 text-white uppercase tracking-wider focus:outline-none focus:border-[#C1AD91]"
                >
                  <option value="All">All Typologies</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Villa">Villa</option>
                  <option value="Waterfront Estate">Waterfront Estate</option>
                  <option value="Sky Residence">Sky Residence</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Loft">Loft</option>
                </select>
              </div>

              {/* Valuation Bracket */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C1AD91]">
                  Valuation Range
                </label>
                <select
                  value={priceBracket}
                  onChange={(e) => setPriceBracket(e.target.value)}
                  className="w-full bg-[#0B0D0C] border border-white/15 px-3 py-2.5 text-white uppercase tracking-wider focus:outline-none focus:border-[#C1AD91]"
                >
                  <option value="All">All Valuations</option>
                  <option value="under-30m">Under $30,000,000</option>
                  <option value="30m-45m">$30,000,000 – $45,000,000</option>
                  <option value="above-45m">Above $45,000,000</option>
                </select>
              </div>

              {/* Bedrooms Minimum */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C1AD91]">
                  Bedrooms
                </label>
                <select
                  value={minBeds}
                  onChange={(e) => setMinBeds(Number(e.target.value))}
                  className="w-full bg-[#0B0D0C] border border-white/15 px-3 py-2.5 text-white uppercase tracking-wider focus:outline-none focus:border-[#C1AD91]"
                >
                  <option value={0}>Any Bedroom Count</option>
                  <option value={4}>4+ Bedrooms</option>
                  <option value={5}>5+ Bedrooms</option>
                  <option value={6}>6+ Bedrooms</option>
                </select>
              </div>
            </div>

            {/* Filter Summary & Reset Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center space-x-2 text-[#A6A39E]">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C1AD91]" />
                <span>
                  Found <strong className="text-white">{filtered.length}</strong> matching residences
                </span>
              </div>

              {isFiltered && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center space-x-1.5 text-[#C1AD91] hover:text-white transition-colors uppercase text-[10px] tracking-widest"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((residence) => (
                <PropertyCard key={residence.id} residence={residence} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4 border border-white/10 bg-[#111311] p-10">
              <h3 className="font-serif text-2xl text-white">No residences match your search.</h3>
              <p className="text-xs text-[#A6A39E]">
                Try broadening your criteria or reset the filters to browse our complete collection.
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
