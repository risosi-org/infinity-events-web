import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${siteConfig.url}/assets/img/infinity-group-stage.webp`,
        `${siteConfig.url}/assets/img/golden-excellence-awards-team.webp`,
      ],
    },
    {
      url: `${siteConfig.url}/next-gen-business-summit`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${siteConfig.url}/assets/img/hero-zia.webp`],
    },
  ];
}
