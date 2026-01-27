import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-7xl mx-auto w-full px-4">
      
      {/* Badge */}
      <div className="animate-enter inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white border border-purple-100 text-purple-700 font-bold text-[10px] lg:text-sm tracking-widest uppercase mb-6 lg:mb-10 shadow-sm cursor-default">
        <span className="text-sm lg:text-lg">👋</span>
        <span>Talentos fyo</span>
      </div>

      {/* Main Title - Staggered */}
      <div className="animate-enter delay-100 mb-6 lg:mb-10">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-brand font-black text-slate-900 tracking-tighter leading-none flex items-baseline gap-2 md:gap-4 justify-center md:justify-start">
          fyo
          <span className="w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 block"></span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-brand font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 tracking-tight mt-2 lg:mt-6">
          PROCESO DE SELECCIÓN
        </h2>
      </div>
      
      {/* Subtitle / Description - Staggered */}
      <div className="animate-enter delay-200 flex flex-col md:flex-row gap-6 items-start mt-4 border-l-4 lg:border-l-8 border-purple-600 pl-6 lg:pl-10 ml-2 md:ml-0">
         <p className="text-lg md:text-xl lg:text-3xl text-slate-600 font-medium max-w-lg lg:max-w-3xl leading-relaxed">
           Una guía para entender cómo captamos, elegimos e integramos a los mejores talentos.
         </p>
      </div>
      
      {/* Subtle details bottom - Staggered */}
      <div className="animate-enter delay-300 mt-12 lg:mt-24 flex flex-wrap gap-3 lg:gap-5 justify-center md:justify-start">
        <div className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-white border border-slate-100 text-slate-500 font-bold text-xs lg:text-sm flex items-center gap-2 shadow-sm uppercase tracking-wide">
           <span className="text-purple-500 text-base lg:text-xl">🚀</span>
           Atracción
        </div>
        <div className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-white border border-slate-100 text-slate-500 font-bold text-xs lg:text-sm flex items-center gap-2 shadow-sm uppercase tracking-wide">
           <span className="text-pink-500 text-base lg:text-xl">⭐</span>
           Selección
        </div>
        <div className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-white border border-slate-100 text-slate-500 font-bold text-xs lg:text-sm flex items-center gap-2 shadow-sm uppercase tracking-wide">
           <span className="text-orange-500 text-base lg:text-xl">🤝</span>
           Onboarding
        </div>
      </div>

    </section>
  );
};