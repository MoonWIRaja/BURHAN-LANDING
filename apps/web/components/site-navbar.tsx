"use client"

import {
  CircleHelp,
  Home,
  Mail,
  SlidersHorizontal,
  SquareArrowOutUpRight,
} from "lucide-react"

import { consoleUrl, siteNavigation } from "@/config/site"
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar"

const iconMap = {
  home: Home,
  plan: SlidersHorizontal,
  faq: CircleHelp,
  contact: Mail,
} as const

export function SiteNavbar() {
  const items: NavItem[] = siteNavigation.map((item) => ({
    name: item.name,
    url: item.url,
    icon: iconMap[item.icon],
  }))

  return (
    <NavBar
      items={items}
      cta={{ label: "Go to Console", url: consoleUrl, icon: SquareArrowOutUpRight }}
    />
  )
}
