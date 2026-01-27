import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
    onStart?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="h-full flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-7xl mx-auto w-full px-4 relative z-10">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-0 lg:right-20 animate-enter delay-500 hidden md:block">
          <div className="w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
      </div>

      {/* Badge */}
      <div className="animate-enter inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-purple-200 text-purple-800 font-bold text-xs lg:text-sm tracking-widest uppercase mb-8 shadow-sm cursor-default hover:scale-105 transition-transform">
        <Sparkles className="w-4 h-4 text-purple-600" />
        <span>Proceso de Selección</span>
      </div>

      {/* Main Title - Impactful Typography */}
      <div className="animate-enter delay-100 mb-6 lg:mb-8 relative">
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-brand font-black text-slate-900 tracking-tighter leading-none flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-6 justify-center md:justify-start">
          fyo
          <span className="w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 block animate-bounce" style={{ animationDuration: '3s' }}></span>
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-brand font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 tracking-tighter mt-2 lg:mt-4 opacity-90">
          TALENTO & CULTURA
        </h2>
      </div>
      
      {/* Subtitle / Description */}
      <div className="animate-enter delay-200 flex flex-col md:flex-row gap-6 items-start mt-4 border-l-0 md:border-l-4 lg:border-l-8 border-purple-500 md:pl-8 lg:pl-10">
         <p className="text-lg md:text-2xl lg:text-3xl text-slate-600 font-medium max-w-lg lg:max-w-4xl leading-relaxed">
           Cómo atraemos, elegimos y potenciamos a los líderes del futuro. <br/>
           <span className="text-purple-600 font-bold">Tu manual estratégico.</span>
         </p>
      </div>
      
      {/* Call to Action Button */}
      <div className="animate-enter delay-300 mt-12 lg:mt-16 flex flex-col items-center md:items-start gap-4">
        <button 
            onClick={onStart}
            className="group relative flex items-center gap-4 bg-slate-900 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full text-sm lg:text-base font-bold tracking-wide hover:bg-purple-600 transition-all duration-300 shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 active:scale-95"
        >
            <span>COMENZAR EL RECORRIDO</span>
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-5 h-5" />
            </div>
        </button>
        <p className="text-xs text-slate-400 font-medium tracking-wide pl-2 hidden md:block">
            Tiempo de lectura: 3 min
        </p>
      </div>

    </section>
  );
};