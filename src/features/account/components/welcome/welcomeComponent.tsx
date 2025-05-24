import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { LoggedComponent } from '@/src/features/account/components/welcome/logged/loggedComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/welcome/login/loginComponent.tsx';
import styles from '@/src/features/account/components/welcome/welcome.module.scss';

export const WelcomeComponent = () => {
  const { user } = useAccount();

  return (
    <article
      className={styles.welcome}
      role="article"
    >
      <h1>welcome!</h1>
      {user ? <LoggedComponent /> : <LoginComponent />}
    </article>
  );
};
