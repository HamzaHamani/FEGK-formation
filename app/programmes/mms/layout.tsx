import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Management Stratégique (MMS) | FEGK Ibn Tofail",
  description:
    "Formation MMS - Master Management Stratégique à la Faculté d'Économie, Gestion et Commerce (FEGK) de l'Université Ibn Tofail. Master spécialisé universitaire en management stratégique et gestion d'entreprise.",
  keywords: [
    "MMS",
    "Master Management Stratégique",
    "FEGK",
    "Ibn Tofail",
    "Université Ibn Tofail",
    "formation MMS",
    "master spécialisé universitaire",
    "MSU",
    "management stratégique",
    "gestion d'entreprise",
    "formation supérieure",
    "diplôme universitaire",
    "Kenitra",
    "Maroc",
    "formation management",
    "stratégie d'entreprise",
    "leadership",
    "gestion des ressources humaines",
    "finance d'entreprise",
    "marketing stratégique",
    "audit management",
    "qualité management",
    "certification professionnelle",
    "études supérieures",
    "master professionnel",
    "formation continue",
    "développement des compétences",
    "carrière management",
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
    url: "https://managementauditetqualite.com/programmes/mms",
    siteName: "FEGK Ibn Tofail - Management, Audit et Qualité",
    title: "Master Management Stratégique (MMS) | FEGK Ibn Tofail",
    description:
      "Formation MMS - Master Management Stratégique à la Faculté d'Économie, Gestion et Commerce (FEGK) de l'Université Ibn Tofail. Master spécialisé universitaire en management stratégique.",
    images: [
      {
        url: "https://managementauditetqualite.com/hero.webp",
        width: 1200,
        height: 630,
        alt: "Master Management Stratégique MMS - FEGK Ibn Tofail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Management Stratégique (MMS) | FEGK Ibn Tofail",
    description:
      "Formation MMS - Master Management Stratégique à la FEGK Ibn Tofail. Master spécialisé universitaire en management stratégique et gestion d'entreprise.",
    images: ["https://managementauditetqualite.com/hero.webp"],
  },
  alternates: {
    canonical: "https://managementauditetqualite.com/programmes/mms",
  },
};

export default function MMSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
