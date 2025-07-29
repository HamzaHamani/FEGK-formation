import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Users, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/animated-counter";
import { structuredData } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Continue FEGK Kénitra - Management Audit Qualité",
  description:
    "Formation continue FEGK Kénitra : Licence et Master en Management, Marketing Services, Audit Qualité. Formation weekend hybride. Inscription ouverte.",
  keywords: [
    "management audit et qualité",
    "formation management audit qualité",
    "audit et qualité formation",
    "management qualité FEGK",
    "formation continue FEGK",
    "FEGK formation",
    "formation management Kénitra",
    "formation marketing services",
    "audit qualité formation",
    "licence management FEGK",
    "master management FEGK",
    "formation weekend Maroc",
    "formation hybride",
    "inscription formation continue",
    "développement professionnel",
    "formation cadres Maroc",
    "Université Ibn Tofail formation",
    "FEGK Kénitra inscription",
    "formation certifiante management",
    "audit qualité industrie",
    "management stratégique formation",
    "certification qualité formation",
    // University-specific keywords
    "Ibn Tofail formation continue",
    "UIT FEGK",
    "Université Ibn Tofail Kenitra",
    "FEGK Ibn Tofail formation",
    "Faculté Économie Gestion Commerce",
    // Degree-specific keywords
    "LU formation",
    "LSU formation",
    "MSU formation",
    "MUS formation",
    "licence spécialisée universitaire",
    "master spécialisé universitaire",
    "licence universitaire formation",
    "master universitaire spécialisé",
    // Program-specific keywords
    "MMS formation FEGK",
    "MSMS formation FEGK",
    "Master Management Stratégique formation",
    "Master Management Systèmes formation",
    "formation audit qualité licence",
    "formation audit qualité master",
    "marketing des services formation",
    // Location and modality keywords
    "formation continue Kénitra",
    "formation weekend Kenitra",
    "formation hybride Maroc",
    "études supérieures continue",
    "formation executive Maroc",
    "formation professionnelle supérieure",
  ],
  alternates: {
    canonical: "https://managementauditetqualite.com",
  },
};

export default function HomePage() {
  const organizationLD = structuredData.organization;
  const breadcrumbLD = structuredData.breadcrumb([
    { name: "Accueil", url: "https://managementauditetqualite.com" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationLD),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLD),
        }}
      />
      {/* Hero Section */}
      <section className="relative text-white min-h-[70vh] sm:min-h-[80vh] lg:h-[85vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/hero.webp"
          alt="Formation Continue FEGK - Étudiants en formation Management et Marketing à l'Université Ibn Tofail Kénitra"
          title="Formation Continue FEGK - Excellence en Management, Marketing et Audit Qualité"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+VLNjZ1dQ2q"
        />
        {/* Blue Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/80"></div>
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
              Management Audit et Qualité - Formation Continue FEGK
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Rejoignez des milliers de professionnels qui ont transformé leur
              carrière grâce à nos programmes de formation continue en
              Management, Audit et Qualité, Marketing des Services à la Faculté
              d'Économie et de Gestion de l'Université Ibn Tofail, Kénitra.
            </p>

            {/* Key Features */}
            <div className="flex sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-white/90">
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold">
                  Accrédité
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Formation Reconnue
                </div>
              </div>
              <span className="hidden sm:inline text-white/60">•</span>
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold">
                  Flexible
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Week-ends
                </div>
              </div>
              <span className="hidden sm:inline text-white/60">•</span>
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold">Réseau</div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Alumni Actifs
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <Link href="/programmes" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900  font-medium px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl group"
                >
                  Explorer les Programmes
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/programmes" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900 font-medium px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg bg-transparent transition-all duration-300  hover:shadow-xl"
                >
                  Candidater Aujourd'hui
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Overview Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nos Domaines de Formation
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              La Faculté d'Économie et de Gestion de Kénitra propose des
              formations spécialisées dans deux domaines d'excellence, adaptées
              aux besoins du marché professionnel moderne.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Management et Marketing des Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-700">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-blue-900 leading-tight">
                  Management et Marketing des Services
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Nos programmes en Management et Marketing des Services forment
                des professionnels capables de concevoir, commercialiser et
                gérer des offres de services compétitives. Cette formation
                combine expertise managériale et marketing stratégique pour
                répondre aux défis du secteur tertiaire.
              </p>
              <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
                <Badge className="bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 whitespace-nowrap">
                  Licence Spécialisée
                </Badge>
                <Badge className="bg-blue-800 text-white text-xs sm:text-sm px-2 py-1 whitespace-nowrap">
                  Master Spécialisé
                </Badge>
              </div>
            </div>

            {/* Audit et Qualité */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-green-700">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-green-900 leading-tight">
                  Audit et Qualité
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Nos formations en Audit et Qualité préparent les futurs experts
                en management de la qualité et audit organisationnel. Ces
                programmes développent les compétences nécessaires pour
                améliorer les performances et assurer la conformité des
                organisations modernes.
              </p>
              <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
                <Badge className="bg-green-600 text-white text-xs sm:text-sm px-2 py-1 whitespace-nowrap">
                  Licence Spécialisée
                </Badge>
                <Badge className="bg-green-800 text-white text-xs sm:text-sm px-2 py-1 whitespace-nowrap">
                  Master Spécialisé
                </Badge>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4 sm:px-0">
              Chaque domaine propose des formations de niveau Licence et Master,
              conçues pour s'adapter à votre parcours professionnel.
            </p>
            <Link href="/a-propos" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white bg-transparent text-sm sm:text-base px-4 sm:px-6 lg:px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                En Savoir Plus sur Nos Formations
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center relative">
            <div className="py-6 sm:py-8 px-3 sm:px-4 relative">
              <AnimatedCounter
                target={30}
                suffix="+"
                duration={2500}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2"
              />
              <div className="text-xs sm:text-sm lg:text-base text-blue-200">
                Années d'Excellence
              </div>
              {/* Desktop separator */}
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 sm:h-16 bg-blue-700"></div>
            </div>

            <div className="py-6 sm:py-8 px-3 sm:px-4 relative">
              <AnimatedCounter
                target={200}
                suffix="+"
                duration={2800}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2"
              />
              <div className="text-xs sm:text-sm lg:text-base text-blue-200">
                Diplômés
              </div>
              {/* Desktop separator */}
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 sm:h-16 bg-blue-700"></div>
            </div>

            <div className="py-6 sm:py-8 px-3 sm:px-4 relative">
              <AnimatedCounter
                target={95}
                suffix="%"
                duration={2200}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2"
              />
              <div className="text-xs sm:text-sm lg:text-base text-blue-200">
                Taux de Réussite
              </div>
              {/* Desktop separator only */}
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 sm:h-16 bg-blue-700"></div>
            </div>

            <div className="py-6 sm:py-8 px-3 sm:px-4">
              <AnimatedCounter
                target={85}
                suffix="%"
                duration={2600}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2"
              />
              <div className="text-xs sm:text-sm lg:text-base text-blue-200">
                Progression de Carrière
              </div>
            </div>

            {/* Mobile separators */}
            {/* Vertical separator down the middle (mobile only) */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px bg-blue-700 transform -translate-x-1/2"></div>

            {/* Horizontal separator across full width (mobile only) */}
            <div className="md:hidden absolute left-0 right-0 top-1/2 h-px bg-blue-700 transform -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Programmes Phares
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Découvrez nos programmes emblématiques conçus pour les
              professionnels souhaitant faire progresser leur carrière
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* MMS Program */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full group">
              <div className="aspect-video bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2 text-xs sm:text-sm transition-all duration-300 group-hover:bg-white/30">
                    Licence Spécialisée
                  </Badge>
                  <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                    Management et Marketing des Services
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>2 Semestres</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Week-ends</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Format Hybride</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Maîtrisez la conception et la production d'offres de services
                  compétitives adaptées aux besoins clients. Ce programme
                  combine expertise en management et marketing très appréciée
                  par les employeurs.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="text-xl sm:text-2xl font-bold text-blue-800">
                    <div>15 000 DH</div>
                    <div className="text-sm font-normal text-gray-600">
                      + 1 000 DH frais de dossier
                    </div>
                  </div>
                  <Link
                    href="/programmes/mms"
                    className="text-blue-800 hover:text-blue-900 text-sm sm:text-base font-medium underline inline-flex items-center transition-colors duration-300 group"
                  >
                    En Savoir Plus
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 sm:px-6 transition-colors duration-300"
                  asChild
                >
                  <a
                    href="https://sites.google.com/uit.ac.ma/lus-mms/inscription-en-ligne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    S'inscrire Maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* MSMS Program */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full group">
              <div className="aspect-video bg-gradient-to-r from-blue-700 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2 text-xs sm:text-sm transition-all duration-300 group-hover:bg-white/30">
                    Master Spécialisé
                  </Badge>
                  <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                    Management Stratégique et Marketing
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>18 Mois</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Week-ends</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Niveau Avancé</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Formation avancée pour les cadres du middle et top management
                  dans le secteur des services. Développez votre pensée
                  stratégique et vos compétences de leadership pour des postes
                  supérieurs.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="text-xl sm:text-2xl font-bold text-blue-800">
                    <div>30 000 DH</div>
                    <div className="text-sm font-normal text-gray-600">
                      + 1 000 DH frais de dossier
                    </div>
                  </div>
                  <Link
                    href="/programmes/msms"
                    className="text-blue-800 hover:text-blue-900 text-sm sm:text-base font-medium underline inline-flex items-center transition-colors duration-300 group"
                  >
                    En Savoir Plus
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 sm:px-6 transition-colors duration-300"
                  asChild
                >
                  <a
                    href="https://sites.google.com/uit.ac.ma/mus-msms/inscription-en-ligne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    S'inscrire Maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Audit Qualité Licence Program */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full group">
              <div className="aspect-video bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2 text-xs sm:text-sm transition-all duration-300 group-hover:bg-white/30">
                    Licence Spécialisée
                  </Badge>
                  <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                    Management Audit Qualité
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>2 Semestres</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Week-ends</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Certification</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Formation spécialisée en management de la qualité et audit
                  organisationnel. Maîtrisez les outils et méthodes pour
                  améliorer les performances et assurer la conformité des
                  organisations.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="text-xl sm:text-2xl font-bold text-blue-800">
                    <div>15 000 DH</div>
                    <div className="text-sm font-normal text-gray-600">
                      + 1 000 DH frais de dossier
                    </div>
                  </div>
                  <Link
                    href="/programmes/audit-qualite-licence"
                    className="text-blue-800 hover:text-blue-900 text-sm sm:text-base font-medium underline inline-flex items-center transition-colors duration-300 group"
                  >
                    En Savoir Plus
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 sm:px-6 transition-colors duration-300"
                  asChild
                >
                  <a
                    href="https://sites.google.com/uit.ac.ma/lus-maq/inscription-en-ligne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    S'inscrire Maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Audit Qualité Master Program */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full group">
              <div className="aspect-video bg-gradient-to-r from-blue-700 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2 text-xs sm:text-sm transition-all duration-300 group-hover:bg-white/30">
                    Master Spécialisé
                  </Badge>
                  <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                    Management Audit Qualité
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>18 Mois</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Week-ends</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Expert Level</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Formation avancée pour devenir expert en audit et management
                  de la qualité. Développez votre expertise pour des postes de
                  direction dans l'amélioration continue et la certification
                  qualité.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="text-xl sm:text-2xl font-bold text-blue-800">
                    <div>30 000 DH</div>
                    <div className="text-sm font-normal text-gray-600">
                      + 1 000 DH frais de dossier
                    </div>
                  </div>
                  <Link
                    href="/programmes/audit-qualite-master"
                    className="text-blue-800 hover:text-blue-900 text-sm sm:text-base font-medium underline inline-flex items-center transition-colors duration-300 group"
                  >
                    En Savoir Plus
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 sm:px-6 transition-colors duration-300"
                  asChild
                >
                  <a
                    href="https://sites.google.com/uit.ac.ma/mus-management-audit-qualite-industrie-service/inscription-en-ligne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    S'inscrire Maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/programmes">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white bg-transparent text-sm sm:text-base px-4 sm:px-6 lg:px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Plus d'Informations
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Pourquoi Choisir la Faculté d'Économie et de Gestion ?
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Excellence Académique
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Plus de 30 ans d'excellence éducative avec des programmes
                      conçus par des universitaires de premier plan et des
                      professionnels de l'industrie.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Focus Professionnel
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Programmes spécifiquement conçus pour les professionnels
                      en activité avec des horaires flexibles en week-end et des
                      options d'apprentissage hybride.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Impact Carrière
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      95% de nos diplômés rapportent une progression de carrière
                      dans les deux ans suivant l'achèvement du programme, avec
                      de solides connexions industrielles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
              <Image
                src="img1.jpg"
                alt="Étudiants en formation continue FEGK - Image des étudiants en train de récupérer leur diplôme"
                title="Formation Continue FEGK - Environnement d'apprentissage moderne- Étudiants diplômés"
                width={500}
                height={600}
                className="rounded-lg shadow-xl max-w-full h-auto"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+VLNjZ1dQ2q"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Preview */}
      {/* <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Actualités & Événements
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 sm:px-0">
              Restez informé de nos dernières nouvelles et événements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow w-full">
              <div className="aspect-video bg-gray-200 rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Actualité"
                  alt="Actualité"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <Badge className="mb-2 sm:mb-3 text-xs sm:text-sm">
                  Actualités
                </Badge>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Ouverture des Inscriptions 2024-2025
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Les inscriptions pour l'année académique 2024-2025 sont
                  maintenant ouvertes. Découvrez les modalités et dates
                  importantes.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent text-sm sm:text-base px-3 sm:px-4"
                >
                  Lire la Suite
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow w-full">
              <div className="aspect-video bg-gray-200 rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Événement"
                  alt="Événement"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <Badge className="mb-2 sm:mb-3 text-xs sm:text-sm">
                  Événements
                </Badge>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Journée Portes Ouvertes
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Venez découvrir nos programmes, rencontrer nos professeurs et
                  visiter nos installations lors de notre journée portes
                  ouvertes.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent text-sm sm:text-base px-3 sm:px-4"
                >
                  S'Inscrire
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow w-full md:col-span-2 lg:col-span-1">
              <div className="aspect-video bg-gray-200 rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Témoignage"
                  alt="Témoignage"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <Badge className="mb-2 sm:mb-3 text-xs sm:text-sm">
                  Témoignages
                </Badge>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Succès de nos Diplômés
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Découvrez les parcours inspirants de nos anciens étudiants qui
                  excellent dans leurs carrières professionnelles.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent text-sm sm:text-base px-3 sm:px-4"
                >
                  Voir Plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 text-blue-100 leading-relaxed px-4 sm:px-0">
            Les inscriptions sont ouvertes. Faites le premier pas vers
            l'excellence académique et professionnelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <Link href="/programmes" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Candidater Maintenant
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
