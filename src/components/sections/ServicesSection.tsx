"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { servicesData } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || isReduced) return;

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    target.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  };

  const toggleCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" aria-labelledby="svc-title" className="section pt-5 pb-[110px] relative">
      <Container>
        {/* Head */}
        <div className="services-head grid gap-6 mb-14 items-end lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow reveal">What We Do</span>
            <h2
              id="svc-title"
              className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
              data-delay="1"
            >
              Our <span className="gold">Rhythm.</span>
            </h2>
          </div>
          <p
            className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] reveal"
            data-delay="2"
          >
            The heartbeat of every successful celebration. Six signature disciplines — one team
            obsessed with the moment your guests say “wow”.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((svc, index) => {
            const isOpen = activeCardId === svc.id;

            return (
              <article
                key={svc.id}
                tabIndex={0}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => toggleCard(svc.id)}
                className={cn(
                  "svc group relative rounded-[18px] overflow-hidden min-h-[420px] flex items-end border border-white/[0.08] isolate [transform-style:preserve-3d] transition-[border-color,transform] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[rgba(212,175,92,0.18)] cursor-pointer reveal",
                  svc.wide && "lg:col-span-2",
                  svc.full && "lg:col-span-3 lg:min-h-[380px]"
                )}
                data-delay={index % 3}
              >
                {/* Background Image */}
                <Image
                  src={svc.image}
                  alt={svc.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover -z-[2] transition-[transform,filter] duration-1200 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 group-hover:saturate-[1.15]"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div
                  className="absolute inset-0 -z-[1] bg-[linear-gradient(180deg,rgba(7,6,10,0.05)_0%,rgba(7,6,10,0.55)_45%,rgba(7,6,10,0.97)_100%)] transition-colors duration-500"
                  aria-hidden="true"
                />

                {/* Top Number Badge */}
                <span className="svc__num absolute top-[22px] left-6 font-display text-[16px] tracking-[0.1em] text-[#f5d27a] border border-[rgba(212,175,92,0.18)] rounded-full px-3 py-1 bg-black/35 backdrop-blur-md">
                  {svc.num}
                </span>

                {/* Top Right Arrow Icon Button */}
                <span
                  className="svc__arrow absolute top-5 right-5 w-[46px] h-[46px] rounded-full bg-[linear-gradient(100deg,#a8812e_0%,#f5d27a_45%,#d4af5c_60%,#9c7426_100%)] flex items-center justify-center text-black scale-0 -rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-100 group-hover:rotate-0"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
                </span>

                {/* Card Body */}
                <div className="svc__body p-7 w-full">
                  <h3 className="font-display font-normal uppercase text-[clamp(28px,3vw,36px)] leading-none m-0 mb-2.5 text-[#f4efe6]">
                    {svc.title}
                  </h3>
                  <p
                    className={cn(
                      "text-[#cbc4b8] m-0 text-[15px] leading-relaxed transition-all duration-600 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                      "max-h-0 opacity-0 overflow-hidden group-hover:max-h-[140px] group-hover:opacity-100 group-hover:mb-3.5 group-focus-within:max-h-[140px] group-focus-within:opacity-100 group-focus-within:mb-3.5",
                      isOpen && "max-h-[140px] opacity-100 mb-3.5"
                    )}
                  >
                    {svc.description}
                  </p>
                  <ul
                    className={cn(
                      "list-none p-0 m-0 flex flex-wrap gap-1.5 transition-all duration-600 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                      "max-h-0 opacity-0 overflow-hidden group-hover:max-h-[120px] group-hover:opacity-100 group-focus-within:max-h-[120px] group-focus-within:opacity-100",
                      isOpen && "max-h-[120px] opacity-100"
                    )}
                  >
                    {svc.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-[11px] tracking-[0.08em] uppercase border border-white/20 px-2.5 py-1 rounded-full text-[#e6dfd3]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
