import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { StubbornComponent } from '@/src/features/account/components/stubborn/stubbornComponent.tsx';
import { LoggedComponent } from '@/src/features/account/components/logged/loggedComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/login/loginComponent.tsx';
import styles from '@/src/features/account/components/welcome/welcome.module.scss';

export const WelcomeComponent = () => {
  const { user } = useAccount();

  return (
    <article
      className={styles.welcome}
      role="article"
    >
      {user ? (
        <>
          <StubbornComponent />
          <LoggedComponent />
        </>
      ) : (
        <LoginComponent />
      )}
    </article>
  );
};
