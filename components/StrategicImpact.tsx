import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PlusCircle, RefreshCcw, AlertOctagon } from 'lucide-react';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
      <div className="shrink-0 mb-6">
        <SectionHeading 
            title="¿Cuándo inicia el proceso?" 
            subtitle="Las búsquedas pueden iniciarse ante tres situaciones principales. Entender el origen define la estrategia."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 max-h-[60vh] min-h-0 items-center">
        
        {/* Card Component */}
        {[
            { 
                icon: PlusCircle, 
                title: 'Nueva Incorporación', 
                desc: 'Vacante presupuestada en el plan anual. Crecimiento planificado.',
                gradient: 'from-emerald-400 to-teal-600',
                shadow: 'shadow-emerald-500/30',
                delay: 'delay-100',
                emoji: '🌱'
            },
            { 
                icon: RefreshCcw, 
                title: 'Reemplazo', 
                desc: 'Ante una renuncia o desvinculación. Prioridad: Agilidad.',
                gradient: 'from-blue-500 to-indigo-600',
                shadow: 'shadow-blue-500/30',
                delay: 'delay-200',
                emoji: '🔄'
            },
            { 
                icon: AlertOctagon, 
                title: 'Fuera de Presupuesto', 
                desc: 'Nueva necesidad no contemplada. Requiere aprobación de Comité.',
                gradient: 'from-orange-400 to-red-500',
                shadow: 'shadow-orange-500/30',
                delay: 'delay-300',
                emoji: '🚨'
            }
        ].map((item, idx) => (
            <div 
                key={idx} 
                className={`animate-enter ${item.delay} relative group h-[320px] rounded-[2rem] p-[1px] bg-gradient-to-br from-white/50 to-white/10 hover:scale-105 transition-transform duration-500`}
            >
                {/* Colored Glow Background */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Main Card Content */}
                <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center text-center overflow-hidden border border-white/60 shadow-xl">
                    
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.gradient}`} />
                    
                    <div className="mt-4 mb-6 relative">
                         <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg ${item.shadow} group-hover:rotate-12 transition-transform duration-500`}>
                             <item.icon className="w-9 h-9" />
                         </div>
                         <div className="absolute -bottom-2 -right-2 text-2xl filter drop-shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
                             {item.emoji}
                         </div>
                    </div>

                    <h3 className="text-2xl font-brand font-black text-slate-900 mb-4 leading-tight">
                        {item.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {item.desc}
                    </p>

                    <div className={`mt-auto w-12 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-50`} />
                </div>
            </div>
        ))}

      </div>
    </section>
  );
};