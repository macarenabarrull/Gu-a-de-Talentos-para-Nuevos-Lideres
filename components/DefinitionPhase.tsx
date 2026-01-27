import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { CheckSquare, Square, FileText, Users, Calendar } from 'lucide-react';

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

  // Load state from localStorage on mount
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
    <section className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
        
        {/* Left Content */}
        <div>
          <SectionHeading 
            title="ENTENDAMOS QUÉ BUSCAMOS 🔍" 
            subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Validamos el diagnóstico."
          />
          
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-2xl shadow-purple-900/5 mt-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <h4 className="font-brand font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg relative z-10">
              <span className="text-2xl">📋</span>
              Checklist del Líder
            </h4>
            <ul className="space-y-4 relative z-10">
              {CHECKLIST_ITEMS.map((item, i) => {
                const isChecked = checkedItems.includes(i);
                return (
                  <li 
                    key={i} 
                    onClick={() => toggleItem(i)}
                    className={`flex items-center gap-3 font-medium text-sm cursor-pointer transition-all hover:translate-x-1 ${isChecked ? 'text-purple-700' : 'text-slate-600'}`}
                  >
                    <div className={`transition-colors ${isChecked ? 'text-purple-600' : 'text-slate-300'}`}>
                      {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                    </div>
                    <span className={isChecked ? 'line-through opacity-70' : ''}>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Cards / Visuals */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-3xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                   <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                   <h3 className="font-brand font-bold text-lg mb-1">Descripción de Puesto</h3>
                   <p className="text-white/80 text-sm leading-relaxed">Si no existe, ¡la armamos juntos! Es la base de todo el proceso.</p>
                </div>
             </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md transform hover:scale-105 transition-transform duration-300">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-2xl">
                   <Users className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                   <h3 className="font-brand font-bold text-slate-900 text-lg mb-1">Perfil Técnico + Actitudinal</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">No solo importan los skills, sino cómo encaja en la cultura del equipo.</p>
                </div>
             </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md transform hover:scale-105 transition-transform duration-300">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-2xl">
                   <Calendar className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                   <h3 className="font-brand font-bold text-slate-900 text-lg mb-1">Cronograma</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">Establecemos fechas claras para entrevistas y feedback desde el inicio.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};