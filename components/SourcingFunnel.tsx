import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS } from '../constants';

export const SourcingFunnel: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full">
      <SectionHeading 
          title="Embudo de Atracción 🌪️" 
          subtitle="No dependemos de una sola fuente. Activamos varios canales para encontrar a los mejores."
          center
      />

      <div className="flex flex-col items-center mt-6 lg:mt-10 w-full max-w-4xl lg:max-w-5xl mx-auto">
         {SOURCING_CHANNELS.map((channel, index) => {
            // Widths to create funnel shape container
            const widthClass = ['w-full', 'w-[85%]', 'w-[70%]', 'w-[55%]'][index];
            
            // Gradients
            const gradientClass = [
                'bg-gradient-to-r from-purple-700 to-indigo-700', 
                'bg-gradient-to-r from-purple-600 to-indigo-600', 
                'bg-gradient-to-r from-purple-500 to-indigo-500', 
                'bg-gradient-to-r from-purple-400 to-indigo-400'
            ][index];

            // Stack index to ensure top is 'behind' visually or 'front' depending on desired effect.
            // For a funnel, typically the wider top part sits "behind" the lower part if we want depth,
            // OR sits "above" to cast shadow down. Let's try sitting above.
            const zIndex = `z-[${40 - index * 10}]`;

            return (
              <div 
                key={index}
                className={`
                    animate-enter 
                    ${widthClass} 
                    ${gradientClass} 
                    ${zIndex}
                    text-white p-4 lg:p-6 shadow-xl flex items-center justify-between 
                    transform transition-transform hover:scale-[1.02] cursor-default relative overflow-hidden group
                    rounded-2xl lg:rounded-3xl
                    -mt-4 first:mt-0
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                 <div className="flex items-center gap-3 lg:gap-6 relative z-10 pl-4 lg:pl-8">
                    <div className="p-2 lg:p-3 bg-white/20 rounded-full backdrop-blur-md shadow-inner">
                       <channel.icon className="w-5 h-5 lg:w-7 lg:h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-2xl tracking-tight">{channel.title}</h3>
                      <p className="text-white/80 text-[10px] lg:text-sm font-medium">{channel.description}</p>
                    </div>
                 </div>
                 
                 <div className="text-2xl lg:text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity pr-6 lg:pr-10 italic">
                    {channel.percentage}
                 </div>
              </div>
            );
         })}
      </div>
      
      <div className="mt-12 lg:mt-16 text-center animate-enter delay-500">
        <p className="text-slate-400 text-xs lg:text-base font-medium">
           Cuanta más calidad tengamos arriba en el embudo, más fácil será elegir al final.
        </p>
      </div>
    </section>
  );
};