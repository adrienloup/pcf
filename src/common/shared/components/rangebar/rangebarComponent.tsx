import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Rangebar } from '@/src/common/shared/components/rangebar/rangebar.ts';
import styles from '@/src/common/shared/components/rangebar/rangebar.module.scss';

export const RangebarComponent = ({ className, min, max, step, value, disabled, onChange }: Rangebar) => {
  return (
    <input
      className={classNames([styles.rangebar, className])}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
