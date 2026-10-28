import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export function SpotlightSection() {
  return (
    <section aria-label="Chairman's message" className="section py-[70px] relative">
      <Container>
        <div className="spotlight grid gap-11 items-center lg:grid-cols-[0.85fr_1.15fr] lg:gap-[90px]">
          {/* Seated Portrait */}
          <div className="spotlight__img relative rounded-[18px] overflow-hidden max-w-[420px] w-full mx-auto border border-[rgba(212,175,92,0.18)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] reveal">
            <Image
              src="/assets/img/zia-seated.webp"
              alt="Mohd Zia Hassan seated portrait"
              width={900}
              height={1350}
              className="aspect-[4/5] object-cover w-full"
              loading="lazy"
            />
          </div>

          {/* Quote & Credentials */}
          <div>
            <span className="eyebrow reveal">Our Promise</span>
            <blockquote
              className="quote font-serif italic text-[clamp(26px,3.4vw,42px)] leading-[1.25] text-[#f4efe6] m-0 mb-[26px] before:content-['\201C'] before:block before:text-[90px] before:leading-[0.6] before:text-[#d4af5c] before:font-sans before:not-italic before:mb-1.5 reveal"
              data-delay="1"
            >
              Every great story deserves a stage. We build those stages — and put the next
              generation of talent on them.
            </blockquote>

            <div className="sign reveal" data-delay="2">
              <b className="block font-display text-[24px] font-normal tracking-[0.06em] uppercase text-[#f4efe6]">
                Led by {siteConfig.leadership.chairman}
              </b>
              <span className="text-[13px] text-[#a59f94] tracking-[0.12em] uppercase">
                {siteConfig.leadership.title} · “{siteConfig.leadership.alias}”
              </span>
            </div>

            <p
              className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] mt-6 leading-relaxed reveal"
              data-delay="3"
            >
              Entrepreneur, investor and Judge &amp; Investor associated with The Gamechangers
              Middle East — leading ventures across real estate, hospitality, events, beauty,
              consultancy, technology and media.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
