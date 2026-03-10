"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { WavyBackground } from "@/components/ui/wavy-background"

interface IconProps {
  id: number
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  className: string
}

export interface FloatingIconsHeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  icons: IconProps[]
}

type ConsoleLine = {
  text: string
  success?: boolean
}

const consoleLines: ConsoleLine[] = [
  { text: "Initializing Your Server..." },
  { text: "Loading Only Malaysia..." },
  { text: "Connecting to BURHANDEV..." },
  { text: "Welcome, Gamers!", success: true },
]

type IconPosition = {
  left: number
  top: number
}

type RectBounds = {
  left: number
  top: number
  right: number
  bottom: number
}

function toLocalRect(rect: DOMRect, containerRect: DOMRect): RectBounds {
  return {
    left: rect.left - containerRect.left,
    top: rect.top - containerRect.top,
    right: rect.right - containerRect.left,
    bottom: rect.bottom - containerRect.top,
  }
}

function expandRect(
  rect: RectBounds,
  padding: number,
  maxWidth: number,
  maxHeight: number,
): RectBounds {
  return {
    left: Math.max(0, rect.left - padding),
    top: Math.max(0, rect.top - padding),
    right: Math.min(maxWidth, rect.right + padding),
    bottom: Math.min(maxHeight, rect.bottom + padding),
  }
}

function intersects(a: RectBounds, b: RectBounds) {
  return !(
    a.right <= b.left ||
    a.left >= b.right ||
    a.bottom <= b.top ||
    a.top >= b.bottom
  )
}

const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
  position,
}: {
  mouseX: React.MutableRefObject<number>
  mouseY: React.MutableRefObject<number>
  iconData: IconProps
  index: number
  position: IconPosition
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (!ref.current) {
        return
      }

      const rect = ref.current.getBoundingClientRect()
      const distance = Math.sqrt(
        Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
          Math.pow(mouseY.current - (rect.top + rect.height / 2), 2),
      )

      if (distance < 150) {
        const angle = Math.atan2(
          mouseY.current - (rect.top + rect.height / 2),
          mouseX.current - (rect.left + rect.width / 2),
        )
        const force = (1 - distance / 150) * 50
        x.set(-Math.cos(angle) * force)
        y.set(-Math.sin(angle) * force)
        return
      }

      x.set(0)
      y.set(0)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, x, y])

  return (
    <motion.div
      ref={ref}
      style={{
        left: position.left,
        top: position.top,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute", iconData.className)}
    >
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-3xl border border-border/30 bg-card/80 p-3 shadow-xl backdrop-blur-md md:h-20 md:w-20"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + (index % 5),
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <iconData.icon className="h-8 w-8 text-foreground md:h-10 md:w-10" />
      </motion.div>
    </motion.div>
  )
}

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, ...props }, ref) => {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const badgeRef = React.useRef<HTMLDivElement>(null)
  const consoleRef = React.useRef<HTMLDivElement>(null)
  const ctaRef = React.useRef<HTMLDivElement>(null)
  const mouseX = React.useRef(0)
  const mouseY = React.useRef(0)
  const [typedSubtitle, setTypedSubtitle] = React.useState("")
  const [iconPositions, setIconPositions] = React.useState<IconPosition[]>([])

  const setSectionRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      sectionRef.current = node

      if (typeof ref === "function") {
        ref(node)
        return
      }

      if (ref) {
        ref.current = node
      }
    },
    [ref],
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX
    mouseY.current = event.clientY
  }

  React.useEffect(() => {
    setTypedSubtitle("")
    let index = 0

    const interval = window.setInterval(() => {
      index += 1
      setTypedSubtitle(subtitle.slice(0, index))

      if (index >= subtitle.length) {
        window.clearInterval(interval)
      }
    }, 42)

    return () => window.clearInterval(interval)
  }, [subtitle])

  const generateIconPositions = React.useCallback(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const sectionRect = section.getBoundingClientRect()

    if (!sectionRect.width || !sectionRect.height) {
      return
    }

    const iconSize = window.innerWidth >= 768 ? 80 : 64
    const edgePadding = window.innerWidth >= 1024 ? 24 : 16
    const iconGap = 20
    const maxLeft = Math.max(edgePadding, sectionRect.width - iconSize - edgePadding)
    const maxTop = Math.max(edgePadding, sectionRect.height - iconSize - edgePadding)
    const forbiddenRects: RectBounds[] = []

    const pushSafeRect = (element: Element | null, padding: number) => {
      if (!(element instanceof HTMLElement)) {
        return
      }

      const rect = element.getBoundingClientRect()

      if (!rect.width || !rect.height) {
        return
      }

      forbiddenRects.push(
        expandRect(toLocalRect(rect, sectionRect), padding, sectionRect.width, sectionRect.height),
      )
    }

    pushSafeRect(document.querySelector("[data-site-navbar]"), 20)
    pushSafeRect(badgeRef.current, 26)
    pushSafeRect(consoleRef.current, 26)
    pushSafeRect(ctaRef.current, 26)

    const nextPositions: IconPosition[] = []
    const placedRects: RectBounds[] = []

    icons.forEach(() => {
      let placedRect: RectBounds | null = null

      for (let attempt = 0; attempt < 1200; attempt += 1) {
        const left =
          edgePadding + Math.random() * Math.max(1, maxLeft - edgePadding)
        const top =
          edgePadding + Math.random() * Math.max(1, maxTop - edgePadding)
        const candidate: RectBounds = {
          left,
          top,
          right: left + iconSize,
          bottom: top + iconSize,
        }

        const paddedCandidate = expandRect(
          candidate,
          iconGap,
          sectionRect.width,
          sectionRect.height,
        )

        if (forbiddenRects.some((rect) => intersects(candidate, rect))) {
          continue
        }

        if (placedRects.some((rect) => intersects(paddedCandidate, rect))) {
          continue
        }

        placedRect = candidate
        placedRects.push(candidate)
        nextPositions.push({ left, top })
        break
      }

      if (!placedRect) {
        nextPositions.push({
          left: edgePadding,
          top: edgePadding,
        })
      }
    })

    setIconPositions(nextPositions)
  }, [icons])

  React.useEffect(() => {
    generateIconPositions()

    const resizeObserver = new ResizeObserver(() => {
      generateIconPositions()
    })

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current)
    }

    if (badgeRef.current) {
      resizeObserver.observe(badgeRef.current)
    }

    if (consoleRef.current) {
      resizeObserver.observe(consoleRef.current)
    }

    if (ctaRef.current) {
      resizeObserver.observe(ctaRef.current)
    }

    window.addEventListener("resize", generateIconPositions)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", generateIconPositions)
    }
  }, [generateIconPositions])

  return (
    <section
      ref={setSectionRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden bg-background",
        className,
      )}
      {...props}
    >
      <WavyBackground
        containerClassName="pointer-events-none absolute inset-0"
        backgroundFill="#000000"
        blur={14}
        speed="fast"
        waveOpacity={0.3}
        waveWidth={72}
        colors={["#ffffff", "#f8fafc", "#ef4444", "#dc2626", "#ffffff"]}
      />
      <div className="absolute inset-0 z-0 h-full w-full">
        {icons.map((iconData, index) => (
          iconPositions[index] ? (
            <Icon
              key={iconData.id}
              mouseX={mouseX}
              mouseY={mouseY}
              iconData={iconData}
              index={index}
              position={iconPositions[index]}
            />
          ) : null
        ))}
      </div>

      <div className="relative z-10 w-full px-4 pt-28 text-center sm:px-6 sm:pt-32 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div ref={badgeRef}>
            <HoverBorderGradient
              as="div"
              containerClassName="mx-auto"
              className="text-sm font-semibold tracking-[0.32em] uppercase"
            >
              BURHANDEV
            </HoverBorderGradient>
          </div>
          <h1 className="sr-only">{title}</h1>
          <motion.div
            ref={consoleRef}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 w-[46rem] max-w-full"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-black/70 text-left shadow-[0_30px_100px_-30px_rgba(239,68,68,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium tracking-[0.28em] text-white/55 uppercase">
                  burhan.my
                </span>
              </div>
              <div className="space-y-3 px-5 py-5 font-mono text-sm text-white/85 md:px-6 md:py-6 md:text-base">
                {consoleLines.map((line, index) => (
                  <motion.div
                    key={line.text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.12 + index * 0.12,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn("flex items-center gap-2", line.success && "text-emerald-300")}
                  >
                    <span className="text-red-400">$</span>
                    <span>{line.text}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.62,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center overflow-hidden whitespace-nowrap text-white/75"
                >
                  <span className="mr-2 shrink-0 text-red-400">$</span>
                  <span className="inline-flex items-center whitespace-nowrap">
                    <span>{typedSubtitle}</span>
                    <motion.span
                      className="ml-1 inline-flex h-5 w-0.5 shrink-0 rounded-sm bg-white/90 align-middle"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.9,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="mt-10 flex w-[46rem] max-w-full justify-center">
            <span ref={ctaRef} className="inline-flex">
              <InteractiveHoverButton
                href={ctaHref}
                text={ctaText}
                className="h-14 w-[15.5rem] border-white/12 bg-black/55 px-4 text-sm font-semibold text-white shadow-[0_18px_50px_-30px_rgba(239,68,68,0.75)] backdrop-blur-xl"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
})

FloatingIconsHero.displayName = "FloatingIconsHero"

export { FloatingIconsHero }
