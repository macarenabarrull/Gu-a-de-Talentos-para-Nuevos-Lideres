import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { HelpCircle, Lightbulb, Target, Users, Search } from 'lucide-react';

const REFLECTION_CARDS = [
  {
    id: 1,
    icon: Search,
    question: "¿Tengo clara la 'Misión' real del puesto?",
    insight: "No copies una JD vieja. Pensá: ¿Qué problema viene a resolver esta persona en los primeros 6 meses? Ese es tu verdadero norte."
  },
  {
    id: 2,
    icon: Users,
    question: "¿Busco un clon o alguien que complemente?",
    insight: "Buscamos diversidad cognitiva. Si todos piensan igual, el equipo no crece. Definí qué 'superpoder' le falta hoy a tu equipo."
  },
  {
    id: 3,
    icon: Target,
    question: "¿Qué es negociable y qué es excluyente?",
    insight: "La lista de deseos infinita ahuyenta talento. Priorizá: ¿Actitud sobre técnica? ¿Potencial sobre experiencia? Elegí tus batallas."
  }
];

export const DefinitionPhase: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4">
      
      <div className="shrink-0 mb-6 lg:mb-10">
        <SectionHeading 
            title="INTROSPECCIÓN DEL LÍDER 🤔" 
            subtitle="Antes de pedir, hay que definir. El éxito de la búsqueda depende de la claridad de tu pedido."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {REFLECTION_CARDS.map((card) => {
            const isActive = activeCard === card.id;
            return (
                <div 
                    key={card.id}
                    onClick={() => setActiveCard(isActive ? null : card.id)}
                    className={`
                        relative cursor-pointer group h-64 lg:h-80 perspective-1000
                    `}
                >
                    <div className={`
                        w-full h-full relative preserve-3d transition-transform duration-700 rounded-[2rem] shadow-lg
                        ${isActive ? 'rotate-y-180' : ''}
                    `}>
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center hover:border-purple-200 hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-50 group-hover:text-purple-600 transition-all">
                                <card.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-brand font-bold text-slate-900 leading-tight mb-4">
                                {card.question}
                            </h3>
                            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest flex items-center gap-1 bg-purple-50 px-3 py-1 rounded-full">
                                <HelpCircle className="w-3 h-3" />
                                Toca para reflexionar
                            </span>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center text-white">
                            <Lightbulb className="w-8 h-8 text-yellow-300 mb-4 animate-pulse" />
                            <p className="text-sm lg:text-base font-medium leading-relaxed">
                                {card.insight}
                            </p>
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
      
      <div className="mt-8 text-center animate-enter delay-500">
         <p className="text-slate-400 text-xs italic">
            "Definir bien es el 50% de la contratación."
         </p>
      </div>

    </section>
  );
};