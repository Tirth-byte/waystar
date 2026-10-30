"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Menu, X, ArrowUpRight } from "lucide-react";
import { useSavedResidences } from "@/hooks/useSavedResidences";

export default function SiteHeader() {
  const pathname = usePathname();
  const { savedCount } = useSavedResidences();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  const navLinks = [
    { href: "/residences", label: "Residences" },
    { href: "/discover", label: "Discover" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B0D0C]/92 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="group flex flex-col justify-center focus:outline-none">
            <span className="font-serif tracking-[0.24em] text-xl sm:text-2xl font-light text-white transition-colors group-hover:text-[#C1AD91]">
              WAYSTAR
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.32em] text-[#C1AD91] uppercase font-light">
              Exceptional Residences
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.22em] transition-all duration-300 py-1 relative font-medium ${
                    isActive
                      ? "text-[#C1AD91]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#C1AD91]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Saved Portfolio Counter */}
            <Link
              href="/saved"
              aria-label="View Saved Residences"
              className="flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] text-white/85 hover:text-[#C1AD91] transition-colors py-2 px-3 border border-white/15 hover:border-[#C1AD91] bg-black/30 backdrop-blur-sm"
            >
              <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? "fill-[#C1AD91] text-[#C1AD91]" : ""}`} />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="text-[10px] ml-1 px-1.5 py-0.2 bg-[#C1AD91] text-[#0B0D0C] font-semibold">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* Viewing Consultation CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-[#F4F1EB] hover:bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-5 py-2.5 font-medium transition-all shadow-md group"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/saved"
              aria-label="Saved Residences"
              className="p-2 text-white hover:text-[#C1AD91] relative"
            >
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? "fill-[#C1AD91] text-[#C1AD91]" : ""}`} />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C1AD91]" />
              )}
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="p-2 text-white hover:text-[#C1AD91] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0D0C]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 animate-fade-in">
          <nav className="space-y-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] mb-4">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-serif text-3xl font-light text-white hover:text-[#C1AD91] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/saved"
              className="block font-serif text-3xl font-light text-white hover:text-[#C1AD91] transition-colors"
            >
              Saved Residences ({savedCount})
            </Link>
          </nav>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#C1AD91] text-[#0B0D0C] text-xs uppercase tracking-[0.22em] py-4 font-semibold shadow-lg"
            >
              <span>Request Private Viewing</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <p className="text-[10px] text-[#A6A39E] text-center tracking-wider uppercase">
              Dubai • New York • Exceptional Residences
            </p>
          </div>
        </div>
      )}
    </>
  );
}
