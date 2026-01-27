import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';
import { ChevronRight } from 'lucide-react';

export const ProcessRoadmap: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="mb-6">
        <SectionHeading 
          title="Mapa del Proceso 🗺️" 
          subtitle="Una visión paso a paso, desde que surge la necesidad hasta que la persona ingresa."
        />
      </div>

      <div className="relative">
        {/* Animated Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0">
             <div className="w-full h-full bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-purple-100/50 w-full animate-pulse origin-left"></div>
             </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 relative z-10">
          {PROCESS_STEPS.map((step, index) => (
            <div 
                key={step.id} 
                className="relative group animate-enter"
                style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Card */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 h-full flex flex-col items-center text-center transform hover:-translate-y-1">
                <div className="mb-2 p-2.5 bg-slate-50 rounded-full group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                  <step.icon className="w-4 h-4" />
                </div>
                
                <span className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-widest">{step.phase}</span>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">{step.title}</h3>
                <p className="text-[10px] text-slate-500 mt-1">{step.description}</p>

                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-[10px] border-2 border-white group-hover:bg-purple-600 transition-colors shadow-sm">
                  {index + 1}
                </div>
              </div>

              {/* Arrow Connector (Desktop only) */}
              {index < PROCESS_STEPS.length - 1 && (
                 <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 text-slate-300 opacity-50">
                    <ChevronRight className="w-4 h-4" />
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};