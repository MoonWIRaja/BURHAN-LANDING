import { Cloud, Coffee, Code2, Compass, Globe, Palette, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface LandingNavLink {
  label: string
  href: string
}

export interface LandingFeatureStripItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export interface LandingAboutCard {
  title: string
  description: string
  icon: LucideIcon
}

export interface LandingStoryItem {
  yearLabel: string
  title: string
  description: string
  descriptionLinkLabel?: string
  descriptionLinkHref?: string
  descriptionAfterLink?: string
  quote?: string
  accent?: "primary" | "default"
  visual: "corridor" | "globe" | "cube"
  imageSrc?: string
}

export interface LandingServiceCard {
  title: string
  description: string
  href: string
  visual: "hosting" | "cafe" | "design" | "devs"
  imageSrc?: string
}

export interface LandingSocialLink {
  label: string
  href: string
}

export const landingNavLinks: LandingNavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Our Story", href: "#story" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
]

export const landingFeatureStripItems: LandingFeatureStripItem[] = [
  {
    title: "BURHAN HOSTING",
    description: "High-performance infrastructure solutions.",
    href: "/hosting",
    icon: Cloud,
  },
  {
    title: "BURHAN DEVS",
    description: "Expert full-stack engineering services.",
    href: "/services/web-development",
    icon: Code2,
  },
  {
    title: "BURHAN DESIGN",
    description: "Next-gen visuals and brand identity.",
    href: "/services/web-development",
    icon: Palette,
  },
  {
    title: "BURHAN CAFE",
    description: "Tech-centric community creative spaces.",
    href: "/services/cafe",
    icon: Coffee,
  },
]

export const landingAboutCards: LandingAboutCard[] = [
  {
    title: "4 YOUNG MINDS",
    description:
      "Inspired by four young minds, BurhanDev was created to deliver better, more meaningful services for Malaysians.",
    icon: Sparkles,
  },
  {
    title: "AFFORDABLE PRICING",
    description:
      "BurhanDev believes better services should stay accessible, with pricing that feels fair for Malaysians.",
    icon: Globe,
  },
  {
    title: "BUILT FOR MALAYSIA",
    description:
      "Made for Malaysia, our services are built to be friendly, stable, and high-quality for real local needs.",
    icon: Compass,
  },
]

export const landingStoryItems: LandingStoryItem[] = [
  {
    yearLabel: "2023: The Beginning of Game Hosting",
    title: "2023: The Beginning of Game Hosting",
    description:
      "The idea began with one of the four teenagers who wanted to build a game hosting service. Even without experience, he kept learning, experimenting with local hosting, and exploring more about servers.",
    quote:
      "Why? Overseas hosting often felt laggy, and it kept taking away the fun of playing.",
    accent: "primary",
    visual: "corridor",
  },
  {
    yearLabel: "2025: The First Step",
    title: "2025: The First Step",
    description:
      "After nearly two years of holding onto the idea and facing every possibility, from being deceived to being left behind by old friends, we found each other and started a community called ",
    descriptionLinkLabel: "BURHAN BISTRO",
    descriptionLinkHref: "https://discord.burhan.my",
    descriptionAfterLink:
      " for gamers to play together in Minecraft servers and beyond.",
    quote:
      "Why? Profit was never our main focus. We simply loved seeing every user and every player feel happy and enjoy the game.",
    accent: "default",
    visual: "globe",
  },
  {
    yearLabel: "04.03.2026: The Birth of BURHAN HOSTING",
    title: "04.03.2026: The Birth of BURHAN HOSTING",
    description:
      "After years of planning every detail, our first service was finally born. BURHAN HOSTING arrived with very affordable pricing, an easy-to-use experience, and a team ready to serve.",
    quote:
      "With a promise to deliver friendly, stable, and high-quality services for all Malaysians.",
    accent: "primary",
    visual: "cube",
  },
]

export const landingServiceCards: LandingServiceCard[] = [
  {
    title: "BURHAN HOSTING",
    description: "Ultra-low latency infrastructure for mission-critical applications and gaming.",
    href: "/hosting",
    visual: "hosting",
  },
  {
    title: "BURHAN CAFE",
    description: "Physical community spaces for digital creators and tech enthusiasts globally.",
    href: "https://discord.burhan.my",
    visual: "cafe",
  },
  {
    title: "BURHAN DESIGN",
    description: "Award-winning 3D visuals and immersive digital experience design.",
    href: "/contact?service=web-development&sourcePage=/",
    visual: "design",
  },
  {
    title: "BURHAN DEVS",
    description: "Full-stack engineering specializing in complex web and app ecosystems.",
    href: "/contact?service=web-development&sourcePage=/",
    visual: "devs",
  },
]

export const landingSocialLinks: LandingSocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Tiktok", href: "#" },
  { label: "LinkedIn", href: "#" },
]
