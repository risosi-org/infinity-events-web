import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section py-[110px] relative">
      <Container>
        <div className="about grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-[90px] items-center">
          {/* Visual Showcase */}
          <div className="about__visual relative aspect-[4/5] max-w-[520px] w-full mx-auto reveal">
            {/* Photo A */}
            <figure className="ph ph--a absolute inset-0 right-[22%] bottom-[18%] rounded-[18px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] border border-[rgba(212,175,92,0.18)] m-0 group">
              <Image
                src="/assets/img/infinity-group-stage.webp"
                alt="Infinity Group leadership on stage at an awards night in Dubai"
                width={900}
                height={900}
                className="w-full h-full object-cover transition-transform duration-1200 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                loading="lazy"
              />
            </figure>

            {/* Photo B */}
            <figure className="ph ph--b absolute inset-0 top-[46%] left-[38%] rounded-[18px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] border border-[rgba(212,175,92,0.18)] m-0 group">
              <Image
                src="/assets/img/golden-excellence-award-chairman.webp"
                alt="Chairman Mohd Zia Hassan receiving the Golden Excellence Award"
                width={900}
                height={752}
                className="w-full h-full object-cover transition-transform duration-1200 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                loading="lazy"
              />
            </figure>

            {/* Circular Rotating Badge */}
            <div className="about__badge absolute -left-1.5 bottom-[4%] z-[2] w-[132px] h-[132px] rounded-full bg-[#07060a] grid place-items-center border border-[rgba(212,175,92,0.18)] shadow-lg">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] animate-spinSlow"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="circ"
                    d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                  />
                </defs>
                <text
                  fontSize="8.4"
                  letterSpacing="3"
                  fill="#d4af5c"
                  fontFamily="Manrope"
                  fontWeight="700"
                >
                  <textPath href="#circ">INFINITY EVENTS • DUBAI • UAE • </textPath>
                </text>
              </svg>
              <Image
                src="/assets/img/emblem.png"
                alt=""
                width={66}
                height={89}
                className="w-[38px] h-auto relative z-10"
              />
            </div>
          </div>

          {/* About Copy & Credentials */}
          <div className="about__text">
            <span className="eyebrow reveal">Who We Are</span>
            <h2
              id="about-title"
              className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
              data-delay="1"
            >
              Where imagination <span className="serif gold font-serif italic">meets</span> reality.
            </h2>
            <p className="reveal text-[#a59f94] mb-[18px] leading-relaxed text-[16px]" data-delay="2">
              <strong className="text-[#f4efe6] font-semibold">Infinix Infinity Events</strong> is the
              events and experiences arm of{" "}
              <strong className="text-[#f4efe6] font-semibold">Infinity Group UAE</strong> — the
              diversified Dubai conglomerate led by Chairman{" "}
              <strong className="text-[#f4efe6] font-semibold">
                Mohd Zia Hassan, “Mr. Infinity”
              </strong>
              . We build the stages for your most unforgettable stories.
            </p>
            <p className="reveal text-[#a59f94] mb-[18px] leading-relaxed text-[16px]" data-delay="2">
              Our team blends creative direction, stage &amp; AV production, hospitality and
              on-ground operations under one roof — so every detail, from the first concept sketch
              to the last guest leaving the red carpet, is handled by people who care about it.
            </p>

            <div className="reveal space-y-2 mb-7" data-delay="3">
              <p className="check">
                End-to-end production: concept, venue, stage, décor, talent &amp; media
              </p>
              <p className="check">
                Backed by Infinity Group’s real estate, hospitality, beauty &amp; media network
              </p>
              <p className="check">
                Fully licensed by Dubai’s Department of Economy &amp; Tourism
              </p>
            </div>

            {/* License Grid */}
            <div className="license grid grid-cols-2 gap-3 reveal" data-delay="4">
              <div className="license__item border border-[rgba(212,175,92,0.18)] rounded-[10px] p-3.5 sm:px-4 bg-[linear-gradient(180deg,rgba(212,175,92,0.06),transparent)]">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#76716a]">
                  Licence No.
                </span>
                <b className="text-[15px] font-bold text-[#f5d27a]">
                  {siteConfig.licence.number}
                </b>
              </div>

              <div className="license__item border border-[rgba(212,175,92,0.18)] rounded-[10px] p-3.5 sm:px-4 bg-[linear-gradient(180deg,rgba(212,175,92,0.06),transparent)]">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#76716a]">
                  Commercial Reg.
                </span>
                <b className="text-[15px] font-bold text-[#f5d27a]">
                  {siteConfig.licence.crNumber}
                </b>
              </div>

              <div className="license__item border border-[rgba(212,175,92,0.18)] rounded-[10px] p-3.5 sm:px-4 bg-[linear-gradient(180deg,rgba(212,175,92,0.06),transparent)]">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#76716a]">
                  Activity
                </span>
                <b className="text-[15px] font-bold text-[#f5d27a]">
                  {siteConfig.licence.activity}
                </b>
              </div>

              <div className="license__item border border-[rgba(212,175,92,0.18)] rounded-[10px] p-3.5 sm:px-4 bg-[linear-gradient(180deg,rgba(212,175,92,0.06),transparent)]">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#76716a]">
                  Head Office
                </span>
                <b className="text-[15px] font-bold text-[#f5d27a]">
                  {siteConfig.licence.headOffice}
                </b>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
