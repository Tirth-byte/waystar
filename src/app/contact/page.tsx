import { Suspense } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BackgroundVideo from "@/components/cinematic/BackgroundVideo";
import ViewingRequestForm from "@/components/forms/ViewingRequestForm";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Private Client Advisory & Viewings | WAYSTAR",
  description:
    "Arrange confidential private viewings and portfolio consultations across Dubai and New York City with WAYSTAR senior advisors.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#0B0D0C] text-[#F4F1EB]">
        {/* Full-Bleed 55svh Cinematic Advisory Canvas */}
        <section className="relative w-full h-[55svh] min-h-[420px] flex items-end pb-12 sm:pb-16 overflow-hidden border-b border-white/10">
          <BackgroundVideo
            src="/media/v2/new-york/manhattan-midtown-aerial.mp4"
            poster="/media/v2/posters/manhattan-midtown-aerial.webp"
            priority
            overlay="bottom"
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full space-y-3">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C1AD91] font-medium block">
              Private Client Advisory
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight drop-shadow-md">
              Request Private Viewing
            </h1>
            <p className="text-xs sm:text-base text-[#A6A39E] max-w-2xl font-light leading-relaxed">
              Appointments arranged in strict confidence. Access confidential architectural dossiers, coordinate bespoke private flights, or arrange exclusive penthouse viewings.
            </p>
          </div>
        </section>

        {/* Form and Global Private Offices Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="bg-[#111311] p-12 text-center text-[#C1AD91] text-xs uppercase tracking-widest animate-pulse border border-white/10">
                    Loading confidential enquiry module...
                  </div>
                }
              >
                <ViewingRequestForm />
              </Suspense>
            </div>

            {/* Offices & Advisory Desks (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Dubai Desk */}
              <div className="p-8 border border-white/10 bg-[#111311] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C1AD91] font-mono">
                    MIDDLE EAST DESK
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    GST +4
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-light text-white">
                  Dubai Private Office
                </h3>
                <p className="text-xs text-[#A6A39E] leading-relaxed">
                  Gate Precinct 04, Level 14, DIFC & Dubai Marina Promenade, Dubai, United Arab Emirates.
                </p>
                <div className="space-y-2 pt-2 text-xs font-mono text-[#F4F1EB]/80">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-3.5 h-3.5 text-[#C1AD91]" />
                    <span>+971 4 818 9000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-3.5 h-3.5 text-[#C1AD91]" />
                    <span>dubai@waystar-residences.com</span>
                  </div>
                </div>
              </div>

              {/* New York Desk */}
              <div className="p-8 border border-white/10 bg-[#111311] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C1AD91] font-mono">
                    AMERICAS DESK
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    EST -5
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-light text-white">
                  New York Flagship Office
                </h3>
                <p className="text-xs text-[#A6A39E] leading-relaxed">
                  111 West 57th Street, Floor 48, Billionaires&apos; Row, Manhattan, New York 10019.
                </p>
                <div className="space-y-2 pt-2 text-xs font-mono text-[#F4F1EB]/80">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-3.5 h-3.5 text-[#C1AD91]" />
                    <span>+1 (212) 890-4400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-3.5 h-3.5 text-[#C1AD91]" />
                    <span>newyork@waystar-residences.com</span>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Charter */}
              <div className="p-6 border border-white/10 bg-black/40 space-y-3">
                <div className="flex items-center space-x-2 text-[#C1AD91]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                    Strict Confidentiality
                  </span>
                </div>
                <p className="text-xs text-[#A6A39E] leading-relaxed">
                  All transactions, client identities, and private floorplans are bound by non-disclosure protocols. Encrypted communications available upon request.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
