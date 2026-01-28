import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS } from '../constants';

export const SourcingFunnel: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-6 pt-4 md:pt-0">
      
      <div className="shrink-0 mb-6">
        <SectionHeading 
            title="Acciones de atracción" 
            subtitle="No es solo publicar un aviso. Activamos múltiples canales en simultáneo para captar talento."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 min-h-0 items-start">
         {SOURCING_CHANNELS.map((channel, index) => {
             const style = [
                 { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100' },
                 { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-100' },
                 { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100' },
                 { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100' }
             ][index];

            return (
              <div 
                key={index}
                className="animate-enter flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full relative overflow-hidden min-h-[220px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                 {/* Subtle Background Number */}
                 <div className="absolute -right-4 -top-6 text-[8rem] font-brand font-black text-slate-50 group-hover:text-slate-100 transition-colors pointer-events-none select-none z-0">
                     {index + 1}
                 </div>

                 <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-2xl ${style.bg} ${style.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                       <channel.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-brand font-bold text-lg text-slate-900 mb-3 leading-tight">
                        {channel.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        {channel.description}
                    </p>

                    <div className={`mt-auto py-1.5 px-3 rounded-lg bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wide inline-block self-start border border-slate-100`}>
                        {channel.percentage}
                    </div>
                 </div>
              </div>
            );
         })}
      </div>
      
      <div className="mt-8 bg-slate-900 p-5 rounded-2xl text-center animate-enter delay-500 shrink-0 mb-4 max-w-2xl mx-auto shadow-lg shadow-slate-900/10">
        <p className="text-white text-sm font-medium">
           💡 <span className="font-bold text-yellow-400">Estrategia 360:</span> No dependemos de una sola fuente. Atacamos el mercado desde todos los ángulos.
        </p>
      </div>
    </section>
  );
};