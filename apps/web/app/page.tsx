import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CircleDot, Orbit, Sparkles } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { businessUnits } from "@/config/site"

export const metadata: Metadata = {
  title: "BurHan Company Hub",
  description:
    "Main company landing page for BurHan with live hosting operations and upcoming business expansions across cafe, web development, and game development.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  const hostingUnit = businessUnits.find((unit) => unit.slug === "hosting")
  const upcomingUnits = businessUnits.filter((unit) => unit.status === "coming_soon")

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:5rem_5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-56 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/16 blur-[115px] animate-[spin_38s_linear_infinite]" />
        <div className="pointer-events-none absolute right-[-10rem] top-32 h-[24rem] w-[24rem] rounded-full bg-blue-500/18 blur-[90px] animate-pulse" />
        <div className="pointer-events-none absolute bottom-[-8rem] left-[-8rem] h-[20rem] w-[20rem] rounded-full bg-white/10 blur-[85px] animate-pulse" />

        <div className="section-shell relative pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge className="border-cyan-300/35 bg-cyan-500/10 text-cyan-100">
                BURHAN COMPANY HUB
              </Badge>
              <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                One ecosystem, four business lanes, and a clear growth roadmap.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/82 sm:text-lg">
                Hosting is live today. Cafe, web development, and game development are being built in
                parallel. This corporate landing page keeps current operations clear while showing what
                comes next.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link href={hostingUnit?.primaryCta.href ?? "/hosting"}>
                    Explore Hosting
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <Link href="/services">
                    View All Services
                    <Orbit className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="glass-panel relative overflow-hidden rounded-[2rem] border-cyan-300/20">
              <div className="pointer-events-none absolute -right-16 -top-14 h-44 w-44 rounded-full bg-cyan-300/22 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-14 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
              <CardHeader className="relative space-y-4 border-b border-slate-400/20">
                <Badge variant="outline" className="w-fit border-cyan-200/30 bg-black/35 text-cyan-100">
                  BUSINESS STATUS
                </Badge>
                <CardTitle className="font-[family-name:var(--font-heading)] text-3xl text-white">
                  Live now + expansion pipeline
                </CardTitle>
                <CardDescription className="text-slate-200/75">
                  Corporate visibility for stakeholders, customers, and future partners.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4 p-6">
                {businessUnits.map((unit) => (
                  <div
                    key={unit.slug}
                    className="rounded-2xl border border-slate-400/20 bg-black/42 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-lg font-semibold text-white">{unit.name}</p>
                      <span
                        className={`rounded-full border px-3 py-1 text-[0.7rem] font-medium tracking-[0.16em] uppercase ${
                          unit.status === "live"
                            ? "border-emerald-300/40 bg-emerald-500/15 text-emerald-200"
                            : "border-amber-300/40 bg-amber-500/15 text-amber-100"
                        }`}
                      >
                        {unit.status === "live" ? "Live" : "Coming Soon"}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300/78">{unit.oneLiner}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-shell relative pb-10">
        <div className="rounded-[1.9rem] border border-emerald-300/20 bg-emerald-500/8 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <Badge variant="outline" className="border-emerald-200/35 bg-emerald-500/12 text-emerald-100">
                Available Now
              </Badge>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white sm:text-4xl">
                Hosting is active and production-ready.
              </h2>
              <p className="text-base leading-8 text-slate-200/80">
                BurHan Hosting is already operating with custom plan workflows, console-first
                conversion, and migration-aware support paths for Malaysian gaming communities.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-7">
              <Link href={hostingUnit?.primaryCta.href ?? "/hosting"}>
                Go to Hosting
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell relative pb-24 pt-8">
        <div className="rounded-[2rem] border border-slate-300/20 bg-[linear-gradient(180deg,rgba(7,9,16,0.9),rgba(2,4,10,0.95))] p-7 shadow-[0_34px_110px_-60px_rgba(125,211,252,0.55)] sm:p-10">
          <div className="space-y-4">
            <Badge variant="outline" className="border-cyan-200/35 bg-cyan-500/10 text-cyan-100">
              Roadmap
            </Badge>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white sm:text-4xl">
              Upcoming units are visible, honest, and action-ready.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300/80">
              Every upcoming service has a launch window and one unified early-access path. This keeps
              expansion transparent while still prioritizing current hosting operations.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {upcomingUnits.map((unit) => (
              <Card key={unit.slug} className="border-slate-300/20 bg-black/35 backdrop-blur">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-2 text-cyan-100">
                    <CircleDot className="h-4 w-4" />
                    <span className="text-[0.68rem] tracking-[0.18em] uppercase">{unit.launchWindow}</span>
                  </div>
                  <CardTitle className="text-white">{unit.name}</CardTitle>
                  <CardDescription className="text-slate-300/80">{unit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link href={unit.primaryCta.href}>
                      {unit.primaryCta.label}
                      <Sparkles className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact?service=cafe&sourcePage=/">
                Get Early Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/ticket-support?source=home-talk-to-team">Talk to Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
