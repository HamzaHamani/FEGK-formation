import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Serif_4 } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
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
    <html lang="fr" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <body className={sourceSerif.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
