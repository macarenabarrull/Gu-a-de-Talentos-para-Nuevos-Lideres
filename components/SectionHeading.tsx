import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {/* Decorative accent for left aligned headings */}
      {!center && (
        <div className="w-12 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mb-6 rounded-full" />
      )}
      
      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
        {title}
      </h2>
      
      {center && (
         <div className="w-16 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mb-8 rounded-full mx-auto" />
      )}

      {subtitle && (
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};