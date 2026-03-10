"use client"

import React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react"

import { brandName, consoleUrl } from "@/config/site"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterGroup {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterGroup[] = [
  {
    label: "Product",
    links: [
      { title: "Home", href: "/" },
      { title: "Custom Plan", href: "/custom-plan" },
      { title: "FAQ", href: "/faq" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "Our Story", href: "/" },
      { title: "Trust Promise", href: "/faq" },
      { title: "Service FAQ", href: "/faq" },
      { title: "Contact Team", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Go to Console", href: consoleUrl },
      { title: "Custom Plan", href: "/custom-plan" },
      { title: "Hosting FAQ", href: "/faq" },
      { title: "Support", href: "/contact" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
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
                  {group.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="inline-flex items-center transition-colors duration-300 hover:text-foreground"
                      >
                        {link.icon ? <link.icon className="me-1 size-4" /> : null}
                        {link.title}
                      </a>
                    </li>
                  ))}
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

