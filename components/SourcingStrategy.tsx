import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SOURCING_CHANNELS, EVALUATION_MATRIX } from '../constants';

export const SourcingStrategy: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full lg:h-auto items-center">
        
        {/* Left: Channels */}
        <div className="lg:col-span-5 flex flex-col justify-center pr-8">
             <SectionHeading 
              title="Atracción & Fuentes 🧲" 
              subtitle="Un ecosistema que combina marca empleadora con búsqueda proactiva."
            />
           <div className="grid grid-cols-1 gap-4 mt-6">
              {SOURCING_CHANNELS.map((channel, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-purple-300 hover:ring-4 hover:ring-purple-50 shadow-sm hover:shadow-lg transition-all group flex items-start gap-5 cursor-pointer">
                    <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                      <channel.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{channel.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{channel.description}</p>
                    </div>
                </div>
              ))}
           </div>
        </div>

        {/* Right: Evaluation (Dark Card for Contrast) */}
        <div className="lg:col-span-7 h-full">
          <div className="h-full min-h-[500px] bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl">
            
            {/* Abstract bg */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-600 rounded-full blur-[100px] opacity-30"></div>

            <div className="relative z-10 mb-12">
               <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest mb-6">
                 ⚖️ Calidad vs Velocidad
               </div>
               <h3 className="text-4xl lg:text-5xl font-bold mb-4">Evaluación de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Potencial</span> 💎</h3>
               <p className="text-slate-400 font-light text-xl leading-relaxed">No buscamos al candidato perfecto en papel, sino el mejor <span className="text-white font-medium">culture-fit</span> para el desafío.</p>
            </div>

            <div className="space-y-4 relative z-10">
                {EVALUATION_MATRIX.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-slate-300 font-bold group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            {i + 1}
                        </span>
                        <span className="font-bold text-xl text-slate-100">{item.role}</span>
                    </div>
                    <span className="text-xs font-bold font-mono text-purple-300 bg-purple-900/50 px-4 py-2 rounded-full border border-purple-500/30">
                        {item.method}
                   </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};