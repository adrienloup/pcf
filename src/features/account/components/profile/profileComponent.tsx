import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/login/loginComponent.tsx';
import styles from '@/src/features/account/components/profile/profile.module.scss';

export const ProfileComponent = () => {
  const { user, setLogout } = useAccount();

  return (
    <article
      className={styles.profile}
      role="article"
    >
      {user ? (
        <>
          <TurbanComponent>
            <TitleComponent
              tag="h1"
              className={styles.title}
            >
              {user} profile
            </TitleComponent>
            <ButtonComponent
              className={styles.button}
              onClick={setLogout}
            >
              disconnect
            </ButtonComponent>
          </TurbanComponent>
          <div className={styles.inner}>progress blabla</div>
        </>
      ) : (
        <LoginComponent />
      )}
    </article>
  );
};
