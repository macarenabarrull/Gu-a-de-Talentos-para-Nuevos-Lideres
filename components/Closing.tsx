import React from 'react';
import { Download, Mail, RotateCcw } from 'lucide-react';

interface ClosingProps {
    onRestart?: () => void;
}

export const Closing: React.FC<ClosingProps> = ({ onRestart }) => {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="h-full flex flex-col justify-center items-center text-center max-w-6xl mx-auto relative w-full px-4">
      
      {/* CSS Confetti */}
      <div className="confetti bg-purple-500 left-[20%]" style={{ animationDelay: '0.1s' }}></div>
      <div className="confetti bg-pink-500 left-[80%]" style={{ animationDelay: '0.5s' }}></div>
      <div className="confetti bg-orange-400 left-[50%]" style={{ animationDelay: '0.3s' }}></div>

      <div className="animate-enter mb-10 lg:mb-12 w-full">
        <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-brand font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-6 tracking-tighter drop-shadow-sm pb-2 leading-none">
            MUCHAS GRACIAS
        </h2>
        <div className="bg-white/60 backdrop-blur-md border border-white p-6 lg:p-8 rounded-[2rem] max-w-3xl mx-auto shadow-sm">
            <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
                ¡Listo! Ya tenés la hoja de ruta. <br/>
                <span className="text-slate-900 font-black">Ahora empieza lo divertido: construir tu equipo ideal.</span>
            </p>
        </div>
      </div>

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl animate-enter delay-200">
         
         {/* Download Card */}
         <button 
            onClick={handlePrint}
            className="group relative flex items-center justify-between p-6 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 text-left hover:-translate-y-1"
         >
            <div className="flex flex-col gap-1">
                <span className="text-slate-900 font-black text-lg">Descargar Presentación</span>
                <span className="text-slate-500 text-xs font-medium">Guardá el PDF con la guía completa.</span>
            </div>
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors text-slate-400">
                <Download className="w-6 h-6" />
            </div>
         </button>
         
         {/* Contact Card */}
         <a 
            href="mailto:mbarrull@fyo.com" 
            className="group relative flex items-center justify-between p-6 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-pink-200 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 text-left hover:-translate-y-1"
         >
            <div className="flex flex-col gap-1">
                <span className="text-slate-900 font-black text-lg">Contactar a Talento</span>
                <span className="text-slate-500 text-xs font-medium">¿Dudas? Iniciemos la conversación.</span>
            </div>
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors text-slate-400">
                <Mail className="w-6 h-6" />
            </div>
         </a>

      </div>

      {/* Restart Link */}
      <button 
        onClick={onRestart}
        className="mt-12 animate-enter delay-500 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-purple-600 transition-colors py-2 px-4 rounded-full hover:bg-white/50"
      >
         <RotateCcw className="w-3 h-3" />
         Volver al Inicio
      </button>

    </section>
  );
};