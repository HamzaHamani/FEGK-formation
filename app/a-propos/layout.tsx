import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos FEGK Formation Continue - Université Ibn Tofail Kénitra",
  description:
    "Découvrez FEGK : Faculté d'Économie et de Gestion, Université Ibn Tofail Kénitra. Excellence académique en formation continue, management, marketing et audit qualité.",
  keywords: [
    "FEGK à propos",
    "Faculté Économie Gestion Kénitra",
    "Université Ibn Tofail",
    "formation continue FEGK",
    "excellence académique",
    "FEGK histoire",
    "formation professionnelle Maroc",
    "éducation supérieure Kénitra",
    "FEGK mission",
    "formation continue excellence",
  ],
  alternates: {
    canonical: "https://managementauditetqualite.com/a-propos",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
