import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Frame } from '@/src/common/shared/components/frame/frame.ts';
import styles from '@/src/common/shared/components/frame/frame.module.scss';

export const FrameComponent = ({ children, className, ...props }: Frame) => {
  return (
    <div
      className={classNames([styles.frame, className])}
      {...props}
    >
      {children}
    </div>
  );
};
