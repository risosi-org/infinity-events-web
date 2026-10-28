"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(scrollY / docHeight);
      }
      setIsVisible(scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <>
      {/* Top 2px Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] w-full z-[1001] origin-left pointer-events-none transition-transform duration-75"
        style={{
          transform: `scaleX(${scrollProgress})`,
          background: "linear-gradient(100deg,#a8812e 0%,#f5d27a 45%,#d4af5c 60%,#9c7426 100%)",
        }}
        aria-hidden="true"
      />

      {/* Floating Action Buttons */}
      <aside aria-label="Quick Actions" className="fixed right-[18px] bottom-[18px] z-[900] flex flex-col gap-2.5 items-end">
        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={cn(
            "w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#15121a] text-[#f5d27a] border border-[rgba(212,175,92,0.18)] shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)] transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1",
            isVisible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-5 pointer-events-none"
          )}
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp Button */}
        <a
          href={siteConfig.links.whatsapp("Hello Infinity Events!")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#25d366] text-white shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)] transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1"
        >
          <span
            className="absolute inset-0 rounded-full border-2 border-[#25d366] animate-pingSlow pointer-events-none"
            aria-hidden="true"
          />
          <svg
            className="w-7 h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zM20.5 3.5A11.8 11.8 0 001.7 17.6L0 24l6.5-1.7A11.8 11.8 0 0024 12c0-3.2-1.2-6.2-3.5-8.5z" />
          </svg>
        </a>
      </aside>
    </>
  );
}
