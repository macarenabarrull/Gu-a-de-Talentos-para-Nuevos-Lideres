import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { Sparkles, HeartHandshake, ShieldCheck, Coffee, Users, Target, UserPlus, MessageCircle } from 'lucide-react';

const ICONS = [
  UserPlus,
  Target,
  Sparkles,
  Users,
  Coffee,
  MessageCircle
];

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end mb-6 shrink-0">
          <div className="lg:w-2/3">
             <SectionHeading 
              title="LA EXPERIENCIA 🎉" 
              subtitle="El proceso no termina con la firma. Tu liderazgo en los primeros 90 días es lo que garantiza la retención."
            />
          </div>
          <div className="lg:w-1/3 pb-2">
             <div className="p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-100 flex gap-3 items-center shadow-sm">
                <div className="bg-purple-100 p-2 rounded-xl">
                    <Sparkles className="w-5 h-5 text-purple-600 shrink-0" />
                </div>
                <p className="text-xs text-slate-600 font-medium leading-snug">
                  El <span className="font-black text-purple-700">70%</span> de la percepción se forma en la primera semana.
                </p>
             </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 min-h-0 flex flex-col gap-6 pb-4">
            
            {/* Tips Grid - Visual Bento Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-y-auto lg:overflow-visible">
            {ONBOARDING_TIPS.map((tip, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                <div key={i} className="group relative p-5 rounded-[1.5rem] bg-white border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                    
                    <div className="absolute top-4 right-4 text-slate-100 group-hover:text-purple-50 transition-colors">
                        <Icon className="w-12 h-12 opacity-20 transform rotate-12" />
                    </div>

                    <div className="flex items-center gap-3 mb-3 relative z-10">
                        <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-slate-50 text-slate-400 font-bold text-xs group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">
                            {i + 1}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                            {tip.title}
                        </h3>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium relative z-10">
                        {tip.description}
                    </p>
                </div>
            )})}
            </div>

            {/* Premium Trial Period Block */}
            <div className="shrink-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden shadow-xl group text-white">
                
                {/* Graphics */}
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-green-400 shrink-0 border border-white/10 shadow-lg">
                        <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg lg:text-xl font-brand font-black text-white uppercase tracking-wide">Período de Prueba</h3>
                            <span className="bg-green-500/20 text-green-300 text-[9px] font-bold px-2 py-0.5 rounded border border-green-500/30">Hito Crítico</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed max-w-lg font-medium">
                            Un mes antes de finalizar, <strong className="text-white">Talento</strong> te contactará. Es el momento de validar el fit cultural y técnico.
                        </p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <button className="bg-white text-slate-900 text-xs font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-400 hover:text-green-950 transition-all shadow-lg hover:shadow-green-500/20 transform hover:scale-105 active:scale-95">
                    <HeartHandshake className="w-4 h-4" />
                    Agendar Feedback
                    </button>
                </div>
            </div>
        </div>
        
    </section>
  );
};