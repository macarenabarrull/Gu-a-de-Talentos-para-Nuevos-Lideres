import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';
import { Clock, AlertCircle, RefreshCw } from 'lucide-react';

export const TimingSection: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto w-full px-4">
        
        <div className="mb-8">
            <SectionHeading 
                title="TIEMPOS ESTIMADOS ⏱️" 
                subtitle="Más que una estadística, es un compromiso mutuo. La velocidad depende de nuestra sincronización."
            />
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-[1.5rem] shadow-xl border border-white/50 overflow-hidden relative">
            
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none">
                <Clock className="w-24 h-24 text-slate-900" />
            </div>

            <div className="grid grid-cols-1 divide-y divide-slate-100/50 relative z-10">
                {TIMING_STATS.map((stat, i) => (
                    <div key={i} className="p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-white/40 transition-colors group">
                        
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.color.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20 shadow-sm`}>
                                <span className="text-2xl">{['🌱', '⚡', '🧠', '👑'][i]}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-brand font-bold text-slate-900">
                                    {stat.role}
                                </h3>
                                <div className="h-1.5 w-24 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                    <div className={`h-full ${stat.color.replace('text-', 'bg-').split(' ')[0]} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pl-16 md:pl-0">
                            <div className="text-right">
                                <span className={`block text-3xl font-black ${stat.color.split(' ')[2]}`}>
                                    {stat.range.split(' ')[0]}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">Días Hábiles</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            
            <div className="bg-slate-900 p-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                    <RefreshCw className="w-4 h-4 text-green-400 animate-spin-slow" />
                    <p className="text-xs font-medium text-slate-200">
                        Cálculo asumiendo <strong className="text-white">feedback continuo</strong> (24/48hs).
                    </p>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <AlertCircle className="w-4 h-4" />
                    <span>Tu feedback rápido es el acelerador del proceso.</span>
                </div>
            </div>
        </div>
    </section>
  );
};