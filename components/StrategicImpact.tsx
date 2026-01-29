import React from 'react';
import { SectionHeading } from './SectionHeading';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
      <div className="shrink-0 mb-8">
        <SectionHeading 
            title="¿CUÁNDO INICIA EL PROCESO?" 
            subtitle="Las búsquedas pueden iniciarse ante tres situaciones principales. Entender el origen define la estrategia."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-center">
        
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
                desc: 'Este caso se da ante la salida de un colaborador del equipo. Es el momento de repensar el equipo y necesidades internas.',
                emoji: '🔄',
                delay: 'delay-200'
            },
            { 
                title: 'FUERA DE PRESUPUESTO', 
                desc: 'Es nueva necesidad no contemplada. Requiere aprobación de los Directores y Gerentes del área.',
                emoji: '🚨',
                delay: 'delay-300'
            }
        ].map((item, idx) => (
            <div 
                key={idx} 
                className={`animate-enter ${item.delay} relative group h-auto md:h-[320px] rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center text-center justify-center`}
            >
                 {/* Top Decorative Line */}
                 <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-100 rounded-full group-hover:bg-purple-200 transition-colors"></div>

                 <div className="mb-6 mt-4">
                     {/* Soft Icon Container */}
                     <div className="icon-box-soft w-20 h-20 md:w-24 md:h-24 rounded-[2rem] group-hover:scale-110 transition-transform duration-500 rotate-0 group-hover:rotate-3">
                         <span className="text-4xl md:text-5xl emoji-3d">{item.emoji}</span>
                     </div>
                 </div>

                 <h3 className="text-xl md:text-2xl font-brand font-black text-slate-900 mb-4 leading-tight tracking-tight">
                    {item.title}
                 </h3>
                
                 <p className="text-slate-600 text-sm leading-relaxed font-medium pb-4">
                    {item.desc}
                 </p>
            </div>
        ))}
      </div>

      {/* New Bubble Section - Updated Colors for High Contrast */}
      <div className="animate-enter delay-500 w-full">
          <div className="max-w-3xl mx-auto relative">
               {/* Visual Connectors */}
               <div className="absolute -top-6 left-1/6 lg:left-[16%] -translate-x-1/2 w-px h-6 bg-gradient-to-b from-slate-200 to-indigo-500 hidden md:block"></div>
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-slate-200 to-purple-500 hidden md:block"></div>
               <div className="absolute -top-6 right-1/6 lg:right-[16%] translate-x-1/2 w-px h-6 bg-gradient-to-b from-slate-200 to-indigo-500 hidden md:block"></div>

               <div className="bg-gradient-to-r from-violet-700 to-indigo-800 text-white rounded-2xl p-5 md:p-6 text-center shadow-xl shadow-indigo-500/20 border border-violet-500/50 relative overflow-hidden group">
                   {/* Shine effect */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                   
                   <p className="text-sm md:text-base font-medium flex flex-col md:flex-row items-center justify-center gap-3 relative z-10">
                       <span className="text-2xl animate-bounce filter drop-shadow-md">☝️</span>
                       <span className="drop-shadow-sm">En todos estos casos el proceso de selección se inicia luego de que esté la <strong className="text-yellow-300 font-bold tracking-wide">validación interna</strong>.</span>
                   </p>
                   
                   {/* Background Decor */}
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
               </div>
          </div>
      </div>

    </section>
  );
};