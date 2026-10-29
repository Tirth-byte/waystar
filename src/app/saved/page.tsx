"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/ui/PropertyCard";
import { useFavourites } from "@/hooks/useFavourites";
import { Bookmark, ArrowRight, Trash2, ArrowUpRight } from "lucide-react";

export default function SavedResidencesPage() {
  const { favouriteProperties, isLoaded, count, toggleFavourite } = useFavourites();

  const totalValuation = favouriteProperties.reduce(
    (sum, prop) => sum + prop.price,
    0
  );

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[#F7F6F2]">
        {/* Header Banner */}
        <section className="bg-[#20211F] text-[#F7F6F2] pt-20 pb-16 sm:pb-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#B9A994]">
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>Curated Portfolio</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F7F6F2] tracking-tight">
              Saved Residences
            </h1>
            <p className="text-sm sm:text-base text-[#E6DED0]/80 max-w-2xl font-light leading-relaxed">
              Your privately curated selection of WAYSTAR estates. Review architectural specifications, compare typologies, or request a consolidated viewing itinerary.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-6 lg:px-12">
          {!isLoaded ? (
            // Subtle loading skeleton while reading localStorage
            <div className="py-20 text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[#55544F] animate-pulse">
                Loading saved residences...
              </span>
            </div>
          ) : count > 0 ? (
            <div className="space-y-12">
              {/* Summary Stats & Actions Bar */}
              <div className="bg-[#20211F] text-[#F7F6F2] p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994]">
                    Portfolio Summary
                  </span>
                  <p className="font-serif text-2xl font-light">
                    {count} {count === 1 ? "Residence Curated" : "Residences Curated"}
                  </p>
                  <p className="text-xs text-[#55544F]">
                    Combined Illustrative Valuation:{" "}
                    <strong className="text-[#B9A994]">
                      ${(totalValuation / 1000000).toFixed(1)} Million USD
                    </strong>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-[#B9A994] hover:bg-[#F7F6F2] text-[#20211F] text-xs uppercase tracking-[0.2em] px-6 py-3.5 font-medium transition-colors"
                  >
                    <span>Request Portfolio Viewing</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Saved Properties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {favouriteProperties.map((property) => (
                  <div key={property.id} className="relative">
                    <PropertyCard property={property} />
                    <button
                      onClick={() => toggleFavourite(property.id)}
                      className="mt-3 w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider text-[#55544F] hover:text-red-700 py-2 border border-[#E6DED0] hover:border-red-300 transition-colors bg-white"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove from Saved</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Elegant Empty State */
            <div className="bg-[#20211F] text-[#F7F6F2] border border-white/10 p-12 sm:p-24 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#B9A994]">
                <Bookmark className="w-7 h-7" />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994] block">
                  Portfolio Empty
                </span>
                <h3 className="font-serif text-3xl font-light">
                  No Saved Residences Yet
                </h3>
                <p className="text-xs sm:text-sm text-[#E6DED0]/70 leading-relaxed font-light max-w-md mx-auto">
                  As you explore the WAYSTAR collection, click the bookmark icon on any residence to save it to your private portfolio.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/developments"
                  className="inline-flex items-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 font-medium transition-all"
                >
                  <span>Explore Residences</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
