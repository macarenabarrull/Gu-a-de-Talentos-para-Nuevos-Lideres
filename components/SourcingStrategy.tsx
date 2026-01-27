import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_MATRIX } from '../constants';
import { CheckCircle2, ScanFace, Users, Microscope } from 'lucide-react';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-8">
            <SectionHeading 
            title="CRITERIOS DE EVALUACIÓN 🔍" 
            subtitle="¿Por qué evaluamos distinto? Adaptamos la vara para medir potencial en Juniors y experiencia real en Líderes."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 flex-1 max-h-[60vh]">
           {EVALUATION_MATRIX.map((item, index) => {
               const icons = [Microscope, Users, ScanFace];
               const Icon = icons[index % icons.length];
               const gradients = [
                   'from-blue-500 to-blue-600',
                   'from-purple-500 to-purple-600',
                   'from-orange-500 to-orange-600'
               ];
               
               return (
                <div key={index} className="flex flex-col h-full bg-white/60 backdrop-blur-xl rounded-[1.5rem] border border-white/50 shadow-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className={`h-2 bg-gradient-to-r ${gradients[index]}`}></div>
                    <div className="p-6 flex-1 flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-7 h-7" />
                        </div>
                        
                        <h3 className="text-xl font-brand font-black text-slate-900 mb-2 uppercase tracking-tight">
                            {item.role}
                        </h3>
                        
                        <div className="my-4 w-full h-px bg-slate-200"></div>
                        
                        <div className="mb-4 w-full">
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block mb-1">Herramienta</span>
                            <span className="text-sm font-bold text-slate-800 bg-white/50 px-3 py-1.5 rounded-full border border-slate-200 inline-block w-full">
                                {item.method}
                            </span>
                        </div>

                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block mb-1">Foco</span>
                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                {item.focus}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            <CheckCircle2 className={`w-6 h-6 text-slate-300`} />
                        </div>
                    </div>
                </div>
               );
           })}
      </div>
    </section>
  );
};