"use client";

import React from "react";
import type { FAQItem } from "@/types";

interface AccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export function Accordion({ items, defaultOpenIndex = 0 }: AccordionProps) {
  return (
    <div className="faq max-w-[900px] mx-auto reveal">
      {items.map((item, index) => (
        <details
          key={index}
          open={index === defaultOpenIndex}
          className="group border-b border-white/[0.08] py-1 transition-all duration-300"
        >
          <summary className="list-none flex justify-between items-center gap-5 py-[22px] cursor-pointer text-[clamp(17px,1.8vw,21px)] font-semibold text-[#f4efe6] select-none hover:text-[#f5d27a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d27a] rounded-sm">
            <span>{item.question}</span>
            <i
              aria-hidden="true"
              className="relative shrink-0 w-[38px] h-[38px] rounded-full border border-[rgba(212,175,92,0.18)] transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-open:bg-[#d4af5c] group-open:rotate-180"
            >
              {/* Horizontal bar */}
              <span className="absolute left-1/2 top-1/2 w-[14px] h-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-[#f5d27a] transition-colors duration-300 group-open:bg-black" />
              {/* Vertical bar */}
              <span className="absolute left-1/2 top-1/2 w-[14px] h-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-[#f5d27a] rotate-90 transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-open:bg-black group-open:rotate-0" />
            </i>
          </summary>
          <p className="mt-0 mb-[22px] text-[#a59f94] max-w-[760px] leading-relaxed text-[15px]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
