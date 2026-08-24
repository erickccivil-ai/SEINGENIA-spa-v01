import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, X, MapPin, Video, Calendar } from 'lucide-react';
import { CompanyExperienceItem } from '../types';
import { COMPANY_EXPERIENCE_ITEMS } from '../data/mockData';

interface CompanyExperienceSectionProps {
  onOpenVisitModal?: (serviceTitle?: string) => void;
}

interface WorkCardImageAreaProps {
  item: CompanyExperienceItem;
}

const WorkCardImageArea: React.FC<WorkCardImageAreaProps> = ({ item }) => {
  const images = item.images && item.images.length > 0 ? item.images : [item.imageSrc];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const hasVideo = Boolean(item.youtubeId || item.youtubeUrl || item.videoSrc);

  // Rotate photographic sequence every 4.5 seconds for cards with multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const activeSrc = images[currentImgIndex] || item.imageSrc;

  return (
    <div className="relative h-44 sm:h-50 lg:h-56 bg-slate-900 overflow-hidden group select-none">
      <img
        key={`${item.id}-${currentImgIndex}`}
        src={activeSrc}
        alt={`${item.title} - Foto ${currentImgIndex + 1} de Obra ${item.codeImage}`}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Photo sequence dots */}
      {images.length > 1 && (
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded-full backdrop-blur-xs border border-slate-700/60 shadow-sm">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block rounded-full transition-all duration-300 ${
                idx === currentImgIndex ? 'w-2.5 h-1 bg-amber-400' : 'w-1 h-1 bg-slate-400/60'
              }`}
            />
          ))}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none z-10" />

      {/* Hover Play Button Overlay - only when the work has an attached video */}
      {hasVideo && (
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40">
          <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
          </div>
        </div>
      )}
    </div>
  );
};

export const CompanyExperienceSection: React.FC<CompanyExperienceSectionProps> = ({
  onOpenVisitModal,
}) => {
  const [items] = useState<CompanyExperienceItem[]>(COMPANY_EXPERIENCE_ITEMS);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideoModalItem, setActiveVideoModalItem] = useState<CompanyExperienceItem | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const manualAnimRef = useRef<number | null>(null);
  const isAnimatingManualRef = useRef(false);
  const scrollPosRef = useRef<number>(0);

  // Duplicate items 4 times to ensure a seamless infinite conveyor belt with zero empty space
  const duplicatedItems = [...items, ...items, ...items, ...items];

  // Smooth continuous animation frame loop
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = Math.min(now - lastTime, 50);
      lastTime = now;

      if (trackRef.current && !isPaused && activeVideoModalItem === null && !isAnimatingManualRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const halfWidth = totalWidth / 2;

        if (halfWidth > 0) {
          // Advance scroll position smoothly and slowly (~16px/sec at 60fps)
          scrollPosRef.current += (0.28 * delta) / 16.666;

          // Seamless infinite reset without visual jump
          if (scrollPosRef.current >= halfWidth) {
            scrollPosRef.current -= halfWidth;
          } else if (scrollPosRef.current < 0) {
            scrollPosRef.current += halfWidth;
          }

          trackRef.current.style.transform = `translateX(-${scrollPosRef.current}px)`;
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (manualAnimRef.current) {
        cancelAnimationFrame(manualAnimRef.current);
      }
    };
  }, [isPaused, activeVideoModalItem]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeVideoModalItem) {
        setActiveVideoModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoModalItem]);

  const smoothScrollBy = (distance: number, durationMs = 700) => {
    if (!trackRef.current) return;
    if (manualAnimRef.current) {
      cancelAnimationFrame(manualAnimRef.current);
    }

    const totalWidth = trackRef.current.scrollWidth;
    const halfWidth = totalWidth / 2;
    const startPos = scrollPosRef.current;
    const startTime = performance.now();

    isAnimatingManualRef.current = true;

    // Smooth ease-out cubic curve for organic and gradual deceleration
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutCubic(progress);

      let currentScroll = startPos + distance * easedProgress;

      // Handle seamless wrap
      if (halfWidth > 0) {
        while (currentScroll >= halfWidth) {
          currentScroll -= halfWidth;
        }
        while (currentScroll < 0) {
          currentScroll += halfWidth;
        }
      }

      scrollPosRef.current = currentScroll;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${currentScroll}px)`;
      }

      if (progress < 1) {
        manualAnimRef.current = requestAnimationFrame(step);
      } else {
        isAnimatingManualRef.current = false;
        manualAnimRef.current = null;
      }
    };

    manualAnimRef.current = requestAnimationFrame(step);
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    const totalWidth = trackRef.current.scrollWidth;
    const cardWidthWithGap = totalWidth / duplicatedItems.length;
    smoothScrollBy(cardWidthWithGap, 750);
  };

  const handlePrev = () => {
    if (!trackRef.current) return;
    const totalWidth = trackRef.current.scrollWidth;
    const cardWidthWithGap = totalWidth / duplicatedItems.length;
    smoothScrollBy(-cardWidthWithGap, 750);
  };

  const handleImageError = (itemId: string) => {
    setImgErrors((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleOpenVideo = (item: CompanyExperienceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setVideoError(false);
    setActiveVideoModalItem(item);
  };

  return (
    <section id="experiencia-empresa" className="pt-3.5 pb-6 sm:pt-4 sm:pb-8 bg-slate-50 border-b border-slate-200 text-slate-800 w-full overflow-hidden">
      
      {/* Header Section - Centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-1 mb-3 sm:mb-4 relative">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 tracking-tight">
            Nuestra Experiencia
          </h2>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Proyectos y obras representativas de nuestra experiencia.
          </p>

          {/* Carousel Navigation Arrow Buttons */}
          <div className="flex items-center justify-center gap-2 pt-1.5">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors shadow-2xs cursor-pointer"
              aria-label="Obra Anterior"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors shadow-2xs cursor-pointer"
              aria-label="Obra Siguiente"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Seamless Infinite Carousel Container - Edge-to-Edge Full Width */}
      <div
        className="w-full px-1 sm:px-2 relative overflow-hidden py-1 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Continuous Track of Cards */}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-5 transition-none will-change-transform"
        >
          {duplicatedItems.map((item, index) => {
            const hasVideo = Boolean(item.youtubeId || item.youtubeUrl || item.videoSrc);

            return (
              <div
                key={`${item.id}-clone-${index}`}
                onClick={(e) => {
                  if (hasVideo) {
                    handleOpenVideo(item, e);
                  }
                }}
                className={`w-[300px] sm:w-[340px] lg:w-[380px] shrink-0 bg-white rounded-lg border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group ${
                  hasVideo ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {/* Image Container with Photographic Sequence Slider */}
                <WorkCardImageArea item={item} />

                {/* Card Content */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-1">
                      <span className="font-semibold text-slate-700">Obra {item.codeImage}</span>
                      {item.images && item.images.length > 1 && (
                        <span className="text-[10px] text-slate-400 font-sans">
                          {item.images.length} fotografías
                        </span>
                      )}
                    </div>

                    <h3 className={`text-sm sm:text-base font-bold text-slate-900 leading-snug ${
                      hasVideo ? 'group-hover:text-slate-700 transition-colors' : ''
                    }`}>
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed whitespace-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer CTA Button */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Ubicación: <strong className="text-slate-800">{item.comuna}</strong>
                    </span>

                    {hasVideo && (
                      <button
                        onClick={(e) => handleOpenVideo(item, e)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-900 hover:text-slate-700 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-slate-900" />
                        <span>Ver Video {item.codeVideo || ''}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* General note regarding video availability placed below the carousel */}
      <div className="w-full flex justify-center px-4 pt-3 pb-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-slate-700 text-[11px] sm:text-xs shadow-2xs">
          <Video className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span>
            <strong className="text-slate-900 font-semibold">Nota:</strong> Algunas de las obras cuentan con video. Haz clic sobre la obra para desplegarlo.
          </span>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {activeVideoModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={() => setActiveVideoModalItem(null)}
        >
          <div
            className={`bg-slate-900 text-white rounded-xl border border-slate-700 shadow-2xl w-full overflow-hidden flex flex-col my-auto transition-all ${
              activeVideoModalItem.isShort ? 'max-w-md' : 'max-w-3xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="px-2 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-mono text-xs font-bold whitespace-nowrap">
                  {activeVideoModalItem.codeVideo} → {activeVideoModalItem.codeImage}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{activeVideoModalItem.title}</span>
                  </h3>
                  <p className="text-xs text-amber-400 font-mono">
                    Identificación Interna: [{activeVideoModalItem.codeVideo} → {activeVideoModalItem.codeImage}] | {activeVideoModalItem.comuna}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveVideoModalItem(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-2"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            {activeVideoModalItem.youtubeId ? (
              <div className="bg-black flex items-center justify-center p-2 sm:p-4">
                {activeVideoModalItem.isShort ? (
                  /* Vertical 9:16 aspect ratio container for YouTube Shorts */
                  <div className="relative w-full max-w-[290px] sm:max-w-[330px] aspect-[9/16] bg-slate-950 rounded-xl overflow-hidden shadow-2xl border border-slate-800 mx-auto">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideoModalItem.youtubeId}?autoplay=1&rel=0`}
                      title={`Video ${activeVideoModalItem.codeVideo} → ${activeVideoModalItem.codeImage}`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  /* Standard 16:9 aspect ratio container for YouTube Videos */
                  <div className="relative w-full aspect-video bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideoModalItem.youtubeId}?autoplay=1&rel=0`}
                      title={`Video ${activeVideoModalItem.codeVideo} → ${activeVideoModalItem.codeImage}`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ) : (
              /* Fallback for items without YouTube embed */
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                {!videoError ? (
                  <video
                    src={activeVideoModalItem.videoSrc}
                    controls
                    autoPlay
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-contain"
                  >
                    Su navegador no soporta el elemento de video.
                  </video>
                ) : (
                  <div className="p-8 text-center max-w-md space-y-3">
                    <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-amber-400">
                      <Video className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Video {activeVideoModalItem.codeVideo} Vinculado a Obra {activeVideoModalItem.codeImage}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Estructura preparada para reproducir el archivo de video <strong>{activeVideoModalItem.codeVideo}.mp4</strong> cuando sea proporcionado en los próximos prompts.
                      </p>
                    </div>
                    <div className="inline-block bg-slate-800 text-amber-400 font-mono text-xs px-3 py-1 rounded border border-slate-700">
                      Ruta asignada: {activeVideoModalItem.videoSrc}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Modal Body Info */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                <span className="text-slate-400">
                  Comuna / Sector: <strong className="text-white">{activeVideoModalItem.comuna}</strong>
                </span>
                <span className="text-amber-400 font-mono font-semibold">
                  Video Oficial: [{activeVideoModalItem.codeVideo} → {activeVideoModalItem.codeImage}]
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeVideoModalItem.description}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Seingenia Obras Civiles & Infraestructura
              </span>
              <button
                onClick={() => {
                  setActiveVideoModalItem(null);
                  onOpenVisitModal?.(activeVideoModalItem.title);
                }}
                className="btn-cta-gold px-3 py-1.5 rounded text-xs cursor-pointer"
              >
                Solicitar Cotización de Obra Similar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
