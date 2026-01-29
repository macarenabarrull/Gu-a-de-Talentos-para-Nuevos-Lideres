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

  return (
    <section className="h-full flex flex-col justify-center max-w-[90rem] mx-auto w-full px-8 py-4 relative">
      <SectionHeading 
            title="ETAPAS DEL PROCESO" 
            subtitle="El camino que recorremos juntos: desde la definición hasta el primer día."
      />

      <div className="flex-1 min-h-0 relative p-2 w-full">
          
          <div className="relative w-full h-full z-10">
            
            {/* Animated Snake Line (Desktop Only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" style={{ top: '10px' }}>
                <path 
                    d="M 87.5% 25% V 50% H 12.5% V 75%" 
                    fill="none" 
                    stroke="#e2e8f0" 
                    strokeWidth="3" 
                    strokeDasharray="8 8"
                    className="opacity-60"
                />
                 <path 
                    d="M 87.5% 25% V 50% H 12.5% V 75%" 
                    fill="none" 
                    stroke="url(#gradientLine)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="2000"
                    strokeDashoffset={mounted ? "0" : "2000"}
                    style={{ transition: "stroke-dashoffset 3s ease-out" }}
                />
                <defs>
                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Grid - H-FULL ensures it takes space, GAP is relative to viewport */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 w-full h-full relative z-10">
                {PROCESS_STEPS.map((step, index) => {
                const isLast = index === PROCESS_STEPS.length - 1;
                const isRow1 = index < 3; 
                const isRow2 = index >= 4 && index < 7; 
                
                return (
                <div 
                    key={step.id} 
                    className="group relative animate-enter flex flex-col h-full min-h-0"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                >
                    
                    {/* Desktop Arrows */}
                    <div className="hidden lg:block absolute pointer-events-none z-50 w-full h-full">
                        {(isRow1 || isRow2) && (
                            <div className="absolute top-1/2 right-[-20px] translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1.5 shadow-lg shadow-purple-500/30 z-50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 transform ring-4 ring-[#fafafa]">
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        )}
                    </div>

                    {/* Card - FLEX-1 to fill grid cell height */}
                    <div className={`
                        p-3 lg:p-5 rounded-[1.5rem] border border-slate-100 transition-all duration-500 flex flex-col relative z-10 flex-1 min-h-0
                        bg-white shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-1 group-hover:border-purple-200
                    `}>
                    
                    {/* Floating Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-white text-slate-400 border border-slate-100 flex items-center justify-center font-black text-[10px] shadow-sm group-hover:scale-110 group-hover:text-purple-600 transition-all">
                        {index + 1}
                    </div>

                    <div className="flex justify-between items-start mb-2 lg:mb-4 shrink-0">
                        {/* 3D Emoji Icon Container */}
                        <div className="icon-box-soft w-8 h-8 lg:w-12 lg:h-12 rounded-xl group-hover:scale-110 transition-transform duration-300 bg-slate-50/50 border-slate-100 flex items-center justify-center">
                            <span className="text-base lg:text-2xl emoji-3d">{step.emoji}</span>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest block mb-0.5 text-slate-400 group-hover:text-purple-500 transition-colors shrink-0">
                            {step.phase}
                        </span>
                        <h3 className="text-xs lg:text-sm font-brand font-bold leading-tight text-slate-900 mb-1 lg:mb-2 shrink-0">
                            {step.title}
                        </h3>
                        <p className="text-[9px] lg:text-[11px] font-medium text-slate-500 leading-relaxed group-hover:text-slate-600 line-clamp-3 lg:line-clamp-4">
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