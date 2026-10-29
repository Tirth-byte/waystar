import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, ShieldCheck, Compass } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[#F7F6F2] text-[#20211F]">
        {/* Header Banner */}
        <section className="bg-[#20211F] text-[#F7F6F2] pt-32 pb-16 sm:pb-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B9A994] block">
              Private Client Advisory
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#FFFFFF] tracking-tight">
              Request Private Viewing
            </h1>
            <p className="text-sm sm:text-base text-[#E6DED0]/85 max-w-2xl font-light leading-relaxed">
              Appointments are arranged in strict confidence. Connect with our client advisory team to review architectural dossiers, coordinate travel arrangements, or schedule private viewings.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="bg-[#20211F] p-12 text-center text-[#B9A994] text-xs uppercase tracking-widest animate-pulse border border-white/15">
                    Loading confidential enquiry module...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Advisory Desks Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Regional Advisory Desks */}
              <div className="bg-white border border-[#E6DED0] p-8 space-y-6 shadow-sm">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#55544F]">
                  <Compass className="w-4 h-4 text-[#B9A994]" />
                  <span>Demonstration Advisory Desks</span>
                </div>
                <h3 className="font-serif text-2xl font-light text-[#20211F]">
                  Regional Desks
                </h3>

                <div className="space-y-6 text-xs text-[#55544F]">
                  <div className="space-y-1.5 border-b border-[#E6DED0] pb-4">
                    <span className="font-medium text-[#20211F] text-sm block">
                      Monaco & Mediterranean Concierge
                    </span>
                    <p className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#B9A994] shrink-0" />
                      <span>Avenue Princesse Grace, MC 98000 Monaco</span>
                    </p>
                    <p className="text-[11px] text-[#B9A994]">
                      Demonstration desk • Client consultations by confidential appointment
                    </p>
                  </div>

                  <div className="space-y-1.5 border-b border-[#E6DED0] pb-4">
                    <span className="font-medium text-[#20211F] text-sm block">
                      London & European Salons
                    </span>
                    <p className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#B9A994] shrink-0" />
                      <span>Berkeley Square, Mayfair, London W1J</span>
                    </p>
                    <p className="text-[11px] text-[#B9A994]">
                      Demonstration desk • Portfolio viewing arrangements
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-medium text-[#20211F] text-sm block">
                      Asia-Pacific Atelier
                    </span>
                    <p className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#B9A994] shrink-0" />
                      <span>Higashiyama-ku, Kyoto 605-0073, Japan</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-[#B9A994] shrink-0" />
                      <span>advisory@waystar-concept.internal</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Security & Academic Notice */}
              <div className="bg-[#20211F] text-[#F7F6F2] p-8 border border-white/10 space-y-4 shadow-lg">
                <div className="flex items-center space-x-2 text-[#B9A994]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.25em]">
                    Academic Privacy Notice
                  </span>
                </div>
                <h4 className="font-serif text-xl font-light text-[#FFFFFF]">
                  Local Simulation Safe
                </h4>
                <p className="text-xs text-[#E6DED0]/80 font-light leading-relaxed">
                  As part of the AI-Assisted Web Application End Semester Examination, all submitted details are saved strictly to your local browser storage. No data is transmitted to third parties or real commercial brokers.
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
