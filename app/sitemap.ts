import type { MetadataRoute } from "next";
import { categories, coloringPages } from "./data";
import { absoluteUrl } from "./config";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-13");
  return [
    { url: absoluteUrl("/"), lastModified, priority: 1 },
    { url: absoluteUrl("/coloring-pages"), lastModified, priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified, priority: 0.4 },
    ...categories.map((category) => ({
      url: absoluteUrl(`/coloring-pages/category/${category.slug}`),
      lastModified,
      priority: 0.85,
    })),
    ...coloringPages.map((item) => ({
      url: absoluteUrl(`/coloring-pages/${item.slug}`),
      lastModified,
      images: [absoluteUrl(item.image)],
      priority: 0.8,
    })),
  ];
}
