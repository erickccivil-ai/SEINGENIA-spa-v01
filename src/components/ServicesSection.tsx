import React, { useState } from 'react';
import {
  Search,
  Compass,
  Zap,
  HardHat,
  Wrench,
  RefreshCw,
  ChevronDown
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenVisitModal: (serviceTitle: string) => void;
}

interface StepData {
  stepNumber: number;
  phaseCode: 'A' | 'B';
  phaseName: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenVisitModal }) => {
  const [isPhaseAOpen, setIsPhaseAOpen] = useState<boolean>(false);
  const [isPhaseBOpen, setIsPhaseBOpen] = useState<boolean>(false);
  const [activeSpecialty, setActiveSpecialty] = useState<number | null>(null);

  const toggleSpecialty = (stepNumber: number) => {
    setActiveSpecialty((prev) => (prev === stepNumber ? null : stepNumber));
  };

  const stepsPhaseA: StepData[] = [
    {
      stepNumber: 1,
      phaseCode: 'A',
      phaseName: 'Proyectos',
      title: 'Estudios y Diagnóstico',
      summary: 'Levantamiento técnico y evaluación de factibilidad para identificar restricciones, costos y riesgos antes de ejecutar una inversión.',
      icon: <Search className="w-4 h-4" />
    },
    {
      stepNumber: 2,
      phaseCode: 'A',
      phaseName: 'Proyectos',
      title: 'Arquitectura e Ingeniería',
      summary: 'Desarrollo de proyectos de arquitectura y distribución espacial optimizados para los flujos operativos de cada empresa, bajo las normativas y restricciones nacionales. La ingeniería complementaria asegura estabilidad, durabilidad y desempeño frente a las cargas y dinámicas propias de cada operación.',
      icon: <Compass className="w-4 h-4" />
    },
    {
      stepNumber: 3,
      phaseCode: 'A',
      phaseName: 'Proyectos',
      title: 'Sistemas e Instalaciones',
      summary: 'Desarrollo de proyectos de instalaciones sanitarias, eléctricas, climatización y protección contra incendios, mediante planos, memorias de cálculo y documentación técnica, incluyendo su regularización ante las entidades correspondientes.',
      icon: <Zap className="w-4 h-4" />
    }
  ];

  const stepsPhaseB: StepData[] = [
    {
      stepNumber: 5,
      phaseCode: 'B',
      phaseName: 'Construcción',
      title: 'Ejecución de Obras',
      summary: 'Ejecutamos obras civiles e instalaciones para infraestructura empresarial bajo sistemas de control de calidad y supervisión profesional, abarcando calles y pavimentos para alto tránsito y carga, estacionamientos, drenajes, fundaciones, cámaras de inspección, estructuras metálicas y galpones, junto con montajes eléctricos, distribución de alimentadores, redes de tuberías, ductos de ventilación y sistemas de detección y extinción de incendios, asegurando una ejecución coordinada y orientada a la continuidad operacional.',
      icon: <HardHat className="w-4 h-4 text-slate-800" />
    },
    {
      stepNumber: 6,
      phaseCode: 'B',
      phaseName: 'Construcción',
      title: 'Operación y Mantención',
      summary: 'Programas de mantenimiento preventivo y correctivo para conservar la funcionalidad, seguridad y vida útil de la infraestructura e instalaciones, incluyendo estructuras de hormigón y acero, sistemas eléctricos, redes hidrosanitarias, climatización y sistemas de detección y extinción de incendios.',
      icon: <Wrench className="w-4 h-4 text-slate-800" />
    },
    {
      stepNumber: 7,
      phaseCode: 'B',
      phaseName: 'Construcción',
      title: 'Ampliación y Renovación de Infraestructura',
      summary: 'Transformación y ampliación de espacios e infraestructura existente para incorporar nuevas áreas, mejorar su funcionalidad y responder a las nuevas necesidades operacionales y productivas de cada empresa.',
      icon: <RefreshCw className="w-4 h-4 text-slate-800" />
    }
  ];

  return (
    <section id="servicios" className="py-8 sm:py-10 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Servicios y Áreas de Intervención
          </h2>
          <p className="text-xs text-slate-800 font-semibold leading-relaxed max-w-2xl mx-auto">
            “Podemos incorporarnos donde su infraestructura lo necesite.”
          </p>
          <p className="text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Atendemos requerimientos puntuales o integrales, integrándonos exactamente en la etapa, especialidad técnica, obra o mantención que su empresa requiera.
          </p>
        </div>

        {/* ÁREA DE INGENIERÍA Y PROYECTOS - SISTEMA DE DIAGNÓSTICO Y PROYECTO */}
        <div className="mb-8 space-y-3">
          {/* Header Desplegable de la Categoría */}
          <button
            type="button"
            onClick={() => setIsPhaseAOpen((prev) => !prev)}
            className="w-full flex items-center justify-between gap-3 border-b-2 border-slate-800 pb-3 text-left group cursor-pointer select-none transition-colors"
            aria-expanded={isPhaseAOpen}
          >
            <div className="flex items-center gap-2.5">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide group-hover:text-blue-900 transition-colors">
                PROYECTOS DE ESPECIALIDAD Y DIAGNÓSTICO
              </h3>
              <span className="text-[11px] font-mono bg-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded">
                3 Especialidades
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-slate-900">
              <span className="hidden sm:inline-block">
                {isPhaseAOpen ? 'Ocultar' : 'Ver especialidades'}
              </span>
              <div className={`p-1 rounded bg-slate-200 group-hover:bg-slate-300 transition-transform duration-300 ${isPhaseAOpen ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4 text-slate-800" />
              </div>
            </div>
          </button>

          {/* Marco Técnico del Sistema de Diagnóstico (Desplegable) */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isPhaseAOpen ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white border border-slate-300 rounded-sm shadow-xs overflow-hidden">
              {/* Listado de Módulos Técnicos */}
              <div className="divide-y divide-slate-200">
                {stepsPhaseA.map((step) => {
                  const isOpen = activeSpecialty === step.stepNumber;

                  return (
                    <div
                      key={step.stepNumber}
                      className={`transition-all duration-300 ${
                        isOpen
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-900 hover:bg-slate-50/90'
                      }`}
                    >
                      {/* Botón Principal del Módulo (Siempre visible: Número + Nombre + Código + Estado) */}
                      <button
                        type="button"
                        onClick={() => toggleSpecialty(step.stepNumber)}
                        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">
                          {/* Indicador Numérico */}
                          <div className="flex items-center shrink-0">
                            <span
                              className={`text-sm sm:text-base font-mono font-semibold transition-colors ${
                                isOpen ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-600'
                              }`}
                            >
                              0{step.stepNumber}
                            </span>
                          </div>

                          {/* Separador de Eje Vertical */}
                          <div className={`h-5 w-[1px] shrink-0 transition-colors ${isOpen ? 'bg-slate-700' : 'bg-slate-200'}`} />

                          {/* Título de la Especialidad */}
                          <div className="min-w-0 flex-1">
                            <h4 className={`text-sm sm:text-base font-bold tracking-tight truncate transition-colors ${
                              isOpen ? 'text-white' : 'text-slate-900'
                            }`}>
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Botón de Interacción / Indicador de Expansión */}
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className={`text-xs font-medium hidden sm:inline-block transition-colors ${
                            isOpen ? 'text-blue-300 font-semibold' : 'text-slate-500 group-hover:text-slate-800'
                          }`}>
                            {isOpen ? '− Menos información' : '+ Más información'}
                          </span>
                          <div className={`w-7 h-7 rounded-xs flex items-center justify-center border transition-all duration-200 ${
                            isOpen
                              ? 'bg-blue-600 border-blue-500 text-white'
                              : 'bg-slate-100 border-slate-300 text-slate-600 group-hover:border-slate-400'
                          }`}>
                            <span className="text-xs font-mono font-bold">
                              {isOpen ? '−' : '+'}
                            </span>
                          </div>
                        </div>
                      </button>

                      {/* Ficha Desplegable */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 sm:px-6 pb-5 pt-1">
                          <div className="pl-4 sm:pl-12 border-l-2 border-blue-500 py-1">
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-3xl">
                              {step.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ÁREA OPERATIVA - SISTEMA DE EJECUCIÓN, MANTENCIÓN Y REMODELACIÓN */}
        <div className="mb-10 space-y-3">
          {/* Header Desplegable de la Categoría */}
          <button
            type="button"
            onClick={() => setIsPhaseBOpen((prev) => !prev)}
            className="w-full flex items-center justify-between gap-3 border-b-2 border-slate-800 pb-3 text-left group cursor-pointer select-none transition-colors"
            aria-expanded={isPhaseBOpen}
          >
            <div className="flex items-center gap-2.5">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide group-hover:text-emerald-900 transition-colors">
                CONSTRUCCIÓN, MANTENCIÓN Y REMODELACIÓN
              </h3>
              <span className="text-[11px] font-mono bg-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded">
                3 Áreas Operativas
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 group-hover:text-slate-900">
              <span className="hidden sm:inline-block">
                {isPhaseBOpen ? 'Ocultar' : 'Ver áreas'}
              </span>
              <div className={`p-1 rounded bg-slate-200 group-hover:bg-slate-300 transition-transform duration-300 ${isPhaseBOpen ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4 text-slate-800" />
              </div>
            </div>
          </button>

          {/* Marco Técnico del Sistema de Operación (Desplegable) */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isPhaseBOpen ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white border border-slate-300 rounded-sm shadow-xs overflow-hidden">
              {/* Listado de Módulos Técnicos */}
              <div className="divide-y divide-slate-200">
                {stepsPhaseB.map((step, idx) => {
                  const isOpen = activeSpecialty === step.stepNumber;

                  return (
                    <div
                      key={step.stepNumber}
                      className={`transition-all duration-300 ${
                        isOpen
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-900 hover:bg-slate-50/90'
                      }`}
                    >
                      {/* Botón Principal del Módulo (Siempre visible: Número + Nombre + Código + Estado) */}
                      <button
                        type="button"
                        onClick={() => toggleSpecialty(step.stepNumber)}
                        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">
                          {/* Indicador Numérico */}
                          <div className="flex items-center shrink-0">
                            <span
                              className={`text-sm sm:text-base font-mono font-semibold transition-colors ${
                                isOpen ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-600'
                              }`}
                            >
                              0{idx + 4}
                            </span>
                          </div>

                          {/* Separador de Eje Vertical */}
                          <div className={`h-5 w-[1px] shrink-0 transition-colors ${isOpen ? 'bg-slate-700' : 'bg-slate-200'}`} />

                          {/* Título de la Especialidad */}
                          <div className="min-w-0 flex-1">
                            <h4 className={`text-sm sm:text-base font-bold tracking-tight truncate transition-colors ${
                              isOpen ? 'text-white' : 'text-slate-900'
                            }`}>
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Botón de Interacción / Indicador de Expansión */}
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className={`text-xs font-medium hidden sm:inline-block transition-colors ${
                            isOpen ? 'text-emerald-300 font-semibold' : 'text-slate-500 group-hover:text-slate-800'
                          }`}>
                            {isOpen ? '− Menos información' : '+ Más información'}
                          </span>
                          <div className={`w-7 h-7 rounded-xs flex items-center justify-center border transition-all duration-200 ${
                            isOpen
                              ? 'bg-emerald-600 border-emerald-500 text-white'
                              : 'bg-slate-100 border-slate-300 text-slate-600 group-hover:border-slate-400'
                          }`}>
                            <span className="text-xs font-mono font-bold">
                              {isOpen ? '−' : '+'}
                            </span>
                          </div>
                        </div>
                      </button>

                      {/* Ficha Desplegable */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 sm:px-6 pb-5 pt-1">
                          <div className="pl-4 sm:pl-12 border-l-2 border-emerald-500 py-1">
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-3xl">
                              {step.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};
