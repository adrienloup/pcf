import { useCallback } from 'react';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { BonusComponent } from '@/src/common/shared/components/bonus/bonusComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const WireComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyWire = () => {
    const cost = factory.wireCost + (Math.random() * (1.25 - 0.25) + 0.25); // 0.25 et 1.25
    setFactory({ type: 'BUY_WIRE', cost });
  };

  const updateWireCost = useCallback(() => {
    const cost = factory.wireCost > 8 ? factory.wireCost - 0.26 : Math.random() * 8 + 12; // 0 et 1, 0 et 8, 12 et 20
    setFactory({ type: 'UPDATE_WIRE_COST', cost });
  }, [factory.wireCost]);

  useInterval(updateWireCost, 1e4);

  return (
    <DialsComponent>
      <DialComponent
        value={factory.wireCost}
        style="currency"
        notation="compact"
        label="wire cost"
        bonus={<BonusComponent value={factory.wireBonus} />}
      />
      <DialComponent
        value={factory.wire}
        notation="compact"
        label="inches wire"
      />
      <ClickerComponent
        className={styles.button}
        value={factory.wireBonus}
        prefix="+"
        suffix="wire"
        disabled={factory.funds < factory.wireCost}
        onClick={buyWire}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};
