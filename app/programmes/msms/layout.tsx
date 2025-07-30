import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masteren Management Stratégique et Marketing des Services ",
  description:
    "Formation MSMS - Master Management Stratégique et Marketing des Services FEGK. Master spécialisé universitaire. Formation weekend. Université Ibn Tofail.",
  keywords: [
    "MSMS",
    "Master Management et Systèmes",
    "FEGK",
    "Ibn Tofail",
    "Université Ibn Tofail",
    "formation MSMS",
    "master spécialisé universitaire",
    "MSU",
    "management des systèmes",
    "audit qualité",
    "systèmes de gestion",
    "formation supérieure",
    "diplôme universitaire",
    "Kenitra",
    "Maroc",
    "audit interne",
    "qualité totale",
    "ISO 9001",
    "certification qualité",
    "management par processus",
    "amélioration continue",
    "contrôle qualité",
    "audit financier",
    "audit opérationnel",
    "risk management",
    "gouvernance d'entreprise",
    "études supérieures",
    "master professionnel",
    "formation continue",
    "systèmes d'information",
    "management intégré",
    "certification professionnelle",
  ],
  authors: [{ name: "FEGK Ibn Tofail" }],
  creator: "Faculté d'Économie, Gestion et Commerce - Université Ibn Tofail",
  publisher: "FEGK Ibn Tofail",
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
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://managementauditetqualite.com/programmes/msms",
    siteName: "FEGK Ibn Tofail - Management, Audit et Qualité",
    title: "Master Management et Systèmes (MSMS) | FEGK Ibn Tofail",
    description:
      "Formation MSMS - Master Management et Systèmes à la Faculté d'Économie, Gestion et Commerce (FEGK) de l'Université Ibn Tofail. Master spécialisé universitaire en management des systèmes.",
    images: [
      {
        url: "https://managementauditetqualite.com/hero.webp",
        width: 1200,
        height: 630,
        alt: "Master Management et Systèmes MSMS - FEGK Ibn Tofail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Management et Systèmes (MSMS) | FEGK Ibn Tofail",
    description:
      "Formation MSMS - Master Management et Systèmes à la FEGK Ibn Tofail. Master spécialisé universitaire en management des systèmes et audit qualité.",
    images: ["https://managementauditetqualite.com/hero.webp"],
  },
  alternates: {
    canonical: "https://managementauditetqualite.com/programmes/msms",
  },
};

export default function MSMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
