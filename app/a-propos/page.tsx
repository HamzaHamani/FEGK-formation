import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            À Propos
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Découvrez l'histoire, la mission et les valeurs de la Faculté
            d'Économie et de Gestion de Kénitra
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Notre Mission
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                La Faculté d'Économie et de Gestion de Kénitra s'engage à
                fournir une éducation de qualité supérieure en sciences
                économiques et de gestion, en formant les leaders de demain et
                en contribuant au développement économique et social du Maroc.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Nous nous efforçons d'offrir des programmes innovants qui
                combinent excellence académique et pertinence professionnelle,
                préparant nos étudiants à exceller dans un environnement
                économique en constante évolution.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Campus de la faculté"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Nos Valeurs
            </h2>
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-800" />
                  </div>
                  <CardTitle className="font-playfair text-lg sm:text-xl">
                    Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Nous poursuivons l'excellence dans tous nos programmes,
                    recherches et services, en maintenant les plus hauts
                    standards académiques.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-800" />
                  </div>
                  <CardTitle className="font-playfair text-lg sm:text-xl">
                    Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Nous favorisons un environnement collaboratif où étudiants,
                    professeurs et professionnels travaillent ensemble vers des
                    objectifs communs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-blue-800" />
                  </div>
                  <CardTitle className="font-playfair text-xl">
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    Nous embrassons l'innovation pédagogique et technologique
                    pour préparer nos étudiants aux défis du futur.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* History */}
          <div className="bg-gray-50 rounded-lg p-8 mb-20">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-8 text-center">
              Notre Histoire
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Badge className="bg-blue-800 text-white px-4 py-2">
                      1989
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fondation</h3>
                    <p className="text-gray-600">
                      Création de la Faculté d'Économie et de Gestion dans le
                      cadre de l'Université Ibn Tofail, avec pour mission de
                      former des cadres compétents en économie et gestion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Badge className="bg-blue-800 text-white px-4 py-2">
                      2000
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Expansion des Programmes
                    </h3>
                    <p className="text-gray-600">
                      Lancement des premiers programmes de formation continue
                      pour répondre aux besoins des professionnels en activité.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Badge className="bg-blue-800 text-white px-4 py-2">
                      2010
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Modernisation
                    </h3>
                    <p className="text-gray-600">
                      Modernisation des infrastructures et intégration des
                      nouvelles technologies dans l'enseignement et la
                      recherche.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Badge className="bg-blue-800 text-white px-4 py-2">
                      2020
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Innovation Pédagogique
                    </h3>
                    <p className="text-gray-600">
                      Adoption de l'apprentissage hybride et développement de
                      programmes spécialisés en management et marketing des
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-12 text-center">
              Équipe de Direction
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Responsable Formation"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <CardTitle className="font-playfair text-lg">
                    Pr Hicham OUAKIL
                  </CardTitle>
                  <p className="text-blue-800 font-medium text-sm">
                    Responsable Formation Continue
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-xs mb-2">
                    Tél: 06 61 13 08 94
                  </p>
                  <p className="text-gray-600 text-xs">
                    hicham.ouakil@uit.ac.ma
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Coordinatrice Pédagogique"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <CardTitle className="font-playfair text-lg">
                    Pr Hajar HBADI
                  </CardTitle>
                  <p className="text-green-700 font-medium text-sm">
                    Coordinatrice Pédagogique
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-xs mb-2">
                    Tél: 06 67 48 01 59
                  </p>
                  <p className="text-gray-600 text-xs">hajar.hbadi@uit.ac.ma</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Secrétaire"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <CardTitle className="font-playfair text-lg">
                    Mme Fatima SBAI
                  </CardTitle>
                  <p className="text-blue-800 font-medium text-sm">
                    Secrétaire Formation Continue
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-xs mb-2">
                    Tél: 05 37 32 92 23
                  </p>
                  <p className="text-gray-600 text-xs">fatima.sbai@uit.ac.ma</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Agent d'Accueil"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <CardTitle className="font-playfair text-lg">
                    Mr Najib ELFAR
                  </CardTitle>
                  <p className="text-green-700 font-medium text-sm">
                    Agent d'Accueil et d'Information
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-xs mb-2">
                    Tél: 05 37 32 92 18
                  </p>
                  <p className="text-gray-600 text-xs">najib.elfar@uit.ac.ma</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-blue-900 text-white rounded-lg p-12 mb-20">
            <h2 className="font-playfair text-4xl font-bold mb-12 text-center">
              Nos Réalisations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">35+</div>
                <div className="text-blue-200">Années d'Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Diplômés Annuels</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Professeurs Experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200">Taux d'Insertion</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Découvrez comment notre faculté peut vous aider à atteindre vos
              objectifs académiques et professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programmes">
                <Button
                  size="lg"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-8 py-3"
                >
                  Nos Programmes
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-medium px-8 py-3 bg-transparent"
                >
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
