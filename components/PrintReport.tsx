import React from 'react';
import { 
  PROCESS_STEPS, 
  TIMING_STATS, 
  SOURCING_CHANNELS, 
  EVALUATION_MATRIX, 
  ONBOARDING_TIPS 
} from '../constants';

export const PrintReport: React.FC = () => {
  return (
    <div className="print-only w-[210mm] min-h-[297mm] mx-auto bg-white p-[10mm] text-slate-900 font-sans text-xs leading-normal">
      
      {/* HEADER */}
      <div className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-6">
        <div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Guía para Líderes</p>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight uppercase">REPORTE DE PROCESO</h1>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-black text-slate-900 uppercase leading-none tracking-tighter">SELECCIÓN</h2>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Talentos 2026 | fyo</p>
        </div>
      </div>

      {/* 1. ROADMAP DEL PROCESO */}
      <div className="mb-6 break-inside-avoid">
        <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">1.</span> ROADMAP DEL PROCESO
        </h3>
        <table className="w-full text-[10px] text-left border-collapse">
          <thead className="bg-slate-100 text-slate-900 uppercase font-bold border-b border-slate-300">
            <tr>
              <th className="p-1.5 w-16 border-r border-slate-200">Fase</th>
              <th className="p-1.5 w-24 border-r border-slate-200">Etapa</th>
              <th className="p-1.5">Descripción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {PROCESS_STEPS.map((step, i) => (
                <tr key={step.id} className={i % 2 !== 0 ? 'bg-slate-50' : ''}>
                    <td className="p-1.5 font-bold border-r border-slate-200">{step.phase}</td>
                    <td className="p-1.5 font-medium border-r border-slate-200">{step.title}</td>
                    <td className="p-1.5 text-slate-600">{step.description}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        
        {/* 2. TIPOS DE BÚSQUEDA */}
        <div className="break-inside-avoid">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
            <span className="text-slate-400 mr-1">2.</span> ORIGEN DE LA VACANTE
            </h3>
            <div className="space-y-2">
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                    <h4 className="font-bold text-[10px] text-slate-900 uppercase">Nueva Incorporación</h4>
                    <p className="text-[9px] text-slate-600">Vacante presupuestada en el plan anual.</p>
                </div>
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                    <h4 className="font-bold text-[10px] text-slate-900 uppercase">Reemplazo</h4>
                    <p className="text-[9px] text-slate-600">Reposición por renuncia o desvinculación.</p>
                </div>
                <div className="border border-slate-200 p-2 rounded bg-slate-50">
                    <h4 className="font-bold text-[10px] text-slate-900 uppercase">Fuera de Presupuesto</h4>
                    <p className="text-[9px] text-slate-600">Nueva necesidad. Requiere aprobación especial.</p>
                </div>
            </div>
        </div>

        {/* 3. TIEMPOS ESTIMADOS (SLA) */}
        <div className="break-inside-avoid">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
            <span className="text-slate-400 mr-1">3.</span> TIEMPOS ESTIMADOS (SLA)
            </h3>
            <table className="w-full text-[10px] text-left border-collapse border border-slate-200">
                <thead className="bg-slate-100 font-bold">
                    <tr>
                        <th className="p-1.5 border-b border-r border-slate-200">Seniority</th>
                        <th className="p-1.5 border-b border-slate-200">Días Estimados</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    {TIMING_STATS.map((stat, i) => (
                        <tr key={i}>
                            <td className="p-1.5 font-medium border-r border-slate-200">{stat.role}</td>
                            <td className="p-1.5 text-slate-600">{stat.range}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      {/* 4. ESTRATEGIA DE ATRACCIÓN */}
      <div className="mb-6 break-inside-avoid">
        <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">4.</span> CANALES Y EVALUACIÓN
        </h3>
        <div className="grid grid-cols-2 gap-4">
             <div>
                <h4 className="font-bold text-[10px] text-slate-900 mb-2 uppercase tracking-wide bg-slate-100 inline-block px-1">Fuentes de Reclutamiento</h4>
                <ul className="list-disc list-inside text-[9px] text-slate-700 space-y-1">
                    {SOURCING_CHANNELS.map((c, i) => (
                        <li key={i}><span className="font-bold">{c.title}:</span> {c.description}</li>
                    ))}
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-[10px] text-slate-900 mb-2 uppercase tracking-wide bg-slate-100 inline-block px-1">Matriz de Evaluación</h4>
                <table className="w-full text-[9px] border-collapse border border-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="p-1 border border-slate-200">Rol</th>
                            <th className="p-1 border border-slate-200">Método</th>
                            <th className="p-1 border border-slate-200">Foco</th>
                        </tr>
                    </thead>
                    <tbody>
                        {EVALUATION_MATRIX.map((m, i) => (
                            <tr key={i}>
                                <td className="p-1 border border-slate-200 font-medium">{m.role}</td>
                                <td className="p-1 border border-slate-200">{m.method}</td>
                                <td className="p-1 border border-slate-200 text-slate-500">{m.focus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
      </div>

      {/* 5. ONBOARDING & TIPS */}
      <div className="mb-6 break-inside-avoid">
         <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">5.</span> CLAVES DEL ONBOARDING
        </h3>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="border border-slate-200 p-2 rounded">
                <h5 className="font-bold text-[10px] uppercase mb-1 text-slate-900">Antes del Ingreso</h5>
                <ul className="text-[9px] text-slate-600 list-disc list-inside">
                    <li>Asegurar notebook y accesos.</li>
                    <li>Preparar ficha de inducción.</li>
                    <li>Comunicar al equipo.</li>
                </ul>
            </div>
            <div className="border border-slate-200 p-2 rounded">
                <h5 className="font-bold text-[10px] uppercase mb-1 text-slate-900">Primer Día</h5>
                <ul className="text-[9px] text-slate-600 list-disc list-inside">
                    <li>Bienvenida cálida.</li>
                    <li>Almuerzo de equipo.</li>
                    <li>Cierre: "¿Cómo te sentiste?".</li>
                </ul>
            </div>
            <div className="border border-slate-200 p-2 rounded">
                <h5 className="font-bold text-[10px] uppercase mb-1 text-slate-900">Primer Mes</h5>
                <ul className="text-[9px] text-slate-600 list-disc list-inside">
                    <li>Asignar un "Buddy" o aliado.</li>
                    <li>Seguimiento semanal.</li>
                    <li>Feedback de prueba.</li>
                </ul>
            </div>
        </div>

        <div className="bg-slate-50 p-3 rounded border border-slate-200">
            <h4 className="font-bold text-[10px] text-slate-900 mb-2 uppercase tracking-wide">Tips para el Líder</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] text-slate-700">
                {ONBOARDING_TIPS.map((tip, i) => (
                    <div key={i} className="flex gap-1">
                        <span className="font-bold text-slate-900">• {tip.title}:</span>
                        <span className="text-slate-500">{tip.description}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto pt-2 border-t-2 border-slate-900 flex justify-between items-center text-[8px] text-slate-500">
         <div>
             <span className="font-bold text-slate-900 uppercase">CONTACTO:</span> mbarrull@fyo.com • Talento y Cultura
         </div>
         <div className="italic">Material confidencial para uso interno de líderes fyo.</div>
      </div>

    </div>
  );
};