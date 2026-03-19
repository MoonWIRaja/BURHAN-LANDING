"use client"

import { useTheme } from "@/components/marketing/use-theme"

export function HeroShapeComposition() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  const outlinedShapeStyle = isDarkTheme
    ? {
        borderColor: "rgba(255, 255, 255, 0.12)",
        backgroundColor: "transparent",
        boxShadow: "none",
      }
    : {
        borderColor: "#71717a",
        backgroundColor: "rgba(228, 228, 231, 0.92)",
        boxShadow: "0 14px 36px rgba(0, 0, 0, 0.14)",
      }

  return (
    <div className="relative h-[420px] w-full sm:h-[500px]">
      <div className="dot-grid absolute inset-0 opacity-20 dark:opacity-10" />
      <div className="absolute right-4 top-8 h-10 w-36 rotate-12 rounded-full bg-primary shadow-[0_20px_50px_rgba(255,0,0,0.28)] sm:right-10 sm:h-14 sm:w-44" />
      <div className="absolute right-20 top-20 h-16 w-16 rounded-full bg-primary shadow-[0_14px_40px_rgba(255,0,0,0.24)] sm:right-32 sm:h-24 sm:w-24" />
      <div className="absolute right-4 top-36 h-20 w-10 rounded-full bg-primary shadow-[0_14px_40px_rgba(255,0,0,0.24)] sm:right-6 sm:h-32 sm:w-16" />
      <div className="absolute bottom-16 left-6 h-20 w-20 -rotate-12 rounded-[2rem] border border-black/5 bg-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:border-white/5 dark:bg-zinc-900 sm:h-32 sm:w-32 sm:rounded-[3rem]" />
      <div className="absolute bottom-10 left-24 h-12 w-32 rounded-full border border-black/5 bg-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:border-white/5 dark:bg-zinc-900 sm:left-32 sm:h-20 sm:w-48" />
      <div
        className="absolute left-1/2 top-1/2 z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border-[3px] sm:h-64 sm:w-64 sm:rounded-[2.5rem]"
        style={outlinedShapeStyle}
      />
      <div
        className="absolute left-12 top-16 z-10 h-20 w-20 rounded-full border-[3px] sm:left-24 sm:top-24 sm:h-28 sm:w-28"
        style={outlinedShapeStyle}
      />
      <div className="absolute left-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-[1.5rem] bg-black/[0.04] blur-2xl dark:bg-white/[0.06]" />
    </div>
  )
}
