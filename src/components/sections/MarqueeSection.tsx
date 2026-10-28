import React from "react";
import Image from "next/image";

const MARQUEE_ITEMS = [
  "Award Nights",
  "Corporate Galas",
  "Grand Weddings",
  "Brand Launches",
  "Business Summits",
  "Roadshows",
];

export function MarqueeSection() {
  return (
    <div
      className="marquee border-y border-[rgba(212,175,92,0.18)] bg-[#0e0c12] overflow-hidden py-[22px] relative group"
      aria-hidden="true"
    >
      <div className="marquee__track flex gap-12 w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* Render twice for continuous loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
          (text, index) => {
            const isEven = index % 2 === 1;
            return (
              <span
                key={`${text}-${index}`}
                className={`marquee__item flex items-center gap-12 font-display text-[clamp(26px,3.6vw,46px)] uppercase whitespace-nowrap ${
                  isEven
                    ? "text-[#f4efe6]"
                    : "text-transparent [-webkit-text-stroke:1px_rgba(244,239,230,0.45)]"
                }`}
              >
                <span>{text}</span>
                <Image
                  src="/assets/img/emblem.png"
                  alt=""
                  width={66}
                  height={89}
                  className="w-7 h-auto opacity-90 inline-block"
                />
              </span>
            );
          }
        )}
      </div>
    </div>
  );
}
