import React from "react";
import { Container } from "@/components/layout/Container";
import { EventPlannerForm } from "@/components/forms/EventPlannerForm";

export function EventPlannerSection() {
  return (
    <section id="planner" aria-labelledby="pl-title" className="section py-[110px] relative">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-[46px]">
          <span className="eyebrow reveal">Event Planner</span>
          <h2
            id="pl-title"
            className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
            data-delay="1"
          >
            Build your event <span className="gold">in 60 seconds.</span>
          </h2>
          <p
            className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] mx-auto reveal"
            data-delay="2"
          >
            Answer three quick questions and send your brief straight to our team on WhatsApp. No
            obligation — a tailored proposal within 24–48 hours.
          </p>
        </div>

        {/* 3-Step Wizard Planner Form */}
        <EventPlannerForm />
      </Container>
    </section>
  );
}
