"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { usePathname } from "next/navigation"

import { landingNavLinks, landingSocialLinks } from "@/config/landing"

export function MarketingFooter() {
  const pathname = usePathname()

  return (
    <footer className="w-full overflow-hidden border-t border-black/5 bg-background pb-12 pt-24 text-foreground dark:border-white/5">
      <div className="w-full px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row">
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold tracking-[0.16em] text-zinc-500 uppercase">
            {landingNavLinks.map((link) => (
              <Link
                key={link.label}
                href={pathname === "/" ? link.href : `/${link.href}`}
                className="transition hover:text-primary"
              >
                {link.label.replace("Our ", "")}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6 text-xs font-bold tracking-[0.16em] text-zinc-500 uppercase">
            {landingSocialLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-6">
                {index > 0 ? <span className="text-zinc-200 dark:text-zinc-800">|</span> : null}
                <Link href={link.href} className="transition hover:text-primary">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-12 border-t border-black/5 py-12 md:flex-row dark:border-white/5">
          <h2 className="w-full select-none text-[15vw] font-black leading-none tracking-tighter text-foreground uppercase md:text-[14vw]">
            BURHANDEV
          </h2>
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:bg-primary dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-12 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase md:flex-row dark:border-white/5">
          <div className="w-full text-center md:text-left">© 2026 BURHANDEV ENTERPRISE</div>
          <div className="w-full text-center italic text-zinc-300 md:text-right dark:text-zinc-500">
            DESIGN TO DISRUPT.
          </div>
        </div>
      </div>
    </footer>
  )
}
