import React from 'react';
import { Download, Mail, Heart } from 'lucide-react';

export const Closing: React.FC = () => {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="h-full flex flex-col justify-center items-center text-center max-w-5xl mx-auto relative w-full px-4">
      
      {/* CSS Confetti */}
      <div className="confetti bg-purple-500 left-[20%]" style={{ animationDelay: '0.1s' }}></div>
      <div className="confetti bg-pink-500 left-[80%]" style={{ animationDelay: '0.5s' }}></div>
      <div className="confetti bg-orange-400 left-[50%]" style={{ animationDelay: '0.3s' }}></div>

      <div className="animate-enter mb-10 lg:mb-16">
        <h2 className="text-7xl md:text-9xl font-brand font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-6 tracking-tighter drop-shadow-sm pb-2">
            GRACIAS
        </h2>
        <div className="bg-white/50 backdrop-blur-sm border border-white p-6 rounded-3xl max-w-2xl mx-auto shadow-sm">
            <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
                Hagamos que cada ingreso cuente. <br/>
                <span className="text-slate-900 font-black">Tu liderazgo es lo que marca la diferencia.</span>
            </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 animate-enter delay-200">
         <button 
            onClick={handlePrint}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 text-sm rounded-full hover:bg-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 focus:outline-none ring-offset-2 focus:ring-2"
         >
            <span>Descargar PDF</span>
            <Download className="w-4 h-4 ml-2 group-hover:animate-bounce" />
         </button>
         
         <a href="mailto:mbarrull@fyo.com" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-600 transition-all duration-200 bg-white border-2 border-slate-200 text-sm rounded-full hover:border-purple-200 hover:text-purple-600 hover:scale-105 hover:shadow-lg focus:outline-none">
            <span>mbarrull@fyo.com</span>
            <Mail className="w-4 h-4 ml-2" />
         </a>
      </div>

      <div className="absolute bottom-10 animate-enter delay-500 opacity-50 text-[10px] uppercase tracking-widest text-slate-400 flex items-center gap-2">
         Hecho con <Heart className="w-3 h-3 text-red-400 fill-red-400" /> por Talento fyo
      </div>

    </section>
  );
};