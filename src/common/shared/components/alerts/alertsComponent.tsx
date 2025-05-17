import type { Children } from '@/src/common/shared/types/children.ts';
import styles from '@/src/common/shared/components/alerts/alerts.module.scss';

export const AlertsComponent = ({ children }: { children: Children }) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
