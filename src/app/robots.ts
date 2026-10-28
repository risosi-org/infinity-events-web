import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/not-found", "/404.html", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
