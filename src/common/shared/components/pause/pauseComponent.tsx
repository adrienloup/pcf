// import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/common/shared/components/pause/pause.module.scss';

export const PauseComponent = () => {
  const { t } = useTranslation();
  const { isPlay, setPlay } = useGame();
  const label = `${isPlay ? t('app.start') : t('app.stop')} <span>${t('app.press')}</span>`;
  // const backdropRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (backdropRef.current) {
  //     backdropRef.current.innerHTML = '';
  //     for (let i = 0; i < 20; i++) {
  //       const div = document.createElement('div');
  //       backdropRef.current.appendChild(div);
  //     }
  //   }
  // }, []);

  return (
    <div className={styles.pause}>
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
        // ref={backdropRef}
        className={styles.backdrop}
        onClick={setPlay}
      ></div>
    </div>
  );
};
