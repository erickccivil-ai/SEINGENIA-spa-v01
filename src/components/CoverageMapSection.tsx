import React, { useState } from 'react';
import { Building2, Truck, Factory, Warehouse, Compass, Navigation } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface CoverageMapSectionProps {
  onOpenVisitModal: (serviceTitle?: string, extraData?: any) => void;
}

interface SectorPoint {
  id: string;
  name: string;
  coords: { x: number; y: number };
  zoneId: string;
  communeNote: string;
  labelAlign: 'left' | 'right';
}

interface IndustrialZone {
  id: string;
  name: string;
  subTitle: string;
  zone: string;
  sectorsList: string[];
  shortDesc: string;
  activityType: string;
  hoverTag: string;
  icon: React.ReactNode;
  color: string;
  polygonPoints: string;
}

export const CoverageMapSection: React.FC<CoverageMapSectionProps> = ({ onOpenVisitModal }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('norte');
  const [hoveredPointId, setHoveredPointId] = useState<string | null>(null);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);

  // 12 Sectors requested across the 4 geographical cardinal zones with real coordinates aligned to reference map
  const sectorPoints: SectorPoint[] = [
    // Norte
    { id: 'colina', name: 'Colina', coords: { x: 50.0, y: 6.5 }, zoneId: 'norte', communeNote: 'Polo Industrial Los Libertadores & Chicureo', labelAlign: 'right' },
    { id: 'lampa', name: 'Lampa', coords: { x: 16.0, y: 9.5 }, zoneId: 'norte', communeNote: 'Eje Valle Grande • Parques Industriales', labelAlign: 'right' },
    { id: 'quilicura', name: 'Quilicura', coords: { x: 26.1, y: 18.0 }, zoneId: 'norte', communeNote: 'Gran Hub Logístico • Panamericana Norte', labelAlign: 'right' },
    { id: 'huechuraba', name: 'Huechuraba', coords: { x: 45.6, y: 17.5 }, zoneId: 'norte', communeNote: 'Ciudad Empresarial • Eje Vespucio Norte', labelAlign: 'right' },

    // Norponiente
    { id: 'lo-boza', name: 'Lo Boza', coords: { x: 19.5, y: 26.5 }, zoneId: 'norponiente', communeNote: 'Corredor Logístico Aeropuerto • Vespucio', labelAlign: 'left' },
    { id: 'renca', name: 'Renca', coords: { x: 25.2, y: 32.5 }, zoneId: 'norponiente', communeNote: 'Plantas Productivas • Eje Costanera Norte', labelAlign: 'right' },
    { id: 'enea', name: 'Enea', coords: { x: 14.5, y: 33.5 }, zoneId: 'norponiente', communeNote: 'Parque de Negocios ENEA • Carga Aérea', labelAlign: 'left' },
    { id: 'pudahuel', name: 'Pudahuel', coords: { x: 15.5, y: 38.1 }, zoneId: 'norponiente', communeNote: 'Eje Ruta 68 • Centros de Distribución', labelAlign: 'left' },

    // Poniente
    { id: 'cerrillos', name: 'Cerrillos', coords: { x: 38.7, y: 60.6 }, zoneId: 'poniente', communeNote: 'Sector Industrial Consolidado • P.A.C.', labelAlign: 'right' },
    { id: 'maipu', name: 'Maipú', coords: { x: 18.7, y: 58.2 }, zoneId: 'poniente', communeNote: 'Manufactura y Producción • Camino Melipilla', labelAlign: 'left' },

    // Sur
    { id: 'lo-espejo', name: 'Lo Espejo', coords: { x: 38.6, y: 70.7 }, zoneId: 'sur', communeNote: 'Eje Autopista Central • Logística Sur', labelAlign: 'right' },
    { id: 'san-bernardo', name: 'San Bernardo', coords: { x: 33.9, y: 80.5 }, zoneId: 'sur', communeNote: 'Grandes Complejos Industriales • Ruta 5 Sur', labelAlign: 'right' },
  ];

  const industrialZones: IndustrialZone[] = [
    {
      id: 'norte',
      name: 'Quilicura – Lampa – Colina – Huechuraba',
      subTitle: 'Corredor Norte • Parques Industriales y Logísticos',
      zone: 'Sector Norte',
      sectorsList: ['Quilicura', 'Lampa', 'Colina', 'Huechuraba'],
      shortDesc: 'Eje industrial norte con alta concentración de parques, bodegaje y centros de distribución.',
      activityType: 'Industria · Logística · Infraestructura productiva',
      hoverTag: 'Industria · Logística · Infraestructura productiva',
      icon: <Warehouse className="w-4 h-4 text-amber-500" />,
      color: '#f59e0b',
      polygonPoints: '12,4 58,4 54,23 20,24'
    },
    {
      id: 'norponiente',
      name: 'Pudahuel – Enea – Lo Boza – Renca',
      subTitle: 'Corredor Norponiente • Eje Aeropuerto y Autopistas',
      zone: 'Sector Norponiente',
      sectorsList: ['Pudahuel', 'Enea', 'Lo Boza', 'Renca'],
      shortDesc: 'Parques de negocios, centros logísticos y bodegaje estratégico junto al aeropuerto.',
      activityType: 'Industria · Logística · Bodegaje y Carga',
      hoverTag: 'Industria · Logística · Bodegaje',
      icon: <Truck className="w-4 h-4 text-blue-500" />,
      color: '#3b82f6',
      polygonPoints: '10,24 32,24 32,44 10,44'
    },
    {
      id: 'poniente',
      name: 'Maipú – Cerrillos',
      subTitle: 'Corredor Poniente • Manufactura y Producción',
      zone: 'Sector Poniente',
      sectorsList: ['Maipú', 'Cerrillos'],
      shortDesc: 'Polo de manufactura, plantas productivas, metalmecánica y logística.',
      activityType: 'Industria · Manufactura · Logística',
      hoverTag: 'Industria · Manufactura · Logística',
      icon: <Factory className="w-4 h-4 text-indigo-500" />,
      color: '#6366f1',
      polygonPoints: '12,52 44,52 44,66 12,66'
    },
    {
      id: 'sur',
      name: 'San Bernardo – Lo Espejo',
      subTitle: 'Corredor Sur • Complejos de Gran Escala',
      zone: 'Sector Sur',
      sectorsList: ['San Bernardo', 'Lo Espejo'],
      shortDesc: 'Grandes complejos industriales, plantas operativas y parques de bodegaje.',
      activityType: 'Industria · Logística · Infraestructura productiva',
      hoverTag: 'Industria · Logística · Infraestructura productiva',
      icon: <Compass className="w-4 h-4 text-cyan-500" />,
      color: '#06b6d4',
      polygonPoints: '26,67 48,67 44,88 26,88'
    }
  ];

  // Current active zone
  const activeZoneId = hoveredZoneId || (hoveredPointId ? sectorPoints.find(p => p.id === hoveredPointId)?.zoneId : null) || selectedZoneId;
  const activeZone = industrialZones.find(z => z.id === activeZoneId) || industrialZones[0];
  const activeHoveredPoint = sectorPoints.find(p => p.id === hoveredPointId);

  return (
    <section id="cobertura" className="py-8 sm:py-10 bg-slate-100 border-b border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Cobertura en Polos Industriales y Corporativos
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Conocemos y atendemos los principales sectores donde se concentra la actividad empresarial e industrial de Santiago.
          </p>
        </div>

        {/* Combined Layout: Real Map Frame + Interactive Engineering UI Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          
          {/* Left Column: Santiago Territorial Base Map (5 cols on LG) */}
          <div className="lg:col-span-5 bg-slate-900 text-white border border-slate-800 rounded-lg p-3.5 sm:p-4 flex flex-col justify-between shadow-md relative overflow-hidden">
            
            {/* Header Bar of the Interactive Map Frame */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3 z-10">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-slate-800 text-amber-400 border border-slate-700/80">
                  <Navigation className="w-3.5 h-3.5" />
                </span>
                <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                  Santiago de Chile • Polos Industriales
                </h3>
              </div>
            </div>

            {/* Map Stage: Minimalist Vector Map with Realistic Geography of Santiago */}
            <div className="relative w-full h-80 sm:h-96 bg-[#090d16] rounded border border-slate-700 overflow-hidden flex items-center justify-center group/stage select-none">
              
              {/* Cartographic Reference Base Map of Santiago Comunas */}
              <img
                src={IMAGES.mapas.santiagoComunas}
                alt="Mapa de comunas de Santiago de Chile"
                className="absolute inset-0 w-full h-full object-cover opacity-75 pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Technical Blueprint Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              {/* Geographic Cartographic Vector Canvas */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none select-none z-10">
                <defs>
                  <filter id="nodeGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="1" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  {/* Subtle Gradient for Urban Core */}
                  <radialGradient id="urbanGlow" cx="50%" cy="52%" r="45%">
                    <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#090d16" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Urban Basin Background Silhouette */}
                <ellipse cx="50" cy="52" rx="42" ry="44" fill="url(#urbanGlow)" />

                {/* Precordillera / Andes Natural Ridge Hint (Eastern Boundary) */}
                <path
                  d="M 85 5 Q 82 25 78 45 T 75 75 T 70 95"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="1.2"
                  strokeDasharray="2 3"
                  opacity="0.6"
                />

                {/* Río Mapocho Corridor (Curving East to West through Santiago) */}
                <path
                  d="M 82 35 Q 65 42 50 51 T 36 51 T 18 54 T 8 55"
                  fill="none"
                  stroke="#1e3a5f"
                  strokeWidth="1.2"
                  opacity="0.75"
                />

                {/* Autopista Américo Vespucio Ring (Circunvalación) */}
                <ellipse
                  cx="48"
                  cy="50"
                  rx="27"
                  ry="25"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="0.9"
                  strokeDasharray="3 2"
                  opacity="0.55"
                />

                {/* Structural Highways (Ruta 5 Norte-Sur & Costanera / Ruta 68) */}
                {/* Eje Ruta 5 Norte / Sur (Vertical spine) */}
                <path
                  d="M 43 5 L 43 95"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="0.9"
                  opacity="0.6"
                />
                {/* Eje Poniente Ruta 68 */}
                <path
                  d="M 43 40.5 L 10 38"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="0.8"
                  opacity="0.6"
                />

                {/* Santiago Centro Reference Anchor */}
                <g opacity="0.6">
                  <circle cx="42.9" cy="40.5" r="1.5" fill="#94a3b8" />
                  <text x="44.9" y="41" fontSize="2.8" fill="#cbd5e1" fontFamily="system-ui, sans-serif" fontWeight="600">Stgo. Centro</text>
                </g>

                {/* Industrial Corridors Connecting Arteries */}
                {/* Norte: Colina -> Lampa -> Quilicura -> Huechuraba */}
                <path
                  d="M 50 6.5 L 16 9.5 L 26.1 18 L 45.6 17.5"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  opacity={activeZoneId === 'norte' ? 0.9 : 0.4}
                  className="transition-opacity duration-300"
                />

                {/* Norponiente: Quilicura -> Lo Boza -> Enea -> Pudahuel -> Renca */}
                <path
                  d="M 26.1 18 L 19.5 26.5 L 14.5 33.5 L 15.5 38.1 M 19.5 26.5 L 25.2 32.5"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  opacity={activeZoneId === 'norponiente' ? 0.9 : 0.4}
                  className="transition-opacity duration-300"
                />

                {/* Poniente: Cerrillos -> Maipú */}
                <path
                  d="M 38.7 60.6 L 18.7 58.2"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  opacity={activeZoneId === 'poniente' ? 0.9 : 0.4}
                  className="transition-opacity duration-300"
                />

                {/* Sur: Lo Espejo -> San Bernardo */}
                <path
                  d="M 38.6 70.7 L 33.9 80.5"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  opacity={activeZoneId === 'sur' ? 0.9 : 0.4}
                  className="transition-opacity duration-300"
                />

                {/* Active Zone Perimeter Shading */}
                {industrialZones.map((zone) => {
                  if (zone.id !== activeZoneId) return null;
                  return (
                    <polygon
                      key={`poly-${zone.id}`}
                      points={zone.polygonPoints}
                      fill={zone.color}
                      fillOpacity="0.12"
                      stroke={zone.color}
                      strokeWidth="0.9"
                      strokeDasharray="3 2"
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Interactive SVG Markers for all 12 Sectors */}
                {sectorPoints.map((point) => {
                  const isZoneActive = point.zoneId === activeZoneId;
                  const isPointHovered = point.id === hoveredPointId;
                  const zoneColor = industrialZones.find(z => z.id === point.zoneId)?.color || '#f59e0b';

                  return (
                    <g
                      key={`marker-${point.id}`}
                      className="cursor-pointer pointer-events-auto"
                      onClick={() => setSelectedZoneId(point.zoneId)}
                      onMouseEnter={() => {
                        setHoveredPointId(point.id);
                        setHoveredZoneId(point.zoneId);
                      }}
                      onMouseLeave={() => {
                        setHoveredPointId(null);
                        setHoveredZoneId(null);
                      }}
                    >
                      {/* Pulse Ring when Active or Hovered */}
                      {(isPointHovered || isZoneActive) && (
                        <circle
                          cx={point.coords.x}
                          cy={point.coords.y}
                          r={isPointHovered ? "5" : "3.5"}
                          fill="none"
                          stroke={zoneColor}
                          strokeWidth="0.8"
                          className={isPointHovered ? "animate-ping opacity-80" : "opacity-40"}
                        />
                      )}

                      {/* Outer Marker Ring */}
                      <circle
                        cx={point.coords.x}
                        cy={point.coords.y}
                        r={isPointHovered ? "3.6" : (isZoneActive ? "2.6" : "1.9")}
                        fill="#090d16"
                        stroke={zoneColor}
                        strokeWidth={isPointHovered ? "1.6" : (isZoneActive ? "1.2" : "0.9")}
                        filter={isPointHovered ? "url(#nodeGlow)" : undefined}
                      />

                      {/* Center Point */}
                      <circle
                        cx={point.coords.x}
                        cy={point.coords.y}
                        r={isPointHovered ? "1.8" : (isZoneActive ? "1.3" : "0.9")}
                        fill={zoneColor}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* DOM Labels Layer positioned on Percentage Coords for Sharp Legibility */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {sectorPoints.map((point) => {
                  const isZoneActive = point.zoneId === activeZoneId;
                  const isPointHovered = point.id === hoveredPointId;
                  const zoneColor = industrialZones.find(z => z.id === point.zoneId)?.color || '#f59e0b';
                  const isRight = point.labelAlign === 'right';

                  return (
                    <div
                      key={`dom-label-${point.id}`}
                      onClick={() => setSelectedZoneId(point.zoneId)}
                      onMouseEnter={() => {
                        setHoveredPointId(point.id);
                        setHoveredZoneId(point.zoneId);
                      }}
                      onMouseLeave={() => {
                        setHoveredPointId(null);
                        setHoveredZoneId(null);
                      }}
                      style={{ left: `${point.coords.x}%`, top: `${point.coords.y}%` }}
                      className="absolute -translate-y-1/2 pointer-events-auto cursor-pointer"
                    >
                      <div
                        className={`transition-all duration-150 flex items-center gap-1 px-1.5 py-0.5 rounded border text-[9px] font-semibold whitespace-nowrap shadow-xs ${
                          isRight ? 'translate-x-1.5' : '-translate-x-full -ml-1.5'
                        } ${
                          isPointHovered
                            ? 'bg-slate-900 text-white border-amber-400 ring-2 ring-amber-400/40 scale-105 z-20'
                            : isZoneActive
                            ? 'bg-slate-950/90 text-white border-slate-600 scale-100'
                            : 'bg-slate-950/70 text-slate-400 border-slate-800/80 hover:text-white hover:border-slate-600'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: zoneColor }} />
                        <span>{point.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Hover Floating HUD Tooltip */}
              {activeHoveredPoint && (
                <div
                  className="absolute bottom-2 left-2 right-2 bg-slate-950/95 border border-amber-400/60 rounded p-2 text-left shadow-lg pointer-events-none z-30 flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                      <span className="text-xs font-bold text-white">{activeHoveredPoint.name}</span>
                      <span className="text-[10px] text-amber-300 font-mono">({activeZone.zone})</span>
                    </div>
                    <p className="text-[10px] text-slate-300">{activeHoveredPoint.communeNote}</p>
                  </div>
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Cobertura Directa
                  </span>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Cards Grid for the 4 Industrial Zones (7 cols on LG) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industrialZones.map((zone) => {
                const isSelected = zone.id === activeZoneId;
                return (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZoneId(zone.id)}
                    onMouseEnter={() => setHoveredZoneId(zone.id)}
                    onMouseLeave={() => setHoveredZoneId(null)}
                    className={`bg-white border rounded-lg p-3.5 text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 shadow-2xs ${
                      isSelected
                        ? 'border-slate-900 ring-1 ring-slate-900 bg-slate-50/80 shadow-xs'
                        : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zone.color }} />
                          {zone.zone}
                        </span>
                      </div>
                      
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        <span>{zone.name}</span>
                      </h3>

                      {/* Badges of the Sectors in this zone */}
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {zone.sectorsList.map((sec) => (
                          <span
                            key={sec}
                            className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                              hoveredPointId && sectorPoints.find(p => p.id === hoveredPointId)?.name === sec
                                ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                                : 'bg-slate-100 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {sec}
                          </span>
                        ))}
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2 pt-0.5">
                        {zone.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-500 font-medium">Actividad:</span>
                        <span className="text-slate-900 font-bold">{zone.hoverTag}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

