import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/common/shared/components/break/break.module.scss';

export const BreakComponent = () => {
  const { t } = useTranslation();
  const { isPlay, setPlay } = useGame();
  const label = `${isPlay ? t('app.start') : t('app.stop')} <span>${t('app.press')}</span>`;

  return (
    <div className={styles.break}>
      <ButtonComponent
        onClick={setPlay}
        className={styles.button}
      >
        <span
          className={styles.label}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </ButtonComponent>
      <div
        className={styles.backdrop}
        onClick={setPlay}
      ></div>
    </div>
  );
};
