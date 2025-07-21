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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Notre équipe est là pour répondre à toutes vos questions concernant nos programmes de formation continue.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informations de Contact</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      Adresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Faculté d'Économie et de Gestion</p>
                    <p>Campus Universitaire Maamora</p>
                    <p>BP: 2010 Kénitra, Maroc</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      Téléphone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>+212 537 32 93 54</p>
                    <p>+212 537 32 93 55 (Admissions)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-blue-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>economie@uit.ac.ma</p>
                    <p>admissions.eco@uit.ac.ma</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      Horaires d'Ouverture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Lundi - Vendredi:</strong> 8h00 - 17h00
                    </p>
                    <p>
                      <strong>Samedi:</strong> 8h00 - 12h00
                    </p>
                    <p>
                      <strong>Dimanche:</strong> Fermé
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un Message</h2>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Formulaire de Contact
                  </CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="+212 6XX XXX XXX" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input id="subject" placeholder="Objet de votre message" required />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Décrivez votre demande en détail..." rows={6} required />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Envoyer le Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
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
