import React, { useState, useEffect, useRef } from 'react';
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
import { ArrowLeft, ArrowRight, MousePointer2, Maximize2, Minimize2 } from 'lucide-react';

const SLIDES = [
  { component: Hero, title: "Inicio", phase: "Intro" },
  { component: StrategicImpact, title: "¿Cuándo Inicia?", phase: "Contexto" },
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
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
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
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
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
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentComponent = SLIDES[currentSlide].component;
  const currentPhase = SLIDES[currentSlide].phase;

  return (
    <main className="h-screen w-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full blur-[100px] pointer-events-none animate-breathe fixed z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100/40 to-transparent rounded-full blur-[80px] pointer-events-none animate-breathe delay-700 fixed z-0" />

      {/* Header */}
      <header className="w-full px-6 md:px-12 py-6 z-50 flex justify-between items-center bg-transparent relative">
          <div className="flex items-center gap-4">
             <div>
                <div className="font-brand font-black text-xl md:text-2xl tracking-tighter text-slate-900 flex items-baseline gap-1">
                fyo<span className="w-2 h-2 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500"></span>
                </div>
                <div className="animate-enter key={currentSlide}">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase">
                        {currentPhase}
                    </span>
                </div>
             </div>
          </div>

          <button 
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-500 hover:bg-white hover:text-purple-600 hover:border-purple-200 transition-all shadow-sm group"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
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
              className="w-full h-full flex flex-col justify-center animate-enter"
          >
              <CurrentComponent />
          </div>
      </div>

      {/* Footer / Navigation */}
      <footer className="w-full px-6 md:px-12 py-6 z-50 flex items-end justify-between bg-transparent relative">
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200/50">
            <div 
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(192,38,211,0.4)]"
            style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
            />
        </div>

        {/* Page Counter */}
        <div className="hidden md:flex items-center gap-2 animate-enter delay-200">
            <span className="text-3xl lg:text-4xl font-black text-slate-300 select-none -mb-1 tracking-tighter">
            {(currentSlide + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
            / {SLIDES.length}
            </span>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3 animate-enter delay-300 ml-auto mb-2">
            <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="group relative w-12 h-12 rounded-full flex items-center justify-center border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-500 hover:bg-white hover:border-purple-200 hover:text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
            >
            <ArrowLeft className="w-5 h-5" />
            </button>
            
            <button 
                onClick={nextSlide}
                disabled={currentSlide === SLIDES.length - 1}
                className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-slate-900 border border-slate-900 text-white hover:bg-purple-600 hover:border-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-purple-200 hover:scale-105 active:scale-95"
            >
            <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </footer>

    </main>
  );
};

export default App;