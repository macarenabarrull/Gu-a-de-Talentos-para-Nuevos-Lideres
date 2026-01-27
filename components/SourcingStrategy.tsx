import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_MATRIX } from '../constants';
import { Filter, Users, ClipboardCheck } from 'lucide-react';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-8 lg:mb-16">
             <SectionHeading 
              title="FILTRAR Y ELEGIR 🎯" 
              subtitle="Hacemos una preselección con mirada técnica y cultural. Si el perfil no aparece, redefinimos el enfoque."
              center
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-12 lg:mb-20">
           <div className="bg-white p-5 lg:p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-purple-200 transition-colors">
              <div className="w-10 h-10 lg:w-16 lg:h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3 lg:mb-6">
                 <Filter className="w-5 h-5 lg:w-8 lg:h-8" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm lg:text-xl mb-1">Preselección</h4>
              <p className="text-xs lg:text-base text-slate-500 mt-1">Mirada técnica + cultural de informes.</p>
           </div>
           <div className="bg-white p-5 lg:p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-purple-200 transition-colors">
              <div className="w-10 h-10 lg:w-16 lg:h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-3 lg:mb-6">
                 <ClipboardCheck className="w-5 h-5 lg:w-8 lg:h-8" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm lg:text-xl mb-1">Feedback</h4>
              <p className="text-xs lg:text-base text-slate-500 mt-1">Clave para pulir el perfil buscado.</p>
           </div>
           <div className="bg-white p-5 lg:p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-purple-200 transition-colors">
              <div className="w-10 h-10 lg:w-16 lg:h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3 lg:mb-6">
                 <Users className="w-5 h-5 lg:w-8 lg:h-8" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm lg:text-xl mb-1">Entrevistas</h4>
              <p className="text-xs lg:text-base text-slate-500 mt-1">Presenciales o virtuales con líderes.</p>
           </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-200">
            <h3 className="font-brand font-bold text-slate-900 text-center mb-6 lg:mb-10 uppercase tracking-wider text-sm lg:text-lg">¿Qué evaluaciones usamos?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                {EVALUATION_MATRIX.map((item, i) => (
                <div key={i} className="bg-white p-5 lg:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                    <div className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Para...</div>
                    <h3 className="font-brand font-bold text-slate-900 text-lg lg:text-2xl mb-3 group-hover:text-purple-600 transition-colors">{item.role}</h3>
                    <div className="h-px w-full bg-slate-100 mb-3"></div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span className="text-xs lg:text-base font-bold text-slate-700">{item.method}</span>
                        </div>
                        <p className="text-[10px] lg:text-sm text-slate-500 pl-3.5 leading-snug">
                            Foco en {item.focus}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};