import React from 'react';
import { CalendarCheck, HeartHandshake } from 'lucide-react';

export const Closing: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto relative">
      
      {/* CSS Confetti */}
      <div className="confetti bg-purple-500 left-[20%]" style={{ animationDelay: '0.1s' }}></div>
      <div className="confetti bg-pink-500 left-[80%]" style={{ animationDelay: '0.5s' }}></div>
      <div className="confetti bg-orange-400 left-[50%]" style={{ animationDelay: '0.3s' }}></div>

      {/* Trial Period Info */}
      <div className="animate-enter w-full bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 md:p-10 mb-10 text-left relative overflow-hidden group hover:border-purple-200 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 animate-pulse">
                <CalendarCheck className="w-10 h-10" />
             </div>
             
             <div>
                <h3 className="text-2xl font-brand font-black text-slate-900 mb-2 uppercase">Período de Prueba</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Un mes antes de finalizar, <strong>Talento</strong> te contactará para confirmar la incorporación definitiva.
                </p>
                <div className="bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2">
                   <HeartHandshake className="w-4 h-4" />
                   Reunión de Feedback con el colaborador
                </div>
             </div>
          </div>
      </div>

      <h2 className="animate-enter delay-100 text-6xl md:text-8xl font-brand font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 tracking-tighter">
        GRACIAS
      </h2>

      <p className="animate-enter delay-200 text-base md:text-lg text-slate-500 font-medium">
        Hagamos que cada ingreso cuente.
      </p>

    </section>
  );
};