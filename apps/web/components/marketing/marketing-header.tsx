"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { landingNavLinks } from "@/config/landing"
import { useTheme } from "@/components/marketing/use-theme"
import { ThemeToggle } from "@/components/marketing/theme-toggle"
import { cn } from "@/lib/utils"

function resolveHref(pathname: string, href: string) {
  return pathname === "/" ? href : `/${href}`
}

export function MarketingHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (pathname !== "/" || !href.startsWith("#")) {
      return
    }

    event.preventDefault()

    const target = document.querySelector(href)

    if (!(target instanceof HTMLElement)) {
      return
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState({}, "", "/")
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="section-shell pt-0">
        <nav className="curved-navbar-container relative">
          <div
            className={cn(
              "curved-navbar relative flex min-h-20 items-center justify-between px-4 py-3 sm:px-6 lg:h-24 lg:px-12",
              isDarkTheme ? "is-dark-theme" : "is-light-theme",
            )}
          >
            <div className="hidden items-center gap-6 lg:flex">
              {landingNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.label === "Home" ? "/" : resolveHref(pathname, link.href)}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={cn(
                    "text-[13px] font-medium transition",
                    isDarkTheme
                      ? "text-zinc-500 hover:text-black"
                      : "text-zinc-400 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/"
              className={cn(
                "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-sm font-black tracking-tight sm:text-xl",
                isDarkTheme ? "text-black" : "text-white",
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-sm text-[10px] italic",
                  isDarkTheme ? "bg-black text-white" : "bg-white text-black",
                )}
              >
                B
              </span>
              BURHANDEV
            </Link>

            <div className="ml-auto hidden items-center gap-3 sm:gap-4 lg:flex">
              <ThemeToggle />
            </div>

            <div className="ml-auto flex items-center gap-2 lg:hidden">
              <ThemeToggle className="h-9 w-9" />
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
            isOpen ? "max-h-[24rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="rounded-b-[1.5rem] border border-border border-t-0 bg-card p-4 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.25)]">
            <div className="grid gap-2">
              {landingNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.label === "Home" ? "/" : resolveHref(pathname, link.href)}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
