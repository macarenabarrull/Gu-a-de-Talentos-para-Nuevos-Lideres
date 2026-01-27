import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-6 ${center ? 'text-center' : 'text-left'} animate-enter`}>
      {/* Decorative accent */}
      {!center && (
        <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mb-3 rounded-full" />
      )}
      
      <h2 className="text-3xl md:text-4xl font-brand font-black text-slate-900 tracking-tight mb-3 uppercase">
        {title}
      </h2>
      
      {center && (
         <div className="w-10 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mb-3 rounded-full mx-auto" />
      )}

      {subtitle && (
        <p className="text-sm md:text-base text-slate-500 max-w-3xl leading-relaxed font-normal delay-100 animate-enter">
          {subtitle}
        </p>
      )}
    </div>
  );
};