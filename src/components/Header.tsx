import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Menu, X, ClipboardList } from 'lucide-react';

interface HeaderProps {
  onOpenVisitModal: (preselectedService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenVisitModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Corporate Utility Bar (Deep Corporate Blue) */}
      <div className="bg-[#0b192c] text-slate-300 text-xs py-1.5 px-4 border-b border-[#182c44]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-5">
            <span className="text-slate-300 font-medium">
              Región Metropolitana, Chile
            </span>
            <span className="hidden sm:inline-block text-slate-400">
              Atención Comercial: Lun-Sáb 08:00 a 20:00 hrs
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="tel:+56982444940"
              className="hover:text-amber-400 text-slate-200 transition-colors font-semibold"
            >
              +56 9 8244 4940
            </a>
            <a
              href="mailto:seingeniaconstruccion@gmail.com"
              className="hidden sm:inline-block hover:text-amber-400 text-slate-300 transition-colors"
            >
              seingeniaconstruccion@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar (Corporate Navy Blue) */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0f243d]/95 backdrop-blur-md text-white shadow-md py-1 border-b border-[#1e3c63]'
            : 'bg-[#0f243d] text-white py-1.5 border-b border-[#1e3c63]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-200">
            <button
              onClick={() => scrollToSection('experiencia-empresa')}
              className="text-white hover:text-amber-400 transition-colors py-1 font-bold cursor-pointer"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('diferenciacion')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Metodología
            </button>
            <button
              onClick={() => scrollToSection('observatorio-infraestructura')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer font-normal"
            >
              Indicadores Sectoriales
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => scrollToSection('cobertura')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Cobertura
            </button>
          </div>

          {/* Primary CTA Button in formal Amarillo Grisáceo */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => onOpenVisitModal()}
              className="btn-cta-gold px-4 py-2 rounded text-sm font-bold transition-colors shadow-sm cursor-pointer"
            >
              <span>Agendar Visita Técnica</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenVisitModal()}
              className="btn-cta-gold px-3.5 py-1.5 rounded text-sm font-bold cursor-pointer"
            >
              <span>Visita</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-slate-200 hover:bg-[#1b3658]"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0f243d] border-b border-[#1e3c63] px-4 pt-2 pb-4 space-y-1.5 shadow-xl text-slate-200">
            <button
              onClick={() => scrollToSection('experiencia-empresa')}
              className="block w-full text-left py-2 px-3 text-sm font-bold text-white hover:bg-[#1b3658] rounded"
            >
              Nuestra Experiencia
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-[#1b3658] rounded"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('diferenciacion')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-[#1b3658] rounded"
            >
              Metodología Operativa
            </button>
            <button
              onClick={() => scrollToSection('observatorio-infraestructura')}
              className="block w-full text-left py-2 px-3 text-sm font-normal text-slate-200 hover:bg-[#1b3658] rounded flex items-center justify-between"
            >
              <span>Indicadores Sectoriales Chile</span>
              <span className="bg-amber-400 text-slate-950 text-xs px-1.5 py-0.5 rounded font-bold">2021-2030</span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-[#1b3658] rounded"
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => scrollToSection('cobertura')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-[#1b3658] rounded"
            >
              Cobertura RM
            </button>
            <div className="pt-2 border-t border-[#1e3c63]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisitModal();
                }}
                className="w-full btn-cta-gold py-2.5 rounded text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Agendar Visita Técnica</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
