import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`w-full shrink-0 ${center ? 'flex flex-col items-center' : 'text-left'} animate-enter mb-2 md:mb-6`}>
      
      {/* Kicker / Eyebrow */}
      <div className={`flex items-center gap-3 mb-2 ${center ? 'justify-center' : 'justify-start'}`}>
          {!center && <div className="w-8 h-[2px] bg-gradient-to-r from-purple-600 to-transparent" />}
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            Proceso de Selección
          </span>
          {center && <div className="w-8 h-[2px] bg-gradient-to-l from-purple-600 to-transparent" />}
      </div>
      
      {/* Title: Responsive Typography */}
      <h2 className={`text-2xl md:text-4xl lg:text-5xl font-brand font-black text-slate-950 tracking-[-0.04em] leading-none mb-2 md:mb-4 ${center ? 'text-center' : ''}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-sm md:text-base text-slate-500 max-w-3xl leading-relaxed font-medium delay-100 animate-enter tracking-tight ${center ? 'text-center' : 'text-left'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};