"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Euro, Calendar, Users, ArrowRight, Search, Filter, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ProgrammesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [durationFilter, setDurationFilter] = useState("all")

  const programs = [
    {
      id: "mms",
      title: "Management et Marketing des Services",
      level: "Licence Spécialisée",
      levelCode: "license",
      duration: "2 semestres",
      durationCode: "short",
      cost: "16 000 DH",
      schedule: "Week-end",
      format: "Hybride",
      description:
        "Formation spécialisée pour concevoir et produire une offre de services compétitive adaptée aux besoins clients",
      requirements: "Bac+2",
      careers: [
        "Responsable marketing",
        "Chef de projet innovation",
        "Directeur d'établissement hôtelier",
        "Responsable clientèle",
      ],
      featured: true,
    },
    {
      id: "msms",
      title: "Management Stratégique et Marketing des Services",
      level: "Master Spécialisé",
      levelCode: "master",
      duration: "18 mois",
      durationCode: "long",
      cost: "31 000 DH",
      schedule: "Week-end",
      format: "Hybride",
      description: "Formation avancée pour les cadres du middle et top management dans le secteur des services",
      requirements: "Bac+3",
      careers: ["Marketing stratégique", "Management international", "Consultant en stratégie", "Directeur général"],
      featured: true,
    },
    {
      id: "audit-qualite-licence",
      title: "Audit et Qualité",
      level: "Licence Spécialisée",
      levelCode: "license",
      duration: "À définir",
      durationCode: "medium",
      cost: "À définir",
      schedule: "En préparation",
      format: "Hybride",
      description: "Formation spécialisée en audit et management de la qualité pour les entreprises modernes",
      requirements: "Bac+2",
      careers: ["Auditeur qualité", "Responsable qualité", "Consultant en amélioration continue"],
      featured: false,
      comingSoon: true,
    },
    {
      id: "audit-qualite-master",
      title: "Audit et Qualité",
      level: "Master Spécialisé",
      levelCode: "master",
      duration: "À définir",
      durationCode: "long",
      cost: "À définir",
      schedule: "En préparation",
      format: "Hybride",
      description: "Formation avancée en audit et management de la qualité pour les cadres supérieurs",
      requirements: "Bac+3",
      careers: ["Directeur qualité", "Auditeur senior", "Consultant en management de la qualité"],
      featured: false,
      comingSoon: true,
    },
  ]

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = levelFilter === "all" || program.levelCode === levelFilter
    const matchesDuration = durationFilter === "all" || program.durationCode === durationFilter

    return matchesSearch && matchesLevel && matchesDuration
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Nos Programmes</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de formations spécialisées en management et marketing des services, conçues
            pour répondre aux besoins du marché professionnel
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Rechercher un programme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filtres:</span>
              </div>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Niveau d'études" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les niveaux</SelectItem>
                  <SelectItem value="license">Licence Spécialisée</SelectItem>
                  <SelectItem value="master">Master Spécialisé</SelectItem>
                </SelectContent>
              </Select>

              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Durée" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes durées</SelectItem>
                  <SelectItem value="short">Court (&lt;= 1 an)</SelectItem>
                  <SelectItem value="medium">Moyen (1-2 ans)</SelectItem>
                  <SelectItem value="long">Long (&gt; 2 ans)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {filteredPrograms.length} programme{filteredPrograms.length > 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  program.comingSoon ? "opacity-75" : ""
                }`}
              >
                <div className={`p-8 text-white ${program.comingSoon ? "bg-gray-600" : "bg-blue-800"}`}>
                  <div className="flex justify-between items-start mb-6">
                    <Badge
                      className={`font-semibold px-3 py-1 ${
                        program.comingSoon ? "bg-white text-gray-600" : "bg-white text-blue-800"
                      }`}
                    >
                      {program.level}
                    </Badge>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="border-white text-white bg-white/20 font-semibold">
                        {program.requirements}
                      </Badge>
                      {program.featured && !program.comingSoon && (
                        <Badge className="bg-yellow-500 text-yellow-900 font-semibold">Populaire</Badge>
                      )}
                      {program.comingSoon && <Badge className="bg-orange-500 text-white font-semibold">Bientôt</Badge>}
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-4 leading-tight">{program.title}</h3>
                  <p className={`text-lg leading-relaxed ${program.comingSoon ? "text-gray-200" : "text-blue-100"}`}>
                    {program.description}
                  </p>
                </div>

                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Clock className={`h-5 w-5 ${program.comingSoon ? "text-gray-600" : "text-blue-800"}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Durée</div>
                        <div className="text-gray-600">{program.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Euro className={`h-5 w-5 ${program.comingSoon ? "text-gray-600" : "text-blue-800"}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Investissement</div>
                        <div className="text-gray-600">{program.cost}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Calendar className={`h-5 w-5 ${program.comingSoon ? "text-gray-600" : "text-blue-800"}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Planning</div>
                        <div className="text-gray-600">{program.schedule}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Users className={`h-5 w-5 ${program.comingSoon ? "text-gray-600" : "text-blue-800"}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Format</div>
                        <div className="text-gray-600">{program.format}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-gray-900">Débouchés Professionnels</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.careers.map((career, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {program.comingSoon ? (
                    <Button
                      disabled
                      className="w-full bg-gray-400 text-white font-semibold py-4 text-lg cursor-not-allowed"
                    >
                      Bientôt Disponible
                    </Button>
                  ) : (
                    <Link href={`/programmes/${program.id}`}>
                      <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 text-lg">
                        Découvrir le Programme
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">Aucun programme trouvé</h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou de supprimer les filtres.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setLevelFilter("all")
                  setDurationFilter("all")
                }}
                variant="outline"
                className="border-blue-800 text-blue-800 hover:bg-blue-50"
              >
                Réinitialiser les Filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Comparaison des Programmes</h2>
            <p className="text-lg text-gray-600">Trouvez le programme qui correspond le mieux à votre profil</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Critères</th>
                  <th className="px-6 py-4 text-center font-semibold">MMS (Licence)</th>
                  <th className="px-6 py-4 text-center font-semibold">MSMS (Master)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Niveau d'entrée</td>
                  <td className="px-6 py-4 text-center text-blue-800 font-medium">Bac+2</td>
                  <td className="px-6 py-4 text-center text-blue-800 font-medium">Bac+3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Durée</td>
                  <td className="px-6 py-4 text-center text-blue-800 font-medium">2 semestres</td>
                  <td className="px-6 py-4 text-center text-blue-800 font-medium">18 mois</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Investissement</td>
                  <td className="px-6 py-4 text-center text-blue-800 font-medium">16 000 DH</td>
                  <td className="px-6 py-4 text-center text-blue-800 font-medium">31 000 DH</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Public cible</td>
                  <td className="px-6 py-4 text-center text-gray-700">Professionnels junior</td>
                  <td className="px-6 py-4 text-center text-gray-700">Cadres expérimentés</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Spécialisation</td>
                  <td className="px-6 py-4 text-center text-gray-700">Marketing des services</td>
                  <td className="px-6 py-4 text-center text-gray-700">Management stratégique</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">Prêt à Commencer ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choisissez le programme qui correspond à vos ambitions et rejoignez notre communauté d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3">
                Processus d'Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 bg-transparent"
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
