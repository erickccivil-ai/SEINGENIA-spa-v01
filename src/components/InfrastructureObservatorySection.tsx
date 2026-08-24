import React, { useState } from 'react';
import { TIMELINE_DATA, TimelineYearData } from '../data/infrastructureObservatoryData';

interface InfrastructureObservatorySectionProps {
  onOpenVisitModal: (serviceTitle?: string, extraData?: any) => void;
}

export const InfrastructureObservatorySection: React.FC<InfrastructureObservatorySectionProps> = () => {
  // Default to 2026 (index 5) as the active milestone
  const [activeIdx, setActiveIdx] = useState<number>(5);

  const activeMilestone: TimelineYearData = TIMELINE_DATA[activeIdx];

  return (
    <section
      id="observatorio-infraestructura"
      className="py-10 sm:py-14 bg-slate-100 text-slate-800 border-b border-slate-200"
    >
      <div className="max-w-7xl xl:max-w-[1475px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 1. TÍTULO Y 2. PÁRRAFO INTRODUCTORIO ÚNICO */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Contexto y Tendencias en Infraestructura Empresarial
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            La inversión en infraestructura es una tendencia sostenida de modernización y crecimiento del sector productivo. En SEINGENIA acompañamos a las empresas en el diagnóstico, ejecución y optimización de sus instalaciones.
          </p>
        </div>

        {/* 3. LÍNEA DE TIEMPO HORIZONTAL CENTRAL */}
        <div className="w-full bg-white border border-slate-300 rounded-xl p-5 sm:p-7 md:p-8 shadow-sm space-y-8">
          
          {/* Track Horizontal de la Línea de Tiempo */}
          <div className="relative pt-3 pb-2 overflow-x-auto no-scrollbar">
            
            {/* Línea horizontal continua de fondo */}
            <div className="hidden sm:block absolute top-[33px] left-8 right-8 h-[2px] bg-slate-300 z-0" />

            {/* Puntos / Hitos Horizontales */}
            <div className="grid grid-cols-7 min-w-[560px] gap-2 relative z-10">
              {TIMELINE_DATA.map((item, idx) => {
                const isActive = activeIdx === idx;
                const isProjected = item.phase === 'Proyección';

                return (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    onFocus={() => setActiveIdx(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none transition-all duration-200"
                    aria-label={`Ver información del año ${item.label}`}
                  >
                    {/* Etiqueta del Año */}
                    <span
                      className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 ${
                        isActive
                          ? 'text-slate-950'
                          : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Nodo / Punto de la Línea */}
                    <div className="my-2 flex items-center justify-center">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isActive
                            ? 'bg-slate-900 ring-4 ring-slate-200 shadow-sm scale-110'
                            : 'bg-white border-2 border-slate-400 group-hover:border-slate-700 group-hover:bg-slate-50'
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full transition-colors ${
                            isActive ? 'bg-white' : 'bg-slate-400 group-hover:bg-slate-600'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Métrica / Indicador Breve */}
                    <div
                      className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded transition-all duration-200 ${
                        isActive
                          ? 'bg-slate-900 text-white border border-slate-900'
                          : 'bg-slate-100 text-slate-700 border border-slate-300 group-hover:bg-slate-200'
                      }`}
                    >
                      {item.metric}
                    </div>

                    {/* Estado / Fase */}
                    <span
                      className={`text-[9px] uppercase tracking-wider mt-1 transition-colors ${
                        isActive ? 'text-slate-900 font-bold' : 'text-slate-500'
                      }`}
                    >
                      {isProjected ? 'Proyección' : item.phase}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. PANEL INTERACTIVO DE DETALLE (UN SOLO CUADRO UNIFICADO) */}
          <div className="bg-slate-50 border border-slate-300 rounded-lg p-5 sm:p-6 transition-all duration-200 text-left space-y-3.5 shadow-2xs">
            
            {/* Header del Hito Activo */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {activeMilestone.label}
                </span>
                <span className="text-xs font-mono font-bold bg-white text-slate-900 px-2.5 py-1 rounded border border-slate-300 shadow-2xs">
                  {activeMilestone.metric}
                </span>
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/80 border border-slate-300">
                  {activeMilestone.phase}
                </span>
              </div>

              <div className="text-[11px] text-slate-500 font-mono">
                Fuente técnica: <strong className="text-slate-800">{activeMilestone.source}</strong>
              </div>
            </div>

            {/* Contenido Unificado y Resumido en un Solo Cuadro */}
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              {activeMilestone.unifiedSummary}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
