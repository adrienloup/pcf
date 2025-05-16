import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Turban } from '@/src/common/shared/components/turban/turban.ts';
import styles from '@/src/common/shared/components/turban/turban.module.scss';

export const TurbanComponent = ({ children, className, ...props }: Turban) => {
  return (
    <div
      className={classNames([styles.turban, className])}
      {...props}
    >
      {children}
    </div>
  );
};
