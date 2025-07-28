import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/navigation";
import NavigationSpacer from "@/components/navigation-spacer";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

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
});

export const metadata: Metadata = {
  title: {
    default:
      "Management Audit et Qualité - Formation Continue FEGK Université Ibn Tofail",
    template: "%s | Management Audit et Qualité",
  },
  description:
    "Formation continue en Management, Audit et Qualité à FEGK Kénitra : Licence et Master en Management et Marketing des Services, Management Audit Qualité. Université Ibn Tofail. Formation weekend, hybride.",
  keywords: [
    "management audit et qualité",
    "formation management audit qualité",
    "audit et qualité formation",
    "management qualité formation",
    "FEGK formation",
    "formation continue",
    "formation continue FEGK",
    "management formation",
    "audit formation",
    "qualité formation",
    "marketing formation",
    "formation professionnelle Maroc",
    "Université Ibn Tofail",
    "FEGK Kénitra",
    "licence management",
    "master management",
    "formation audit qualité",
    "marketing des services",
    "formation continue Maroc",
    "formation weekend",
    "formation hybride",
    "inscription formation",
    "formation certifiante",
    "développement professionnel",
    "formation cadres",
    "économie gestion Kénitra",
    "audit qualité industrie",
    "management stratégique formation",
    "certification qualité",
    // University-specific keywords
    "Ibn Tofail University",
    "Université Ibn Tofail Kenitra",
    "UIT",
    "FEGK Ibn Tofail",
    "Faculté Économie Gestion Commerce",
    "Kenitra Morocco",
    "Rabat Sale Kenitra",
    // Degree-specific keywords
    "LU",
    "LSU",
    "MSU",
    "MUS",
    "licence spécialisée universitaire",
    "master spécialisé universitaire",
    "licence universitaire",
    "master universitaire spécialisé",
    "diplôme universitaire",
    "formation supérieure Maroc",
    "études supérieures",
    // Formation-specific keywords
    "MMS formation",
    "MSMS formation",
    "Master Management Stratégique",
    "Master Management Systèmes",
    "formation MMS",
    "formation MSMS",
    "audit interne formation",
    "contrôle qualité formation",
    "ISO 9001 formation",
    "certification professionnelle Maroc",
    "formation continue cadres",
    "formation executive",
    "formation professionnelle supérieure",
  ],
  authors: [{ name: "Faculté d'Économie et de Gestion - Kénitra" }],
  creator: "FEGK - Université Ibn Tofail",
  publisher: "Université Ibn Tofail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://managementauditetqualite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Management Audit et Qualité - Formation Continue FEGK",
    description:
      "Formation continue en Management, Audit et Qualité : Licence et Master FEGK. Inscription ouverte.",
    url: "https://managementauditetqualite.com",
    siteName: "Management Audit et Qualité - FEGK",
    images: [
      {
        url: "/LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "FEGK Formation Continue",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Management Audit et Qualité - Formation Continue FEGK",
    description:
      "Formation continue en Management, Audit et Qualité à FEGK Kénitra",
    images: ["/LOGO.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${sourceSerif.variable} ${tiemposHeadline.variable}`}
    >
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C09ZNX9DGG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C09ZNX9DGG');
          `}
        </Script>
      </head>
      <body className={sourceSerif.className}>
        <Navigation />
        <NavigationSpacer />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
