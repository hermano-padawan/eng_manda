import type { MetadataRoute } from "next";
import { categories, coloringPages } from "./data";
import { absoluteUrl } from "./config";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1 },
    { url: absoluteUrl("/coloring-pages/"), priority: 0.9 },
    { url: absoluteUrl("/about/"), priority: 0.4 },
    ...categories.map((category) => ({
      url: absoluteUrl(`/coloring-pages/category/${category.slug}/`),
      priority: 0.85,
    })),
    ...coloringPages.map((item) => ({
      url: absoluteUrl(`/coloring-pages/${item.slug}/`),
      images: [absoluteUrl(item.image)],
      priority: 0.8,
    })),
  ];
}
