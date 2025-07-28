"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down past 100px, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        // Close mobile menu and dropdown when hiding
        setIsOpen(false);
        setIsProgramsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white border-b border-gray-200 fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 shadow-sm" : "-translate-y-full shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 min-w-0">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-4 min-w-0 group"
          >
            <Image
              src="/logo-fac.png"
              alt="Faculté d'Économie et de Gestion Kénitra"
              title="FEGK - Faculté d'Économie et Gestion Kénitra | Université Ibn Tofail"
              width={200}
              height={60}
              className="h-8 sm:h-10 lg:h-12 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-none transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              Accueil
            </Link>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-800 after:transition-all after:duration-300 group-hover:after:w-full"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                Programmes
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-300 ease-out ${
                  isProgramsOpen
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible translate-y-2 scale-95"
                } max-w-[calc(100vw-2rem)] lg:max-w-none`}
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <div className="p-4">
                  <Link
                    href="/programmes"
                    className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="font-semibold">Tous les Programmes</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Parcourir notre catalogue complet
                    </div>
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <Link
                    href="/programmes/mms"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="font-medium">
                      Management et Marketing des Services
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Licence Spécialisée • Bac+2
                    </div>
                  </Link>
                  <Link
                    href="/programmes/msms"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="font-medium">
                      Management Stratégique et Marketing
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Master Spécialisé • Bac+3
                    </div>
                  </Link>
                  <Link
                    href="/programmes/audit-qualite-licence"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="font-medium">Audit et Qualité</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Licence Spécialisée • Bac+2
                    </div>
                  </Link>
                  <Link
                    href="/programmes/audit-qualite-master"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="font-medium">Audit et Qualité</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Master Spécialisé • Bac+3
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/admissions"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              Admissions
            </Link>
            <Link
              href="/a-propos"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>

            <Link href="/programmes">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-4 lg:px-6 text-sm lg:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Candidater
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-all duration-200 hover:bg-gray-100 hover:scale-105"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu
                  className={`absolute inset-0 h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
                    isOpen
                      ? "opacity-0 rotate-180 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-180 scale-0"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden border-t bg-white w-full transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`flex flex-col space-y-2 sm:space-y-4 py-4 sm:py-6 transition-all duration-300 ease-in-out transform ${
              isOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-gray-50 rounded-md mx-3 sm:mx-4 hover:translate-x-1"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/programmes"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-gray-50 rounded-md mx-3 sm:mx-4 hover:translate-x-1"
              onClick={() => setIsOpen(false)}
            >
              Programmes
            </Link>
            <Link
              href="/admissions"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-gray-50 rounded-md mx-3 sm:mx-4 hover:translate-x-1"
              onClick={() => setIsOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/a-propos"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-gray-50 rounded-md mx-3 sm:mx-4 hover:translate-x-1"
              onClick={() => setIsOpen(false)}
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-800 transition-all duration-200 font-medium px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-gray-50 rounded-md mx-3 sm:mx-4 hover:translate-x-1"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 sm:px-4 pt-3 sm:pt-4">
              <Link href="/programmes">
                <Button
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium text-sm sm:text-base py-2 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Candidater
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
