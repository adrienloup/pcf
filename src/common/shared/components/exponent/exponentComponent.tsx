import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Exponent } from '@/src/common/shared/components/exponent/exponent.ts';
import styles from '@/src/common/shared/components/exponent/exponent.module.scss';

export const ExponentComponent = ({ className, value }: Exponent) => {
  return (
    <span className={classNames([styles.exponent, className])}>
      <NumberComponent
        value={value}
        notation="compact"
      />
    </span>
  );
};
