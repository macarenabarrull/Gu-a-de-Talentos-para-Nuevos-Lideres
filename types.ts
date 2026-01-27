import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  phase: string;
}

export interface TimingStat {
  role: string;
  range: string;
  color: string;
}

export interface SourcingChannel {
  title: string;
  description: string;
  icon: LucideIcon;
  percentage?: string; // Added for funnel visualization
}

export interface EvaluationType {
  role: string;
  method: string;
  focus: string;
}

export interface OnboardingTask {
  id: string;
  content: string;
  tag: 'Líder' | 'RRHH' | 'Buddy' | 'Equipo';
}

export interface KanbanColumn {
  id: string;
  title: string;
  emoji: string;
  tasks: OnboardingTask[];
}

export interface StarStep {
  letter: string;
  meaning: string;
  question: string;
  color: string;
}

export interface OnboardingTip {
  title: string;
  description: string;
}