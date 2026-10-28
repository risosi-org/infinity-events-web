import type { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "corporate",
    num: "01",
    title: "Elite Corporate Events",
    description:
      "Conferences, AGMs, product keynotes, investor meets and team offsites delivered with boardroom precision and showstopping production.",
    tags: ["Conferences", "Investor Meets", "Offsites", "Hybrid Streaming"],
    image: "/assets/img/svc-corporate.webp",
    alt: "Corporate conference audience in Dubai",
    wide: true,
  },
  {
    id: "gala",
    num: "02",
    title: "Awards & Gala Nights",
    description:
      "Red carpets, trophy moments, celebrity hosts and seamless show-calling for award ceremonies and black-tie galas.",
    tags: ["Show Calling", "Red Carpet", "Celebrity Hosts"],
    image: "/assets/img/svc-gala.webp",
    alt: "Luxury gala ballroom set for an awards dinner",
  },
  {
    id: "weddings",
    num: "03",
    title: "Grand Weddings",
    description:
      "Mehndi to walima, nikah to reception — multi-day South Asian, Arabic and destination weddings designed around your family’s story.",
    tags: ["Décor & Florals", "Entertainment", "Guest Logistics"],
    image: "/assets/img/svc-wedding.webp",
    alt: "Bride holding a bouquet at a luxury wedding",
  },
  {
    id: "launches",
    num: "04",
    title: "Brand Launches",
    description:
      "Product reveals, store openings and influencer activations engineered for headlines, reels and real sales.",
    tags: ["Activations", "Influencers", "PR & Media"],
    image: "/assets/img/svc-conference.webp",
    alt: "Keynote speaker on stage at a brand launch",
  },
  {
    id: "concerts",
    num: "05",
    title: "Concerts & Private VIP",
    description:
      "Live music nights, artist bookings and invitation-only VIP experiences with production that pushes boundaries.",
    tags: ["Artist Booking", "Stage & LED", "VIP Hosting"],
    image: "/assets/img/svc-concert.webp",
    alt: "Concert crowd under golden stage lights",
  },
  {
    id: "summits",
    num: "06",
    title: "Summits, Expos & Roadshows",
    description:
      "Business summits, career fairs, property exhibitions and international roadshows — including our flagship Infinity NextGen Business Summit.",
    tags: ["Delegate Management", "Visa & Travel Support", "Exhibitions", "Roadshows Abroad"],
    image: "/assets/img/svc-summit.webp",
    alt: "Business summit panel discussion on a round stage",
    wide: true,
    full: true,
  },
];
