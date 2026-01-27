import React from 'react';
import { Download, Mail } from 'lucide-react';

export const Closing: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center text-center max-w-5xl mx-auto relative w-full px-4">
      
      {/* CSS Confetti */}
      <div className="confetti bg-purple-500 left-[20%]" style={{ animationDelay: '0.1s' }}></div>
      <div className="confetti bg-pink-500 left-[80%]" style={{ animationDelay: '0.5s' }}></div>
      <div className="confetti bg-orange-400 left-[50%]" style={{ animationDelay: '0.3s' }}></div>

      <div className="animate-enter mb-12">
        <h2 className="text-7xl md:text-9xl font-brand font-black text-slate-900 mb-6 tracking-tighter">
            GRACIAS
        </h2>
        <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Hagamos que cada ingreso cuente. <br/>
            <span className="text-purple-600 font-bold">Tu rol es la clave del éxito.</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 animate-enter delay-200">
         <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 text-sm rounded-full hover:bg-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 focus:outline-none ring-offset-2 focus:ring-2">
            <span>Descargar Guía PDF</span>
            <Download className="w-4 h-4 ml-2 group-hover:animate-bounce" />
         </button>
         
         <a href="mailto:mbarrull@fyo.com" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-600 transition-all duration-200 bg-white border-2 border-slate-200 text-sm rounded-full hover:border-purple-200 hover:text-purple-600 hover:scale-105 hover:shadow-lg focus:outline-none">
            <span>mbarrull@fyo.com</span>
            <Mail className="w-4 h-4 ml-2" />
         </a>
      </div>

    </section>
  );
};