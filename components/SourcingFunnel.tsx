import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS } from '../constants';

export const SourcingFunnel: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-8 md:pt-0">
      
      {/* Explicit Top Header */}
      <div className="shrink-0">
        <SectionHeading 
            title="ACCIONES DE ATRACCIÓN 📣" 
            subtitle="No es solo publicar un aviso. Activamos múltiples canales en simultáneo para captar talento."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-10 flex-1 min-h-0 items-start">
         {SOURCING_CHANNELS.map((channel, index) => {
             const colors = [
                 { bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', hover: 'hover:border-purple-300' },
                 { bg: 'bg-pink-50', border: 'border-pink-100', iconBg: 'bg-pink-100', iconColor: 'text-pink-600', hover: 'hover:border-pink-300' },
                 { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', hover: 'hover:border-blue-300' },
                 { bg: 'bg-orange-50', border: 'border-orange-100', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', hover: 'hover:border-orange-300' }
             ][index];

            return (
              <div 
                key={index}
                className={`
                    animate-enter
                    flex flex-col
                    p-5 lg:p-6
                    rounded-[1.5rem]
                    bg-white border-2 border-slate-100
                    ${colors.hover}
                    shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:shadow-purple-900/5
                    transition-all duration-300
                    group
                    cursor-default
                    h-full
                    hover:-translate-y-1
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                 <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${colors.iconBg} ${colors.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                       <channel.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-200 group-hover:text-slate-300 transition-colors">0{index + 1}</span>
                 </div>
                 
                 <h3 className="font-brand font-bold text-lg text-slate-900 mb-2 leading-tight">
                     {channel.title}
                 </h3>
                 
                 <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                     {channel.description}
                 </p>

                 <div className={`mt-auto py-1.5 px-3 rounded-lg ${colors.bg} ${colors.iconColor} text-[10px] font-bold uppercase tracking-wide inline-block self-start border border-black/5`}>
                    {channel.percentage}
                 </div>
              </div>
            );
         })}
      </div>
      
      <div className="mt-8 lg:mt-12 bg-white/60 backdrop-blur-md p-4 lg:p-5 rounded-2xl border border-white shadow-sm text-center animate-enter delay-500 shrink-0 mb-4">
        <p className="text-slate-600 text-xs lg:text-sm font-medium">
           💡 <span className="font-bold">Estrategia 360:</span> No dependemos de una sola fuente. Atacamos el mercado desde todos los ángulos.
        </p>
      </div>
    </section>
  );
};