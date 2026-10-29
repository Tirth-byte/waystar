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
      setIsScrolled(window.scrollY > 25);
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
            ? "bg-[#20211F]/95 backdrop-blur-md text-[#F7F6F2] border-b border-white/10 shadow-xl py-3 sm:py-4"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent text-[#F7F6F2] py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark & Descriptor */}
          <Link
            href="/"
            className="group flex flex-col justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A994]"
          >
            <div className="flex items-center space-x-2.5">
              <span className="font-serif tracking-[0.24em] text-2xl sm:text-3xl font-light text-[#FFFFFF] drop-shadow-sm transition-colors group-hover:text-[#B9A994]">
                WAYSTAR
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#B9A994]/40 text-[#B9A994] font-sans">
                Academic Demo
              </span>
            </div>
            <span className="text-[9px] tracking-[0.38em] text-[#B9A994] uppercase font-light mt-0.5">
              Exceptional Residences
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.24em] transition-all duration-300 py-1 relative font-medium ${
                    isActive
                      ? "text-[#B9A994]"
                      : "text-[#FFFFFF]/90 hover:text-[#B9A994] drop-shadow-sm"
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

          {/* Action Hub: Saved Counter & Enquiry Button */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              href="/saved"
              aria-label="View Saved Residences"
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#FFFFFF] hover:text-[#B9A994] transition-colors py-2.5 px-3.5 border border-white/20 hover:border-[#B9A994]/60 bg-black/20 backdrop-blur-sm"
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
              className="group inline-flex items-center space-x-2 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.24em] px-5 py-2.5 transition-all duration-300 font-semibold shadow-sm"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <Link
              href="/saved"
              className="p-2.5 border border-white/25 bg-black/30 backdrop-blur-sm text-[#F7F6F2] relative"
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
              className="p-2.5 border border-white/25 bg-black/30 backdrop-blur-sm text-[#F7F6F2] hover:text-[#B9A994] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#171816]/98 backdrop-blur-xl text-[#F7F6F2] p-8 pt-28 flex flex-col justify-between md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994]">
                Portfolio Navigation
              </span>
              <button
                onClick={closeMobile}
                className="p-2 text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

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
                <span className="text-xs font-sans px-2.5 py-0.5 bg-[#B9A994] text-[#20211F] font-bold">
                  {count}
                </span>
              )}
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Link
              href="/contact"
              onClick={closeMobile}
              className="w-full text-center bg-[#B9A994] text-[#20211F] py-4 text-xs uppercase tracking-[0.25em] font-semibold"
            >
              Private Viewing Enquiry
            </Link>
            <p className="text-[10px] text-[#55544F] tracking-wide text-center">
              Demonstration prototype for academic evaluation.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
