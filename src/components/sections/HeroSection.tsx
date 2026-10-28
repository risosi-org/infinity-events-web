"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const ROTATOR_WORDS = [
  "award nights.",
  "corporate galas.",
  "grand weddings.",
  "brand launches.",
  "business summits.",
];

export function HeroSection() {
  const [rotatorIndex, setRotatorIndex] = useState(0);
  const [stats, setStats] = useState({ events: 0, ventures: 0, seats: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Word rotator timer
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const interval = setInterval(() => {
      setRotatorIndex((prev) => (prev + 1) % ROTATOR_WORDS.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  // Stats count-up animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (isReduced) {
            setStats({ events: 500, ventures: 12, seats: 100 });
            return;
          }

          const duration = 1800;
          const start = performance.now();

          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const factor = 1 - Math.pow(1 - progress, 3);

            setStats({
              events: Math.floor(500 * factor),
              ventures: Math.floor(12 * factor),
              seats: Math.floor(100 * factor),
            });

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="hero relative min-h-[100svh] flex items-end pt-[calc(var(--nav-h)+60px)] pb-[70px] overflow-hidden isolate"
    >
      {/* Background Video Media */}
      <div className="hero__media absolute inset-0 -z-[2] overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/img/hero-poster.webp"
          className="w-full h-full object-cover scale-[1.08] transition-transform duration-700"
        >
          <source src="/assets/video/dubai-night.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Overlay Gradients */}
      <div
        className="absolute inset-0 -z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,175,92,0.12),transparent_55%),linear-gradient(180deg,rgba(7,6,10,0.55)_0%,rgba(7,6,10,0.35)_40%,rgba(7,6,10,0.95)_92%,#07060a_100%)]"
        aria-hidden="true"
      />

      {/* Grid Pattern */}
      <div
        className="hero__grid absolute inset-0 -z-[1] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)] opacity-35"
        aria-hidden="true"
      />

      <Container className="relative hero__content">
        {/* Kicker */}
        <span className="hero__kicker inline-flex items-center gap-2.5 p-2 pr-4 border border-[rgba(212,175,92,0.18)] rounded-full bg-black/35 backdrop-blur-[10px] text-[12px] tracking-[0.14em] uppercase mb-7">
          <b className="bg-[linear-gradient(100deg,#a8812e_0%,#f5d27a_45%,#d4af5c_60%,#9c7426_100%)] text-black px-2.5 py-1 rounded-full text-[10px]">
            Dubai
          </b>
          Licensed Event Organisers · An Infinity Group Company
        </span>

        {/* Display Title */}
        <h1 className="hero__title font-display font-normal uppercase text-[clamp(54px,11.5vw,170px)] leading-[0.88] m-0 tracking-[-0.005em]">
          <span className="line block overflow-hidden">
            <span className="inline-block">We Don&apos;t</span>
          </span>
          <span className="line block overflow-hidden">
            <span className="inline-block">
              Just Plan. <span className="serif gold font-serif italic font-medium">We</span>
            </span>
          </span>
          <span className="line block overflow-hidden">
            <span className="gold inline-block">Orchestrate.</span>
          </span>
        </h1>

        {/* Bottom Description & Actions */}
        <div className="hero__bottom grid gap-[34px] mt-[38px] items-end lg:grid-cols-[1.1fr_1fr]">
          <p className="hero__text max-w-[520px] text-[#cfc8bc] text-[clamp(16px,1.5vw,18px)] m-0 leading-relaxed">
            From red-carpet award nights and business summits to grand weddings and brand launches
            — <strong>Infinity Events</strong> designs, produces and delivers{" "}
            <span className="rotator inline-grid align-bottom text-[#f5d27a]" aria-live="off">
              {ROTATOR_WORDS.map((word, i) => (
                <span
                  key={word}
                  className={`[grid-area:1/1] transition-all duration-600 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    i === rotatorIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[40%]"
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
          </p>

          <div className="hero__actions flex flex-wrap gap-3.5 lg:justify-end">
            <Link href="/#planner" className="btn btn--gold">
              <span>Plan My Event</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link href="/#portfolio" className="btn btn--ghost">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Hero Statistics */}
        <div
          ref={statsRef}
          className="hero__stats grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[rgba(212,175,92,0.18)] border border-[rgba(212,175,92,0.18)] rounded-[18px] overflow-hidden mt-12"
        >
          <div className="stat bg-[rgba(7,6,10,0.7)] backdrop-blur-md p-5 sm:px-[18px]">
            <div className="stat__num font-display text-[clamp(32px,4.4vw,54px)] leading-none gold">
              {hasCounted ? stats.events : 500}+
            </div>
            <div className="stat__label text-[11px] tracking-[0.18em] uppercase text-[#a59f94] mt-1.5 font-medium">
              Events Orchestrated
            </div>
          </div>

          <div className="stat bg-[rgba(7,6,10,0.7)] backdrop-blur-md p-5 sm:px-[18px]">
            <div className="stat__num font-display text-[clamp(32px,4.4vw,54px)] leading-none gold">
              {hasCounted ? stats.ventures : 12}+
            </div>
            <div className="stat__label text-[11px] tracking-[0.18em] uppercase text-[#a59f94] mt-1.5 font-medium">
              Infinity Group Ventures
            </div>
          </div>

          <div className="stat bg-[rgba(7,6,10,0.7)] backdrop-blur-md p-5 sm:px-[18px]">
            <div className="stat__num font-display text-[clamp(32px,4.4vw,54px)] leading-none gold">
              2019
            </div>
            <div className="stat__label text-[11px] tracking-[0.18em] uppercase text-[#a59f94] mt-1.5 font-medium">
              Events &amp; Film Production Since
            </div>
          </div>

          <div className="stat col-span-2 sm:col-span-1 bg-[rgba(7,6,10,0.7)] backdrop-blur-md p-5 sm:px-[18px]">
            <div className="stat__num font-display text-[clamp(32px,4.4vw,54px)] leading-none gold">
              {hasCounted ? stats.seats : 100}
            </div>
            <div className="stat__label text-[11px] tracking-[0.18em] uppercase text-[#a59f94] mt-1.5 font-medium">
              Funded NextGen Seats
            </div>
          </div>
        </div>
      </Container>

      {/* Vertical Scroll Cue */}
      <div
        className="scroll-cue absolute right-6 bottom-[34px] hidden lg:flex flex-col items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#a59f94] [writing-mode:vertical-rl]"
        aria-hidden="true"
      >
        Scroll
      </div>
    </section>
  );
}
