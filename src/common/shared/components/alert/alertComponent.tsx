import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import type { Alert } from '@/src/common/shared/components/alert/alert.ts';
import styles from '@/src/common/shared/components/alert/alert.module.scss';

export const AlertComponent = ({ text, status = 'warning', timeout = 3e3, close = true, remove }: Alert) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  // const getStyle = useCallback((timeout: number) => ({ '--timeout': `${timeout}ms` }) as CSSProperties, []);

  useEffect(() => {
    if (timeout > 0) {
      outTimer.current = setTimeout(() => {
        setOut(true);
      }, timeout) as unknown as number;
      // Removes the component after the exit CSS animation
      removeTimer.current = setTimeout(() => {
        remove?.();
      }, timeout + 400) as unknown as number; // Add CSS animation duration
    }
    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <div
      className={classNames([styles.alert, styles[status], timeout > 0 ? styles.in : '', out ? styles.out : ''])}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.inner}>
        <div className={styles.text}>{text}</div>
        {close && (
          <ButtonComponent
            className={styles.button}
            onClick={remove}
          >
            {/*<IconComponent icon="close" />*/}x
          </ButtonComponent>
        )}
        {/*{timeout > 0 && (*/}
        {/*  <div*/}
        {/*    className={styles.progress}*/}
        {/*    style={getStyle(timeout)}*/}
        {/*  ></div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};
