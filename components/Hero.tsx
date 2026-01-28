import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
    onStart?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="h-full flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-7xl mx-auto w-full px-6 relative z-10">
      
      {/* Decorative Background Elements (Subtle) */}
      <div className="absolute top-10 right-0 lg:right-20 animate-enter delay-500 hidden md:block">
          <div className="w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
      </div>

      {/* Badge - Pill Shape */}
      <div className="animate-enter inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 text-purple-700 font-bold text-[11px] tracking-wide shadow-sm hover:shadow-md transition-all mb-6">
        <Sparkles className="w-3.5 h-3.5 text-purple-500" />
        <span>Proceso de Selección y Onboarding</span>
      </div>

      {/* Main Title */}
      <div className="animate-enter delay-100 mb-6 relative">
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-brand font-black text-slate-900 tracking-tighter leading-[0.9] flex flex-col md:flex-row items-center md:items-baseline gap-4 justify-center md:justify-start">
          fyo
          <span className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 block animate-bounce" style={{ animationDuration: '3s' }}></span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-brand font-bold text-slate-800 tracking-tighter mt-2 pr-4">
          Talento & Cultura
        </h2>
      </div>
      
      {/* Subtitle / Description */}
      <div className="animate-enter delay-200 flex flex-col md:flex-row gap-6 items-start mt-4 border-l-0 md:border-l-4 border-slate-900 md:pl-8">
         <p className="text-base md:text-xl text-slate-600 font-medium max-w-lg lg:max-w-2xl leading-relaxed">
           Cómo atraemos, elegimos y potenciamos a los líderes del futuro. <br/>
           <span className="text-slate-900 font-bold">Tu manual estratégico.</span>
         </p>
      </div>
      
      {/* Call to Action Button */}
      <div className="animate-enter delay-300 mt-10 flex flex-col items-center md:items-start gap-4">
        <button 
            onClick={onStart}
            className="group relative flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-wide hover:bg-purple-700 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-purple-500/20 hover:-translate-y-1 active:scale-95 ring-4 ring-transparent hover:ring-purple-100"
        >
            <span>Comenzar el recorrido</span>
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-4 h-4" />
            </div>
        </button>
        <p className="text-[11px] text-slate-400 font-medium tracking-wide pl-2 hidden md:block">
            Tiempo de lectura: 3 min
        </p>
      </div>

    </section>
  );
};