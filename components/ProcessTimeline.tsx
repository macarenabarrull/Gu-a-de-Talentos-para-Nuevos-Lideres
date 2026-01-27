import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';

// Based on PDF Page 3 icons/concepts
const STEP_ICONS = ["🏁", "📢", "🕵️", "🤝", "✍️", "🎉"];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full">
      <div className="mb-8 md:mb-16">
        <SectionHeading 
            title="ETAPAS DEL PROCESO 🚀" 
            subtitle="Desde la detección de la necesidad hasta el primer día de trabajo."
        />
      </div>

      <div className="relative px-2">
          {/* Connector Line */}
          <div className="absolute top-12 lg:top-16 left-0 w-full h-1 bg-slate-100 hidden lg:block rounded-full overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-purple-200 via-pink-200 to-slate-200 opacity-50"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="group relative pt-6 lg:pt-8 animate-enter" style={{ animationDelay: `${index * 100}ms` }}>
                
                {/* Connector Dot */}
                <div className="hidden lg:flex absolute top-12 lg:top-16 left-1/2 -translate-x-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-white border-4 border-purple-200 rounded-full z-10 group-hover:border-purple-600 group-hover:scale-125 transition-all duration-300 shadow-sm"></div>

                <div className="flex flex-col h-full bg-white p-4 lg:p-8 rounded-2xl border border-slate-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-2 transition-all duration-300 min-h-[160px] lg:min-h-[220px]">
                  
                  <div className="mb-3 lg:mb-6 flex justify-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl lg:text-4xl group-hover:bg-purple-50 group-hover:scale-110 transition-all duration-300">
                        {STEP_ICONS[index]}
                    </div>
                  </div>

                  <div className="text-center mt-auto">
                    <span className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 lg:mb-2 block">Paso {index + 1}</span>
                    <h3 className="text-sm lg:text-xl font-brand font-bold text-slate-900 mb-2 leading-tight group-hover:text-purple-700 transition-colors uppercase">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-[10px] lg:text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};