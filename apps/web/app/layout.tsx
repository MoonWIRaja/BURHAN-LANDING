import type { Metadata } from "next"
import Script from "next/script"
import { Manrope, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteNavbar } from "@/components/site-navbar"
import { siteUrl } from "@/config/site"

const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const siteDescription =
  "Premium multi-game server hosting with custom builds, console-first operations, and launch-ready infrastructure."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BurHan Hosting",
    template: "%s | BurHan Hosting",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BurHan Hosting",
    description: siteDescription,
    siteName: "BurHan Hosting",
  },
  twitter: {
    card: "summary_large_image",
    title: "BurHan Hosting",
    description: siteDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontHeading.variable} antialiased`}>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/@react-grab/codex/dist/client.global.js"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body>
        <div className="site-shell">
          <div className="site-aura" />
          <SiteNavbar />
          <main className="relative z-10 flex-1 pb-20 sm:pb-16">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
