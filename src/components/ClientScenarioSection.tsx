import React from 'react';
import { ArrowRight, Building2, Sparkles } from 'lucide-react';

interface ClientScenarioSectionProps {
  onOpenVisitModal: (serviceTitle?: string, extraData?: any) => void;
}

export const ClientScenarioSection: React.FC<ClientScenarioSectionProps> = ({ onOpenVisitModal }) => {
  return (
    <section className="py-6 sm:py-8 bg-slate-50/60 border-b border-slate-200/80 text-slate-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Container */}
        <div className="bg-white rounded-xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-5">
          
          {/* Main Client Statement Quote */}
          <div className="max-w-3xl mx-auto text-center space-y-2 py-1">
            <div className="relative inline-block text-left sm:text-center">
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                “¿Necesita intervenir un recinto que ya está funcionando?”
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed max-w-2xl mx-auto">
              “Tengo un establecimiento funcionando y necesito modificar, ampliar, renovar o solucionar su infraestructura sin detener completamente su operación.”
            </p>
          </div>

          <div className="h-px bg-slate-100 w-full max-w-2xl mx-auto" />

          {/* Seingenia's Strategic Response */}
          <div className="max-w-3xl mx-auto space-y-2 text-center">
            <div className="space-y-1.5">
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                “¿Su infraestructura podría estar limitando el desempeño de su operación?”
              </p>
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed max-w-2xl mx-auto">
                Espacios inadecuados, infraestructura desgastada, circulaciones deficientes o una distribución que ya no responde a las necesidades actuales pueden estar entorpeciendo los flujos de trabajo, generando ineficiencias y afectando el funcionamiento de su establecimiento.
              </p>
            </div>
          </div>

          <div className="h-px bg-slate-100 w-full max-w-2xl mx-auto" />

          {/* Seingenia's Continuity Value Proposition */}
          <div className="max-w-3xl mx-auto space-y-2 text-center">
            <div className="space-y-1.5">
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                “¿Necesita adaptar su infraestructura sin afectar la continuidad de su operación?”
              </p>
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed max-w-2xl mx-auto">
                En SEINGENIA planificamos y ejecutamos intervenciones considerando los flujos existentes, las condiciones del establecimiento y las exigencias de la operación, buscando mínimo impacto y máxima seguridad.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

