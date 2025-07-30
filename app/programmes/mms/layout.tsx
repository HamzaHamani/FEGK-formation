import { Metadata } from "next";

export const metadata: Metadata = {
  title: "License en Management et Marketing des Services",
  description:
    "Formation MMS - License Management et Marketing des Services FEGK. License spécialisée universitaire. Formation weekend hybride. Université Ibn Tofail.",
  keywords: [
    "MMS",
    "License en Management et Marketing des Services",
    "FEGK",
    "Ibn Tofail",
    "Université Ibn Tofail",
    "formation MMS",
    "master spécialisé universitaire",
    "MSU",
    "management des services",
    "marketing des services",
    "gestion des services",
    "formation supérieure",
    "diplôme universitaire",
    "Kenitra",
    "Maroc",
    "marketing stratégique",
    "relation client",
    "service client",
    "innovation services",
    "management par processus",
    "amélioration continue",
    "qualité service",
    "satisfaction client",
    "expérience client",
    "marketing digital",
    "communication services",
    "études supérieures",
    "master professionnel",
    "formation continue",
    "développement commercial",
    "management opérationnel",
    "certification professionnelle",
    "secteur tertiaire",
    "économie des services",
    "entrepreneuriat services",
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
    title: "Master Management Marketing Services (MMS) - FEGK Ibn Tofail",
    description:
      "Formation MMS - Master Management Marketing Services à FEGK. Master spécialisé universitaire en management et marketing des services.",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Master Management Marketing Services MMS - FEGK Ibn Tofail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Management Marketing Services (MMS) - FEGK Ibn Tofail",
    description:
      "Formation MMS - Master Management Marketing Services à FEGK. Master spécialisé universitaire en management et marketing des services.",
    images: ["/img1.jpg"],
  },
  alternates: {
    canonical: "https://managementauditetqualite.com/programmes/mms",
  },
  other: {
    "facebook:page": "https://www.facebook.com/people/MUS-LUS/61578352602309/",
    "linkedin:company": "https://www.linkedin.com/company/108265562",
  },
};

export default function MMSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
