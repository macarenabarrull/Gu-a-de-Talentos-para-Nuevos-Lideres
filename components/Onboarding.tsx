import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { Sparkles, CalendarCheck, HeartHandshake, ShieldCheck } from 'lucide-react';

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-6 md:pt-0">
        
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
        <div className="flex-1 min-h-0 flex flex-col gap-6 pb-6">
            
            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-y-auto lg:overflow-visible">
            {ONBOARDING_TIPS.map((tip, i) => (
                <div key={i} className="group relative p-5 rounded-[1.5rem] bg-white border border-slate-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400 font-bold text-[10px] group-hover:bg-pink-500 group-hover:text-white transition-colors">
                            {i + 1}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                            {tip.title}
                        </h3>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                        {tip.description}
                    </p>
                </div>
            ))}
            </div>

            {/* Premium Trial Period Block (Refined: No longer black) */}
            <div className="shrink-0 bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden shadow-xl border-2 border-slate-100 group">
                
                {/* Subtle Gradient Accent */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-pink-500"></div>

                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0 border border-slate-100 shadow-inner group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl lg:text-2xl font-brand font-black text-slate-900 uppercase tracking-wide">Período de Prueba</h3>
                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-200">Hito Crítico</span>
                        </div>
                        <p className="text-slate-500 text-xs lg:text-sm leading-relaxed max-w-lg font-medium">
                            Un mes antes de finalizar, <strong className="text-purple-600">Talento</strong> te contactará. Es el momento de validar el fit cultural y técnico.
                        </p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <button className="bg-slate-900 text-white text-xs lg:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-200 transform hover:scale-105 active:scale-95">
                    <HeartHandshake className="w-4 h-4" />
                    Agendar Feedback
                    </button>
                </div>
            </div>
        </div>
        
    </section>
  );
};