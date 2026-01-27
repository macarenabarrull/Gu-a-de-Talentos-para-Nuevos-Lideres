import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-4 lg:mb-8 w-full ${center ? 'flex flex-col items-center' : 'text-left'} animate-enter`}>
      {/* Decorative accent */}
      {!center && (
        <div className="w-8 h-1 lg:w-10 lg:h-1 bg-gradient-to-r from-purple-600 to-pink-500 mb-2 lg:mb-3 rounded-full" />
      )}
      
      <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-brand font-black text-slate-900 tracking-tight mb-2 lg:mb-3 uppercase ${center ? 'text-center' : ''}`}>
        {title}
      </h2>
      
      {center && (
         <div className="w-10 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mb-3 rounded-full" />
      )}

      {subtitle && (
        <p className={`text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl leading-relaxed font-normal delay-100 animate-enter ${center ? 'text-left self-center text-center' : 'text-left'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};