import type { MetadataRoute } from "next"

import { siteUrl } from "@/config/site"

const staticRoutes = [
  { route: "/", priority: 1, changeFrequency: "daily" as const },
  { route: "/hosting", priority: 0.95, changeFrequency: "daily" as const },
  { route: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  { route: "/services/hosting", priority: 0.85, changeFrequency: "weekly" as const },
  { route: "/services/cafe", priority: 0.8, changeFrequency: "weekly" as const },
  { route: "/services/web-development", priority: 0.8, changeFrequency: "weekly" as const },
  { route: "/services/game-development", priority: 0.8, changeFrequency: "weekly" as const },
  { route: "/team", priority: 0.78, changeFrequency: "weekly" as const },
  { route: "/faq", priority: 0.75, changeFrequency: "weekly" as const },
  { route: "/ticket-support", priority: 0.75, changeFrequency: "weekly" as const },
  { route: "/contact", priority: 0.75, changeFrequency: "weekly" as const },
  { route: "/custom-plan", priority: 0.7, changeFrequency: "weekly" as const },
  { route: "/features", priority: 0.65, changeFrequency: "weekly" as const },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "")
  const lastModified = new Date()

  return staticRoutes.map((entry) => ({
    url: entry.route === "/" ? base : `${base}${entry.route}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
