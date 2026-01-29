import React from 'react';
import { 
  PROCESS_STEPS, 
  TIMING_STATS, 
  SOURCING_CHANNELS, 
  ONBOARDING_TIPS,
  EVALUATION_MATRIX,
  ALL_ONBOARDING_TASKS,
  ONBOARDING_KANBAN_STRUCTURE
} from '../constants';
import { Square, CheckSquare, Scissors } from 'lucide-react';

export const PrintReport: React.FC = () => {
  return (
    <div className="print-only w-[210mm] mx-auto bg-white text-slate-900 font-sans text-xs leading-normal flex flex-col">
      
      {/* ================= PAGE 1: STRATEGY & DEFINITION ================= */}
      <div className="min-h-[297mm] p-[10mm] relative flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8">
            <div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Manual de Bolsillo para Líderes</p>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">GUÍA INTEGRAL DE SELECCIÓN</h1>
            </div>
            <div className="text-right">
            <h2 className="text-4xl font-black text-slate-200 uppercase leading-none tracking-tighter">fyo</h2>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Talento y Cultura</p>
            </div>
        </div>

        {/* 1. CONTEXTO (StrategicImpact) */}
        <div className="mb-8">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
                <span className="text-slate-400 mr-1">01.</span> CONTEXTO: ¿CUÁNDO INICIAMOS?
            </h3>
            <p className="mb-3 text-[10px] text-slate-600 italic">El origen de la búsqueda define la estrategia. Toda búsqueda requiere validación interna previa.</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <strong className="block text-slate-900 uppercase text-[9px] mb-1">🌱 Nueva Incorporación</strong>
                    <p className="text-[9px] text-slate-600">Vacante presupuestada en el plan anual. Crecimiento planificado.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <strong className="block text-slate-900 uppercase text-[9px] mb-1">🔄 Reemplazo</strong>
                    <p className="text-[9px] text-slate-600">Salida de un colaborador. Oportunidad para repensar el rol.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <strong className="block text-slate-900 uppercase text-[9px] mb-1">🚨 Fuera de Presupuesto</strong>
                    <p className="text-[9px] text-slate-600">Nueva necesidad no contemplada. Requiere aprobación de Dirección.</p>
                </div>
            </div>
        </div>

        {/* 2. DEFINICIÓN (DefinitionPhase) */}
        <div className="mb-8">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
                <span className="text-slate-400 mr-1">02.</span> DEFINICIÓN: ESTRATEGIA SILLA VACÍA
            </h3>
            <div className="flex gap-6">
                <div className="w-1/3 bg-purple-50 p-4 rounded border border-purple-100">
                    <h4 className="font-bold text-purple-900 text-[10px] uppercase mb-2">Preguntas Clave</h4>
                    <ul className="list-disc list-inside text-[9px] text-purple-800 space-y-1">
                        <li>¿Qué valor agrega al equipo?</li>
                        <li>¿Cómo complementa skills?</li>
                        <li>¿Qué necesitamos HOY?</li>
                    </ul>
                </div>
                <div className="w-2/3">
                    <div className="mb-3">
                        <strong className="text-slate-900 text-[10px] uppercase block mb-1">Paso 1: Validación</strong>
                        <p className="text-[9px] text-slate-600">Revisión integral de la necesidad real. Definición de perfil Técnico + Actitudinal (Fit Cultural).</p>
                    </div>
                    <div>
                        <strong className="text-slate-900 text-[10px] uppercase block mb-1">Paso 2: Publicación</strong>
                        <p className="text-[9px] text-slate-600">Redacción y publicación del aviso alineado 100% a las necesidades detectadas en la validación.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. MAPA DEL PROCESO (ProcessTimeline) */}
        <div className="mb-0">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
            <span className="text-slate-400 mr-1">03.</span> HOJA DE RUTA (ETAPAS)
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {PROCESS_STEPS.map((step) => (
                    <div key={step.id} className="flex gap-3 items-start border-b border-slate-100 pb-2 last:border-0">
                        <div className="w-4 h-4 rounded bg-slate-900 text-white font-bold text-[8px] flex items-center justify-center shrink-0 mt-0.5">
                            {step.id}
                        </div>
                        <div>
                            <h4 className="font-bold text-[9px] uppercase text-slate-900">{step.title}</h4>
                            <p className="text-[8px] text-slate-600 leading-tight">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Footer Page 1 */}
        <div className="mt-auto pt-4 border-t border-slate-200 flex justify-between text-[8px] text-slate-400">
             <span>Guía Integral de Selección - Página 1/3</span>
             <span>fyo Talento y Cultura</span>
        </div>
      </div>

      <div className="break-after-page"></div>

      {/* ================= PAGE 2: EXECUTION & TACTICS ================= */}
      <div className="min-h-[297mm] p-[10mm] relative flex flex-col">
         {/* HEADER SMALL */}
         <div className="flex justify-between items-end border-b border-slate-200 pb-2 mb-6 text-slate-400">
            <span className="uppercase font-bold text-[9px]">Manual de Bolsillo para Líderes</span>
            <span className="uppercase font-bold text-[9px]">Continuación</span>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
            {/* 4. TIEMPOS ESTIMADOS */}
            <div>
                <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
                <span className="text-slate-400 mr-1">04.</span> TIEMPOS (SLA)
                </h3>
                <table className="w-full text-[9px] text-left border-collapse border border-slate-200">
                    <thead className="bg-slate-100 font-bold">
                        <tr><th className="p-1.5 border-b border-r border-slate-200">Rol</th><th className="p-1.5 border-b border-slate-200">Días</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {TIMING_STATS.map((stat, i) => (
                            <tr key={i}><td className="p-1.5 border-r border-slate-200">{stat.role}</td><td className="p-1.5">{stat.range}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 5. FUENTES */}
            <div>
                <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
                <span className="text-slate-400 mr-1">05.</span> ATRACCIÓN 360°
                </h3>
                <ul className="space-y-1.5">
                    {SOURCING_CHANNELS.map((c, i) => (
                        <li key={i} className="text-[9px]">
                            <strong className="text-slate-900 uppercase block">{c.title}</strong>
                            <span className="text-slate-500">{c.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* 6. EVALUACIÓN (SourcingStrategy) */}
        <div className="mb-6 bg-slate-50 p-3 rounded border border-slate-200">
             <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
                <span className="text-slate-400 mr-1">06.</span> MATRIZ DE EVALUACIÓN
            </h3>
            <div className="grid grid-cols-3 gap-4">
                {EVALUATION_MATRIX.map((item, idx) => (
                    <div key={idx} className="bg-white p-2 rounded border border-slate-100">
                        <strong className="block text-[9px] text-purple-800 uppercase mb-1">{item.role}</strong>
                        <div className="mb-1"><span className="text-[8px] text-slate-400 uppercase font-bold">Método:</span> <span className="text-[9px] font-medium">{item.method}</span></div>
                        <div><span className="text-[8px] text-slate-400 uppercase font-bold">Foco:</span> <span className="text-[9px] font-medium">{item.focus}</span></div>
                    </div>
                ))}
            </div>
        </div>

        {/* 7. PROPUESTA (InterviewGuide) */}
        <div className="mb-6">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
                <span className="text-slate-400 mr-1">07.</span> CIERRE Y PROPUESTA
            </h3>
            <div className="grid grid-cols-3 gap-4">
                <div className="border-l-2 border-purple-500 pl-2">
                    <strong className="block text-[9px] uppercase mb-1">1. La Propuesta</strong>
                    <p className="text-[9px] text-slate-600">Validás el "por qué fyo". Ecosistema de beneficios.</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-2">
                    <strong className="block text-[9px] uppercase mb-1">2. Riesgo</strong>
                    <p className="text-[9px] text-slate-600">Gestión de contraofertas. Ratificar la decisión.</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-2">
                    <strong className="block text-[9px] uppercase mb-1">3. Vínculo</strong>
                    <p className="text-[9px] text-slate-600">Mantener cercanía hasta el día 1 para bajar ansiedad.</p>
                </div>
            </div>
        </div>

        {/* 8. ONBOARDING (Onboarding) */}
        <div className="mb-4">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3 uppercase border-b border-slate-200 pb-1">
                <span className="text-slate-400 mr-1">08.</span> ONBOARDING: TIPS DE ÉXITO
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {ONBOARDING_TIPS.map((tip, i) => (
                    <div key={i} className="text-[9px] border-b border-slate-50 pb-1">
                        <strong className="text-slate-900 uppercase mr-1">{tip.title}:</strong>
                        <span className="text-slate-600">{tip.description}</span>
                        {tip.leaderTip && <span className="block text-purple-700 italic mt-0.5">💡 {tip.leaderTip}</span>}
                    </div>
                ))}
            </div>
            <div className="mt-3 p-2 bg-purple-50 rounded border border-purple-100 flex justify-between items-center">
                <span className="font-bold text-[9px] text-purple-900 uppercase">Período de Prueba</span>
                <span className="text-[9px] text-purple-800">Un mes antes de finalizar, se valida continuidad. Agendar Feedback.</span>
            </div>
        </div>

         {/* Footer Page 2 */}
         <div className="mt-auto pt-4 border-t border-slate-200 flex justify-between text-[8px] text-slate-400">
             <span>Guía Integral de Selección - Página 2/3</span>
             <span>fyo Talento y Cultura</span>
        </div>
      </div>

      <div className="break-after-page"></div>

      {/* ================= PAGE 3: WORKSHEET (ACTIVITY - OPTIMIZED FOR A4) ================= */}
      {/* Reduced padding from 10mm to 8mm to ensure strict fit */}
      <div className="min-h-[297mm] h-[297mm] p-[8mm] relative flex flex-col bg-slate-50 overflow-hidden box-border">
        
        <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 h-full bg-white relative flex flex-col">
            
            {/* Cut Line Indication (Visual only) */}
            <div className="absolute top-0 right-8 -mt-3 bg-white px-2 text-slate-400 flex items-center gap-1 text-[8px] uppercase tracking-widest font-bold">
                 <span className="transform rotate-180">✂️</span> Hoja de Trabajo
            </div>

            <div className="text-center mb-6 shrink-0">
                <h1 className="text-3xl font-black text-slate-900 uppercase mb-1">Plan de Aterrizaje</h1>
                <p className="text-xs text-slate-500 font-medium">Actividad Práctica: Clasificá las tareas en la columna correcta.</p>
            </div>

            {/* THE POOL - UPDATED: 3 Columns to save vertical space */}
            <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 shrink-0">
                <h3 className="font-bold text-slate-900 uppercase mb-3 flex items-center gap-2 text-xs">
                    <Square className="w-3.5 h-3.5 text-purple-600 fill-purple-600" /> Banco de Tareas (Para clasificar)
                </h3>
                {/* Changed to grid-cols-3 to fit more items in less vertical space */}
                <div className="grid grid-cols-3 gap-2">
                    {ALL_ONBOARDING_TASKS.map((task) => (
                        <div key={task.id} className="flex items-center gap-1.5 text-[8px] p-1.5 bg-white rounded border border-slate-100">
                            <div className="w-2.5 h-2.5 border border-slate-300 rounded-sm shrink-0"></div>
                            <span className="font-medium text-slate-700 leading-tight">
                                <span className="font-bold text-slate-900 mr-1">[{task.tag}]</span>
                                {task.content}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* THE COLUMNS (EMPTY) - Flex grow to fill available space */}
            <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
                {ONBOARDING_KANBAN_STRUCTURE.map((col) => (
                    <div key={col.id} className="flex flex-col h-full border-2 border-slate-200 rounded-2xl p-3 bg-slate-50/50">
                        <div className="text-center mb-3 pb-2 border-b border-slate-200 shrink-0">
                             <div className="text-xl mb-1">{col.emoji}</div>
                             <h4 className="font-black text-slate-900 uppercase text-[10px]">{col.title}</h4>
                        </div>
                        {/* Empty Lines for writing - Distribute evenly */}
                        <div className="flex-1 flex flex-col justify-evenly">
                             {[...Array(6)].map((_, i) => (
                                 <div key={i} className="border-b border-slate-300 w-full h-4"></div>
                             ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center shrink-0">
                <p className="text-[9px] text-slate-400 italic">
                    "El éxito del onboarding depende de la planificación previa."
                </p>
            </div>

        </div>

        {/* Footer Page 3 */}
        <div className="mt-auto pt-2 flex justify-between text-[8px] text-slate-400 shrink-0">
             <span>Guía Integral de Selección - Página 3/3 (Actividad)</span>
             <span>fyo Talento y Cultura</span>
        </div>
      </div>

    </div>
  );
};