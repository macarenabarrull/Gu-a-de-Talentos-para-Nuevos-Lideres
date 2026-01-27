import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';

export const ProcessTimeline: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const getCardColor = (index: number) => {
    const colors = [
      'hover:border-purple-300 hover:shadow-purple-500/10',
      'hover:border-blue-300 hover:shadow-blue-500/10',
      'hover:border-pink-300 hover:shadow-pink-500/10',
      'hover:border-orange-300 hover:shadow-orange-500/10',
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

      <div className="flex-1 overflow-y-auto lg:overflow-visible flex items-center justify-center relative">
          
          {/* SVG Connector Path (Desktop Only) */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" style={{ top: '-20px' }}>
             <path 
                d="M 150 100 L 950 100 C 1050 100 1050 300 950 300 L 150 300"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="4"
                strokeDasharray="12 12"
                className="opacity-40"
             />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-y-16 lg:gap-x-12 w-full relative z-10 p-4">
            
            {PROCESS_STEPS.map((step, index) => {
              const isLast = index === PROCESS_STEPS.length - 1;
              const isHovered = hoveredStep === step.id;
              
              // Snake Layout Logic
              const isSecondRow = index >= 4;
              
              return (
              <div 
                key={step.id} 
                className={`group relative animate-enter flex flex-col ${isSecondRow ? 'lg:order-last lg:flex-col-reverse lg:justify-end' : ''}`} 
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                
                {/* Connector Arrows (Desktop) */}
                <div className="hidden lg:block absolute pointer-events-none z-20">
                    {!isSecondRow && index < 3 && (
                        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
                             <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                        </div>
                    )}
                    {index === 3 && (
                        <div className="absolute top-full right-1/2 transform translate-x-1/2 h-16 w-12">
                            <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0V60M20 60L30 50M20 60L10 50" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    )}
                    {isSecondRow && index < 7 && (
                        <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 rotate-180">
                             <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                        </div>
                    )}
                </div>

                {/* Mobile Connector */}
                <div className="lg:hidden absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-slate-300 z-0">
                    {index < 7 && (
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                             <path d="M12 5v14M19 12l-7 7-7-7" />
                         </svg>
                    )}
                </div>

                {/* Card - Glassmorphism */}
                <div className={`
                    p-5 rounded-[1.5rem] border border-white/60 bg-white/60 backdrop-blur-xl transition-all duration-300 flex flex-col relative z-10 
                    shadow-lg ${getCardColor(index)} hover:-translate-y-1 h-36 justify-between
                    ${isLast ? 'ring-2 ring-purple-400 ring-offset-2' : ''}
                `}>
                  
                  <div className="flex justify-between items-start">
                      <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                          <step.icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <span className="text-4xl font-brand font-black text-slate-200 select-none">
                        {step.id}
                      </span>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-brand font-bold leading-tight text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

              </div>
            )})}
          </div>
        </div>
    </section>
  );
};