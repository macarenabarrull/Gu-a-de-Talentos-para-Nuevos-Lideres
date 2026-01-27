import React from 'react';
import { SectionHeading } from './SectionHeading';

export const ProfileCanvas: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
        
        {/* Left: Introduction */}
        <div className="lg:col-span-4">
           <SectionHeading 
            title="Definición del Perfil 🎨" 
            subtitle="Antes de salir a buscar, tenemos que saber qué queremos. Definí qué es obligatorio y qué es negociable."
          />
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mt-2">
             <p className="text-purple-900 font-medium text-xs italic">
               "Si no sabés qué buscás, ningún candidato va a ser el correcto."
             </p>
          </div>
        </div>

        {/* Right: The Canvas (Grid Layout) */}
        <div className="lg:col-span-8">
           <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              {/* Header of Canvas */}
              <div className="bg-slate-900 p-3 flex justify-between items-center text-white">
                 <span className="font-bold tracking-widest uppercase text-[10px]">Herramienta de Definición</span>
                 <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold">Confidencial</span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-slate-100">
                 
                 {/* Quadrant 1: Mission */}
                 <div className="bg-white p-5 hover:bg-slate-50 transition-colors">
                    <h4 className="text-purple-600 font-bold text-xs uppercase mb-1.5 flex items-center gap-2">🎯 Misión (El para qué)</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">¿Cuál es el problema principal que esta persona viene a resolver en su primer año?</p>
                 </div>

                 {/* Quadrant 2: Hard Skills */}
                 <div className="bg-white p-5 hover:bg-slate-50 transition-colors">
                    <h4 className="text-blue-600 font-bold text-xs uppercase mb-1.5 flex items-center gap-2">🛠️ Lo Técnico (Excluyente)</h4>
                    <ul className="text-slate-600 text-xs space-y-1 list-disc list-inside">
                       <li>Conocimientos Específicos</li>
                       <li>Software / Herramientas</li>
                       <li>Idiomas necesarios</li>
                    </ul>
                 </div>

                 {/* Quadrant 3: Soft Skills */}
                 <div className="bg-white p-5 hover:bg-slate-50 transition-colors">
                    <h4 className="text-pink-600 font-bold text-xs uppercase mb-1.5 flex items-center gap-2">🧠 Lo Humano (ADN fyo)</h4>
                    <ul className="text-slate-600 text-xs space-y-1 list-disc list-inside">
                       <li>Capacidad de Aprendizaje</li>
                       <li>Trabajo en Equipo</li>
                       <li>Adaptabilidad al cambio</li>
                    </ul>
                 </div>

                 {/* Quadrant 4: Selling Points */}
                 <div className="bg-white p-5 hover:bg-slate-50 transition-colors">
                    <h4 className="text-orange-600 font-bold text-xs uppercase mb-1.5 flex items-center gap-2">💎 ¿Por qué nos eligen?</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">¿Qué desafío, equipo o aprendizaje le ofrecemos a un talento top?</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};