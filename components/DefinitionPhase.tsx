import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileText, Megaphone } from 'lucide-react';

export const DefinitionPhase: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 py-4">
      
      <SectionHeading 
          title="PRIMERO: ENTENDAMOS QUÉ BUSCAMOS" 
          subtitle="Antes de salir a buscar, tenemos que saber qué estamos buscando. Por eso, el primer paso es estratégico."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch flex-1 min-h-0 pb-2">
          
          {/* Left: Estrategia Silla Vacía */}
          <div className="bg-white rounded-[2.5rem] p-6 lg:p-10 border border-slate-100 shadow-xl shadow-purple-500/5 relative overflow-hidden group flex flex-col justify-center h-full">
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-center">
                  <div className="icon-box-soft w-16 h-16 lg:w-20 lg:h-20 rounded-3xl mb-6 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                      <span className="text-3xl lg:text-4xl emoji-3d">🪑</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-brand font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 leading-tight uppercase">
                      ESTRATEGIA DE LA <br/> SILLA VACÍA
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base lg:text-lg font-medium leading-relaxed mb-6">
                      No se trata solo de llenar un hueco. Imaginamos quién se sienta ahí:
                  </p>
                  
                  <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-slate-100 shadow-sm mt-auto">
                      <p className="text-slate-800 font-bold text-sm lg:text-lg leading-relaxed">
                          ¿Qué valor agrega? <br/> 
                          ¿Cómo complementa al equipo? <br/>
                          ¿Qué necesitamos hoy? <br/>
                          ¿Cómo lo puedo acompañar?
                      </p>
                  </div>
              </div>
          </div>

          {/* Right: Steps */}
          <div className="flex flex-col gap-4 lg:gap-6 justify-center h-full pl-0 lg:pl-10">
              
              {/* Step 1 */}
              <div className="animate-enter delay-100 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 font-black flex items-center justify-center text-lg shadow-inner shrink-0">1</div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
                          Validamos la descripción
                          <FileText className="w-5 h-5 text-purple-400" />
                      </h4>
                  </div>
                  
                  <div className="space-y-3 ml-2">
                      <div className="bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-200 group/item">
                          <span className="text-xl emoji-3d group-hover/item:scale-110 transition-transform">🔍</span>
                          <p className="text-slate-600 text-xs md:text-sm font-medium">
                              Revisión integral de la necesidad real del equipo.
                          </p>
                      </div>
                      <div className="bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-200 group/item">
                          <span className="text-xl emoji-3d group-hover/item:scale-110 transition-transform">🧠</span>
                          <p className="text-slate-600 text-xs md:text-sm font-medium">
                              Definimos perfil <strong className="text-slate-900">técnico + actitudinal.</strong>
                          </p>
                      </div>
                  </div>
              </div>

              {/* Step 2 */}
              <div className="animate-enter delay-200 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 font-black flex items-center justify-center text-lg shadow-inner shrink-0">2</div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
                          Aviso de publicación
                          <Megaphone className="w-5 h-5 text-purple-400" />
                      </h4>
                  </div>
                  
                  <div className="ml-2">
                      <div className="bg-white px-5 py-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-200">
                          <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
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