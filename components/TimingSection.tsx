import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';
import { Clock } from 'lucide-react';

const ROLE_EMOJIS = {
  "Referidos / Junior": "🌱",
  "Semi Senior": "⚡",
  "Senior": "🧠",
  "Liderazgo": "👑"
};

export const TimingSection: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-end mb-12">
            <div className="flex-1">
                <SectionHeading 
                    title="Tiempos Estimados ⏱️" 
                    subtitle="El tiempo es el enemigo. La agilidad en tu feedback define si contratamos al mejor o lo perdemos."
                />
            </div>
            <div className="hidden lg:flex bg-orange-50 border border-orange-100 p-4 rounded-2xl items-center gap-4 max-w-md">
                <Clock className="w-8 h-8 text-orange-600" />
                <p className="text-xs text-orange-800 font-medium">
                    <span className="font-bold">Dato:</span> Los mejores candidatos están en el mercado menos de 10 días. La velocidad es nuestra ventaja competitiva.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {TIMING_STATS.map((stat, i) => (
            <div key={i} className={`relative flex flex-col p-6 lg:p-10 rounded-[2rem] border-2 bg-white hover:border-transparent ${stat.color.replace('text-', 'border-').replace('bg-', 'hover:shadow-xl hover:bg-')} transition-all duration-300 cursor-default group hover:-translate-y-2 h-full justify-between`}>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                    <span className="text-3xl lg:text-5xl group-hover:scale-125 transition-transform duration-300">
                        {ROLE_EMOJIS[stat.role as keyof typeof ROLE_EMOJIS]}
                    </span>
                </div>

                <p className="text-xs lg:text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 group-hover:text-slate-600">
                    Posición
                </p>
                <h3 className="text-lg lg:text-2xl font-black text-slate-900 leading-tight mb-8">
                    {stat.role}
                </h3>
              </div>
              
              <div>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 group-hover:text-inherit transition-colors">
                    {stat.range.split(' ')[0]}
                    </span>
                </div>
                <span className="block text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-wide group-hover:text-slate-600">Días Promedio</span>
                
                {/* Visual Deadline Bar */}
                <div className="w-full h-2 bg-slate-100 rounded-full mt-6 overflow-hidden">
                    <div className="h-full bg-slate-300 group-hover:bg-current transition-all duration-500 w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};