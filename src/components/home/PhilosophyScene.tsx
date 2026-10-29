"use client";

import { useState } from "react";
import Image from "next/image";

interface PhilosophyPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  materials: string[];
  image: string;
}

const PILLARS: PhilosophyPillar[] = [
  {
    id: "materiality",
    number: "01",
    title: "Material Honesty",
    subtitle: "Tactility Beyond Veneer",
    description:
      "We refuse synthetic simulations. Every WAYSTAR residence is constructed from monumental, raw materials: vein-matched Tuscan marble, sustainably charred Yakisugi cedar, hand-patinated architectural bronze, and monolithic poured basalt that deepens with character over centuries.",
    materials: ["Calacatta Marble", "Yakisugi Cedar", "Honed Basalt", "Cast Bronze"],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "light",
    number: "02",
    title: "Light & Spatial Zenith",
    subtitle: "Choreographing the Natural Sun",
    description:
      "Natural daylight is treated as a physical building material. Double-height voids, recessed clerestory apertures, and aerospace-engineered acoustic glass channel changing sunlight from dawn to twilight, heightening the emotional serenity of internal spaces.",
    materials: ["Acoustic Glazing", "Zenith Skylights", "Solar Mashrabiya", "Circadian Luminaires"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "permanence",
    number: "03",
    title: "Contextual Permanence",
    subtitle: "Rooted in Global Bedrock",
    description:
      "Great architecture belongs inextricably to its geography. Whether cantilevered into the granite fissures of Aspen's Red Mountain or descending into the ancient waters of Lake Como, each structure respects the geological memory and cultural lineage of its site.",
    materials: ["Granite Bedrock", "Geothermal Arrays", "Marine Concrete", "Alpine Copper"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function PhilosophyScene() {
  const [activePillar, setActivePillar] = useState<PhilosophyPillar>(PILLARS[0]);

  return (
    <section className="py-24 sm:py-36 bg-[#F7F6F2] text-[#20211F] border-b border-[#E6DED0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center space-x-4 mb-16 pb-6 border-b border-[#E6DED0]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F]">
            03 / Architectural Philosophy
          </span>
          <span className="h-[1px] flex-1 bg-[#E6DED0]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B9A994]">
            Craft • Proportion • Atmosphere
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#20211F] leading-tight">
            Built for generations. <br />
            <span className="italic font-normal text-[#55544F]">
              Defined by elemental truth.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#55544F] font-light leading-relaxed">
            Our architectural philosophy centers on timeless tactile integrity rather than transient trends. Explore the three enduring pillars that anchor every WAYSTAR commission.
          </p>
        </div>

        {/* Interactive Pillar Selector & Dynamic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Pillar Navigation & Description (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {PILLARS.map((pillar) => {
                const isActive = activePillar.id === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar)}
                    className={`w-full text-left p-6 transition-all duration-300 border flex items-start space-x-5 ${
                      isActive
                        ? "bg-[#20211F] text-[#F7F6F2] border-[#20211F] shadow-lg"
                        : "bg-white/60 hover:bg-white text-[#20211F] border-[#E6DED0]"
                    }`}
                  >
                    <span
                      className={`font-serif text-lg ${
                        isActive ? "text-[#B9A994]" : "text-[#55544F]"
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-light">
                        {pillar.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 uppercase tracking-wider ${
                          isActive ? "text-[#B9A994]" : "text-[#55544F]"
                        }`}
                      >
                        {pillar.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Full Narrative */}
            <div className="p-6 bg-[#E6DED0]/50 border border-[#E6DED0] space-y-4">
              <p className="text-xs sm:text-sm text-[#20211F] leading-relaxed font-light">
                {activePillar.description}
              </p>

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#55544F] block mb-2">
                  Key Disciplines & Materials:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activePillar.materials.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] bg-white px-2.5 py-1 text-[#20211F] border border-[#E6DED0]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Visual Composition (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-[#20211F] shadow-2xl border border-[#E6DED0]">
              <Image
                key={activePillar.id}
                src={activePillar.image}
                alt={activePillar.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-opacity duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994]">
                    Architectural Study {activePillar.number}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-light">
                    {activePillar.subtitle}
                  </h4>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#B9A994] border border-[#B9A994]/40 px-3 py-1 backdrop-blur-sm">
                  WAYSTAR Atelier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

