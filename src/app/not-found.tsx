import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="hero relative min-h-[100svh] flex items-center justify-center text-center pt-[calc(var(--nav-h)+60px)] pb-[70px] overflow-hidden isolate">
      {/* Background Media */}
      <div className="hero__media absolute inset-0 -z-[2] overflow-hidden" aria-hidden="true">
        <Image
          src="/assets/img/confetti.webp"
          alt=""
          width={1920}
          height={1281}
          priority
          className="w-full h-full object-cover scale-[1.08]"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_center,rgba(7,6,10,0.65),rgba(7,6,10,0.95))]"
        aria-hidden="true"
      />

      <Container className="relative hero__content flex flex-col items-center">
        <h1 className="hero__title font-display font-normal uppercase text-[clamp(80px,18vw,220px)] leading-[0.88] m-0">
          <span className="line block overflow-hidden">
            <span className="gold inline-block">404</span>
          </span>
        </h1>
        <p className="lead text-[clamp(18px,2vw,22px)] text-[#cfc8bc] my-6 max-w-[500px]">
          This stage is empty. Let&apos;s get you back to the show.
        </p>
        <Link href="/" className="btn btn--gold">
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
