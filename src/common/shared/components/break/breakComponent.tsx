import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/common/shared/components/break/break.module.scss';

export const BreakComponent = () => {
  const { isPlay, setPlay } = useGame();

  return (
    <div className={styles.break}>
      <ButtonComponent
        onClick={setPlay}
        className={styles.button}
      >
        {isPlay ? 'Pause' : 'The game is paused'} <span>Press to resume</span>
      </ButtonComponent>
      <div
        className={styles.backdrop}
        onClick={setPlay}
      ></div>
    </div>
  );
};
