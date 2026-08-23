import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { products } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/manufacturing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/bulk-wholesale", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const productPaths = products.map((product) => ({
    path: `/products/${product.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPaths, ...productPaths].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
