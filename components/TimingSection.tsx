import React, { useEffect, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';
import { Clock, RefreshCw, Zap, SlidersHorizontal } from 'lucide-react';

export const TimingSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto w-full px-6 py-4">
        
        <SectionHeading 
            title="TIEMPOS DE SELECCIÓN" 
            subtitle="Más que una estadística, es un compromiso mutuo. La velocidad depende de nuestra sincronización."
        />

        <div className="flex-1 min-h-0 flex flex-col justify-center gap-3 lg:gap-4">
             {TIMING_STATS.map((stat, i) => (
                 <div 
                    key={i}
                    className="group bg-white rounded-[1.5rem] p-3 lg:p-4 pr-6 lg:pr-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex-1"
                 >
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Soft Icon Container */}
                        <div className="icon-box-soft w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-[1.5rem] shrink-0 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                            <span className="text-2xl lg:text-4xl emoji-3d">{stat.emoji}</span>
                        </div>
                        
                        <div>
                            <h3 className="text-sm lg:text-lg font-brand font-bold text-slate-900 mb-1 lg:mb-2">
                                {stat.role}
                            </h3>
                            {/* Visual Bar */}
                            <div className="h-1.5 lg:h-2.5 w-32 lg:w-48 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                <div 
                                    className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-[1500ms] ease-out shadow-sm`}
                                    style={{ width: animate ? '100%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <span className="block text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter">
                            {stat.range.split(' ')[0]}
                        </span>
                        <span className="text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">Días</span>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-[1.5rem] border-2 border-transparent group-hover:border-purple-100 transition-colors pointer-events-none"></div>
                 </div>
             ))}
        </div>

        <div className="mt-6 lg:mt-8 flex flex-col items-center justify-center gap-3 text-center shrink-0">
             
             <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-500 animate-spin-slow" />
                    <p className="text-[10px] lg:text-xs font-medium text-slate-500">
                        Cálculo asumiendo <strong className="text-slate-900">feedback continuo</strong>.
                    </p>
                </div>
                
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-purple-500" />
                    <p className="text-[10px] lg:text-xs font-medium text-slate-500">
                        Varía si el <strong className="text-slate-900">perfil se ajusta</strong> en la marcha.
                    </p>
                </div>
             </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Tu velocidad es el acelerador.</span>
            </div>
        </div>
    </section>
  );
};