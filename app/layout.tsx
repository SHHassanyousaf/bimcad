import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BIMCAD Engineering Partners | CAD & BIM Solutions",
  description: "High-quality CAD drafting and BIM solutions for infrastructure projects, roads, and highways.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tawk.to script bilkul theek hai, isay rehne dein */}
        <script
          id="tawk-script"
          async
          src="https://embed.tawk.to/690ce703e26cec195ecd8a70/1j9d6cppm"
          charSet="UTF-8"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}