import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo-fac.png"
                alt="Faculté d'Économie et de Gestion Kénitra"
                title="FEGK - Faculté d'Économie et Gestion Kénitra | Formation Continue"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed max-w-md">
              FEGK - Faculté d'Économie et de Gestion, Université Ibn Tofail
              Kénitra
              <br />
              Formation continue en Management, Marketing des Services et Audit
              Qualité. Programmes weekend et hybrides pour développer vos
              compétences professionnelles et accélérer votre carrière.
              Inscription ouverte.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">
              Nos Programmes
            </h3>
            <div className="space-y-3">
              <Link
                href="/programmes"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Tous les Programmes
              </Link>
              <Link
                href="/programmes/mms"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                MMS - Licence Spécialisée
              </Link>
              <Link
                href="/programmes/msms"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                MSMS - Master Spécialisé
              </Link>
              <Link
                href="/programmes/audit-qualite-licence"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Audit Qualité - Licence
              </Link>
              <Link
                href="/programmes/audit-qualite-master"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Audit Qualité - Master
              </Link>
              <Link
                href="/admissions"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Conditions d'Admission
              </Link>
            </div>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">
              Contact & Informations
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium text-white">
                    Campus Universitaire Maamora
                  </div>
                  <div>BP: 2010 Kénitra, Maroc</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>05 37 32 92 18</div>
                  <div>06 61 13 08 94 (Pr. Ouakil)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>hicham.ouakil@uit.ac.ma</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium text-white">
                    Horaires des Cours
                  </div>
                  <div>Samedi & Dimanche</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Inscription: À partir du 1er Juin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Faculté d'Économie et de Gestion
              - Kénitra. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
