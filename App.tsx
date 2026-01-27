import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { ProcessTimeline } from './components/ProcessTimeline';
import { DefinitionPhase } from './components/DefinitionPhase';
import { TimingSection } from './components/TimingSection';
import { SourcingStrategy } from './components/SourcingStrategy';
import { Onboarding } from './components/Onboarding';
import { ArrowLeft, ArrowRight, Maximize2, Minimize2 } from 'lucide-react';

const SLIDES = [
  Hero,
  DefinitionPhase,
  ProcessTimeline,
  TimingSection,
  SourcingStrategy,
  Onboarding
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentComponent = SLIDES[currentSlide];

  return (
    <main className="h-screen w-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans selection:bg-purple-100 selection:text-purple-900 overflow-hidden">
      
      {/* Main "Slide" Container Frame */}
      <div 
        ref={containerRef}
        className={`bg-white relative flex flex-col transition-all duration-500 ease-out shadow-2xl overflow-hidden
          ${isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-[1600px] h-full max-h-[900px] aspect-[16/9] rounded-[3rem] border-4 border-white ring-1 ring-slate-900/5'}
        `}
      >
        
        {/* Header (Inside Frame) */}
        <header className="absolute top-0 left-0 w-full p-8 md:px-12 z-50 flex justify-between items-start pointer-events-none">
          <div className="pointer-events-auto">
            <div className="font-bold text-3xl tracking-tighter text-slate-900 flex items-baseline gap-1">
              fyo<span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500"></span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-bold tracking-widest text-purple-700 uppercase shadow-sm">
                📚 Guía de Talento
              </span>
            </div>
          </div>
          
          <div className="flex gap-4 pointer-events-auto">
             <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm text-xs font-semibold text-slate-500 tracking-wide uppercase">
               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
               Online
             </div>
             
             <button 
                onClick={toggleFullscreen}
                className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-purple-600 transition-all shadow-sm group"
                title="Pantalla Completa"
             >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
             </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 w-full h-full relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-100/40 to-transparent rounded-full blur-[80px] pointer-events-none" />

          {/* Animated Slide Wrapper */}
          <div className="w-full h-full flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-y-auto">
              <div className="w-full max-w-7xl mx-auto animate-slideUp relative z-10">
                 <CurrentComponent />
              </div>
          </div>
        </div>

        {/* Footer (Inside Frame) */}
        <footer className="absolute bottom-0 left-0 w-full p-8 md:px-12 z-50 flex items-end justify-between pointer-events-none">
          
          {/* Progress Bar (Visual) */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-50">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(192,38,211,0.5)]"
              style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
            />
          </div>

          {/* Page Counter */}
          <div className="hidden md:flex items-center gap-2 pointer-events-auto">
             <span className="text-6xl font-black text-slate-100 select-none -mb-4 tracking-tighter">
               {(currentSlide + 1).toString().padStart(2, '0')}
             </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 pointer-events-auto">
             <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-14 h-14 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:border-purple-200 hover:text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-purple-100 hover:scale-105 active:scale-95"
             >
               <ArrowLeft className="w-6 h-6" />
             </button>
             <button 
                onClick={nextSlide}
                disabled={currentSlide === SLIDES.length - 1}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-900 border border-slate-900 text-white hover:bg-purple-600 hover:border-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl hover:shadow-purple-200 hover:scale-105 active:scale-95"
             >
               <ArrowRight className="w-6 h-6" />
             </button>
          </div>
        </footer>

      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideUp {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
};

export default App;