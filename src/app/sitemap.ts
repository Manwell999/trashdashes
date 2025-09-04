import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://trash-dashes.example/", changeFrequency: "monthly", priority: 1 },
    { url: "https://trash-dashes.example/contact", changeFrequency: "yearly", priority: 0.8 },
  ];
}


