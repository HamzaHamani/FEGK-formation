import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, TrendingUp, Globe, Calculator } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Programme de Sciences Économiques</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Une formation complète et moderne qui vous prépare aux défis économiques contemporains
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Vue d'Ensemble du Programme</h2>
              <p className="text-gray-600 mb-6">
                Notre programme de Sciences Économiques offre une formation rigoureuse et complète, combinant les
                fondements théoriques de l'économie avec les applications pratiques les plus récentes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>3 ans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Max 30 étudiants</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>180 ECTS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Français/Anglais</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Salle de classe économie"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Curriculum</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">1ère Année</Badge>
                  <CardTitle className="font-playfair">Fondements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Microéconomie I</li>
                    <li>• Macroéconomie I</li>
                    <li>• Mathématiques pour l'Économie</li>
                    <li>• Statistiques Descriptives</li>
                    <li>• Histoire de la Pensée Économique</li>
                    <li>• Comptabilité Générale</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">2ème Année</Badge>
                  <CardTitle className="font-playfair">Approfondissement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Microéconomie II</li>
                    <li>• Macroéconomie II</li>
                    <li>• Économétrie</li>
                    <li>• Économie Monétaire</li>
                    <li>• Économie Internationale</li>
                    <li>• Finance d'Entreprise</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">3ème Année</Badge>
                  <CardTitle className="font-playfair">Spécialisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Économie du Développement</li>
                    <li>• Politique Économique</li>
                    <li>• Économie Numérique</li>
                    <li>• Projet de Fin d'Études</li>
                    <li>• Stage Professionnel</li>
                    <li>• Séminaires Spécialisés</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Spécialisations Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="font-playfair">Économie Financière</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Spécialisez-vous dans les marchés financiers, la gestion des risques et l'analyse des
                    investissements.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Globe className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="font-playfair">Économie Internationale</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Maîtrisez les enjeux du commerce international et de la mondialisation économique.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Calculator className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="font-playfair">Économie Quantitative</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Développez vos compétences en modélisation économique et analyse de données.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-700 mb-2" />
                  <CardTitle className="font-playfair">Économie du Développement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Concentrez-vous sur les politiques de développement et l'économie des pays émergents.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Career Prospects */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Débouchés Professionnels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Secteur Bancaire</h3>
                <p className="text-sm text-gray-600">Analyste financier, Conseiller clientèle, Risk manager</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Consulting</h3>
                <p className="text-sm text-gray-600">Consultant économique, Analyste stratégique</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Secteur Public</h3>
                <p className="text-sm text-gray-600">Économiste, Chargé d'études, Attaché économique</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Recherche</h3>
                <p className="text-sm text-gray-600">Doctorat, Think tanks, Organismes internationaux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Intéressé par ce Programme ?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Découvrez comment postuler et rejoindre notre communauté d'étudiants.
          </p>
          <Link href="/admissions">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-medium">
              Voir les Conditions d'Admission
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
