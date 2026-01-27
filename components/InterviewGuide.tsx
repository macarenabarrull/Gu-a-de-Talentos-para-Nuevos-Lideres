import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileSignature, Stethoscope, UserCheck, Plane } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-8 lg:mb-12 text-center">
        <SectionHeading 
            title="LA RECTA FINAL 🚀" 
            subtitle="Todo listo para el despegue. Últimos chequeos antes de que el talento suba a bordo."
            center
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
         
         {/* Ticket Container */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            
            {/* Ticket 1: Propuesta */}
            <div className="group animate-enter delay-100 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col">
                <div className="bg-purple-600 p-5 flex justify-between items-center text-white">
                    <span className="text-sm font-bold uppercase tracking-widest">Paso 01</span>
                    <FileSignature className="w-6 h-6 opacity-80" />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">✍️</span>
                    </div>
                    <h3 className="text-xl font-brand font-black text-slate-900 mb-3">Tu rol: Vender el proyecto</h3>
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
                        Mientras nosotros negociamos números, <strong className="text-purple-600">vos reforzá el desafío profesional</strong>.
                    </p>
                    <div className="mt-auto w-full border-t border-dashed border-slate-200 pt-6">
                        <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-800 text-xs font-bold rounded-full uppercase tracking-wide">
                            Oferta Enviada
                        </span>
                    </div>
                </div>
            </div>

            {/* Ticket 2: Médico */}
            <div className="group animate-enter delay-200 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col">
                <div className="bg-blue-600 p-5 flex justify-between items-center text-white">
                    <span className="text-sm font-bold uppercase tracking-widest">Paso 02</span>
                    <Stethoscope className="w-6 h-6 opacity-80" />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">🩺</span>
                    </div>
                    <h3 className="text-xl font-brand font-black text-slate-900 mb-3">Zona de Riesgo: Contraofertas</h3>
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
                        Es el momento donde su empresa actual intenta retenerlo. <strong className="text-blue-600">Mantenete cerca.</strong>
                    </p>
                    <div className="mt-auto w-full border-t border-dashed border-slate-200 pt-6">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wide">
                            Apto Médico
                        </span>
                    </div>
                </div>
            </div>

            {/* Ticket 3: Alta */}
            <div className="group animate-enter delay-300 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col">
                <div className="bg-slate-900 p-5 flex justify-between items-center text-white">
                    <span className="text-sm font-bold uppercase tracking-widest">Paso 03</span>
                    <UserCheck className="w-6 h-6 opacity-80" />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">✅</span>
                    </div>
                    <h3 className="text-xl font-brand font-black text-slate-900 mb-3">Pre-Onboarding</h3>
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
                        No esperes al Día 1. <strong className="text-green-600">Un mensaje de WhatsApp ahora</strong> marca la diferencia.
                    </p>
                    <div className="mt-auto w-full border-t border-dashed border-slate-200 pt-6">
                        <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wide">
                            Listo para Día 1
                        </span>
                    </div>
                </div>
            </div>

         </div>

         {/* Final Action */}
         <div className="mt-12 animate-enter delay-500">
             <div className="flex items-center gap-4 px-8 py-4 bg-white/40 backdrop-blur-md border border-white rounded-full shadow-lg">
                 <div className="p-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white">
                     <Plane className="w-5 h-5" />
                 </div>
                 <p className="text-base font-medium text-slate-700">
                     Próxima parada: <span className="font-bold text-slate-900">Onboarding</span>
                 </p>
             </div>
         </div>

      </div>
    </section>
  );
};