import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Euro, Calendar, Users, ArrowRight, CheckCircle, Star, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 px-4 py-2">Nos Programmes</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Formations d'Excellence</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos programmes spécialisés en Management et Marketing des Services, conçus pour les
              professionnels ambitieux
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">2</div>
              <div className="text-blue-200 text-sm">Programmes Actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-blue-200 text-sm">Taux de Réussite</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-blue-200 text-sm">Diplômés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">85%</div>
              <div className="text-blue-200 text-sm">Insertion Pro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choisissez Votre Parcours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deux niveaux de formation pour répondre à vos ambitions professionnelles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* MMS Formation */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-white text-blue-700 font-semibold px-3 py-1">Licence Spécialisée</Badge>
                    <Badge variant="outline" className="border-white text-white bg-white/20 font-semibold">
                      Niveau Bac+2
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    Management et Marketing des Services
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Maîtrisez la conception et la production d'offres de services compétitives adaptées aux besoins
                    clients
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Durée</div>
                      <div className="text-gray-600">2 semestres</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Euro className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Coût</div>
                      <div className="text-gray-600">16 000 DH</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Planning</div>
                      <div className="text-gray-600">Weekend</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Format</div>
                      <div className="text-gray-600">Hybride</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Points Forts du Programme</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Double compétence Management & Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Approche pratique avec études de cas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Projet de fin d'études professionnel</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900">Débouchés Professionnels</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Responsable marketing, Chef de projet innovation, Directeur d'établissement hôtelier, Responsable
                    clientèle, Chargé d'études marketing
                  </p>
                </div>

                <Link href="/mms">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg">
                    Découvrir le Programme Complet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* MSMS Formation */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-white text-green-700 font-semibold px-3 py-1">Master Spécialisé</Badge>
                    <Badge variant="outline" className="border-white text-white bg-white/20 font-semibold">
                      Niveau Bac+3
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    Management Stratégique et Marketing des Services
                  </h3>
                  <p className="text-green-100 text-lg leading-relaxed">
                    Formation avancée pour les cadres du middle et top management dans le secteur des services
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Durée</div>
                      <div className="text-gray-600">18 mois</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Euro className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Coût</div>
                      <div className="text-gray-600">31 000 DH</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Planning</div>
                      <div className="text-gray-600">Weekend</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Niveau</div>
                      <div className="text-gray-600">Avancé</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Excellence du Programme</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Formation de cadres supérieurs poly-compétents</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Management international et stratégique</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Innovation et transformation digitale</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-900">Opportunités de Carrière</h4>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Marketing stratégique, Management international, Chargé de veille innovation, Consultant en
                    stratégie, Directeur général, Entrepreneur
                  </p>
                </div>

                <Link href="/msms">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg">
                    Découvrir le Programme Complet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comparaison des Programmes</h2>
            <p className="text-xl text-gray-600">Trouvez la formation qui correspond à votre profil</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Critères</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">MMS (Licence)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-900">MSMS (Master)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Niveau d'entrée</td>
                  <td className="px-6 py-4 text-center text-blue-700">Bac+2</td>
                  <td className="px-6 py-4 text-center text-green-700">Bac+3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Durée</td>
                  <td className="px-6 py-4 text-center text-blue-700">2 semestres</td>
                  <td className="px-6 py-4 text-center text-green-700">18 mois (4 semestres)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Coût total</td>
                  <td className="px-6 py-4 text-center text-blue-700">16 000 DH</td>
                  <td className="px-6 py-4 text-center text-green-700">31 000 DH</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Public cible</td>
                  <td className="px-6 py-4 text-center text-blue-700">Professionnels junior</td>
                  <td className="px-6 py-4 text-center text-green-700">Cadres expérimentés</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Spécialisation</td>
                  <td className="px-6 py-4 text-center text-blue-700">Marketing des services</td>
                  <td className="px-6 py-4 text-center text-green-700">Management stratégique</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer Votre Transformation ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choisissez le programme qui correspond à vos ambitions et rejoignez notre communauté d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 h-auto font-semibold"
              >
                Voir les Admissions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 h-auto bg-transparent font-semibold"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
