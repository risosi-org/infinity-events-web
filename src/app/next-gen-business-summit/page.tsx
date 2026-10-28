import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd, getSummitJsonLd } from "@/components/seo/JsonLd";
import {
  summitPillars,
  summitRoutes,
  summitTimeline,
  summitEventDate,
} from "@/data/summit";
import { summitFaqs } from "@/data/faqs";
import { siteConfig } from "@/config/site";
import { CountdownTimer } from "./CountdownTimer";

export const metadata: Metadata = {
  title: "Infinity NextGen Business Summit 2026 Dubai | 19–20 December",
  description:
    "Infinity NextGen Business Summit 2026 — a two-day career & entrepreneurship summit in Dubai on 19–20 December. 100 merit-selected funded seats, Founder Challenge and the 1,000 Opportunities hiring initiative.",
  alternates: {
    canonical: "/next-gen-business-summit",
  },
  openGraph: {
    type: "website",
    siteName: "Infinity Events",
    title: "Infinity NextGen Business Summit 2026 — Dubai, 19–20 December",
    description:
      "Two days for global talent to meet employers, learn from business leaders and pitch ideas. 100 merit-selected funded seats.",
    url: `${siteConfig.url}/next-gen-business-summit`,
    images: [
      {
        url: "/assets/img/hero-zia.webp",
        width: 800,
        height: 1200,
        alt: "Mohd Zia Hassan, Chairman of Infinity Group",
      },
    ],
  },
};

export default function SummitPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd data={getSummitJsonLd()} />

      {/* ============ SUMMIT HERO ============ */}
      <section
        className="hero page-hero relative min-h-[92svh] flex items-end pt-[calc(var(--nav-h)+60px)] pb-[70px] overflow-hidden isolate"
        aria-label="Infinity NextGen Business Summit 2026"
      >
        <div className="hero__media absolute inset-0 -z-[2] overflow-hidden" aria-hidden="true">
          <Image
            src="/assets/img/mr-infinity-spotlight.webp"
            alt=""
            width={1600}
            height={2400}
            priority
            className="w-full h-full object-cover scale-[1.08] [object-position:center_20%]"
          />
        </div>
        <div
          className="absolute inset-0 -z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,175,92,0.12),transparent_55%),linear-gradient(180deg,rgba(7,6,10,0.55)_0%,rgba(7,6,10,0.35)_40%,rgba(7,6,10,0.95)_92%,#07060a_100%)]"
          aria-hidden="true"
        />
        <div
          className="hero__grid absolute inset-0 -z-[1] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)] opacity-35"
          aria-hidden="true"
        />

        <Container className="relative hero__content">
          {/* Breadcrumb */}
          <nav className="breadcrumb text-[12px] tracking-[0.14em] uppercase text-[#a59f94] mb-[22px]" aria-label="Breadcrumb">
            <Link href="/" className="text-[#f5d27a] hover:underline">
              Home
            </Link>{" "}
            / NextGen Business Summit
          </nav>

          <span className="hero__kicker inline-flex items-center gap-2.5 p-2 pr-4 border border-[rgba(212,175,92,0.18)] rounded-full bg-black/35 backdrop-blur-[10px] text-[12px] tracking-[0.14em] uppercase mb-7">
            <b className="bg-[linear-gradient(100deg,#a8812e_0%,#f5d27a_45%,#d4af5c_60%,#9c7426_100%)] text-black px-2.5 py-1 rounded-full text-[10px]">
              19–20 Dec 2026
            </b>
            Dubai · Organised by Infinity Events
          </span>

          <h1 className="hero__title font-display font-normal uppercase text-[clamp(48px,9vw,130px)] leading-[0.88] m-0 tracking-[-0.005em]">
            <span className="line block overflow-hidden">
              <span className="inline-block">Infinity NextGen</span>
            </span>
            <span className="line block overflow-hidden">
              <span className="gold inline-block">Business Summit</span>
            </span>
            <span className="line block overflow-hidden">
              <span className="inline-block">
                <span className="serif font-serif italic font-medium">a fully funded</span> 2026
              </span>
            </span>
          </h1>

          <div className="hero__bottom grid gap-[34px] mt-[38px] items-end lg:grid-cols-[1.1fr_1fr]">
            <p className="hero__text max-w-[520px] text-[#cfc8bc] text-[clamp(16px,1.5vw,18px)] m-0 leading-relaxed">
              Two days for global talent to meet employers, learn from business leaders and pitch
              ideas. Hosted by Infinity Group and led by{" "}
              <strong>Mohd Zia Hassan — Mr. Infinity</strong>.
            </p>

            <div className="hero__actions flex flex-wrap gap-3.5 lg:justify-end">
              <a
                href={siteConfig.links.summitExternalApplication}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <span>Start Application</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </a>
              <a href="#routes" className="btn btn--ghost">
                See Routes
              </a>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-[620px] mt-10">
            <CountdownTimer targetDate={summitEventDate} />
          </div>

          <p className="fineprint text-[12px] text-[#76716a] mt-4 max-w-[600px]">
            *100 funded seats are merit selected and subject to eligibility, documents, final
            package limits and published terms. Worldwide · Ages 18–50.
          </p>
        </Container>
      </section>

      {/* ============ ABOUT THE SUMMIT ============ */}
      <section id="about-summit" aria-labelledby="as-title" className="section py-[110px] relative">
        <Container>
          <div className="about grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-[90px] items-center">
            <div className="about__text">
              <span className="eyebrow reveal">About the Summit</span>
              <h2
                id="as-title"
                className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
                data-delay="1"
              >
                1,000 futures. <span className="gold">One Dubai.</span>
              </h2>
              <p className="reveal text-[#a59f94] mb-[18px] leading-relaxed text-[16px]" data-delay="2">
                The Infinity NextGen Business Summit is a two-day international career and
                entrepreneurship event organised by Infinity Group in Dubai on{" "}
                <strong className="text-[#f4efe6]">19–20 December 2026</strong>. It brings
                students, graduates, job seekers, professionals and founders together for practical
                learning, employer conversations and a chance to present new business ideas.
              </p>
              <p className="reveal text-[#a59f94] mb-[18px] leading-relaxed text-[16px]" data-delay="2">
                Open to applicants aged 18–50 from every country, the summit plans to invite{" "}
                <strong className="text-[#f4efe6]">100 merit-selected delegates</strong> with funded
                travel support. The programme includes speaker sessions, career assessments,
                interviews, a founder pitch challenge, a country showcase and a Dubai city
                experience.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="pillars grid grid-cols-2 gap-3 reveal" data-delay="2">
              {summitPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="pillar border border-white/[0.08] rounded-2xl p-[22px] bg-[#0e0c12]"
                >
                  <b className="font-display text-[14px] tracking-[0.14em] text-[#d4af5c]">
                    {pillar.num}
                  </b>
                  <h3 className="font-display font-normal text-[26px] uppercase my-1.5 text-[#f4efe6]">
                    {pillar.title}
                  </h3>
                  <p className="m-0 text-[#a59f94] text-[14px] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ CHOOSE YOUR ROUTE ============ */}
      <section
        id="routes"
        aria-labelledby="rt-title"
        className="section nextgen relative overflow-hidden bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,175,92,0.16),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(212,175,92,0.1),transparent_50%)] bg-[#0e0c12] border-y border-[rgba(212,175,92,0.18)] py-[110px]"
      >
        <Container>
          <div className="text-center mb-[46px]">
            <span className="eyebrow reveal">Choose Your Route</span>
            <h2
              id="rt-title"
              className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
              data-delay="1"
            >
              Two ways to join <span className="gold">Cohort 01.</span>
            </h2>
            <p
              className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] mx-auto reveal"
              data-delay="2"
            >
              Every route has different inclusions. Review the final terms before payment.
            </p>
          </div>

          <div className="route-grid grid gap-4.5 lg:grid-cols-2 max-w-[1000px] mx-auto">
            {summitRoutes.map((route, i) => (
              <article
                key={route.title}
                className={`route border rounded-[22px] p-8 flex flex-col relative overflow-hidden reveal ${
                  route.isFeatured
                    ? "border-[#d4af5c] bg-[linear-gradient(170deg,rgba(212,175,92,0.14),#0e0c12_45%)]"
                    : "border-white/[0.08] bg-[#0e0c12]"
                }`}
                data-delay={i}
              >
                <span className="route__tag text-[11px] uppercase tracking-[0.22em] text-[#d4af5c] font-bold">
                  {route.tag}
                </span>
                <h3 className="font-display font-normal uppercase text-[34px] my-2 text-[#f4efe6]">
                  {route.title}
                </h3>
                <div
                  className={`route__price font-display text-[64px] leading-none ${
                    route.isFeatured ? "gold" : "text-[#f4efe6]"
                  }`}
                >
                  {route.price}
                  <small className="font-sans text-[14px] text-[#a59f94] ml-1.5 font-normal">
                    {route.priceLabel}
                  </small>
                </div>

                <ul className="list-none p-0 my-[22px] mb-7 flex-1 space-y-2.5">
                  {route.features.map((feat) => (
                    <li key={feat} className="check text-[15px]">
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={route.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn--block ${
                    route.buttonVariant === "gold" ? "btn--gold" : "btn--ghost"
                  }`}
                >
                  {route.ctaText}
                </a>
              </article>
            ))}
          </div>

          <p className="fineprint max-w-[900px] mx-auto mt-6 text-center text-[12px] text-[#76716a] leading-relaxed">
            *USD 999 guarantees a summit delegate place only after eligibility verification,
            successful payment and written seat confirmation, subject to capacity and published
            terms. It does not guarantee a funded seat, visa, flight, job, internship, award or
            business investment. USD 30 pays for a summit application review; it does not guarantee
            selection. Job applications and hiring are free. Review the published cancellation,
            refund and visa-refusal terms before payment.
          </p>
        </Container>
      </section>

      {/* ============ YOUR PATH TO DUBAI ============ */}
      <section aria-labelledby="path-title" className="section py-[110px] relative">
        <Container>
          <div className="spotlight grid gap-11 items-center lg:grid-cols-[0.85fr_1.15fr] lg:gap-[90px]">
            <div className="spotlight__img relative rounded-[18px] overflow-hidden max-w-[420px] w-full mx-auto border border-[rgba(212,175,92,0.18)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] reveal">
              <Image
                src="/assets/img/founder-challenge.webp"
                alt="Infinity Founder Challenge key visual"
                width={1000}
                height={1500}
                className="aspect-[4/5] object-cover w-full"
                loading="lazy"
              />
            </div>

            <div>
              <span className="eyebrow reveal">Your Path to Dubai</span>
              <h2
                id="path-title"
                className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
                data-delay="1"
              >
                One application. <span className="gold">Clear next steps.</span>
              </h2>

              <ol className="timeline list-none m-0 p-0 border-l border-[rgba(212,175,92,0.18)] grid gap-[30px] mt-[34px] reveal" data-delay="2">
                {summitTimeline.map((step) => (
                  <li key={step.step} className="relative pl-7">
                    <span
                      className="absolute -left-[6px] top-2 w-[11px] h-[11px] rounded-full bg-[#d4af5c] shadow-[0_0_0_5px_rgba(212,175,92,0.15)]"
                      aria-hidden="true"
                    />
                    <small className="block text-[11px] tracking-[0.2em] uppercase text-[#d4af5c] font-bold">
                      {step.step}
                    </small>
                    <h3 className="m-0 my-1 text-[20px] text-[#f4efe6] font-display uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="m-0 text-[#a59f94] text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="fineprint text-[12px] text-[#76716a] mt-6">
                Planned application close: 15 November 2026 · Shortlist notifications: 26–28
                November. Dates are tentative and may change.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ FOUNDER CHALLENGE CTA BAND ============ */}
      <section aria-labelledby="fc-title" className="section py-[70px] relative">
        <Container>
          <div className="cta-band relative overflow-hidden rounded-[28px] py-[clamp(40px,7vw,90px)] px-[clamp(22px,5vw,70px)] isolate text-center border border-[rgba(212,175,92,0.18)] reveal">
            <Image
              src="/assets/img/svc-gala.webp"
              alt=""
              width={1200}
              height={800}
              className="absolute inset-0 w-full h-full object-cover -z-[2]"
              loading="lazy"
            />
            <div
              className="absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_center,rgba(7,6,10,0.55),rgba(7,6,10,0.92))]"
              aria-hidden="true"
            />
            <span className="eyebrow">Infinity Founder Challenge</span>
            <h2
              id="fc-title"
              className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[18px] leading-[0.95]"
            >
              Bring the idea. <span className="gold">Build the future.</span>
            </h2>
            <p className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] mx-auto">
              Ten finalists pitch live to Mr. Infinity and the judging panel. The strongest ideas
              move to due diligence, mentorship and possible business-launch support in Dubai.
            </p>

            <div className="hero__stats grid grid-cols-3 gap-[1px] bg-[rgba(212,175,92,0.18)] border border-[rgba(212,175,92,0.18)] rounded-[18px] overflow-hidden max-w-[760px] mx-auto mt-8">
              <div className="stat bg-[rgba(7,6,10,0.7)] backdrop-blur-md p-5">
                <div className="stat__num font-display text-[clamp(32px,4.4vw,54px)] leading-none gold">
                  10
                </div>
                <div className="stat__label text-[11px] tracking-[0.18em] uppercase text-[#a59f94] mt-1.5 font-medium">
                  Live Finalist Pitches
                </div>
              </div>
              <div className="stat bg-[rgba(7,6,10,0.7)] backdrop-blur-md p-5">
                <div className="stat__num font-display text-[clamp(32px,4.4vw,54px)] leading-none gold">
                  2
                </div>
                <div className="stat__label text-[11px] tracking-[0.18em] uppercase text-[#a59f94] mt-1.5 font-medium">
                  Ideas for Launch Support
                </div>
              </div>
              <div className="stat bg-[rgba(7,6,10,0.7)] backdrop-blur-md p-5">
                <div className="stat__num font-display text-[clamp(32px,4.4vw,54px)] leading-none gold">
                  50K
                </div>
                <div className="stat__label text-[11px] tracking-[0.18em] uppercase text-[#a59f94] mt-1.5 font-medium">
                  AED Award*
                </div>
              </div>
            </div>

            <p className="fineprint max-w-[680px] mx-auto text-[12px] text-[#76716a] mt-6">
              *Standout idea award or approved launch-support alternative, subject to published
              criteria, due diligence, board approval and final award terms. The panel may decline
              to award if no idea meets the required threshold.
            </p>
          </div>
        </Container>
      </section>

      {/* ============ THE 1,000 OPPORTUNITIES INITIATIVE ============ */}
      <section aria-labelledby="jobs-title" className="section pt-10 pb-[110px] relative">
        <Container>
          <div className="about grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-[90px] items-center">
            <div className="spotlight__img relative rounded-[18px] overflow-hidden max-w-[420px] w-full mx-auto border border-[rgba(212,175,92,0.18)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] reveal">
              <Image
                src="/assets/img/zia-white.webp"
                alt="Mohd Zia Hassan, Chairman of Infinity Group"
                width={900}
                height={1350}
                className="aspect-[4/5] object-cover w-full"
                loading="lazy"
              />
            </div>

            <div className="about__text">
              <span className="eyebrow reveal">The 1,000 Opportunities Initiative</span>
              <h2
                id="jobs-title"
                className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
                data-delay="1"
              >
                Talent meets <span className="gold">real pathways.</span>
              </h2>
              <p className="reveal text-[#a59f94] mb-[18px] leading-relaxed text-[16px]" data-delay="2">
                Infinity Group plans <strong className="text-[#f4efe6]">10 hiring batches of 100 candidates</strong>,
                aiming for 1,000 job placements across real estate, hospitality, beauty &amp;
                grooming, security services, professional roles, freelance &amp; referral,
                internships and blue-collar roles.
              </p>
              <p className="reveal text-[#a59f94] mb-[18px] leading-relaxed text-[16px]" data-delay="2">
                Job applications and hiring are <strong className="text-[#f4efe6]">free of charge</strong>.
                The 100 funded summit seats are a separate category from the hiring programme.
              </p>
              <p className="fineprint reveal text-[12px] text-[#76716a] mt-4" data-delay="3">
                No applicant purchases or is guaranteed a job. Hiring depends on verified vacancies,
                role fit, interviews, employer decisions, lawful permits and a signed employment or
                contractor agreement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ SUMMIT FAQ ============ */}
      <section id="faq" aria-labelledby="sfaq-title" className="section pt-5 pb-[110px] relative">
        <Container>
          <div className="text-center mb-10">
            <span className="eyebrow reveal">Summit FAQ</span>
            <h2
              id="sfaq-title"
              className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
              data-delay="1"
            >
              Before you <span className="gold">apply.</span>
            </h2>
          </div>

          <Accordion items={summitFaqs} defaultOpenIndex={0} />

          <div className="hero__actions flex flex-wrap gap-3.5 justify-center mt-11">
            <a
              href={siteConfig.links.summitExternalApplication}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
            >
              Apply on the Official Website
            </a>
            <a
              href={siteConfig.links.whatsapp(
                "Hello, I have a question about the Infinity NextGen Business Summit."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Ask on WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
