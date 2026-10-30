import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Architectural Philosophy | WAYSTAR Exceptional Residences",
  description:
    "The architectural manifesto behind WAYSTAR: Sculpting living horizons across Dubai and New York City through material permanence, volumetric scale, and natural light.",
};

export default function PhilosophyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#0B0D0C] text-[#F4F1EB]">
        {/* Full-Bleed 65svh Cinematic Manifesto Hero */}
        <section className="relative w-full h-[65svh] min-h-[480px] flex items-end pb-14 sm:pb-20 overflow-hidden border-b border-white/10">
          <BackgroundVideo
            src="/media/v2/dubai/dubai-sunset-marina.mp4"
            poster="/media/v2/posters/dubai-sunset-marina.webp"
            priority
            overlay="bottom"
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full space-y-4">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
              Architectural Manifesto
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight drop-shadow-md max-w-4xl">
              Sculpted for permanence. Defined by light.
            </h1>
            <p className="text-xs sm:text-base text-[#A6A39E] max-w-2xl font-light leading-relaxed">
              WAYSTAR exists to curate and steward residential architecture that transcends the ephemeral — uniting the vertical ambition of Manhattan with the maritime grandeur of Dubai.
            </p>
          </div>
        </section>

        {/* The Core Thesis Section */}
        <section className="py-20 sm:py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] block">
                The Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
                Two Cities.<br />One Architectural Standard.
              </h2>
              <div className="h-px w-24 bg-[#C1AD91]" />
              <p className="text-sm sm:text-base text-[#A6A39E] font-light leading-relaxed">
                Modern luxury is often reduced to superficial ornament. At WAYSTAR, we reject the disposable in favor of enduring spatial clarity, elemental materiality, and volumetric grandeur.
              </p>
              <p className="text-sm sm:text-base text-[#A6A39E] font-light leading-relaxed">
                By focusing our acquisitions exclusively on Dubai’s coastal skyline and New York’s historic Manhattan grid, we bring together the two supreme frontiers of contemporary architectural achievement.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 bg-[#111311] space-y-4">
                <span className="text-[11px] font-mono text-[#C1AD91]">01 / DUBAI</span>
                <h3 className="font-serif text-2xl font-light text-white">
                  The Coastal Horizon
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A39E] font-light leading-relaxed">
                  Sculptural towers rising from the Arabian Gulf, engineered with responsive solar brise-soleil facades, infinity cantilevered terraces, and deep deep-water yacht berths.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#111311] space-y-4">
                <span className="text-[11px] font-mono text-[#C1AD91]">02 / NEW YORK</span>
                <h3 className="font-serif text-2xl font-light text-white">
                  The Manhattan Grid
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A39E] font-light leading-relaxed">
                  Bespoke full-floor residences suspended above Central Park and Billionaires’ Row, defined by hand-quarried limestone, private elevator vestibules, and soaring ceiling volumes.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#111311] space-y-4">
                <span className="text-[11px] font-mono text-[#C1AD91]">03 / LIGHT</span>
                <h3 className="font-serif text-2xl font-light text-white">
                  Structural Luminosity
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A39E] font-light leading-relaxed">
                  Light is our primary building material. Every floorplan is oriented to calibrate diurnal solar transitions, mitigating glare while bathing living spaces in dawn and dusk radiance.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#111311] space-y-4">
                <span className="text-[11px] font-mono text-[#C1AD91]">04 / STEWARDSHIP</span>
                <h3 className="font-serif text-2xl font-light text-white">
                  Private Sovereignty
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A39E] font-light leading-relaxed">
                  Discretion is woven into our architectural planning. Dedicated private port-cochères, secure sub-level garages, and confidential advisory desks protect our clients’ privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Video Canvas Feature */}
        <section className="relative w-full h-[60svh] min-h-[460px] overflow-hidden border-y border-white/10 flex items-center justify-center">
          <BackgroundVideo
            src="/media/v2/interiors/modern-luxury-interior.mp4"
            poster="/media/v2/posters/modern-luxury-interior.webp"
            overlay="cinematic"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
              The Intimate Scale
            </span>
            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
              &ldquo;True luxury is the quiet dignity of pure proportion and silence high above the metropolis.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-[#A6A39E] font-mono tracking-widest uppercase">
              WAYSTAR Architectural Directive • Vol. VII
            </p>
          </div>
        </section>

        {/* Materiality Curation */}
        <section className="py-20 sm:py-32 max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] block">
              Curated Materiality
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Tactile Authenticity
            </h2>
            <p className="text-sm sm:text-base text-[#A6A39E] font-light leading-relaxed">
              We commission only noble, enduring materials that age with grace and develop a rich patina over decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-[#111311]/70 space-y-4">
              <span className="text-xs font-mono text-[#C1AD91]">STONE</span>
              <h3 className="font-serif text-xl font-light text-white">Roman Travertine & Calacatta</h3>
              <p className="text-xs text-[#A6A39E] leading-relaxed">
                Hand-selected slab stone quarried in Tivoli and Carrara, cut in continuous book-matched patterns for monolithic kitchen islands and spa sanctuaries.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-[#111311]/70 space-y-4">
              <span className="text-xs font-mono text-[#C1AD91]">METAL</span>
              <h3 className="font-serif text-xl font-light text-white">Architectural Patinated Bronze</h3>
              <p className="text-xs text-[#A6A39E] leading-relaxed">
                Custom extruded bronze mullions, artisan-forged door hardware, and thermal-break window frames hand-rubbed with natural beeswax.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-[#111311]/70 space-y-4">
              <span className="text-xs font-mono text-[#C1AD91]">TIMBER</span>
              <h3 className="font-serif text-xl font-light text-white">European Smoked White Oak</h3>
              <p className="text-xs text-[#A6A39E] leading-relaxed">
                Extra-wide 300mm chevron planks dried slowly over six months and finished with invisible matte organic oils to preserve the wood’s natural grain.
              </p>
            </div>
          </div>
        </section>

        {/* Private Consultation CTA */}
        <section className="py-20 border-t border-white/10 bg-[#111311]">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C1AD91] block">
              Begin Your Acquisition
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Experience the Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A39E] font-light max-w-xl mx-auto leading-relaxed">
              Explore our curated portfolio of residential masterworks or arrange an in-person viewing with our senior architectural advisors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/residences"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#F4F1EB] text-[#0B0D0C] hover:bg-[#C1AD91] text-xs uppercase tracking-[0.2em] font-medium transition-all"
              >
                <span>Explore Residences</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/20 text-[#F4F1EB] hover:border-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>Request Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
