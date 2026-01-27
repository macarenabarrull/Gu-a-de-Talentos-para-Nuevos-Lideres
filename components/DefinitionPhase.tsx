import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { CheckSquare, Square, FileText, Users, Calendar, ArrowRight } from 'lucide-react';

const CHECKLIST_ITEMS = [
  "Validamos Descripción de Puesto",
  "Estrategia de 'Silla Vacía'",
  "Revisión necesidad del equipo",
  "Perfil técnico + actitudinal",
  "Cronograma (fechas clave)",
  "Alineación del aviso"
];

export const DefinitionPhase: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('fyo_profile_checklist_v2');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  const toggleItem = (index: number) => {
    const newChecked = checkedItems.includes(index)
      ? checkedItems.filter(i => i !== index)
      : [...checkedItems, index];
    setCheckedItems(newChecked);
    localStorage.setItem('fyo_profile_checklist_v2', JSON.stringify(newChecked));
  };

  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-8 md:pt-0">
      
      {/* Explicit Top Header */}
      <div className="shrink-0">
        <SectionHeading 
            title="ENTENDAMOS QUÉ BUSCAMOS 🔍" 
            subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Validamos el diagnóstico con 3 pilares."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6 lg:mt-10 flex-1 min-h-0">
        
        {/* Column 1: The Why/What (Compact) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
             <div className="flex-1 bg-white/90 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all group flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-brand font-bold text-base text-slate-900">El Puesto</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                    Si no existe la Descripción, la creamos juntos.
                </p>
             </div>

             <div className="flex-1 bg-white/90 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md hover:border-pink-200 transition-all group flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                        <Users className="w-5 h-5" />
                    </div>
                    <h3 className="font-brand font-bold text-base text-slate-900">El Perfil</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                    Skills técnicos + Culturales (Actitud).
                </p>
             </div>

             <div className="flex-1 bg-white/90 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all group flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <h3 className="font-brand font-bold text-base text-slate-900">El Tiempo</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                    Planificamos la fecha de ingreso hacia atrás.
                </p>
             </div>
        </div>

        {/* Column 2 & 3: Interactive Checklist */}
        <div className="lg:col-span-8 bg-slate-100/50 backdrop-blur-sm rounded-[2rem] p-6 lg:p-10 relative overflow-hidden border border-white/50 flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-[80px] -mr-20 -mt-20 opacity-40 pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 shrink-0">
                    <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Tu Rol como Líder</span>
                    <h4 className="font-brand font-bold text-2xl text-slate-900">Checklist de Inicio</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 flex-1">
                    {CHECKLIST_ITEMS.map((item, i) => {
                        const isChecked = checkedItems.includes(i);
                        return (
                        <div 
                            key={i} 
                            onClick={() => toggleItem(i)}
                            className={`
                                group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 border
                                ${isChecked ? 'bg-white border-purple-200 shadow-sm scale-[1.02]' : 'bg-white/40 border-transparent hover:bg-white/80'}
                            `}
                        >
                            <div className={`transition-all duration-300 transform group-hover:scale-110 ${isChecked ? 'text-purple-600' : 'text-slate-400'}`}>
                            {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                            </div>
                            <span className={`text-sm font-medium transition-colors ${isChecked ? 'text-slate-800' : 'text-slate-500'}`}>
                                {item}
                            </span>
                        </div>
                        );
                    })}
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-purple-700 text-xs font-bold bg-purple-50/80 border border-purple-100 inline-flex px-4 py-2.5 rounded-xl shrink-0 self-start">
                    <ArrowRight className="w-4 h-4" />
                    <span>Completar este checklist garantiza un inicio exitoso.</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};