import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileSignature, Stethoscope, UserCheck, Rocket, ArrowRight } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-8 lg:mb-12 text-center">
        <SectionHeading 
            title="LA RECTA FINAL 🚀" 
            subtitle="Todo listo para el despegue. Estos son los últimos chequeos antes de tener a la persona en el equipo."
            center
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
         
         {/* Connecting Line */}
         <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 rounded-full overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-200 to-transparent animate-pulse"></div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 w-full relative z-10">
            
            {/* Step 1: Propuesta */}
            <div className="group flex flex-col items-center text-center animate-enter delay-100">
                <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <FileSignature className="w-10 h-10 text-purple-600" />
                    </div>
                    <div className="absolute inset-0 bg-purple-100 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 lg:block hidden">
                        <ArrowRight className="w-6 h-6 text-slate-300" />
                    </div>
                </div>
                <h3 className="text-xl font-brand font-black text-slate-900 mb-2">Propuesta Formal</h3>
                <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed">
                    Análisis de equidad interna, beneficios y validación salarial.
                </p>
            </div>

            {/* Step 2: Médico */}
            <div className="group flex flex-col items-center text-center animate-enter delay-200">
                <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Stethoscope className="w-10 h-10 text-blue-500" />
                    </div>
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 lg:block hidden">
                        <ArrowRight className="w-6 h-6 text-slate-300" />
                    </div>
                </div>
                <h3 className="text-xl font-brand font-black text-slate-900 mb-2">Examen Médico</h3>
                <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed">
                    Estudios de ley obligatorios (Pre-ocupacional).
                </p>
            </div>

            {/* Step 3: Alta */}
            <div className="group flex flex-col items-center text-center animate-enter delay-300">
                <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-800 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10 text-white">
                        <UserCheck className="w-10 h-10 text-green-400" />
                    </div>
                    <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-brand font-black text-slate-900 mb-2">Alta & Ingreso</h3>
                <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed">
                    Gestión de accesos, IT y coordinación del Día 1.
                </p>
            </div>

         </div>

         {/* Call to action / Bottom Card */}
         <div className="mt-12 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white shadow-lg flex items-center gap-4 animate-enter delay-500 max-w-md">
             <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl text-white shadow-md">
                 <Rocket className="w-6 h-6" />
             </div>
             <div>
                 <p className="text-sm font-bold text-slate-800">¿Listo para despegar?</p>
                 <p className="text-xs text-slate-500">
                     Coordinamos la fecha de ingreso para asegurar que todas las herramientas estén listas.
                 </p>
             </div>
         </div>

      </div>
    </section>
  );
};