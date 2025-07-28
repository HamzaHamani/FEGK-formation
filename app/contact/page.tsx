import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Users, MessageSquare, Facebook, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FEGK - Formation Continue Management Audit Qualité | Kénitra",
  description:
    "Contactez FEGK pour vos questions sur les formations Management et Audit Qualité. Adresse, téléphone, email. Campus Universitaire Maamora, Kénitra.",
  keywords: [
    "contact FEGK",
    "FEGK Kénitra adresse",
    "formation continue contact",
    "campus Maamora",
    "téléphone FEGK",
    "email FEGK",
    "nous contacter",
    "information formation",
    "bureau FEGK",
    "horaires FEGK",
    // University-specific keywords
    "contact UIT",
    "contact Université Ibn Tofail",
    "FEGK Ibn Tofail contact",
    "Faculté Économie Gestion contact",
    "campus Ibn Tofail",
    // Location keywords
    "Kénitra contact université",
    "Rabat Sale Kénitra formation",
    "Maamora campus contact",
    "adresse université Kénitra",
    // Service keywords
    "information admission",
    "renseignements formation",
    "contact formation continue",
    "service étudiant FEGK",
    "secrétariat FEGK",
    "administration FEGK",
    "orientation FEGK",
    "conseil formation",
    // Program inquiry keywords
    "information MMS",
    "information MSMS",
    "renseignement Master Management",
    "contact formation audit",
    "information formation qualité",
    "contact LSU MSU",
    "renseignement licence master",
  ],
  openGraph: {
    title: "Contact FEGK - Nous Contacter",
    description:
      "Contactez-nous pour toute question sur nos formations Management et Audit Qualité",
    url: "https://managementauditetqualite.com/contact",
    siteName: "Management Audit et Qualité - FEGK",
    images: [
      {
        url: "/LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "Contact FEGK Formation Continue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FEGK - Nous Contacter",
    description: "Contactez-nous pour toute question sur nos formations",
    images: ["/LOGO.jpg"],
  },
  alternates: {
    canonical: "https://managementauditetqualite.com/contact",
  },
  other: {
    "facebook:page": "https://www.facebook.com/people/MUS-LUS/61578352602309/",
    "linkedin:company": "https://www.linkedin.com/company/108265562",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Contactez-Nous
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl leading-relaxed px-2 sm:px-0">
            Notre équipe est là pour répondre à toutes vos questions concernant
            nos programmes de formation continue.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Informations de Contact
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Adresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm sm:text-base">
                      Faculté d'Économie et de Gestion
                    </p>
                    <p className="text-sm sm:text-base">
                      Campus Universitaire Maamora
                    </p>
                    <p className="text-sm sm:text-base">
                      BP: 2010 Kénitra, Maroc
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Téléphone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Faculty Numbers */}
                      <div>
                        <p className="text-sm sm:text-base font-semibold mb-2 text-blue-800">
                          Faculté:
                        </p>
                        <div className="space-y-1">
                          <p className="text-sm sm:text-base flex items-center gap-2">
                            <Phone className="h-3 w-3 text-gray-500" />
                            +212 537 32 93 54
                          </p>
                          <p className="text-sm sm:text-base flex items-center gap-2">
                            <Phone className="h-3 w-3 text-gray-500" />
                            +212 537 32 93 55 (Admissions)
                          </p>
                        </div>
                      </div>

                      {/* Administrative Team */}
                      <div>
                        <p className="text-sm sm:text-base font-semibold mb-3 text-blue-800">
                          Équipe Administrative:
                        </p>
                        <div className="grid gap-3">
                          <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-600">
                            <p className="font-medium text-sm text-gray-900">
                              M. Hicham Ouakil
                            </p>
                            <p className="text-xs text-gray-600">Vice Doyen</p>
                            <p className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" />
                              +212 661-130894
                            </p>
                          </div>

                          <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-600">
                            <p className="font-medium text-sm text-gray-900">
                              Mme. Houda Lechheb
                            </p>
                            <p className="text-xs text-gray-600">
                              Équipe de Direction
                            </p>
                            <p className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" />
                              +212 661-849348
                            </p>
                          </div>

                          <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-600">
                            <p className="font-medium text-sm text-gray-900">
                              M. Mohammed Elatmani
                            </p>
                            <p className="text-xs text-gray-600">
                              Équipe de Direction
                            </p>
                            <p className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" />
                              +212 635-587844
                            </p>
                          </div>

                          <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-600">
                            <p className="font-medium text-sm text-gray-900">
                              M. Hamza Hamani
                            </p>
                            <p className="text-xs text-gray-600">
                              Équipe de Direction
                            </p>
                            <p className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" />
                              +212 693-517484
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Faculty Emails */}
                      <div>
                        <p className="text-sm sm:text-base font-semibold mb-2 text-blue-800">
                          Faculté:
                        </p>
                        <div className="space-y-1">
                          <p className="text-sm sm:text-base flex items-center gap-2">
                            <Mail className="h-3 w-3 text-gray-500" />
                            economie@uit.ac.ma
                          </p>
                          <p className="text-sm sm:text-base flex items-center gap-2">
                            <Mail className="h-3 w-3 text-gray-500" />
                            admissions.eco@uit.ac.ma
                          </p>
                        </div>
                      </div>

                      {/* Administrative Team Emails */}
                      <div>
                        <p className="text-sm sm:text-base font-semibold mb-3 text-blue-800">
                          Équipe Administrative:
                        </p>
                        <div className="grid gap-3">
                          <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                            <p className="font-medium text-sm text-gray-900">
                              M. Hicham Ouakil
                            </p>
                            <p className="text-xs text-gray-600">Vice Doyen</p>
                            <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                              <Mail className="h-3 w-3" />
                              hicham.ouakil@uit.ac.ma
                            </p>
                          </div>

                          <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                            <p className="font-medium text-sm text-gray-900">
                              Mme. Houda Lechheb
                            </p>
                            <p className="text-xs text-gray-600">
                              Équipe de Direction
                            </p>
                            <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                              <Mail className="h-3 w-3" />
                              houda.lechheb@uit.ac.ma
                            </p>
                          </div>

                          <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                            <p className="font-medium text-sm text-gray-900">
                              M. Mohammed Elatmani
                            </p>
                            <p className="text-xs text-gray-600">
                              Équipe de Direction
                            </p>
                            <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                              <Mail className="h-3 w-3" />
                              mohammed.elatmani@uit.ac.ma
                            </p>
                          </div>

                          <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-600">
                            <p className="font-medium text-sm text-gray-900">
                              M. Hamza Hamani
                            </p>
                            <p className="text-xs text-gray-600">
                              Équipe de Direction
                            </p>
                            <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                              <Mail className="h-3 w-3" />
                              hamza.hamani@uit.ac.ma
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Horaires de Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm sm:text-base">
                      <strong>Disponible 24h/7j</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Notre équipe vous répond en continu
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Suivez-nous
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs sm:text-sm text-gray-600 mb-4">
                      Restez connectés avec FEGK sur nos réseaux sociaux
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/people/MUS-LUS/61578352602309/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                        aria-label="Suivez-nous sur Facebook - MUS LUS FEGK"
                        title="Page Facebook officielle de MUS LUS - Formation Continue FEGK"
                      >
                        <Facebook className="h-6 w-6 text-white" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/108265562"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                        aria-label="Suivez-nous sur LinkedIn - FEGK Formation Continue"
                        title="Profil LinkedIn officiel de FEGK - Formation Continue Management Audit Qualité"
                      >
                        <Linkedin className="h-6 w-6 text-white" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Envoyez-nous un Message
              </h2>

              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    Contact WhatsApp
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Contactez directement notre équipe administrative via
                    WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/212661130894"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-start gap-3 px-6">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Contacter M. Hicham Ouakil
                      </Button>
                    </a>

                    <a
                      href="https://wa.me/212661849348"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-start gap-3 px-6">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Contacter Mme. Houda Lechheb
                      </Button>
                    </a>

                    <a
                      href="https://wa.me/212635587844"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-start gap-3 px-6">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Contacter M. Mohammed Elatmani
                      </Button>
                    </a>

                    <a
                      href="https://wa.me/212693517484"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-start gap-3 px-6">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Contacter M. Hamza Hamani
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              Questions Fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quand commencent les cours ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    L'année académique débute en septembre. Les cours
                    d'orientation ont lieu la première semaine de septembre.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Y a-t-il des bourses disponibles ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Oui, nous offrons des bourses d'études basées sur le mérite
                    académique et les critères sociaux. Contactez-nous pour plus
                    d'informations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Puis-je visiter le campus ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Absolument ! Nous organisons des journées portes ouvertes
                    chaque mois. Contactez-nous pour planifier votre visite.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Quels sont les débouchés après le diplôme ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Nos diplômés travaillent dans la banque, le consulting, le
                    secteur public ou poursuivent leurs études en
                    master/doctorat.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Équipe Administrative
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">M. Hicham Ouakil</CardTitle>
                  <CardDescription>Vice Doyen</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Phone className="h-3 w-3" />
                    +212 661-130894
                  </p>
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Mail className="h-3 w-3" />
                    hicham.ouakil@uit.ac.ma
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Mme. Houda Lechheb</CardTitle>
                  <CardDescription>Équipe de Direction</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Phone className="h-3 w-3" />
                    +212 661-849348
                  </p>
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Mail className="h-3 w-3" />
                    houda.lechheb@uit.ac.ma
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">
                    M. Mohammed Elatmani
                  </CardTitle>
                  <CardDescription>Équipe de Direction</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Phone className="h-3 w-3" />
                    +212 635-587844
                  </p>
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Mail className="h-3 w-3" />
                    mohammed.elatmani@uit.ac.ma
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">M. Hamza Hamani</CardTitle>
                  <CardDescription>Équipe de Direction</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Phone className="h-3 w-3" />
                    +212 693-517484
                  </p>
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Mail className="h-3 w-3" />
                    hamza.hamani@uit.ac.ma
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
