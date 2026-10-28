import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { footerExploreLinks, footerEventsLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-[rgba(212,175,92,0.18)] bg-[#0e0c12] pt-20 pb-[30px] mt-[110px]">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link href="/" className="inline-block mb-[18px]">
              <Image
                src="/assets/img/logo.webp"
                alt="Infinity Events"
                width={600}
                height={276}
                className="h-[54px] w-auto"
                loading="lazy"
              />
            </Link>
            <p className="text-[#a59f94] text-[14px] max-w-[340px] leading-relaxed mb-5">
              Infinix Infinity Events — licensed event organisers in Dubai and proud
              member of Infinity Group UAE. We build the stages for your most
              unforgettable stories.
            </p>
            <div className="flex gap-2.5">
              {/* WhatsApp */}
              <a
                href={siteConfig.links.whatsapp("Hello Infinity Events!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-[42px] h-[42px] rounded-full border border-[rgba(212,175,92,0.18)] flex items-center justify-center text-[#f4efe6] transition-colors hover:bg-[#d4af5c] hover:text-black hover:border-[#d4af5c]"
              >
                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zM20.5 3.5A11.8 11.8 0 001.7 17.6L0 24l6.5-1.7A11.8 11.8 0 0024 12c0-3.2-1.2-6.2-3.5-8.5z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="w-[42px] h-[42px] rounded-full border border-[rgba(212,175,92,0.18)] flex items-center justify-center text-[#f4efe6] transition-colors hover:bg-[#d4af5c] hover:text-black hover:border-[#d4af5c]"
              >
                <svg
                  className="w-[17px] h-[17px] stroke-current fill-none stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </a>

              {/* Infinity Group Link */}
              <a
                href={siteConfig.links.parentCompany}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Infinity Group website"
                className="w-[42px] h-[42px] rounded-full border border-[rgba(212,175,92,0.18)] flex items-center justify-center text-[#f4efe6] transition-colors hover:bg-[#d4af5c] hover:text-black hover:border-[#d4af5c]"
              >
                <svg
                  className="w-[17px] h-[17px] stroke-current fill-none stroke-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#d4af5c] mb-[18px] font-bold">
              Explore
            </h4>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              {footerExploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#cfc9be] text-[14px] hover:text-[#f5d27a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#d4af5c] mb-[18px] font-bold">
              Events
            </h4>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              {footerEventsLinks.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#cfc9be] text-[14px] hover:text-[#f5d27a] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#cfc9be] text-[14px] hover:text-[#f5d27a] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#d4af5c] mb-[18px] font-bold">
              Contact
            </h4>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              <li>
                <a
                  href={siteConfig.links.tel}
                  className="text-[#cfc9be] text-[14px] hover:text-[#f5d27a] transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#cfc9be] text-[14px] hover:text-[#f5d27a] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-[#cfc9be] text-[14px] leading-relaxed">
                {siteConfig.officeAddress}
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-wrap gap-x-[30px] gap-y-3 justify-between text-[12px] text-[#76716a]">
          <span>© {currentYear} Infinix Infinity Events. All rights reserved.</span>
          <span>
            <strong className="text-[#a59f94]">Dubai Licence No.</strong> {siteConfig.licence.number} ·{" "}
            <strong className="text-[#a59f94]">CR No.</strong> {siteConfig.licence.crNumber} ·{" "}
            {siteConfig.licence.activity}
          </span>
          <span>
            An{" "}
            <a
              href={siteConfig.links.parentCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5d27a] hover:underline"
            >
              Infinity Group
            </a>{" "}
            company
          </span>
        </div>
      </Container>
    </footer>
  );
}
