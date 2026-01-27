import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PlusCircle, RefreshCcw, AlertOctagon } from 'lucide-react';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-4">
      <div className="shrink-0 mb-6">
        <SectionHeading 
            title="¿CUÁNDO INICIA?" 
            subtitle="Las búsquedas pueden iniciarse ante tres situaciones principales. Entender el origen define la estrategia."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 flex-1 max-h-[60vh] min-h-0">
        {/* Scenario 1 */}
        <div className="animate-enter delay-100 bg-white/60 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col cursor-default">
           <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
             <PlusCircle className="w-5 h-5 lg:w-6 lg:h-6" />
           </div>
           <h3 className="text-lg lg:text-xl font-brand font-bold text-slate-900 mb-2">Nueva Incorporación</h3>
           <p className="text-slate-600 text-sm leading-relaxed mt-auto font-medium">
             Cuando la vacante está <strong>presupuestada</strong> en el plan anual. Es el escenario ideal.
           </p>
        </div>

        {/* Scenario 2 */}
        <div className="animate-enter delay-200 bg-white/60 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col cursor-default">
           <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
             <RefreshCcw className="w-5 h-5 lg:w-6 lg:h-6" />
           </div>
           <h3 className="text-lg lg:text-xl font-brand font-bold text-slate-900 mb-2">Reemplazo</h3>
           <p className="text-slate-600 text-sm leading-relaxed mt-auto font-medium">
             Ante una renuncia o desvinculación. Requiere agilidad para minimizar el impacto.
           </p>
        </div>

        {/* Scenario 3 */}
        <div className="animate-enter delay-300 bg-white/60 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col cursor-default">
           <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
             <AlertOctagon className="w-5 h-5 lg:w-6 lg:h-6" />
           </div>
           <h3 className="text-lg lg:text-xl font-brand font-bold text-slate-900 mb-2">Fuera de presu</h3>
           <p className="text-slate-600 text-sm leading-relaxed mt-auto font-medium">
             Una nueva necesidad no contemplada. Requiere <strong>aprobación</strong> previa.
           </p>
        </div>
      </div>
    </section>
  );
};