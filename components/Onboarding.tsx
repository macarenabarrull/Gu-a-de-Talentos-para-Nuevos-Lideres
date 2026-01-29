import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_TIPS } from '../constants';
import { HeartHandshake, Lightbulb, Trophy } from 'lucide-react';

export const Onboarding: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 overflow-hidden">
        
        {/* Header Area */}
        <div className="mb-4 shrink-0 pt-2">
             <SectionHeading 
              title="1ER DÍA FYO" 
              subtitle="El proceso no termina con su confirmación a la propuesta. Los primeros 90 días son el momento de la verdad."
            />
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 min-h-0 flex flex-col gap-4 pb-2">
            
            {/* Tips Grid - Scrollable if needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 flex-1 overflow-y-auto lg:overflow-visible pr-1">
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
                <div key={i} className={`group p-4 lg:p-5 rounded-[1.5rem] border ${colors[i]} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-start gap-2 min-h-[140px] relative overflow-hidden`}>
                    
                    <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-sm">
                        {emojis[i]}
                    </div>

                    <div className="flex flex-col gap-1 relative z-10">
                        <h3 className="text-base lg:text-lg font-brand font-bold text-slate-900 leading-tight">
                            {tip.title}
                        </h3>
                        
                        <p className="text-slate-600 text-xs leading-relaxed font-medium pr-6">
                            {tip.description}
                        </p>
                    </div>

                    {/* Leader Tip Box */}
                    {tip.leaderTip && (
                        <div className="mt-auto bg-white/60 backdrop-blur-sm p-2 rounded-xl border border-white/50 flex items-start gap-2 shadow-sm">
                            <Lightbulb className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                            <p className="text-[10px] text-slate-700 font-medium leading-tight">
                                <span className="font-bold text-slate-900">Tip:</span> {tip.leaderTip}
                            </p>
                        </div>
                    )}
                </div>
            )})}
            </div>

            {/* Probation Period Card - Compact & Pinned */}
            <div className="shrink-0 bg-white rounded-[1.5rem] p-4 lg:p-5 border border-slate-100 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between hover:shadow-xl transition-all duration-300 mt-auto">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <h3 className="text-lg font-brand font-black text-slate-900 tracking-wide uppercase">Período de Prueba</h3>
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed font-medium">
                            Un mes antes de finalizar, <strong className="text-purple-600">Talento</strong> te contactará para validar la continuidad.
                        </p>
                    </div>
                </div>
                
                <button className="bg-purple-600 text-white text-[10px] font-bold px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 transform hover:scale-105 active:scale-95 group border border-purple-500 shrink-0 uppercase tracking-wide">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Agendar Feedback</span>
                </button>
            </div>
        </div>
        
    </section>
  );
};