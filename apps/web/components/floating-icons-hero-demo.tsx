"use client"

import type * as React from "react"

import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section"
import { consoleUrl } from "@/config/site"

type AppIconOptions = {
  background?: string
  padding?: number
  preserveAspectRatio?: string
}

const createGameAppIcon = (
  src: string,
  {
    background = "transparent",
    padding = 0,
    preserveAspectRatio = "xMidYMid meet",
  }: AppIconOptions = {},
) => {
  const Icon = (props: React.SVGProps<SVGSVGElement>) => {
    const size = 24 - padding * 2

    return (
      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {background !== "transparent" ? (
          <rect x="0" y="0" width="24" height="24" rx="5" fill={background} />
        ) : null}
        <image
          href={src}
          x={padding}
          y={padding}
          width={size}
          height={size}
          preserveAspectRatio={preserveAspectRatio}
        />
      </svg>
    )
  }

  return Icon
}

const IconMinecraft = createGameAppIcon("/game-icons/minecraft.jpg")
const IconFiveM = createGameAppIcon("/game-icons/fivem.png", {
  background: "#101827",
  padding: 2,
})
const IconProjectZomboid = createGameAppIcon("/game-icons/project-zomboid.jpg")
const IconRust = createGameAppIcon("/game-icons/rust.jpg")
const IconPalworld = createGameAppIcon("/game-icons/palworld.jpg")
const IconArk = createGameAppIcon("/game-icons/ark.jpg")
const IconValheim = createGameAppIcon("/game-icons/valheim.jpg")
const IconTerraria = createGameAppIcon("/game-icons/terraria.jpg")
const IconCs2 = createGameAppIcon("/game-icons/cs2.jpg")
const IconUnturned = createGameAppIcon("/game-icons/unturned.jpg")
const IconSatisfactory = createGameAppIcon("/game-icons/satisfactory.jpg")
const IconDayZ = createGameAppIcon("/game-icons/dayz.jpg")

const demoIcons: FloatingIconsHeroProps["icons"] = [
  { id: 1, icon: IconMinecraft, className: "hidden lg:block" },
  { id: 2, icon: IconFiveM, className: "hidden lg:block" },
  { id: 3, icon: IconProjectZomboid, className: "hidden lg:block" },
  { id: 4, icon: IconRust, className: "hidden lg:block" },
  { id: 5, icon: IconPalworld, className: "hidden lg:block" },
  { id: 6, icon: IconArk, className: "hidden lg:block" },
  { id: 7, icon: IconValheim, className: "hidden lg:block" },
  { id: 8, icon: IconTerraria, className: "hidden lg:block" },
  { id: 9, icon: IconCs2, className: "hidden lg:block" },
  { id: 10, icon: IconUnturned, className: "hidden lg:block" },
  { id: 11, icon: IconSatisfactory, className: "hidden lg:block" },
  { id: 12, icon: IconDayZ, className: "hidden lg:block" },
]

export function FloatingIconsHeroDemo() {
  return (
    <FloatingIconsHero
      title="Custom game server hosting built for real operator workloads."
      subtitle="Launch Minecraft, FiveM, Project Zomboid, Rust with us... Let's get started!"
      ctaText="Go to Console"
      ctaHref={consoleUrl}
      icons={demoIcons}
    />
  )
}
