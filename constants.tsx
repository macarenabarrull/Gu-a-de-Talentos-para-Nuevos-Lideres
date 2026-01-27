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
import { ProcessStep, TimingStat, SourcingChannel, EvaluationType, OnboardingTip } from './types';

// Slide 3: Etapas del Proceso
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "1. Definir",
    description: "Clarificamos el 'para qué'. Armamos perfil técnico y cultural.",
    icon: Search
  },
  {
    id: 2,
    title: "2. Publicar",
    description: "Activamos canales internos y redes externas.",
    icon: Megaphone
  },
  {
    id: 3,
    title: "3. Buscar",
    description: "Filtramos y contactamos proactivamente (Hunting).",
    icon: Users
  },
  {
    id: 4,
    title: "4. Conocer",
    description: "Entrevistas con Talento y con vos (Líder del área).",
    icon: MessageSquare
  },
  {
    id: 5,
    title: "5. Ofertar",
    description: "Validamos equidad interna y presentamos la propuesta.",
    icon: FileCheck
  },
  {
    id: 6,
    title: "6. Celebrar",
    description: "¡Es un sí! Coordinamos su ingreso y bienvenida.",
    icon: PartyPopper
  }
];

// Slide 4: Tiempos estimados (Light mode branding)
export const TIMING_STATS: TimingStat[] = [
  { role: "Referidos", range: "30 días", color: "bg-purple-50 border-purple-100 text-purple-700" },
  { role: "Junior", range: "45 días", color: "bg-pink-50 border-pink-100 text-pink-700" },
  { role: "Semi Senior", range: "60 días", color: "bg-indigo-50 border-indigo-100 text-indigo-700" },
  { role: "Senior", range: "75 días", color: "bg-slate-50 border-slate-200 text-slate-700" },
  { role: "Liderazgo", range: "90 días", color: "bg-white border-slate-200 text-slate-900 shadow-sm" },
];

// Slide 6: Estrategia de Atracción
export const SOURCING_CHANNELS: SourcingChannel[] = [
  {
    title: "Mercado Interno",
    description: "Miramos adentro primero. Talento fyo con +1 año y buen desempeño.",
    icon: UserPlus
  },
  {
    title: "Red de Referidos",
    description: "El equipo atrae equipo. Bonificación por referir talento exitoso.",
    icon: Gift
  },
  {
    title: "Semillero JP",
    description: "Jóvenes Profesionales formados en nuestra cultura comercial.",
    icon: Briefcase
  },
  {
    title: "Partners Externos",
    description: "Consultoras especializadas para perfiles de nicho o alta complejidad.",
    icon: Globe
  }
];

// Slide 7: Evaluaciones
export const EVALUATION_MATRIX: EvaluationType[] = [
  { role: "Analistas", method: "Test Psicotécnico" },
  { role: "Líderes / Coord.", method: "Evaluación x Competencias" },
  { role: "Programa JP", method: "Assessment Center" }
];

// Slide 11: Onboarding Tips
export const ONBOARDING_TIPS: OnboardingTip[] = [
  { title: "Calidez Inmediata", description: "Un mensaje de WhatsApp antes del primer día baja la ansiedad." },
  { title: "Contexto Real", description: "Al presentarlo, contá algo personal (hobbies), no solo su CV." },
  { title: "El 'Buddy'", description: "Asignale un compañero guía para las preguntas informales." },
  { title: "Almuerzo de Equipo", description: "Bloqueá la agenda del equipo. El primer almuerzo no se negocia." },
  { title: "Kit de Bienvenida", description: "Asegurate que tenga su notebook y accesos listos al llegar." },
  { title: "Check-in de Cierre", description: "5 minutos al final del día: '¿Cómo te sentiste?'" },
];