import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <span className="eyebrow reveal">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[22px] leading-[0.95] tracking-[0.01em] reveal"
        data-delay="1"
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] reveal",
            align === "center" && "mx-auto"
          )}
          data-delay="2"
        >
          {lead}
        </p>
      )}
    </div>
  );
}
