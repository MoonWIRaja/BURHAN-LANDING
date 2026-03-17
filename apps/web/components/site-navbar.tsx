"use client"

import {
  Building2,
  CircleHelp,
  FileText,
  Home,
  Layers3,
  LifeBuoy,
  Mail,
  ServerCog,
  SlidersHorizontal,
  Users,
} from "lucide-react"
import { usePathname } from "next/navigation"

import { consoleUrl, siteNavigation } from "@/config/site"
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar"

const iconMap = {
  home: Home,
  services: Layers3,
  faq: CircleHelp,
  contact: Mail,
} as const

function resolveActiveItemName(pathname: string) {
  if (pathname.startsWith("/ticket-support")) {
    return "Ticket Support"
  }

  if (pathname.startsWith("/custom-plan")) {
    return "Custom Plan"
  }

  if (pathname.startsWith("/hosting")) {
    return "Hosting"
  }

  if (pathname.startsWith("/company-home")) {
    return "About Us"
  }

  if (pathname.startsWith("/features")) {
    return "Features"
  }

  if (pathname.startsWith("/team")) {
    return "Team"
  }

  if (pathname === "/") {
    return "Home"
  }

  if (pathname.startsWith("/services")) {
    return "Services"
  }

  if (pathname.startsWith("/faq")) {
    return "FAQ"
  }

  if (pathname.startsWith("/contact")) {
    return "Contact"
  }

  return undefined
}

export function SiteNavbar() {
  const pathname = usePathname()
  const baseItems: NavItem[] = siteNavigation.map((item) => ({
    name: item.name,
    url: item.url,
    icon: iconMap[item.icon],
  }))
  const contextualItems: NavItem[] = [...baseItems]

  if (pathname.startsWith("/team")) {
    contextualItems.push({ name: "Team", url: "/team", icon: Users })
  }

  if (pathname.startsWith("/features")) {
    contextualItems.push({ name: "Features", url: "/features", icon: SlidersHorizontal })
  }

  if (pathname.startsWith("/company-home")) {
    contextualItems.push({ name: "About Us", url: "/company-home", icon: Building2 })
  }

  if (pathname.startsWith("/hosting") || pathname.startsWith("/custom-plan")) {
    contextualItems.push({ name: "Hosting", url: "/hosting", icon: ServerCog })
    contextualItems.push({ name: "Custom Plan", url: "/custom-plan", icon: FileText })
  }

  if (pathname.startsWith("/ticket-support")) {
    contextualItems.push({ name: "Ticket Support", url: "/ticket-support", icon: LifeBuoy })
  }

  const items: NavItem[] = contextualItems
  const activeItemName = resolveActiveItemName(pathname)
  const showConsoleCta =
    pathname === "/hosting" ||
    pathname.startsWith("/hosting/") ||
    pathname === "/custom-plan" ||
    pathname.startsWith("/custom-plan/")

  return (
    <NavBar
      items={items}
      activeItemName={activeItemName}
      cta={showConsoleCta ? { label: "Go to Console", url: consoleUrl } : undefined}
    />
  )
}
