import type { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { SectionHeading } from "@/components/section-heading"
import { teamMembers } from "@/config/site"

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the BurHan team responsible for infrastructure, reliability, and support operations.",
  alternates: {
    canonical: "/team",
  },
}

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="Team"
          title="Meet the people behind BurHan"
          description="A dedicated team section inspired by hosting-team layouts, focused on ownership, responsibilities, and who runs each operational track."
        />
      </section>

      <section className="section-shell pb-6">
        <Card className="glass-panel">
          <CardHeader>
            <p className="text-xs tracking-[0.18em] text-primary uppercase">Team BurHan</p>
            <CardTitle className="text-white">Operations and support ownership map</CardTitle>
            <CardDescription>
              Each member card shows who is accountable for platform direction, reliability, and
              customer intake.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-white/12 bg-black/35 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-primary/10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.35),transparent_55%)]" />
                      <span className="relative z-10 text-xs font-semibold tracking-[0.08em] text-primary">
                        {member.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{member.name}</p>
                      <p className="text-[0.68rem] tracking-[0.18em] text-primary uppercase">
                        {member.unit}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.summary}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
