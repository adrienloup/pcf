import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Dial } from '@/src/common/shared/components/dial/dial.ts';
import styles from '@/src/common/shared/components/dial/dial.module.scss';

export const DialComponent = ({ disabled, label, value, valueMax, notation, style, bonus }: Dial) => {
  return (
    <div className={classNames([styles.dial, disabled ? styles.disabled : ''])}>
      <NumberComponent
        className={styles.number}
        valueMax={valueMax}
        notation={notation}
        compactDisplay={notation == 'compact' ? 'short' : undefined}
        style={style}
        value={value}
      />
      {bonus}
      <span className={styles.label}>{label}</span>
    </div>
  );
};
