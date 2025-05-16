import { createContext } from 'react';
import type { Settings, Language, Mode, Stage, Theme } from '@/src/app/layout/settings/settings.ts';

export const SettingsContext = createContext<
  | {
      settings: Settings;
      setLanguage: (lang: Language) => void;
      setMode: (mode: Mode) => void;
      setStage: (stage: Stage) => void;
      setTheme: (theme: Theme) => void;
    }
  | undefined
>(undefined);
