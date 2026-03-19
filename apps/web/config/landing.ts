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
    title: "7 years of innovation",
    description:
      "Pushing boundaries since 2017. We have built digital solutions that evolve with the needs of modern teams.",
    icon: Sparkles,
  },
  {
    title: "Trusted expertise",
    description:
      "Delivering high-stakes digital infrastructure globally. Years of hands-on experience and client insights.",
    icon: Globe,
  },
  {
    title: "Path to success",
    description:
      "Strategic roadmaps to scale your business. Innovation and dedication shaped to consistently deliver satisfaction.",
    icon: Compass,
  },
]

export const landingStoryItems: LandingStoryItem[] = [
  {
    yearLabel: "2017: The Hosting Era",
    title: "2017: The Hosting Era",
    description:
      "Our journey began with a mission to provide ultra-low latency game servers for the digital nomad and professional gamer.",
    quote: 'We thought: "Digital performance should not be a luxury."',
    accent: "primary",
    visual: "corridor",
  },
  {
    yearLabel: "The Creative Revolution",
    title: "The Creative Revolution",
    description:
      "We did not just stop at hosting. We evolved into a multi-disciplinary studio handling everything from high-performance infrastructure to cinematic 3D experiences.",
    quote: "Why? Because your digital presence deserves better than bland solutions.",
    accent: "default",
    visual: "globe",
  },
  {
    yearLabel: "Today: A 3D Powerhouse",
    title: "Today: A 3D Powerhouse",
    description:
      "With BURHAN HOSTING, CAFE, DESIGN, and DEVS, we are now a complete ecosystem of digital excellence, serving clients globally.",
    quote: "Go bold, go digital, and build like you mean it.",
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
    href: "/contact?service=cafe&sourcePage=/",
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
