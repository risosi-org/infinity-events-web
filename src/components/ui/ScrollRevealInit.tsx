"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReduced) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Initial query
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    // Handle any elements added dynamically
    const timeout = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => {
        observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
