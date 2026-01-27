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
          title="Tiempos Estimados ⏱️" 
          subtitle="La agilidad en las entrevistas es clave. Si tardamos mucho, los mejores candidatos se van a otro lado."
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
          {TIMING_STATS.map((stat, i) => (
            <div key={i} className={`relative flex flex-col p-4 lg:p-5 rounded-2xl border ${stat.color} hover:shadow-lg transition-all duration-300 cursor-default group bg-opacity-40 hover:bg-opacity-100 hover:-translate-y-1`}>
              
              <div className="absolute top-3 right-3 text-lg opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {ROLE_EMOJIS[stat.role as keyof typeof ROLE_EMOJIS]}
              </div>

              <p className="text-[9px] font-bold uppercase tracking-wider opacity-70 mb-6 text-inherit">
                {stat.role}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-black tracking-tighter text-slate-900">
                    {stat.range.split(' ')[0]}
                    </span>
                    <span className="text-xs font-bold text-slate-400">días</span>
                </div>
                <span className="block text-[9px] font-bold opacity-60 text-slate-500 mt-1 uppercase tracking-wide">Promedio Mercado</span>
              </div>
              
              {/* Visual progress bar */}
              <div className="w-full h-1 bg-white rounded-full mt-4 overflow-hidden shadow-inner">
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