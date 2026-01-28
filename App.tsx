import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { StrategicImpact } from './components/StrategicImpact';
import { ProcessTimeline } from './components/ProcessTimeline';
import { DefinitionPhase } from './components/DefinitionPhase';
import { SourcingFunnel } from './components/SourcingFunnel';
import { SourcingStrategy } from './components/SourcingStrategy';
import { InterviewGuide } from './components/InterviewGuide';
import { TimingSection } from './components/TimingSection';
import { OnboardingKanban } from './components/OnboardingKanban';
import { Onboarding } from './components/Onboarding';
import { Closing } from './components/Closing';
import { PrintReport } from './components/PrintReport';
import { ArrowLeft, ArrowRight, MousePointer2, Maximize2, Minimize2, Grid, X, Map } from 'lucide-react';

const SLIDES = [
  { component: Hero, title: "Inicio", phase: "Portada" },
  { component: StrategicImpact, title: "¿Cuándo Inicia?", phase: "Inicio de proceso" },
  { component: ProcessTimeline, title: "Roadmap del Proceso", phase: "Roadmap" },
  { component: DefinitionPhase, title: "Entendamos qué buscamos", phase: "Definición" },
  { component: SourcingFunnel, title: "Acciones de Atracción", phase: "Sourcing" },
  { component: SourcingStrategy, title: "Filtrar y Elegir", phase: "Evaluación" },
  { component: TimingSection, title: "Tiempos Estimados", phase: "SLA" },
  { component: InterviewGuide, title: "Propuesta Formal", phase: "Propuesta" },
  { component: OnboardingKanban, title: "Acciones Clave", phase: "Ingreso" },
  { component: Onboarding, title: "La Experiencia", phase: "Onboarding" },
  { component: Closing, title: "Cierre", phase: "Fin" }
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error("Failed to enter fullscreen", e);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };
  
  const goToSlide = (index: number) => {
      setDirection(index > currentSlide ? 'next' : 'prev');
      setCurrentSlide(index);
      setIsMenuOpen(false);
  };

  // Swipe Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < SLIDES.length - 1) nextSlide();
    if (isRightSwipe && currentSlide > 0) prevSlide();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMenuOpen) {
          if (e.key === 'Escape') setIsMenuOpen(false);
          return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isMenuOpen]);

  const CurrentComponent = SLIDES[currentSlide].component;
  const currentPhase = SLIDES[currentSlide].phase;

  return (
    <>
      <main className="no-print h-screen w-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900 overflow-hidden relative">
        
        {/* Background Ambience (Softer) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none animate-breathe fixed z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[100px] pointer-events-none animate-breathe delay-700 fixed z-0" />

        {/* Header */}
        <header className="w-full px-6 py-4 z-50 flex justify-between items-center bg-transparent relative shrink-0">
            <div className="flex items-center gap-4">
               <div>
                  <div className="font-brand font-black text-xl tracking-tighter text-slate-900 flex items-baseline gap-1">
                  fyo<span className="w-2 h-2 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500"></span>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                        {currentPhase}
                    </span>
                </div>

                <button 
                onClick={toggleFullscreen}
                className="p-2.5 rounded-full bg-white border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-purple-600 transition-all shadow-sm group active:scale-95"
                title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
            </div>
        </header>

        {/* Swipe Hint Overlay (Mobile Only) */}
        {showSwipeHint && (
            <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none bg-black/10 backdrop-blur-[1px] md:hidden">
                <div className="flex flex-col items-center">
                    <MousePointer2 className="w-12 h-12 text-white animate-swipe drop-shadow-lg" />
                    <p className="text-white font-bold text-sm mt-4 drop-shadow-md">Deslizá para navegar</p>
                </div>
            </div>
        )}

        {/* Content Area */}
        <div 
          className="flex-1 w-full relative z-10 flex items-center justify-center overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
            <div 
                key={currentSlide} 
                className={`w-full h-full flex flex-col justify-center ${direction === 'next' ? 'slide-anim-next' : 'slide-anim-prev'}`}
            >
                {/* We pass nextSlide specifically for the Hero component */}
                <CurrentComponent onStart={nextSlide} onRestart={() => goToSlide(0)} />
            </div>
        </div>

        {/* Footer / Navigation */}
        <footer className="w-full px-6 py-4 z-50 flex items-end justify-between bg-transparent relative shrink-0">
          
          {/* Interactive Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 flex group hover:h-1.5 transition-all duration-300">
              {SLIDES.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className="h-full flex-1 cursor-pointer hover:bg-purple-100 transition-colors relative"
                  >
                     {/* Tooltip on hover */}
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none mb-1 shadow-lg transform translate-y-2 hover:translate-y-0 duration-200 font-medium">
                        {SLIDES[idx].title}
                     </div>
                  </div>
              ))}
              {/* Active Indicator */}
              <div 
                className="absolute top-0 left-0 h-full bg-slate-900 transition-all duration-500 ease-out pointer-events-none"
                style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
              />
          </div>

          {/* Navigation Pro: Menu Trigger */}
          <div className="flex items-center gap-4 animate-enter delay-200">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 hover:shadow-md hover:border-purple-200 transition-all group active:scale-95"
              >
                 <Map className="w-4 h-4 text-slate-400 group-hover:text-purple-600" />
                 <span className="text-xs font-bold text-slate-600 group-hover:text-purple-900 select-none">
                     {(currentSlide + 1).toString().padStart(2, '0')} <span className="text-slate-300 font-normal">/ {SLIDES.length}</span>
                 </span>
              </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 animate-enter delay-300 ml-auto mb-1">
              <button 
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="group relative w-11 h-11 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:border-purple-200 hover:text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md active:scale-95"
              >
              <ArrowLeft className="w-5 h-5" />
              </button>
              
              <button 
                  onClick={nextSlide}
                  disabled={currentSlide === SLIDES.length - 1}
                  className="group relative w-11 h-11 rounded-full flex items-center justify-center bg-slate-900 border border-slate-900 text-white hover:bg-purple-600 hover:border-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
              <ArrowRight className="w-5 h-5" />
              </button>
          </div>
        </footer>

        {/* CHAPTER MENU OVERLAY */}
        {isMenuOpen && (
            <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-xl flex items-center justify-center p-6 animate-enter duration-300">
                <div className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl p-10 relative">
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-8 right-8 p-2 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                        <X className="w-6 h-6 text-slate-500" />
                    </button>
                    
                    <h2 className="text-2xl font-brand font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Grid className="w-6 h-6 text-purple-600" />
                        Índice de Contenidos
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {SLIDES.map((slide, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`
                                    text-left p-5 rounded-2xl border transition-all duration-200 group relative overflow-hidden
                                    ${currentSlide === idx 
                                        ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
                                        : 'bg-white border-slate-100 hover:border-purple-200 hover:shadow-md hover:-translate-y-1'
                                    }
                                `}
                            >
                                <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${currentSlide === idx ? 'text-slate-400' : 'text-slate-400'}`}>
                                    {slide.phase}
                                </span>
                                <span className={`font-bold text-sm leading-tight block ${currentSlide === idx ? 'text-white' : 'text-slate-800'}`}>
                                    {slide.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )}

      </main>
      
      {/* Print Report - Hidden on screen, block on print */}
      <div className="hidden print:block">
        <PrintReport />
      </div>
    </>
  );
};

export default App;