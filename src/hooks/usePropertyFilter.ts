"use client";

import { useState, useMemo, useCallback } from "react";
import { Property, PropertyFilterState } from "@/types/property";
import { PROPERTIES } from "@/data/properties";

const initialFilterState: PropertyFilterState = {
  searchQuery: "",
  location: "All Locations",
  propertyType: "All Types",
  minPrice: 0,
  maxPrice: 50000000,
  sortBy: "featured",
};

export function usePropertyFilter(initialProperties: Property[] = PROPERTIES) {
  const [filters, setFilters] = useState<PropertyFilterState>(initialFilterState);

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const setLocation = useCallback((location: string) => {
    setFilters((prev) => ({ ...prev, location }));
  }, []);

  const setPropertyType = useCallback((propertyType: string) => {
    setFilters((prev) => ({ ...prev, propertyType }));
  }, []);

  const setPriceRange = useCallback((minPrice: number, maxPrice: number) => {
    setFilters((prev) => ({ ...prev, minPrice, maxPrice }));
  }, []);

  const setSortBy = useCallback((sortBy: PropertyFilterState["sortBy"]) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilterState);
  }, []);

  const isFiltered = useMemo(() => {
    return (
      filters.searchQuery.trim() !== "" ||
      filters.location !== "All Locations" ||
      filters.propertyType !== "All Types" ||
      filters.minPrice > 0 ||
      filters.maxPrice < 50000000 ||
      filters.sortBy !== "featured"
    );
  }, [filters]);

  const filteredProperties = useMemo(() => {
    return initialProperties
      .filter((property) => {
        // Search query across name, city, country, architect, tagline
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase().trim();
          const matches =
            property.name.toLowerCase().includes(q) ||
            property.city.toLowerCase().includes(q) ||
            property.country.toLowerCase().includes(q) ||
            property.architect.toLowerCase().includes(q) ||
            property.tagline.toLowerCase().includes(q) ||
            property.propertyType.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // Location filter
        if (filters.location !== "All Locations") {
          if (property.city !== filters.location) return false;
        }

        // Property type filter
        if (filters.propertyType !== "All Types") {
          if (property.propertyType !== filters.propertyType) return false;
        }

        // Price range filter
        if (property.price < filters.minPrice || property.price > filters.maxPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === "price-asc") {
          return a.price - b.price;
        }
        if (filters.sortBy === "price-desc") {
          return b.price - a.price;
        }
        if (filters.sortBy === "area-desc") {
          return b.area - a.area;
        }
        // default featured
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [initialProperties, filters]);

  return {
    filters,
    filteredProperties,
    setSearchQuery,
    setLocation,
    setPropertyType,
    setPriceRange,
    setSortBy,
    resetFilters,
    isFiltered,
    totalCount: initialProperties.length,
    matchCount: filteredProperties.length,
  };
}
