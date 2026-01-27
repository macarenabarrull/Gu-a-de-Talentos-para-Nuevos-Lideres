import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { StrategicImpact } from './components/StrategicImpact'; // Now Initiation
import { ProcessTimeline } from './components/ProcessTimeline';
import { DefinitionPhase } from './components/DefinitionPhase';
import { SourcingFunnel } from './components/SourcingFunnel';
import { SourcingStrategy } from './components/SourcingStrategy'; // Now Evaluation
import { InterviewGuide } from './components/InterviewGuide'; // Now Closing/Medical
import { TimingSection } from './components/TimingSection';
import { OnboardingKanban } from './components/OnboardingKanban';
import { Onboarding } from './components/Onboarding';
import { Closing } from './components/Closing';
import { 
    ArrowLeft, ArrowRight, Maximize2, Minimize2, 
    Menu, X, ScrollText, Presentation, MousePointer2 
} from 'lucide-react';

// Updated Titles based on PDF flow
const SLIDES = [
  { component: Hero, title: "Inicio", phase: "Intro" },
  { component: StrategicImpact, title: "¿Cuándo Inicia?", phase: "Contexto" },
  { component: ProcessTimeline, title: "Etapas del Proceso", phase: "Overview" },
  { component: DefinitionPhase, title: "Entendamos qué buscamos", phase: "Definición" },
  { component: SourcingFunnel, title: "Estrategia de Atracción", phase: "Sourcing" },
  { component: SourcingStrategy, title: "Filtrar y Elegir", phase: "Evaluación" },
  { component: TimingSection, title: "Tiempos Estimados", phase: "SLA" },
  { component: InterviewGuide, title: "Propuesta Formal", phase: "Cierre" },
  { component: OnboardingKanban, title: "Acciones de Onboarding", phase: "Ingreso" },
  { component: Onboarding, title: "El Primer Día Importa", phase: "Cultura" },
  { component: Closing, title: "Fin", phase: "Cierre" }
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<'slides' | 'vertical'>('slides');
  const [showMenu, setShowMenu] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Show swipe hint only once on mobile mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const hasSeenHint = localStorage.getItem('hasSeenSwipeHint');
    if (isMobile && !hasSeenHint) {
        setShowSwipeHint(true);
        const timer = setTimeout(() => {
            setShowSwipeHint(false);
            localStorage.setItem('hasSeenSwipeHint', 'true');
        }, 4000);
        return () => clearTimeout(timer);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowMenu(false);
    setViewMode('slides');
  };

  // Swipe Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    if (viewMode === 'vertical') return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (viewMode === 'vertical') return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (viewMode === 'vertical') return;
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < SLIDES.length - 1) nextSlide();
    if (isRightSwipe && currentSlide > 0) prevSlide();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'slides' ? 'vertical' : 'slides');
    setShowMenu(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'vertical') return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Prevent page scroll on space
        nextSlide();
      }
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentComponent = SLIDES[currentSlide].component;
  const currentPhase = SLIDES[currentSlide].phase;

  return (
    <main className={`h-screen w-screen bg-slate-200 flex items-center justify-center font-sans selection:bg-purple-100 selection:text-purple-900 overflow-hidden ${viewMode === 'slides' ? 'md:p-6' : 'p-0'}`}>
      
      {/* Device Frame */}
      <div 
        ref={containerRef}
        className={`bg-white relative flex flex-col transition-all duration-500 ease-out 
          ${viewMode === 'vertical' ? 'w-full h-full rounded-none overflow-y-auto' : ''}
          ${viewMode === 'slides' && isFullscreen ? 'w-full h-full rounded-none' : ''}
          ${viewMode === 'slides' && !isFullscreen ? 'w-full h-full md:max-w-[95vw] md:h-full md:max-h-[92vh] md:aspect-[16/9] md:rounded-[2rem] md:border-[4px] border-white/80 ring-1 ring-slate-900/5 md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]' : ''}
        `}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        
        {/* Header */}
        <header className={`
            sticky top-0 left-0 w-full px-4 md:px-8 py-4 z-50 flex justify-between items-center transition-all duration-300
            ${viewMode === 'vertical' ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'absolute pointer-events-none'}
        `}>
          <div className="pointer-events-auto flex items-center gap-3">
             <button onClick={() => setShowMenu(true)} className="p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors">
                <Menu className="w-5 h-5 md:w-6 md:h-6" />
             </button>
             
             <div>
                <div className="font-brand font-black text-xl md:text-2xl tracking-tighter text-slate-900 flex items-baseline gap-1">
                fyo<span className="w-2 h-2 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500"></span>
                </div>
                {viewMode === 'slides' && (
                    <div className="animate-enter key={currentSlide}">
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase">
                            {currentPhase}
                        </span>
                    </div>
                )}
             </div>
          </div>
          
          <div className="flex gap-2 pointer-events-auto">
             <button 
                onClick={toggleViewMode}
                className="p-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 text-slate-500 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all shadow-sm group hidden md:flex"
                title={viewMode === 'slides' ? "Modo Lectura" : "Modo Presentación"}
             >
                {viewMode === 'slides' ? <ScrollText className="w-4 h-4 md:w-5 md:h-5" /> : <Presentation className="w-4 h-4 md:w-5 md:h-5" />}
             </button>

             {viewMode === 'slides' && (
                <button 
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 text-slate-500 hover:bg-white hover:text-purple-600 transition-all shadow-sm group hidden md:flex"
                    title="Pantalla Completa"
                >
                    {isFullscreen ? <Minimize2 className="w-4 h-4 md:w-5 md:h-5" /> : <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />}
                </button>
             )}
          </div>
        </header>

        {/* Swipe Hint Overlay (Mobile Only) */}
        {showSwipeHint && viewMode === 'slides' && (
            <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none bg-black/10 backdrop-blur-[1px] md:hidden">
                <div className="flex flex-col items-center">
                    <MousePointer2 className="w-12 h-12 text-white animate-swipe drop-shadow-lg" />
                    <p className="text-white font-bold text-sm mt-4 drop-shadow-md">Deslizá para navegar</p>
                </div>
            </div>
        )}

        {/* Navigation Menu Overlay */}
        {showMenu && (
            <div className="absolute inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col p-6 animate-enter">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-brand font-bold text-slate-900">Índice</h2>
                    <button onClick={() => setShowMenu(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200">
                        <X className="w-6 h-6 text-slate-600" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pb-10">
                    {SLIDES.map((slide, index) => (
                        <button 
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`p-4 rounded-xl text-left transition-all flex items-center gap-4 group
                                ${currentSlide === index ? 'bg-purple-50 border border-purple-100' : 'hover:bg-slate-50 border border-transparent'}
                            `}
                        >
                            <span className={`text-2xl font-brand font-black ${currentSlide === index ? 'text-purple-600' : 'text-slate-300 group-hover:text-purple-300'}`}>
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <div>
                                <h3 className={`font-bold text-sm ${currentSlide === index ? 'text-purple-900' : 'text-slate-700'}`}>{slide.title}</h3>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest">{slide.phase}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Content Area */}
        <div className="flex-1 w-full h-full relative flex flex-col">
          {/* Dynamic Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/40 to-transparent rounded-full blur-[100px] pointer-events-none animate-breathe fixed" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-100/30 to-transparent rounded-full blur-[80px] pointer-events-none animate-breathe delay-700 fixed" />

          {/* Render Mode: SLIDES */}
          {viewMode === 'slides' && (
            <div className={`flex-1 w-full h-full flex items-center justify-center overflow-hidden transition-all duration-500
                ${isFullscreen ? 'p-6 pb-24' : 'p-6 md:p-12 pb-20'}
            `}>
                {/* 
                  1. Removed scale-[1.02] to fix blurry text in fullscreen
                  2. Added key={currentSlide} and animate-enter to wrapper for smooth transitions
                */}
                <div 
                    key={currentSlide} 
                    className={`w-full h-full mx-auto relative z-10 flex flex-col justify-center transition-all duration-500 animate-enter
                        ${isFullscreen ? 'max-w-screen-2xl' : 'max-w-6xl'}
                    `}
                >
                    <CurrentComponent />
                </div>
            </div>
          )}

          {/* Render Mode: VERTICAL (Web) */}
          {viewMode === 'vertical' && (
            <div className="w-full max-w-5xl mx-auto relative z-10 px-6 py-12 space-y-24">
                {SLIDES.map((slide, index) => {
                    const Component = slide.component;
                    return (
                        <div key={index} className="border-b border-slate-100 pb-20 last:border-0">
                            <div className="mb-4 flex items-center gap-3 opacity-50">
                                <span className="text-4xl font-brand font-black text-slate-200">{(index + 1).toString().padStart(2, '0')}</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{slide.title}</span>
                            </div>
                            <Component />
                        </div>
                    );
                })}
            </div>
          )}
        </div>

        {/* Footer (Only in Slides mode) */}
        {viewMode === 'slides' && (
            <footer className={`absolute bottom-0 left-0 w-full z-40 flex items-end justify-between pointer-events-none transition-all duration-300
                ${isFullscreen ? 'px-8 py-8' : 'px-4 md:px-6 py-5'}
            `}>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-50 group pointer-events-auto">
                <div 
                className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(192,38,211,0.4)]"
                style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
                />
            </div>

            {/* Page Counter */}
            <div className="hidden md:flex items-center gap-2 pointer-events-auto animate-enter delay-200">
                <span className="text-3xl lg:text-4xl font-black text-slate-100 select-none -mb-1 tracking-tighter">
                {(currentSlide + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                / {SLIDES.length}
                </span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 pointer-events-auto animate-enter delay-300 ml-auto">
                <button 
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="group relative w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-slate-200 bg-white/80 backdrop-blur text-slate-500 hover:bg-white hover:border-purple-200 hover:text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-purple-100 hover:scale-105 active:scale-95"
                >
                <ArrowLeft className="w-5 h-5 md:w-5 md:h-5" />
                </button>
                
                <button 
                    onClick={nextSlide}
                    disabled={currentSlide === SLIDES.length - 1}
                    className="group relative w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-slate-900 border border-slate-900 text-white hover:bg-purple-600 hover:border-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl hover:shadow-purple-200 hover:scale-105 active:scale-95"
                >
                <ArrowRight className="w-5 h-5 md:w-5 md:h-5" />
                </button>
            </div>
            </footer>
        )}
      </div>
    </main>
  );
};

export default App;