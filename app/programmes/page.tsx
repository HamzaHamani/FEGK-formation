"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Euro,
  Calendar,
  Users,
  ArrowRight,
  Search,
  Filter,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function ProgrammesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

  const programs = [
    {
      id: "mms",
      title: "Management et Marketing des Services",
      level: "Licence Spécialisée",
      levelCode: "license",
      duration: "2 semestres",
      durationCode: "short",
      cost: "16 000 DH (1000 DH dossier + 15 000 DH formation en 2 tranches)",
      schedule: "Week-end (Samedi et Dimanche)",
      format: "Hybride",
      description:
        "Formation spécialisée pour concevoir et produire une offre de services compétitive adaptée aux besoins clients",
      requirements: "Bac+2 (public ou privé accrédité)",
      careers: [
        "Responsable marketing",
        "Chef de projet innovation",
        "Directeur d'établissement hôtelier",
        "Responsable clientèle",
        "Chef de projet expérience client",
        "Directeur ou gérant",
      ],
      featured: true,
    },
    {
      id: "msms",
      title: "Management Stratégique et Marketing des Services",
      level: "Master Spécialisé",
      levelCode: "master",
      duration: "4 semestres",
      durationCode: "long",
      cost: "31 000 DH (1000 DH dossier + 30 000 DH formation en 4 tranches)",
      schedule: "Week-end (Samedi et Dimanche)",
      format: "Hybride",
      description:
        "Formation de Master en management stratégique et marketing des services, développant une expertise approfondie du secteur tertiaire",
      requirements: "Bac+3 (Licence ou équivalent)",
      careers: [
        "Directeur marketing",
        "Consultant stratégique",
        "Responsable développement commercial",
        "Chef d'entreprise",
        "Manager général",
        "Consultant en services",
      ],
      featured: true,
    },
    {
      id: "audit-qualite-licence",
      title: "Management Audit Qualité",
      level: "Licence  Spécialisée ",
      levelCode: "license",
      duration: "2 semestres",
      durationCode: "short",
      cost: "16 000 DH (1000 DH dossier + 15 000 DH formation)",
      schedule: "Week-end",
      format: "Hybride",
      description:
        "Formation spécialisée dans le Management Audit Qualité pour requalifier certains profils et répondre aux besoins spécifiques du Management d'entreprise",
      requirements: "Bac+2 (ou équivalent)",
      careers: [
        "Techniciens qualités",
        "Responsables qualité",
        "Responsables en audit",
        "Opérateurs et contrôleurs en qualité",
        "Chargé de produit",
        "Responsable de projet",
      ],
      featured: true,
      comingSoon: false,
    },
    {
      id: "audit-qualite-master",
      title: "Management Audit Qualité Industrie & Service",
      level: "Master Spécialisé ",
      levelCode: "master",
      duration: "4 semestres (2 ans)",
      durationCode: "long",
      cost: "31 000 DH (1000 DH dossier + 30 000 DH formation en 5 tranches)",
      schedule: "Week-end",
      format: "Hybride",
      description:
        "Formation avancée dans le Management Audit Qualité Industrie & Service pour former des cadres dans le domaine spécialisé en Management Audit Qualité",
      requirements: "Bac+3 (ou équivalent)",
      careers: [
        "Responsables qualité dans différents secteurs",
        "Responsables audit dans différents secteurs",
        "Opérateurs et contrôleurs en qualité",
        "Opérateurs dans des bureaux et cabinets de consultants",
        "Responsable relation client",
        "Chargé d'affaires",
        "Consultants en organisation",
      ],
      featured: true,
      comingSoon: false,
    },
  ];

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      levelFilter === "all" || program.levelCode === levelFilter;
    const matchesDuration =
      durationFilter === "all" || program.durationCode === durationFilter;

    return matchesSearch && matchesLevel && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nos Programmes
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Découvrez notre gamme complète de formations spécialisées en
            management et marketing des services, conçues pour répondre aux
            besoins du marché professionnel
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 sm:py-12 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch lg:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input
                placeholder="Rechercher un programme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Filtres:
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-full sm:w-48 h-10 sm:h-auto text-sm sm:text-base">
                    <SelectValue placeholder="Niveau d'études" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les niveaux</SelectItem>
                    <SelectItem value="license">Licence Spécialisée</SelectItem>
                    <SelectItem value="master">Master Spécialisé</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={durationFilter}
                  onValueChange={setDurationFilter}
                >
                  <SelectTrigger className="w-full sm:w-40 h-10 sm:h-auto text-sm sm:text-base">
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
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {filteredPrograms.length} programme
            {filteredPrograms.length > 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ${
                  program.comingSoon ? "opacity-75" : ""
                }`}
              >
                <div
                  className={`p-4 sm:p-6 lg:p-8 text-white flex flex-col justify-between ${
                    program.comingSoon ? "bg-gray-600" : "bg-blue-800"
                  }`}
                  style={{ minHeight: "280px" }}
                >
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                      <Badge
                        className={`font-semibold px-3 py-1 text-sm sm:text-base cursor-default ${
                          program.comingSoon
                            ? "bg-white text-gray-600"
                            : "bg-white text-blue-800"
                        }`}
                      >
                        {program.level}
                      </Badge>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Badge
                          variant="outline"
                          className="border-white  text-white bg-white/20 font-semibold text-xs sm:text-sm"
                        >
                          {program.requirements}
                        </Badge>
                        {program.featured && !program.comingSoon && (
                          <Badge className="bg-yellow-500 text-yellow-900 font-semibold text-xs sm:text-sm">
                            Populaire
                          </Badge>
                        )}
                        {program.comingSoon && (
                          <Badge className="bg-orange-500 text-white font-semibold text-xs sm:text-sm">
                            Bientôt
                          </Badge>
                        )}
                      </div>
                    </div>
                    <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                      {program.title}
                    </h3>
                  </div>
                  <div className="flex-1 flex items-end">
                    <p
                      className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
                        program.comingSoon ? "text-gray-200" : "text-blue-100"
                      }`}
                    >
                      {program.description}
                    </p>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Clock
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${
                            program.comingSoon
                              ? "text-gray-600"
                              : "text-blue-800"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          Durée
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          {program.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Euro
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${
                            program.comingSoon
                              ? "text-gray-600"
                              : "text-blue-800"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          Investissement
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          {program.cost}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Calendar
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${
                            program.comingSoon
                              ? "text-gray-600"
                              : "text-blue-800"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          Planning
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          {program.schedule}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                          program.comingSoon ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <Users
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${
                            program.comingSoon
                              ? "text-gray-600"
                              : "text-blue-800"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          Format
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          {program.format}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 rounded-lg flex-1">
                    <h4 className="font-semibold mb-3 text-gray-900 text-sm sm:text-base">
                      Débouchés Professionnels
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.careers.map((career, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    {program.comingSoon ? (
                      <Button
                        disabled
                        className="w-full bg-gray-400 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg cursor-not-allowed"
                      >
                        Bientôt Disponible
                      </Button>
                    ) : (
                      <Link href={`/programmes/${program.id}`}>
                        <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                          Découvrir le Programme
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Aucun programme trouvé
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
                Essayez de modifier vos critères de recherche ou de supprimer
                les filtres.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setLevelFilter("all");
                  setDurationFilter("all");
                }}
                variant="outline"
                className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border-blue-800 text-blue-800 hover:bg-blue-50"
              >
                Réinitialiser les Filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Comparaison des Programmes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
              Trouvez le programme qui correspond le mieux à votre profil
            </p>
          </div>

          {/* License Programs Comparison */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                Comparaison des Programmes Licence Universitaire Spécialisée
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Management et Marketing des Services vs Management Audit Qualité
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden min-w-[600px]">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                      Critères
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">
                      MMS (Licence)
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">
                      Audit Qualité (LUS)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Niveau d'entrée
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-blue-800 font-medium text-sm sm:text-base">
                      Bac+2 (public ou privé)
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-green-700 font-medium text-sm sm:text-base">
                      Bac+2 (ou équivalent)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Durée
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-blue-800 font-medium text-sm sm:text-base">
                      2 semestres
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-green-700 font-medium text-sm sm:text-base">
                      2 semestres
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Investissement
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-blue-800 font-medium text-sm sm:text-base">
                      16 000 DH (+ 1000 DH dossier)
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-green-700 font-medium text-sm sm:text-base">
                      16 000 DH (+ 1000 DH dossier)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Domaine principal
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Marketing des Services
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Management Audit Qualité
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Public cible
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Professionnels du secteur tertiaire
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Professionnels de la qualité
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Débouchés principaux
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Responsable marketing, Chef de projet
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Responsable qualité, Auditeur
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Master Programs Comparison */}
          <div>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                Comparaison des Programmes Master Universitaire Spécialisé
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Management Stratégique Marketing des Services vs Management
                Audit Qualité
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden min-w-[600px]">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                      Critères
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">
                      MSMS (Master)
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">
                      Audit Qualité (MUS)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Niveau d'entrée
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-blue-800 font-medium text-sm sm:text-base">
                      Bac+3 (Licence ou équivalent)
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-green-700 font-medium text-sm sm:text-base">
                      Bac+3 (Licence ou équivalent)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Durée
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-blue-800 font-medium text-sm sm:text-base">
                      4 semestres
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-green-700 font-medium text-sm sm:text-base">
                      4 semestres
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Investissement
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-blue-800 font-medium text-sm sm:text-base">
                      31 000 DH (+ 1000 DH dossier)
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-green-700 font-medium text-sm sm:text-base">
                      32 000 DH (+ 1000 DH dossier)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Domaine principal
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Management Stratégique & Marketing
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Management Audit Qualité
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Public cible
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Managers et dirigeants
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Responsables qualité seniors
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                      Débouchés principaux
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Directeur marketing, Chef d'entreprise
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 text-xs sm:text-sm">
                      Directeur qualité, Consultant senior
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Prêt à Commencer ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 px-2 sm:px-0">
            Choisissez le programme qui correspond à vos ambitions et rejoignez
            notre communauté d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Processus d'Admission
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
