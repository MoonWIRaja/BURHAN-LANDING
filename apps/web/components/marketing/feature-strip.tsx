import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { landingFeatureStripItems } from "@/config/landing"

export function FeatureStrip() {
  return (
    <div className="border-t border-black/5 bg-zinc-50/70 dark:border-white/5 dark:bg-zinc-950/60">
      <div className="grid w-full grid-cols-1 divide-y divide-black/5 px-0 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-white/5">
        {landingFeatureStripItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-4 p-8 transition hover:bg-white dark:hover:bg-zinc-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm transition group-hover:border-primary dark:border-white/10 dark:bg-zinc-900">
                <Icon className="h-4 w-4 text-black transition group-hover:text-primary dark:text-white" />
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xs font-black tracking-[0.16em] text-black uppercase transition group-hover:text-primary dark:text-white">
                  {item.title}
                  <ChevronRight className="h-3.5 w-3.5" />
                </h3>
                <p className="mt-1 text-xs font-medium text-black/80 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
