export interface NavItem {
  label: string;
  href: string;
  tag?: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  wide?: boolean;
  full?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "awards" | "roadshow" | "corporate" | "spotlight";
  categories: string[];
  subTitle: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SummitRoute {
  tag: string;
  title: string;
  price: string;
  priceLabel: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  isFeatured?: boolean;
  buttonVariant: "gold" | "ghost";
}

export interface SummitPillar {
  num: string;
  title: string;
  description: string;
}

export interface SummitTimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface EventPlannerState {
  type: string;
  guests: number;
  services: string[];
  date: string;
  venue: string;
  name: string;
  phone: string;
}
