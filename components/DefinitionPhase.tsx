import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileText, Megaphone } from 'lucide-react';

export const DefinitionPhase: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6">
      
      <div className="shrink-0 mb-8">
        <SectionHeading 
            title="Definición del perfil" 
            subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Por eso, el primer paso es estratégico."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1 max-h-[600px]">
          
          {/* Left: Estrategia Silla Vacía */}
          <div className="h-full bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 shadow-xl shadow-purple-500/5 relative overflow-hidden group flex flex-col justify-center">
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none"></div>
              
              <div className="relative z-10">
                  <div className="icon-box-soft w-24 h-24 rounded-3xl mb-8 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-5xl emoji-3d">🪑</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-brand font-black text-slate-900 mb-6 leading-tight">
                      Estrategia de la <br/> silla vacía
                  </h3>
                  
                  <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                      No se trata solo de llenar un hueco. Imaginamos quién se sienta ahí:
                  </p>
                  
                  <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100">
                      <p className="text-slate-800 font-bold text-xl leading-tight">
                          ¿Qué valor agrega? <br/> ¿Cómo complementa al equipo?
                      </p>
                  </div>
              </div>
          </div>

          {/* Right: Steps */}
          <div className="flex flex-col gap-10 justify-center h-full pl-0 lg:pl-10">
              
              {/* Step 1 */}
              <div className="animate-enter delay-100">
                  <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 font-black flex items-center justify-center text-xl shadow-inner">1</div>
                      <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                          Validamos la descripción
                          <FileText className="w-6 h-6 text-purple-400" />
                      </h4>
                  </div>
                  
                  <div className="space-y-4 ml-2">
                      <div className="bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-200 group/item">
                          <span className="text-2xl emoji-3d group-hover/item:scale-110 transition-transform">🔍</span>
                          <p className="text-slate-600 text-sm font-medium">
                              Revisión integral de la necesidad real del equipo.
                          </p>
                      </div>
                      <div className="bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-200 group/item">
                          <span className="text-2xl emoji-3d group-hover/item:scale-110 transition-transform">🧠</span>
                          <p className="text-slate-600 text-sm font-medium">
                              Definimos perfil <strong className="text-slate-900">técnico + actitudinal.</strong>
                          </p>
                      </div>
                  </div>
              </div>

              {/* Step 2 */}
              <div className="animate-enter delay-200">
                  <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 font-black flex items-center justify-center text-xl shadow-inner">2</div>
                      <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                          Aviso de publicación
                          <Megaphone className="w-6 h-6 text-purple-400" />
                      </h4>
                  </div>
                  
                  <div className="ml-2">
                      <div className="bg-white px-6 py-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-200">
                          <p className="text-slate-600 text-sm font-medium leading-relaxed">
                              Redactamos y publicamos el aviso en conjunto, <strong className="text-purple-600">alineado 100% a las necesidades</strong> detectadas.
                          </p>
                      </div>
                  </div>
              </div>

          </div>

      </div>
    </section>
  );
};