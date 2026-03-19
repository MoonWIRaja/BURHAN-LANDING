import type { Metadata } from "next"
import Script from "next/script"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"

import "./globals.css"
import { MarketingShell } from "@/components/marketing/marketing-shell"
import { siteUrl } from "@/config/site"

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const siteDescription =
  "BurhanDev provides a multi-service ecosystem of hosting, design, and development engineered for bold digital growth."

const themeBootstrapScript = `
  (function() {
    var storageKey = 'burhandev-theme';
    var root = document.documentElement;
    var stored = localStorage.getItem(storageKey);
    var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'light' || stored === 'dark' ? stored : (systemPrefersDark ? 'dark' : 'light');
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  })();
`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BURHANDEV - Digital Journey",
    template: "%s | BURHANDEV",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BURHANDEV - Digital Journey",
    description: siteDescription,
    siteName: "BURHANDEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "BURHANDEV - Digital Journey",
    description: siteDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontSerif.variable} ${fontMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
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
        <MarketingShell>{children}</MarketingShell>
      </body>
    </html>
  )
}
