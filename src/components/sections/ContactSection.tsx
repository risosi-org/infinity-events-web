import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="ct-title" className="section pt-5 pb-[110px] relative">
      <Container>
        {/* CTA Band with Confetti Background */}
        <div className="cta-band relative overflow-hidden rounded-[28px] py-[clamp(40px,7vw,90px)] px-[clamp(22px,5vw,70px)] isolate text-center border border-[rgba(212,175,92,0.18)] mb-[70px] reveal">
          <Image
            src="/assets/img/confetti.webp"
            alt=""
            width={1920}
            height={1281}
            className="absolute inset-0 w-full h-full object-cover -z-[2]"
            loading="lazy"
          />
          <div
            className="absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_center,rgba(7,6,10,0.55),rgba(7,6,10,0.92))]"
            aria-hidden="true"
          />
          <span className="eyebrow">Next Level</span>
          <h2 className="h-display text-[clamp(40px,6.4vw,84px)] uppercase mb-[18px] leading-[0.95]">
            Let&apos;s make it <span className="gold">unforgettable.</span>
          </h2>
          <p className="lead text-[clamp(16px,1.6vw,19px)] text-[#a59f94] max-w-[640px] mx-auto">
            Tell us the date and the dream. We&apos;ll take it from there.
          </p>
          <div className="hero__actions flex flex-wrap gap-3.5 justify-center mt-7">
            <a
              href={siteConfig.links.whatsapp(
                "Hello Infinity Events, I'd like to discuss an event."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
            >
              WhatsApp Us
            </a>
            <a href={siteConfig.links.tel} className="btn btn--ghost">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Contact Information & Form Grid */}
        <div className="contact grid gap-10 lg:grid-cols-2">
          {/* Contact Details & Map Card */}
          <div className="contact__card border border-[rgba(212,175,92,0.18)] rounded-3xl p-[clamp(22px,4vw,44px)] bg-[#0e0c12] reveal">
            <span className="eyebrow">Get In Touch</span>
            <h2
              id="ct-title"
              className="h-display text-[clamp(36px,4.6vw,56px)] uppercase leading-[0.95] mb-6"
            >
              Request your <span className="gold">invite.</span>
            </h2>

            {/* List */}
            <ul className="c-list list-none p-0 my-[26px] grid gap-3">
              <li>
                <a
                  href={siteConfig.links.whatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-white/[0.08] rounded-[14px] transition-colors hover:border-[#d4af5c] hover:bg-[rgba(212,175,92,0.06)]"
                >
                  <i
                    aria-hidden="true"
                    className="shrink-0 w-[46px] h-[46px] rounded-xl flex items-center justify-center bg-[rgba(212,175,92,0.1)] text-[#f5d27a]"
                  >
                    <Phone className="w-5 h-5 stroke-[1.8]" />
                  </i>
                  <span>
                    <small className="block text-[10px] uppercase tracking-[0.2em] text-[#76716a]">
                      Call / WhatsApp
                    </small>
                    <b className="font-semibold text-[15px] text-[#f4efe6] break-words">
                      {siteConfig.phoneDisplay}
                    </b>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 border border-white/[0.08] rounded-[14px] transition-colors hover:border-[#d4af5c] hover:bg-[rgba(212,175,92,0.06)]"
                >
                  <i
                    aria-hidden="true"
                    className="shrink-0 w-[46px] h-[46px] rounded-xl flex items-center justify-center bg-[rgba(212,175,92,0.1)] text-[#f5d27a]"
                  >
                    <Mail className="w-5 h-5 stroke-[1.8]" />
                  </i>
                  <span>
                    <small className="block text-[10px] uppercase tracking-[0.2em] text-[#76716a]">
                      Email
                    </small>
                    <b className="font-semibold text-[15px] text-[#f4efe6] break-words">
                      {siteConfig.email}
                    </b>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-white/[0.08] rounded-[14px] transition-colors hover:border-[#d4af5c] hover:bg-[rgba(212,175,92,0.06)]"
                >
                  <i
                    aria-hidden="true"
                    className="shrink-0 w-[46px] h-[46px] rounded-xl flex items-center justify-center bg-[rgba(212,175,92,0.1)] text-[#f5d27a]"
                  >
                    <MapPin className="w-5 h-5 stroke-[1.8]" />
                  </i>
                  <span>
                    <small className="block text-[10px] uppercase tracking-[0.2em] text-[#76716a]">
                      Office
                    </small>
                    <b className="font-semibold text-[15px] text-[#f4efe6] break-words">
                      {siteConfig.officeAddress}
                    </b>
                  </span>
                </a>
              </li>
            </ul>

            {/* Embedded Google Map */}
            <div className="map rounded-[18px] overflow-hidden border border-[rgba(212,175,92,0.18)] aspect-[16/10] [filter:grayscale(1)_invert(0.92)_contrast(0.9)_sepia(0.15)]">
              <iframe
                title="Infinity Events office location — Park Place Tower, Dubai"
                src="https://www.google.com/maps?q=Park+Place+Tower+Sheikh+Zayed+Road+Dubai&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
