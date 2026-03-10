import { Activity, ShieldCheck, SlidersHorizontal, SquareTerminal } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const consoleSignals = [
  {
    title: "Player load",
    value: "Stable",
    description: "Burst-friendly allocations keep launch traffic under control.",
    icon: Activity,
  },
  {
    title: "Protection",
    value: "Armed",
    description: "Mitigation-first posture stays visible from the first screen.",
    icon: ShieldCheck,
  },
  {
    title: "Operations",
    value: "Console-led",
    description: "Orders, billing, and management stay inside one environment.",
    icon: SquareTerminal,
  },
]

export function HeroConsolePreview() {
  return (
    <Card className="glass-panel overflow-hidden">
      <CardHeader className="border-b border-border/70">
        <div className="flex items-center justify-between gap-3">
          <div>
            <Badge>Console Preview</Badge>
            <CardTitle className="mt-4 text-2xl text-white">Launch-ready command surface</CardTitle>
            <CardDescription>
              The landing page sells clarity. The console handles the serious work.
            </CardDescription>
          </div>
          <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-emerald-300 uppercase sm:block">
            Ops Online
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-6 lg:grid-cols-[1.35fr_1fr]">
        <div className="glass-panel rounded-[1.3rem] p-5">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Server Build Queue</span>
            <span>Realtime</span>
          </div>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Custom Plan Intake</p>
                <p className="text-sm text-muted-foreground">Game profile, player load, and launch window</p>
              </div>
              <SlidersHorizontal className="h-5 w-5 text-primary" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {consoleSignals.map((signal) => {
                const Icon = signal.icon

                return (
                  <div
                    key={signal.title}
                    className="rounded-2xl border border-border/70 bg-background/55 p-4"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-4 text-sm text-muted-foreground">{signal.title}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{signal.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-[1.3rem] p-5">
          <p className="text-sm font-medium text-muted-foreground">What the first pass emphasizes</p>
          <div className="mt-5 space-y-4">
            {[
              "Custom builds instead of public tier grids",
              "One primary CTA that routes users to the console",
              "Multi-game positioning with stronger infrastructure framing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-background/50 px-4 py-3 text-sm leading-7 text-foreground/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
