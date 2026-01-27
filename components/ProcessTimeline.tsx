import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';
import { ChevronRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4 pt-4 md:pt-0">
      <div className="mb-6 lg:mb-10 shrink-0">
        <SectionHeading 
            title="Roadmap del Proceso 🗺️" 
            subtitle="Una visión paso a paso, desde que surge la necesidad hasta que la persona ingresa."
        />
      </div>

      <div className="flex-1 overflow-y-auto lg:overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
            {PROCESS_STEPS.map((step, index) => {
              const isLast = index === PROCESS_STEPS.length - 1;
              const isHovered = hoveredStep === step.id;

              return (
              <div 
                key={step.id} 
                className="group relative animate-enter h-full" 
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Confetti for Onboarding */}
                {isLast && isHovered && (
                    <>
                        <div className="confetti bg-yellow-400 left-1/4" style={{ top: '-20px' }} />
                        <div className="confetti bg-purple-400 left-1/2" style={{ top: '-20px', animationDelay: '0.1s' }} />
                        <div className="confetti bg-pink-400 left-3/4" style={{ top: '-20px', animationDelay: '0.2s' }} />
                    </>
                )}

                {/* Card */}
                <div className={`
                    h-full bg-white/80 backdrop-blur-xl p-4 lg:p-5 rounded-2xl border 
                    transition-all duration-300 flex flex-col relative z-10
                    ${isLast ? 'border-purple-200 shadow-md' : 'border-white/50 shadow-sm'}
                    hover:shadow-[0_10px_30px_rgb(147,51,234,0.1)] hover:border-purple-300 hover:-translate-y-1
                `}>
                  
                  <div className="flex justify-between items-start mb-3">
                      <div className={`
                          p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-inner
                          ${isLast ? 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600' : 'bg-slate-50 text-slate-500 group-hover:bg-purple-50 group-hover:text-purple-600'}
                      `}>
                          <step.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest border border-slate-100 px-1.5 py-0.5 rounded">
                        {step.phase}
                      </span>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`text-sm font-brand font-bold mb-1 leading-tight transition-colors ${isLast ? 'text-purple-900' : 'text-slate-900 group-hover:text-purple-700'}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-[10px] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Visual (Desktop) */}
                {index < PROCESS_STEPS.length - 1 && (index + 1) % 4 !== 0 && (
                   <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-0 text-slate-200">
                      <ChevronRight className="w-5 h-5" />
                   </div>
                )}
              </div>
            )})}
          </div>
        </div>
    </section>
  );
};