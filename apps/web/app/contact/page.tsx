import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { LeadInterestForm } from "@/components/lead-interest-form"
import { SectionHeading } from "@/components/section-heading"
import { businessUnits, supportResourceGroups } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BurHan for active hosting operations and submit early-access interest for upcoming services.",
  alternates: {
    canonical: "/contact",
  },
}

interface ContactPageProps {
  searchParams: Promise<{
    service?: string | string[]
    sourcePage?: string | string[]
    source?: string | string[]
  }>
}

function normalizeSearchParam(value: string | string[] | undefined) {
  if (!value) {
    return undefined
  }

  return Array.isArray(value) ? value[0] : value
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams
  const initialService = normalizeSearchParam(params.service)
  const sourcePage = normalizeSearchParam(params.sourcePage) ?? normalizeSearchParam(params.source)
  const statusOrder = {
    live: 0,
    coming_soon: 1,
  } as const

  const prioritizedUnits = [...businessUnits].sort((a, b) => {
    const byStatus = statusOrder[a.status] - statusOrder[b.status]

    if (byStatus !== 0) {
      return byStatus
    }

    return a.name.localeCompare(b.name)
  })

  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="Contact"
          title="One place for hosting support and expansion interest"
          description="Hosting is live now, and upcoming services use a single early-access flow. Share your interest and we will route your request to the right track."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {supportResourceGroups.map((group) => (
            <Card key={group.title} className="glass-panel">
              <CardHeader>
                <CardTitle className="text-foreground">{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              {group.links.length > 0 ? (
                <CardContent className="space-y-3">
                  {group.links.map((link) => {
                    const isExternal = link.href.startsWith("http")

                    return (
                      <a
                        key={link.title}
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="group block rounded-xl border border-border bg-background/70 p-4 transition hover:border-primary/40 hover:bg-background"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1.5">
                            <p className="text-sm font-semibold text-foreground">{link.title}</p>
                            <p className="text-sm text-muted-foreground">{link.description}</p>
                          </div>
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                        </div>
                      </a>
                    )
                  })}
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>
      </section>

      <section id="request-intake" className="section-shell">
        <SectionHeading
          eyebrow="Request Intake"
          title="Submit interest and track service status in one place"
          description="Use the early-access form for upcoming services, then refer to the cards on the right for live status and launch windows."
        />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 self-start">
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="text-foreground">Early Access Update Form</CardTitle>
                <CardDescription>
                  Use this form for cafe, web and design development, and game-development updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <LeadInterestForm initialService={initialService} sourcePage={sourcePage} />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-5">
            {prioritizedUnits.map((unit) => (
              <Card key={unit.slug} className="glass-panel">
                <CardHeader>
                  <p
                    className={`text-sm uppercase tracking-[0.18em] ${
                      unit.status === "live" ? "text-emerald-600 dark:text-emerald-300" : "text-primary"
                    }`}
                  >
                    {unit.status === "live" ? "Live now" : unit.launchWindow}
                  </p>
                  <CardTitle className="text-foreground">{unit.name}</CardTitle>
                  <CardDescription>{unit.oneLiner}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
