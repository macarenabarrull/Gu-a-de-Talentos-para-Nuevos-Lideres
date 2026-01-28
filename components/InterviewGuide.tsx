import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileSignature, Stethoscope, UserCheck, Plane } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
      
      <div className="shrink-0 mb-8 text-center">
        <SectionHeading 
            title="La recta final" 
            subtitle="Todo listo para el despegue. Últimos chequeos antes de que el talento suba a bordo."
            center
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full min-h-0">
         
         {/* Cards Container */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            
            {/* Step 1 */}
            <div className="group animate-enter delay-100 bg-white rounded-3xl p-1 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-slate-50 rounded-[1.25rem] p-6 h-full flex flex-col items-center text-center border border-slate-100 group-hover:border-purple-100 transition-colors">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm text-2xl">
                        ✍️
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 mb-2">Paso 01</span>
                    <h3 className="text-lg font-brand font-bold text-slate-900 mb-2">Vender el proyecto</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        Mientras negociamos números, vos reforzá el desafío.
                    </p>
                </div>
            </div>

            {/* Step 2 */}
            <div className="group animate-enter delay-200 bg-white rounded-3xl p-1 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-slate-50 rounded-[1.25rem] p-6 h-full flex flex-col items-center text-center border border-slate-100 group-hover:border-blue-100 transition-colors">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm text-2xl">
                        🩺
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">Paso 02</span>
                    <h3 className="text-lg font-brand font-bold text-slate-900 mb-2">Zona de riesgo</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        Momento de contraofertas. Mantenete cerca del candidato.
                    </p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="group animate-enter delay-300 bg-white rounded-3xl p-1 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-slate-50 rounded-[1.25rem] p-6 h-full flex flex-col items-center text-center border border-slate-100 group-hover:border-green-100 transition-colors">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm text-2xl">
                        ✅
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-2">Paso 03</span>
                    <h3 className="text-lg font-brand font-bold text-slate-900 mb-2">Pre-Onboarding</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        Un mensaje de WhatsApp antes del día 1 marca la diferencia.
                    </p>
                </div>
            </div>

         </div>

         {/* Final Action */}
         <div className="mt-10 animate-enter delay-500">
             <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-lg border border-slate-100">
                 <div className="p-2 bg-slate-900 rounded-full text-white">
                     <Plane className="w-4 h-4" />
                 </div>
                 <p className="text-sm font-medium text-slate-700">
                     Próxima parada: <span className="font-bold text-slate-900">Onboarding</span>
                 </p>
             </div>
         </div>

      </div>
    </section>
  );
};