"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Menu, X, ArrowUpRight } from "lucide-react";
import { useFavourites } from "@/hooks/useFavourites";

export default function Navbar() {
  const pathname = usePathname();
  const { count, isLoaded } = useFavourites();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Residences", href: "/developments" },
    { label: "Discover", href: "/discover" },
    { label: "Philosophy", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#121312]/95 backdrop-blur-md text-[#F7F6F2] border-b border-white/10 shadow-2xl py-3 sm:py-3.5"
            : "bg-gradient-to-b from-black/85 via-black/40 to-transparent text-[#F7F6F2] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col justify-center focus:outline-none shrink-0"
          >
            <span className="font-serif tracking-[0.24em] text-xl sm:text-2xl font-light text-[#FFFFFF] transition-colors group-hover:text-[#B9A994]">
              WAYSTAR
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.32em] text-[#B9A994] uppercase font-light">
              Exceptional Residences
            </span>
          </Link>

          {/* Desktop Navigation Links (Shown on lg and above: >=1024px) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] xl:text-xs uppercase tracking-[0.22em] transition-all duration-300 py-1 relative font-medium ${
                    isActive
                      ? "text-[#B9A994]"
                      : "text-white/90 hover:text-[#B9A994] drop-shadow-sm"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#B9A994]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Hub (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <Link
              href="/saved"
              aria-label="View Saved Residences"
              className="flex items-center space-x-1.5 text-[11px] uppercase tracking-[0.2em] text-white hover:text-[#B9A994] transition-colors py-2 px-3 border border-white/20 hover:border-[#B9A994]/60 bg-black/30 backdrop-blur-sm"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#B9A994]" />
              <span>Saved</span>
              {isLoaded && count > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#B9A994] text-[#121312] text-[9px] font-bold rounded-full">
                  {count}
                </span>
              )}
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center space-x-1.5 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#121312] text-[11px] uppercase tracking-[0.22em] px-4 py-2 transition-all duration-300 font-semibold shadow-sm"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Tablet & Mobile Triggers (< 1024px) */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <Link
              href="/saved"
              aria-label="View Saved Residences"
              className="p-2 text-white hover:text-[#B9A994] border border-white/20 bg-black/30 backdrop-blur-sm transition-colors relative"
            >
              <Bookmark className="w-4 h-4 text-[#B9A994]" />
              {isLoaded && count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B9A994] text-[#121312] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Navigation"}
              className="p-2 border border-white/20 bg-black/30 text-white hover:text-[#B9A994] backdrop-blur-sm transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 lg:hidden bg-[#121312]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 animate-fade-in"
        >
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B9A994] block border-b border-white/10 pb-3">
              Navigation
            </span>

            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className={`font-serif text-2xl sm:text-3xl tracking-wide transition-colors ${
                      isActive ? "text-[#B9A994]" : "text-white hover:text-[#B9A994]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <Link
              href="/contact"
              onClick={closeMobile}
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#121312] text-xs uppercase tracking-[0.25em] py-4 font-semibold transition-all shadow-lg"
            >
              <span>Request Private Viewing</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="text-center pt-2">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#E6DED0]/50 block">
                WAYSTAR • Academic Demonstration Prototype
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
