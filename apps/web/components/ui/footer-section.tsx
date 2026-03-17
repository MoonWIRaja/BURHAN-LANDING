"use client"

import React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { FrameIcon } from "lucide-react"

import { brandName, discordUrl } from "@/config/site"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterGroup {
  label: string
  links: FooterLink[]
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.369A19.736 19.736 0 0 0 15.885 3a13.34 13.34 0 0 0-.599 1.234 18.223 18.223 0 0 0-5.573 0A13.32 13.32 0 0 0 9.106 3a19.741 19.741 0 0 0-4.438 1.372C1.857 8.569 1.096 12.662 1.477 16.7a19.902 19.902 0 0 0 6.101 3.088 15.136 15.136 0 0 0 1.31-2.11 12.748 12.748 0 0 1-2.063-.993c.173-.127.343-.26.507-.398a14.266 14.266 0 0 0 12.166 0c.165.138.335.27.507.398a12.812 12.812 0 0 1-2.063.993 15.146 15.146 0 0 0 1.31 2.11 19.874 19.874 0 0 0 6.102-3.089c.456-4.684-.78-8.74-3.198-12.329ZM8.02 14.121c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.333-.946 2.418-2.157 2.418Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  )
}

const footerLinks: FooterGroup[] = [
  {
    label: "Company",
    links: [
      { title: "Home", href: "/" },
      { title: "Services", href: "/services" },
      { title: "FAQ", href: "/faq" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Product",
    links: [
      { title: "Hosting", href: "/hosting" },
      { title: "Cafe", href: "/services/cafe" },
      { title: "Web and Design Development", href: "/services/web-development" },
      { title: "Game Development", href: "/services/game-development" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Service FAQ", href: "/faq" },
      { title: "Support", href: "/contact" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Discord", href: discordUrl, icon: DiscordIcon },
    ],
  },
]

export function FooterSection() {
  return (
    <footer className="relative z-10 w-full rounded-t-[2rem] border-t border-white/10 bg-black px-6 py-12 pb-28 sm:rounded-t-[2.75rem] sm:pb-12 lg:py-16">
      <div className="bg-foreground/20 absolute left-1/2 right-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <FrameIcon className="size-8" />
          <p className="mt-2 text-sm text-muted-foreground">
            {`(c) ${new Date().getFullYear()} ${brandName}. All rights reserved.`}
          </p>
          <p className="max-w-sm text-sm text-muted-foreground/90">
            From gamers to gamers. Console-first hosting built for Malaysia.
          </p>
        </AnimatedContainer>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((group, index) => (
            <AnimatedContainer key={group.label} delay={0.1 + index * 0.08}>
              <div>
                <h3 className="text-xs tracking-[0.16em] text-foreground/90 uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.links.map((link) => {
                    const isExternal = link.href.startsWith("http")

                    return (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="inline-flex items-center transition-colors duration-300 hover:text-foreground"
                        >
                          {link.icon ? <link.icon className="me-1 size-4" /> : null}
                          {link.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

