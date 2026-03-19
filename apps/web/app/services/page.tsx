import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { businessUnits } from "@/config/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore BurHan business units across live hosting operations and upcoming expansions in cafe, web development, and game development.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="space-y-20">
      <section className="section-shell pt-28 sm:pt-32">
        <Badge variant="outline">Services</Badge>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-semibold text-foreground sm:text-5xl">
          One company, multiple service tracks.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          Hosting is currently live. Additional units are expanding with launch windows and unified
          early-access flows.
        </p>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {businessUnits.map((unit) => (
            <Card key={unit.slug} className="glass-panel flex h-full flex-col">
              <CardHeader className="min-h-[9.5rem] space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="min-h-[3.5rem] text-foreground">{unit.name}</CardTitle>
                  <span
                    className={`rounded-full border px-3 py-1 text-[0.68rem] font-medium tracking-[0.16em] uppercase ${
                      unit.status === "live"
                        ? "border-emerald-300/35 bg-emerald-500/12 text-emerald-700 dark:text-emerald-200"
                        : "border-amber-300/35 bg-amber-500/12 text-amber-700 dark:text-amber-100"
                    }`}
                  >
                    {unit.status === "live" ? "Live" : "Coming Soon"}
                  </span>
                </div>
                <CardDescription className="min-h-[4rem]">{unit.oneLiner}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5">
                <p className="flex-1 text-sm leading-7 text-foreground/80">{unit.description}</p>
                <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {unit.launchWindow}
                </p>
                <Button asChild variant="outline" className="w-full justify-between">
                  <Link href={unit.slug === "hosting" ? "/hosting" : `/services/${unit.slug}`}>
                    {unit.slug === "hosting" ? "Open Hosting" : "View Details"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
