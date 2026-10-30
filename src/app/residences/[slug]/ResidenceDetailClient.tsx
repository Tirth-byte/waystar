"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bookmark,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Building,
  Check,
  ChevronLeft,
  Share2,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";
import ViewingRequestForm from "@/components/forms/ViewingRequestForm";
import { Residence } from "@/types/residence";
import { useSavedResidences } from "@/hooks/useSavedResidences";

interface ResidenceDetailClientProps {
  residence: Residence;
}

export default function ResidenceDetailClient({ residence }: ResidenceDetailClientProps) {
  const { isSaved, toggleSave } = useSavedResidences();
  const saved = isSaved(residence.id);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#0B0D0C] text-[#F4F1EB]">
        {/* Full-Bleed 75svh Architectural Opening Visual */}
        <section className="relative w-full h-[75svh] min-h-[520px] flex items-end pb-12 sm:pb-16 overflow-hidden border-b border-white/10">
          {residence.heroMedia.type === "video" ? (
            <BackgroundVideo
              src={residence.heroMedia.src}
              poster={residence.heroMedia.poster}
              priority
              overlay="bottom"
            />
          ) : (
            <div className="absolute inset-0">
              <Image
                src={residence.heroMedia.poster}
                alt={residence.name}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/40 to-black/50" />
            </div>
          )}

          {/* Opening Narrative Overlay */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full space-y-4">
            <Link
              href="/residences"
              className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] text-[#C1AD91] hover:text-white transition-colors mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 bg-black/60 border border-white/15 text-[#C1AD91]">
                {residence.city} • {residence.location}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 bg-white/10 border border-white/15 text-white/90">
                {residence.propertyType}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none drop-shadow-xl">
              {residence.name}
            </h1>

            <p className="font-serif italic text-lg sm:text-2xl text-[#F4F1EB]/90 drop-shadow">
              {residence.tagline}
            </p>
          </div>
        </section>

        {/* Action HUD Bar */}
        <section className="bg-[#111311] border-b border-white/10 py-5 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C1AD91] block">
                Valuation Price
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-light text-white">
                {residence.formattedPrice}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => toggleSave(residence.id)}
                className={`flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-3 border transition-all ${
                  saved
                    ? "bg-[#C1AD91] text-[#0B0D0C] border-[#C1AD91] font-semibold"
                    : "bg-black/40 text-white hover:text-[#C1AD91] border-white/20"
                }`}
              >
                <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
                <span>{saved ? "Saved to Portfolio" : "Save Residence"}</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-4 py-3 bg-black/40 text-white hover:text-[#C1AD91] border border-white/20 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? "Link Copied" : "Share"}</span>
              </button>

              <a
                href="#enquire"
                className="inline-flex items-center space-x-2 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-7 py-3 font-semibold transition-all shadow-lg"
              >
                <span>Request Viewing</span>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content Layout: 8 cols narrative, 4 cols enquiry / sidebar */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column (8 cols): Architecture & Specifications */}
            <div className="lg:col-span-8 space-y-14">
              {/* Key Vital Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#111311] border border-white/10 text-center">
                <div className="space-y-1">
                  <Bed className="w-5 h-5 mx-auto text-[#C1AD91]" />
                  <span className="font-serif text-xl text-white block">{residence.bedrooms} Suites</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A6A39E]">Bedrooms</span>
                </div>
                <div className="space-y-1 border-l border-white/10">
                  <Bath className="w-5 h-5 mx-auto text-[#C1AD91]" />
                  <span className="font-serif text-xl text-white block">{residence.bathrooms} Baths</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A6A39E]">Bathrooms</span>
                </div>
                <div className="space-y-1 border-l border-white/10">
                  <Maximize2 className="w-5 h-5 mx-auto text-[#C1AD91]" />
                  <span className="font-serif text-xl text-white block">{residence.area.toLocaleString()}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A6A39E]">Living Area (sq ft)</span>
                </div>
                <div className="space-y-1 border-l border-white/10">
                  <Calendar className="w-5 h-5 mx-auto text-[#C1AD91]" />
                  <span className="font-serif text-xl text-white block">{residence.completionYear}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A6A39E]">Completion</span>
                </div>
              </div>

              {/* Architectural Narrative */}
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] font-medium block">
                  Architectural Narrative
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
                  Space, light, and enduring materiality.
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-[#A6A39E] font-light leading-relaxed">
                  {residence.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Curated Amenities */}
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] font-medium block">
                  Curated Amenities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {residence.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3.5 bg-[#111311] border border-white/5 text-xs text-[#F4F1EB]"
                    >
                      <Check className="w-4 h-4 text-[#C1AD91] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] font-medium block">
                  Architectural Specifications
                </span>
                <div className="bg-[#111311] border border-white/10 divide-y divide-white/10 text-xs">
                  {residence.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between p-4">
                      <span className="text-[#A6A39E] font-light">{spec.label}</span>
                      <span className="text-white font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between p-4">
                    <span className="text-[#A6A39E] font-light">Architectural Lead</span>
                    <span className="text-white font-medium text-right">{residence.architect}</span>
                  </div>
                </div>
              </div>

              {/* Illustrative Media Gallery */}
              {residence.galleryImages.length > 0 && (
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] font-medium block">
                    Illustrative Architectural Gallery
                  </span>
                  <div className="space-y-6">
                    {residence.galleryImages.map((img, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                          <Image
                            src={img.url}
                            alt={img.caption}
                            fill
                            sizes="(max-width: 1024px) 100vw, 65vw"
                            className="object-cover object-center"
                          />
                        </div>
                        <p className="text-[11px] text-[#A6A39E] italic text-right">
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Sticky Enquiry Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div id="enquire" className="sticky top-28 space-y-6">
                <ViewingRequestForm
                  residenceId={residence.id}
                  residenceName={residence.name}
                  residenceCity={residence.city}
                />

                <div className="p-6 bg-[#111311] border border-white/10 space-y-3 text-xs text-[#A6A39E]">
                  <div className="flex items-center space-x-2 text-white font-medium">
                    <Building className="w-4 h-4 text-[#C1AD91]" />
                    <span>Private Advisory Stewardship</span>
                  </div>
                  <p className="leading-relaxed">
                    Direct access to architectural dossiers, floor plans, and material schedules provided under confidential nondisclosure agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

