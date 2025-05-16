import { useSettings } from '@/src/app/layout/settings/useSettings.ts';

export const SettingsComponent = () => {
  const { settings, setLanguage, setMode, setStage, setTheme } = useSettings();

  return (
    <div>
      <div>
        <span>Language : {settings.language}</span>
        <button onClick={() => setLanguage('en')}>en</button>
        <button onClick={() => setLanguage('fr')}>fr</button>
      </div>
      <div>
        <span>Stage : {settings.stage}</span>
        <button onClick={() => setStage('dusk')}>dusk</button>
        <button onClick={() => setStage('tumult')}>tumult</button>
        <button onClick={() => setStage('cataclysm')}>cataclysm</button>
      </div>
      <div>
        <span>Theme : {settings.theme}</span>
        <button onClick={() => setTheme('simplest')}>simplest</button>
        <button onClick={() => setTheme('mirror')}>mirror</button>
        <button onClick={() => setTheme('ultra')}>ultra</button>
      </div>
      <div>
        <span>Mode : {settings.mode}</span>
        <button onClick={() => setMode('dark')}>dark</button>
        <button onClick={() => setMode('light')}>light</button>
      </div>
    </div>
  );
};
