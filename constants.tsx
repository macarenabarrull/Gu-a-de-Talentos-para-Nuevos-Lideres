import { 
  Megaphone, 
  Users, 
  FileCheck, 
  PartyPopper, 
  UserPlus, 
  Gift, 
  Briefcase, 
  Globe, 
  Handshake, 
  Stethoscope, 
  ClipboardList, 
  Target, 
  ScanSearch, 
  MessageSquare 
} from 'lucide-react';
import { ProcessStep, TimingStat, SourcingChannel, EvaluationType, KanbanColumn, StarStep, OnboardingTip, OnboardingTask } from './types';

// Slide: Process Roadmap 
// Standardized Emojis for "3D" look
export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, phase: "Etapa 1", title: "RELEVAMIENTO", description: "Definición estratégica del perfil junto al Líder/Gerente y TBP.", icon: Target, emoji: "🎯" },
  { id: 2, phase: "Etapa 2", title: "COMUNICACION INTERNA", description: "Activación de Programa Referidos (importancia de fomentar) y Postulación Interna (si así se solicita).", icon: Megaphone, emoji: "🌍" },
  { id: 3, phase: "Etapa 3", title: "HUNTING", description: "Atracción de talentos, envío de informes, filtrado de perfiles y realización de feedbacks.", icon: ScanSearch, emoji: "🔍" },
  { id: 4, phase: "Etapa 4", title: "ENTREVISTAS", description: "Pueden ser virtuales o presenciales. Consiste en una evaluación profunda técnica y cultural (Líder + TBP).", icon: Users, emoji: "👥" },
  { id: 5, phase: "Etapa 5", title: "EVALUACIÓN PSICOTECNICA", description: "Psicotécnico y validación de referencias laborales.", icon: ClipboardList, emoji: "📝" },
  { id: 6, phase: "Etapa 6", title: "PROPUESTA FORMAL", description: "Negociación y presentación formal de la propuesta. Explicación integral de toda la propuesta de valor ¡es tu momento de brillar!", icon: FileCheck, emoji: "✍️" },
  { id: 7, phase: "Etapa 7", title: "PRE-INGRESO", description: "Examen médico y alta administrativa (accesos). Importante que carguen el ticket de alta.", icon: Stethoscope, emoji: "🩺" },
  { id: 8, phase: "Etapa 8", title: "ONBOARDING", description: "Bienvenida y almuerzo con el equipo.", icon: PartyPopper, emoji: "🚀" }
];

// Slide: Timing SLA
// Matches the user's attached reference exactly
export const TIMING_STATS: TimingStat[] = [
  { role: "Referidos / Junior", range: "35-45 días", color: "bg-green-50 border-green-200 text-green-800", emoji: "🌱" },
  { role: "Semi Senior", range: "40-60 días", color: "bg-blue-50 border-blue-200 text-blue-800", emoji: "⚡" },
  { role: "Senior", range: "55-75 días", color: "bg-purple-50 border-purple-200 text-purple-800", emoji: "🧠" },
  { role: "Liderazgo", range: "70-90 días", color: "bg-orange-50 border-orange-200 text-orange-800", emoji: "👑" },
];

// Slide: Sourcing Actions
export const SOURCING_CHANNELS: SourcingChannel[] = [
  { 
    title: "POSTULACIÓN INTERNA", 
    description: "Es un acuerdo entre líderes. Los candidatos deben contar con al menos 1 año de antigüedad y estar cumpliendo con los objetivos definidos. Además, la postulación debe formalizarse vía mail a Talentos.", 
    icon: UserPlus, 
    percentage: "Talento Interno", 
    emoji: "🏢" 
  },
  { 
    title: "PROGRAMA REFERIDO", 
    description: "Es clave fomentar este programa. Quienes refieran candidatos recibirán una giftcard en caso de que la persona referida supere el período de prueba.", 
    icon: Gift, 
    percentage: "Red de Contactos", 
    emoji: "🎁" 
  },
  { 
    title: "JÓVENES PROFESIONALES", 
    description: "Si bien es un Programa pensado para la Mesa Comercial, toda la compañía acompaña activamente el desarrollo profesional de los jóvenes profesionales.", 
    icon: Briefcase, 
    percentage: "Semillero", 
    emoji: "🎓" 
  },
  { 
    title: "BÚSQUEDA EXTERNA", 
    description: "Contamos con consultoras que nos acompañan en la atracción de talentos para potenciar nuestras búsquedas.", 
    icon: Globe, 
    percentage: "Consultoras", 
    emoji: "🌎" 
  }
];

// Slide: Evaluation Matrix
// Updated Emojis for consistency
export const EVALUATION_MATRIX: EvaluationType[] = [
  { role: "ANALISTAS", method: "Psicotécnico", focus: "Técnico + Fit Cultural", emoji: "⚡" },
  { role: "LÍDERES", method: "Competencias", focus: "Gestión + Liderazgo + Fit Cultural", emoji: "👑" },
  { role: "PROGRAMA JP", method: "Assessment Center", focus: "Potencial + Psicotécnico + Trabajo en Equipo + Competencias", emoji: "🌟" }
];

// Slide: Closing / Medical
export const STAR_MODEL: StarStep[] = [
  { letter: "1", meaning: "Propuesta", question: "Mirada 360º + Equidad Interna + 'Queremos que seas parte'.", color: "bg-purple-50 text-purple-900 border-purple-100" },
  { letter: "2", meaning: "Médico", question: "Exámenes obligatorios pre-ocupacionales.", color: "bg-blue-50 text-blue-900 border-blue-100" },
  { letter: "3", meaning: "Alta", question: "Carga en ServiceDesk para accesos y licencias.", color: "bg-green-50 text-green-900 border-green-100" },
  { letter: "4", meaning: "Bienvenida", question: "Coordinación de fecha y Onboarding.", color: "bg-pink-50 text-pink-900 border-pink-100" }
];

// Slide: Onboarding Kanban (Structure Only - Tasks moved to Pool in component)
export const ONBOARDING_KANBAN_STRUCTURE: KanbanColumn[] = [
  {
    id: "pre",
    title: "Antes de llegar",
    emoji: "🎒",
    tasks: []
  },
  {
    id: "day1",
    title: "El Primer Día",
    emoji: "👋",
    tasks: []
  },
  {
    id: "month1",
    title: "Seguimiento",
    emoji: "🤝",
    tasks: []
  }
];

// All tasks for the pool (Updated to match user request)
export const ALL_ONBOARDING_TASKS: OnboardingTask[] = [
  // LIDER Tasks
  { id: "l1", content: "Alta de usuario - Ticket ABM", tag: "Líder" },
  { id: "l2", content: "Presentación de propuesta de valor", tag: "Líder" },
  { id: "l3", content: "Seguimiento y cercanía al candidato", tag: "Líder" },
  { id: "l4", content: "Estrategia SILLA VACÍA", tag: "Líder" },
  { id: "l5", content: "Validación de búsqueda", tag: "Líder" },
  { id: "l6", content: "Entrevistas individuales", tag: "Líder" },
  { id: "l7", content: "Feedback constante", tag: "Líder" },
  { id: "l8", content: "Gestión de almuerzo", tag: "Líder" },
  { id: "l9", content: "Reunion con equipo", tag: "Líder" },
  { id: "l10", content: "Presentación cálida", tag: "Líder" },
  
  // TALENTO Tasks
  { id: "t1", content: "Relevamiento de perfil", tag: "Talento" },
  { id: "t2", content: "Armado de aviso", tag: "Talento" },
  { id: "t3", content: "Armado de propuesta de valor", tag: "Talento" },
  { id: "t4", content: "Coordinación con consultoras", tag: "Talento" },
  { id: "t5", content: "Gestión de legajo y documentación", tag: "Talento" },
  { id: "t6", content: "Gestión de agendas", tag: "Talento" },
  { id: "t7", content: "Gestión de psicotécnico", tag: "Talento" },
  { id: "t8", content: "Gestión de examen médico", tag: "Talento" },
  { id: "t9", content: "Entrevistas individuales", tag: "Talento" }
];

// Slide: Onboarding Tips
export const ONBOARDING_TIPS: OnboardingTip[] = [
  { 
    title: "PRESENCIA", 
    description: "Tu cercanía hace la diferencia. Que sienta: 'Me estaban esperando', preséntalo al equipo y dale una bienvenida cálida." 
  },
  { 
    title: "PERTENENCIA", 
    description: "Sos el primer referente. Transmitís cultura desde el minuto cero.", 
    leaderTip: "Contale historia y anécdotas de fyo." 
  },
  { 
    title: "SEMBRAR", 
    description: "Lo que hacés el primer día impacta en su motivación futura.", 
    leaderTip: "Mostrale cómo su trabajo impacta en el negocio." 
  },
  { 
    title: "ALIADO", 
    description: "Busca a alguien cercano que acompañe dudas y momentos, que sea tu aliado en la inducción.", 
    leaderTip: "Elegí a alguien empático y cercano que te ayude, no necesariamente el más técnico." 
  },
  { 
    title: "ALMUERZO", 
    description: "Organizá con quiénes y qué. No dejes que almuerce solo/a." 
  },
  { 
    title: "FIN DEL DÍA", 
    description: "Terminá el día o la semana preguntando: '¿Cómo te sentiste hoy?'.", 
    leaderTip: "Escuchá activamente, sin justificar si algo salió mal." 
  }
];