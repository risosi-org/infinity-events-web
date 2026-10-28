import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function getHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://infinixinfinityevents.com/#org",
        name: "Infinix Infinity Events",
        alternateName: ["Infinity Events", "إنفينيكس إنفينيتي للفعاليات"],
        url: "https://infinixinfinityevents.com/",
        logo: "https://infinixinfinityevents.com/assets/img/logo.png",
        email: "info@infinixinfinityevents.com",
        telephone: "+971589310114",
        founder: {
          "@type": "Person",
          name: "Mohd Zia Hassan",
          alternateName: "Mr. Infinity",
          jobTitle: "Chairman, Infinity Group",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Infinity Group UAE",
          url: "https://infinitygroupuae.com/",
        },
        sameAs: ["https://infinitygroupuae.com/infinity-events"],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://infinixinfinityevents.com/#business",
        name: "Infinix Infinity Events",
        description:
          "Licensed events organizing & managing company in Dubai, UAE — corporate events, award shows, galas, weddings, brand launches, summits and roadshows.",
        url: "https://infinixinfinityevents.com/",
        image: "https://infinixinfinityevents.com/assets/img/og-image.jpg",
        logo: "https://infinixinfinityevents.com/assets/img/logo.png",
        telephone: "+971589310114",
        email: "info@infinixinfinityevents.com",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 805, Park Place Tower, Sheikh Zayed Road",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.2245,
          longitude: 55.2836,
        },
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        parentOrganization: { "@id": "https://infinixinfinityevents.com/#org" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Event Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Events & Conferences" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Award Shows & Gala Dinners" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Weddings & Private Celebrations" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Launches & Activations" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concerts & Live Entertainment" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Summits, Exhibitions & Roadshows" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://infinixinfinityevents.com/#website",
        url: "https://infinixinfinityevents.com/",
        name: "Infinity Events",
        publisher: { "@id": "https://infinixinfinityevents.com/#org" },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Infinity Events a licensed event company in Dubai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Infinix Infinity Events holds a Dubai professional licence (No. 1659104) for Events Organizing & Managing, and is part of Infinity Group UAE.",
            },
          },
          {
            "@type": "Question",
            name: "What types of events do you manage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Corporate events and conferences, award shows and gala dinners, weddings and private celebrations, brand launches, concerts, business summits, exhibitions and international roadshows.",
            },
          },
          {
            "@type": "Question",
            name: "How early should we book?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For large galas, award nights and summits we recommend 8–12 weeks. Smaller corporate and private events can often be delivered in 2–4 weeks depending on venue availability.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle venues, permits and vendors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We manage venue sourcing, stage and AV production, décor, catering coordination, entertainment, photography and videography, guest management and the relevant event permits.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get a quote?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use the Event Planner on our website, WhatsApp us on +971 58 931 0114 or email info@infinixinfinityevents.com. We reply with a tailored proposal within 24–48 hours.",
            },
          },
        ],
      },
    ],
  };
}

export function getSummitJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BusinessEvent",
        name: "Infinity NextGen Business Summit 2026",
        description:
          "A two-day international career and entrepreneurship summit in Dubai with speaker sessions, career assessments, interviews, a founder pitch challenge, a country showcase and a Dubai city experience.",
        startDate: "2026-12-19T09:00:00+04:00",
        endDate: "2026-12-20T18:00:00+04:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Dubai",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        },
        image: [
          "https://infinixinfinityevents.com/assets/img/hero-zia.webp",
          "https://infinixinfinityevents.com/assets/img/mr-infinity-spotlight.webp",
        ],
        organizer: {
          "@type": "Organization",
          name: "Infinix Infinity Events",
          url: "https://infinixinfinityevents.com/",
        },
        performer: {
          "@type": "Person",
          name: "Mohd Zia Hassan",
        },
        offers: [
          {
            "@type": "Offer",
            name: "Fully Funded Delegate — application review",
            price: "30",
            priceCurrency: "USD",
            url: "https://infinitygroupuae.com/next-gen-business-summit",
            availability: "https://schema.org/InStock",
            validFrom: "2026-09-01",
          },
          {
            "@type": "Offer",
            name: "Self-Funded Delegate",
            price: "999",
            priceCurrency: "USD",
            url: "https://infinitygroupuae.com/next-gen-business-summit",
            availability: "https://schema.org/InStock",
            validFrom: "2026-09-01",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://infinixinfinityevents.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "NextGen Business Summit",
            item: "https://infinixinfinityevents.com/next-gen-business-summit",
          },
        ],
      },
    ],
  };
}
