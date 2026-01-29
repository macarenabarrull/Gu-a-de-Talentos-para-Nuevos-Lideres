import React from 'react';
import { FileSignature, ShieldAlert, MessageSquare, Briefcase, ArrowRight } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6">
      
      {/* Header Area */}
      <div className="shrink-0 mb-12 text-center animate-enter">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-brand font-black text-slate-900 mb-6 tracking-tight uppercase leading-tight">
            GESTIÓN DE LA <br className="md:hidden" /> PROPUESTA Y CIERRE
        </h2>
        <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
            Esta etapa es crítica para asegurar la incorporación. El rol del líder pasa de evaluador a <strong className="text-slate-900">embajador de la propuesta de valor.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center w-full">
            
            {/* Step 1: Articulación */}
            <div className="animate-enter delay-100 bg-white rounded-3xl shadow-xl shadow-purple-500/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                {/* Header */}
                <div className="bg-purple-600 px-8 py-5 flex justify-between items-center text-white">
                    <span className="font-bold tracking-widest text-xs uppercase">DIMENSIÓN 01</span>
                    <Briefcase className="w-5 h-5 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-8 flex flex-col items-center text-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-6 shadow-sm border border-purple-100 group-hover:scale-110 transition-transform">
                        <span className="text-4xl emoji-3d">🤝</span>
                    </div>
                    <h3 className="text-xl font-brand font-bold text-slate-900 mb-4 uppercase">
                        LA PROPUESTA
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                        No comunicamos solo una remuneración. Presentamos un ecosistema de desarrollo, beneficios y desafíos. <br/><strong className="text-purple-600">Vos validás el "por qué fyo".</strong>
                    </p>
                    <div className="mt-auto">
                        <span className="px-5 py-2 bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Propuesta de Valor
                        </span>
                    </div>
                </div>
            </div>

            {/* Step 2: Riesgo / Renuncia */}
            <div className="animate-enter delay-200 bg-white rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                {/* Header */}
                <div className="bg-blue-600 px-8 py-5 flex justify-between items-center text-white">
                    <span className="font-bold tracking-widest text-xs uppercase">DIMENSIÓN 02</span>
                    <ShieldAlert className="w-5 h-5 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-8 flex flex-col items-center text-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                         <span className="text-4xl emoji-3d">🛡️</span>
                    </div>
                    <h3 className="text-xl font-brand font-bold text-slate-900 mb-4 uppercase">
                        GESTIÓN DE LA RENUNCIA
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                        El candidato podría recibir una contraoferta. Tu cercanía y disponibilidad también es una herramienta para <strong className="text-blue-600">ratificar su decisión de cambio.</strong>
                    </p>
                    <div className="mt-auto">
                        <span className="px-5 py-2 bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Mitigación de Riesgos
                        </span>
                    </div>
                </div>
            </div>

            {/* Step 3: Vínculo */}
            <div className="animate-enter delay-300 bg-white rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                {/* Header */}
                <div className="bg-slate-900 px-8 py-5 flex justify-between items-center text-white">
                    <span className="font-bold tracking-widest text-xs uppercase">DIMENSIÓN 03</span>
                    <MessageSquare className="w-5 h-5 opacity-90" />
                </div>
                {/* Body */}
                <div className="p-8 flex flex-col items-center text-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
                         <span className="text-4xl emoji-3d">💬</span>
                    </div>
                    <h3 className="text-xl font-brand font-bold text-slate-900 mb-4">
                        Mantenimiento del Vínculo
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                        El silencio entre la firma y el ingreso genera incertidumbre. <strong className="text-emerald-600">Un mensaje de bienvenida</strong> la semana previa a su ingreso reduce ansiedad. También gestiona sus reuniones y almuerzo.
                    </p>
                    <div className="mt-auto">
                        <span className="px-5 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Fidelización Previa
                        </span>
                    </div>
                </div>
            </div>

      </div>

      {/* Footer Pill */}
      <div className="mt-16 flex justify-center animate-enter delay-500">
           <div className="bg-white pl-3 pr-8 py-3 rounded-full flex items-center gap-4 shadow-xl shadow-purple-500/10 border border-white/50 ring-1 ring-slate-100">
               <div className="bg-gradient-to-tr from-slate-700 to-slate-900 p-2.5 rounded-full text-white shadow-md">
                   <FileSignature className="w-4 h-4" />
               </div>
               <p className="text-slate-600 text-sm font-bold tracking-tight">
                   Siguiente paso crítico: <span className="text-slate-900 font-black">Onboarding Efectivo</span>
               </p>
           </div>
      </div>
    </section>
  );
};