import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
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
}

export interface EvaluationType {
  role: string;
  method: string;
}

export interface OnboardingTip {
  title: string;
  description: string;
}
