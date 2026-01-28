import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileCheck, PenTool, Megaphone, Armchair, SearchCheck, Users } from 'lucide-react';

export const DefinitionPhase: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full px-6">
      
      <div className="shrink-0 mb-8">
        <SectionHeading 
            title="Definición del perfil" 
            subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Por eso, el primer paso es estratégico."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Concepts */}
          <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-purple-50 rounded-bl-[4rem] -mr-8 -mt-8 z-0 transition-transform group-hover:scale-105"></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                      <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl mt-1">
                          <Armchair className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-lg font-brand font-bold text-slate-900 mb-2">Estrategia de la silla vacía</h3>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                              No se trata solo de llenar un hueco. Imaginamos quién se sienta ahí: 
                              <br/>
                              <span className="font-bold text-purple-700">¿Qué valor agrega? ¿Cómo complementa al equipo?</span>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-100 relative overflow-hidden transform hover:-translate-y-1 transition-transform group">
                  <div className="flex items-center gap-4 relative z-10">
                      <div className="p-3 bg-white rounded-2xl shadow-sm border border-amber-100 text-amber-500">
                         <PenTool className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-800 leading-relaxed">
                          "¿No tenés la Descripción de Puesto? <br/>
                          <span className="font-bold text-amber-700">No te preocupes, la co-creamos en la reunión.</span>"
                      </p>
                  </div>
              </div>
          </div>

          {/* Right Column: Process Checklist */}
          <div className="space-y-6 pl-0 md:pl-4">
              
              {/* Step 1 */}
              <div className="flex gap-4 group animate-enter delay-100 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center bg-white group-hover:border-purple-200 transition-colors">
                      <span className="text-xl font-brand font-black text-slate-300 group-hover:text-purple-600 transition-colors">1</span>
                  </div>
                  <div className="w-full pt-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          Validamos la descripción
                          <FileCheck className="w-4 h-4 text-purple-500" />
                      </h4>
                      <ul className="space-y-2">
                          <li className="flex items-start gap-3 text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                              <SearchCheck className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                              <span>Revisión integral de la necesidad real del equipo.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                              <Users className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                              <span>Definimos perfil <strong>técnico</strong> + <strong>actitudinal</strong>.</span>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 group animate-enter delay-200 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center bg-white group-hover:border-purple-200 transition-colors">
                      <span className="text-xl font-brand font-black text-slate-300 group-hover:text-purple-600 transition-colors">2</span>
                  </div>
                  <div className="w-full pt-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          Aviso de publicación
                          <Megaphone className="w-4 h-4 text-purple-500" />
                      </h4>
                      <p className="text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                          Redactamos y publicamos el aviso en conjunto, <strong className="text-purple-700">alineado 100% a las necesidades</strong> detectadas.
                      </p>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};