"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
  aspectRatio?: string;
}

interface GalleryModalProps {
  images: GalleryImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  propertyName: string;
}

export default function GalleryModal({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  propertyName,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [prevInitial, setPrevInitial] = useState(initialIndex);

  if (initialIndex !== prevInitial) {
    setPrevInitial(initialIndex);
    setCurrentIndex(initialIndex);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#121312]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
      {/* Top Bar: Title & Close */}
      <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994]">
            Architectural Gallery • {propertyName}
          </span>
          <p className="text-xs text-[#E6DED0]/80">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 text-white/80 hover:text-white border border-white/20 hover:border-[#B9A994] transition-colors"
          aria-label="Close full-screen gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full max-h-[78vh] flex items-center justify-center">
          <Image
            src={currentImage.url}
            alt={currentImage.caption}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
          }
          className="absolute left-2 sm:left-6 p-3 bg-black/60 hover:bg-[#B9A994] text-white hover:text-[#20211F] border border-white/20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
          }
          className="absolute right-2 sm:right-6 p-3 bg-black/60 hover:bg-[#B9A994] text-white hover:text-[#20211F] border border-white/20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Thumbnail strip */}
      <div className="border-t border-white/10 pt-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-base text-[#F7F6F2] italic">
          &ldquo;{currentImage.caption}&rdquo;
        </p>

        <div className="flex items-center space-x-2 overflow-x-auto max-w-md py-1">
          {images.map((img, idx) => (
            <button
              key={img.url}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-12 h-10 border transition-all shrink-0 ${
                idx === currentIndex
                  ? "border-[#B9A994] scale-105"
                  : "border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.url}
                alt={img.caption}
                fill
                sizes="48px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
