export type Language = 'en' | 'fr';
export type Mode = 'dark' | 'light' | 'system';
export type Stage = 'dusk' | 'tumult' | 'cataclysm';
export type Theme = 'simplest' | 'mirror' | 'ultra';

export interface Settings {
  language: Language;
  mode: Mode;
  stage: Stage;
  theme: Theme;
}
