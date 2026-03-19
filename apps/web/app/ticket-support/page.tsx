import type { Metadata } from "next"
import { ArrowUpRight, CircleAlert, Clock4, ShieldCheck } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { SectionHeading } from "@/components/section-heading"
import { TicketSupportForm } from "@/components/ticket-support-form"
import { discordUrl } from "@/config/site"

export const metadata: Metadata = {
  title: "Ticket Support",
  description:
    "Submit a support ticket for technical issues, billing, migration requests, and account-related problems.",
  alternates: {
    canonical: "/ticket-support",
  },
}

interface TicketSupportPageProps {
  searchParams: Promise<{
    source?: string | string[]
  }>
}

function normalizeSearchParam(value: string | string[] | undefined) {
  if (!value) {
    return undefined
  }

  return Array.isArray(value) ? value[0] : value
}

export default async function TicketSupportPage({ searchParams }: TicketSupportPageProps) {
  const params = await searchParams
  const source = normalizeSearchParam(params.source) ?? "ticket-support"

  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="Ticket Support"
          title="Open a structured support ticket"
          description="Use this page for technical issues, migration requests, and billing problems. Include clear details so we can respond faster."
        />
      </section>

      <section className="section-shell">
        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-foreground">Support Ticket Form</CardTitle>
              <CardDescription>
                Share issue type, priority, and complete details. The team will review and route
                your ticket to the correct operations track.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <TicketSupportForm sourcePage={`/ticket-support?source=${source}`} />
            </CardContent>
          </Card>

          <div className="grid gap-5">
            <Card className="glass-panel">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary">
                  <Clock4 className="h-4 w-4" />
                  <p className="text-xs tracking-[0.18em] uppercase">Response SLA</p>
                </div>
                <CardTitle className="text-foreground">Typical first response</CardTitle>
                <CardDescription>
                  Most tickets receive an initial reply within 24 hours. Urgent production issues
                  are prioritized first.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-panel">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary">
                  <CircleAlert className="h-4 w-4" />
                  <p className="text-xs tracking-[0.18em] uppercase">Before Submit</p>
                </div>
                <CardTitle className="text-foreground">Include key context</CardTitle>
                <CardDescription>
                  Add server type, game, timestamp, and error logs where possible. Better context
                  means faster troubleshooting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-panel">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  <p className="text-xs tracking-[0.18em] uppercase">Data Handling</p>
                </div>
                <CardTitle className="text-foreground">Your details stay scoped</CardTitle>
                <CardDescription>
                  Ticket information is used only for support resolution and service operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="text-foreground">Discord Support</CardTitle>
                <CardDescription>
                  For more inquiries you can go to our discord for more direction and support from
                  our friendly staff.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full justify-between">
                  <a href={discordUrl} target="_blank" rel="noreferrer">
                    Go to BurHan Discord
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
