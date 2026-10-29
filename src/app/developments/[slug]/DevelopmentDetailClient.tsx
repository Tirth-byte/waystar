"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  ArrowUpRight,
  ArrowLeft,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Compass,
  CheckCircle2,
  Play,
  Pause,
  Expand,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/ui/PropertyCard";
import GalleryModal from "@/components/developments/GalleryModal";
import { Property } from "@/types/property";
import { useFavourites } from "@/hooks/useFavourites";

interface DevelopmentDetailClientProps {
  property: Property;
  related: Property[];
}

export default function DevelopmentDetailClient({
  property,
  related,
}: DevelopmentDetailClientProps) {
  const { isFavourite, toggleFavourite } = useFavourites();
  const saved = isFavourite(property.id);

  // Gallery Modal State
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  // Video State
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);

  const allImages = [
    { url: property.heroImage, caption: `${property.name} Exterior Hero` },
    ...property.galleryImages,
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[#F7F6F2] text-[#20211F]">
        {/* Architectural Hero */}
        <section className="relative w-full h-[75vh] min-h-[550px] max-h-[850px] bg-[#121312] overflow-hidden flex items-end pb-12 sm:pb-16">
          <Image
            src={property.heroImage}
            alt={property.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20211F] via-[#20211F]/50 to-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full space-y-6">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#B9A994]">
              <Link
                href="/developments"
                className="hover:text-white transition-colors flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Residences</span>
              </Link>
              <span className="text-[#55544F]">/</span>
              <span className="text-[#E6DED0]">{property.city}</span>
              <span className="text-[#55544F]">/</span>
              <span className="text-white font-medium">{property.name}</span>
            </div>

            {/* Title & Valuation Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/15 pb-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 bg-white/10 text-[#B9A994] border border-white/15 inline-block">
                  {property.propertyType} • {property.location}
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F7F6F2] leading-tight">
                  {property.name}
                </h1>
                <p className="font-serif italic text-lg sm:text-xl text-[#B9A994]">
                  {property.tagline}
                </p>
              </div>

              {/* Valuation & Interactive Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="text-left sm:text-right pr-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                    Illustrative Valuation
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl text-[#F7F6F2] font-light">
                    {property.formattedPrice}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleFavourite(property.id)}
                    aria-label={saved ? "Remove from saved" : "Save residence"}
                    className={`p-3.5 border transition-all ${
                      saved
                        ? "bg-[#B9A994] text-[#20211F] border-[#B9A994]"
                        : "bg-white/10 text-[#F7F6F2] hover:text-[#B9A994] border-white/20"
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${saved ? "fill-current" : ""}`} />
                  </button>

                  <Link
                    href={`/contact?property=${property.slug}`}
                    className="inline-flex items-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-6 py-4 transition-all font-medium"
                  >
                    <span>Request Viewing</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Spec Highlights Bar */}
        <section className="bg-[#20211F] text-[#F7F6F2] border-b border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs uppercase tracking-wider">
            <div className="flex items-center space-x-3">
              <Bed className="w-4 h-4 text-[#B9A994]" />
              <div>
                <span className="text-[#55544F] text-[10px] block">Suites</span>
                <span className="font-serif text-base text-[#F7F6F2] font-normal">
                  {property.bedrooms} Bedrooms
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Bath className="w-4 h-4 text-[#B9A994]" />
              <div>
                <span className="text-[#55544F] text-[10px] block">Baths</span>
                <span className="font-serif text-base text-[#F7F6F2] font-normal">
                  {property.bathrooms} Bathrooms
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Maximize2 className="w-4 h-4 text-[#B9A994]" />
              <div>
                <span className="text-[#55544F] text-[10px] block">Interior Area</span>
                <span className="font-serif text-base text-[#F7F6F2] font-normal">
                  {property.area.toLocaleString()} {property.areaUnit}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-[#B9A994]" />
              <div>
                <span className="text-[#55544F] text-[10px] block">Completion</span>
                <span className="font-serif text-base text-[#F7F6F2] font-normal">
                  {property.completionYear}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Body Content: Description, Gallery, Specs */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Architectural Concept Statement */}
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F] block">
                  Architectural Narrative
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light leading-snug">
                  The Vision & Material Conception
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#55544F] font-light leading-relaxed">
                  {property.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Architectural Video Section (if available) */}
              {property.videoUrl && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F]">
                      Cinematic Motion Study
                    </span>
                    <button
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="text-xs uppercase tracking-wider text-[#B9A994] flex items-center space-x-1"
                    >
                      {isPlayingVideo ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>Play</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black shadow-lg">
                    <video
                      autoPlay={isPlayingVideo}
                      muted
                      loop
                      playsInline
                      poster={property.posterImage}
                      className="w-full h-full object-cover"
                    >
                      <source src={property.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                </div>
              )}

              {/* Key Amenities Matrix */}
              <div className="space-y-6 pt-6 border-t border-[#E6DED0]">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F] block">
                  Curated Amenities & Services
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-3 p-3.5 bg-white border border-[#E6DED0]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B9A994] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#20211F] font-normal leading-tight">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Specifications & Atelier Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Atelier Card */}
              <div className="p-8 bg-[#20211F] text-[#F7F6F2] space-y-6 border border-white/10">
                <div className="flex items-center space-x-3">
                  <Compass className="w-5 h-5 text-[#B9A994]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994]">
                    Authoring Atelier
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-light text-[#F7F6F2]">
                    {property.architect}
                  </h3>
                  <p className="text-xs text-[#E6DED0]/70 font-light mt-1">
                    Commissioned by WAYSTAR for {property.city}, {property.country}.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#55544F]">Curated Edition</span>
                  <span className="text-xs uppercase tracking-widest text-[#B9A994]">
                    Completed {property.completionYear}
                  </span>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white border border-[#E6DED0] p-8 space-y-6">
                <h3 className="font-serif text-xl font-light text-[#20211F] border-b border-[#E6DED0] pb-4">
                  Engineering & Specifications
                </h3>

                <dl className="space-y-4 text-xs">
                  {property.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between py-2 border-b border-[#E6DED0]/60 last:border-0"
                    >
                      <dt className="text-[#55544F] uppercase tracking-wider text-[10px]">
                        {spec.label}
                      </dt>
                      <dd className="font-medium text-[#20211F] text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Private Viewing CTA Box */}
              <div className="p-8 bg-[#E6DED0]/60 border border-[#E6DED0] space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#55544F] block">
                  Private Consultation
                </span>
                <h4 className="font-serif text-2xl font-light text-[#20211F]">
                  Request an Architectural Dossier
                </h4>
                <p className="text-xs text-[#55544F] font-light leading-relaxed">
                  Confidential appointments arranged at your discretion. Pre-selects {property.name} in our viewing registry.
                </p>
                <div className="pt-2">
                  <Link
                    href={`/contact?property=${property.slug}`}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#20211F] hover:bg-[#55544F] text-[#F7F6F2] text-xs uppercase tracking-[0.25em] py-3.5 transition-colors font-medium"
                  >
                    <span>Schedule Viewing</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B9A994]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Architectural Gallery Section */}
          <div className="mt-20 pt-16 border-t border-[#E6DED0] space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F] block">
                  Visual Archive
                </span>
                <h3 className="font-serif text-3xl font-light text-[#20211F]">
                  Architectural Photography Gallery
                </h3>
              </div>

              <button
                onClick={() => {
                  setSelectedGalleryIndex(0);
                  setGalleryOpen(true);
                }}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#20211F] hover:text-[#55544F] font-medium"
              >
                <Expand className="w-4 h-4 text-[#B9A994]" />
                <span>View Full-Screen (4)</span>
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {property.galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedGalleryIndex(index + 1);
                    setGalleryOpen(true);
                  }}
                  className="group relative aspect-[4/3] bg-[#20211F] overflow-hidden cursor-pointer border border-[#E6DED0] hover:border-[#B9A994]"
                >
                  <Image
                    src={image.url}
                    alt={image.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-xs text-white italic font-serif">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Residences Section */}
          <div className="mt-24 pt-16 border-t border-[#E6DED0] space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F] block">
                  Further Exploration
                </span>
                <h3 className="font-serif text-3xl font-light text-[#20211F]">
                  Related International Estates
                </h3>
              </div>

              <Link
                href="/developments"
                className="text-xs uppercase tracking-[0.2em] text-[#20211F] hover:text-[#55544F]"
              >
                All Residences →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <PropertyCard key={rel.id} property={rel} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Full-Screen Gallery Modal */}
      <GalleryModal
        images={allImages}
        initialIndex={selectedGalleryIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        propertyName={property.name}
      />

      <Footer />
    </>
  );
}
