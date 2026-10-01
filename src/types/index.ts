export type PageType = 'home' | 'sorting' | 'game' | 'lookup' | 'journey' | 'habits' | 'handbook' | 'about';

export type WasteCategoryType = 'organic' | 'recyclable' | 'inorganic' | 'hazardous';

export interface WasteCategory {
  id: WasteCategoryType;
  name: string;
  subtitle: string;
  colorName: string;
  themeColor: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    light: string;
    binColor: string;
  };
  binLabel: string;
  description: string;
  examples: string[];
  treatment: string;
  dos: string[];
  donts: string[];
}

export interface WasteItem {
  id: string;
  name: string;
  category: WasteCategoryType;
  icon: string;
  tags: string[];
  tips: string;
  handlingSteps: string[];
  commonMistake?: string;
}

export interface GameQuestion {
  id: string;
  name: string;
  emoji: string;
  imageHint?: string;
  category: WasteCategoryType;
  explanation: string;
  tip: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  fact: string;
  iconName: string;
}

export interface WasteJourney {
  id: string;
  material: string;
  summary: string;
  impact: string;
  steps: JourneyStep[];
}

export interface HabitItem {
  id: string;
  title: string;
  description: string;
  category: 'refuse' | 'reduce' | 'reuse' | 'repurpose' | 'recycle';
  points: number;
  schoolContext: string;
}

export interface WasteLookupItem {
  id: string;
  name: string;
  category: WasteCategoryType;
  categoryLabel: string;
  description: string;
  treatment: string;
  note: string;
  emoji: string;
  tags?: string[];
}

