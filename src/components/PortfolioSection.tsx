import React, { useState, useEffect } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { ProjectCaseStudy } from '../types';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenVisitModal: (serviceTitle?: string, extraData?: any) => void;
}

const ProjectCardImageCarousel: React.FC<{ project: ProjectCaseStudy }> = ({ project }) => {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds transition

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const activeSrc = images[currentIndex] || project.image;

  return (
    <div
      className="relative h-48 sm:h-52 lg:h-56 w-full overflow-hidden bg-slate-900 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        key={`${project.id}-${currentIndex}`}
        src={activeSrc}
        alt={`${project.title} - imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Top Left Industry Badge */}
      <div className="absolute top-2.5 left-2.5 z-10 bg-slate-950/85 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded border border-slate-700/80 shadow-xs">
        {project.clientIndustry}
      </div>

      {/* Top Right Slide Counter (If multiple images) */}
      {images.length > 1 && (
        <div className="absolute top-2.5 right-2.5 z-10 bg-slate-950/80 backdrop-blur-xs text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/40 shadow-xs">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Bottom Left Badge: Ficha Técnica */}
      <div className="absolute bottom-2.5 left-2.5 z-10 bg-slate-950/90 backdrop-blur-xs text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/50 shadow-xs flex items-center gap-1">
        <Camera className="w-3 h-3 text-amber-400 shrink-0" />
        <span>Ficha Técnica de Obra</span>
      </div>

      {/* Bottom Right Comuna Badge */}
      <div className="absolute bottom-2.5 right-2.5 z-10 bg-slate-950/85 backdrop-blur-xs text-slate-200 text-[10px] font-medium px-2.5 py-1 rounded border border-slate-700/80 shadow-xs">
        <span>{project.comuna}</span>
      </div>

      {/* Navigation Arrows for Multiple Images */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/70 hover:bg-slate-950 text-white p-1 rounded-full opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer border border-slate-700/60"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/70 hover:bg-slate-950 text-white p-1 rounded-full opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer border border-slate-700/60"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Bottom Center Indicator Dots */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-950/60 backdrop-blur-xs">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-4 h-1.5 bg-amber-400'
                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenVisitModal }) => {
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'Obras Civiles', label: 'Obras Civiles' },
    { id: 'Infraestructura', label: 'Infraestructura' },
    { id: 'Mantención', label: 'Mantención' },
  ];

  const filteredProjects = filterCategory === 'todos'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) =>
        p.tags.some((t) => t.toLowerCase().includes(filterCategory.toLowerCase())) ||
        p.title.toLowerCase().includes(filterCategory.toLowerCase())
      );

  return (
    <section id="proyectos" className="py-8 sm:py-10 bg-white border-b border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Filter Buttons - Slate Styling */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors border ${
                filterCategory === cat.id
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 rounded border border-slate-300 overflow-hidden shadow-sm flex flex-col justify-between text-left transition-all hover:border-slate-400 hover:shadow-md"
            >
              <div>
                {/* Image Carousel */}
                <ProjectCardImageCarousel project={project} />

                {/* Content */}
                <div className="p-3.5 space-y-1.5">
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {project.seingeniaSolution}
                  </p>

                  <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-[10px] text-slate-600">
                    <div>
                      <span className="text-slate-500 block font-medium">Volumen:</span>
                      <span className="font-semibold text-slate-800">{project.sqm} m²</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block font-medium">Plazo:</span>
                      <span className="font-semibold text-slate-800">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-3.5 pt-0">
                <button
                  onClick={() => onOpenVisitModal('Consulta de Proyecto', { detallesProyecto: `Interés en obra similar a: ${project.title}` })}
                  className="w-full btn-cta-gold text-xs py-1.5 rounded transition-colors shadow-sm cursor-pointer"
                >
                  <span>Solicitar Proyecto Similar</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
