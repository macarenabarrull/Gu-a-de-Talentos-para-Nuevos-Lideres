import React from 'react';
import { CalendarCheck, HeartHandshake } from 'lucide-react';

export const Closing: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center text-center max-w-6xl mx-auto relative w-full">
      
      {/* CSS Confetti */}
      <div className="confetti bg-purple-500 left-[20%]" style={{ animationDelay: '0.1s' }}></div>
      <div className="confetti bg-pink-500 left-[80%]" style={{ animationDelay: '0.5s' }}></div>
      <div className="confetti bg-orange-400 left-[50%]" style={{ animationDelay: '0.3s' }}></div>

      {/* Trial Period Info */}
      <div className="animate-enter w-full bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 md:p-12 lg:p-16 mb-10 lg:mb-20 text-left relative overflow-hidden group hover:border-purple-200 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
             <div className="shrink-0 w-20 h-20 lg:w-32 lg:h-32 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 animate-pulse">
                <CalendarCheck className="w-10 h-10 lg:w-16 lg:h-16" />
             </div>
             
             <div>
                <h3 className="text-2xl lg:text-4xl font-brand font-black text-slate-900 mb-2 lg:mb-4 uppercase">Período de Prueba</h3>
                <p className="text-slate-600 text-sm lg:text-xl leading-relaxed mb-4 lg:mb-8 max-w-2xl">
                  Un mes antes de finalizar, <strong>Talento</strong> te contactará para confirmar la incorporación definitiva.
                </p>
                <div className="bg-purple-600 text-white text-xs lg:text-lg font-bold px-4 py-2 lg:px-6 lg:py-3 rounded-lg inline-flex items-center gap-2 lg:gap-3 hover:bg-purple-700 transition-colors cursor-default">
                   <HeartHandshake className="w-4 h-4 lg:w-6 lg:h-6" />
                   Reunión de Feedback con el colaborador
                </div>
             </div>
          </div>
      </div>

      <h2 className="animate-enter delay-100 text-6xl md:text-8xl lg:text-9xl font-brand font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 lg:mb-10 tracking-tighter">
        GRACIAS
      </h2>

      <p className="animate-enter delay-200 text-base md:text-lg lg:text-2xl text-slate-500 font-medium">
        Hagamos que cada ingreso cuente.
      </p>

    </section>
  );
};