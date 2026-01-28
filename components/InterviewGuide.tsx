import React from 'react';
import { FileSignature, Activity, UserCheck, Plane } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6">
      
      {/* Header Area */}
      <div className="shrink-0 mb-12 text-center animate-enter">
        <h2 className="text-4xl md:text-6xl font-brand font-black text-slate-900 mb-4 tracking-tighter uppercase">
            LA RECTA FINAL 🚀
        </h2>
        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Todo listo para el despegue. Últimos chequeos antes de que el talento suba a bordo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center w-full">
            
            {/* Step 1: Vender el Proyecto */}
            <div className="animate-enter delay-100 bg-white rounded-3xl shadow-xl shadow-purple-500/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                {/* Header */}
                <div className="bg-purple-600 px-8 py-5 flex justify-between items-center text-white">
                    <span className="font-bold tracking-widest text-xs uppercase">PASO 01</span>
                    <FileSignature className="w-5 h-5 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-8 flex flex-col items-center text-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-6 text-4xl shadow-sm">
                        ✍️
                    </div>
                    <h3 className="text-xl font-brand font-bold text-slate-900 mb-4">
                        Tu rol: Vender el proyecto
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                        Mientras nosotros negociamos números, <br/>
                        <strong className="text-purple-600">vos reforzá el desafío profesional.</strong>
                    </p>
                    <div className="mt-auto">
                        <span className="px-5 py-2 bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Oferta Enviada
                        </span>
                    </div>
                </div>
            </div>

            {/* Step 2: Zona de Riesgo */}
            <div className="animate-enter delay-200 bg-white rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                {/* Header */}
                <div className="bg-blue-600 px-8 py-5 flex justify-between items-center text-white">
                    <span className="font-bold tracking-widest text-xs uppercase">PASO 02</span>
                    <Activity className="w-5 h-5 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-8 flex flex-col items-center text-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-4xl shadow-sm">
                        🩺
                    </div>
                    <h3 className="text-xl font-brand font-bold text-slate-900 mb-4">
                        Zona de Riesgo
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                        Es el momento donde su empresa actual intenta retenerlo. <strong className="text-blue-600">Mantenete cerca.</strong>
                    </p>
                    <div className="mt-auto">
                        <span className="px-5 py-2 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Apto Médico
                        </span>
                    </div>
                </div>
            </div>

            {/* Step 3: Pre-Onboarding */}
            <div className="animate-enter delay-300 bg-white rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                {/* Header */}
                <div className="bg-slate-900 px-8 py-5 flex justify-between items-center text-white">
                    <span className="font-bold tracking-widest text-xs uppercase">PASO 03</span>
                    <UserCheck className="w-5 h-5 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-8 flex flex-col items-center text-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 text-4xl shadow-sm">
                        ✅
                    </div>
                    <h3 className="text-xl font-brand font-bold text-slate-900 mb-4">
                        Pre-Onboarding
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                        No esperes al Día 1. <strong className="text-green-600">Un mensaje de WhatsApp ahora</strong> marca la diferencia.
                    </p>
                    <div className="mt-auto">
                        <span className="px-5 py-2 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Listo para día 1
                        </span>
                    </div>
                </div>
            </div>

      </div>

      {/* Footer Pill */}
      <div className="mt-16 flex justify-center animate-enter delay-500">
           <div className="bg-white pl-3 pr-8 py-3 rounded-full flex items-center gap-4 shadow-xl shadow-purple-500/10 border border-white/50 ring-1 ring-slate-100">
               <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-2.5 rounded-full text-white shadow-md">
                   <Plane className="w-4 h-4" />
               </div>
               <p className="text-slate-600 text-sm font-bold tracking-tight">
                   Próxima parada: <span className="text-slate-900 font-black">Onboarding</span>
               </p>
           </div>
      </div>
    </section>
  );
};