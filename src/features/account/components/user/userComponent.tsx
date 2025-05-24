import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import styles from '@/src/features/account/components/user/user.module.scss';

export const UserComponent = () => {
  const { user } = useAccount();

  return <div className={styles.user}>{user} connected</div>;
};
