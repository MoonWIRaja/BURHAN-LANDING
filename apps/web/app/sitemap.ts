import type { MetadataRoute } from "next"

import { siteUrl } from "@/config/site"

const staticRoutes = ["/", "/custom-plan", "/features", "/faq", "/contact"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "")
  const lastModified = new Date()

  return staticRoutes.map((route) => ({
    url: route === "/" ? base : `${base}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
