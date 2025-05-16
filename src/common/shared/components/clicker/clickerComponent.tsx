import { type CSSProperties, type MouseEvent, useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Clicker, ClickerValue } from '@/src/common/shared/components/clicker/clicker.ts';
import styles from '@/src/common/shared/components/clicker/clicker.module.scss';

export const ClickerComponent = ({
  children,
  className,
  disabled,
  currency,
  prefix,
  suffix,
  value = 1,
  onClick,
  ...props
}: Clicker) => {
  const [values, setValues] = useState<ClickerValue[]>([]);
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    return () => timeouts.current.forEach((id) => clearTimeout(id));
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const safeX = clientX === 0 ? rect.left : clientX;
    const safeY = clientY === 0 ? rect.top : clientY;

    setValues((prev) => [
      ...prev,
      {
        id: Date.now(),
        x: safeX - rect.left,
        y: safeY - rect.top,
      },
    ]);

    const timeoutId = window.setTimeout(() => {
      setValues((prev) => prev.slice(1));
    }, 4e2);

    timeouts.current.push(timeoutId);

    onClick();
  };

  const getStyle = (x: number, y: number) => ({ left: x, top: y }) as CSSProperties;

  return (
    <ButtonComponent
      className={classNames([styles.button, className])}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
      {values.map((v) => (
        <span
          key={v.id}
          className={styles.value}
          style={getStyle(v.x, v.y)}
        >
          {prefix}
          <NumberComponent
            value={value}
            style={currency ? 'currency' : undefined}
            notation="compact"
          />
          {suffix ? ` ${suffix}` : null}
        </span>
      ))}
    </ButtonComponent>
  );
};
