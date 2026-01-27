import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../constants';

const STEP_EMOJIS = ["🎯", "📢", "🔍", "🤝", "✍️", "🎉"];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="mb-16">
        <SectionHeading 
            title="El Viaje del Candidato 🗺️" 
            subtitle="Diseñamos un proceso de 6 etapas para garantizar transparencia, agilidad y experiencia."
        />
      </div>

      <div className="relative px-4">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 w-full h-1.5 bg-slate-100 hidden lg:block rounded-full overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-purple-100 via-pink-100 to-slate-100 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="group relative pt-6">
                
                {/* Connector Dot */}
                <div className="hidden lg:flex absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-slate-100 rounded-full z-10 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 items-center justify-center shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-purple-500 transition-colors"></div>
                </div>

                <div className="flex flex-col h-full bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-3 transition-all duration-300">
                  
                  <div className="mb-6 flex justify-between items-start">
                    <span className="text-5xl font-black text-slate-100 group-hover:text-purple-100 transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-125 group-hover:rotate-12 duration-300">
                        {STEP_EMOJIS[index]}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-purple-700 transition-colors">
                      {step.title.split('. ')[1]}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
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