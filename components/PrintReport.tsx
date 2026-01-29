import React from 'react';
import { 
  PROCESS_STEPS, 
  TIMING_STATS, 
  SOURCING_CHANNELS, 
  ONBOARDING_TIPS 
} from '../constants';
import { Square, CheckSquare } from 'lucide-react';

export const PrintReport: React.FC = () => {
  return (
    <div className="print-only w-[210mm] min-h-[297mm] mx-auto bg-white p-[10mm] text-slate-900 font-sans text-xs leading-normal flex flex-col">
      
      {/* HEADER */}
      <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8">
        <div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Guía Estratégica para Líderes</p>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">CROQUIS DEL PROCESO DE SELECCIÓN</h1>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-black text-slate-200 uppercase leading-none tracking-tighter">fyo</h2>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Talento y Cultura</p>
        </div>
      </div>

      {/* 1. MAPA DEL PROCESO */}
      <div className="mb-8 break-inside-avoid">
        <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-4 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">1.</span> HOJA DE RUTA (ETAPAS)
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
        {/* 2. TIEMPOS ESTIMADOS (SLA) */}
        <div className="break-inside-avoid">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
            <span className="text-slate-400 mr-1">2.</span> TIEMPOS DE MERCADO
            </h3>
            <table className="w-full text-[10px] text-left border-collapse border border-slate-200">
                <thead className="bg-slate-100 font-bold">
                    <tr>
                        <th className="p-2 border-b border-r border-slate-200">Seniority</th>
                        <th className="p-2 border-b border-slate-200">Promedio (Días)</th>
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
            <p className="text-[8px] text-slate-400 mt-2 italic">
                *Tiempos estimados asumiendo feedback continuo y proceso ágil.
            </p>
        </div>

        {/* 3. ATRACCIÓN */}
        <div className="break-inside-avoid">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
            <span className="text-slate-400 mr-1">3.</span> FUENTES DE RECLUTAMIENTO
            </h3>
            <ul className="space-y-2">
                {SOURCING_CHANNELS.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-[9px]">
                        <CheckSquare className="w-3 h-3 text-slate-300 mt-px shrink-0" />
                        <div>
                            <strong className="text-slate-900 uppercase">{c.title}:</strong> <span className="text-slate-600">{c.description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>

      {/* 4. GESTIÓN DE LA PROPUESTA (SLIDE 8 DETAIL) */}
      <div className="mb-8 break-inside-avoid bg-slate-50 p-4 rounded-xl border border-slate-200">
         <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-2">
           <span className="text-slate-400 mr-1">4.</span> GESTIÓN DE LA PROPUESTA (LAS 3 DIMENSIONES)
        </h3>
        <p className="text-[9px] text-slate-500 mb-4 italic">El líder pasa de evaluador a embajador de la propuesta de valor.</p>
        
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded border border-slate-200">
                <h4 className="font-bold text-[10px] text-purple-700 uppercase mb-1">Dimensión 01: La Propuesta</h4>
                <p className="text-[9px] text-slate-700 leading-tight">
                    No comunicamos solo remuneración. Presentamos un ecosistema de desarrollo. Vos validás el "por qué fyo".
                </p>
            </div>
            <div className="bg-white p-3 rounded border border-slate-200">
                <h4 className="font-bold text-[10px] text-blue-700 uppercase mb-1">Dimensión 02: Gestión Renuncia</h4>
                <p className="text-[9px] text-slate-700 leading-tight">
                    El candidato podría recibir contraoferta. Tu cercanía es clave para ratificar su decisión de cambio.
                </p>
            </div>
            <div className="bg-white p-3 rounded border border-slate-200">
                <h4 className="font-bold text-[10px] text-emerald-700 uppercase mb-1">Dimensión 03: Vínculo</h4>
                <p className="text-[9px] text-slate-700 leading-tight">
                    El silencio genera incertidumbre. Un mensaje de bienvenida la semana previa reduce ansiedad.
                </p>
            </div>
        </div>
      </div>

      {/* 5. ONBOARDING TIPS (SLIDE 9 DETAIL) */}
      <div className="mb-8 break-inside-avoid">
         <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
           <span className="text-slate-400 mr-1">5.</span> 1ER DÍA FYO: MOMENTO DE LA VERDAD
        </h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {ONBOARDING_TIPS.map((tip, i) => (
                <div key={i} className="flex gap-2 items-start text-[9px]">
                    <div className="font-bold text-slate-900 min-w-[70px] uppercase">{tip.title}</div>
                    <div className="text-slate-600 border-l border-slate-200 pl-2">
                        <p className="mb-1">{tip.description}</p>
                        {tip.leaderTip && <p className="font-bold text-slate-800 bg-slate-100 inline-block px-1">Tip: {tip.leaderTip}</p>}
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      {/* 6. PERIODO DE PRUEBA */}
      <div className="mt-auto mb-6 break-inside-avoid p-4 border border-purple-200 bg-purple-50 rounded-lg flex items-center justify-between">
           <div>
               <h4 className="font-bold text-[10px] text-purple-900 uppercase">Recordatorio Crítico: Período de Prueba</h4>
               <p className="text-[9px] text-purple-700">Un mes antes de finalizar, Talento te contactará para validar la continuidad.</p>
           </div>
           <div className="text-[10px] font-bold bg-white text-purple-700 px-3 py-1 rounded border border-purple-100">
               Agendar Feedback
           </div>
      </div>

      {/* FOOTER */}
      <div className="pt-4 border-t-2 border-slate-900 flex justify-between items-center text-[8px] text-slate-500">
         <div>
             <span className="font-bold text-slate-900 uppercase">Talento y Cultura fyo</span>
         </div>
         <div className="italic">Documento confidencial de uso interno.</div>
      </div>

    </div>
  );
};