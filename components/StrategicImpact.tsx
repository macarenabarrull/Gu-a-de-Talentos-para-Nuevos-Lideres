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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 max-h-[60vh] min-h-0">
        
        {/* Card Component */}
        {[
            { 
                icon: PlusCircle, 
                color: 'text-emerald-600 bg-emerald-50', 
                title: 'Nueva incorporación', 
                desc: 'Cuando la vacante está presupuestada en el plan anual. Es el escenario ideal.',
                delay: 'delay-100'
            },
            { 
                icon: RefreshCcw, 
                color: 'text-blue-600 bg-blue-50', 
                title: 'Reemplazo', 
                desc: 'Ante una renuncia o desvinculación. Requiere agilidad para minimizar el impacto.',
                delay: 'delay-200'
            },
            { 
                icon: AlertOctagon, 
                color: 'text-amber-600 bg-amber-50', 
                title: 'Fuera de presupuesto', 
                desc: 'Una nueva necesidad no contemplada. Requiere aprobación previa del comité.',
                delay: 'delay-300'
            }
        ].map((item, idx) => (
            <div key={idx} className={`animate-enter ${item.delay} bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col`}>
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-brand font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-auto font-medium">
                    {item.desc}
                </p>
            </div>
        ))}

      </div>
    </section>
  );
};