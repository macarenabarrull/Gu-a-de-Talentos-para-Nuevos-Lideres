import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS } from '../constants';

export const SourcingFunnel: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      <SectionHeading 
          title="ACCIONES DE ATRACCIÓN 📣" 
          subtitle="No es solo publicar un aviso. Activamos múltiples canales en simultáneo para captar talento."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-12">
         {SOURCING_CHANNELS.map((channel, index) => {
             // Distinct colors for each card to show independence
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
                    p-6 lg:p-8
                    rounded-3xl
                    bg-white border-2 border-slate-100
                    ${colors.hover}
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                    group
                    cursor-default
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                 <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl ${colors.iconBg} ${colors.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                       <channel.icon className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{index + 1}</span>
                 </div>
                 
                 <h3 className="font-brand font-bold text-xl lg:text-2xl text-slate-900 mb-3 leading-tight">
                     {channel.title}
                 </h3>
                 
                 <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                     {channel.description}
                 </p>

                 <div className={`mt-auto py-2 px-3 rounded-lg ${colors.bg} ${colors.iconColor} text-xs font-bold uppercase tracking-wide inline-block self-start`}>
                    {channel.percentage}
                 </div>
              </div>
            );
         })}
      </div>
      
      <div className="mt-10 lg:mt-16 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center animate-enter delay-500">
        <p className="text-slate-600 text-sm lg:text-base font-medium">
           💡 <span className="font-bold">Estrategia 360:</span> No dependemos de una sola fuente. Atacamos el mercado desde todos los ángulos.
        </p>
      </div>
    </section>
  );
};