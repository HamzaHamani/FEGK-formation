import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licence en Management Audit et Qualité  ",
  description:
    "Licence Management Audit et Qualité FEGK. Formation LSU en audit et contrôle qualité. Formation weekend. Université Ibn Tofail Kénitra.",
  keywords: [
    "Licence Audit Qualité",
    "LU",
    "LSU",
    "Licence spécialisée universitaire",
    "FEGK",
    "Ibn Tofail",
    "Université Ibn Tofail",
    "formation audit",
    "formation qualité",
    "audit interne",
    "contrôle qualité",
    "diplôme universitaire",
    "formation supérieure",
    "Kenitra",
    "Maroc",
    "audit comptable",
    "audit financier",
    "ISO 9001",
    "certification qualité",
    "management qualité",
    "contrôle interne",
    "audit opérationnel",
    "normes qualité",
    "système qualité",
    "amélioration continue",
    "audit de conformité",
    "inspection qualité",
    "formation professionnelle",
    "études universitaires",
    "licence professionnelle",
    "formation continue",
    "certification professionnelle",
    "carrière audit",
    "emploi qualité",
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
    url: "https://managementauditetqualite.com/programmes/audit-qualite-licence",
    siteName: "FEGK Ibn Tofail - Management, Audit et Qualité",
    title: "Licence Audit et Qualité | FEGK Ibn Tofail",
    description:
      "Formation Licence en Audit et Qualité à la Faculté d'Économie, Gestion et Commerce (FEGK) de l'Université Ibn Tofail. Licence spécialisée universitaire en audit et qualité.",
    images: [
      {
        url: "https://managementauditetqualite.com/hero.webp",
        width: 1200,
        height: 630,
        alt: "Licence Audit et Qualité - FEGK Ibn Tofail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licence Audit et Qualité | FEGK Ibn Tofail",
    description:
      "Formation Licence en Audit et Qualité à la FEGK Ibn Tofail. Licence spécialisée universitaire en audit et contrôle qualité.",
    images: ["https://managementauditetqualite.com/hero.webp"],
  },
  alternates: {
    canonical:
      "https://managementauditetqualite.com/programmes/audit-qualite-licence",
  },
};

export default function AuditQualiteLicenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
