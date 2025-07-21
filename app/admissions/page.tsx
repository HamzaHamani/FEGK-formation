import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Users, AlertCircle, Download } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Rejoignez nos programmes d'excellence en Management et Marketing des Services. Découvrez le processus
            d'admission et les critères de sélection.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Dates Importantes - Année 2024-2025</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Ouverture des candidatures:</strong>
                    <br />
                    15 Mars 2024
                  </div>
                  <div>
                    <strong>Date limite de candidature:</strong>
                    <br />
                    30 Juin 2024
                  </div>
                  <div>
                    <strong>Résultats d'admission:</strong>
                    <br />
                    15 Juillet 2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Processus d'Admission</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Étape 1</Badge>
                </div>
                <CardTitle className="flex items-center gap-2 font-playfair">
                  <FileText className="h-5 w-5 text-blue-700" />
                  Candidature en Ligne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Soumettez votre dossier complet via notre plateforme en ligne. Tous les documents requis doivent être
                  fournis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Étape 2</Badge>
                </div>
                <CardTitle className="flex items-center gap-2 font-playfair">
                  <Users className="h-5 w-5 text-blue-700" />
                  Évaluation du Dossier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Notre commission d'admission évalue votre dossier académique, votre motivation et votre projet
                  professionnel.
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
                  Entretien & Admission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Les candidats présélectionnés passent un entretien de motivation. Les résultats sont communiqués sous
                  48h.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Requirements */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Conditions d'Admission</h2>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair">Prérequis Académiques</CardTitle>
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
              <h2 className="text-3xl font-bold mb-6 font-playfair">Documents Requis</h2>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair">Dossier de Candidature</CardTitle>
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
            <h2 className="text-3xl font-bold mb-6 text-center font-playfair">Frais de Scolarité</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center font-playfair">Étudiants Marocains</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">15 000 DH</div>
                  <p className="text-gray-600">par année</p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center font-playfair">Étudiants Internationaux</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">25 000 DH</div>
                  <p className="text-gray-600">par année</p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center font-playfair">Frais d'Inscription</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">2 000 DH</div>
                  <p className="text-gray-600">une seule fois</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              * Possibilités de bourses d'études disponibles selon les critères sociaux
            </p>
          </div>

          {/* Application Form */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">Prêt à Candidater ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Téléchargez le dossier de candidature et soumettez votre demande avant la date limite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Download className="mr-2 h-4 w-4" />
                Télécharger le Dossier
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Questions ? Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
