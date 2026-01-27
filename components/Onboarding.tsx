import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { Sparkles } from 'lucide-react';

const TIP_EMOJIS = ["👋", "🗣️", "👯‍♂️", "🍔", "🎒", "🏁"];

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end mb-10">
          <div className="lg:w-2/3">
             <SectionHeading 
              title="El Onboarding 🎉" 
              subtitle="El proceso no termina con la firma. Los primeros 90 días son críticos para la retención."
            />
          </div>
          <div className="lg:w-1/3 pb-6">
             <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 flex gap-4 items-center shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-2.5 rounded-full shadow-sm">
                    <Sparkles className="w-5 h-5 text-purple-600 shrink-0" />
                </div>
                <p className="text-xs text-purple-900 font-medium leading-snug">
                  El <span className="font-black text-lg">70%</span> de la percepción se forma en la primera semana. <span className="text-lg">🤯</span>
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ONBOARDING_TIPS.map((tip, i) => (
            <div key={i} className="group relative p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-900/5 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-6 right-6 text-3xl opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300">
                {TIP_EMOJIS[i]}
              </div>
              
              <div className="mb-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold text-[10px] group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      {i + 1}
                  </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                {tip.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <button className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-200 bg-slate-900 text-sm rounded-full hover:bg-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none ring-offset-2 focus:ring-2">
                <span>Descargar Checklist PDF</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">📥</span>
            </button>
        </div>
    </section>
  );
};