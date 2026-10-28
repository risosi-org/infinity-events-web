import type { SummitPillar, SummitRoute, SummitTimelineStep } from "@/types";

export const summitPillars: SummitPillar[] = [
  {
    num: "01",
    title: "Learn",
    description: "Practical sessions with founders, employers and business leaders.",
  },
  {
    num: "02",
    title: "Connect",
    description: "Meet delegates, mentors and organisations from multiple markets.",
  },
  {
    num: "03",
    title: "Interview",
    description: "Role-matching, assessment and interview pathways.",
  },
  {
    num: "04",
    title: "Pitch",
    description: "Compete to turn a strong idea into a real Dubai venture.",
  },
];

export const summitRoutes: SummitRoute[] = [
  {
    tag: "Merit Selected",
    title: "Fully Funded Delegate",
    price: "$30",
    priceLabel: "application fee",
    features: [
      "Two-night twin-shared hotel stay*",
      "Capped economy airfare support*",
      "Visa-fee support*",
      "Airport and group transport*",
      "Two-day programme and meals",
      "Dubai city tour and certificate",
    ],
    ctaText: "Apply for Funded Selection",
    ctaUrl: "https://infinitygroupuae.com/next-gen-business-summit",
    isFeatured: true,
    buttonVariant: "gold",
  },
  {
    tag: "Guaranteed Summit Selection*",
    title: "Self-Funded Delegate",
    price: "$999",
    priceLabel: "confirmed delegate place*",
    features: [
      "Guaranteed summit selection after eligibility and payment*",
      "Two-night twin-shared hotel stay",
      "Visa invitation/support documents",
      "Group transport in Dubai",
      "Two-day programme and meals",
      "City tour and certificate",
    ],
    ctaText: "Request a Self-Funded Seat",
    ctaUrl: "https://infinitygroupuae.com/next-gen-business-summit",
    isFeatured: false,
    buttonVariant: "ghost",
  },
];

export const summitTimeline: SummitTimelineStep[] = [
  {
    step: "01 / Apply",
    title: "Submit your profile",
    description: "Complete the official registration and pay the USD 30 application review fee.",
  },
  {
    step: "02 / Review",
    title: "Earn a funded place",
    description:
      "Eligibility, motivation, role fit and documents are reviewed. 100 merit-selected delegates receive funded invitations.",
  },
  {
    step: "03 / Prepare",
    title: "Get ready to travel",
    description:
      "Join pre-orientation, receive official travel instructions and complete the relevant visa process.",
  },
  {
    step: "04 / Participate",
    title: "Meet your next step",
    description:
      "Attend the two-day summit, interview, build your network and join the applicable hiring batch.",
  },
];

export const summitEventDate = "2026-12-19T09:00:00+04:00";
