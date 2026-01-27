import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileCheck, PenTool, Megaphone, Armchair, SearchCheck, Users } from 'lucide-react';

export const DefinitionPhase: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-8 lg:mb-12">
        <SectionHeading 
            title="DEFINICIÓN DEL PERFIL 📝" 
            subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Por eso, el primer paso es estratégico."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual/Conceptual */}
          <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-purple-50 rounded-bl-[4rem] -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110"></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                      <div className="p-4 bg-purple-100 text-purple-600 rounded-2xl shadow-inner">
                          <Armchair className="w-8 h-8" />
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

              <div className="bg-slate-900 p-6 rounded-[2rem] shadow-2xl shadow-purple-900/20 text-white relative overflow-hidden transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-4 relative z-10">
                      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                         <PenTool className="w-6 h-6 text-yellow-300" />
                      </div>
                      <p className="text-sm font-medium">
                          "Si no existe la Descripción de Puesto... <br/>
                          <span className="font-bold text-yellow-300 text-lg">¡La armamos juntos!</span>"
                      </p>
                  </div>
              </div>
          </div>

          {/* Right Column: The Checklist Steps */}
          <div className="space-y-8">
              
              {/* Step 1 */}
              <div className="flex gap-6 group animate-enter delay-100 items-start">
                  <div className="flex-shrink-0">
                      <span className="text-6xl font-brand font-black text-slate-200 leading-none group-hover:text-purple-300 transition-colors">01</span>
                  </div>
                  <div className="pb-4 relative top-2">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          Validamos la Descripción de Puesto
                          <FileCheck className="w-4 h-4 text-purple-500" />
                      </h4>
                      <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm">
                              <SearchCheck className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                              <span>Revisión integral de la necesidad real del equipo.</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 bg-white/50 p-3 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm">
                              <Users className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                              <span>Definimos perfil <strong>técnico</strong> + <strong>actitudinal</strong>.</span>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 group animate-enter delay-200 items-start">
                  <div className="flex-shrink-0">
                       <span className="text-6xl font-brand font-black text-slate-200 leading-none group-hover:text-purple-300 transition-colors">02</span>
                  </div>
                  <div className="relative top-2">
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