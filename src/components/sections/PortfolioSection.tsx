"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { portfolioData, portfolioCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = portfolioData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.categories.includes(activeFilter);
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section id="portfolio" aria-labelledby="pf-title" className="section py-[110px] relative">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="eyebrow reveal">Portfolio</span>
          <h2
            id="pf-title"
            className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
            data-delay="1"
          >
            Moments we&apos;ve <span className="gold">made.</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div
          className="filters flex flex-wrap gap-2 justify-center mb-10 reveal"
          role="group"
          aria-label="Filter portfolio"
        >
          {portfolioCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                aria-pressed={isActive}
                className={cn(
                  "filter px-5 py-2.5 rounded-full text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-300 border",
                  isActive
                    ? "bg-[linear-gradient(100deg,#a8812e_0%,#f5d27a_45%,#d4af5c_60%,#9c7426_100%)] text-black border-transparent shadow-sm"
                    : "border-white/[0.08] bg-transparent text-[#a59f94] hover:text-[#f4efe6] hover:border-[rgba(212,175,92,0.18)]"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Multi-Column Gallery */}
        <div className="gallery columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filteredItems.map((item, index) => (
            <figure
              key={item.id}
              tabIndex={0}
              onClick={() => handleOpenLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
              className="g-item group break-inside-avoid mb-4 relative rounded-[18px] overflow-hidden cursor-zoom-in border border-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[rgba(212,175,92,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d27a] reveal"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto block transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-10 px-4.5 pb-4 bg-[linear-gradient(transparent,rgba(0,0,0,0.88))] text-[14px] font-semibold text-[#f4efe6] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0">
                <small className="block text-[10px] tracking-[0.2em] uppercase text-[#f5d27a] font-bold">
                  {item.subTitle}
                </small>
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Connected Lightbox Modal */}
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
        />
      </Container>
    </section>
  );
}
