import React from 'react';
import { SectionHeading } from './SectionHeading';
import { STAR_MODEL } from '../constants';
import { Stethoscope, CheckCircle, AlertCircle, PhoneCall } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-6 md:pt-0">
      
      <div className="shrink-0 mb-6 lg:mb-8">
        <SectionHeading 
            title="LA RECTA FINAL 🏁" 
            subtitle="El momento clave: Tu rol es fundamental para cerrar al candidato."
        />
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
        
        {/* Left Side: Hero Card */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="flex-1 bg-slate-900 text-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group flex flex-col justify-center border border-slate-800">
             {/* Background Effects */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-[100px] -mr-20 -mt-20 opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
             <div className="absolute bottom-0 left-0 w-60 h-60 bg-pink-600 rounded-full blur-[80px] -ml-20 -mb-20 opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <AlertCircle className="w-3 h-3" />
                    Acción de Líder
                </div>
                
                <h3 className="font-brand font-black text-3xl lg:text-4xl mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                    "Queremos que seas parte"
                </h3>
                
                <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-8 border-l-2 border-purple-500 pl-4">
                    Tu llamado marca la diferencia. Es el puente emocional entre la oferta formal y la decisión del candidato.
                </p>

                <div className="flex gap-3">
                     <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-xl font-bold text-xs hover:scale-105 transition-transform">
                        <PhoneCall className="w-4 h-4" />
                        Llamado
                     </button>
                     <div className="flex -space-x-2 overflow-hidden">
                        <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                     </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Process Grid */}
        <div className="lg:col-span-7 h-full flex flex-col">
            <div className="grid grid-cols-2 gap-4 h-full">
            {STAR_MODEL.map((step, i) => (
                <div key={i} className={`
                    p-6 rounded-[2rem] border bg-white/80 backdrop-blur-md
                    flex flex-col justify-between
                    transition-all duration-300 cursor-default hover:scale-[1.02] hover:shadow-lg
                    ${step.color.replace('bg-', 'border-').replace('text-', 'text-').split(' ')[2]}
                `}>
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-5xl font-black opacity-10 font-brand">{step.letter}</span>
                        <div className={`p-2 rounded-full bg-opacity-10 ${step.color.replace('border-', 'bg-').split(' ')[0]} ${step.color.split(' ')[1]}`}>
                           {i === 0 ? <CheckCircle className="w-5 h-5" /> : i === 1 ? <Stethoscope className="w-5 h-5" /> : <div className="w-5 h-5 rounded-full bg-current opacity-20" />}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-black mb-1 font-brand uppercase tracking-tight text-slate-900 leading-none">{step.meaning}</h3>
                        <p className="font-medium text-xs leading-relaxed text-slate-500 line-clamp-3">
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