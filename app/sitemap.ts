import type { MetadataRoute } from "next";
import { blogPosts } from "../data/blog-posts";
import { services } from "../data/services";
import { siteConfig } from "../data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/our-work",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.domain}${route}`,
      lastModified: new Date("2026-07-26"),
      changeFrequency:
        route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.domain}/services/${service.slug}`,
      lastModified: new Date("2026-07-26"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.domain}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

