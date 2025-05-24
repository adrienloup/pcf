import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/common/shared/components/turban/turban.module.scss';

export const StubbornComponent = () => {
  const { user, setLogout } = useAccount();

  return (
    <TurbanComponent>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        Connecté en tant que {user}
      </TitleComponent>
      <ButtonComponent
        className={styles.button}
        onClick={setLogout}
      >
        disconnect
      </ButtonComponent>
    </TurbanComponent>
  );
};
