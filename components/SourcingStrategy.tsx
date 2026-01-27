import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_MATRIX } from '../constants';
import { Filter, Users, ClipboardCheck } from 'lucide-react';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      
      <div className="mb-8 lg:mb-12">
            <SectionHeading 
            title="FILTRAR Y ELEGIR 🎯" 
            subtitle="Hacemos una preselección con mirada técnica y cultural. Si el perfil no aparece, redefinimos el enfoque."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-10 lg:mb-16">
           <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-purple-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Filter className="w-7 h-7" />
              </div>
              <h4 className="font-brand font-bold text-slate-900 text-lg lg:text-xl mb-2">Preselección</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Mirada técnica + cultural sobre los informes.</p>
           </div>
           <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-pink-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <ClipboardCheck className="w-7 h-7" />
              </div>
              <h4 className="font-brand font-bold text-slate-900 text-lg lg:text-xl mb-2">Feedback</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Tu devolución rápida es clave para pulir la búsqueda.</p>
           </div>
           <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-orange-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Users className="w-7 h-7" />
              </div>
              <h4 className="font-brand font-bold text-slate-900 text-lg lg:text-xl mb-2">Entrevistas</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Presenciales o virtuales. Vos validás lo técnico.</p>
           </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 shadow-inner">
        <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
            <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Herramientas</span>
            <h3 className="font-brand font-bold text-slate-900 text-xl lg:text-2xl uppercase tracking-tight">¿Qué evaluaciones usamos?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVALUATION_MATRIX.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                <div className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Para el rol de...</div>
                <h3 className="font-brand font-bold text-slate-900 text-xl lg:text-2xl mb-4 group-hover:text-purple-600 transition-colors">{item.role}</h3>
                <div className="h-px w-full bg-slate-100 mb-4"></div>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                        <div>
                            <span className="block text-sm lg:text-base font-bold text-slate-800">{item.method}</span>
                            <span className="text-xs lg:text-sm text-slate-500">Foco: {item.focus}</span>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
      </div>

    </section>
  );
};