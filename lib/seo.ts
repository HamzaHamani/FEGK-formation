import type { Metadata } from "next";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/LOGO.jpg",
  noIndex = false,
}: SEOProps): Metadata {
  const defaultKeywords = [
    "management audit et qualité",
    "formation management audit qualité",
    "audit et qualité formation",
    "management qualité formation",
    "FEGK formation",
    "formation continue",
    "formation continue FEGK",
    "management formation",
    "audit formation",
    "qualité formation",
    "marketing formation",
    "Université Ibn Tofail",
    "FEGK Kénitra",
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      title,
      description,
      url: canonical || undefined,
      siteName: "FEGK Formation Continue",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Faculté d'Économie et de Gestion - Kénitra (FEGK)",
    alternateName: "FEGK",
    url: "https://managementauditetqualite.com",
    logo: "https://managementauditetqualite.com/LOGO.jpg",
    description:
      "Formation continue en Management, Marketing et Audit Qualité à l'Université Ibn Tofail",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Campus Universitaire Maamora",
      addressLocality: "Kénitra",
      postalCode: "14000",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-537-329218",
      contactType: "customer service",
      availableLanguage: ["French", "Arabic"],
    },
    sameAs: ["https://www.facebook.com/FEGK.UIT.Official"],
  },

  course: (courseData: {
    name: string;
    description: string;
    provider: string;
    courseCode: string;
    educationalLevel: string;
    duration: string;
    price: string;
    url: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseData.name,
    description: courseData.description,
    provider: {
      "@type": "EducationalOrganization",
      name: courseData.provider,
      url: "https://managementauditetqualite.com",
    },
    courseCode: courseData.courseCode,
    educationalLevel: courseData.educationalLevel,
    timeRequired: courseData.duration,
    offers: {
      "@type": "Offer",
      price: courseData.price,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
    },
    url: courseData.url,
    inLanguage: "fr",
    courseMode: "blended",
    educationalCredentialAwarded: "Diplôme universitaire",
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
