import type { MetadataRoute } from "next";
const SITE_URL = "https://academy.lbcsarasota.elijahdesent.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/academy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/apply`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
