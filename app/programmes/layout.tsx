import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes FEGK - Management Audit et Qualité Kénitra",
  description:
    "Découvrez nos programmes FEGK : Licence et Master Management Marketing Services, Audit Qualité. Formation weekend hybride. Inscription ouverte.",
  keywords: [
    "programmes formation FEGK",
    "formation continue programmes",
    "licence management FEGK",
    "master management FEGK",
    "formation marketing services",
    "formation audit qualité",
    "programmes FEGK Kénitra",
    "cursus formation continue",
    "diplômes management Maroc",
    "formation professionnelle FEGK",
    "études supérieures continue",
    "formation cadres management",
    // Specific program keywords
    "MMS programme",
    "MSMS programme",
    "Master Management Stratégique",
    "Master Management Systèmes",
    "Licence Audit Qualité",
    "Master Audit Qualité",
    // University keywords
    "Ibn Tofail programmes",
    "UIT formations",
    "Université Ibn Tofail Kenitra",
    "FEGK Ibn Tofail",
    "Faculté Économie Gestion Commerce",
    // Degree type keywords
    "LU programme",
    "LSU programme",
    "MSU programme",
    "MUS programme",
    "licence spécialisée universitaire",
    "master spécialisé universitaire",
    "licence universitaire programmes",
    "master universitaire spécialisé",
    // Formation modality keywords
    "formation weekend",
    "formation hybride",
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
