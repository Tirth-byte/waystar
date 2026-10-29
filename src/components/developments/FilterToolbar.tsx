"use client";

import { Search, X, RotateCcw } from "lucide-react";
import { CITIES, PROPERTY_TYPES } from "@/data/properties";
import { PropertyFilterState } from "@/types/property";

interface FilterToolbarProps {
  filters: PropertyFilterState;
  onSearchChange: (q: string) => void;
  onLocationChange: (loc: string) => void;
  onTypeChange: (type: string) => void;
  onSortChange: (sort: PropertyFilterState["sortBy"]) => void;
  onPriceChange: (min: number, max: number) => void;
  onReset: () => void;
  isFiltered: boolean;
  matchCount: number;
}

export default function FilterToolbar({
  filters,
  onSearchChange,
  onLocationChange,
  onTypeChange,
  onSortChange,
  onPriceChange,
  onReset,
  isFiltered,
  matchCount,
}: FilterToolbarProps) {
  return (
    <div className="bg-[#20211F] text-[#F7F6F2] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
      {/* Top Search Input & Reset Action */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#B9A994]" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by residence name, city, architect, or materials..."
            className="w-full bg-[#171816] text-[#F7F6F2] placeholder-[#55544F] text-xs sm:text-sm pl-11 pr-10 py-3.5 border border-white/15 focus:outline-none focus:border-[#B9A994] transition-colors"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#55544F] hover:text-[#F7F6F2] p-1"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between md:justify-end space-x-4 text-xs">
          <span className="text-[#B9A994] tracking-wider uppercase text-[11px]">
            {matchCount} {matchCount === 1 ? "Residence Found" : "Residences Found"}
          </span>

          {isFiltered && (
            <button
              onClick={onReset}
              className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#F7F6F2] hover:text-[#B9A994] px-3 py-2 border border-white/15 hover:border-[#B9A994]/50 transition-colors"
            >
              <RotateCcw className="w-3 h-3 text-[#B9A994]" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Selectors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location Filter */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#B9A994] block">
            Geographic Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full bg-[#171816] text-[#F7F6F2] text-xs px-3.5 py-3 border border-white/15 focus:outline-none focus:border-[#B9A994] transition-colors appearance-none cursor-pointer"
          >
            {CITIES.map((city) => (
              <option key={city} value={city} className="bg-[#20211F] text-white">
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#B9A994] block">
            Architectural Typology
          </label>
          <select
            value={filters.propertyType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full bg-[#171816] text-[#F7F6F2] text-xs px-3.5 py-3 border border-white/15 focus:outline-none focus:border-[#B9A994] transition-colors appearance-none cursor-pointer"
          >
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type} className="bg-[#20211F] text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Ceiling Filter */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#B9A994] block">
            Budget Ceiling
          </label>
          <select
            value={filters.maxPrice}
            onChange={(e) => onPriceChange(0, Number(e.target.value))}
            className="w-full bg-[#171816] text-[#F7F6F2] text-xs px-3.5 py-3 border border-white/15 focus:outline-none focus:border-[#B9A994] transition-colors appearance-none cursor-pointer"
          >
            <option value={50000000} className="bg-[#20211F] text-white">
              Any Budget
            </option>
            <option value={20000000} className="bg-[#20211F] text-white">
              Up to $20,000,000
            </option>
            <option value={30000000} className="bg-[#20211F] text-white">
              Up to $30,000,000
            </option>
            <option value={40000000} className="bg-[#20211F] text-white">
              Up to $40,000,000
            </option>
            <option value={45000000} className="bg-[#20211F] text-white">
              Up to $45,000,000
            </option>
          </select>
        </div>

        {/* Sort Order */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#B9A994] block">
            Sort Order
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onSortChange(e.target.value as PropertyFilterState["sortBy"])}
            className="w-full bg-[#171816] text-[#F7F6F2] text-xs px-3.5 py-3 border border-white/15 focus:outline-none focus:border-[#B9A994] transition-colors appearance-none cursor-pointer"
          >
            <option value="featured" className="bg-[#20211F] text-white">
              Curated / Flagship First
            </option>
            <option value="price-asc" className="bg-[#20211F] text-white">
              Price: Low to High
            </option>
            <option value="price-desc" className="bg-[#20211F] text-white">
              Price: High to Low
            </option>
            <option value="area-desc" className="bg-[#20211F] text-white">
              Interior Area: Largest
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

