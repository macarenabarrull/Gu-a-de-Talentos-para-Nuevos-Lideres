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
  { id: 1, phase: "Paso 1", title: "Relevamiento", description: "Definición estratégica del perfil junto al Líder y RRHH.", icon: Target, emoji: "🎯" },
  { id: 2, phase: "Paso 2", title: "Sourcing", description: "Activación de canales: Referidos, LinkedIn y Base de Datos.", icon: ScanSearch, emoji: "🌍" },
  { id: 3, phase: "Paso 3", title: "Screening", description: "Primer filtro telefónico para validar fit básico y pretensiones.", icon: MessageSquare, emoji: "🔍" },
  { id: 4, phase: "Paso 4", title: "Entrevistas", description: "Evaluación profunda técnica y cultural (Líder + Equipo).", icon: Users, emoji: "👥" },
  { id: 5, phase: "Paso 5", title: "Evaluaciones", description: "Psicotécnico y validación de referencias laborales.", icon: ClipboardList, emoji: "📝" },
  { id: 6, phase: "Paso 6", title: "Oferta", description: "Negociación y presentación formal de la propuesta.", icon: FileCheck, emoji: "✍️" },
  { id: 7, phase: "Paso 7", title: "Pre-ingreso", description: "Exámen médico y alta administrativa (accesos).", icon: Stethoscope, emoji: "🩺" },
  { id: 8, phase: "Paso 8", title: "Inducción", description: "Bienvenida y plan de aterrizaje (Onboarding).", icon: PartyPopper, emoji: "🚀" }
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
  { title: "Postulación Interna", description: "1 año antigüedad + performance.", icon: UserPlus, percentage: "Talento Interno", emoji: "🏢" },
  { title: "Programa Referidos", description: "Si la persona pasa el período de prueba ¡giftcard!", icon: Gift, percentage: "Red de Contactos", emoji: "🎁" },
  { title: "Jóvenes Profesionales", description: "Semillero comercial.", icon: Briefcase, percentage: "Semillero", emoji: "🎓" },
  { title: "Búsqueda Externa", description: "Consultoras y Mercado.", icon: Globe, percentage: "Mercado Abierto", emoji: "🌎" }
];

// Slide: Evaluation Matrix
// Updated Emojis for consistency
export const EVALUATION_MATRIX: EvaluationType[] = [
  { role: "Analistas", method: "Psicotécnico", focus: "Técnico + Cultural", emoji: "⚡" },
  { role: "Líderes / Coord.", method: "Competencias", focus: "Gestión + Liderazgo", emoji: "👑" },
  { role: "Programa JP", method: "Assessment Center", focus: "Potencial + Psicotécnico", emoji: "🌟" }
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

// All tasks for the pool
export const ALL_ONBOARDING_TASKS: OnboardingTask[] = [
  { id: "critical1", content: "Anuncio al equipo (48hs antes)", tag: "Líder" },
  { id: "1", content: "Asegurar accesos y notebook", tag: "Líder" },
  { id: "2", content: "Ficha de inducción lista", tag: "TBP" },
  { id: "3", content: "Evitar el desorden", tag: "Equipo" },
  { id: "4", content: "Bienvenida cálida (sonrisa)", tag: "Líder" },
  { id: "5", content: "Presentalo con intención", tag: "Líder" },
  { id: "6", content: "Gestión del almuerzo", tag: "Equipo" },
  { id: "7", content: "Cierre: '¿Cómo te sentiste?'", tag: "Líder" },
  { id: "8", content: "Buscar un Aliado (Referente)", tag: "Equipo" },
  { id: "9", content: "Compartí tiempo (no solo)", tag: "Líder" },
  { id: "10", content: "Feedback Período Prueba", tag: "TBP" },
  { id: "p1", content: "Presentación al equipo", tag: "Líder" },
  { id: "p2", content: "Configurar correo", tag: "Equipo" }
];

// Slide: Onboarding Tips
export const ONBOARDING_TIPS: OnboardingTip[] = [
  { title: "Presencia", description: "Tu cercanía hace la diferencia. Que sienta: 'Me estaban esperando'." },
  { title: "Pertenencia", description: "Sos el primer referente. Transmitís cultura desde el minuto cero.", leaderTip: "Contale historia y anécdotas de fyo." },
  { title: "Sembrar", description: "Lo que hacés el primer día impacta en su motivación futura.", leaderTip: "Mostrale cómo su trabajo impacta en el negocio." },
  { title: "El Aliado", description: "Busca a alguien cercano que acompañe dudas y momentos.", leaderTip: "Elegí a alguien empático, no necesariamente el más técnico." },
  { title: "Almuerzo", description: "Organizá con quiénes y qué. No dejes que almuerce solo/a." },
  { title: "Cierre", description: "Terminá el día preguntando: '¿Cómo te sentiste hoy?'.", leaderTip: "Escuchá activamente, sin justificar si algo salió mal." }
];