import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_MATRIX } from '../constants';
import { CheckCircle2, ScanFace, Users, Microscope } from 'lucide-react';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-8 lg:mb-12">
            <SectionHeading 
            title="CRITERIOS DE EVALUACIÓN 🔍" 
            subtitle="¿Por qué evaluamos distinto? Adaptamos la vara para medir potencial en Juniors y experiencia real en Líderes."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 flex-1 max-h-[70vh]">
           {EVALUATION_MATRIX.map((item, index) => {
               const icons = [Microscope, Users, ScanFace];
               const Icon = icons[index % icons.length];
               const gradients = [
                   'from-blue-500 to-blue-600',
                   'from-purple-500 to-purple-600',
                   'from-orange-500 to-orange-600'
               ];
               
               return (
                <div key={index} className="flex flex-col h-full bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                    <div className={`h-3 bg-gradient-to-r ${gradients[index]}`}></div>
                    <div className="p-8 lg:p-10 flex-1 flex flex-col items-center text-center">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-10 h-10" />
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-brand font-black text-slate-900 mb-2 uppercase tracking-tight">
                            {item.role}
                        </h3>
                        
                        <div className="my-6 w-full h-px bg-slate-200"></div>
                        
                        <div className="mb-6 w-full">
                            <span className="text-xs uppercase font-bold text-slate-500 tracking-widest block mb-2">Herramienta</span>
                            <span className="text-lg lg:text-xl font-bold text-slate-800 bg-white/50 px-4 py-2 rounded-full border border-slate-200 inline-block w-full">
                                {item.method}
                            </span>
                        </div>

                        <div>
                            <span className="text-xs uppercase font-bold text-slate-500 tracking-widest block mb-2">Foco</span>
                            <p className="text-base lg:text-lg text-slate-700 leading-relaxed font-medium">
                                {item.focus}
                            </p>
                        </div>

                        <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            <CheckCircle2 className={`w-8 h-8 text-slate-300`} />
                        </div>
                    </div>
                </div>
               );
           })}
      </div>
    </section>
  );
};