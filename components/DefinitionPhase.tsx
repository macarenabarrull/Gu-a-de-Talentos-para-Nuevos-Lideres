import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { CheckSquare, Square, FileText, Users, Calendar, ArrowRight } from 'lucide-react';

const CHECKLIST_ITEMS = [
  "Validamos Descripción de Puesto con Líder 📝",
  "Estrategia de 'Silla Vacía' 🪑",
  "Revisión integral de necesidad del equipo 👥",
  "Revisamos perfil técnico + actitudinal 🧠",
  "Armado de cronograma (fechas clave) 📅",
  "Alineación del aviso de publicación 📢"
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
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      <SectionHeading 
        title="ENTENDAMOS QUÉ BUSCAMOS 🔍" 
        subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Validamos el diagnóstico con 3 pilares."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12 h-full">
        
        {/* Column 1: The Why/What */}
        <div className="space-y-4 lg:col-span-1 flex flex-col justify-center">
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-purple-300 transition-all group">
                <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="font-brand font-bold text-lg text-slate-900">El Puesto</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                    Si no existe la Descripción de Puesto, la creamos juntos. Es el mapa de ruta.
                </p>
             </div>

             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-pink-300 transition-all group">
                <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-brand font-bold text-lg text-slate-900">El Perfil</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                    Skills técnicos (Hard) + Culturales (Soft). No buscamos solo aptitud, sino actitud.
                </p>
             </div>

             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-300 transition-all group">
                <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="font-brand font-bold text-lg text-slate-900">El Tiempo</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                    Fechas claras. ¿Cuándo necesitamos que ingrese? Planificamos hacia atrás.
                </p>
             </div>
        </div>

        {/* Column 2 & 3: Interactive Checklist */}
        <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden border border-slate-200 flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-[80px] -mr-20 -mt-20 opacity-50"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Tu Rol como Líder</span>
                    <h4 className="font-brand font-bold text-2xl lg:text-3xl text-slate-900">Checklist de Inicio</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {CHECKLIST_ITEMS.map((item, i) => {
                        const isChecked = checkedItems.includes(i);
                        return (
                        <div 
                            key={i} 
                            onClick={() => toggleItem(i)}
                            className={`
                                group flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border
                                ${isChecked ? 'bg-white border-purple-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-white/60'}
                            `}
                        >
                            <div className={`transition-all duration-300 transform group-hover:scale-110 ${isChecked ? 'text-purple-600' : 'text-slate-400'}`}>
                            {isChecked ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
                            </div>
                            <span className={`text-sm lg:text-base font-medium transition-colors ${isChecked ? 'text-slate-800' : 'text-slate-500'}`}>
                                {item.replace(/ .*/,'')} <span className={isChecked ? '' : 'text-slate-400'}>{item.substring(item.indexOf(' '))}</span>
                            </span>
                        </div>
                        );
                    })}
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-purple-700 text-sm font-bold bg-purple-50 inline-flex px-4 py-2 rounded-lg">
                    <ArrowRight className="w-4 h-4" />
                    <span>Completar este checklist garantiza un inicio exitoso.</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};