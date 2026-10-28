import React from "react";
import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { homeFaqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section pt-5 pb-[110px] relative">
      <Container>
        <div className="text-center mb-10">
          <span className="eyebrow reveal">FAQ</span>
          <h2
            id="faq-title"
            className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
            data-delay="1"
          >
            Good <span className="gold">questions.</span>
          </h2>
        </div>

        <Accordion items={homeFaqs} defaultOpenIndex={0} />
      </Container>
    </section>
  );
}
