import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileSignature, Stethoscope, UserCheck, Plane } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-8 text-center">
        <SectionHeading 
            title="LA RECTA FINAL 🚀" 
            subtitle="Todo listo para el despegue. Últimos chequeos antes de que el talento suba a bordo."
            center
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full min-h-0">
         
         {/* Ticket Container */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            
            {/* Ticket 1: Propuesta */}
            <div className="group animate-enter delay-100 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col">
                <div className="bg-purple-600 p-4 flex justify-between items-center text-white">
                    <span className="text-xs font-bold uppercase tracking-widest">Paso 01</span>
                    <FileSignature className="w-5 h-5 opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">✍️</span>
                    </div>
                    <h3 className="text-lg font-brand font-black text-slate-900 mb-2">Tu rol: Vender el proyecto</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                        Mientras nosotros negociamos números, <strong className="text-purple-600">vos reforzá el desafío profesional</strong>.
                    </p>
                    <div className="mt-auto w-full border-t border-dashed border-slate-200 pt-4">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-[10px] font-bold rounded-full uppercase tracking-wide">
                            Oferta Enviada
                        </span>
                    </div>
                </div>
            </div>

            {/* Ticket 2: Médico */}
            <div className="group animate-enter delay-200 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col">
                <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
                    <span className="text-xs font-bold uppercase tracking-widest">Paso 02</span>
                    <Stethoscope className="w-5 h-5 opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🩺</span>
                    </div>
                    <h3 className="text-lg font-brand font-black text-slate-900 mb-2">Zona de Riesgo</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                        Es el momento donde su empresa actual intenta retenerlo. <strong className="text-blue-600">Mantenete cerca.</strong>
                    </p>
                    <div className="mt-auto w-full border-t border-dashed border-slate-200 pt-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-full uppercase tracking-wide">
                            Apto Médico
                        </span>
                    </div>
                </div>
            </div>

            {/* Ticket 3: Alta */}
            <div className="group animate-enter delay-300 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col">
                <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
                    <span className="text-xs font-bold uppercase tracking-widest">Paso 03</span>
                    <UserCheck className="w-5 h-5 opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-lg font-brand font-black text-slate-900 mb-2">Pre-Onboarding</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                        No esperes al Día 1. <strong className="text-green-600">Un mensaje de WhatsApp ahora</strong> marca la diferencia.
                    </p>
                    <div className="mt-auto w-full border-t border-dashed border-slate-200 pt-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-[10px] font-bold rounded-full uppercase tracking-wide">
                            Listo para Día 1
                        </span>
                    </div>
                </div>
            </div>

         </div>

         {/* Final Action */}
         <div className="mt-8 animate-enter delay-500">
             <div className="flex items-center gap-4 px-6 py-3 bg-white/40 backdrop-blur-md border border-white rounded-full shadow-lg">
                 <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white">
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