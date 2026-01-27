import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-[95vw] lg:max-w-7xl mx-auto w-full px-4 pt-10 md:pt-0">
      <div className="mb-8 lg:mb-16">
        <SectionHeading 
            title="Roadmap del Proceso 🗺️" 
            subtitle="Una visión paso a paso, desde que surge la necesidad hasta que la persona ingresa."
        />
      </div>

      <div className="relative w-full">
          {/* Main Horizontal Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-200/50 rounded-full -z-10"></div>
          <div className="hidden lg:block absolute top-12 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full -z-10 w-[90%] opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                className="group relative flex flex-row lg:flex-col items-center gap-4 lg:gap-0 animate-enter" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                
                {/* Timeline Node (Desktop) */}
                <div className="hidden lg:flex w-8 h-8 bg-white border-2 border-white shadow-lg shadow-purple-900/10 rounded-full items-center justify-center z-10 mb-8 group-hover:scale-125 group-hover:border-purple-500 transition-all duration-300 relative">
                    <span className="w-2.5 h-2.5 bg-slate-300 rounded-full group-hover:bg-purple-600 transition-colors"></span>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 bg-slate-900 text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                        {index + 1}
                    </div>
                </div>

                {/* Mobile Line Connector */}
                <div className="lg:hidden absolute left-5 top-8 bottom-0 w-0.5 bg-slate-200 last:hidden"></div>

                {/* Card - Premium Glass Style */}
                <div className="flex-1 bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(147,51,234,0.1)] hover:border-purple-200 transition-all duration-300 lg:text-center w-full group-hover:-translate-y-1">
                  <div className="flex lg:justify-center mb-2">
                      <div className="p-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg text-purple-600 group-hover:scale-110 transition-transform shadow-inner">
                          <step.icon className="w-5 h-5" />
                      </div>
                  </div>
                  
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Fase {index + 1}</span>
                    <h3 className="text-sm lg:text-base font-brand font-bold text-slate-900 mb-1 leading-tight group-hover:text-purple-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-[10px] lg:text-xs leading-relaxed font-medium">
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