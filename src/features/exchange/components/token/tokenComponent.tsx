import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Token } from '@/src/features/exchange/domain/token.ts';
import styles from '@/src/features/exchange/components/token/token.module.scss';

export const TokenComponent = ({ name, price, volume, change }: Token) => {
  return (
    <div className={styles.token}>
      <div className={styles.price}>
        <NumberComponent
          value={price}
          style="currency"
          notation="compact"
        />
      </div>
      <div className={classNames([styles.variation, change >= 0 ? styles.positive : styles.negative])}>
        {change > 0 ? '+' : '-'}
        <NumberComponent
          value={Math.abs(change)}
          notation="compact"
        />
      </div>
      <div className={styles.volume}>
        <NumberComponent
          value={volume}
          notation="compact"
        />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
