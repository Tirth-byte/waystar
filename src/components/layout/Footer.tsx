import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#171816] text-[#F7F6F2] pt-20 pb-12 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-serif tracking-[0.24em] text-3xl sm:text-4xl font-light text-[#FFFFFF]">
                WAYSTAR
              </span>
              <p className="text-[10px] tracking-[0.38em] text-[#B9A994] uppercase font-light mt-1">
                Exceptional Residences
              </p>
            </div>
            <p className="text-[#B9A994] text-sm leading-relaxed max-w-md font-light">
              WAYSTAR conceives and stewards architecturally singular residential developments across the world&apos;s most revered landscapes. Architecture worth living in.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/10 text-[#B9A994]">
                Digital Flagship • Demonstration Prototype
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#B9A994] font-medium">
                Portfolio
              </h4>
              <ul className="space-y-2.5 text-xs text-[#F7F6F2]/80">
                <li>
                  <Link href="/developments" className="hover:text-[#B9A994] transition-colors">
                    All Residences
                  </Link>
                </li>
                <li>
                  <Link href="/developments/the-aurelia-monaco" className="hover:text-[#B9A994] transition-colors">
                    The Aurelia, Monaco
                  </Link>
                </li>
                <li>
                  <Link href="/developments/the-kura-sanctuary-kyoto" className="hover:text-[#B9A994] transition-colors">
                    The Kura, Kyoto
                  </Link>
                </li>
                <li>
                  <Link href="/developments/villa-belvedere-lake-como" className="hover:text-[#B9A994] transition-colors">
                    Villa Belvedere, Como
                  </Link>
                </li>
                <li>
                  <Link href="/developments/the-one-mayfair-london" className="hover:text-[#B9A994] transition-colors">
                    The One Mayfair, London
                  </Link>
                </li>
                <li>
                  <Link href="/developments/solaris-pavilion-aspen" className="hover:text-[#B9A994] transition-colors">
                    Solaris Pavilion, Aspen
                  </Link>
                </li>
                <li>
                  <Link href="/developments/the-lumina-waterfront-dubai" className="hover:text-[#B9A994] transition-colors">
                    The Lumina, Dubai
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#B9A994] font-medium">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-[#F7F6F2]/80">
                <li>
                  <Link href="/discover" className="hover:text-[#B9A994] transition-colors">
                    Discovery Matrix
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#B9A994] transition-colors">
                    Architectural Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/saved" className="hover:text-[#B9A994] transition-colors">
                    Saved Residences
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#B9A994] transition-colors">
                    Private Viewing Enquiry
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#B9A994] font-medium">
                Advisory
              </h4>
              <p className="text-xs text-[#F7F6F2]/70 leading-relaxed">
                Private advisory consultations arranged by confidential appointment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] text-[#B9A994] hover:text-white transition-colors group"
              >
                <span>Request Viewing</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Academic & Demonstration Notice */}
        <div className="py-8 border-b border-white/10 text-[11px] text-[#55544F] leading-relaxed">
          <p className="max-w-4xl">
            <strong className="text-[#B9A994]">ACADEMIC DEMONSTRATION NOTICE:</strong> WAYSTAR is a conceptual high-luxury digital flagship developed for an AI-Assisted Web Application End Semester Examination. All residence listings, architectural renderings, photographic assets, pricing specifications, and availability records are strictly demonstrative and illustrative.
          </p>
        </div>

        {/* Rights Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#55544F] space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} WAYSTAR Exceptional Residences. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Architectural Direction</span>
            <span>Next.js & GSAP</span>
            <span>Academic Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
