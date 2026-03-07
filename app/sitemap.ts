import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pranaygurav.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}