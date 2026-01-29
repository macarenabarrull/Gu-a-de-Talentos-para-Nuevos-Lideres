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

// NARRATIVE ORDER UPDATE:
// 1. Context (StrategicImpact)
// 2. The Map (ProcessTimeline)
// 3. Definition (DefinitionPhase)
// 4. Attraction (SourcingFunnel)
// 5. Evaluation (SourcingStrategy)
// 6. Expectations (TimingSection)
// 7. Closing the Deal (InterviewGuide)
// 8. The Welcome Philosophy (Onboarding)
// 9. The Execution Tool (OnboardingKanban)
const SLIDES = [
  { component: Hero, title: "Inicio", phase: "Portada" },
  { component: StrategicImpact, title: "¿Cuándo Inicia?", phase: "Contexto" },
  { component: ProcessTimeline, title: "Roadmap del Proceso", phase: "Mapa" },
  { component: DefinitionPhase, title: "Entendamos qué buscamos", phase: "Definición" },
  { component: SourcingFunnel, title: "Acciones de Atracción", phase: "Atracción" },
  { component: SourcingStrategy, title: "Filtrar y Elegir", phase: "Evaluación" },
  { component: TimingSection, title: "Tiempos Estimados", phase: "Expectativas" },
  { component: InterviewGuide, title: "Propuesta Formal", phase: "Cierre" },
  { component: Onboarding, title: "La Experiencia", phase: "Bienvenida" }, // Moved up: Concept First
  { component: OnboardingKanban, title: "Plan de Aterrizaje", phase: "Gestión" }, // Moved down: Tool Second
  { component: Closing, title: "Fin del Recorrido", phase: "Fin" }
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
      <main className="no-print h-screen w-screen bg-[#fafafa] flex flex-col font-sans selection:bg-slate-900 selection:text-white overflow-hidden relative">
        
        {/* Premium Atmosphere: Softer, larger, slower gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-gradient-to-b from-purple-100/30 to-transparent rounded-full blur-[150px] pointer-events-none animate-breathe fixed z-0 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-gradient-to-t from-pink-100/30 to-transparent rounded-full blur-[150px] pointer-events-none animate-breathe delay-1000 fixed z-0 mix-blend-multiply" />

        {/* Header - Glassmorphism 2.0 */}
        <header className="w-full px-8 py-5 z-50 flex justify-between items-center bg-transparent relative shrink-0">
            <div className="flex items-center gap-4">
               <div>
                  <div className="font-brand font-black text-xl tracking-tighter text-slate-900 flex items-baseline gap-1 cursor-default">
                  fyo<span className="w-2 h-2 rounded-full bg-slate-900"></span>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-sm transition-all hover:bg-white/80">
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                        {currentPhase}
                    </span>
                </div>

                <button 
                onClick={toggleFullscreen}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-slate-500 hover:bg-white hover:text-purple-600 transition-all shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
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
                <CurrentComponent onStart={nextSlide} onRestart={() => goToSlide(0)} />
            </div>
        </div>

        {/* Footer / Navigation */}
        <footer className="w-full px-8 py-6 z-50 flex items-end justify-between bg-transparent relative shrink-0">
          
          {/* Interactive Progress Bar - Glowing Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200/50 flex group hover:h-1 transition-all duration-500">
              {SLIDES.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className="h-full flex-1 cursor-pointer hover:bg-purple-200/50 transition-colors relative"
                  >
                     {/* Tooltip */}
                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 hover:opacity-100 transition-all whitespace-nowrap pointer-events-none mb-1 shadow-xl transform translate-y-2 hover:translate-y-0 duration-300 font-medium tracking-wide">
                        {SLIDES[idx].title}
                     </div>
                  </div>
              ))}
              {/* Active Indicator with Glow */}
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none shadow-[0_0_15px_rgba(192,38,211,0.5)]"
                style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
              />
          </div>

          {/* Navigation Pro: Menu Trigger */}
          <div className="flex items-center gap-4 animate-enter delay-200">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 hover:shadow-xl hover:shadow-slate-200/50 hover:bg-white hover:border-white transition-all duration-300 group active:scale-95"
              >
                 <Grid className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors" />
                 <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 select-none tracking-wide">
                     {(currentSlide + 1).toString().padStart(2, '0')} <span className="text-slate-300 font-normal mx-1">/</span> {SLIDES.length}
                 </span>
              </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 animate-enter delay-300 ml-auto mb-2">
              <button 
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center border border-white/60 bg-white/40 backdrop-blur-md text-slate-500 hover:bg-white hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
              >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
              
              <button 
                  onClick={nextSlide}
                  disabled={currentSlide === SLIDES.length - 1}
                  className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-slate-900 border border-slate-900 text-white hover:bg-purple-600 hover:border-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-slate-900/20 hover:shadow-purple-500/30 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
              >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
          </div>
        </footer>

        {/* CHAPTER MENU OVERLAY - Premium Blur */}
        {isMenuOpen && (
            <div className="fixed inset-0 z-[100] bg-slate-900/20 backdrop-blur-[20px] flex items-center justify-center p-6 animate-enter duration-500">
                <div className="bg-white/80 backdrop-blur-2xl w-full max-w-5xl rounded-[2.5rem] shadow-2xl border border-white/50 p-10 relative overflow-hidden">
                    
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-8 right-8 p-3 rounded-full bg-slate-100/50 hover:bg-slate-200/80 transition-colors z-20"
                    >
                        <X className="w-6 h-6 text-slate-500" />
                    </button>
                    
                    <h2 className="text-4xl font-brand font-black text-slate-900 mb-10 flex items-center gap-4 relative z-10 tracking-tighter uppercase">
                        <Map className="w-8 h-8 text-purple-600" />
                        ÍNDICE
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
                        {SLIDES.map((slide, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`
                                    text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden
                                    ${currentSlide === idx 
                                        ? 'bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-[1.02]' 
                                        : 'bg-white/50 border-white/60 hover:bg-white hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1'
                                    }
                                `}
                            >
                                <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${currentSlide === idx ? 'text-slate-400' : 'text-slate-400'}`}>
                                    {slide.phase}
                                </span>
                                <span className={`font-bold text-sm leading-tight block ${currentSlide === idx ? 'text-white' : 'text-slate-900'}`}>
                                    {slide.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )}

      </main>
      
      {/* Print Report */}
      <div className="hidden print:block">
        <PrintReport />
      </div>
    </>
  );
};

export default App;