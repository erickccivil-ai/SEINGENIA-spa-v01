import React from 'react';
import { SeingeniaLogo } from './Logo';
import { MapPin, Phone, Mail, Calendar, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenVisitModal: () => void;
}

// Resistance Test Verified: Single source of truth for asset management
export const Footer: React.FC<FooterProps> = ({ onOpenVisitModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="md:col-span-4 space-y-3">
            <SeingeniaLogo variant="light" size="md" imgClassName="h-[110px] sm:h-[132px]" />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              <strong className="text-white font-medium">Constructora Seingenia</strong>
            </p>
          </div>

          {/* Col 2: Services Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Servicios y Especialidades
            </h4>
            <ul className="text-xs space-y-1.5 text-slate-400">
              <li><a href="#servicios" className="hover:text-white transition-colors">Estudios y Diagnóstico</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Arquitectura e Ingeniería</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Sistemas e Instalaciones</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Ejecución de Obras</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Operación y Mantención</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Ampliación y Renovación de Infraestructura</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details & CTA */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Contacto Directo
            </h4>
            
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>
                <span>Región Metropolitana, Santiago de Chile</span>
              </p>
              <p>
                <a href="tel:+56982444940" className="hover:text-white font-semibold">+56 9 8244 4940</a>
              </p>
              <p>
                <a href="mailto:seingeniaconstruccion@gmail.com" className="hover:text-white">seingeniaconstruccion@gmail.com</a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenVisitModal}
                className="w-full btn-cta-gold py-2 px-4 rounded text-xs transition-colors shadow-sm cursor-pointer"
              >
                <span>Agendar Visita Técnica</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Constructora Seingenia. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded flex items-center gap-1 transition-colors border border-slate-700"
              title="Volver arriba"
            >
              <span>Arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
