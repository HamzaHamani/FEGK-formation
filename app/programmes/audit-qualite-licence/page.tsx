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

export default function AuditQualiteLicencePage() {
  return (
    <div className="min-h-screen bg-white">
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
            Management Audit Qualité
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-4xl leading-relaxed">
            Formation spécialisée dans le Management Audit Qualité pour
            requalifier certains profils et répondre aux besoins spécifiques du
            Management d'entreprise
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
                Cette Licence a comme objectif de requalifier certains profils
                de formations existantes et de répondre aux besoins spécifiques
                du Management d'entreprise. Il s'agit d'une formation continue
                ciblée et adaptée, aux différents secteurs publics et privés et
                de consolidation des acquis.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                La LUS en « Management Audit Qualité » « MAQ » propose une
                formation pratique, approfondie, centrée sur une approche
                globale et transversale de l'entreprise. La formation vise à
                former des cadres conscients méthodologique et surtout pratiques
                professionnelles dans tous domaines disciplinaires.
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
                  <span className="text-sm sm:text-base">
                    17 000 DH (nationaux)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <span className="text-sm sm:text-base">Week-end</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Management Audit Qualité"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
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
                      M1: Management Des Organisations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M2: Management des Ressources Humaines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M3: Management et Innovation des Services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M4: Management et Gestion des Services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M5: Management Qualité (Théorie-Pratique)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M6: Langues Étrangères Français
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M7: Projet Début / Étude pratique
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
                      M8: Gestion d'entreprise
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M9: Management des Produits Audit Qualité et Certification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M10: Marketing Digital
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M11: Communication et Comportement
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M12: Gestion des Entreprises et Organisation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M13: Langues Étrangères Français et Anglais
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      M14: Projet Qualité et Certification
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800">
              Débouchés Professionnels
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                La formation offre beaucoup de débouchés dans différents
                domaines dans le secteur public et privé, à occuper un emploi
                opérationnel dans les métiers spécialisés en Management Audit
                Qualité.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Techniciens & Responsables
                  </h3>
                  <p className="text-sm text-gray-600">
                    Techniciens qualités, Responsables qualité dans divers
                    secteurs
                  </p>
                </div>

                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Audit & Contrôle
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsables en audit, Opérateurs et contrôleurs en qualité
                  </p>
                </div>

                <div className="text-center">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-2 text-blue-800">
                    Gestion de Produits
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chargé de produit, Responsable de projet dans le domaine
                    qualité
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
                      <span>Titulaire d'un Bac+2 (ou équivalent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>
                        Étude de dossier sur la base de dossiers et curriculum
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
                    Pièces à Fournir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>CV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 Copies légalisées du BAC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 Copies du diplôme BAC+2 légalisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>2 Copies légalisées de la C.N</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>6 Photos d'identité</span>
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
                    17 000 DH
                  </div>
                  <p className="text-gray-600">
                    Formation complète (étudiants nationaux)
                  </p>
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

            <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Note Importante
              </h3>
              <p className="text-sm text-yellow-700">
                Pour les frais des étudiants internationaux, contactez-nous
                directement.
              </p>
            </div>
          </div>

          {/* Pre-registration */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">
              Pré-inscription
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Effectuez votre pré-inscription en ligne ou contactez directement
              le coordonnateur de la formation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Pré-inscription en Ligne
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
              <p>Tel: +212 661-130894 | Email: hicham.ouakil@uit.ac.ma
              </p>
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
