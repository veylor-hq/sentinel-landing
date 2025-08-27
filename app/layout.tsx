import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sentinel - Personal Operations Platform",
  description: "The Personal Operations Platform. Awareness. Accountability. Adaptability.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <script defer src="https://umami.ihorsavenko.com/script.js" data-website-id="dc5ffc59-d750-48d0-9d44-e1b5b0815549"></script>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
