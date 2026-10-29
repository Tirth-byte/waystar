"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROPERTIES } from "@/data/properties";

export default function GatewayScene() {
  return (
    <section className="py-24 sm:py-36 bg-[#171816] text-[#F7F6F2] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center space-x-4 mb-16 pb-6 border-b border-white/10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B9A994]">
            04 / Global Collection
          </span>
          <span className="h-[1px] flex-1 bg-white/10" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E6DED0]/60">
            Worldwide Residences
          </span>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F7F6F2] tracking-tight leading-[1.1]">
              Enter the world of <br />
              <span className="italic font-normal text-[#B9A994]">exceptional living.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#E6DED0]/80 font-light max-w-2xl leading-relaxed">
              Every residence in our portfolio is an unrepeatable dialogue between landscape, light, and architectural masterminds. Filter by geographical destination, typology, or bespoke dimensions.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/developments"
              className="inline-flex items-center space-x-3 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 font-medium"
            >
              <span>Explore All Residences</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Global Destinations Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {PROPERTIES.map((prop) => (
            <Link
              key={prop.id}
              href={`/developments/${prop.slug}`}
              className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#20211F] flex flex-col justify-end p-4 transition-all duration-500 hover:border-[#B9A994]"
            >
              <Image
                src={prop.heroImage}
                alt={prop.city}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-1">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#B9A994] block">
                  {prop.country}
                </span>
                <h4 className="font-serif text-lg font-light text-[#F7F6F2] group-hover:text-[#B9A994] transition-colors leading-tight">
                  {prop.city}
                </h4>
                <p className="text-[10px] text-[#E6DED0]/70 font-light truncate">
                  {prop.name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Closing Cinematic Advisory Call To Action */}
        <div className="relative p-10 sm:p-16 border border-white/15 bg-gradient-to-br from-[#20211F] to-[#121312] overflow-hidden text-center sm:text-left">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#B9A994]/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994] block">
              Private Concierge & Consultations
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F6F2] leading-tight">
              Begin a confidential discussion <br />
              <span className="italic font-normal text-[#E6DED0]">with our architectural advisors.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#E6DED0]/80 font-light leading-relaxed max-w-xl">
              Arrange a private viewing, receive comprehensive floor plan dossiers, or commission a tailored acquisition search across our international developments.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#B9A994] hover:bg-[#F7F6F2] text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 font-medium"
              >
                <span>Request Private Viewing</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/discover"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/20 hover:border-white text-[#F7F6F2] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-colors"
              >
                <span>Launch Discovery Matrix</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

