import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';
import { classNames } from '@/src/common/shared/utils/classNames.ts';

export const CashComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.cash}
        label="Cash"
        unit="currency"
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          aria-label="Decrease cash"
          value={100}
          prefix="-"
          suffix="cash"
          disabled={factory.cash <= 0}
          onClick={() => setFactory({ type: 'DECREASE_CASH' })}
        >
          -
        </ClickerComponent>
        <ClickerComponent
          className={styles.button}
          aria-label="Increase cash"
          value={100}
          prefix="+"
          suffix="cash"
          disabled={factory.funds < 100}
          onClick={() => setFactory({ type: 'INCREASE_CASH' })}
        >
          +
        </ClickerComponent>
        <ClickerComponent
          className={classNames([styles.button, styles.auto])}
          value={factory.cashRef}
          prefix="+"
          suffix="cash"
          disabled={factory.cash <= 0}
          onClick={() => setFactory({ type: 'WITHDRAW_CASH' })}
        >
          withdraw
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};
