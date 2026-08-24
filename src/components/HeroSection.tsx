import React from 'react';
import { IMAGES } from '../assets/images';

interface HeroSectionProps {
  onOpenVisitModal: (preselectedService?: string, initialData?: Partial<{ comuna: string; tipoServicio: string }>) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative bg-slate-100 text-slate-800 py-3.5 sm:py-4 lg:py-5 border-b border-slate-200">
      {/* Subtle Engineering Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* Corporate Value Proposition with protected LOGO NEGRO.png beside text */}
          <div className="lg:col-span-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
              <div className="shrink-0">
                <img
                  src={IMAGES.logo.principal}
                  alt="Constructora Seingenia Logo"
                  className="h-[84px] sm:h-[98px] lg:h-[114px] w-auto object-contain drop-shadow-xs"
                />
              </div>
              <div className="space-y-1 sm:space-y-1.5 text-left flex-1">
                <h1 className="text-base sm:text-lg lg:text-xl xl:text-[1.35rem] font-bold text-slate-900 tracking-tight leading-snug max-w-4xl transform translate-x-1 sm:translate-x-2">
                  Desarrollamos, adaptamos y mantenemos los espacios e infraestructura que hacen posible la operación de su empresa.
                </h1>

                <p className="text-xs sm:text-xs text-slate-600 leading-relaxed max-w-3xl transform translate-x-1 sm:translate-x-2">
                  Integramos arquitectura, ingeniería y construcción para resolver proyectos de infraestructura, habilitación y mantenimiento en recintos industriales, comerciales e institucionales de la Región Metropolitana.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
