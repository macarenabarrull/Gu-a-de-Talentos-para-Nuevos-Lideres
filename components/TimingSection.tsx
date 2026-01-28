import React, { useEffect, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { TIMING_STATS } from '../constants';
import { Clock, RefreshCw, Zap } from 'lucide-react';

export const TimingSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
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

        <div className="grid grid-cols-1 gap-4">
             {TIMING_STATS.map((stat, i) => (
                 <div 
                    key={i}
                    className="group bg-white rounded-[2rem] p-4 pr-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                 >
                    <div className="flex items-center gap-6">
                        {/* Soft Icon Container matching reference */}
                        <div className="icon-box-soft w-20 h-20 rounded-[1.5rem] shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <span className="text-4xl emoji-3d">{stat.emoji}</span>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-brand font-bold text-slate-900 mb-2">
                                {stat.role}
                            </h3>
                            {/* Visual Bar */}
                            <div className="h-2.5 w-48 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                <div 
                                    className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-[1500ms] ease-out shadow-sm`}
                                    style={{ width: animate ? '100%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <span className="block text-4xl font-black text-slate-900 tracking-tighter">
                            {stat.range.split(' ')[0]}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Días Hábiles</span>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-purple-100 transition-colors pointer-events-none"></div>
                 </div>
             ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
             <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
                <RefreshCw className="w-4 h-4 text-emerald-500 animate-spin-slow" />
                <p className="text-xs font-medium text-slate-500">
                    Cálculo asumiendo <strong className="text-slate-900">feedback continuo</strong> (24/48hs).
                </p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Tu velocidad es el acelerador.</span>
            </div>
        </div>
    </section>
  );
};