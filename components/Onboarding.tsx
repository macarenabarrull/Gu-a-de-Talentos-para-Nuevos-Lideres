import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { Sparkles, HeartHandshake, ShieldCheck, Lightbulb } from 'lucide-react';

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end mb-8 shrink-0">
          <div className="lg:w-2/3">
             <SectionHeading 
              title="La experiencia" 
              subtitle="El proceso no termina con la firma. Los primeros 90 días son el momento de la verdad para la retención."
            />
          </div>
          <div className="lg:w-1/3 pb-2">
             <div className="p-4 bg-white rounded-2xl border border-purple-100 flex gap-4 items-center shadow-sm">
                <div className="bg-purple-50 p-2 rounded-xl">
                    <Sparkles className="w-5 h-5 text-purple-600 shrink-0" />
                </div>
                <p className="text-sm text-slate-700 font-medium leading-snug">
                  El <span className="font-black text-purple-700">70%</span> de la percepción se forma en la primera semana.
                </p>
             </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 min-h-0 flex flex-col gap-6 pb-2">
            
            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-y-auto lg:overflow-visible">
            {ONBOARDING_TIPS.map((tip, i) => {
                return (
                <div key={i} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start gap-3 min-h-[140px]">
                    
                    <div className="flex flex-col gap-2 relative z-10">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 text-slate-400 font-bold text-xs group-hover:bg-purple-600 group-hover:text-white transition-all">
                                {i + 1}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 leading-tight">
                                {tip.title}
                            </h3>
                        </div>
                        
                        <p className="text-slate-600 text-xs leading-relaxed font-medium pl-11">
                            {tip.description}
                        </p>
                    </div>

                    {/* Leader Tip Box */}
                    {tip.leaderTip && (
                        <div className="mt-auto bg-purple-50 p-3 rounded-xl border border-purple-100 flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                            <p className="text-[10px] text-purple-900 font-medium leading-tight">
                                <span className="font-bold">Tip de Líder:</span> {tip.leaderTip}
                            </p>
                        </div>
                    )}
                </div>
            )})}
            </div>

            {/* Premium Trial Period Block */}
            <div className="shrink-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-xl shadow-slate-900/10 text-white">
                
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0 border border-white/10">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-brand font-bold text-white tracking-wide">Período de prueba</h3>
                            <span className="bg-yellow-400/20 text-yellow-300 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-400/20">Hito Crítico</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed max-w-lg font-medium">
                            Un mes antes de finalizar, <strong className="text-white">Talento</strong> te contactará. Es el momento de validar el fit.
                        </p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <button className="bg-white text-slate-900 text-xs font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-yellow-300 transition-all shadow-lg transform hover:scale-105 active:scale-95">
                    <HeartHandshake className="w-4 h-4" />
                    Agendar feedback
                    </button>
                </div>
            </div>
        </div>
        
    </section>
  );
};