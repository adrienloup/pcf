import { useSettings } from '@/src/app/layout/settings/useSettings.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/app/layout/settings/settings.module.scss';

export const SettingsComponent = ({ open }: { open: boolean }) => {
  const { setLanguage, setMode, setStage, setTheme } = useSettings();
  const { isPlay, setPlay } = useGame();

  return (
    <div className={styles.settings}>
      <div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={() => setLanguage('en')}
          tabIndex={open ? 0 : -1}
        >
          en
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setLanguage('fr')}
          tabIndex={open ? 0 : -1}
        >
          fr
        </ButtonComponent>
      </div>
      <div className={styles.setting}>
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
      </div>
      <div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('simplest')}
          tabIndex={open ? 0 : -1}
        >
          simplest
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('mirror')}
          tabIndex={open ? 0 : -1}
        >
          mirror
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setTheme('ultra')}
          tabIndex={open ? 0 : -1}
        >
          ultra
        </ButtonComponent>
      </div>
      <div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={() => setMode('dark')}
          tabIndex={open ? 0 : -1}
        >
          dark
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={() => setMode('light')}
          tabIndex={open ? 0 : -1}
        >
          light
        </ButtonComponent>
      </div>
      <div className={styles.setting}>
        <ButtonComponent
          className={styles.button}
          onClick={setPlay}
          tabIndex={open ? 0 : -1}
        >
          {isPlay ? 'pause' : 'start'}
        </ButtonComponent>
      </div>
    </div>
  );
};
