import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';
import { Clock, AlertCircle, RefreshCw } from 'lucide-react';

export const TimingSection: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full px-4">
        
        <div className="mb-8 lg:mb-12">
            <SectionHeading 
                title="TIEMPOS ESTIMADOS ⏱️" 
                subtitle="Más que una estadística, es un compromiso mutuo. La velocidad depende de nuestra sincronización."
            />
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 overflow-hidden relative">
            
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none">
                <Clock className="w-32 h-32 text-slate-900" />
            </div>

            <div className="grid grid-cols-1 divide-y divide-slate-100/50 relative z-10">
                {TIMING_STATS.map((stat, i) => (
                    <div key={i} className="p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/40 transition-colors group">
                        
                        <div className="flex items-center gap-6">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${stat.color.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20 shadow-sm`}>
                                <span className="text-3xl">{['🌱', '⚡', '🧠', '👑'][i]}</span>
                            </div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-brand font-bold text-slate-900">
                                    {stat.role}
                                </h3>
                                <div className="h-2 w-32 bg-slate-100 rounded-full mt-3 overflow-hidden">
                                    <div className={`h-full ${stat.color.replace('text-', 'bg-').split(' ')[0]} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pl-16 md:pl-0">
                            <div className="text-right">
                                <span className={`block text-4xl lg:text-5xl font-black ${stat.color.split(' ')[2]}`}>
                                    {stat.range.split(' ')[0]}
                                </span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 block">Días Hábiles</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            
            <div className="bg-slate-900 p-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                    <RefreshCw className="w-5 h-5 text-green-400 animate-spin-slow" />
                    <p className="text-sm font-medium text-slate-200">
                        Cálculo asumiendo <strong className="text-white">feedback continuo</strong> (24/48hs).
                    </p>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <AlertCircle className="w-5 h-5" />
                    <span>Tu feedback rápido es el acelerador del proceso.</span>
                </div>
            </div>
        </div>
    </section>
  );
};