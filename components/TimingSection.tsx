import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';
import { Clock, TrendingUp } from 'lucide-react';

const ROLE_EMOJIS = {
  "Referidos / Junior": "🌱",
  "Semi Senior": "⚡",
  "Senior": "🧠",
  "Liderazgo": "👑"
};

export const TimingSection: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-6 md:pt-0">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row gap-6 items-end mb-8 lg:mb-12 shrink-0">
            <div className="flex-1">
                <SectionHeading 
                    title="TIEMPOS ESTIMADOS ⏱️" 
                    subtitle="El tiempo es el enemigo. La agilidad en tu feedback define si contratamos al mejor o lo perdemos."
                />
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-white p-4 rounded-2xl flex items-center gap-4 max-w-md shadow-sm">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-600 font-medium leading-tight">
                    <span className="font-bold text-orange-600">Insight:</span> Los mejores candidatos están disponibles menos de 10 días.
                </p>
            </div>
        </div>

        {/* Cards Grid - Fit to Screen */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1 min-h-0 pb-4">
          {TIMING_STATS.map((stat, i) => (
            <div key={i} className={`
                relative flex flex-col justify-between
                p-6 lg:p-8 
                rounded-[2rem] 
                bg-gradient-to-b from-white to-white/50 backdrop-blur-xl border border-white
                shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl hover:scale-[1.02]
                transition-all duration-300 group
                h-full
            `}>
              
              {/* Top: Icon & Role */}
              <div>
                <div className="mb-6 flex justify-between items-start">
                     <span className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
                        {ROLE_EMOJIS[stat.role as keyof typeof ROLE_EMOJIS]}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-').split(' ')[0]}`}></div>
                </div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Posición
                </p>
                <h3 className="text-lg lg:text-xl font-black text-slate-900 leading-tight">
                    {stat.role}
                </h3>
              </div>
              
              {/* Bottom: Stats & Bar */}
              <div>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl lg:text-5xl font-black tracking-tighter ${stat.color.split(' ')[2]}`}>
                    {stat.range.split(' ')[0]}
                    </span>
                    <span className="text-xs font-bold text-slate-400">días</span>
                </div>
                
                {/* Visual Deadline Bar */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${stat.color.replace('text-', 'bg-').split(' ')[0]} w-3/4 opacity-80 group-hover:w-full transition-all duration-700 ease-out`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};