import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_MATRIX } from '../constants';
import { Filter, Users, ClipboardCheck, ScanSearch } from 'lucide-react';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-6 md:pt-0">
      
      <div className="shrink-0 mb-4 lg:mb-8">
            <SectionHeading 
            title="FILTRAR Y ELEGIR 🎯" 
            subtitle="Hacemos una preselección con mirada técnica y cultural. Si el perfil no aparece, redefinimos el enfoque."
        />
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pb-4">
           
           {/* Left Column: Key Pillars (Vertical Stack) */}
           <div className="lg:col-span-4 flex flex-col gap-4">
               <div className="flex-1 bg-white/80 p-5 rounded-3xl border border-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all group flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                     <Filter className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-brand font-bold text-slate-900 text-lg">Preselección</h4>
                    <p className="text-xs text-slate-500 leading-tight">Filtro técnico y cultural.</p>
                  </div>
               </div>
               
               <div className="flex-1 bg-white/80 p-5 rounded-3xl border border-white shadow-sm hover:shadow-md hover:border-pink-200 transition-all group flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                     <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-brand font-bold text-slate-900 text-lg">Feedback</h4>
                    <p className="text-xs text-slate-500 leading-tight">Tu devolución ágil es clave.</p>
                  </div>
               </div>

               <div className="flex-1 bg-white/80 p-5 rounded-3xl border border-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all group flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                     <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-brand font-bold text-slate-900 text-lg">Entrevistas</h4>
                    <p className="text-xs text-slate-500 leading-tight">Validación técnica final.</p>
                  </div>
               </div>
           </div>

           {/* Right Column: Evaluation Matrix */}
           <div className="lg:col-span-8 bg-slate-100/50 backdrop-blur-xl rounded-[2.5rem] p-6 lg:p-8 border border-white/50 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-900 rounded-lg text-white">
                        <ScanSearch className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-brand font-bold text-slate-900 text-xl uppercase tracking-tight">Matriz de Evaluación</h3>
                        <p className="text-xs text-slate-500">Herramientas específicas según el seniority del rol.</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                    {EVALUATION_MATRIX.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1 flex flex-col justify-between h-full">
                        <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Rol</div>
                            <h3 className="font-brand font-bold text-slate-900 text-lg mb-3 group-hover:text-purple-600 transition-colors">{item.role}</h3>
                        </div>
                        
                        <div className="pt-3 border-t border-slate-100">
                            <div className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                                <div>
                                    <span className="block text-sm font-bold text-slate-800">{item.method}</span>
                                    <span className="text-[10px] text-slate-500 font-medium">Foco: {item.focus}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
           </div>

      </div>
    </section>
  );
};