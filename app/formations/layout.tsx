import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations Continue FEGK - Management, Marketing & Audit Qualité",
  description:
    "Formations continue FEGK : Catalogue complet des formations en Management, Marketing des Services, Audit Qualité. Weekend, hybride. Université Ibn Tofail Kénitra.",
  keywords: [
    "formations FEGK",
    "catalogue formations",
    "formations continue Kénitra",
    "formation management FEGK",
    "formation marketing FEGK",
    "formation audit FEGK",
    "offre formation continue",
    "formations professionnelles",
    "cursus FEGK",
    "programmes formation",
  ],
  alternates: {
    canonical: "https://managementauditetqualite.com/formations",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
