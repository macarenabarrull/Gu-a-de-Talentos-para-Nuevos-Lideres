import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS } from '../constants';

export const SourcingFunnel: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-6 pt-4 md:pt-0">
      
      <div className="shrink-0 mb-8">
        <SectionHeading 
            title="¿DÓNDE BUSCAMOS?" 
            subtitle="No es solo publicar un aviso. Activamos múltiples canales en simultáneo para captar talento."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 min-h-0 items-start">
         {SOURCING_CHANNELS.map((channel, index) => {
             // 3D Emojis instead of plain icons for the "sticker" effect
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
                className={`animate-enter flex flex-col p-8 rounded-[2rem] bg-white border ${style.border} ${style.hoverBorder} shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 group h-full relative overflow-hidden min-h-[260px]`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                 {/* Large Background Number */}
                 <div className="absolute -right-4 -top-8 text-[8rem] font-brand font-black text-slate-50 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none select-none z-0 tracking-tighter">
                     {index + 1}
                 </div>

                 <div className="relative z-10 flex flex-col h-full">
                    {/* Floating 3D Emoji */}
                    <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 origin-left filter drop-shadow-md">
                        {emojis[index]}
                    </div>
                    
                    <h3 className="font-brand font-bold text-xl text-slate-900 mb-3 leading-tight tracking-tight uppercase">
                        {channel.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                        {channel.description}
                    </p>

                    <div className={`mt-auto py-2 px-3 rounded-lg ${style.bg} text-slate-600 text-[10px] font-bold uppercase tracking-widest inline-block self-start border border-white/50`}>
                        {channel.percentage}
                    </div>
                 </div>
              </div>
            );
         })}
      </div>
      
      {/* Updated Bottom Bubble: Full Width & Purple Gradient */}
      <div className="mt-8 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-1 rounded-2xl animate-enter delay-500 shrink-0 mb-4 w-full shadow-2xl shadow-purple-900/20">
        <div className="bg-gradient-to-r from-slate-900 to-purple-800 border border-white/10 rounded-xl p-5 text-center">
            <p className="text-slate-200 text-sm font-medium">
            💡 <span className="font-bold text-white">Estrategia 360:</span> No dependemos de una sola fuente. Atacamos el mercado desde todos los ángulos.
            </p>
        </div>
      </div>
    </section>
  );
};