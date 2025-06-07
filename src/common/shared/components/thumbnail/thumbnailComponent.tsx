import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Thumbnail } from '@/src/common/shared/components/thumbnail/thumbnail.ts';
import styles from '@/src/common/shared/components/thumbnail/thumbnail.module.scss';

export const ThumbnailComponent = ({ className, value, label, status = 'info' }: Thumbnail) => {
  return (
    <span className={classNames([styles.thumbnail, styles[status], className])}>
      {label}
      {value ? (
        <NumberComponent
          value={value}
          notation="compact"
        />
      ) : null}
    </span>
  );
};
