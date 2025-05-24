import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/app/layout/controls/controls.module.scss';

export const ControlsComponent = () => {
  const { user, setLogout } = useAccount();
  const { isPlay, setPlay } = useGame();

  return (
    <div className={styles.controls}>
      <div className={styles.title}>controls</div>
      <div className={styles.control}>
        <ButtonComponent
          className={styles.button}
          disabled={!user}
          onClick={setLogout}
        >
          disconnect
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={!user}
          onClick={setPlay}
        >
          {isPlay ? 'pause' : 'start'}
        </ButtonComponent>
      </div>
    </div>
  );
};
