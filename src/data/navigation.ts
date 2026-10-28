import type { NavItem } from "@/types";

export const primaryNavItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "NextGen Summit", href: "/next-gen-business-summit", tag: "2026" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export const mobileNavItems = [
  { label: "About", href: "/#about", num: "01" },
  { label: "Services", href: "/#services", num: "02" },
  { label: "NextGen", href: "/#nextgen", num: "03" },
  { label: "Portfolio", href: "/#portfolio", num: "04" },
  { label: "Plan Event", href: "/#planner", num: "05" },
  { label: "FAQ", href: "/#faq", num: "06" },
  { label: "Contact", href: "/#contact", num: "07" },
];

export const footerExploreLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Event Planner", href: "/#planner" },
  { label: "FAQ", href: "/#faq" },
];

export const footerEventsLinks = [
  { label: "NextGen Business Summit", href: "/next-gen-business-summit" },
  { label: "Corporate Events", href: "/#services" },
  { label: "Awards & Galas", href: "/#services" },
  { label: "Weddings", href: "/#services" },
  { label: "Infinity Group", href: "https://infinitygroupuae.com/", isExternal: true },
];
