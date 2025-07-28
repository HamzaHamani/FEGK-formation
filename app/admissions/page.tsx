import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  Users,
  AlertCircle,
  Download,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Admissions Formation Continue FEGK - Inscription Management & Audit Qualité",
  description:
    "Admissions FEGK : Processus d'inscription pour formations Management, Marketing et Audit Qualité. Conditions d'admission, dossier candidature, dates importantes.",
  keywords: [
    "admission FEGK",
    "inscription formation continue",
    "admission management FEGK",
    "candidature audit qualité",
    "inscription Kénitra",
    "admission Ibn Tofail",
    "processus admission",
    "dossier candidature",
    "conditions admission",
    "inscription weekend",
    // University-specific keywords
    "admission UIT",
    "inscription Université Ibn Tofail",
    "candidature FEGK Ibn Tofail",
    "admission Faculté Économie Gestion",
    // Degree-specific keywords
    "admission LU",
    "admission LSU",
    "admission MSU",
    "admission MUS",
    "inscription licence spécialisée",
    "inscription master spécialisé",
    "candidature master universitaire",
    // Program-specific keywords
    "admission MMS",
    "admission MSMS",
    "inscription Master Management Stratégique",
    "inscription Master Management Systèmes",
    "candidature Audit Qualité",
    "admission formation audit",
    "inscription formation qualité",
    // Process keywords
    "frais inscription FEGK",
    "dates inscription",
    "concours admission",
    "sélection candidats",
    "prérequis admission",
    "formation continue admission",
    "inscription études supérieures",
    "admission formation professionnelle",
  ],
  openGraph: {
    title: "Admissions FEGK - Inscription Formation Continue",
    description:
      "Découvrez le processus d'admission pour nos formations en Management et Audit Qualité",
    url: "https://managementauditetqualite.com/admissions",
    siteName: "Management Audit et Qualité - FEGK",
    images: [
      {
        url: "/LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "Admissions FEGK Formation Continue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions FEGK - Inscription Formation Continue",
    description: "Découvrez le processus d'admission pour nos formations",
    images: ["/LOGO.jpg"],
  },
  alternates: {
    canonical: "https://managementauditetqualite.com/admissions",
  },
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Admissions
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Rejoignez nos programmes d'excellence en Management et Marketing des
            Services. Découvrez le processus d'admission et les critères de
            sélection.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold text-yellow-800 mb-2 text-sm sm:text-base">
                  Dates Importantes - Année 2024-2025
                </h3>
                <div className="text-xs sm:text-sm">
                  <div>
                    <strong>Ouverture des candidatures:</strong>
                    <br />
                    15 Mars 2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center font-playfair">
            Processus d'Admission
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Étape 1
                  </Badge>
                </div>
                <CardTitle className="flex items-center gap-2 font-playfair text-base sm:text-lg">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" />
                  Candidature en Ligne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Soumettez votre dossier complet via notre plateforme en ligne.
                  Tous les documents requis doivent être fournis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Étape 2
                  </Badge>
                </div>
                <CardTitle className="flex items-center gap-2 font-playfair text-base sm:text-lg">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" />
                  Évaluation du Dossier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Notre commission d'admission évalue votre dossier académique,
                  votre motivation et votre projet professionnel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Étape 3</Badge>
                </div>
                <CardTitle className="flex items-center gap-2 font-playfair">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  Admission & Début des Études
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Après validation de votre dossier, vous recevez votre lettre
                  d'admission et pouvez commencer vos études dans le programme
                  choisi.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Requirements */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">
                Conditions d'Admission
              </h2>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair">
                    Prérequis Académiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Baccalauréat ou équivalent avec mention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Moyenne générale minimum de 14/20</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Bonnes bases en mathématiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Maîtrise du français (niveau B2 minimum)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">
                Documents Requis
              </h2>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair">
                    Dossier de Candidature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                      <span>Formulaire de candidature complété</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                      <span>Relevés de notes du baccalauréat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                      <span>Lettre de motivation (500 mots max)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                      <span>CV détaillé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                      <span>Copie de la carte d'identité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                      <span>2 lettres de recommandation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fees */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center font-playfair">
              Frais de Scolarité
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center font-playfair">
                    Frais de Scolarité Licence
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">
                    16 000 DH
                  </div>
                  <p className="text-gray-600">par année</p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center font-playfair">
                    Frais de Scolarité Master
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">
                    31 000 DH
                  </div>
                  <p className="text-gray-600">par année</p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center font-playfair">
                    Frais de Dossier
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">
                    1 000 DH
                  </div>
                  <p className="text-gray-600">une seule fois</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              * Possibilités de bourses d'études disponibles selon les critères
              sociaux
            </p>
          </div>

          {/* Application Form */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">
              Prêt à Candidater ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Téléchargez le dossier de candidature et soumettez votre demande
              avant la date limite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                {" "}
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  Candidater Maintenant
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Questions ? Contanctez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
