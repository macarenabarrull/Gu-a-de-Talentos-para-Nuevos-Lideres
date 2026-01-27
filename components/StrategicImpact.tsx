import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PlusCircle, RefreshCcw, AlertOctagon } from 'lucide-react';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      <SectionHeading 
        title="¿CUÁNDO INICIA?" 
        subtitle="Las búsquedas pueden iniciarse ante tres situaciones principales. Entender el origen define la estrategia."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-8 lg:mt-12">
        {/* Scenario 1 */}
        <div className="animate-enter delay-100 bg-white/60 backdrop-blur-xl p-6 lg:p-10 rounded-[2rem] border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col cursor-default">
           <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
             <PlusCircle className="w-6 h-6 lg:w-8 lg:h-8" />
           </div>
           <h3 className="text-xl lg:text-3xl font-brand font-bold text-slate-900 mb-4">Nueva Incorporación</h3>
           <p className="text-slate-600 text-base lg:text-xl leading-relaxed mt-auto font-medium">
             Cuando la vacante está <strong>presupuestada</strong> en el plan anual. Es el escenario ideal y planificado.
           </p>
        </div>

        {/* Scenario 2 */}
        <div className="animate-enter delay-200 bg-white/60 backdrop-blur-xl p-6 lg:p-10 rounded-[2rem] border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col cursor-default">
           <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
             <RefreshCcw className="w-6 h-6 lg:w-8 lg:h-8" />
           </div>
           <h3 className="text-xl lg:text-3xl font-brand font-bold text-slate-900 mb-4">Reemplazo</h3>
           <p className="text-slate-600 text-base lg:text-xl leading-relaxed mt-auto font-medium">
             Ante una renuncia o desvinculación. Requiere agilidad para minimizar el impacto en el equipo.
           </p>
        </div>

        {/* Scenario 3 */}
        <div className="animate-enter delay-300 bg-white/60 backdrop-blur-xl p-6 lg:p-10 rounded-[2rem] border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col cursor-default">
           <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
             <AlertOctagon className="w-6 h-6 lg:w-8 lg:h-8" />
           </div>
           <h3 className="text-xl lg:text-3xl font-brand font-bold text-slate-900 mb-4">Fuera de presu</h3>
           <p className="text-slate-600 text-base lg:text-xl leading-relaxed mt-auto font-medium">
             Una nueva necesidad no contemplada. Requiere <strong>aprobación</strong> antes de iniciar.
           </p>
        </div>
      </div>
    </section>
  );
};