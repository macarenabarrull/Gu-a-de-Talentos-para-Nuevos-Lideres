import React, { useEffect, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';
import { Clock, AlertCircle, RefreshCw, Zap } from 'lucide-react';

export const TimingSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto w-full px-6">
        
        <div className="mb-10">
            <SectionHeading 
                title="Tiempos estimados" 
                subtitle="Más que una estadística, es un compromiso mutuo. La velocidad depende de nuestra sincronización."
            />
        </div>

        <div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white/50 overflow-hidden relative">
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-50 opacity-50 pointer-events-none"></div>
            
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                <Clock className="w-40 h-40 text-slate-900" />
            </div>

            <div className="grid grid-cols-1 divide-y divide-slate-100/50 relative z-10">
                {TIMING_STATS.map((stat, i) => (
                    <div key={i} className="p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/60 transition-colors duration-300 group">
                        
                        <div className="flex items-center gap-6">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.color.replace('text-', 'bg-').split(' ')[0]} bg-opacity-30 border border-white shadow-sm`}>
                                <span className="text-2xl filter drop-shadow-sm">{['🌱', '⚡', '🧠', '👑'][i]}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-brand font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                                    {stat.role}
                                </h3>
                                {/* Visual Bar - Animated */}
                                <div className="h-2 w-48 bg-slate-100 rounded-full mt-3 overflow-hidden shadow-inner">
                                    <div 
                                        className={`h-full rounded-full ${stat.color.replace('text-', 'bg-').split(' ')[0]} transition-all duration-[1500ms] ease-out shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                                        style={{ width: animate ? '100%' : '0%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pl-20 md:pl-0">
                            <div className="text-right">
                                <span className={`block text-4xl font-black ${stat.color.split(' ')[2]} tracking-tighter`}>
                                    {stat.range.split(' ')[0]}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block group-hover:text-slate-500 transition-colors">Días Hábiles</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            
            <div className="bg-slate-950 p-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-center gap-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-30"></div>
                
                <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-sm relative z-10">
                    <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                    <p className="text-xs font-medium text-slate-300">
                        Cálculo asumiendo <strong className="text-white">feedback continuo</strong> (24/48hs).
                    </p>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium relative z-10">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Tu velocidad es el acelerador.</span>
                </div>
            </div>
        </div>
    </section>
  );
};