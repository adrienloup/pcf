import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { LeadingComponent } from '@/src/features/account/components/welcome/leading/leadingComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/login/loginComponent.tsx';
import styles from '@/src/features/account/components/welcome/welcome.module.scss';

export const WelcomeComponent = () => {
  const { user } = useAccount();

  return (
    <article
      className={styles.welcome}
      role="article"
    >
      {user ? <LeadingComponent /> : <LoginComponent />}
    </article>
  );
};
