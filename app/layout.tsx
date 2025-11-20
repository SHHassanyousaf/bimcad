import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import CursorGlow from "@/components/CursorGlow"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VEP - Vertices Engineering Partners | CAD & BIM Solutions",
  description: "High-quality CAD drafting and BIM solutions for infrastructure projects, roads, and highways.",
}

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`font-sans antialiased`}>
        {/* <CursorGlow /> */}
        <div className="page-transition">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}