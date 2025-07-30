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
  Globe,
  TrendingUp,
} from "lucide-react";
import LazyImage from "@/components/lazy-image";
import Link from "next/link";
import { structuredData } from "@/lib/seo";
import type { Metadata } from "next";

export default function MSMSPage() {
  const courseLD = structuredData.course({
    name: "Master en Management Stratégique et Marketing des Services (MSMS)",
    description:
      "Formation avancée pour les cadres du middle et top management dans le secteur des services",
    provider: "FEGK - Université Ibn Tofail",
    courseCode: "MSMS",
    educationalLevel: "Master",
    duration: "P18M",
    price: "31000",
    url: "https://managementauditetqualite.com/programmes/msms",
  });

  const breadcrumbLD = structuredData.breadcrumb([
    { name: "Accueil", url: "https://managementauditetqualite.com" },
    {
      name: "Programmes",
      url: "https://managementauditetqualite.com/programmes",
    },
    {
      name: "MSMS",
      url: "https://managementauditetqualite.com/programmes/msms",
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-blue-600">
              Master Universitaire Spécialisé
            </Badge>
            <Badge variant="outline" className="border-white text-white">
              Bac+3 Requis
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Management Stratégique et Marketing des Services
          </h1>
          <p className="text-xl opacity-90 max-w-4xl">
            Formation avancée pour les cadres du middle et top management
            destinés au secteur des services
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-1 lg:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-blue-800">
                Objectifs de la Formation
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-sm sm:text-base text-gray-600">
                    Participer à la réussite de l'industrie du service par la
                    formation de cadres du middle et top management destinés au
                    secteur des services et domaines connexes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-sm sm:text-base text-gray-600">
                    Former des cadres supérieurs poly-compétents capables
                    d'intervenir dans le montage de produits et/ou de projets,
                    de commercialiser un produit et/ou une destination
                    touristique
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-sm sm:text-base text-gray-600">
                    Renforcer les compétences dans le marketing des services et
                    la conduite des affaires
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    18 mois (4 semestres)
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
                  <span className="text-sm sm:text-base">31 000 DH</span>
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
                    href="https://sites.google.com/uit.ac.ma/mus-msms/inscription-en-ligne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pré-inscription en Ligne
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-2 lg:order-2 flex justify-center items-center">
              <div className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-[4/5] relative overflow-hidden">
                <LazyImage
                  src="/programmes/masterM.webp"
                  alt="Étudiants Master Management Stratégique et Marketing Services - Campus universitaire FEGK Kénitra"
                  title="Master MSMS - Management Stratégique et Marketing des Services FEGK"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Programme d'Études
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Semester 1 */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <Badge className="w-fit mb-2 bg-blue-600">Semestre 1</Badge>
                  <CardTitle className="text-blue-800">
                    Fondements Stratégiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Droit des Affaires
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Économie des Services II
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Analyse financière
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Management stratégique
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Management international et enjeux du monde contemporain
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Langues Étrangères (Français/Anglais)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Soft Skills
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Semester 2 */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <Badge className="w-fit mb-2 bg-blue-600">Semestre 2</Badge>
                  <CardTitle className="text-blue-800">
                    Marketing Avancé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Attractivité et ancrage territorial
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Comportement du consommateur à l'ère digitale
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Entrepreneuriat et conduite d'affaire
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Méthodes Quantitatives de gestion avancées
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Promotion, CRM et Marketing des Services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Langues Étrangères (Français/Anglais)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Culture digitale
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Semester 3 */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <Badge className="w-fit mb-2 bg-blue-600">Semestre 3</Badge>
                  <CardTitle className="text-blue-800">
                    Innovation & Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      E-Service et innovation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Management de projet
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Ingénierie des ressources humaines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Système d'information et organisation des services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Audit et suivi des projets et des organisations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Langues Étrangères (Français/Anglais)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Culture and Art skills
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Semester 4 */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <Badge className="w-fit mb-2 bg-blue-600">Semestre 4</Badge>
                  <CardTitle className="text-blue-800">Projet Final</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Employment Skills
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Projet de Fin d'Études (PFE)
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Le semestre final est consacré à la réalisation d'un projet
                    professionnel et au développement des compétences
                    d'employabilité.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Career Prospects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Débouchés Professionnels
            </h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                Les titulaires du Master Management Stratégique et Marketing des
                services (MSMS) peuvent s'orienter dans tout type d'entreprise
                (Groupes multinationaux, Grandes entreprises, PME/PMI...) en
                tant que cadres travaillant à la conception, à la
                commercialisation et à la production des services.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Marketing Stratégique
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsable marketing stratégique, Directeur marketing
                  </p>
                </div>

                <div className="text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Marketing Opérationnel
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chef de produit, Responsable communication
                  </p>
                </div>

                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Innovation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chargé de veille innovation, Chef de projet innovation
                  </p>
                </div>

                <div className="text-center">
                  <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Management International
                  </h3>
                  <p className="text-sm text-gray-600">
                    Directeur export, Responsable développement international
                  </p>
                </div>

                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Consulting
                  </h3>
                  <p className="text-sm text-gray-600">
                    Consultant en stratégie, Auditeur organisationnel
                  </p>
                </div>

                <div className="text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Entrepreneuriat
                  </h3>
                  <p className="text-sm text-gray-600">
                    Créateur d'entreprise, Directeur général
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Requirements */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">
                Modalités d'Admission
              </h2>
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">
                    Conditions d'Accès
                  </CardTitle>
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
                        Titulaires d'un Bac + 3 public ou privé (Accrédité)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Inscription ouverte à partir du 1er Juin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>
                        Validation sans compensation de tous les modules
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
                      <span>2 copies légalisées du diplôme Bac+3</span>
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
            <div className="grid md:grid-cols-4 gap-6">
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
                  <p className="text-gray-600">Paiement échelonné</p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Durée</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    18 Mois
                  </div>
                  <p className="text-gray-600">4 semestres</p>
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
                <strong>Compte au trésor N°:</strong> 310 330 1006 021 701980101
                68
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
