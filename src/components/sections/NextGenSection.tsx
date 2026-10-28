"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { summitEventDate } from "@/data/summit";
import { siteConfig } from "@/config/site";

export function NextGenSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date(summitEventDate).getTime();

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

      setTimeLeft({
        days: `${Math.floor(diff / 864e5)}`,
        hours: pad(Math.floor(diff / 36e5) % 24),
        minutes: pad(Math.floor(diff / 6e4) % 60),
        seconds: pad(Math.floor(diff / 1e3) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="nextgen"
      aria-labelledby="ng-title"
      className="section nextgen relative overflow-hidden bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,175,92,0.16),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(212,175,92,0.1),transparent_50%)] bg-[#0e0c12] border-y border-[rgba(212,175,92,0.18)] py-[110px]"
    >
      <Container>
        <div className="nextgen__grid grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 items-center">
          {/* Info Side */}
          <div>
            <Image
              src="/assets/img/ng-logo.webp"
              alt="Infinity NextGen logo"
              width={300}
              height={100}
              className="nextgen__logo h-14 w-auto mb-6 reveal"
              loading="lazy"
            />
            <span className="eyebrow reveal">
              Flagship Event · Produced by Infinity Events
            </span>
            <h2
              id="ng-title"
              className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
              data-delay="1"
            >
              Infinity NextGen <span className="gold">Business Summit</span> 2026
            </h2>
            <p
              className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] reveal mb-7"
              data-delay="2"
            >
              A two-day international career &amp; entrepreneurship summit in Dubai. Students,
              graduates, professionals and founders meet employers, learn from business leaders and
              pitch ideas live to Mr. Infinity.
            </p>

            {/* Countdown Box */}
            <div
              className="countdown grid grid-cols-4 gap-2.5 my-7 reveal max-w-[500px]"
              data-delay="2"
              aria-label="Countdown to the summit"
            >
              <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
                <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
                  {timeLeft.days}
                </b>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
                  Days
                </span>
              </div>
              <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
                <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
                  {timeLeft.hours}
                </b>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
                  Hours
                </span>
              </div>
              <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
                <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
                  {timeLeft.minutes}
                </b>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
                  Mins
                </span>
              </div>
              <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
                <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
                  {timeLeft.seconds}
                </b>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
                  Secs
                </span>
              </div>
            </div>

            {/* Pills */}
            <ul className="pills flex flex-wrap gap-2 m-0 mb-7 p-0 list-none reveal" data-delay="3">
              <li className="text-[12px] border border-[rgba(212,175,92,0.18)] rounded-full px-3.5 py-1.5 text-[#e5dccb] bg-[rgba(212,175,92,0.05)]">
                19–20 December 2026
              </li>
              <li className="text-[12px] border border-[rgba(212,175,92,0.18)] rounded-full px-3.5 py-1.5 text-[#e5dccb] bg-[rgba(212,175,92,0.05)]">
                Dubai, UAE
              </li>
              <li className="text-[12px] border border-[rgba(212,175,92,0.18)] rounded-full px-3.5 py-1.5 text-[#e5dccb] bg-[rgba(212,175,92,0.05)]">
                100 funded seats*
              </li>
              <li className="text-[12px] border border-[rgba(212,175,92,0.18)] rounded-full px-3.5 py-1.5 text-[#e5dccb] bg-[rgba(212,175,92,0.05)]">
                Ages 18–50
              </li>
              <li className="text-[12px] border border-[rgba(212,175,92,0.18)] rounded-full px-3.5 py-1.5 text-[#e5dccb] bg-[rgba(212,175,92,0.05)]">
                AED 50,000 Founder Challenge*
              </li>
            </ul>

            {/* Actions */}
            <div className="flex flex-wrap gap-3.5 reveal justify-start mb-4" data-delay="3">
              <Link href="/next-gen-business-summit" className="btn btn--gold">
                <span>Explore the Summit</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <a
                href={siteConfig.links.summitExternalApplication}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Apply Now
              </a>
            </div>

            <p className="fineprint text-[12px] text-[#76716a] mt-4 max-w-[560px]">
              *Merit selected and subject to eligibility, documents, final package limits and
              published terms. Planned application close: 15 November 2026. Dates are tentative and
              may change.
            </p>
          </div>

          {/* Portrait Visual */}
          <div className="nextgen__visual relative max-w-[460px] mx-auto w-full reveal" data-delay="2">
            <div className="relative">
              <Image
                src="/assets/img/hero-zia.webp"
                alt="Mohd Zia Hassan, Mr. Infinity, Chairman of Infinity Group"
                width={800}
                height={1200}
                className="rounded-[18px] border border-[rgba(212,175,92,0.18)] aspect-[4/5] object-cover w-full shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
                loading="lazy"
              />
              {/* Outer decorative ring border */}
              <div
                className="absolute -inset-3.5 border border-[rgba(212,175,92,0.18)] rounded-[28px] pointer-events-none"
                aria-hidden="true"
              />
              {/* Overlay Chip */}
              <div className="nextgen__chip absolute -right-2 top-6 bg-[rgba(7,6,10,0.85)] backdrop-blur-[10px] border border-[rgba(212,175,92,0.18)] py-3.5 px-4.5 rounded-[14px] text-center shadow-lg">
                <b className="block font-display text-[34px] leading-none text-[#f5d27a]">1,000</b>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#a59f94]">
                  Futures · One Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
