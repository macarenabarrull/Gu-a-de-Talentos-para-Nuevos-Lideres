import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_MATRIX } from '../constants';
import { CheckCircle2, ScanFace, Users, Microscope } from 'lucide-react';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
      
      <div className="shrink-0 mb-8">
            <SectionHeading 
            title="Criterios de evaluación" 
            subtitle="¿Por qué evaluamos distinto? Adaptamos la vara para medir potencial en Juniors y experiencia real en Líderes."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 max-h-[60vh]">
           {EVALUATION_MATRIX.map((item, index) => {
               const icons = [Microscope, Users, ScanFace];
               const Icon = icons[index % icons.length];
               
               // Clean color palette instead of gradients
               const colors = [
                   'text-blue-600 bg-blue-50 border-blue-100',
                   'text-purple-600 bg-purple-50 border-purple-100',
                   'text-orange-600 bg-orange-50 border-orange-100'
               ];
               
               return (
                <div key={index} className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div className="p-8 flex-1 flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-2xl ${colors[index]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-8 h-8" />
                        </div>
                        
                        <h3 className="text-xl font-brand font-bold text-slate-900 mb-2">
                            {item.role}
                        </h3>
                        
                        <div className="my-6 w-12 h-1 bg-slate-100 rounded-full mx-auto"></div>
                        
                        <div className="mb-4 w-full">
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-2">Herramienta</span>
                            <span className="text-sm font-bold text-slate-800 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 inline-block w-full">
                                {item.method}
                            </span>
                        </div>

                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-2">Foco</span>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {item.focus}
                            </p>
                        </div>

                        <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        </div>
                    </div>
                </div>
               );
           })}
      </div>
    </section>
  );
};