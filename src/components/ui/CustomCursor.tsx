"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setIsEnabled(true);
    document.body.classList.add("cursor-enabled");

    let mx = -100;
    let my = -100;
    let cx = -100;
    let cy = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cx}px, ${cy}px)`;
      }
      animId = requestAnimationFrame(loop);
    };

    const handleMouseEnter = () => {
      cursorRef.current?.classList.add("is-hover");
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(loop);

    // Attach hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .g-item, label, summary, input, select, textarea"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      document.body.classList.remove("cursor-enabled");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed top-0 left-0 pointer-events-none z-[9998] rounded-full w-[38px] h-[38px] border border-[rgba(212,175,92,0.6)] -ml-[19px] -mt-[19px] transition-[width,height,background,margin] duration-300 [&.is-hover]:w-[70px] [&.is-hover]:h-[70px] [&.is-hover]:-ml-[35px] [&.is-hover]:-mt-[35px] [&.is-hover]:bg-[rgba(212,175,92,0.12)]"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 pointer-events-none z-[9998] rounded-full w-[6px] h-[6px] bg-[#f5d27a] -ml-[3px] -mt-[3px]"
        aria-hidden="true"
      />
    </>
  );
}
