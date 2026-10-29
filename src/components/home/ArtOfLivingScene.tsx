"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { initGSAP, prefersReducedMotion } from "@/lib/animations";

export default function ArtOfLivingScene() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const { gsap } = initGSAP();

    if (prefersReducedMotion() || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[75vh] py-28 sm:py-36 bg-[#121312] text-[#F7F6F2] overflow-hidden flex items-center border-b border-white/10"
    >
      {/* Background Fluid Interior Cinematics */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-60" : "opacity-0"
          }`}
        >
          <source src="/media/videos/interior-living.mp4" type="video/mp4" />
        </video>

        {/* Fallback Poster */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0 pointer-events-none" : "opacity-70"
          }`}
        >
          <Image
            src="/media/posters/interior-living-poster.jpg"
            alt="The Art of Living Interior"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121312] via-transparent to-[#121312]/80 pointer-events-none" />
      </div>

      {/* Foreground Poetic Craft Statement */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div ref={textRef} className="max-w-2xl space-y-6">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#B9A994] block">
            04 / The Art of Living
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] leading-[1.1] tracking-tight">
            Crafted for stillness. <br />
            <span className="italic font-normal text-[#E6DED0]">
              Illuminated by natural zenith.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#E6DED0]/90 font-light leading-relaxed">
            Domestic spaces should calm the senses. We choreograph morning and evening daylight across authentic surfaces: brushed bronze, Belgian linen, vein-matched stone, and European oak.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-6 border-t border-white/15">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                Atmosphere
              </span>
              <span className="font-serif text-lg text-[#F7F6F2]">Acoustic Calm</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                Light
              </span>
              <span className="font-serif text-lg text-[#F7F6F2]">Circadian Flow</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block">
                Permanence
              </span>
              <span className="font-serif text-lg text-[#F7F6F2]">Natural Stone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
