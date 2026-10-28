import React from "react";
import { Lightbulb, Calendar, Star, Film } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { processSteps } from "@/data/process";

const iconMap = {
  lightbulb: Lightbulb,
  calendar: Calendar,
  star: Star,
  video: Film,
};

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="pr-title" className="section pt-5 pb-[110px] relative">
      <Container>
        {/* Head */}
        <div className="services-head grid gap-6 mb-14 items-end lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow reveal">How We Work</span>
            <h2
              id="pr-title"
              className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
              data-delay="1"
            >
              From vision to <span className="gold">standing ovation.</span>
            </h2>
          </div>
          <p
            className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] reveal"
            data-delay="2"
          >
            A clear four-step process with a single point of contact — so you always know what&apos;s
            happening, what it costs and what comes next.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="process grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Star;

            return (
              <div
                key={step.step}
                className="step group relative p-[34px_28px] border border-white/[0.08] rounded-[18px] bg-[linear-gradient(180deg,#15121a,#07060a)] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[rgba(212,175,92,0.18)] hover:-translate-y-1.5 reveal"
                data-delay={index}
              >
                {/* Large Watermark Number */}
                <span
                  className="absolute right-4 -top-2.5 font-display text-[120px] leading-none select-none pointer-events-none text-transparent [-webkit-text-stroke:1px_rgba(212,175,92,0.22)]"
                  aria-hidden="true"
                >
                  {step.step}
                </span>

                {/* Icon */}
                <div className="step__icon w-[54px] h-[54px] rounded-[14px] flex items-center justify-center bg-[rgba(212,175,92,0.1)] border border-[rgba(212,175,92,0.18)] text-[#f5d27a] mb-[22px] relative z-10">
                  <IconComponent className="w-[26px] h-[26px] stroke-[1.6]" />
                </div>

                {/* Title & Desc */}
                <h3 className="font-display font-normal text-[28px] uppercase m-0 mb-2 tracking-[0.02em] text-[#f4efe6] relative z-10">
                  {step.title}
                </h3>
                <p className="text-[#a59f94] m-0 text-[15px] leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
