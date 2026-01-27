import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ClipboardList, PlayCircle, AlertTriangle } from 'lucide-react';

export const DefinitionPhase: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-5">
          <SectionHeading 
            title="¿Qué necesitamos? 🧐" 
            subtitle="Un buen proceso nace de una buena definición. Antes de publicar, validamos el diagnóstico."
          />
          
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-purple-900/5 mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3 text-xl relative z-10">
              <span className="text-2xl">📋</span>
              Checklist del Líder
            </h4>
            <ul className="space-y-5 relative z-10">
              {[
                "¿Tengo el presupuesto aprobado? 💰",
                "¿Está clara la misión del puesto? 🎯",
                "¿Definí las competencias críticas? 🧠",
                "¿Es reemplazo o posición nueva? 🆕"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-100 bg-purple-50 flex items-center justify-center shrink-0 text-purple-600">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-7 space-y-5">
          <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex items-start gap-6 relative">
            <div className="absolute right-8 top-8 opacity-20 text-4xl group-hover:opacity-100 group-hover:scale-110 transition-all">✨</div>
            <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 shrink-0">
              <PlayCircle className="w-8 h-8" />
            </div>
            <div>
               <div className="flex justify-between items-center mb-2">
                 <h4 className="text-xl font-bold text-slate-900">Nueva Incorporación</h4>
               </div>
               <span className="inline-block text-[10px] font-bold uppercase bg-green-100 text-green-700 px-3 py-1 rounded-full mb-2">✅ Budget OK</span>
               <p className="text-slate-500">El proceso se dispara automáticamente con tu validación. Es el camino feliz.</p>
            </div>
          </div>

          <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex items-start gap-6 relative">
             <div className="absolute right-8 top-8 opacity-20 text-4xl group-hover:opacity-100 group-hover:scale-110 transition-all">🔄</div>
             <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shrink-0">
              <PlayCircle className="w-8 h-8" />
            </div>
            <div>
               <div className="flex justify-between items-center mb-2">
                 <h4 className="text-xl font-bold text-slate-900">Reemplazo</h4>
               </div>
               <span className="inline-block text-[10px] font-bold uppercase bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-2">⚡ Rotación</span>
               <p className="text-slate-500">Ideal para actualizar la JD. ¿El rol evolucionó? Es el momento de cambiar.</p>
            </div>
          </div>

          <div className="group p-8 rounded-[2rem] bg-slate-50 border border-dashed border-slate-300 hover:border-pink-400 hover:bg-white transition-all duration-300 flex items-start gap-6 opacity-75 hover:opacity-100 hover:shadow-xl">
             <div className="absolute right-8 top-8 opacity-20 text-4xl group-hover:opacity-100 group-hover:scale-110 transition-all">⚠️</div>
             <div className="p-4 bg-pink-50 rounded-2xl text-pink-600 shrink-0">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
               <div className="flex justify-between items-center mb-2">
                 <h4 className="text-xl font-bold text-slate-900">Fuera de Budget</h4>
               </div>
               <span className="inline-block text-[10px] font-bold uppercase bg-pink-100 text-pink-700 px-3 py-1 rounded-full mb-2">🔐 Approval</span>
               <p className="text-slate-500">Casos excepcionales. Requiere aprobación de Dirección y RRHH antes de iniciar.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};