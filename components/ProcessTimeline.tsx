import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const getCardStyle = (index: number) => {
      // Subtle color coding
    const styles = [
      'hover:border-purple-200 border-l-4 border-l-purple-500',
      'hover:border-blue-200 border-l-4 border-l-blue-500',
      'hover:border-pink-200 border-l-4 border-l-pink-500',
      'hover:border-orange-200 border-l-4 border-l-orange-500',
    ];
    return styles[index % styles.length];
  };

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-4 md:pt-0 relative">
      <div className="mb-4 shrink-0 relative z-10">
        <SectionHeading 
            title="Roadmap del Proceso" 
            subtitle="El camino que recorremos juntos: cada paso construye el éxito del siguiente."
        />
      </div>

      <div className="flex-1 overflow-y-auto lg:overflow-visible flex items-center justify-center relative p-2">
          
          <div className="relative w-full z-10">
            
            {/* Connector Line (The Snake) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <path 
                    d="M 87.5% 25% V 50% H 12.5% V 70%" 
                    fill="none" 
                    stroke="#e2e8f0" 
                    strokeWidth="3" 
                    strokeDasharray="6 6"
                />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 w-full relative z-10">
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
                    
                    {/* Desktop Arrows - Positioned Absolutely */}
                    <div className="hidden lg:block absolute pointer-events-none z-20 w-full h-full">
                        {(isRow1 || isRow2) && (
                            <div className="absolute top-1/2 -right-7 -translate-y-1/2 text-slate-300 bg-slate-50 rounded-full p-1.5 border border-slate-100 shadow-sm">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        )}
                    </div>

                    {/* Mobile Arrows */}
                    <div className="lg:hidden absolute bottom-[-34px] left-1/2 -translate-x-1/2 text-slate-300 z-0">
                        {!isLast && (
                            <ArrowRight className="w-5 h-5 rotate-90" />
                        )}
                    </div>

                    {/* Card */}
                    <div className={`
                        p-5 rounded-2xl border border-slate-100 bg-white transition-all duration-300 flex flex-col relative z-10 
                        shadow-sm hover:shadow-xl hover:-translate-y-1 min-h-[8.5rem] justify-between
                        ${getCardStyle(index)}
                    `}>
                    
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-slate-50 rounded-lg text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <step.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {step.phase}
                            </span>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-brand font-bold leading-tight text-slate-900 mb-1">
                        {step.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-600 leading-snug">
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