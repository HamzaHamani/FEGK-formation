import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Management Audit et Qualité Industrie & Service",
  description:
    "Formation Master Audit et Qualité FEGK. Master spécialisé universitaire (MSU) en audit et management qualité. Formation weekend hybride. Université Ibn Tofail.",
  keywords: [
    "Master Audit Qualité",
    "MSU",
    "Master spécialisé universitaire",
    "FEGK",
    "Ibn Tofail",
    "Université Ibn Tofail",
    "formation master audit",
    "formation master qualité",
    "audit interne",
    "audit externe",
    "management qualité",
    "diplôme universitaire",
    "formation supérieure",
    "Kenitra",
    "Maroc",
    "audit comptable",
    "audit financier",
    "audit opérationnel",
    "ISO 9001",
    "ISO 14001",
    "certification qualité",
    "management intégré",
    "contrôle interne",
    "risk management",
    "gouvernance",
    "compliance",
    "normes internationales",
    "système qualité",
    "amélioration continue",
    "audit de conformité",
    "audit stratégique",
    "formation professionnelle",
    "études supérieures",
    "master professionnel",
    "formation continue",
    "certification professionnelle",
    "carrière audit",
    "expert qualité",
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
    url: "https://managementauditetqualite.com/programmes/audit-qualite-master",
    siteName: "FEGK Ibn Tofail - Management, Audit et Qualité",
    title: "Master Audit et Qualité | FEGK Ibn Tofail",
    description:
      "Formation Master en Audit et Qualité à la Faculté d'Économie, Gestion et Commerce (FEGK) de l'Université Ibn Tofail. Master spécialisé universitaire en audit et qualité.",
    images: [
      {
        url: "https://managementauditetqualite.com/hero.webp",
        width: 1200,
        height: 630,
        alt: "Master Audit et Qualité - FEGK Ibn Tofail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Audit et Qualité | FEGK Ibn Tofail",
    description:
      "Formation Master en Audit et Qualité à la FEGK Ibn Tofail. Master spécialisé universitaire en audit et management qualité.",
    images: ["https://managementauditetqualite.com/hero.webp"],
  },
  alternates: {
    canonical:
      "https://managementauditetqualite.com/programmes/audit-qualite-master",
  },
};

export default function AuditQualiteMasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
