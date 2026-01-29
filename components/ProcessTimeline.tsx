import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  const getTheme = (index: number) => {
    // Simplified theme to match "Soft White" aesthetic
    return { bg: 'bg-white', border: 'border-slate-100', text: 'text-slate-600', hoverBorder: 'group-hover:border-purple-200' };
  };

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-4 md:pt-0 relative">
      <div className="mb-6 shrink-0 relative z-10">
        <SectionHeading 
            title="ETAPAS DEL PROCESO DE SELECCIÓN" 
            subtitle="El camino que recorremos juntos: desde la definición hasta el primer día."
        />
      </div>

      <div className="flex-1 overflow-y-auto lg:overflow-visible flex items-center justify-center relative p-2">
          
          <div className="relative w-full z-10">
            
            {/* Animated Snake Line */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <path 
                    d="M 87.5% 25% V 50% H 12.5% V 70%" 
                    fill="none" 
                    stroke="#e2e8f0" 
                    strokeWidth="3" 
                    strokeDasharray="8 8"
                    className="opacity-60"
                />
                 {/* The Drawing Line */}
                 <path 
                    d="M 87.5% 25% V 50% H 12.5% V 70%" 
                    fill="none" 
                    stroke="url(#gradientLine)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset={mounted ? "0" : "1000"}
                    style={{ transition: "stroke-dashoffset 2.5s ease-out" }}
                />
                <defs>
                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 w-full relative z-10">
                {PROCESS_STEPS.map((step, index) => {
                const isLast = index === PROCESS_STEPS.length - 1;
                const isRow1 = index < 3; 
                const isRow2 = index >= 4 && index < 7; 
                
                return (
                <div 
                    key={step.id} 
                    className="group relative animate-enter flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                >
                    
                    {/* Desktop Arrows - Vibrant & High Z-Index */}
                    <div className="hidden lg:block absolute pointer-events-none z-50 w-full h-full">
                        {(isRow1 || isRow2) && (
                            <div className="absolute top-1/2 -right-9 -translate-y-1/2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2.5 shadow-lg shadow-purple-500/30 z-50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 transform">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        )}
                    </div>

                    {/* Mobile Arrows */}
                    <div className="lg:hidden absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-slate-300 z-0">
                        {!isLast && (
                            <ArrowRight className="w-6 h-6 rotate-90" />
                        )}
                    </div>

                    {/* Soft 3D Card */}
                    <div className={`
                        p-6 rounded-3xl border border-slate-100 transition-all duration-500 flex flex-col relative z-10 min-h-[11rem] justify-between
                        bg-white shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-2 group-hover:border-purple-100
                    `}>
                    
                    {/* Floating Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-white text-slate-400 border border-slate-100 flex items-center justify-center font-black text-xs shadow-sm group-hover:scale-110 group-hover:text-purple-600 transition-all">
                        {index + 1}
                    </div>

                    <div className="flex justify-between items-start mb-4">
                        {/* 3D Emoji Icon Container */}
                        <div className="icon-box-soft w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl emoji-3d">{step.emoji}</span>
                        </div>
                    </div>
                    
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-slate-400 group-hover:text-purple-500 transition-colors">
                            {step.phase}
                        </span>
                        <h3 className="text-lg font-brand font-bold leading-tight text-slate-900 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 leading-relaxed group-hover:text-slate-600">
                            {step.description}
                        </p>
                    </div>
                    </div>

                </div>
                )})}
            </div>
          </div>
      </div>
    </section>
  );
};