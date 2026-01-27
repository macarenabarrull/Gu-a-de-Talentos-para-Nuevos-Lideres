import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileCheck, PenTool, Megaphone, Armchair, SearchCheck, Users } from 'lucide-react';

export const DefinitionPhase: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-6 lg:mb-8">
        <SectionHeading 
            title="DEFINICIÓN DEL PERFIL 📝" 
            subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Por eso, el primer paso es estratégico."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Visual/Conceptual */}
          <div className="space-y-4">
              <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/50 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-purple-50 rounded-bl-[3rem] -mr-6 -mt-6 z-0 transition-transform group-hover:scale-110"></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                      <div className="p-3 bg-purple-100 text-purple-600 rounded-xl shadow-inner mt-1">
                          <Armchair className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-lg font-brand font-black text-slate-900 mb-2">Estrategia de la Silla Vacía</h3>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                              No se trata solo de llenar un hueco. Imaginamos quién se sienta ahí: 
                              <br/>
                              <span className="font-bold text-purple-700">¿Qué valor agrega? ¿Cómo complementa al equipo actual?</span>
                          </p>
                      </div>
                  </div>
              </div>

              {/* Updated Card: Light Amber Theme with Partner Text */}
              <div className="bg-amber-50 p-6 rounded-[1.5rem] shadow-lg border border-amber-100 relative overflow-hidden transform hover:-translate-y-1 transition-transform group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-100 rounded-full blur-xl opacity-50 -mr-8 -mt-8"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                      <div className="p-2.5 bg-white rounded-xl shadow-sm border border-amber-100 text-amber-500">
                         <PenTool className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">
                          "¿No tenés la Descripción de Puesto? <br/>
                          <span className="font-bold text-amber-600">No te preocupes, la co-creamos en la reunión.</span>"
                      </p>
                  </div>
              </div>
          </div>

          {/* Right Column: The Checklist Steps */}
          <div className="space-y-6">
              
              {/* Step 1 */}
              <div className="flex gap-4 group animate-enter delay-100 items-start">
                  <div className="flex-shrink-0">
                      <span className="text-5xl font-brand font-black text-slate-200 leading-none group-hover:text-purple-300 transition-colors">01</span>
                  </div>
                  <div className="pb-2 relative top-1 w-full">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          Validamos la Descripción
                          <FileCheck className="w-4 h-4 text-purple-500" />
                      </h4>
                      <ul className="space-y-2">
                          <li className="flex items-start gap-3 text-sm text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm">
                              <SearchCheck className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                              <span>Revisión integral de la necesidad real del equipo.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm">
                              <Users className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                              <span>Definimos perfil <strong>técnico</strong> + <strong>actitudinal</strong>.</span>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 group animate-enter delay-200 items-start">
                  <div className="flex-shrink-0">
                       <span className="text-5xl font-brand font-black text-slate-200 leading-none group-hover:text-purple-300 transition-colors">02</span>
                  </div>
                  <div className="relative top-1 w-full">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          Aviso de Publicación
                          <Megaphone className="w-4 h-4 text-purple-500" />
                      </h4>
                      <p className="text-sm text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm">
                          Redactamos y publicamos el aviso en conjunto, <strong className="text-purple-700">alineado 100% a las necesidades</strong> detectadas.
                      </p>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};