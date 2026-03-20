import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { landingServiceCards } from "@/config/landing"
import { VisualPlaceholder } from "@/components/marketing/visual-placeholder"

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {landingServiceCards.map((card) => (
        <div
          key={card.title}
          className="flex flex-col rounded-[2rem] border border-black/5 bg-zinc-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-zinc-900/70"
        >
          <span className="mb-6 inline-flex w-fit self-center rounded bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
            New
          </span>
          <h3 className="mb-2 text-xl font-bold text-foreground">{card.title}</h3>
          <p className="mb-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-400">
            {card.description}
          </p>
          <Link
            href={card.href}
            className="mb-10 inline-flex items-center justify-center gap-2 self-center rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-auto overflow-hidden rounded-2xl">
            <VisualPlaceholder variant={card.visual} className="h-44 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
