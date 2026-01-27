import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-6xl mx-auto">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-purple-100 text-purple-700 font-bold text-xs tracking-widest uppercase mb-10 shadow-sm hover:scale-105 transition-transform cursor-default">
        <span className="text-lg">✨</span>
        <span>Guía de Liderazgo 2026</span>
      </div>

      {/* Main Title */}
      <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-10 drop-shadow-sm">
        TALENTO <span className="inline-block animate-bounce text-[0.6em] align-top">🚀</span> <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
          ES ESTRATEGIA.
        </span>
      </h1>
      
      {/* Subtitle / Description */}
      <div className="flex flex-col md:flex-row gap-8 items-start mt-6 border-l-4 border-purple-600 pl-8 ml-2 md:ml-0">
         <p className="text-2xl md:text-3xl text-slate-600 font-light max-w-2xl leading-snug">
           Seleccionar no es solo cubrir una vacante. <br/>
           <strong className="text-slate-900 font-semibold">Es diseñar el futuro de tu equipo.</strong> 🔮
         </p>
      </div>
      
      {/* Subtle details bottom */}
      <div className="mt-24 flex flex-wrap gap-4 justify-center md:justify-start">
        <div className="px-6 py-4 rounded-2xl bg-white border border-slate-100 text-slate-600 font-semibold text-sm flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
           <span className="text-2xl">🌱</span>
           Cultura fyo
        </div>
        <div className="px-6 py-4 rounded-2xl bg-white border border-slate-100 text-slate-600 font-semibold text-sm flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
           <span className="text-2xl">⚡</span>
           Agilidad
        </div>
        <div className="px-6 py-4 rounded-2xl bg-white border border-slate-100 text-slate-600 font-semibold text-sm flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
           <span className="text-2xl">🤝</span>
           Liderazgo
        </div>
      </div>

    </section>
  );
};