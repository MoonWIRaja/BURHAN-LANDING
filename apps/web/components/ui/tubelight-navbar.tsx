"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  cta?: {
    label: string
    url: string
    icon?: LucideIcon
  }
}

function isActiveRoute(pathname: string, url: string) {
  if (url === "/") {
    return pathname === "/"
  }

  return pathname === url || pathname.startsWith(`${url}/`)
}

export function NavBar({ items, className, cta }: NavBarProps) {
  const pathname = usePathname()
  const activeTab = items.find((item) => isActiveRoute(pathname, item.url))?.name ?? items[0]?.name

  return (
    <div
      data-site-navbar
      className={cn(
        "fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 sm:top-0 sm:bottom-auto sm:w-auto sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-1 py-1 shadow-[0_16px_50px_-28px_rgba(255,255,255,0.22)] backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              aria-label={item.name}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative flex min-w-0 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-6",
                "text-foreground/75 hover:text-primary",
                isActive && "bg-muted/80 text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden" aria-hidden="true">
                <Icon size={18} strokeWidth={2.25} />
              </span>
              {isActive ? (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-primary/7"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-primary/20 blur-sm" />
                  </div>
                </motion.div>
              ) : null}
            </Link>
          )
        })}
        {cta ? (
          <InteractiveHoverButton
            href={cta.url}
            text={cta.label}
            mobileText="Go"
            className="h-11 w-14 border-primary/20 bg-primary/10 px-2 text-xs text-primary shadow-none sm:w-[10.75rem] sm:px-4 sm:text-sm"
          />
        ) : null}
      </div>
    </div>
  )
}
