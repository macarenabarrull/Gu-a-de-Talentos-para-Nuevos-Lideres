import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS } from '../constants';

export const SourcingFunnel: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 py-4">
      
      <SectionHeading 
          title="¿DÓNDE BUSCAMOS?" 
          subtitle="No es solo publicar un aviso. Activamos múltiples canales en simultáneo para captar talento."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 flex-1 min-h-0 items-stretch pb-2">
         {SOURCING_CHANNELS.map((channel, index) => {
             // 3D Emojis instead of plain icons
             const emojis = ['🏢', '🎁', '🎓', '🌎'];
             
             const style = [
                 { bg: 'bg-purple-50', border: 'border-purple-100', hoverBorder: 'hover:border-purple-300' },
                 { bg: 'bg-pink-50', border: 'border-pink-100', hoverBorder: 'hover:border-pink-300' },
                 { bg: 'bg-blue-50', border: 'border-blue-100', hoverBorder: 'hover:border-blue-300' },
                 { bg: 'bg-amber-50', border: 'border-amber-100', hoverBorder: 'hover:border-amber-300' }
             ][index];

            return (
              <div 
                key={index}
                className={`animate-enter flex flex-col p-4 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] bg-white border ${style.border} ${style.hoverBorder} shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 group h-full relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                 {/* Large Background Number */}
                 <div className="absolute -right-4 -top-4 text-[5rem] lg:text-[8rem] font-brand font-black text-slate-50 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none select-none z-0 tracking-tighter">
                     {index + 1}
                 </div>

                 <div className="relative z-10 flex flex-col h-full">
                    {/* Floating 3D Emoji */}
                    <div className="text-4xl lg:text-5xl mb-4 lg:mb-6 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 origin-left filter drop-shadow-md shrink-0">
                        {emojis[index]}
                    </div>
                    
                    <h3 className="font-brand font-bold text-sm lg:text-xl text-slate-900 mb-2 lg:mb-3 leading-tight tracking-tight uppercase shrink-0">
                        {channel.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed mb-4 font-medium overflow-y-auto custom-scrollbar flex-1">
                        {channel.description}
                    </p>

                    <div className={`mt-auto py-1 px-2 lg:py-2 lg:px-3 rounded-lg ${style.bg} text-slate-600 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest inline-block self-start border border-white/50 shrink-0`}>
                        {channel.percentage}
                    </div>
                 </div>
              </div>
            );
         })}
      </div>
      
      {/* Updated Bottom Bubble */}
      <div className="mt-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-1 rounded-2xl animate-enter delay-500 shrink-0 w-full shadow-xl shadow-purple-900/20">
        <div className="bg-gradient-to-r from-slate-900 to-purple-800 border border-white/10 rounded-xl p-3 text-center">
            <p className="text-slate-200 text-xs md:text-sm font-medium">
            💡 <span className="font-bold text-white">Estrategia 360:</span> No dependemos de una sola fuente. Atacamos el mercado desde todos los ángulos.
            </p>
        </div>
      </div>
    </section>
  );
};