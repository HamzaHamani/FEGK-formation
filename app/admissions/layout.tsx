import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Admissions & Inscriptions Formation Continue FEGK - Université Ibn Tofail",
  description:
    "Admissions ouvertes FEGK : Inscrivez-vous aux formations continue en Management, Marketing et Audit Qualité. Procédure d'inscription, conditions d'admission, frais.",
  keywords: [
    "admission FEGK",
    "inscription formation continue",
    "admission formation FEGK",
    "inscription FEGK Kénitra",
    "procédure admission",
    "conditions admission FEGK",
    "frais inscription formation",
    "admission management formation",
    "inscription marketing formation",
    "admission audit qualité",
    "candidature FEGK",
    "dossier admission formation",
  ],
  alternates: {
    canonical: "https://managementauditetqualite.com/admissions",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
