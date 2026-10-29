import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[#F7F6F2] text-[#20211F]">
        {/* Editorial Hero */}
        <section className="bg-[#20211F] text-[#F7F6F2] pt-24 pb-20 sm:pb-32 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-6 relative z-10">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B9A994] block">
              Architectural Manifesto
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#F7F6F2] max-w-4xl leading-[1.1] tracking-tight">
              A departure from the ordinary. <br />
              <span className="italic font-normal text-[#E6DED0]">
                Spaces that redefine living.
              </span>
            </h1>
            <p className="text-sm sm:text-lg text-[#E6DED0]/80 max-w-2xl font-light leading-relaxed">
              WAYSTAR was conceived on a singular premise: that true residential luxury is measured not by superficial adornment, but by spatial courage, material permanence, and sublime natural illumination.
            </p>
          </div>
        </section>

        {/* Academic Prototype Transparency Notice */}
        <section className="bg-[#E6DED0]/70 border-b border-[#E6DED0] py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="p-5 bg-white border border-[#B9A994]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#55544F] font-bold">
                  Academic Context Disclosure
                </span>
                <p className="text-xs text-[#20211F] leading-relaxed">
                  WAYSTAR is an original conceptual brand engineered as an End Semester Examination project for AI-Assisted Web Application Engineering. All architectural narratives, developments, and studio partnerships presented herein are illustrative works of design speculation.
                </p>
              </div>
              <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[#20211F] text-[#F7F6F2]">
                Prototype v1.0
              </span>
            </div>
          </div>
        </section>

        {/* Core Vision & Narrative */}
        <section className="py-20 sm:py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Narrative 6 Cols */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F]">
                  01 / Our Architectural Vision
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#20211F] leading-tight">
                  Beyond Real Estate. <br />
                  <span className="italic font-normal text-[#55544F]">
                    Curators of Monolithic Form.
                  </span>
                </h2>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-[#55544F] font-light leading-relaxed">
                <p>
                  Most development companies operate within the boundaries of conventional financial efficiency, replicating standardized plans across disconnected urban parcels. WAYSTAR rejects this industrial model.
                </p>
                <p>
                  We treat each residential development as an unrepeatable commission. We partner with the world&apos;s most uncompromising architectural ateliers—studios who view concrete, stone, and bronze as physical mediums for emotional resonance.
                </p>
                <p>
                  Our projects honor the geological reality of their sites. In Kyoto, residences breathe through charred Yakisugi timber and natural onsen springs. In Monaco, glass pavilions hover daringly over maritime waters. In London, classical heritage streetscapes guard radical minimalist sanctuaries.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/developments"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#20211F] hover:text-[#55544F] font-semibold border-b border-[#20211F] pb-1"
                >
                  <span>Explore the Portfolio</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B9A994]" />
                </Link>
              </div>
            </div>

            {/* Visual Composition 6 Cols */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#20211F] shadow-2xl border border-[#E6DED0]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                  alt="WAYSTAR Architectural Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-[#E6DED0]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#55544F] block">
                    Structural Purity
                  </span>
                  <p className="font-serif text-base italic text-[#20211F]">
                    &ldquo;Form does not merely follow function; form shapes human perception and stillness.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Cornerstones of Craft */}
          <div className="mt-28 pt-20 border-t border-[#E6DED0]">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F]">
                02 / Design Method
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#20211F]">
                The Three Pillars of Execution
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-[#E6DED0] space-y-4">
                <span className="font-serif text-3xl text-[#B9A994] font-light">01</span>
                <h4 className="font-serif text-xl font-normal text-[#20211F]">
                  Architectural Autonomy
                </h4>
                <p className="text-xs text-[#55544F] font-light leading-relaxed">
                  Every estate is granted full architectural freedom. We do not impose generic brand templates on our master architects, allowing pure creative vision to dictate each structure.
                </p>
              </div>

              <div className="p-8 bg-white border border-[#E6DED0] space-y-4">
                <span className="font-serif text-3xl text-[#B9A994] font-light">02</span>
                <h4 className="font-serif text-xl font-normal text-[#20211F]">
                  Elemental Materiality
                </h4>
                <p className="text-xs text-[#55544F] font-light leading-relaxed">
                  Authentic natural finishes only: board-formed concrete, hand-chiseled granite, patinated bronze, and French oak. Zero faux laminates or simulated finishes.
                </p>
              </div>

              <div className="p-8 bg-white border border-[#E6DED0] space-y-4">
                <span className="font-serif text-3xl text-[#B9A994] font-light">03</span>
                <h4 className="font-serif text-xl font-normal text-[#20211F]">
                  Atmospheric Serenity
                </h4>
                <p className="text-xs text-[#55544F] font-light leading-relaxed">
                  Acoustic decoupling, circadian solar paths, and integrated private wellness suites transform each residence into an impenetrable sanctuary from the external world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
