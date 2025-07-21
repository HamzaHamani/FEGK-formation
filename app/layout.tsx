import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Navigation from "@/components/navigation"
import NavigationSpacer from "@/components/navigation-spacer"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
})

const tiemposHeadline = localFont({
  src: [
    {
      path: "../public/font/Tiempos-Font/TiemposHeadline-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Tiempos-Font/TiemposHeadline-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tiempos-headline",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Formation Continue - Université Ibn Tofail",
  description:
    "Programmes de formation continue en Management et Marketing des Services à la Faculté d'Économie et de Gestion de l'Université Ibn Tofail, Kénitra.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${sourceSerif.variable} ${tiemposHeadline.variable}`}>
      <body className={sourceSerif.className}>
        <Navigation />
        <NavigationSpacer />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
