import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { Sparkles, HeartHandshake, ShieldCheck, Lightbulb } from 'lucide-react';

const EMOJIS = ['🧠', '🤝', '🌱', '🛡️', '🍔', '🏁'];

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end mb-8 shrink-0">
          <div className="lg:w-2/3">
             <SectionHeading 
              title="LA EXPERIENCIA 🎉" 
              subtitle="El proceso no termina con la firma. Los primeros 90 días son el momento de la verdad para la retención."
            />
          </div>
          <div className="lg:w-1/3 pb-3">
             <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-100 flex gap-4 items-center shadow-sm">
                <div className="bg-purple-100 p-2.5 rounded-xl">
                    <Sparkles className="w-6 h-6 text-purple-600 shrink-0" />
                </div>
                <p className="text-sm text-slate-600 font-medium leading-snug">
                  El <span className="font-black text-purple-700">70%</span> de la percepción se forma en la primera semana.
                </p>
             </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 min-h-0 flex flex-col gap-8 pb-4">
            
            {/* Tips Grid - Visual Bento Style with Emojis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-y-auto lg:overflow-visible">
            {ONBOARDING_TIPS.map((tip, i) => {
                const emoji = EMOJIS[i % EMOJIS.length];
                return (
                <div key={i} className="group relative p-6 rounded-[1.5rem] bg-white border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start gap-4 overflow-hidden min-h-[180px]">
                    
                    <div className="absolute top-4 right-4 text-[2.5rem] opacity-20 transform rotate-12 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 pointer-events-none">
                        {emoji}
                    </div>

                    <div className="flex flex-col gap-3 relative z-10">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-400 font-bold text-sm group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">
                                {i + 1}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                                {tip.title}
                            </h3>
                        </div>
                        
                        <p className="text-slate-600 text-sm leading-relaxed font-medium pl-14">
                            {tip.description}
                        </p>
                    </div>

                    {/* Leader Tip Box - Pushed to bottom automatically if present */}
                    {tip.leaderTip && (
                        <div className="relative z-10 mt-auto bg-purple-50 p-3 rounded-xl border border-purple-100 flex items-start gap-2.5">
                            <Lightbulb className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                            <p className="text-xs text-purple-800 font-medium leading-tight">
                                <span className="font-bold">Tip de Líder:</span> {tip.leaderTip}
                            </p>
                        </div>
                    )}
                </div>
            )})}
            </div>

            {/* Premium Trial Period Block */}
            <div className="shrink-0 bg-gradient-to-r from-purple-700 to-pink-600 rounded-[2rem] p-8 lg:p-10 flex flex-col md:flex-row gap-10 items-center justify-between relative overflow-hidden shadow-xl group text-white">
                
                {/* Graphics */}
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute left-0 top-0 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-[40px] pointer-events-none"></div>

                <div className="flex items-center gap-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shrink-0 border border-white/20 shadow-lg">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl lg:text-2xl font-brand font-black text-white uppercase tracking-wide">Período de Prueba</h3>
                            <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded border border-white/20">Hito Crítico</span>
                        </div>
                        <p className="text-purple-100 text-sm leading-relaxed max-w-lg font-medium">
                            Un mes antes de finalizar, <strong className="text-white">Talento</strong> te contactará. Es el momento de validar el fit cultural y técnico.
                        </p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <button className="bg-white text-purple-700 text-sm font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-yellow-300 hover:text-purple-900 transition-all shadow-lg hover:shadow-yellow-400/30 transform hover:scale-105 active:scale-95">
                    <HeartHandshake className="w-5 h-5" />
                    Agendar Feedback
                    </button>
                </div>
            </div>
        </div>
        
    </section>
  );
};