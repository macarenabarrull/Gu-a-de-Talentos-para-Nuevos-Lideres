import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const getCardColor = (index: number) => {
    const colors = [
      'hover:border-purple-300 hover:shadow-purple-500/10 border-l-4 border-l-purple-500',
      'hover:border-blue-300 hover:shadow-blue-500/10 border-l-4 border-l-blue-500',
      'hover:border-pink-300 hover:shadow-pink-500/10 border-l-4 border-l-pink-500',
      'hover:border-orange-300 hover:shadow-orange-500/10 border-l-4 border-l-orange-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4 pt-4 md:pt-0 relative">
      <div className="mb-4 lg:mb-8 shrink-0 relative z-10">
        <SectionHeading 
            title="Roadmap del Proceso 🗺️" 
            subtitle="El camino que recorremos juntos: cada paso construye el éxito del siguiente."
        />
      </div>

      <div className="flex-1 overflow-y-auto lg:overflow-visible flex items-center justify-center relative p-4">
          
          <div className="relative w-full z-10">
            
            {/* SVG Connector Layer for Desktop (The "Snake" Line) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="50%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                </defs>
                
                {/* Connection 4 -> 5: The "Return" Path */}
                <path 
                    d="M 87.5% 25% V 50% H 12.5% V 70%" 
                    fill="none" 
                    stroke="#cbd5e1" 
                    strokeWidth="2" 
                    strokeDasharray="6 6"
                    className="opacity-50"
                />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 w-full relative z-10">
                {PROCESS_STEPS.map((step, index) => {
                const isLast = index === PROCESS_STEPS.length - 1;
                const isRow1 = index < 3; // 0, 1, 2 connect to right
                const isRow2 = index >= 4 && index < 7; // 4, 5, 6 connect to right
                
                return (
                <div 
                    key={step.id} 
                    className="group relative animate-enter flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                >
                    
                    {/* Standard Horizontal Connectors (Desktop) */}
                    <div className="hidden lg:block absolute pointer-events-none z-0 w-full h-full">
                        {(isRow1 || isRow2) && (
                            <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-slate-300">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        )}
                    </div>

                    {/* Mobile Connector (Down Arrow) */}
                    <div className="lg:hidden absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-slate-300 z-0">
                        {!isLast && (
                            <ArrowRight className="w-5 h-5 rotate-90" />
                        )}
                    </div>

                    {/* Card */}
                    <div className={`
                        p-6 rounded-[1.5rem] border border-white/60 bg-white/60 backdrop-blur-xl transition-all duration-300 flex flex-col relative z-10 
                        shadow-sm hover:shadow-xl ${getCardColor(index)} hover:-translate-y-1 min-h-[11rem] justify-between
                    `}>
                    
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 text-purple-600">
                                <step.icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                {step.phase}
                            </span>
                        </div>
                        <span className="text-3xl font-brand font-black text-slate-200 select-none">
                            {step.id}
                        </span>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-brand font-bold leading-tight text-slate-900 mb-1">
                        {step.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-600 leading-snug">
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