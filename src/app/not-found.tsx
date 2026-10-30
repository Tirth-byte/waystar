import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { ArrowRight, Compass } from "lucide-react";

export const metadata = {
  title: "Residence Not Found • 404 | WAYSTAR",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-[#0B0D0C] text-[#F4F1EB] flex items-center justify-center py-28 sm:py-40 px-6">
        <div className="max-w-xl w-full text-center space-y-8 border border-white/10 p-10 sm:p-16 bg-[#111311] shadow-2xl">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C1AD91] block font-mono">
              Architectural Void • 404
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight">
              Coordinate Not Found
            </h1>
            <p className="text-xs sm:text-sm text-[#A6A39E] font-light leading-relaxed max-w-md mx-auto">
              The living horizon you are seeking has either moved or belongs to an uncommissioned spatial coordinate. Return to our curated flagship residences.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.2em] px-8 py-4 font-medium transition-all"
            >
              <span>Return to Flagship</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/residences"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/20 hover:border-white text-[#F4F1EB] text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors"
            >
              <Compass className="w-4 h-4 text-[#C1AD91]" />
              <span>Explore Residences</span>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
