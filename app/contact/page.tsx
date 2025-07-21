import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Users, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Contactez-Nous</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl leading-relaxed px-2 sm:px-0">
            Notre équipe est là pour répondre à toutes vos questions concernant nos programmes de formation continue.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Informations de Contact</h2>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Adresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm sm:text-base">Faculté d'Économie et de Gestion</p>
                    <p className="text-sm sm:text-base">Campus Universitaire Maamora</p>
                    <p className="text-sm sm:text-base">BP: 2010 Kénitra, Maroc</p>
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
                    <p className="text-sm sm:text-base">+212 537 32 93 54</p>
                    <p className="text-sm sm:text-base">+212 537 32 93 55 (Admissions)</p>
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
                    <p className="text-sm sm:text-base">economie@uit.ac.ma</p>
                    <p className="text-sm sm:text-base">admissions.eco@uit.ac.ma</p>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      Horaires d'Ouverture
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm sm:text-base">
                      <strong>Lundi - Vendredi:</strong> 8h00 - 17h00
                    </p>
                    <p className="text-sm sm:text-base">
                      <strong>Samedi:</strong> 8h00 - 12h00
                    </p>
                    <p className="text-sm sm:text-base">
                      <strong>Dimanche:</strong> Fermé
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Envoyez-nous un Message</h2>

              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    Formulaire de Contact
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm sm:text-base">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" required className="h-10 sm:h-auto text-sm sm:text-base" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm sm:text-base">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" required className="h-10 sm:h-auto text-sm sm:text-base" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" required className="h-10 sm:h-auto text-sm sm:text-base" />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm sm:text-base">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="+212 6XX XXX XXX" className="h-10 sm:h-auto text-sm sm:text-base" />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm sm:text-base">Sujet *</Label>
                      <Input id="subject" placeholder="Objet de votre message" required className="h-10 sm:h-auto text-sm sm:text-base" />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                      <Textarea id="message" placeholder="Décrivez votre demande en détail..." rows={4} className="text-sm sm:text-base resize-none sm:rows-6" required />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Envoyer le Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Questions Fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quand commencent les cours ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    L'année académique débute en septembre. Les cours d'orientation ont lieu la première semaine de
                    septembre.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Y a-t-il des bourses disponibles ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Oui, nous offrons des bourses d'études basées sur le mérite académique et les critères sociaux.
                    Contactez-nous pour plus d'informations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Puis-je visiter le campus ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Absolument ! Nous organisons des journées portes ouvertes chaque mois. Contactez-nous pour planifier
                    votre visite.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quels sont les débouchés après le diplôme ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Nos diplômés travaillent dans la banque, le consulting, le secteur public ou poursuivent leurs
                    études en master/doctorat.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Équipe Administrative</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle>Dr. Amina Benali</CardTitle>
                  <CardDescription>Directrice du Programme</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">a.benali@uit.ac.ma</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle>M. Youssef Alami</CardTitle>
                  <CardDescription>Responsable Admissions</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">y.alami@uit.ac.ma</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle>Mme. Fatima Zahra</CardTitle>
                  <CardDescription>Coordinatrice Étudiante</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">f.zahra@uit.ac.ma</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
