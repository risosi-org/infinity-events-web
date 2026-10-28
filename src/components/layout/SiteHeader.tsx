"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { MobileNavigation } from "./MobileNavigation";
import { primaryNavItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isSummitPage = pathname.includes("next-gen-business-summit");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active link state on homepage
  useEffect(() => {
    if (isSummitPage) return;

    const sections = ["about", "services", "nextgen", "portfolio", "process", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isSummitPage]);

  return (
    <>
      <header
        className={cn(
          "nav fixed inset-x-0 top-0 z-[1000] border-b border-transparent transition-all duration-400",
          isScrolled
            ? "h-[68px] bg-[rgba(7,6,10,0.78)] backdrop-blur-[18px] backdrop-saturate-[1.4] border-[rgba(212,175,92,0.18)]"
            : "h-[78px] bg-transparent"
        )}
      >
        <Container className="h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Infinity Events — home"
          >
            <Image
              src="/assets/img/logo.webp"
              alt="Infinity Events logo"
              width={600}
              height={276}
              priority
              className={cn(
                "w-auto transition-all duration-400",
                isScrolled ? "h-[36px]" : "h-[42px]"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-[30px] m-0 p-0 list-none">
              {primaryNavItems.map((item) => {
                const isSummitLink = item.href.includes("next-gen-business-summit");
                const isActive = isSummitPage
                  ? isSummitLink
                  : activeSection
                  ? item.href === `/#${activeSection}`
                  : false;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative py-1.5 text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors duration-300",
                        isActive ? "text-[#f5d27a]" : "text-[#d9d3c8] hover:text-[#f5d27a]"
                      )}
                    >
                      <span>{item.label}</span>
                      {item.tag && (
                        <span className="text-[9px] bg-[#d4af5c] text-black px-1.5 py-0.5 rounded-full ml-1.5 align-[2px] tracking-[0.08em] font-bold">
                          {item.tag}
                        </span>
                      )}
                      {/* Active / hover underline bar */}
                      <span
                        className={cn(
                          "absolute left-0 bottom-0 w-full h-[1px] bg-[#d4af5c] transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                          isActive
                            ? "scale-x-100 origin-left"
                            : "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            {isSummitPage ? (
              <a
                href={siteConfig.links.summitExternalApplication}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold btn--sm"
              >
                Apply Now
              </a>
            ) : (
              <Link href="/#planner" className="btn btn--gold btn--sm">
                Plan Your Event
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden w-[46px] h-[46px] rounded-full border border-[rgba(212,175,92,0.18)] bg-white/[0.03] flex items-center justify-center text-[#f4efe6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d27a]"
          >
            <span className="relative block w-[18px] h-[1.5px] bg-current transition-all duration-300">
              <span
                className={cn(
                  "absolute left-0 w-[18px] h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                  isMobileMenuOpen ? "top-0 rotate-45" : "-top-[6px]"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 w-[18px] h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                  isMobileMenuOpen ? "top-0 -rotate-45" : "top-[6px]"
                )}
              />
            </span>
          </button>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
