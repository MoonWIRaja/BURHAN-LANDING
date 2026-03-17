"use client"

import { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, Sparkles, SquareTerminal } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { consoleUrl, serverBuildOptions } from "@/config/site"
import { cn } from "@/lib/utils"

export function ServerBuildSelector() {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const circleRefs = useRef<(HTMLButtonElement | null)[]>([])
  const shouldReduceMotion = useReducedMotion()
  const activeOption = serverBuildOptions[selectedIndex]
  const gradientX = ["14%", "39%", "64%", "89%"][selectedIndex] ?? "50%"

  function moveSelection(direction: -1 | 1) {
    setSelectedIndex((current) => {
      const next = current + direction

      if (next < 0) return serverBuildOptions.length - 1
      if (next >= serverBuildOptions.length) return 0
      return next
    })
  }

  return (
    <Card className="glass-panel overflow-hidden">
      <div
        className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/90"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault()
            moveSelection(1)
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault()
            moveSelection(-1)
          }
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${gradientX} 72%, ${activeOption.color}18 0%, ${activeOption.color}10 35%, transparent 70%)`,
          }}
        />
        <CardHeader className="relative z-10 gap-4 border-b border-border/60">
          <Badge>Custom Build Selector</Badge>
          <CardTitle className="text-3xl text-white">Choose the closest server profile</CardTitle>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            The selector replaces public pricing tiers. Use it to frame the level of build you need,
            then continue through the BurHan console for the actual order and operational flow.
          </p>
        </CardHeader>
        <CardContent className="relative z-10 space-y-8 p-6">
          <div className="rounded-[1.6rem] border border-border/60 bg-background/55 p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {serverBuildOptions.map((option, index) => {
                const isSelected = index === selectedIndex
                const isPassed = index <= selectedIndex

                return (
                  <div key={option.id} className="flex items-center gap-3 sm:gap-6">
                    <button
                      ref={(element) => {
                        circleRefs.current[index] = element
                      }}
                      type="button"
                      className={cn(
                        "relative rounded-full border-2 border-transparent transition-transform duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        index === 0 ? "h-4 w-4" : index === 1 ? "h-5 w-5" : "h-6 w-6",
                      )}
                      onClick={() => setSelectedIndex(index)}
                      style={{
                        backgroundColor: isPassed ? option.color : "#6b7280",
                        boxShadow: isPassed
                          ? `0 0 24px ${option.color}50, 0 0 44px ${option.color}24`
                          : "none",
                      }}
                      aria-pressed={isSelected}
                      aria-label={option.label}
                    >
                      {isSelected && !shouldReduceMotion
                        ? Array.from({ length: 12 }).map((_, dotIndex) => {
                            const angle = (dotIndex / 12) * 2 * Math.PI
                            const x = Math.cos(angle) * 16
                            const y = Math.sin(angle) * 16

                            return (
                              <motion.span
                                key={`${option.id}-${dotIndex}`}
                                className="absolute h-1 w-1 rounded-full"
                                initial={{ opacity: 0, scale: 0.25, x, y }}
                                animate={{ opacity: 1, scale: 1, x, y }}
                                transition={{
                                  duration: 0.45,
                                  delay: dotIndex * 0.025,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                style={{
                                  left: "50%",
                                  top: "50%",
                                  backgroundColor: option.color,
                                }}
                              />
                            )
                          })
                        : null}
                    </button>
                    {index < serverBuildOptions.length - 1 ? (
                      <div
                        className={cn(
                          "w-14 rounded-full transition-all duration-300 sm:w-24",
                          index < 2 ? "h-1.5" : "h-2",
                        )}
                        style={{
                          background:
                            selectedIndex > index
                              ? `linear-gradient(to right, ${option.gradientFrom}, ${serverBuildOptions[index + 1].gradientTo})`
                              : "#6b7280",
                        }}
                      />
                    ) : null}
                  </div>
                )
              })}
            </div>
            <div className="mt-6 grid gap-3 text-center sm:grid-cols-4">
              {serverBuildOptions.map((option, index) => (
                <button
                  key={`${option.id}-label`}
                  type="button"
                  className="rounded-2xl px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    color: index <= selectedIndex ? option.color : "#94a3b8",
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <motion.div
            key={activeOption.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="glass-panel rounded-[1.5rem] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{activeOption.label}</Badge>
                <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                  Recommended profile
                </p>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-semibold text-white">
                {activeOption.capacity}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                {activeOption.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {activeOption.games.map((game) => (
                  <span
                    key={game}
                    className="rounded-full border border-border/60 bg-background/55 px-4 py-2 text-sm text-foreground/80"
                  >
                    {game}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                {activeOption.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/45 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-foreground/85">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-[1.5rem] p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                  Next action
                </p>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                Continue inside the console
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The selector helps frame your server profile. The actual intake, billing flow, and
                future support path belong inside the BurHan console.
              </p>
              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-sm text-foreground/80">
                  Orders and billing live in one place.
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-sm text-foreground/80">
                  Migration and rebuild requests stay close to operational context.
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 w-full justify-between">
                <a href={consoleUrl}>
                  Go to Console
                  <SquareTerminal className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </div>
    </Card>
  )
}
