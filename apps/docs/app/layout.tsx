import type { Metadata } from "next"
import { Manrope, Space_Grotesk } from "next/font/google"

import "./globals.css"

const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "BurHan Hosting Docs",
  description: "Docs workspace placeholder for BurHan Hosting.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontHeading.variable}`}>
      <body>{children}</body>
    </html>
  )
}
