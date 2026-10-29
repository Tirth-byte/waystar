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
      setIsScrolled(window.scrollY > 40);
    };
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
      {/* Top Academic Banner */}
      <div className="bg-[#20211F] text-[#B9A994] text-[11px] tracking-widest uppercase py-1.5 px-4 text-center border-b border-[#55544F]/30 select-none z-50 relative">
        <span className="opacity-90">Academic Prototype</span>
        <span className="mx-2 text-[#55544F]">|</span>
        <span className="hidden sm:inline">All residences, pricing, and availability are conceptual demonstrations.</span>
        <span className="sm:hidden">Demonstration Portfolio</span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#20211F]/90 backdrop-blur-md text-[#F7F6F2] border-b border-white/10 shadow-lg"
            : "bg-transparent text-[#F7F6F2]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          {/* Brand Logo & Descriptor */}
          <Link
            href="/"
            className="group flex flex-col justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A994]"
          >
            <span className="font-serif tracking-[0.22em] text-2xl sm:text-3xl font-light text-[#F7F6F2] transition-colors group-hover:text-[#B9A994]">
              WAYSTAR
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#B9A994] uppercase font-light -mt-1">
              Exceptional Residences
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.25em] transition-all duration-300 py-1 relative ${
                    isActive
                      ? "text-[#B9A994] font-medium"
                      : "text-[#F7F6F2]/80 hover:text-[#F7F6F2]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B9A994]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Hub: Saved Counter & Enquiry Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/saved"
              aria-label="View Saved Residences"
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#F7F6F2]/90 hover:text-[#B9A994] transition-colors py-2 px-3 border border-white/15 hover:border-[#B9A994]/50"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#B9A994]" />
              <span>Saved</span>
              {isLoaded && count > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#B9A994] text-[#20211F] text-[10px] font-bold rounded-full">
                  {count}
                </span>
              )}
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-5 py-3 transition-all duration-300 font-medium"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu & Saved Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link
              href="/saved"
              className="p-2 border border-white/20 text-[#F7F6F2] relative"
              aria-label="Saved Residences"
            >
              <Bookmark className="w-4 h-4 text-[#B9A994]" />
              {isLoaded && count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 bg-[#B9A994] text-[#20211F] text-[9px] font-bold rounded-full">
                  {count}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/20 text-[#F7F6F2] hover:text-[#B9A994] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] z-50 bg-[#20211F] text-[#F7F6F2] p-8 flex flex-col justify-between md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-6 pt-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994]">
              WAYSTAR Portfolio
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-2xl font-serif tracking-wider hover:text-[#B9A994] transition-colors border-b border-white/10 pb-4"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/saved"
              onClick={closeMobile}
              className="flex items-center justify-between text-2xl font-serif tracking-wider hover:text-[#B9A994] transition-colors border-b border-white/10 pb-4"
            >
              <span>Saved Residences</span>
              {isLoaded && (
                <span className="text-sm font-sans px-2.5 py-0.5 bg-[#B9A994] text-[#20211F] font-bold">
                  {count}
                </span>
              )}
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
            <Link
              href="/contact"
              onClick={closeMobile}
              className="w-full text-center bg-[#B9A994] text-[#20211F] py-4 text-xs uppercase tracking-[0.25em] font-medium"
            >
              Private Viewing Enquiry
            </Link>
            <p className="text-[11px] text-[#55544F] tracking-wide text-center">
              Architecture worth living in. All listings illustrative.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
