import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[#20211F] text-[#F7F6F2] flex items-center justify-center py-24 sm:py-36 px-6">
        <div className="max-w-xl w-full text-center space-y-8 border border-white/10 p-10 sm:p-16 bg-[#171816] shadow-2xl">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B9A994] block">
              Architectural Void • 404
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F7F6F2] tracking-tight">
              Residence Not Found
            </h1>
            <p className="text-xs sm:text-sm text-[#E6DED0]/70 font-light leading-relaxed max-w-md mx-auto">
              The living horizon you are seeking has either moved or belongs to an uncommissioned coordinate. Return to our curated flagship residences.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.2em] px-8 py-4 font-medium transition-all"
            >
              <span>Return to Flagship</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/developments"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/20 hover:border-white text-[#F7F6F2] text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors"
            >
              <Compass className="w-4 h-4 text-[#B9A994]" />
              <span>Explore Residences</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
