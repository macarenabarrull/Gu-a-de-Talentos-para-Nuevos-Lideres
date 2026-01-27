import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';

const ROLE_EMOJIS = {
  "Referidos": "🌟",
  "Junior": "🌱",
  "Semi Senior": "⚡",
  "Senior": "🧠",
  "Liderazgo": "👑"
};

export const TimingSection: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
        <SectionHeading 
          title="Tiempos del Proceso ⏱️" 
          subtitle="Estimaciones basadas en datos históricos. La agilidad en las entrevistas es la clave para ganarle al mercado."
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {TIMING_STATS.map((stat, i) => (
            <div key={i} className={`relative flex flex-col p-8 rounded-[2.5rem] border ${stat.color} hover:shadow-xl transition-all duration-300 cursor-default group bg-opacity-40 hover:bg-opacity-100 hover:-translate-y-2`}>
              
              <div className="absolute top-6 right-6 text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all">
                {ROLE_EMOJIS[stat.role as keyof typeof ROLE_EMOJIS]}
              </div>

              <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-10 text-inherit">
                {stat.role}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900">
                    {stat.range.split(' ')[0]}
                    </span>
                    <span className="text-xl font-bold text-slate-400">días</span>
                </div>
                <span className="block text-xs font-bold opacity-60 text-slate-500 mt-2 uppercase tracking-wide">Promedio Mercado</span>
              </div>
              
              {/* Visual progress bar */}
              <div className="w-full h-2 bg-white rounded-full mt-8 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-slate-900 opacity-20 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-700"
                  style={{ width: `${(parseInt(stat.range) / 90) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};