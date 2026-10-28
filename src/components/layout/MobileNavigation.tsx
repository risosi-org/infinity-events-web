"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { mobileNavItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.classList.remove("menu-open");
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className={cn(
        "fixed inset-0 overflow-y-auto overflow-x-hidden z-[999] bg-[rgba(7,6,10,0.97)] backdrop-blur-[20px] flex flex-col justify-center px-7 py-[100px] transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
        isOpen
          ? "visible [clip-path:circle(150%_at_calc(100%-44px)_39px)]"
          : "invisible [clip-path:circle(0%_at_calc(100%-44px)_39px)]"
      )}
    >
      <ul className="list-none m-0 p-0">
        {mobileNavItems.map((item, index) => (
          <li
            key={item.href}
            className="overflow-hidden border-b border-white/[0.08]"
          >
            <Link
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex justify-between items-center font-display text-[clamp(34px,9vw,54px)] uppercase py-2.5 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#f5d27a]",
                isOpen ? "translate-y-0" : "translate-y-full"
              )}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <span>{item.label}</span>
              <small className="font-sans text-[12px] text-[#76716a] tracking-[0.2em]">
                {item.num}
              </small>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-9 grid gap-2 text-[#a59f94] text-[14px]">
        <a
          href={siteConfig.links.tel}
          className="text-[#f5d27a] break-all hover:underline"
        >
          {siteConfig.phoneDisplay}
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[#f5d27a] break-all hover:underline"
        >
          {siteConfig.email}
        </a>
        <span>{siteConfig.officeAddress}</span>
      </div>
    </div>
  );
}
