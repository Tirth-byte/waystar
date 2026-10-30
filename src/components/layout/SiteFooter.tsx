import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D0C] text-[#F4F1EB] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block space-y-1">
              <span className="font-serif tracking-[0.24em] text-2xl font-light text-white block">
                WAYSTAR
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#C1AD91] uppercase block">
                Exceptional Residences
              </span>
            </Link>

            <p className="text-xs text-[#A6A39E] font-light leading-relaxed max-w-sm">
              Conceiving and stewarding architecturally singular residential developments across Dubai and New York City. Conceived in dialogue with the world&apos;s most revered skylines and water horizons.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 border border-[#C1AD91]/30 text-[#C1AD91]">
                End Semester Exam • AI-Assisted Architecture
              </span>
            </div>
          </div>

          {/* Global Residences (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C1AD91] font-medium">
              Worlds
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A6A39E]">
              <li>
                <Link href="/residences?city=Dubai" className="hover:text-white transition-colors">
                  Dubai Portfolio
                </Link>
              </li>
              <li>
                <Link href="/residences?city=New+York" className="hover:text-white transition-colors">
                  New York Portfolio
                </Link>
              </li>
              <li>
                <Link href="/residences?type=Penthouse" className="hover:text-white transition-colors">
                  Penthouses
                </Link>
              </li>
              <li>
                <Link href="/residences?type=Waterfront+Estate" className="hover:text-white transition-colors">
                  Waterfront Estates
                </Link>
              </li>
              <li>
                <Link href="/residences?type=Sky+Residence" className="hover:text-white transition-colors">
                  Sky Residences
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C1AD91] font-medium">
              Flagship
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A6A39E]">
              <li>
                <Link href="/residences" className="hover:text-white transition-colors">
                  All Residences
                </Link>
              </li>
              <li>
                <Link href="/discover" className="hover:text-white transition-colors">
                  Search & Filter
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="hover:text-white transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/saved" className="hover:text-white transition-colors">
                  Saved Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Private Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C1AD91] font-medium">
              Offices
            </h3>
            <div className="space-y-3 text-xs text-[#A6A39E]">
              <div>
                <span className="text-white font-medium block">Dubai</span>
                <span>Gate Precinct 4, Level 08, DIFC</span>
              </div>
              <div>
                <span className="text-white font-medium block">New York</span>
                <span>740 Madison Avenue, Penthouse Level</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] text-[#C1AD91] hover:text-white transition-colors group"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Demonstration Mandatory Notice */}
        <div className="py-6 border-t border-b border-white/10 text-[11px] text-[#A6A39E]/80 leading-relaxed space-y-1">
          <p>
            <strong className="text-[#C1AD91] uppercase tracking-wider font-semibold">
              ACADEMIC DEMONSTRATION NOTICE:
            </strong>{" "}
            WAYSTAR is a conceptual ultra-luxury digital real estate flagship created for an AI-Assisted Web Application End Semester Examination. All property names, architectural narratives, pricing estimates, specifications, and availability statuses are entirely illustrative and demonstrative. No commercial real estate transactions or solicitations are conducted through this application.
          </p>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#A6A39E]/60 space-y-3 sm:space-y-0">
          <p>© {currentYear} WAYSTAR Exceptional Residences. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase">
            <span>Dubai • New York</span>
            <span>Next.js 16 • Tailwind CSS</span>
            <span>Academic Capstone</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

