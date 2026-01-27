import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-[90vw] lg:max-w-7xl mx-auto w-full px-4">
      <div className="mb-12 lg:mb-20">
        <SectionHeading 
            title="Roadmap del Proceso 🗺️" 
            subtitle="Una visión paso a paso, desde que surge la necesidad hasta que la persona ingresa."
        />
      </div>

      <div className="relative w-full">
          {/* Main Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full -z-10"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 -translate-y-1/2 rounded-full -z-10 w-[90%] opacity-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                className="group relative flex flex-row lg:flex-col items-center gap-4 lg:gap-0 animate-enter" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                
                {/* Timeline Node (Desktop) */}
                <div className="hidden lg:flex w-10 h-10 bg-white border-4 border-slate-200 rounded-full items-center justify-center z-10 mb-6 group-hover:border-purple-500 group-hover:scale-125 transition-all duration-300 shadow-sm relative">
                    <span className="w-3 h-3 bg-slate-300 rounded-full group-hover:bg-purple-600 transition-colors"></span>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 bg-slate-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {index + 1}
                    </div>
                </div>

                {/* Mobile Line Connector */}
                <div className="lg:hidden absolute left-6 top-10 bottom-0 w-0.5 bg-slate-200 last:hidden"></div>

                {/* Card */}
                <div className="flex-1 bg-white p-5 lg:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 lg:text-center w-full group-hover:-translate-y-2">
                  <div className="flex lg:justify-center mb-3">
                      <div className="p-2 bg-purple-50 rounded-lg text-purple-600 group-hover:scale-110 transition-transform">
                          <step.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Fase {index + 1}</span>
                    <h3 className="text-base lg:text-lg font-brand font-bold text-slate-900 mb-2 leading-tight group-hover:text-purple-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed font-medium">
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