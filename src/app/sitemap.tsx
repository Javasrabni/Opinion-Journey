import { MetadataRoute } from "next";
import { DataArticle } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://opinion-journey.vercel.app";

  const articles = DataArticle.map((article) => {
    const slug = `${article.no}-${article.title.toLowerCase().replace(/\s+/g, "-")}`;

    return {
      url: `${baseUrl}/article/${slug}`,
      lastModified: article.date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...articles,
  ];
}
