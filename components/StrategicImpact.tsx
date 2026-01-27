import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PlusCircle, RefreshCcw, AlertOctagon } from 'lucide-react';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <SectionHeading 
        title="¿CUÁNDO INICIA?" 
        subtitle="Las búsquedas pueden iniciarse ante tres situaciones principales. Entender el origen define la estrategia."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-8 lg:mt-16">
        {/* Scenario 1 */}
        <div className="animate-enter delay-100 bg-white p-6 lg:p-10 rounded-3xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.15)] hover:-translate-y-2 transition-transform duration-300 group">
           <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
             <PlusCircle className="w-6 h-6 lg:w-8 lg:h-8" />
           </div>
           <h3 className="text-lg lg:text-2xl font-brand font-bold text-slate-900 mb-3">Nueva Incorporación</h3>
           <p className="text-slate-500 text-sm lg:text-lg leading-relaxed">
             Cuando la vacante está <strong>presupuestada</strong> en el plan anual. Es el escenario ideal y planificado.
           </p>
        </div>

        {/* Scenario 2 */}
        <div className="animate-enter delay-200 bg-white p-6 lg:p-10 rounded-3xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-transform duration-300 group">
           <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
             <RefreshCcw className="w-6 h-6 lg:w-8 lg:h-8" />
           </div>
           <h3 className="text-lg lg:text-2xl font-brand font-bold text-slate-900 mb-3">Reemplazo</h3>
           <p className="text-slate-500 text-sm lg:text-lg leading-relaxed">
             Ante una renuncia o desvinculación. Requiere agilidad para minimizar el impacto en el equipo.
           </p>
        </div>

        {/* Scenario 3 */}
        <div className="animate-enter delay-300 bg-white p-6 lg:p-10 rounded-3xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-transform duration-300 group">
           <div className="w-12 h-12 lg:w-16 lg:h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
             <AlertOctagon className="w-6 h-6 lg:w-8 lg:h-8" />
           </div>
           <h3 className="text-lg lg:text-2xl font-brand font-bold text-slate-900 mb-3">Fuera de Budget</h3>
           <p className="text-slate-500 text-sm lg:text-lg leading-relaxed">
             Una nueva necesidad no contemplada. Requiere <strong>aprobación especial</strong> antes de iniciar.
           </p>
        </div>
      </div>
    </section>
  );
};