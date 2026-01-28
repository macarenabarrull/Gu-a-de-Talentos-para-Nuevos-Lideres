import React from 'react';
import { SectionHeading } from './SectionHeading';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
      <div className="shrink-0 mb-8">
        <SectionHeading 
            title="¿Cuándo inicia el proceso?" 
            subtitle="Las búsquedas pueden iniciarse ante tres situaciones principales. Entender el origen define la estrategia."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 max-h-[60vh] min-h-0 items-center">
        
        {/* Card Component */}
        {[
            { 
                title: 'Nueva Incorporación', 
                desc: 'Vacante presupuestada en el plan anual. Crecimiento planificado.',
                emoji: '🌱',
                delay: 'delay-100'
            },
            { 
                title: 'Reemplazo', 
                desc: 'Ante una renuncia o desvinculación. Prioridad: Agilidad.',
                emoji: '🔄',
                delay: 'delay-200'
            },
            { 
                title: 'Fuera de Presupuesto', 
                desc: 'Nueva necesidad no contemplada. Requiere aprobación de Comité.',
                emoji: '🚨',
                delay: 'delay-300'
            }
        ].map((item, idx) => (
            <div 
                key={idx} 
                className={`animate-enter ${item.delay} relative group h-[320px] rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center text-center`}
            >
                 {/* Top Decorative Line */}
                 <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-100 rounded-full group-hover:bg-purple-200 transition-colors"></div>

                 <div className="mt-8 mb-8">
                     {/* Soft Icon Container */}
                     <div className="icon-box-soft w-24 h-24 rounded-[2rem] group-hover:scale-110 transition-transform duration-500 rotate-0 group-hover:rotate-3">
                         <span className="text-5xl emoji-3d">{item.emoji}</span>
                     </div>
                 </div>

                 <h3 className="text-2xl font-brand font-black text-slate-900 mb-4 leading-tight">
                    {item.title}
                 </h3>
                
                 <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.desc}
                 </p>
            </div>
        ))}

      </div>
    </section>
  );
};