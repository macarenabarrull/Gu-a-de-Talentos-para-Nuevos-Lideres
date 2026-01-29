import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
    onStart?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-8 relative z-10">
      
      {/* Content Container */}
      <div className="max-w-4xl z-20">
        
        {/* Badge */}
        <div className="animate-enter mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm text-purple-700 font-bold text-[10px] tracking-widest uppercase cursor-default hover:bg-purple-50 transition-colors">
                <Sparkles className="w-3 h-3" />
                <span>Proceso de Selección</span>
            </div>
        </div>

        {/* Brand Logo & Title */}
        <div className="animate-enter delay-100 mb-10">
            <div className="flex items-baseline leading-none mb-2">
                <span className="text-[8rem] md:text-[10rem] font-brand font-black text-slate-900 tracking-tighter">
                    fyo
                </span>
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-600 mb-6 md:mb-8 ml-1"></span>
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-pink-500 mb-12 md:mb-16 ml-[-10px] mix-blend-multiply opacity-80"></span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-brand font-black text-slate-800 tracking-[-0.03em] leading-[0.9] uppercase">
                Talento & Cultura
            </h1>
        </div>
        
        {/* Subtitle with Vertical Line */}
        <div className="animate-enter delay-200 flex gap-6 items-stretch mb-12">
            <div className="w-1.5 bg-purple-600 rounded-full"></div>
            <div>
                <p className="text-xl text-slate-600 font-medium leading-relaxed tracking-tight mb-1">
                    Cómo atraemos y elegimos a nuestros nuevos talentos.
                </p>
                <p className="text-xl font-bold text-purple-600">
                    Tu guía estratégica.
                </p>
            </div>
        </div>
        
        {/* CTA */}
        <div className="animate-enter delay-300">
            <button 
                onClick={onStart}
                className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:-translate-y-1 active:scale-95"
            >
                <span>Comenzar el recorrido</span>
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white group-hover:text-slate-900 transition-all">
                    <ChevronRight className="w-4 h-4" />
                </div>
            </button>
            <p className="mt-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest pl-2">
                Tiempo de lectura: 3 min
            </p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-40 pointer-events-none hidden md:block">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

    </section>
  );
};