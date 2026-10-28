"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/types";

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const touchStartX = useRef<number>(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null || items.length === 0) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null || items.length === 0) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    // Lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[2000] bg-[#050407]/95 flex items-center justify-center p-4 sm:p-12 animate-fade"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-[52px] h-[52px] rounded-full border border-[rgba(212,175,92,0.18)] bg-white/[0.04] text-[#f4efe6] flex items-center justify-center transition-colors duration-300 hover:bg-[#d4af5c] hover:text-black z-10"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full border border-[rgba(212,175,92,0.18)] bg-white/[0.04] text-[#f4efe6] flex items-center justify-center transition-colors duration-300 hover:bg-[#d4af5c] hover:text-black z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Active image and caption */}
      <figure className="relative m-0 max-w-[90vw] max-h-[85vh] flex flex-col items-center">
        <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] border border-[rgba(212,175,92,0.18)]">
          <Image
            src={currentItem.image}
            alt={currentItem.alt}
            width={currentItem.width}
            height={currentItem.height}
            className="max-h-[75vh] w-auto object-contain"
            priority
          />
        </div>
        <figcaption className="text-center mt-3.5 text-[#a59f94] text-[14px]">
          <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#f5d27a] mb-0.5">
            {currentItem.subTitle}
          </span>
          {currentItem.title}
        </figcaption>
      </figure>

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full border border-[rgba(212,175,92,0.18)] bg-white/[0.04] text-[#f4efe6] flex items-center justify-center transition-colors duration-300 hover:bg-[#d4af5c] hover:text-black z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
