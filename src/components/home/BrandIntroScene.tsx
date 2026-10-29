"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { initGSAP, prefersReducedMotion } from "@/lib/animations";

export default function BrandIntroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    if (prefersReducedMotion() || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textColRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        imageColRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#F7F6F2] text-[#20211F] relative overflow-hidden border-b border-[#E6DED0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Eyebrow */}
        <div className="flex items-center space-x-4 mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F]">
            01 / Brand Manifesto
          </span>
          <span className="h-[1px] flex-1 bg-[#E6DED0]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B9A994]">
            Monaco • Como • London • Kyoto • Aspen • Dubai
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div ref={textColRef} className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.12] text-[#20211F] tracking-tight">
              A departure from the ordinary. <br />
              <span className="italic font-normal text-[#55544F]">
                Spaces sculpted for permanence.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#55544F] leading-relaxed font-light">
              Conventional luxury real estate catalogues prioritize transactional repetition. WAYSTAR operates as an architectural patron: commissioning living environments where structural daring, natural light, and elemental materials coalesce into timeless domestic sanctuaries.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E6DED0]">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#20211F] block font-light">
                  06
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F]">
                  Flagship Estates
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#20211F] block font-light">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F]">
                  Atelier Authored
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#20211F] block font-light">
                  \$188M+
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F]">
                  Portfolio Valuation
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#20211F] font-semibold hover:text-[#55544F] transition-colors"
              >
                <span>Read Architectural Philosophy</span>
                <ArrowUpRight className="w-4 h-4 text-[#B9A994] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div ref={imageColRef} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] w-full overflow-hidden bg-[#E6DED0] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                alt="Architectural Interior Detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 backdrop-blur-md bg-black/40 border border-white/10">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B9A994] block">
                  Materiality & Light
                </span>
                <p className="font-serif text-lg font-light italic mt-1">
                  &ldquo;We do not build merely for shelter, but to elevate human consciousness through proportion.&rdquo;
                </p>
              </div>
            </div>

            {/* Architectural Grid Line Accents */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#B9A994]/40 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
