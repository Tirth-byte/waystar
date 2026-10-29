"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ClosingScene() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#171816] text-[#F7F6F2] overflow-hidden border-b border-white/10">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/residences/lumina-hero.jpg"
          alt="WAYSTAR Architectural Horizon"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171816] via-[#171816]/70 to-[#171816]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center space-y-8">
        <span className="text-[11px] uppercase tracking-[0.35em] text-[#B9A994] block">
          06 / Private Advisory
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] leading-[1.12] tracking-tight">
          Begin your journey into <br />
          <span className="italic font-normal text-[#E6DED0]">
            exceptional living.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#E6DED0]/85 font-light leading-relaxed max-w-2xl mx-auto">
          Connect with our private advisory team to schedule confidential viewings, request comprehensive architectural dossiers, or explore off-market acquisitions.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#B9A994] hover:bg-white text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 font-semibold transition-all shadow-xl"
          >
            <span>Request Private Viewing</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/developments"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/20 hover:border-white text-[#F7F6F2] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-colors bg-black/30 backdrop-blur-sm"
          >
            <span>All Residences</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
