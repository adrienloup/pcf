import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Bonus } from '@/src/common/shared/components/bonus/bonus.ts';
import styles from '@/src/common/shared/components/bonus/bonus.module.scss';

export const BonusComponent = ({ className, value, prefix, status = 'info' }: Bonus) => {
  return (
    <span className={classNames([styles.bonus, styles[status], className])}>
      {prefix}
      {value ? (
        <NumberComponent
          value={value}
          notation="compact"
        />
      ) : null}
    </span>
  );
};
