import type { Main } from '@/src/app/layout/main/main.ts';
import styles from '@/src/app/layout/main/main.module.scss';

export const MainComponent = ({ children }: Main) => {
  return (
    <main
      className={styles.main}
      role="main"
    >
      {children}
    </main>
  );
};
