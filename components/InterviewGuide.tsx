import React from 'react';
import { SectionHeading } from './SectionHeading';
import { STAR_MODEL } from '../constants';
import { Stethoscope, CheckCircle, Sparkles, PhoneCall, FileSignature, HeartHandshake, Siren } from 'lucide-react';

export const InterviewGuide: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-6 lg:mb-10">
        <SectionHeading 
            title="LA RECTA FINAL 🏁" 
            subtitle="El momento clave: Tu rol es fundamental para cerrar al candidato."
        />
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-4 items-stretch">
        
        {/* Left Side: Emotional Call To Action */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="flex-1 bg-slate-900 text-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl shadow-purple-900/20 relative overflow-hidden group flex flex-col justify-center border border-slate-800">
             
             {/* Abstract Graphics */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-[80px] -mr-16 -mt-16 opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-purple-300 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Sparkles className="w-3 h-3" />
                    Momento de la Verdad
                </div>
                
                <h3 className="font-brand font-black text-3xl lg:text-5xl mb-6 leading-tight">
                    "Queremos que seas parte"
                </h3>
                
                <div className="space-y-6 mb-8">
                    <div className="flex gap-4 items-start">
                        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 shrink-0">
                            <PhoneCall className="w-5 h-5" />
                        </div>
                        <p className="text-slate-300 text-xs lg:text-sm leading-relaxed">
                            <strong className="text-white block mb-1">El Llamado del Líder</strong>
                            No dejes que RRHH dé la noticia solo. Tu llamado valida la elección y genera pertenencia inmediata.
                        </p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400 shrink-0">
                            <HeartHandshake className="w-5 h-5" />
                        </div>
                        <p className="text-slate-300 text-xs lg:text-sm leading-relaxed">
                            <strong className="text-white block mb-1">Cierre Emocional</strong>
                            Más allá del salario, vendé el proyecto, el equipo y el desafío.
                        </p>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Bento Grid of Steps */}
        <div className="lg:col-span-7 h-full flex flex-col">
            <div className="grid grid-cols-2 gap-4 h-full">
                
                {/* Card 1 */}
                <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:border-purple-200 flex flex-col justify-between group">
                    <div className="flex justify-between">
                        <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform"><CheckCircle className="w-6 h-6"/></div>
                        <span className="text-4xl font-brand font-black text-slate-100">1</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Propuesta Formal</h4>
                        <p className="text-xs text-slate-500">Análisis salarial, equidad interna y beneficios.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:border-blue-200 flex flex-col justify-between group">
                    <div className="flex justify-between">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform"><Stethoscope className="w-6 h-6"/></div>
                        <span className="text-4xl font-brand font-black text-slate-100">2</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Médico</h4>
                        <p className="text-xs text-slate-500">Estudios de ley obligatorios.</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:border-orange-200 flex flex-col justify-between group">
                    <div className="flex justify-between">
                        <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl group-hover:scale-110 transition-transform"><FileSignature className="w-6 h-6"/></div>
                        <span className="text-4xl font-brand font-black text-slate-100">3</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Alta Administrativa</h4>
                        <p className="text-xs text-slate-500">ServiceDesk, accesos y herramientas.</p>
                    </div>
                </div>

                {/* Card 4 - Highlight */}
                <div className="bg-gradient-to-br from-slate-100 to-white p-5 rounded-[2rem] border border-slate-200 shadow-inner flex flex-col justify-center items-center text-center group">
                    <div className="mb-3 p-4 bg-white rounded-full shadow-sm text-purple-600 group-hover:animate-bounce">
                        <Siren className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Fecha de Ingreso</h4>
                    <p className="text-[10px] text-slate-500 px-4">Coordinar con tiempo para que todo esté listo el Día 1.</p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};