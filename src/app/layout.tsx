import type { Metadata, Viewport } from "next";
import { Anton, Manrope, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollRevealInit } from "@/components/ui/ScrollRevealInit";
import { siteConfig } from "@/config/site";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07060a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Infinity Events Dubai | Event Management Company in Dubai, UAE",
    template: "%s | Infinity Events",
  },
  description: siteConfig.description,
  keywords: [
    "event management company Dubai",
    "event organizer Dubai",
    "corporate events Dubai",
    "award show production Dubai",
    "gala dinner Dubai",
    "wedding planner Dubai",
    "brand launch Dubai",
    "conference organizer UAE",
    "Infinity Events",
    "Infinix Infinity Events",
    "Infinity NextGen Business Summit",
  ],
  authors: [{ name: "Infinix Infinity Events" }],
  creator: "Infinix Infinity Events",
  publisher: "Infinix Infinity Events",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Infinity Events",
    title: "Infinity Events — Event Management Company in Dubai",
    description:
      "We don't just plan. We orchestrate. Corporate events, award nights, galas, weddings, brand launches & summits in Dubai.",
    url: siteConfig.url,
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinity Events Dubai",
      },
    ],
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Events — Event Management Company in Dubai",
    description:
      "Corporate events, award nights, galas, weddings, brand launches & summits in Dubai.",
    images: ["/assets/img/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${anton.variable} ${manrope.variable} ${playfair.variable}`}
    >
      <body className="font-sans bg-[#07060a] text-[#f4efe6] antialiased">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main"
          className="skip absolute -left-[999px] top-2.5 z-[9999] bg-[#d4af5c] text-black px-4 py-2.5 rounded-lg font-bold focus:left-4"
        >
          Skip to content
        </a>

        {/* Header & Sticky Nav */}
        <SiteHeader />

        {/* Main Content */}
        <main id="main">{children}</main>

        {/* Global Utilities */}
        <SiteFooter />
        <ScrollToTop />
        <CustomCursor />
        <ScrollRevealInit />
      </body>
    </html>
  );
}
