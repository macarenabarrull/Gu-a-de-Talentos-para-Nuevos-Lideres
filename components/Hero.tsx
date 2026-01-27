import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
      
      {/* Badge */}
      <div className="animate-enter inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-100 text-purple-700 font-bold text-[10px] tracking-widest uppercase mb-6 shadow-sm cursor-default">
        <span className="text-sm">👋</span>
        <span>Talentos fyo</span>
      </div>

      {/* Main Title - Staggered */}
      <div className="animate-enter delay-100 mb-6">
        <h1 className="text-6xl md:text-8xl font-brand font-black text-slate-900 tracking-tighter leading-none">
          fyo
        </h1>
        <h2 className="text-3xl md:text-5xl font-brand font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 tracking-tight mt-2">
          PROCESO DE SELECCIÓN
        </h2>
      </div>
      
      {/* Subtitle / Description - Staggered */}
      <div className="animate-enter delay-200 flex flex-col md:flex-row gap-6 items-start mt-4 border-l-4 border-purple-600 pl-6 ml-2 md:ml-0">
         <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
           Una guía para entender cómo captamos, elegimos e integramos a los mejores talentos.
         </p>
      </div>
      
      {/* Subtle details bottom - Staggered */}
      <div className="animate-enter delay-300 mt-12 flex flex-wrap gap-3 justify-center md:justify-start">
        <div className="px-4 py-2 rounded-lg bg-white border border-slate-100 text-slate-500 font-bold text-xs flex items-center gap-2 shadow-sm uppercase tracking-wide">
           <span className="text-purple-500">🚀</span>
           Atracción
        </div>
        <div className="px-4 py-2 rounded-lg bg-white border border-slate-100 text-slate-500 font-bold text-xs flex items-center gap-2 shadow-sm uppercase tracking-wide">
           <span className="text-pink-500">⭐</span>
           Selección
        </div>
        <div className="px-4 py-2 rounded-lg bg-white border border-slate-100 text-slate-500 font-bold text-xs flex items-center gap-2 shadow-sm uppercase tracking-wide">
           <span className="text-orange-500">🤝</span>
           Onboarding
        </div>
      </div>

    </section>
  );
};