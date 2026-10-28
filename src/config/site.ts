export const siteConfig = {
  name: "Infinix Infinity Events",
  shortName: "Infinity Events",
  arabicName: "إنفينيكس إنفينيتي للفعاليات",
  description:
    "Infinix Infinity Events is a licensed event management company in Dubai. Corporate events, award shows, galas, weddings, brand launches, summits & roadshows — produced end-to-end by an Infinity Group company.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://infinixinfinityevents.com",
  ogImage: "https://infinixinfinityevents.com/assets/img/og-image.jpg",
  phoneDisplay: "+971 58 931 0114",
  phoneRaw: "+971589310114",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971589310114",
  email: process.env.NEXT_PUBLIC_SITE_EMAIL || "info@infinixinfinityevents.com",
  officeAddress: "Park Place Tower, Office No. 805, Sheikh Zayed Road, Dubai, UAE",
  postalAddress: {
    streetAddress: "Office No. 805, Park Place Tower, Sheikh Zayed Road",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    latitude: 25.2245,
    longitude: 55.2836,
  },
  licence: {
    number: "1659104",
    crNumber: "2939797",
    activity: "Events Organizing & Managing",
    headOffice: "Park Place Tower, Dubai",
  },
  leadership: {
    chairman: "Mohd Zia Hassan",
    alias: "Mr. Infinity",
    title: "Chairman, Infinity Group",
  },
  links: {
    parentCompany: "https://infinitygroupuae.com/",
    summitExternalApplication: "https://infinitygroupuae.com/next-gen-business-summit",
    maps: "https://maps.google.com/?q=Park+Place+Tower+Sheikh+Zayed+Road+Dubai",
    whatsapp: (text: string = "") =>
      `https://wa.me/971589310114${text ? `?text=${encodeURIComponent(text)}` : ""}`,
    tel: "tel:+971589310114",
    mailto: (subject: string = "", body: string = "") => {
      const params = new URLSearchParams();
      if (subject) params.set("subject", subject);
      if (body) params.set("body", body);
      const q = params.toString();
      return `mailto:info@infinixinfinityevents.com${q ? `?${q}` : ""}`;
    },
  },
};
