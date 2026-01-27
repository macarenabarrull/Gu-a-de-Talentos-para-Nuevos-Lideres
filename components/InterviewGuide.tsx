import React from 'react';
import { SectionHeading } from './SectionHeading';
import { STAR_MODEL } from '../constants';
import { Stethoscope, CheckCircle, FileSignature, AlertCircle } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Impact Text */}
        <div className="lg:col-span-5 flex flex-col h-full justify-center">
           <SectionHeading 
            title="LA RECTA FINAL 🏁" 
            subtitle="El momento clave: Tu rol es fundamental para cerrar al candidato."
          />
          
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl mt-6 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px] -mr-20 -mt-20 opacity-30 group-hover:opacity-50 transition-opacity"></div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="w-6 h-6 text-purple-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-200">Acción de Líder</span>
                </div>
                
                <h3 className="font-brand font-bold text-2xl lg:text-3xl mb-6 leading-tight">
                    "Queremos que seas parte"
                </h3>
                <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-6">
                    La propuesta formal la hace RRHH, pero tu llamado de bienvenida o mensaje personal marca la diferencia entre un "Sí" dudoso y un "Sí" convencido.
                </p>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Análisis de Equidad Interna</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                        <Stethoscope className="w-4 h-4 text-blue-400" />
                        <span>Pre-ocupacionales</span>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Steps Visualization */}
        <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {STAR_MODEL.map((step, i) => (
                <div key={i} className={`p-6 lg:p-8 rounded-[2rem] border-2 bg-white transition-all duration-300 cursor-default flex flex-col justify-between min-h-[180px] hover:-translate-y-2 hover:shadow-xl ${step.color.replace('bg-', 'border-').replace('text-', 'text-')}`}>
                    <div className="flex justify-between items-start">
                        <span className="text-4xl lg:text-5xl font-black opacity-10">{step.letter}</span>
                        <div className={`w-2 h-2 rounded-full ${step.color.replace('bg-', 'bg-').split(' ')[0]}`}></div>
                    </div>
                    <div>
                        <h3 className="text-lg lg:text-xl font-black mb-2 font-brand uppercase tracking-tight text-slate-900">{step.meaning}</h3>
                        <p className="font-medium text-xs lg:text-sm leading-relaxed text-slate-500">
                        {step.question}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};