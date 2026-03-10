"use client"

import * as React from "react"
import { createNoise3D } from "simplex-noise"

import { cn } from "@/lib/utils"

type WavyBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
}

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const animationRef = React.useRef<number>(0)
  const noiseRef = React.useRef(createNoise3D())
  const [isSafari, setIsSafari] = React.useState(false)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      return
    }

    const waveColors = colors ?? ["#38bdf8", "#22d3ee", "#14b8a6", "#0ea5e9", "#f59e0b"]
    const speedValue =
      speed === "slow"
        ? 0.001
        : speed === "fast"
          ? 0.002
          : 0.001
    let width = 0
    let height = 0
    let noiseTime = 0

    const resize = () => {
      width = ctx.canvas.width = window.innerWidth
      height = ctx.canvas.height = window.innerHeight
      ctx.filter = `blur(${blur}px)`
    }

    const drawWave = (count: number) => {
      noiseTime += speedValue

      for (let i = 0; i < count; i += 1) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth || 50
        ctx.strokeStyle = waveColors[i % waveColors.length]

        for (let x = 0; x < width; x += 5) {
          const y = noiseRef.current(x / 800, 0.3 * i, noiseTime) * 100
          ctx.lineTo(x, y + height * 0.5)
        }

        ctx.stroke()
        ctx.closePath()
      }
    }

    const render = () => {
      ctx.fillStyle = backgroundFill || "black"
      ctx.globalAlpha = waveOpacity || 0.5
      ctx.fillRect(0, 0, width, height)
      drawWave(5)
      animationRef.current = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener("resize", resize)
    render()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [backgroundFill, blur, colors, speed, waveOpacity, waveWidth])

  React.useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome"),
    )
  }, [])

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        containerClassName,
      )}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 z-0"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  )
}
