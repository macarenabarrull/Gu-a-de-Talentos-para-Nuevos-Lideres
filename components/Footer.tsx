import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 text-zinc-500 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              fyo <span className="text-xs px-2 py-0.5 rounded border border-white/10 text-zinc-500 font-normal">Talento</span>
          </span>
        </div>
        <div className="text-sm text-center md:text-right">
          <p className="mb-2 text-zinc-400 font-medium">Recordatorio: Período de Prueba</p>
          <p className="text-zinc-600 font-light">
            Un mes antes de finalizar, contactamos para confirmar.<br/>
            Escuchamos su experiencia para seguir mejorando.
          </p>
        </div>
      </div>
    </footer>
  );
};