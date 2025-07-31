import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Euro,
  Calendar,
  FileText,
  CheckCircle,
  Users,
  Target,
  BookOpen,
} from "lucide-react";
import LazyImage from "@/components/lazy-image";
import Link from "next/link";
import { structuredData } from "@/lib/seo";
import type { Metadata } from "next";

export default function MMSPage() {
  const courseLD = structuredData.course({
    name: "Licence en Management et Marketing des Services (MMS)",
    description:
      "Formation spécialisée pour concevoir et produire une offre de services compétitive adaptée aux besoins clients",
    provider: "FEGK - Université Ibn Tofail",
    courseCode: "MMS",
    educationalLevel: "Licence",
    duration: "P1Y",
    price: "16000",
    url: "https://managementauditetqualite.com/programmes/mms",
  });

  const breadcrumbLD = structuredData.breadcrumb([
    { name: "Accueil", url: "https://managementauditetqualite.com" },
    {
      name: "Programmes",
      url: "https://managementauditetqualite.com/programmes",
    },
    { name: "MMS", url: "https://managementauditetqualite.com/programmes/mms" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseLD),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLD),
        }}
      />
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Badge className="bg-blue-500 text-xs sm:text-sm">
              Licence Universitaire Spécialisée
            </Badge>
            <Badge
              variant="outline"
              className="border-white text-white text-xs sm:text-sm"
            >
              Bac+2 Requis
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Management et Marketing des Services
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-4xl leading-relaxed">
            Formez-vous à concevoir et produire une offre de services
            compétitive adaptée aux besoins des clients
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
            <div className="order-1 md:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-blue-800">
                Objectif Général de la Formation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                La Licence Management et Marketing des Services (MMS) forme les
                étudiants à concevoir et produire une offre de services
                compétitive adaptée aux besoins des clients tant dans les
                entreprises de services que dans les entreprises industrielles
                qui proposent des services associés à leur produit.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Intégrant les caractéristiques particulières des services, la
                licence MMS permet aux étudiants d'acquérir une double
                compétence en Management et en marketing, très appréciée des
                entreprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">2 semestres</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    Formation hybride
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">16 000 DH</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    Samedi & Dimanche
                  </span>
                </div>
              </div>

              {/* Application Section - Under icons on left side */}
              <div className="text-center mt-6">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                  asChild
                >
                  <a
                    href="https://sites.google.com/uit.ac.ma/lus-mms/inscription-en-ligne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pré-inscription en Ligne
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-2 md:order-2 flex justify-center items-center">
              <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[380px] lg:max-w-[500px] aspect-[3/4] sm:aspect-[4/5] relative overflow-hidden">
                <LazyImage
                  src="/programmes/licenseM.webp"
                  alt="Étudiants en formation Management et Marketing des Services - Salle de cours moderne FEGK Kénitra"
                  title="Formation Management et Marketing des Services - Licence MMS FEGK"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800">
              Modules Enseignés
            </h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="bg-blue-50 pb-3 sm:pb-4">
                  <Badge className="w-fit mb-2 bg-blue-600 text-xs sm:text-sm">
                    Semestre 1
                  </Badge>
                  <CardTitle className="text-blue-800 text-base sm:text-lg">
                    Fondements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Management des organisations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Marketing des services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Économie des Services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Management des Ressources Humaines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Techniques quantitatives de gestion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Langues Étrangères (Anglais/Français)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Digital Skills: Excel Avancé
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <Badge className="w-fit mb-2 bg-blue-600">Semestre 2</Badge>
                  <CardTitle className="text-blue-800">
                    Approfondissement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Stratégie d'entreprise
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Droit commercial
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Marketing Digital
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Management opérationnel
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Comportement du consommateur
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Langues Étrangères (Anglais/Français)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Droit, civisme et citoyenneté
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Career Prospects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Débouchés de la Formation
            </h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                La licence MMS forme des cadres travaillant à la conception, à
                la commercialisation et à la production des services au sein des
                départements commercial, marketing ou innovation des entreprises
                de services ou des entreprises industrielles proposant une offre
                de services associée à leurs produits.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Marketing & Commercial
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chargé d'études, Responsable marketing stratégique,
                    Responsable produit
                  </p>
                </div>

                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Management
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsable clientèle, Chef de projet innovation de
                    services, Chef de projet expérience client
                  </p>
                </div>

                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Secteur Hôtelier & Tourisme
                  </h3>
                  <p className="text-sm text-gray-600">
                    Directeurs ou gérants d'établissement hôtelier, de tourisme
                    et des organisations de services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Requirements */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">
                Conditions d'Admission
              </h2>
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Admissibilité sur dossier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>
                        Titulaires d'un Bac + 2 public ou privé (Accrédité)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Inscription ouverte à partir du 1er Juin</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">
                Dossier de Candidature
              </h2>
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">
                    Documents Requis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Demande manuscrite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Un CV avec Photo récente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 copies légalisées du BAC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 copies légalisées du diplôme Bac+2</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 copies légalisées de la CIN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>4 contrats légalisés de la formation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>
                        Reçu du versement des frais de dossier (1000 Dhs)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cost and Payment */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
              Coût et Modalités de Paiement
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Coût Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15 000 DH
                  </div>
                  <p className="text-gray-600">Formation complète</p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    Frais de Dossier
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1 000 DH
                  </div>
                  <p className="text-gray-600">Non remboursables</p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Modalités</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    2 Tranches
                  </div>
                  <p className="text-gray-600">Paiement échelonné possible</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                Informations Bancaires
              </h3>
              <p className="text-sm text-blue-700">
                <strong>Bénéficiaire:</strong> L'Université Ibn Tofaïl
                <br />
                <strong>Compte au trésor N°:</strong> 310 330 1006 021 7019801
                01 68
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact et Informations</h2>
          <p className="text-lg mb-8 opacity-90">
            Pour plus d'informations sur ce programme ou pour nous contacter,
            cliquez sur le bouton ci-dessous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Nous Contacter
              </Button>
            </Link>
            <Link href="/programmes">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800"
              >
                Retour aux Programmes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
