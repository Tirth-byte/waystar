"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { initGSAP, prefersReducedMotion } from "@/lib/animations";

export default function BrandIntroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    if (prefersReducedMotion() || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 sm:py-40 bg-[#F7F6F2] text-[#20211F] relative overflow-hidden border-b border-[#E6DED0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Marker */}
        <div className="flex items-center space-x-4 mb-16 pb-4 border-b border-[#E6DED0]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F]">
            01 / Architectural Statement
          </span>
          <span className="h-[1px] flex-1 bg-[#E6DED0]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B9A994]">
            Monaco • Como • London • Kyoto • Aspen • Dubai
          </span>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="max-w-5xl mb-20">
          <h2
            ref={headlineRef}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#20211F] leading-[1.08] tracking-tight"
          >
            We do not build merely for shelter. <br />
            <span className="italic font-normal text-[#55544F]">
              We sculpt environments for contemplative human presence.
            </span>
          </h2>
        </div>

        {/* Asymmetric Full-Bleed Architectural Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Architectural Photography with Inset Quote (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-[#E6DED0] shadow-2xl">
              <Image
                src="/media/residences/belvedere-hero.jpg"
                alt="Architectural Materiality and Water"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-black/40 border border-white/10 text-white">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B9A994] block">
                  Material Honesty
                </span>
                <p className="font-serif text-lg sm:text-xl font-light italic mt-1">
                  &ldquo;A residence must feel as though it emerged from the natural bedrock itself.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & Architectural Tenets (5 cols) */}
          <div ref={textRef} className="lg:col-span-5 space-y-8">
            <div className="space-y-5 text-sm sm:text-base text-[#55544F] font-light leading-relaxed">
              <p>
                Conventional real estate presentations prioritize repetitive metrics and standardized floor plans. WAYSTAR approaches residential development as an architectural patron.
              </p>
              <p>
                Every project is conceived in collaboration with world-class design ateliers. We champion genuine structural materials—honed Calacatta marble, charred Yakisugi cedar, board-formed concrete, and patinated bronze—engineered to mature with nobility over generations.
              </p>
            </div>

            {/* Architectural Tenets */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#E6DED0]">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl text-[#20211F] font-light block">
                  06
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                  Flagship Commissions
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl text-[#20211F] font-light block">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                  Authentic Materials
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#20211F] font-semibold hover:text-[#55544F] transition-colors"
              >
                <span>Read Full Philosophy</span>
                <ArrowUpRight className="w-4 h-4 text-[#B9A994] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
