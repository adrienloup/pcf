import { useContext } from 'react';
import { SettingsContext } from '@/src/app/layout/settings/settingsContext.ts';

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
