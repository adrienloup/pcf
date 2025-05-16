import { useCallback, useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { SettingsContext } from '@/src/app/layout/settings/settingsContext.ts';
import { SETTINGS_KEY } from '@/src/app/layout/settings/settingsKey.ts';
import { SETTINGS_STATE } from '@/src/app/layout/settings/settingsState.ts';
import type { Settings, Language, Mode, Stage, Theme } from '@/src/app/layout/settings/settings.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

export const SettingsProvider = ({ children }: { children: Children }) => {
  const [settings, setSettings] = useLocalStorage<Settings>(SETTINGS_KEY, SETTINGS_STATE);
  const { i18n } = useTranslation();

  const updateLanguage = useCallback((language: Language) => {
    i18n.changeLanguage(language).then(() => undefined);
    document.documentElement.lang = language;
  }, []);

  const updateClass = useCallback((mode: Mode, stage: Stage, theme: Theme) => {
    const classMap = {
      _dark_3mma_0: mode === 'dark' || mode === 'system',
      _light_3mma_0: mode === 'light',
      _dusk_3mma_0: stage === 'dusk',
      _tumult_3mma_0: stage === 'tumult',
      _cataclysm_3mma_0: stage === 'cataclysm',
      _simplest_3mma_0: theme === 'simplest',
      _mirror_3mma_0: theme === 'mirror',
      _ultra_3mma_0: theme === 'ultra',
    };
    for (const [name, condition] of Object.entries(classMap)) {
      document.body.classList.toggle(name, condition);
    }
  }, []);

  useLayoutEffect(() => {
    updateClass(settings.mode, settings.stage, settings.theme);
    updateLanguage(settings.language);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      const mode = event.matches ? 'dark' : 'light';
      updateClass(mode, settings.stage, settings.theme);
      setSettings({ ...settings, mode });
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const setMode = (mode: Mode) => {
    updateClass(mode, settings.stage, settings.theme);
    setSettings({ ...settings, mode });
  };

  const setStage = (stage: Stage) => {
    updateClass(settings.mode, stage, settings.theme);
    setSettings({ ...settings, stage });
  };

  const setTheme = (theme: Theme) => {
    updateClass(settings.mode, settings.stage, theme);
    setSettings({ ...settings, theme });
  };

  const setLanguage = (language: Language) => {
    updateLanguage(language);
    setSettings({ ...settings, language });
  };

  return (
    <SettingsContext.Provider value={{ settings, setLanguage, setMode, setStage, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};
