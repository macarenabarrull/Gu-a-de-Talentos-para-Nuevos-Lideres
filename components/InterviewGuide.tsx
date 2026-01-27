import React from 'react';
import { SectionHeading } from './SectionHeading';
import { STAR_MODEL } from '../constants'; // Renamed logically but kept import for data
import { Stethoscope, CheckCircle, FileSignature } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Proposal */}
        <div className="lg:col-span-5">
           <SectionHeading 
            title="LA RECTA FINAL 🏁" 
            subtitle="El momento clave: La Propuesta Formal y los pasos previos al ingreso."
          />
          
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-purple-900/5 mt-6 relative">
             <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                Momento Clave
             </div>
             
             <h3 className="font-brand font-bold text-slate-900 text-xl mb-4 italic">"Queremos que seas parte"</h3>
             
             <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                   <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0 text-purple-600">
                      <FileSignature className="w-3.5 h-3.5" />
                   </div>
                   Análisis 360º del perfil y equidad interna.
                </li>
                <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                   <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                      <Stethoscope className="w-3.5 h-3.5" />
                   </div>
                   Exámenes médicos pre-ocupacionales.
                </li>
                <li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                   <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-600">
                      <CheckCircle className="w-3.5 h-3.5" />
                   </div>
                   Alta en sistemas (accesos y licencias).
                </li>
             </ul>
          </div>
        </div>

        {/* Right Side: Steps Visualization */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
           {STAR_MODEL.map((step, i) => (
             <div key={i} className={`p-6 rounded-3xl border ${step.color} bg-opacity-40 hover:scale-105 transition-transform duration-300 cursor-default bg-white flex flex-col justify-between h-full`}>
                <div>
                    <div className="text-4xl font-black opacity-10 mb-2">{step.letter}</div>
                    <h3 className="text-lg font-bold mb-2 font-brand uppercase">{step.meaning}</h3>
                </div>
                <p className="font-medium text-xs leading-relaxed opacity-80">
                   {step.question}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};