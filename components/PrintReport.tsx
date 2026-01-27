import React from 'react';
import { 
  PROCESS_STEPS, 
  TIMING_STATS, 
  SOURCING_CHANNELS, 
  ONBOARDING_TIPS 
} from '../constants';

export const PrintReport: React.FC = () => {
  return (
    <div className="print-only w-[210mm] min-h-[297mm] mx-auto bg-white p-[10mm] text-slate-900 font-sans text-xs leading-normal">
      
      {/* HEADER */}
      <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8">
        <div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Guía Estratégica para Líderes</p>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">MANUAL DE SELECCIÓN</h1>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-black text-slate-200 uppercase leading-none tracking-tighter">fyo</h2>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Talento y Cultura</p>
        </div>
      </div>

      {/* INTRODUCCIÓN NARRATIVA */}
      <div className="mb-8 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-900">
        <h3 className="font-bold text-sm text-slate-900 mb-2">Tu Rol en la Construcción de Equipos</h3>
        <p className="text-[10px] text-slate-700 leading-relaxed text-justify">
          La selección de talento no es una tarea administrativa de RRHH, es una decisión estratégica de negocio. 
          Como líder, tu responsabilidad es definir con claridad qué necesita el equipo (más allá de la descripción técnica), 
          participar activamente en la evaluación para detectar el fit cultural y garantizar un aterrizaje (onboarding) 
          que asegure la retención. Este documento resume los pasos, tiempos y acciones clave para que tu gestión sea exitosa.
        </p>
      </div>

      {/* 1. ROADMAP DEL PROCESO */}
      <div className="mb-8 break-inside-avoid">
        <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-4 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">1.</span> FLUJO DEL PROCESO
        </h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {PROCESS_STEPS.map((step) => (
                <div key={step.id} className="flex gap-3 items-start border-b border-slate-100 pb-2">
                    <div className="w-5 h-5 rounded bg-slate-100 text-slate-900 font-bold text-[10px] flex items-center justify-center shrink-0">
                        {step.id}
                    </div>
                    <div>
                        <h4 className="font-bold text-[10px] uppercase text-slate-900">{step.title}</h4>
                        <p className="text-[9px] text-slate-600">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        
        {/* 2. TIPOS DE BÚSQUEDA */}
        <div className="break-inside-avoid">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
            <span className="text-slate-400 mr-1">2.</span> ESTRATEGIA DE ORIGEN
            </h3>
            <p className="text-[9px] text-slate-600 mb-3 text-justify">
                Entender el origen de la vacante define la urgencia y el proceso de aprobación. 
                No es lo mismo planificar un crecimiento anual que cubrir un reemplazo imprevisto.
            </p>
            <div className="space-y-2">
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                    <h4 className="font-bold text-[10px] text-slate-900 uppercase">Nueva Incorporación</h4>
                    <p className="text-[9px] text-slate-600">Vacante presupuestada. Inicio inmediato.</p>
                </div>
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                    <h4 className="font-bold text-[10px] text-slate-900 uppercase">Reemplazo</h4>
                    <p className="text-[9px] text-slate-600">Reposición por baja. Requiere agilidad.</p>
                </div>
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                    <h4 className="font-bold text-[10px] text-slate-900 uppercase">Fuera de Presupuesto</h4>
                    <p className="text-[9px] text-slate-600">Requiere aprobación del Comité.</p>
                </div>
            </div>
        </div>

        {/* 3. TIEMPOS ESTIMADOS (SLA) */}
        <div className="break-inside-avoid">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
            <span className="text-slate-400 mr-1">3.</span> TIEMPOS DE MERCADO (SLA)
            </h3>
            <p className="text-[9px] text-slate-600 mb-3 text-justify">
                Los tiempos incluyen: Relevamiento, Hunting, Entrevistas y Proceso de Ingreso.
                Tu velocidad de respuesta al dar feedback sobre candidatos impacta directamente en estos números.
            </p>
            <table className="w-full text-[10px] text-left border-collapse border border-slate-200">
                <thead className="bg-slate-100 font-bold">
                    <tr>
                        <th className="p-2 border-b border-r border-slate-200">Seniority</th>
                        <th className="p-2 border-b border-slate-200">Promedio</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    {TIMING_STATS.map((stat, i) => (
                        <tr key={i}>
                            <td className="p-2 font-medium border-r border-slate-200">{stat.role}</td>
                            <td className="p-2 text-slate-600">{stat.range}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      {/* 4. ATRACCIÓN */}
      <div className="mb-8 break-inside-avoid">
        <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">4.</span> ECOSYSTEMA DE ATRACCIÓN
        </h3>
        <p className="text-[9px] text-slate-600 mb-4 text-justify">
            No dependemos de un solo canal. Nuestra estrategia es 360º para asegurar que llegamos al mejor talento pasivo y activo del mercado.
            Como líder, tu red de contactos es el canal más potente (Referidos).
        </p>
        <div className="grid grid-cols-4 gap-2">
            {SOURCING_CHANNELS.map((c, i) => (
                <div key={i} className="border border-slate-200 p-2 rounded text-center">
                    <h4 className="font-bold text-[9px] text-slate-900 uppercase mb-1">{c.title}</h4>
                    <p className="text-[8px] text-slate-500">{c.percentage}</p>
                </div>
            ))}
        </div>
      </div>

      {/* 5. ONBOARDING & TIPS */}
      <div className="mb-8 break-inside-avoid">
         <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">5.</span> EXPERIENCIA DE INGRESO
        </h3>
        <p className="text-[9px] text-slate-600 mb-4 text-justify">
            El 70% de la percepción del colaborador sobre la empresa se forma en la primera semana. 
            El "Onboarding" no es entregar una notebook, es integrar a la persona a la cultura.
        </p>
        
        <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <h4 className="font-bold text-[10px] text-slate-900 mb-3 uppercase tracking-wide">Checklist de Acciones del Líder</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[9px] text-slate-700">
                {ONBOARDING_TIPS.map((tip, i) => (
                    <div key={i} className="flex gap-2 items-start">
                        <span className="font-bold text-slate-400 mt-px">•</span>
                        <div>
                            <span className="font-bold text-slate-900">{tip.title}:</span> {tip.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto pt-4 border-t-2 border-slate-900 flex justify-between items-center text-[8px] text-slate-500">
         <div>
             <span className="font-bold text-slate-900 uppercase">Talento y Cultura fyo</span>
         </div>
         <div className="italic">Documento confidencial de uso interno.</div>
      </div>

    </div>
  );
};