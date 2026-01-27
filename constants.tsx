import { 
  Search, 
  Megaphone, 
  Users, 
  MessageSquare, 
  FileCheck, 
  PartyPopper, 
  UserPlus, 
  Gift, 
  Briefcase, 
  Globe 
} from 'lucide-react';
import { ProcessStep, TimingStat, SourcingChannel, EvaluationType, KanbanColumn, StarStep, OnboardingTip } from './types';

// Slide: Process Roadmap
export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, phase: "Inicio", title: "Detección", description: "Datos generales y claves del perfil.", icon: Search },
  { id: 2, phase: "Difusión", title: "Comunicación", description: "Interna y Referidos.", icon: Megaphone },
  { id: 3, phase: "Hunting", title: "Selección", description: "Perfiles acordes al KickOff.", icon: Users },
  { id: 4, phase: "Conocer", title: "Entrevistas", description: "Individuales con Líder/Gerente.", icon: MessageSquare },
  { id: 5, phase: "Cierre", title: "Propuesta", description: "Armado y análisis de equipo.", icon: FileCheck },
  { id: 6, phase: "Ingreso", title: "Onboarding", description: "El 1er día fyo.", icon: PartyPopper }
];

// Slide: Timing SLA
export const TIMING_STATS: TimingStat[] = [
  { role: "Referidos / Junior", range: "35-45 días", color: "bg-green-50 border-green-200 text-green-800" },
  { role: "Semi Senior", range: "40-60 días", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { role: "Senior", range: "55-75 días", color: "bg-purple-50 border-purple-200 text-purple-800" },
  { role: "Liderazgo", range: "70-90 días", color: "bg-orange-50 border-orange-200 text-orange-800" },
];

// Slide: Sourcing Actions (Not a funnel anymore)
export const SOURCING_CHANNELS: SourcingChannel[] = [
  { title: "Promoción Interna", description: "1 año antigüedad + buena performance.", icon: UserPlus, percentage: "Talento Interno" },
  { title: "Programa Referidos", description: "Si pasa la prueba, ¡Gift Card para vos!", icon: Gift, percentage: "Red de Contactos" },
  { title: "Jóvenes Profesionales", description: "Semillero de formación comercial.", icon: Briefcase, percentage: "Semillero" },
  { title: "Búsqueda Externa", description: "Consultoras y Mercado.", icon: Globe, percentage: "Mercado Abierto" }
];

// Slide: Evaluation Matrix
export const EVALUATION_MATRIX: EvaluationType[] = [
  { role: "Analistas", method: "Psicotécnico", focus: "Técnico + Cultural" },
  { role: "Líderes / Coord.", method: "Competencias", focus: "Gestión + Liderazgo" },
  { role: "Programa JP", method: "Assessment Center", focus: "Potencial + Psicotécnico" }
];

// Slide: Closing / Medical
export const STAR_MODEL: StarStep[] = [
  { letter: "1", meaning: "Propuesta", question: "Mirada 360º + Equidad Interna + 'Queremos que seas parte'.", color: "bg-purple-50 text-purple-900 border-purple-100" },
  { letter: "2", meaning: "Médico", question: "Exámenes obligatorios pre-ocupacionales.", color: "bg-blue-50 text-blue-900 border-blue-100" },
  { letter: "3", meaning: "Alta", question: "Carga en ServiceDesk para accesos y licencias.", color: "bg-green-50 text-green-900 border-green-100" },
  { letter: "4", meaning: "Bienvenida", question: "Coordinación de fecha y Onboarding.", color: "bg-pink-50 text-pink-900 border-pink-100" }
];

// Slide: Onboarding Kanban
export const ONBOARDING_KANBAN: KanbanColumn[] = [
  {
    id: "pre",
    title: "Antes de llegar",
    emoji: "🎒",
    tasks: [
      { id: "1", content: "Asegurar accesos y notebook", tag: "Líder" },
      { id: "2", content: "Ficha de inducción lista", tag: "RRHH" },
      { id: "3", content: "Evitar el desorden", tag: "Equipo" }
    ]
  },
  {
    id: "day1",
    title: "El Primer Día",
    emoji: "👋",
    tasks: [
      { id: "4", content: "Bienvenida cálida (sonrisa)", tag: "Líder" },
      { id: "5", content: "Presentalo con intención", tag: "Líder" },
      { id: "6", content: "Gestión del almuerzo", tag: "Equipo" },
      { id: "7", content: "Cerrar el día: '¿Cómo te sentiste?'", tag: "Líder" }
    ]
  },
  {
    id: "month1",
    title: "Seguimiento",
    emoji: "🤝",
    tasks: [
      { id: "8", content: "Buscar un Aliado (Referente)", tag: "Equipo" },
      { id: "9", content: "Compartí tiempo (no lo dejes solo)", tag: "Líder" },
      { id: "10", content: "Feedback Período Prueba", tag: "RRHH" }
    ]
  }
];

// Slide: Onboarding Tips
export const ONBOARDING_TIPS: OnboardingTip[] = [
  { title: "Presencia", description: "Tu cercanía hace la diferencia. El objetivo es que sienta: 'Me estaban esperando'." },
  { title: "Pertenencia", description: "Como líder, sos el primer referente. Transmitís cultura y confianza desde el minuto cero." },
  { title: "Sembrar", description: "Lo que hacés el primer día impacta directamente en su motivación y adaptación futura." },
  { title: "El Aliado", description: "Busca a alguien cercano que acompañe dudas y momentos." },
  { title: "Almuerzo", description: "Organizá con quiénes, qué y cuándo. No dejes que almuerce solo/a el primer día." },
  { title: "Cierre", description: "Terminá el día con una pregunta simple pero poderosa: '¿Cómo te sentiste hoy?'." }
];