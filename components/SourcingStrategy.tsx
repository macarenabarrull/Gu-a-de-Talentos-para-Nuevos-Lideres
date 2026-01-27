import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_MATRIX } from '../constants';
import { Filter, Users, ClipboardCheck } from 'lucide-react';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="text-center mb-8">
             <SectionHeading 
              title="FILTRAR Y ELEGIR 🎯" 
              subtitle="Hacemos una preselección con mirada técnica y cultural. Si el perfil no aparece, redefinimos el enfoque."
              center
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-purple-200 transition-colors">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3">
                 <Filter className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Preselección</h4>
              <p className="text-xs text-slate-500 mt-1">Mirada técnica + cultural de informes.</p>
           </div>
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-purple-200 transition-colors">
              <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-3">
                 <ClipboardCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Feedback</h4>
              <p className="text-xs text-slate-500 mt-1">Clave para pulir el perfil buscado.</p>
           </div>
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-purple-200 transition-colors">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3">
                 <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Entrevistas</h4>
              <p className="text-xs text-slate-500 mt-1">Presenciales o virtuales con líderes.</p>
           </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200">
            <h3 className="font-brand font-bold text-slate-900 text-center mb-6 uppercase tracking-wider text-sm">¿Qué evaluaciones usamos?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {EVALUATION_MATRIX.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Para...</div>
                    <h3 className="font-brand font-bold text-slate-900 text-lg mb-3 group-hover:text-purple-600 transition-colors">{item.role}</h3>
                    <div className="h-px w-full bg-slate-100 mb-3"></div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span className="text-xs font-bold text-slate-700">{item.method}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 pl-3.5 leading-snug">
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