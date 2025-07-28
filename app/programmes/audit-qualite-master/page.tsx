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
import Image from "next/image";
import Link from "next/link";
import { structuredData } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Management Audit Qualité Industrie & Service - FEGK",
  description:
    "Master Audit Qualité FEGK : Formation avancée en Management Audit Qualité. 18 mois, weekend, hybride. Devenez expert en audit et certification qualité. Inscription ouverte.",
  keywords: [
    "master audit qualité FEGK",
    "formation audit qualité master",
    "management audit qualité master",
    "audit qualité industrie formation",
    "master qualité FEGK",
    "formation expert audit",
    "certification qualité master",
    "audit qualité service formation",
    "master weekend audit",
    "formation avancée audit",
    "inscription master audit",
    "expert qualité formation",
  ],
  alternates: {
    canonical:
      "https://managementauditetqualite.com/programmes/audit-qualite-master",
  },
};

export default function AuditQualiteMasterPage() {
  const courseLD = structuredData.course({
    name: "Master en Management Audit Qualité Industrie & Service",
    description:
      "Formation avancée pour devenir expert en audit et management de la qualité dans les secteurs industriel et des services",
    provider: "FEGK - Université Ibn Tofail",
    courseCode: "MMAQ",
    educationalLevel: "Master",
    duration: "P18M",
    price: "31000",
    url: "https://managementauditetqualite.com/programmes/audit-qualite-master",
  });

  const breadcrumbLD = structuredData.breadcrumb([
    { name: "Accueil", url: "https://managementauditetqualite.com" },
    {
      name: "Programmes",
      url: "https://managementauditetqualite.com/programmes",
    },
    {
      name: "Audit Qualité Master",
      url: "https://managementauditetqualite.com/programmes/audit-qualite-master",
    },
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
              Master Universitaire Spécialisé
            </Badge>
            <Badge
              variant="outline"
              className="border-white text-white text-xs sm:text-sm"
            >
              Bac+3 Requis
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Management Audit Qualité Industrie & Service
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-4xl leading-relaxed">
            Formation avancée dans le Management Audit Qualité pour former des
            cadres dans le domaine spécialisé en Management Audit Qualité
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-blue-800">
                Objectif de la Formation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Ce Master vise à former des cadres dans le domaine spécialisé en
                Management Audit Qualité pour développer des compétences
                spécialisées en stratégie industrielle et en stratégie des
                services en plus d'une formation continue ciblée et adaptée aux
                différents secteurs.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                La formation offre beaucoup de débouchés dans différents
                domaines dans le secteur public et privé, via les domaines de
                Management et Développement durable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    4 semestres (2 ans)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    Formation hybride
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    31 000 DH (nationaux)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">Week-end</span>
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
                    href="https://fegk.uit.ac.ma/wp-content/uploads/2023/05/formulaire_dinscription_Audit_qualite_Master.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pré-inscription en Ligne
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-[500px] h-[550px] relative">
              <Image
                src="/programmes/masterA.webp"
                alt="Formation Master Management Audit Qualité Industrie & Service - Laboratoire FEGK Kénitra"
                title="Master Management Audit Qualité Industrie & Service - FEGK"
                width={500}
                height={550}
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg w-[500px] h-[550px]"
              />
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800">
              Modules Enseignés
            </h2>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
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
                      M1: Droit des Affaires
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M2: Qualité Théorie et Approches
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M3: Analyse Financière
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M4: Démarche de Certification et de Normalisation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M5: Management International et Expo du monde contemporain
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M6: Langues Étrangères (Français/Anglais)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M7: Power Skills
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="bg-blue-50 pb-3 sm:pb-4">
                  <Badge className="w-fit mb-2 bg-blue-600 text-xs sm:text-sm">
                    Semestre 2
                  </Badge>
                  <CardTitle className="text-blue-800 text-base sm:text-lg">
                    Spécialisation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M8: Qualité Méthodes et Outils
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M9: Management de l'environnement et Fonction QSE
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M10: Entrepreneuriat et conduite d'affaires
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M11: Comportement du consommateur et ère du digital
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M12: Promotion CRM Marketing des Services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M13: Langues Étrangères (Français/Anglais)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M14: Culture digitale
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="bg-blue-50 pb-3 sm:pb-4">
                  <Badge className="w-fit mb-2 bg-blue-600 text-xs sm:text-sm">
                    Semestre 3
                  </Badge>
                  <CardTitle className="text-blue-800 text-base sm:text-lg">
                    Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M15: E Service et Management de l'innovation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M16: Système de Management Qualité
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M17: Ingénierie des RH
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M18: Système d'information et Gestion des Services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M19: Audit et Contrôle interne
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M20: Langues Étrangères (Français/Anglais)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M21: Culture and Art Skills
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="bg-blue-50 pb-3 sm:pb-4">
                  <Badge className="w-fit mb-2 bg-blue-600 text-xs sm:text-sm">
                    Semestre 4
                  </Badge>
                  <CardTitle className="text-blue-800 text-base sm:text-lg">
                    Projet Final
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M22: Employment Skills
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M23: Projet de fin d'Études
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800">
              Débouchés de la Formation
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                La formation offre beaucoup de débouchés dans différents
                domaines dans le secteur public et privé, via les domaines de
                Management et Développement durable, pour former des cadres
                spécialisés en Management Audit Qualité.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Responsables Qualité
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsables qualité dans différents secteurs publics et
                    privés
                  </p>
                </div>

                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Audit & Contrôle
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsables audit dans différents secteurs, Audit et
                    contrôle interne
                  </p>
                </div>

                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Conseil & Consulting
                  </h3>
                  <p className="text-sm text-gray-600">
                    Opérateurs dans des bureaux et cabinets de consultants,
                    Consultants en organisation
                  </p>
                </div>

                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Opérations & Contrôle
                  </h3>
                  <p className="text-sm text-gray-600">
                    Opérateurs et contrôleurs en qualité dans diverses
                    entreprises
                  </p>
                </div>

                <div className="text-center">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Gestion Commerciale
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chargé d'affaires, Responsable relation client
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
                      <span>Titulaire d'un Bac+3 (ou équivalent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Étude de dossier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>
                        Inscription ouverte à partir du 01 juin de chaque année
                      </span>
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
                    Procédures de Sélection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>
                        2 Copies légalisées du BAC (Public ou Fond accrédité)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 Copies du diplôme Bac+3 légalisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 Copies légalisées de la C.N</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>1 Photo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>
                        4 copies de contrat de formation dûment légalisé
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>
                        Reçu du versement des frais de dossiers (1000 DH)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>
                        Site d'inscription:
                        https://feg.uit.ac.ma/mus-management-audit-qualite-industrie-service/
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
                    30 000 DH
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
                    4 Tranches
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
          <h2 className="text-3xl font-bold mb-4">Contact et Informations</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Équipe de Direction</h3>
              <p>
                <strong>M. Hicham OUAKIL</strong> - Vice-Doyen
              </p>
              <p>Tel: +212 661-130894 | Email: hicham.ouakil@uit.ac.ma</p>
              <p>
                <strong>Mme. Houda LECHHEB</strong> - Équipe de Direction
              </p>
              <p>Tel: +212 661-849348 | Email: houda.lechheb@uit.ac.ma</p>
              <p>
                <strong>M. Mohammed ELATMANI</strong> - Équipe de Direction
              </p>
              <p>Tel: +212 635-587844 | Email: mohammed.elatmani@uit.ac.ma</p>
              <p>
                <strong>M. Hamza HAMANI</strong> - Équipe de Direction
              </p>
              <p>Tel: +212 693-517484 | Email: hamza.hamani@uit.ac.ma</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Faculté d'Économie et de Gestion
              </h3>
              <p>Campus Universitaire Maamora</p>
              <p>BP: 2010 Kénitra</p>
              <p>Tél: 05 37 32 92 18</p>
              <p>Email: lechheb@yahoo.fr</p>
            </div>
          </div>
          <Link href="/programmes">
            <Button size="lg" variant="secondary">
              Retour aux Programmes
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
