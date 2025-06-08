import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Dial } from '@/src/common/shared/components/dial/dial.ts';
import styles from '@/src/common/shared/components/dial/dial.module.scss';

export const DialComponent = ({
  disabled,
  label,
  value,
  valueMax,
  stringValue,
  unit,
  decimal,
  tile,
  styleCss,
}: Dial) => {
  return (
    <div
      className={classNames([styles.dial, disabled ? styles.disabled : ''])}
      style={styleCss}
    >
      {stringValue}
      <NumberComponent
        value={value}
        valueMax={valueMax}
        unit={unit}
        decimal={decimal}
      />
      {tile}
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
