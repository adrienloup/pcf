import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Bonus } from '@/src/common/shared/components/bonus/bonus.ts';
import styles from '@/src/common/shared/components/bonus/bonus.module.scss';

export const BonusComponent = ({ className, value, prefix }: Bonus) => {
  return (
    <span className={classNames([styles.bonus, className])}>
      {prefix}
      <NumberComponent
        value={value}
        notation="compact"
      />
    </span>
  );
};
