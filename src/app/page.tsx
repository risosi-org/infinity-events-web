import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { NextGenSection } from "@/components/sections/NextGenSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SpotlightSection } from "@/components/sections/SpotlightSection";
import { EventPlannerSection } from "@/components/sections/EventPlannerSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd, getHomeJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd data={getHomeJsonLd()} />

      {/* Sections in Exact Original Order */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <NextGenSection />
      <PortfolioSection />
      <ProcessSection />
      <SpotlightSection />
      <EventPlannerSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
