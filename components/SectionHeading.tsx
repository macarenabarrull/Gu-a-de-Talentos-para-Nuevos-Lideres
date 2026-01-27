import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-6 lg:mb-10 ${center ? 'text-center' : 'text-left'} animate-enter`}>
      {/* Decorative accent */}
      {!center && (
        <div className="w-8 h-1 lg:w-12 lg:h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mb-3 lg:mb-4 rounded-full" />
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-brand font-black text-slate-900 tracking-tight mb-3 lg:mb-4 uppercase">
        {title}
      </h2>
      
      {center && (
         <div className="w-10 h-1 lg:w-16 lg:h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mb-3 lg:mb-5 rounded-full mx-auto" />
      )}

      {subtitle && (
        <p className="text-sm md:text-base lg:text-xl text-slate-500 max-w-3xl lg:max-w-4xl leading-relaxed font-normal delay-100 animate-enter mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};