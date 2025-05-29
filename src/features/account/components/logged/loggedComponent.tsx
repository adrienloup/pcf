import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import styles from '@/src/features/account/components/logged/logged.module.scss';

export const LoggedComponent = () => {
  const { user } = useAccount();

  return <div className={styles.logged}>{user} connected</div>;
};
