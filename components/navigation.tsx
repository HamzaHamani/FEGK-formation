"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-fac.png"
              alt="Faculté d'Économie et de Gestion Kénitra"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Accueil
            </Link>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-blue-800 transition-colors font-medium py-2"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                Programmes
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-200 ${
                  isProgramsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                }`}
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <div className="p-4">
                  <Link
                    href="/programmes"
                    className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className="font-semibold">Tous les Programmes</div>
                    <div className="text-xs text-gray-500 mt-1">Parcourir notre catalogue complet</div>
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <Link
                    href="/programmes/mms"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className="font-medium">Management et Marketing des Services</div>
                    <div className="text-xs text-gray-500 mt-1">Licence Spécialisée • Bac+2</div>
                  </Link>
                  <Link
                    href="/programmes/msms"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className="font-medium">Management Stratégique et Marketing</div>
                    <div className="text-xs text-gray-500 mt-1">Master Spécialisé • Bac+3</div>
                  </Link>
                  <Link
                    href="/programmes/audit-qualite-licence"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className="font-medium">Audit et Qualité</div>
                    <div className="text-xs text-gray-500 mt-1">Licence Spécialisée • Bac+2</div>
                  </Link>
                  <Link
                    href="/programmes/audit-qualite-master"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className="font-medium">Audit et Qualité</div>
                    <div className="text-xs text-gray-500 mt-1">Master Spécialisé • Bac+3</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/admissions" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Admissions
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              À Propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
              Contact
            </Link>

            <Button className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-6">Candidater</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-800 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/programmes"
                className="text-gray-700 hover:text-blue-800 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Programmes
              </Link>
              <Link
                href="/admissions"
                className="text-gray-700 hover:text-blue-800 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Admissions
              </Link>
              <Link
                href="/a-propos"
                className="text-gray-700 hover:text-blue-800 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                À Propos
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-800 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-4">
                <Button
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Candidater
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
