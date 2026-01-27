import React from 'react';
import { SectionHeading } from './SectionHeading';
import { STAR_MODEL } from '../constants';
import { Stethoscope, CheckCircle, AlertCircle, PhoneCall, Sparkles } from 'lucide-react';

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
        
        {/* Left Side: Hero Card (Premium Gradient) */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="flex-1 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-500 text-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(192,38,211,0.5)] relative overflow-hidden group flex flex-col justify-center border border-white/20">
             
             {/* Background Effects (Glassy blobs) */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] -mr-10 -mt-10 opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-700"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full blur-[60px] -ml-10 -mb-10 opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700"></div>
             
             {/* Texture */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                    <Sparkles className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                    Acción de Líder
                </div>
                
                <h3 className="font-brand font-black text-4xl lg:text-5xl mb-6 leading-[0.9] text-white drop-shadow-sm">
                    "Queremos que seas parte"
                </h3>
                
                <p className="text-purple-50 text-sm lg:text-base leading-relaxed mb-10 border-l-4 border-white/30 pl-5 font-medium">
                    Tu llamado marca la diferencia. Es el puente emocional entre la oferta formal y la decisión del candidato.
                </p>

                <div className="flex items-center gap-4">
                     <button className="flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-2xl font-bold text-xs hover:scale-105 transition-all shadow-lg hover:shadow-xl hover:bg-purple-50 group/btn">
                        <PhoneCall className="w-4 h-4 group-hover/btn:animate-wiggle" />
                        Hacer el Llamado
                     </button>
                     <div className="flex -space-x-3 overflow-hidden pl-2">
                        <div className="w-10 h-10 rounded-full bg-purple-200 border-2 border-purple-500"></div>
                        <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-purple-500"></div>
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
                    p-6 rounded-[2rem] border bg-white/60 backdrop-blur-xl
                    flex flex-col justify-between
                    transition-all duration-300 cursor-default hover:scale-[1.02] hover:shadow-xl
                    hover:bg-white
                    ${step.color.replace('bg-', 'border-').replace('text-', 'text-').split(' ')[2]}
                `}>
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-6xl font-black opacity-10 font-brand absolute bottom-4 right-4">{step.letter}</span>
                        <div className={`p-3 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-sm border border-slate-100 ${step.color.split(' ')[1]}`}>
                           {i === 0 ? <CheckCircle className="w-6 h-6" /> : i === 1 ? <Stethoscope className="w-6 h-6" /> : <div className="w-6 h-6 rounded-full bg-current opacity-20" />}
                        </div>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-lg font-black mb-2 font-brand uppercase tracking-tight text-slate-900 leading-none">{step.meaning}</h3>
                        <p className="font-medium text-xs leading-relaxed text-slate-600 line-clamp-3">
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