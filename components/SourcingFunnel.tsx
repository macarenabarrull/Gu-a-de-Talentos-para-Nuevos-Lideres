import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS } from '../constants';

export const SourcingFunnel: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <SectionHeading 
          title="Embudo de Atracción 🌪️" 
          subtitle="No dependemos de una sola fuente. Activamos varios canales para encontrar a los mejores."
          center
      />

      <div className="flex flex-col items-center mt-4 w-full max-w-3xl mx-auto space-y-1">
         {SOURCING_CHANNELS.map((channel, index) => {
            // Widths to create funnel shape container
            const widthClass = ['w-full', 'w-[90%]', 'w-[80%]', 'w-[70%]'][index];
            
            // Gradients for delight
            const gradientClass = [
                'bg-gradient-to-r from-purple-600 to-indigo-600', 
                'bg-gradient-to-r from-purple-500 to-indigo-500', 
                'bg-gradient-to-r from-purple-400 to-indigo-400', 
                'bg-gradient-to-r from-purple-300 to-indigo-300'
            ][index];

            return (
              <div 
                key={index}
                className={`
                    animate-enter 
                    ${widthClass} 
                    ${gradientClass} 
                    clip-trapezoid 
                    text-white p-3 lg:p-4 shadow-lg flex items-center justify-between transform transition-transform hover:scale-[1.02] cursor-default relative overflow-hidden group
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                 <div className="flex items-center gap-3 relative z-10 pl-4">
                    <div className="p-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                       <channel.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-base">{channel.title}</h3>
                      <p className="text-white/80 text-[10px] lg:text-xs">{channel.description}</p>
                    </div>
                 </div>
                 
                 <div className="text-xl font-black opacity-30 group-hover:opacity-100 transition-opacity pr-6">
                    {channel.percentage}
                 </div>
              </div>
            );
         })}
      </div>
      
      <div className="mt-8 text-center animate-enter delay-500">
        <p className="text-slate-400 text-xs">
           Cuanta más calidad tengamos arriba en el embudo, más fácil será elegir al final.
        </p>
      </div>
    </section>
  );
};