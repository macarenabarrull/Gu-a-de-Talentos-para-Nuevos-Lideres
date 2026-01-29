import React from 'react';
import { SectionHeading } from './SectionHeading';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 py-4">
      <SectionHeading 
          title="¿CUÁNDO INICIA EL PROCESO?" 
          subtitle="Las búsquedas pueden iniciarse ante tres situaciones principales. Entender el origen define la estrategia."
      />

      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pb-2">
        
        {/* Card Component */}
        {[
            { 
                title: 'NUEVA INCORPORACIÓN', 
                desc: 'Vacante presupuestada en el plan anual del ejercicio en vigencia. Crecimiento planificado.',
                emoji: '🌱',
                delay: 'delay-100'
            },
            { 
                title: 'REEMPLAZO', 
                desc: 'Este caso se da ante la salida de un colaborador del equipo. Repensar el equipo y necesidades.',
                emoji: '🔄',
                delay: 'delay-200'
            },
            { 
                title: 'FUERA DE PRESUPUESTO', 
                desc: 'Es nueva necesidad no contemplada. Requiere aprobación de Directores y Gerentes.',
                emoji: '🚨',
                delay: 'delay-300'
            }
        ].map((item, idx) => (
            <div 
                key={idx} 
                className={`animate-enter ${item.delay} relative group h-full rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col items-center text-center justify-center overflow-hidden`}
            >
                 {/* Top Decorative Line */}
                 <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-100 rounded-full group-hover:bg-purple-200 transition-colors"></div>

                 <div className="mb-4 mt-2 flex-shrink-0">
                     {/* Soft Icon Container */}
                     <div className="icon-box-soft w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-[2rem] group-hover:scale-110 transition-transform duration-500 rotate-0 group-hover:rotate-3">
                         <span className="text-3xl md:text-4xl lg:text-5xl emoji-3d">{item.emoji}</span>
                     </div>
                 </div>

                 <h3 className="text-lg md:text-xl lg:text-2xl font-brand font-black text-slate-900 mb-2 leading-tight tracking-tight">
                    {item.title}
                 </h3>
                
                 <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    {item.desc}
                 </p>
            </div>
        ))}
      </div>

      {/* New Bubble Section */}
      <div className="animate-enter delay-500 w-full mt-4 shrink-0">
          <div className="max-w-3xl mx-auto relative">
               <div className="bg-gradient-to-r from-violet-700 to-indigo-800 text-white rounded-2xl p-4 text-center shadow-xl shadow-indigo-500/20 border border-violet-500/50 relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                   
                   <p className="text-xs md:text-sm font-medium flex flex-row items-center justify-center gap-3 relative z-10">
                       <span className="text-xl animate-bounce filter drop-shadow-md">☝️</span>
                       <span className="drop-shadow-sm">En todos estos casos el proceso se inicia luego de la <strong className="text-yellow-300 font-bold tracking-wide">validación interna</strong>.</span>
                   </p>
               </div>
          </div>
      </div>

    </section>
  );
};