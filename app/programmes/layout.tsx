import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Programmes de Formation Continue FEGK - Management, Marketing & Audit",
  description:
    "Découvrez tous nos programmes de formation continue FEGK : Licence et Master en Management Marketing Services, Audit Qualité. Formation weekend, hybride. Université Ibn Tofail Kénitra.",
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
  ],
  alternates: {
    canonical: "https://managementauditetqualite.com/programmes",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
