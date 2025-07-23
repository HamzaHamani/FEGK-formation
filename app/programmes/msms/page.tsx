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
import Image from "next/image";
import Link from "next/link";

export default function MSMSPage() {
  return (
    <div className="min-h-screen bg-white">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">
                Objectifs de la Formation
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-gray-600">
                    Participer à la réussite de l'industrie du service par la
                    formation de cadres du middle et top management destinés au
                    secteur des services et domaines connexes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-gray-600">
                    Former des cadres supérieurs poly-compétents capables
                    d'intervenir dans le montage de produits et/ou de projets,
                    de commercialiser un produit et/ou une destination
                    touristique
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-gray-600">
                    Renforcer les compétences dans le marketing des services et
                    la conduite des affaires
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>18 mois (4 semestres)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Formation hybride</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-5 w-5 text-blue-600" />
                  <span>31 000 DH</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Samedi & Dimanche</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Management Stratégique et Marketing des Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
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
                    31 000 DH
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

          {/* Application */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">
              Candidature
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Postulez dès maintenant pour intégrer notre Master en Management
              Stratégique et Marketing des Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Candidater Maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Télécharger la Brochure
              </Button>
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
              <p>Email: hicham.ouakil@uit.ac.ma</p>
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
