import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Euro, Calendar, Users, Construction } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AuditQualiteLicencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-blue-500">Licence Universitaire Spécialisée</Badge>
            <Badge variant="outline" className="border-white text-white">
              Bac+2 Requis
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Audit et Qualité</h1>
          <p className="text-xl opacity-90 max-w-4xl">
            Formation spécialisée en audit et management de la qualité pour les entreprises modernes
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Construction className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Contenu en Préparation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les détails complets de ce programme seront bientôt disponibles. Cette formation spécialisée en Audit et
              Qualité est actuellement en cours de finalisation.
            </p>
          </div>

          {/* Placeholder Info */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Aperçu du Programme</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Durée à définir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Formation hybride</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-5 w-5 text-blue-600" />
                  <span>Coût à définir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Planning à définir</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Audit+et+Qualité"
                alt="Audit et Qualité"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Contact for Info */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Restez Informé</h3>
            <p className="text-gray-600 mb-6">
              Contactez-nous pour recevoir les informations dès qu'elles seront disponibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Nous Contacter
                </Button>
              </Link>
              <Link href="/programmes">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Voir Autres Programmes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact et Informations</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Responsable de Formation</h3>
              <p>Pr Hicham OUAKIL</p>
              <p>Tél: 06 61 13 08 94</p>
              <p>Email: hicham.ouakil@uit.ac.ma</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Faculté d'Économie et de Gestion</h3>
              <p>Campus Universitaire Maamora</p>
              <p>BP: 2010 Kénitra</p>
              <p>Tél: 05 37 32 92 18</p>
            </div>
          </div>
          <Link href="/programmes">
            <Button size="lg" variant="secondary">
              Retour aux Programmes
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
