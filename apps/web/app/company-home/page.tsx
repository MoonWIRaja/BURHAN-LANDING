import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Cpu,
  LifeBuoy,
  Rocket,
  ServerCog,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { SectionHeading } from "@/components/section-heading"
import { consoleUrl, discordUrl } from "@/config/site"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About BurHan Hosting, our mission, support-first operations, and the infrastructure principles we use to keep game communities stable.",
  alternates: {
    canonical: "/company-home",
  },
}

const platformPillars = [
  {
    title: "Support First",
    description:
      "Whether you are running your first server or scaling a larger game community, the support path is designed to stay practical and direct.",
    icon: LifeBuoy,
  },
  {
    title: "Hardware and Uptime",
    description:
      "Production infrastructure is focused on consistent gameplay with tuned nodes, resilient storage, and a clear operations model.",
    icon: ServerCog,
  },
  {
    title: "Protection Layer",
    description:
      "DDoS mitigation and network hardening are treated as core requirements for community stability, not optional extras.",
    icon: ShieldCheck,
  },
  {
    title: "Confident Launches",
    description:
      "From setup to optimization, each deployment is shaped around real admin workflows and player behavior.",
    icon: Rocket,
  },
  {
    title: "Performance Focus",
    description:
      "Compute profiles are selected to keep server tick quality stable for modded worlds and higher concurrency periods.",
    icon: Cpu,
  },
]

export default function CompanyHomeConceptPage() {
  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="About Us"
          title="Built by gamers to deliver stable hosting that communities can trust"
          description="Born from a passion for multiplayer gaming, BurHan Hosting was created to make server operations simpler, faster, and more reliable for real communities."
        />
      </section>

      <section className="section-shell">
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-white">About BurHan Hosting</CardTitle>
            <CardDescription>
              Starting your first game server should not feel complicated. Our platform and support
              model are built to guide you from setup to reliable daily operations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>
              BurHan Hosting focuses on strong customer support, practical guidance, and stable
              infrastructure. Whether you are a first-time admin or a long-running operator, the
              goal is to keep deployment clear and gameplay smooth.
            </p>
            <p>
              You launch with confidence through protected network posture, operational workflows,
              and hardware profiles designed for uninterrupted sessions and clean performance.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm">
                <Link href="/features">
                  Check Platform Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/contact">Talk to Support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="section-shell">
        <Card className="glass-panel">
          <CardHeader>
            <p className="text-xs tracking-[0.18em] text-primary uppercase">Support and Infrastructure</p>
            <CardTitle className="text-white">Core principles behind our operations</CardTitle>
            <CardDescription>
              These are the same principles used to shape onboarding, uptime expectations, and
              day-to-day customer support.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {platformPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/12 bg-black/35 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-primary/35 bg-primary/10 p-2 text-primary">
                    <pillar.icon className="h-4 w-4" />
                  </div>
                  <p className="font-medium text-white">{pillar.title}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="section-shell">
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-white">Partners that trust us</CardTitle>
            <CardDescription>
              BurHan works with gaming communities, creators, and teams that need reliable server
              operations and responsive support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm">
                <a href={consoleUrl}>Go to Console</a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={discordUrl} target="_blank" rel="noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
