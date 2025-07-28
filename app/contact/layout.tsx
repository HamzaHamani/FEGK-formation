import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FEGK Formation Continue - Université Ibn Tofail Kénitra",
  description:
    "Contactez FEGK pour vos questions sur la formation continue. Adresse, téléphone, email. Campus Universitaire Maamora, Kénitra. Équipe pédagogique à votre service.",
  keywords: [
    "contact FEGK",
    "contact formation FEGK",
    "adresse FEGK Kénitra",
    "téléphone FEGK",
    "email FEGK formation",
    "campus Maamora",
    "contact Université Ibn Tofail",
    "information formation continue",
    "rendez-vous FEGK",
    "équipe FEGK",
    // University-specific keywords
    "contact UIT",
    "contact Ibn Tofail University",
    "FEGK Ibn Tofail contact",
    "Faculté Économie Gestion Commerce contact",
    // Service keywords
    "secrétariat FEGK",
    "administration formation continue",
    "service étudiant",
    "orientation FEGK",
    "conseil formation",
    "renseignements admission",
    // Location keywords
    "Kenitra université contact",
    "Maamora campus contact",
    "Rabat Sale Kénitra formation contact",
    // Program inquiry keywords
    "information MMS contact",
    "information MSMS contact",
    "renseignement Master Management",
    "contact formation audit qualité",
    "information LSU MSU",
  ],
  alternates: {
    canonical: "https://managementauditetqualite.com/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
