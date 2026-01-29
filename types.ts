import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  emoji: string; // Added for 3D aesthetic
  phase: string;
}

export interface TimingStat {
  role: string;
  range: string;
  color: string;
  emoji: string; // Added for 3D aesthetic
}

export interface SourcingChannel {
  title: string;
  description: string;
  icon: LucideIcon;
  emoji: string; // Added for 3D aesthetic
  percentage?: string; 
}

export interface EvaluationType {
  role: string;
  method: string;
  focus: string;
  emoji: string; // Added for 3D aesthetic
}

export interface OnboardingTask {
  id: string;
  content: string;
  tag: 'Líder' | 'RRHH' | 'Buddy' | 'Equipo' | 'TBP' | 'Talento';
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
  leaderTip?: string; 
}