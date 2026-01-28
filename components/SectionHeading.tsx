import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-4 w-full ${center ? 'flex flex-col items-center' : 'text-left'} animate-enter`}>
      
      {/* Kicker / Eyebrow (Uppercase is allowed here for hierarchy) */}
      <div className={`flex items-center gap-2 mb-2 ${center ? 'justify-center' : 'justify-start'}`}>
          {!center && <div className="w-6 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />}
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Guía de Selección
          </span>
          {center && <div className="w-6 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />}
      </div>
      
      {/* Title: Sentence Case for elegance */}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-brand font-black text-slate-900 tracking-tight leading-none mb-3 ${center ? 'text-center' : ''}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-sm text-slate-600 max-w-3xl leading-relaxed font-medium delay-100 animate-enter ${center ? 'text-center' : 'text-left'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};