import { useLayoutEffect, useState } from 'react';
import type { Children } from '@/src/common/shared/types/children.ts';
import styles from '@/src/common/shared/components/alerts/alerts.module.scss';

export const AlertsComponent = ({ children }: { children: Children }) => {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const onResize = () => {
      setHeight(document.body.offsetHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      className={styles.alerts}
      style={{ height }}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
