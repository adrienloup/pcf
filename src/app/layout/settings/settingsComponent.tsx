import { useSettings } from '@/src/app/layout/settings/useSettings.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/app/layout/settings/settings.module.scss';

export const SettingsComponent = () => {
  // const { setLanguage, setMode, setStage, setTheme } = useSettings();
  const { setLanguage, setTheme, setMode } = useSettings();

  return (
    <div className={styles.settings}>
      <div className={styles.title}>settings</div>
      <div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={() => setLanguage('en')}
        >
          en
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setLanguage('fr')}
        >
          fr
        </ButtonComponent>
      </div>
      {/*<div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={() => setStage('dusk')}
          tabIndex={open ? 0 : -1}
        >
          dusk
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setStage('tumult')}
          tabIndex={open ? 0 : -1}
        >
          tumult
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setStage('cataclysm')}
          tabIndex={open ? 0 : -1}
        >
          cataclysm
        </ButtonComponent>
      </div>*/}
      <div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('simplest')}
        >
          simplest
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('mirror')}
        >
          mirror
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('ultra')}
        >
          ultra
        </ButtonComponent>
      </div>
      <div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={() => setMode('dark')}
        >
          dark
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setMode('light')}
        >
          light
        </ButtonComponent>
      </div>
    </div>
  );
};
