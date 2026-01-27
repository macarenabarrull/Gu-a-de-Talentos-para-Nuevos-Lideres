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
                 { bg: 'bg-purple-50', border: 'border-purple-200', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', shadow: 'shadow-purple-200/50' },
                 { bg: 'bg-pink-50', border: 'border-pink-200', iconBg: 'bg-pink-100', iconColor: 'text-pink-600', shadow: 'shadow-pink-200/50' },
                 { bg: 'bg-blue-50', border: 'border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', shadow: 'shadow-blue-200/50' },
                 { bg: 'bg-orange-50', border: 'border-orange-200', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', shadow: 'shadow-orange-200/50' }
             ][index];

            return (
              <div 
                key={index}
                className={`
                    animate-enter
                    flex flex-col
                    p-6
                    rounded-[2rem]
                    bg-white/60 backdrop-blur-xl border border-white/50
                    hover:border-${colors.border.split('-')[1]}-300
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300
                    group
                    cursor-default
                    h-full
                    relative
                    overflow-hidden
                    hover:-translate-y-2
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                 {/* Giant Number Background */}
                 <div className="absolute -right-4 -top-6 text-[8rem] font-brand font-black text-slate-100 opacity-50 group-hover:text-slate-200 group-hover:opacity-80 transition-colors pointer-events-none select-none">
                     {index + 1}
                 </div>

                 <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} ${colors.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                       <channel.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="font-brand font-black text-xl text-slate-900 mb-3 leading-tight">
                        {channel.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        {channel.description}
                    </p>

                    <div className={`mt-auto py-2 px-4 rounded-xl ${colors.bg} ${colors.iconColor} text-[10px] font-bold uppercase tracking-wide inline-block self-start border border-black/5`}>
                        {channel.percentage}
                    </div>
                 </div>
              </div>
            );
         })}
      </div>
      
      <div className="mt-8 lg:mt-12 bg-white/60 backdrop-blur-xl p-4 lg:p-5 rounded-2xl border border-white shadow-lg text-center animate-enter delay-500 shrink-0 mb-4 max-w-2xl mx-auto">
        <p className="text-slate-700 text-xs lg:text-sm font-medium">
           💡 <span className="font-bold">Estrategia 360:</span> No dependemos de una sola fuente. Atacamos el mercado desde todos los ángulos.
        </p>
      </div>
    </section>
  );
};