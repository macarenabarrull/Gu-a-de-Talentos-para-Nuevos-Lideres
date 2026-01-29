import React from 'react';
import { FileSignature, ShieldAlert, MessageSquare, Briefcase, ArrowRight } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 py-4">
      
      {/* Header Area */}
      <div className="shrink-0 mb-6 text-center animate-enter">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-brand font-black text-slate-900 mb-2 tracking-tight uppercase leading-tight">
            GESTIÓN DE LA <br className="md:hidden" /> PROPUESTA
        </h2>
        <p className="text-slate-500 font-medium text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            Esta etapa es crítica. El rol del líder pasa de evaluador a <strong className="text-slate-900">embajador de la propuesta de valor.</strong>
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-stretch justify-center w-full pb-2">
            
            {/* Step 1: Articulación */}
            <div className="animate-enter delay-100 bg-white rounded-3xl shadow-xl shadow-purple-500/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100 h-full">
                {/* Header */}
                <div className="bg-purple-600 px-6 py-4 flex justify-between items-center text-white shrink-0">
                    <span className="font-bold tracking-widest text-[10px] uppercase">DIMENSIÓN 01</span>
                    <Briefcase className="w-4 h-4 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col items-center text-center flex-1 justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4 shadow-sm border border-purple-100 group-hover:scale-110 transition-transform">
                        <span className="text-3xl emoji-3d">🤝</span>
                    </div>
                    <h3 className="text-lg font-brand font-bold text-slate-900 mb-2 uppercase">
                        LA PROPUESTA
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-4">
                        No comunicamos solo una remuneración. Presentamos un ecosistema de desarrollo. <strong className="text-purple-600">Vos validás el "por qué fyo".</strong>
                    </p>
                    <div className="mt-auto">
                        <span className="px-4 py-1.5 bg-purple-50 text-purple-700 border border-purple-100 text-[9px] font-bold uppercase tracking-widest rounded-full">
                            Propuesta de Valor
                        </span>
                    </div>
                </div>
            </div>

            {/* Step 2: Riesgo / Renuncia */}
            <div className="animate-enter delay-200 bg-white rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100 h-full">
                {/* Header */}
                <div className="bg-blue-600 px-6 py-4 flex justify-between items-center text-white shrink-0">
                    <span className="font-bold tracking-widest text-[10px] uppercase">DIMENSIÓN 02</span>
                    <ShieldAlert className="w-4 h-4 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col items-center text-center flex-1 justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                         <span className="text-3xl emoji-3d">🛡️</span>
                    </div>
                    <h3 className="text-lg font-brand font-bold text-slate-900 mb-2 uppercase">
                        GESTIÓN DE LA RENUNCIA
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-4">
                        El candidato podría recibir una contraoferta. Tu cercanía es una herramienta para <strong className="text-blue-600">ratificar su decisión.</strong>
                    </p>
                    <div className="mt-auto">
                        <span className="px-4 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold uppercase tracking-widest rounded-full">
                            Mitigación de Riesgos
                        </span>
                    </div>
                </div>
            </div>

            {/* Step 3: Vínculo */}
            <div className="animate-enter delay-300 bg-white rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100 h-full">
                {/* Header */}
                <div className="bg-slate-900 px-6 py-4 flex justify-between items-center text-white shrink-0">
                    <span className="font-bold tracking-widest text-[10px] uppercase">DIMENSIÓN 03</span>
                    <MessageSquare className="w-4 h-4 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col items-center text-center flex-1 justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
                         <span className="text-3xl emoji-3d">💬</span>
                    </div>
                    <h3 className="text-lg font-brand font-bold text-slate-900 mb-2">
                        Mantenimiento del Vínculo
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-4">
                        El silencio genera incertidumbre. <strong className="text-emerald-600">Un mensaje de bienvenida</strong> reduce ansiedad.
                    </p>
                    <div className="mt-auto">
                        <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-bold uppercase tracking-widest rounded-full">
                            Fidelización Previa
                        </span>
                    </div>
                </div>
            </div>

      </div>

      {/* Footer Pill */}
      <div className="mt-6 flex justify-center animate-enter delay-500 shrink-0">
           <div className="bg-white pl-3 pr-8 py-2 rounded-full flex items-center gap-4 shadow-xl shadow-purple-500/10 border border-white/50 ring-1 ring-slate-100">
               <div className="bg-gradient-to-tr from-slate-700 to-slate-900 p-2 rounded-full text-white shadow-md">
                   <FileSignature className="w-3 h-3" />
               </div>
               <p className="text-slate-600 text-xs font-bold tracking-tight">
                   Siguiente paso crítico: <span className="text-slate-900 font-black">Onboarding Efectivo</span>
               </p>
           </div>
      </div>
    </section>
  );
};