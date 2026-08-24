import React from 'react';

export const OperationalDifferentiator: React.FC = () => {
  return (
    <section id="diferenciacion" className="py-8 sm:py-10 bg-white border-b border-slate-200 text-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Metodología de Trabajo
          </h2>
        </div>

        {/* 3 Pillar Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-slate-50 border border-slate-300 rounded p-4 space-y-2 text-left">
            <h3 className="text-xs font-bold text-slate-900">
              Planificación por Ventanas Operativas
            </h3>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Programación y coordinación de trabajos que puedan generar interferencias, ruidos o restricciones operativas, ajustando su ejecución a los flujos de la planta.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-300 rounded p-4 space-y-2 text-left">
            <h3 className="text-xs font-bold text-slate-900">
              Aislamiento y Segregación de Faena
            </h3>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Implementación de cierres y sistemas de contención antipolvo para proteger inventario, oficinas, equipamiento y zonas limpias, junto con el retiro continuo y ordenado de escombros.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-300 rounded p-4 space-y-2 text-left">
            <h3 className="text-xs font-bold text-slate-900">
              Gestión Técnica Directa
            </h3>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Supervisión profesional en terreno, con interlocutor técnico asignado, comunicación directa, informes de avance y recepción formal mediante carpeta de entrega.
            </p>
          </div>

        </div>

        {/* Footer phrase below cards */}
        <div className="mt-5 text-center">
          <p className="text-[13.5px] text-black font-medium leading-relaxed max-w-2xl mx-auto">
            Coordinamos la ejecución técnica para minimizar interferencias en accesos, andenes, bodegas y oficinas.
          </p>
        </div>

      </div>
    </section>
  );
};

