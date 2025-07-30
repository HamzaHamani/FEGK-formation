import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes FEGK - Formation Continue Management Kénitra",
  description:
    "Découvrez notre catalogue complet de formations continues FEGK. Programmes MMS, MSMS et cursus spécialisés. Formation weekend hybride. Inscription ouverte.",
  keywords: [
    "programmes formation FEGK",
    "catalogue formations continues",
    "offre formation FEGK",
    "cursus FEGK",
    "formation continue management",
    "formations supérieures FEGK",
    "études supérieures Kénitra",
    "programmes universitaires Ibn Tofail",
    "formation professionnelle continue",
    "diplômes FEGK",
    "cursus formation continue",
    "offre pédagogique FEGK",
    // Program discovery keywords
    "choisir formation FEGK",
    "comparaison programmes FEGK",
    "orientation formation continue",
    "guide programmes FEGK",
    "formations diplômantes Maroc",
    "formation weekend Kénitra",
    "formation hybride FEGK",
    // General degree keywords without specific audit terms
    "licence master FEGK",
    "LSU MSU programmes",
    "formations spécialisées universitaires",
    "diplômes universitaires spécialisés",
    // University and location
    "Ibn Tofail programmes",
    "UIT formations",
    "Université Ibn Tofail Kenitra",
    "FEGK Ibn Tofail",
    "Faculté Économie Gestion Commerce",
    "Kenitra formations supérieures",
    "Rabat Sale Kenitra programmes",
    // Program names without competing keywords
    "programme MMS",
    "programme MSMS",
    "formation management stratégique",
    "formation marketing services",
    "management systèmes formation",
    // Modality keywords
    "formation continue weekend",
    "formation executive",
    "formation professionnelle supérieure",
    "études supérieures Maroc",
    "formation cadres dirigeants",
    "certification professionnelle",
    // Location keywords
    "programmes Kénitra université",
    "Rabat Sale Kénitra programmes",
    "formation continue Kenitra",
    "Maamora campus programmes",
    "programmes université Kénitra",
    // Quality and certification keywords
    "programmes accrédités",
    "formation qualifiante",
    "formation certifiante",
    "développement compétences",
    "reconversion professionnelle",
    "évolution carrière",
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
    url: "https://managementauditetqualite.com/programmes",
    siteName: "FEGK Ibn Tofail - Management, Audit et Qualité",
    title: "Programmes FEGK - Management Audit et Qualité",
    description:
      "Découvrez nos programmes FEGK : Licence et Master Management Marketing Services, Audit Qualité. Formation weekend hybride.",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Programmes FEGK - Management Audit et Qualité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmes FEGK - Management Audit et Qualité",
    description:
      "Découvrez nos programmes FEGK : Licence et Master Management Marketing Services, Audit Qualité. Formation weekend hybride.",
    images: ["/img1.jpg"],
  },
  alternates: {
    canonical: "https://managementauditetqualite.com/programmes",
  },
  other: {
    "facebook:page": "https://www.facebook.com/people/MUS-LUS/61578352602309/",
    "linkedin:company": "https://www.linkedin.com/company/108265562",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
