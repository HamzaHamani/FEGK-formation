import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Users, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-[70vh] sm:min-h-[80vh] lg:h-[85vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/hero.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Blue Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/80"></div>
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
              Développez Votre Carrière avec l'Excellence Académique
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Rejoignez des milliers de professionnels qui ont transformé leur
              carrière grâce à nos programmes académiques rigoureux en
              Management et Marketing des Services à la Faculté d'Économie et de
              Gestion de Kénitra.
            </p>

            {/* Key Features */}
            <div className="flex sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-white/90">
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold">
                  Accrédité
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Formation Reconnue
                </div>
              </div>
              <span className="hidden sm:inline text-white/60">•</span>
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold">
                  Flexible
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Week-ends
                </div>
              </div>
              <span className="hidden sm:inline text-white/60">•</span>
              <div className="text-center">
                <div className="text-sm sm:text-base font-semibold">Réseau</div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Alumni Actifs
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <Link href="/programmes" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-gray-100 font-medium px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg"
                >
                  Explorer les Programmes
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/admissions" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900 font-medium px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg bg-transparent"
                >
                  Candidater Aujourd'hui
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Nos Domaines de Formation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La Faculté d'Économie et de Gestion de Kénitra propose des
              formations spécialisées dans deux domaines d'excellence, adaptées
              aux besoins du marché professionnel moderne.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Management et Marketing des Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-blue-900">
                  Management et Marketing des Services
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nos programmes en Management et Marketing des Services forment
                des professionnels capables de concevoir, commercialiser et
                gérer des offres de services compétitives. Cette formation
                combine expertise managériale et marketing stratégique pour
                répondre aux défis du secteur tertiaire.
              </p>
              <div className="flex gap-3">
                <Badge className="bg-blue-600 text-white">
                  Licence Spécialisée
                </Badge>
                <Badge className="bg-blue-800 text-white">
                  Master Spécialisé
                </Badge>
              </div>
            </div>

            {/* Audit et Qualité */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-green-900">
                  Audit et Qualité
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nos formations en Audit et Qualité préparent les futurs experts
                en management de la qualité et audit organisationnel. Ces
                programmes développent les compétences nécessaires pour
                améliorer les performances et assurer la conformité des
                organisations modernes.
              </p>
              <div className="flex gap-3">
                <Badge className="bg-green-600 text-white">
                  Licence Spécialisée
                </Badge>
                <Badge className="bg-green-800 text-white">
                  Master Spécialisé
                </Badge>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Chaque domaine propose des formations de niveau Licence et Master,
              conçues pour s'adapter à votre parcours professionnel.
            </p>
            <Link href="/a-propos">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white bg-transparent"
              >
                En Savoir Plus sur Nos Formations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Programmes Phares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos programmes emblématiques conçus pour les
              professionnels souhaitant faire progresser leur carrière
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* MMS Program */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">
                    Licence Spécialisée
                  </Badge>
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    Management et Marketing des Services
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>2 Semestres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Week-ends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Format Hybride</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Maîtrisez la conception et la production d'offres de services
                  compétitives adaptées aux besoins clients. Ce programme
                  combine expertise en management et marketing très appréciée
                  par les employeurs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-800">
                    16 000 DH
                  </div>
                  <Link href="/programmes/mms">
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                      En Savoir Plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* MSMS Program */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-r from-blue-700 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">
                    Master Spécialisé
                  </Badge>
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    Management Stratégique et Marketing
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>18 Mois</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Week-ends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Niveau Avancé</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Formation avancée pour les cadres du middle et top management
                  dans le secteur des services. Développez votre pensée
                  stratégique et vos compétences de leadership pour des postes
                  supérieurs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-800">
                    31 000 DH
                  </div>
                  <Link href="/programmes/msms">
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                      En Savoir Plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/programmes">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white bg-transparent"
              >
                Voir Tous les Programmes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-8">
                Pourquoi Choisir la Faculté d'Économie et de Gestion ?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Excellence Académique
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Plus de 30 ans d'excellence éducative avec des programmes
                      conçus par des universitaires de premier plan et des
                      professionnels de l'industrie.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Focus Professionnel
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Programmes spécifiquement conçus pour les professionnels
                      en activité avec des horaires flexibles en week-end et des
                      options d'apprentissage hybride.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Impact Carrière
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      95% de nos diplômés rapportent une progression de carrière
                      dans les deux ans suivant l'achèvement du programme, avec
                      de solides connexions industrielles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Étudiants en classe"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-200">Années d'Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Diplômés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Taux de Réussite</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-200">Progression de Carrière</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
              Actualités & Événements
            </h2>
            <p className="text-xl text-gray-600">
              Restez informé de nos dernières nouvelles et événements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Actualité"
                  alt="Actualité"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">Actualités</Badge>
                <h3 className="font-playfair text-xl font-bold mb-3">
                  Ouverture des Inscriptions 2024-2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Les inscriptions pour l'année académique 2024-2025 sont
                  maintenant ouvertes. Découvrez les modalités et dates
                  importantes.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent"
                >
                  Lire la Suite
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Événement"
                  alt="Événement"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">Événements</Badge>
                <h3 className="font-playfair text-xl font-bold mb-3">
                  Journée Portes Ouvertes
                </h3>
                <p className="text-gray-600 mb-4">
                  Venez découvrir nos programmes, rencontrer nos professeurs et
                  visiter nos installations lors de notre journée portes
                  ouvertes.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent"
                >
                  S'Inscrire
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Témoignage"
                  alt="Témoignage"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">Témoignages</Badge>
                <h3 className="font-playfair text-xl font-bold mb-3">
                  Succès de nos Diplômés
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les parcours inspirants de nos anciens étudiants qui
                  excellent dans leurs carrières professionnelles.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent"
                >
                  Voir Plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-xl mb-12 text-blue-100 leading-relaxed">
            Les inscriptions sont ouvertes. Faites le premier pas vers
            l'excellence académique et professionnelle.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="font-semibold mb-4 text-blue-200">
                Contact Responsable
              </h3>
              <p className="text-white font-medium text-lg">Pr Hicham OUAKIL</p>
              <p className="text-blue-200">Tél: 06 61 13 08 94</p>
              <p className="text-blue-200">Email: hicham.ouakil@uit.ac.ma</p>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="font-semibold mb-4 text-blue-200">Campus</h3>
              <p className="text-white font-medium text-lg">
                Campus Universitaire Maamora
              </p>
              <p className="text-blue-200">BP: 2010 Kénitra</p>
              <p className="text-blue-200">Tél: 05 37 32 92 18</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/admissions">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-10 py-4 text-lg"
              >
                Candidater Maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-10 py-4 text-lg bg-transparent"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
