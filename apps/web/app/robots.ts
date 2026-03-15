import type { MetadataRoute } from "next"

import { siteUrl } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  const host = siteUrl.replace(/\/$/, "")

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  }
}
