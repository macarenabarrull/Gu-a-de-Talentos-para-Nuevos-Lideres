import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Filter, Eye, Scale, Fingerprint, BrainCircuit } from 'lucide-react';

const BIAS_CARDS = [
  {
    id: 'bias1',
    title: "Efecto Halo",
    desc: "¿Te gustó porque te cayó bien? No confundas simpatía con competencia.",
    icon: SparklesIcon
  },
  {
    id: 'bias2',
    title: "Sesgo de Confirmación",
    desc: "¿Solo escuchás lo que querés oír? Buscá evidencia que contradiga tu intuición.",
    icon: Filter
  },
  {
    id: 'bias3',
    title: "Efecto Semejanza",
    desc: "¿Elegís a quien se parece a vos? Buscá complementariedad, no espejos.",
    icon: Fingerprint
  }
];

function SparklesIcon(props: any) {
    return <Eye {...props} />; // Placeholder re-use
}

export const SourcingStrategy: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-6 lg:mb-10 text-center lg:text-left">
            <SectionHeading 
            title="FILTRAR Y ELEGIR 🎯" 
            subtitle="Tu rol no es solo entrevistar, es detectar talento objetivamente. ¿Cómo estás filtrando?"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
           
           {/* Left: Interactive Bias Check */}
           <div className="lg:col-span-5 flex flex-col gap-4">
               <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mb-2">
                   <h4 className="flex items-center gap-2 font-bold text-purple-800 text-sm uppercase mb-1">
                       <BrainCircuit className="w-4 h-4" />
                       Desactiva tus sesgos
                   </h4>
                   <p className="text-xs text-purple-700">Seleccioná una tarjeta para analizar tu mirada.</p>
               </div>

               {BIAS_CARDS.map((item) => (
                   <button 
                        key={item.id}
                        onClick={() => setSelected(item.id)}
                        className={`
                            text-left p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden
                            ${selected === item.id ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105' : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300 hover:shadow-md'}
                        `}
                   >
                       <div className="flex items-start gap-4 relative z-10">
                           <div className={`p-2 rounded-lg ${selected === item.id ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-purple-50 group-hover:text-purple-600'}`}>
                                <item.icon className="w-5 h-5" />
                           </div>
                           <div>
                               <h3 className={`font-brand font-bold text-sm mb-1 ${selected === item.id ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                               <p className={`text-xs leading-relaxed ${selected === item.id ? 'text-slate-300' : 'text-slate-500'}`}>{item.desc}</p>
                           </div>
                       </div>
                   </button>
               ))}
           </div>

           {/* Right: The Objective Reality */}
           <div className="lg:col-span-7">
                <div className="bg-white/80 backdrop-blur-xl border border-white p-6 lg:p-8 rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-[40px] opacity-30"></div>
                    
                    <h3 className="font-brand font-bold text-2xl text-slate-900 mb-6 flex items-center gap-3">
                        <Scale className="w-6 h-6 text-slate-900" />
                        La Mirada Objetiva
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Evidencia Conductual</h4>
                                <p className="text-slate-500 text-xs">No preguntes "¿Qué harías?". Preguntá "¿Qué hiciste?". El comportamiento pasado predice el futuro.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Fit Cultural Real</h4>
                                <p className="text-slate-500 text-xs">No es "que sea como nosotros". Es que comparta nuestros valores (Agilidad, Cliente, Equipo) aunque venga de otro mundo.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Feedback Ágil</h4>
                                <p className="text-slate-500 text-xs">Si viste algo bueno, decidí rápido. Si viste algo malo, liberá al candidato rápido. El tiempo mata la experiencia.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

      </div>
    </section>
  );
};