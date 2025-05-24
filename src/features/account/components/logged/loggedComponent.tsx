import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/features/account/components/logged/logged.module.scss';

export const LoggedComponent = () => {
  const { user } = useAccount();

  return (
    <div className={styles.logged}>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        Connecté en tant que {user}
      </TitleComponent>
      <div>progression</div>
      <ButtonComponent
        className={styles.button}
        to={'/pcf/factory'}
      >
        continuer
      </ButtonComponent>
    </div>
  );
};
