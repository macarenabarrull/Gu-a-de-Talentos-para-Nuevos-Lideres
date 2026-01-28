import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { HeartHandshake, Lightbulb, Trophy, AlertCircle } from 'lucide-react';

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6">
        
        {/* Header Area */}
        <div className="mb-8 shrink-0">
             <SectionHeading 
              title="1er día fyo" 
              subtitle="El proceso no termina con la firma. Los primeros 90 días son el momento de la verdad."
            />
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 min-h-0 flex flex-col gap-6 pb-2">
            
            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1 overflow-y-auto lg:overflow-visible">
            {ONBOARDING_TIPS.map((tip, i) => {
                const colors = [
                    'bg-yellow-50 border-yellow-100 hover:border-yellow-300',
                    'bg-blue-50 border-blue-100 hover:border-blue-300',
                    'bg-green-50 border-green-100 hover:border-green-300',
                    'bg-pink-50 border-pink-100 hover:border-pink-300',
                    'bg-purple-50 border-purple-100 hover:border-purple-300',
                    'bg-orange-50 border-orange-100 hover:border-orange-300'
                ];
                const emojis = ['👀', '🏠', '🌱', '🤝', '🍕', '🎤'];

                return (
                <div key={i} className={`group p-6 rounded-[1.5rem] border ${colors[i]} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-start gap-3 min-h-[160px] relative overflow-hidden`}>
                    
                    <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-sm">
                        {emojis[i]}
                    </div>

                    <div className="flex flex-col gap-2 relative z-10">
                        <h3 className="text-lg font-brand font-bold text-slate-900 leading-tight">
                            {tip.title}
                        </h3>
                        
                        <p className="text-slate-600 text-xs leading-relaxed font-medium pr-6">
                            {tip.description}
                        </p>
                    </div>

                    {/* Leader Tip Box */}
                    {tip.leaderTip && (
                        <div className="mt-auto bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50 flex items-start gap-2 shadow-sm">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                            <p className="text-[10px] text-slate-700 font-medium leading-tight">
                                <span className="font-bold text-slate-900">Tip de Líder:</span> {tip.leaderTip}
                            </p>
                        </div>
                    )}
                </div>
            )})}
            </div>

            {/* Probation Period Card - Cleaner Design */}
            <div className="shrink-0 bg-white rounded-[2rem] p-6 lg:p-8 border border-slate-100 shadow-lg flex flex-col md:flex-row gap-6 items-center justify-between hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-brand font-black text-slate-900 tracking-wide uppercase">Período de Prueba</h3>
                            <div className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold border border-red-100 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                <span>Crítico</span>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Un mes antes de finalizar (día 60), <strong className="text-purple-600">Talento</strong> te contactará para validar la continuidad.
                        </p>
                    </div>
                </div>
                
                <button className="bg-slate-900 text-white text-xs font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-purple-600 transition-all shadow-lg transform hover:scale-105 active:scale-95 group border border-slate-800 shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Agendar Feedback</span>
                </button>
            </div>
        </div>
        
    </section>
  );
};