import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { Sparkles, CalendarCheck, HeartHandshake } from 'lucide-react';

const TIP_EMOJIS = ["👋", "🗣️", "🌱", "🤝", "🍔", "💬"];

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4 py-8 overflow-y-auto">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end mb-10">
          <div className="lg:w-2/3">
             <SectionHeading 
              title="LA EXPERIENCIA 🎉" 
              subtitle="El proceso no termina con la firma. Tu liderazgo en los primeros 90 días es lo que garantiza la retención."
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

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {ONBOARDING_TIPS.map((tip, i) => (
            <div key={i} className="group relative p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-900/5 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-6 right-6 text-2xl opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300">
                {TIP_EMOJIS[i]}
              </div>
              
              <div className="mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 font-bold text-xs group-hover:bg-pink-600 group-hover:text-white transition-colors">
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

        {/* Trial Period Block (Moved from Closing) */}
        <div className="animate-enter w-full bg-slate-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px] -mr-20 -mt-20 opacity-20"></div>
            
            <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <CalendarCheck className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-2xl font-brand font-black text-white mb-1 uppercase">Período de Prueba</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                        Un mes antes de finalizar, <strong>Talento</strong> te contactará para confirmar la incorporación definitiva.
                    </p>
                </div>
            </div>
            
            <div className="relative z-10">
                <div className="bg-purple-600 text-white text-sm font-bold px-6 py-3 rounded-xl inline-flex items-center gap-3 hover:bg-purple-500 transition-colors cursor-default shadow-lg shadow-purple-900/50">
                   <HeartHandshake className="w-5 h-5" />
                   Reunión de Feedback
                </div>
            </div>
        </div>
        
    </section>
  );
};